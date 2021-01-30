"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const date_fns_1 = require("date-fns");
const gotrue_js_1 = tslib_1.__importDefault(require("gotrue-js"));
const secure_random_password_1 = tslib_1.__importDefault(require("secure-random-password"));
const auth = new gotrue_js_1.default({
    APIUrl: 'https://virtual-furnal-equinox.netlify.app/.netlify/identity',
    audience: '',
    setCookie: false
});
const sigHeaderName = 'X-Webconnex-Signature';
const isVerified = ({ headers, body }) => {
    var _a;
    if (body === undefined || body === null || body === '') {
        throw new Error('Request body is empty!');
    }
    const sig = (_a = headers[sigHeaderName]) !== null && _a !== void 0 ? _a : '';
    const hmac = crypto_1.default.createHmac('sha256', process.env.REGFOX_WEBHOOK_SECRET);
    const digest = Buffer.from(hmac.update(body).digest('hex'), 'utf-8');
    const checksum = Buffer.from(sig, 'utf-8');
    if (checksum.length !== digest.length || !crypto_1.default.timingSafeEqual(digest, checksum)) {
        throw new Error(`Request body digest [${digest.toString('utf-8')}] did not match ${sigHeaderName} [${checksum.toString('utf-8')}]`);
    }
    // If no errors are thrown, then the payload is fine.
    return true;
};
const createUsersFromPayload = ({ data }) => (data.registrants.map(({ data }) => {
    var _a, _b, _c;
    const email = (_a = data.find(o => o.key === 'email')) === null || _a === void 0 ? void 0 : _a.value;
    const ticketType = (_b = data.find(o => o.key === 'registrationOptions')) === null || _b === void 0 ? void 0 : _b.value;
    const dob = (_c = data.find(o => o.key === 'dateOfBirth')) === null || _c === void 0 ? void 0 : _c.value;
    const password = secure_random_password_1.default.randomPassword({
        characters: [secure_random_password_1.default.lower, secure_random_password_1.default.upper, secure_random_password_1.default.digits],
        length: 16
    });
    const roles = [];
    if (ticketType === undefined || email === undefined || dob === undefined) {
        throw new Error('User has invalid ticket type and/or DOB!');
    }
    else {
        const DOB = new Date(dob);
        if (date_fns_1.differenceInYears(new Date('2021-03-19'), DOB) >= 18) {
            roles.push('adult');
        }
        roles.push(ticketType);
    }
    return {
        email: email,
        password: password,
        roles: roles
    };
}));
const signupUser = ({ email, password, roles }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield auth.signup(email, password, { app_metadata: { roles: roles } });
});
const handler = (event) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!isVerified(event)) {
            throw new Error('Request body was not signed or verification failed!');
        }
        // If verification passes, then body is not null or the empty string.
        const data = JSON.parse(event.body);
        // Convert the payload into a list of users.
        const users = createUsersFromPayload(data);
        // Attempt to sign up every user in the list.
        yield Promise.all(users.map((user) => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return yield signupUser(user); })));
        // If everything worked, return 200.
        const ok = {
            statusCode: 200,
            body: JSON.stringify({ received: true })
        };
        return ok;
    }
    catch (err) {
        const notOk = {
            statusCode: 400,
            body: `Webhook Error: ${err.message}`
        };
        return notOk;
    }
});
exports.default = handler;
