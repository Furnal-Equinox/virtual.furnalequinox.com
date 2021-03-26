/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<SiteSiteMetadataAuthor>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly logo: Maybe<Scalars['String']>;
};

type SiteSiteMetadataAuthor = {
  readonly name: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageContext = {
  readonly isSfw: Maybe<Scalars['Boolean']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly nextTitle: Maybe<Scalars['String']>;
  readonly nextSlug: Maybe<Scalars['String']>;
  readonly prevTitle: Maybe<Scalars['String']>;
  readonly prevSlug: Maybe<Scalars['String']>;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};


type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly fileAbsolutePath: Maybe<Scalars['String']>;
  readonly fields: Maybe<MarkdownRemarkFields>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
  readonly layout: Maybe<Scalars['String']>;
  readonly kind: Maybe<Scalars['String']>;
  readonly isAdult: Maybe<Scalars['Boolean']>;
  readonly isPremium: Maybe<Scalars['Boolean']>;
  readonly description: Maybe<Scalars['String']>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly url: Maybe<Scalars['String']>;
  readonly banner: Maybe<MarkdownRemarkFrontmatterBanner>;
  readonly images: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterImages>>>;
  readonly gifs: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterGifs>>>;
  readonly social: Maybe<MarkdownRemarkFrontmatterSocial>;
  readonly streaming: Maybe<MarkdownRemarkFrontmatterStreaming>;
  readonly dealer: Maybe<Scalars['String']>;
  readonly artist: Maybe<Scalars['String']>;
  readonly image: Maybe<File>;
  readonly desc: Maybe<Scalars['String']>;
  readonly djLineup: Maybe<MarkdownRemarkFrontmatterDjLineup>;
  readonly schedule: Maybe<MarkdownRemarkFrontmatterSchedule>;
  readonly vrChatWorldLinks: Maybe<Scalars['String']>;
  readonly staff: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly date: Maybe<Scalars['Date']>;
  readonly path: Maybe<Scalars['String']>;
  readonly category: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly limited: Maybe<Scalars['Boolean']>;
};


type MarkdownRemarkFrontmatter_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterBanner = {
  readonly imgFile: Maybe<File>;
  readonly desc: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterImages = {
  readonly imgFile: Maybe<File>;
  readonly desc: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterGifs = {
  readonly imgFile: Maybe<File>;
  readonly desc: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterSocial = {
  readonly behance: Maybe<Scalars['String']>;
  readonly deviantart: Maybe<Scalars['String']>;
  readonly discord: Maybe<Scalars['String']>;
  readonly etsy: Maybe<Scalars['String']>;
  readonly facebook: Maybe<Scalars['String']>;
  readonly flickr: Maybe<Scalars['String']>;
  readonly furaffinity: Maybe<Scalars['String']>;
  readonly github: Maybe<Scalars['String']>;
  readonly instagram: Maybe<Scalars['String']>;
  readonly other: Maybe<Scalars['String']>;
  readonly picarto: Maybe<Scalars['String']>;
  readonly pinterest: Maybe<Scalars['String']>;
  readonly steam: Maybe<Scalars['String']>;
  readonly telegram: Maybe<Scalars['String']>;
  readonly tiktok: Maybe<Scalars['String']>;
  readonly tumblr: Maybe<Scalars['String']>;
  readonly twitch: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly youtube: Maybe<Scalars['String']>;
  readonly patreon: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterStreaming = {
  readonly sunday: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterStreamingSunday>>>;
  readonly saturday: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterStreamingSaturday>>>;
  readonly friday: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterStreamingFriday>>>;
};

type MarkdownRemarkFrontmatterStreamingSunday = {
  readonly start: Maybe<Scalars['String']>;
  readonly end: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterStreamingSaturday = {
  readonly start: Maybe<Scalars['String']>;
  readonly end: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterStreamingFriday = {
  readonly start: Maybe<Scalars['String']>;
  readonly end: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterDjLineup = {
  readonly friday: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterDjLineupFriday>>>;
  readonly saturday: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterDjLineupSaturday>>>;
  readonly sunday: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterDjLineupSunday>>>;
};

type MarkdownRemarkFrontmatterDjLineupFriday = {
  readonly time: Maybe<Scalars['String']>;
  readonly dj: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterDjLineupSaturday = {
  readonly time: Maybe<Scalars['String']>;
  readonly dj: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterDjLineupSunday = {
  readonly time: Maybe<Scalars['String']>;
  readonly dj: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterSchedule = {
  readonly friday: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterScheduleFriday>>>;
  readonly saturday: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterScheduleSaturday>>>;
  readonly sunday: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFrontmatterScheduleSunday>>>;
};

type MarkdownRemarkFrontmatterScheduleFriday = {
  readonly time: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly host: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterScheduleSaturday = {
  readonly time: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly host: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterScheduleSunday = {
  readonly time: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly host: Maybe<Scalars['String']>;
};

type MarkdownRemarkFields = {
  readonly slug: Maybe<Scalars['String']>;
};

type LocalSearchDealersSfw = Node & {
  /** The name of the index. */
  readonly name: Scalars['String'];
  /** The search engine used to create the index. */
  readonly engine: Scalars['String'];
  /** The search index created using the selected engine. */
  readonly index: Scalars['String'];
  /** A JSON object used to map search results to their data. */
  readonly store: Scalars['JSON'];
  /** Save the index to the site's static directory and return a public URL to it. */
  readonly publicIndexURL: Scalars['String'];
  /** Save the store to the site's static directory and return a public URL to it. */
  readonly publicStoreURL: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginPluginOptions = {
  readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>;
  readonly name: Maybe<Scalars['String']>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly env: Maybe<SitePluginPluginOptionsEnv>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly path: Maybe<Scalars['String']>;
  readonly engine: Maybe<Scalars['String']>;
  readonly engineOptions: Maybe<Scalars['String']>;
  readonly query: Maybe<Scalars['String']>;
  readonly ref: Maybe<Scalars['String']>;
  readonly index: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly store: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly implementation: Maybe<SitePluginPluginOptionsImplementation>;
  readonly sassOptions: Maybe<SitePluginPluginOptionsSassOptions>;
  readonly color: Maybe<Scalars['String']>;
  readonly showSpinner: Maybe<Scalars['Boolean']>;
  readonly disableOnDev: Maybe<Scalars['Boolean']>;
  readonly reportOnly: Maybe<Scalars['Boolean']>;
  readonly mergeScriptHashes: Maybe<Scalars['Boolean']>;
  readonly mergeStyleHashes: Maybe<Scalars['Boolean']>;
  readonly mergeDefaultDirectives: Maybe<Scalars['Boolean']>;
  readonly directives: Maybe<SitePluginPluginOptionsDirectives>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsPlugins = {
  readonly resolve: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsEnv = {
  readonly production: Maybe<SitePluginPluginOptionsEnvProduction>;
  readonly branch_deploy: Maybe<SitePluginPluginOptionsEnvBranch_deploy>;
  readonly deploy_preview: Maybe<SitePluginPluginOptionsEnvDeploy_preview>;
};

type SitePluginPluginOptionsEnvProduction = {
  readonly policy: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsEnvProductionPolicy>>>;
};

type SitePluginPluginOptionsEnvProductionPolicy = {
  readonly userAgent: Maybe<Scalars['String']>;
  readonly allow: Maybe<Scalars['String']>;
  readonly disallow: Maybe<Scalars['String']>;
  readonly crawlDelay: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsEnvBranch_deploy = {
  readonly policy: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsEnvBranch_deployPolicy>>>;
};

type SitePluginPluginOptionsEnvBranch_deployPolicy = {
  readonly userAgent: Maybe<Scalars['String']>;
  readonly disallow: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsEnvDeploy_preview = {
  readonly policy: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsEnvDeploy_previewPolicy>>>;
};

type SitePluginPluginOptionsEnvDeploy_previewPolicy = {
  readonly userAgent: Maybe<Scalars['String']>;
  readonly disallow: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly _xgraphqlxwebsitexschemaxgraphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsImplementation = {
  readonly info: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSassOptions = {
  readonly precision: Maybe<Scalars['Int']>;
  readonly indentedSyntax: Maybe<Scalars['Boolean']>;
  readonly indentType: Maybe<Scalars['String']>;
  readonly indentWidth: Maybe<Scalars['Int']>;
  readonly linefeed: Maybe<Scalars['String']>;
  readonly omitSourceMapUrl: Maybe<Scalars['Boolean']>;
  readonly sourceComments: Maybe<Scalars['Boolean']>;
  readonly sourceMapContents: Maybe<Scalars['Boolean']>;
  readonly sourceMapEmbed: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsDirectives = {
  readonly connect_src: Maybe<Scalars['String']>;
  readonly default_src: Maybe<Scalars['String']>;
  readonly font_src: Maybe<Scalars['String']>;
  readonly frame_src: Maybe<Scalars['String']>;
  readonly img_src: Maybe<Scalars['String']>;
  readonly media_src: Maybe<Scalars['String']>;
  readonly object_src: Maybe<Scalars['String']>;
  readonly script_src: Maybe<Scalars['String']>;
  readonly style_src: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly localSearchDealersSfw: Maybe<LocalSearchDealersSfw>;
  readonly allLocalSearchDealersSfw: LocalSearchDealersSfwConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_localSearchDealersSfwArgs = {
  name: Maybe<StringQueryOperatorInput>;
  engine: Maybe<StringQueryOperatorInput>;
  index: Maybe<StringQueryOperatorInput>;
  store: Maybe<JSONQueryOperatorInput>;
  publicIndexURL: Maybe<StringQueryOperatorInput>;
  publicStoreURL: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allLocalSearchDealersSfwArgs = {
  filter: Maybe<LocalSearchDealersSfwFilterInput>;
  sort: Maybe<LocalSearchDealersSfwSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly layout: Maybe<StringQueryOperatorInput>;
  readonly kind: Maybe<StringQueryOperatorInput>;
  readonly isAdult: Maybe<BooleanQueryOperatorInput>;
  readonly isPremium: Maybe<BooleanQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly banner: Maybe<MarkdownRemarkFrontmatterBannerFilterInput>;
  readonly images: Maybe<MarkdownRemarkFrontmatterImagesFilterListInput>;
  readonly gifs: Maybe<MarkdownRemarkFrontmatterGifsFilterListInput>;
  readonly social: Maybe<MarkdownRemarkFrontmatterSocialFilterInput>;
  readonly streaming: Maybe<MarkdownRemarkFrontmatterStreamingFilterInput>;
  readonly dealer: Maybe<StringQueryOperatorInput>;
  readonly artist: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<FileFilterInput>;
  readonly desc: Maybe<StringQueryOperatorInput>;
  readonly djLineup: Maybe<MarkdownRemarkFrontmatterDjLineupFilterInput>;
  readonly schedule: Maybe<MarkdownRemarkFrontmatterScheduleFilterInput>;
  readonly vrChatWorldLinks: Maybe<StringQueryOperatorInput>;
  readonly staff: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly limited: Maybe<BooleanQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterBannerFilterInput = {
  readonly imgFile: Maybe<FileFilterInput>;
  readonly desc: Maybe<StringQueryOperatorInput>;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkFrontmatterImagesFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterImagesFilterInput>;
};

type MarkdownRemarkFrontmatterImagesFilterInput = {
  readonly imgFile: Maybe<FileFilterInput>;
  readonly desc: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterGifsFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterGifsFilterInput>;
};

type MarkdownRemarkFrontmatterGifsFilterInput = {
  readonly imgFile: Maybe<FileFilterInput>;
  readonly desc: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterSocialFilterInput = {
  readonly behance: Maybe<StringQueryOperatorInput>;
  readonly deviantart: Maybe<StringQueryOperatorInput>;
  readonly discord: Maybe<StringQueryOperatorInput>;
  readonly etsy: Maybe<StringQueryOperatorInput>;
  readonly facebook: Maybe<StringQueryOperatorInput>;
  readonly flickr: Maybe<StringQueryOperatorInput>;
  readonly furaffinity: Maybe<StringQueryOperatorInput>;
  readonly github: Maybe<StringQueryOperatorInput>;
  readonly instagram: Maybe<StringQueryOperatorInput>;
  readonly other: Maybe<StringQueryOperatorInput>;
  readonly picarto: Maybe<StringQueryOperatorInput>;
  readonly pinterest: Maybe<StringQueryOperatorInput>;
  readonly steam: Maybe<StringQueryOperatorInput>;
  readonly telegram: Maybe<StringQueryOperatorInput>;
  readonly tiktok: Maybe<StringQueryOperatorInput>;
  readonly tumblr: Maybe<StringQueryOperatorInput>;
  readonly twitch: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly youtube: Maybe<StringQueryOperatorInput>;
  readonly patreon: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterStreamingFilterInput = {
  readonly sunday: Maybe<MarkdownRemarkFrontmatterStreamingSundayFilterListInput>;
  readonly saturday: Maybe<MarkdownRemarkFrontmatterStreamingSaturdayFilterListInput>;
  readonly friday: Maybe<MarkdownRemarkFrontmatterStreamingFridayFilterListInput>;
};

type MarkdownRemarkFrontmatterStreamingSundayFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterStreamingSundayFilterInput>;
};

type MarkdownRemarkFrontmatterStreamingSundayFilterInput = {
  readonly start: Maybe<StringQueryOperatorInput>;
  readonly end: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterStreamingSaturdayFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterStreamingSaturdayFilterInput>;
};

type MarkdownRemarkFrontmatterStreamingSaturdayFilterInput = {
  readonly start: Maybe<StringQueryOperatorInput>;
  readonly end: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterStreamingFridayFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterStreamingFridayFilterInput>;
};

type MarkdownRemarkFrontmatterStreamingFridayFilterInput = {
  readonly start: Maybe<StringQueryOperatorInput>;
  readonly end: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterDjLineupFilterInput = {
  readonly friday: Maybe<MarkdownRemarkFrontmatterDjLineupFridayFilterListInput>;
  readonly saturday: Maybe<MarkdownRemarkFrontmatterDjLineupSaturdayFilterListInput>;
  readonly sunday: Maybe<MarkdownRemarkFrontmatterDjLineupSundayFilterListInput>;
};

type MarkdownRemarkFrontmatterDjLineupFridayFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterDjLineupFridayFilterInput>;
};

type MarkdownRemarkFrontmatterDjLineupFridayFilterInput = {
  readonly time: Maybe<StringQueryOperatorInput>;
  readonly dj: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterDjLineupSaturdayFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterDjLineupSaturdayFilterInput>;
};

type MarkdownRemarkFrontmatterDjLineupSaturdayFilterInput = {
  readonly time: Maybe<StringQueryOperatorInput>;
  readonly dj: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterDjLineupSundayFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterDjLineupSundayFilterInput>;
};

type MarkdownRemarkFrontmatterDjLineupSundayFilterInput = {
  readonly time: Maybe<StringQueryOperatorInput>;
  readonly dj: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterScheduleFilterInput = {
  readonly friday: Maybe<MarkdownRemarkFrontmatterScheduleFridayFilterListInput>;
  readonly saturday: Maybe<MarkdownRemarkFrontmatterScheduleSaturdayFilterListInput>;
  readonly sunday: Maybe<MarkdownRemarkFrontmatterScheduleSundayFilterListInput>;
};

type MarkdownRemarkFrontmatterScheduleFridayFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterScheduleFridayFilterInput>;
};

type MarkdownRemarkFrontmatterScheduleFridayFilterInput = {
  readonly time: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterScheduleSaturdayFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterScheduleSaturdayFilterInput>;
};

type MarkdownRemarkFrontmatterScheduleSaturdayFilterInput = {
  readonly time: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFrontmatterScheduleSundayFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFrontmatterScheduleSundayFilterInput>;
};

type MarkdownRemarkFrontmatterScheduleSundayFilterInput = {
  readonly time: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFieldsFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.frontmatter.layout'
  | 'childrenMarkdownRemark.frontmatter.kind'
  | 'childrenMarkdownRemark.frontmatter.isAdult'
  | 'childrenMarkdownRemark.frontmatter.isPremium'
  | 'childrenMarkdownRemark.frontmatter.description'
  | 'childrenMarkdownRemark.frontmatter.keywords'
  | 'childrenMarkdownRemark.frontmatter.url'
  | 'childrenMarkdownRemark.frontmatter.banner.desc'
  | 'childrenMarkdownRemark.frontmatter.images'
  | 'childrenMarkdownRemark.frontmatter.images.desc'
  | 'childrenMarkdownRemark.frontmatter.gifs'
  | 'childrenMarkdownRemark.frontmatter.gifs.desc'
  | 'childrenMarkdownRemark.frontmatter.social.behance'
  | 'childrenMarkdownRemark.frontmatter.social.deviantart'
  | 'childrenMarkdownRemark.frontmatter.social.discord'
  | 'childrenMarkdownRemark.frontmatter.social.etsy'
  | 'childrenMarkdownRemark.frontmatter.social.facebook'
  | 'childrenMarkdownRemark.frontmatter.social.flickr'
  | 'childrenMarkdownRemark.frontmatter.social.furaffinity'
  | 'childrenMarkdownRemark.frontmatter.social.github'
  | 'childrenMarkdownRemark.frontmatter.social.instagram'
  | 'childrenMarkdownRemark.frontmatter.social.other'
  | 'childrenMarkdownRemark.frontmatter.social.picarto'
  | 'childrenMarkdownRemark.frontmatter.social.pinterest'
  | 'childrenMarkdownRemark.frontmatter.social.steam'
  | 'childrenMarkdownRemark.frontmatter.social.telegram'
  | 'childrenMarkdownRemark.frontmatter.social.tiktok'
  | 'childrenMarkdownRemark.frontmatter.social.tumblr'
  | 'childrenMarkdownRemark.frontmatter.social.twitch'
  | 'childrenMarkdownRemark.frontmatter.social.twitter'
  | 'childrenMarkdownRemark.frontmatter.social.youtube'
  | 'childrenMarkdownRemark.frontmatter.social.patreon'
  | 'childrenMarkdownRemark.frontmatter.streaming.sunday'
  | 'childrenMarkdownRemark.frontmatter.streaming.saturday'
  | 'childrenMarkdownRemark.frontmatter.streaming.friday'
  | 'childrenMarkdownRemark.frontmatter.dealer'
  | 'childrenMarkdownRemark.frontmatter.artist'
  | 'childrenMarkdownRemark.frontmatter.image.sourceInstanceName'
  | 'childrenMarkdownRemark.frontmatter.image.absolutePath'
  | 'childrenMarkdownRemark.frontmatter.image.relativePath'
  | 'childrenMarkdownRemark.frontmatter.image.extension'
  | 'childrenMarkdownRemark.frontmatter.image.size'
  | 'childrenMarkdownRemark.frontmatter.image.prettySize'
  | 'childrenMarkdownRemark.frontmatter.image.modifiedTime'
  | 'childrenMarkdownRemark.frontmatter.image.accessTime'
  | 'childrenMarkdownRemark.frontmatter.image.changeTime'
  | 'childrenMarkdownRemark.frontmatter.image.birthTime'
  | 'childrenMarkdownRemark.frontmatter.image.root'
  | 'childrenMarkdownRemark.frontmatter.image.dir'
  | 'childrenMarkdownRemark.frontmatter.image.base'
  | 'childrenMarkdownRemark.frontmatter.image.ext'
  | 'childrenMarkdownRemark.frontmatter.image.name'
  | 'childrenMarkdownRemark.frontmatter.image.relativeDirectory'
  | 'childrenMarkdownRemark.frontmatter.image.dev'
  | 'childrenMarkdownRemark.frontmatter.image.mode'
  | 'childrenMarkdownRemark.frontmatter.image.nlink'
  | 'childrenMarkdownRemark.frontmatter.image.uid'
  | 'childrenMarkdownRemark.frontmatter.image.gid'
  | 'childrenMarkdownRemark.frontmatter.image.rdev'
  | 'childrenMarkdownRemark.frontmatter.image.ino'
  | 'childrenMarkdownRemark.frontmatter.image.atimeMs'
  | 'childrenMarkdownRemark.frontmatter.image.mtimeMs'
  | 'childrenMarkdownRemark.frontmatter.image.ctimeMs'
  | 'childrenMarkdownRemark.frontmatter.image.atime'
  | 'childrenMarkdownRemark.frontmatter.image.mtime'
  | 'childrenMarkdownRemark.frontmatter.image.ctime'
  | 'childrenMarkdownRemark.frontmatter.image.birthtime'
  | 'childrenMarkdownRemark.frontmatter.image.birthtimeMs'
  | 'childrenMarkdownRemark.frontmatter.image.blksize'
  | 'childrenMarkdownRemark.frontmatter.image.blocks'
  | 'childrenMarkdownRemark.frontmatter.image.publicURL'
  | 'childrenMarkdownRemark.frontmatter.image.childrenImageSharp'
  | 'childrenMarkdownRemark.frontmatter.image.childrenMarkdownRemark'
  | 'childrenMarkdownRemark.frontmatter.image.id'
  | 'childrenMarkdownRemark.frontmatter.image.children'
  | 'childrenMarkdownRemark.frontmatter.desc'
  | 'childrenMarkdownRemark.frontmatter.djLineup.friday'
  | 'childrenMarkdownRemark.frontmatter.djLineup.saturday'
  | 'childrenMarkdownRemark.frontmatter.djLineup.sunday'
  | 'childrenMarkdownRemark.frontmatter.schedule.friday'
  | 'childrenMarkdownRemark.frontmatter.schedule.saturday'
  | 'childrenMarkdownRemark.frontmatter.schedule.sunday'
  | 'childrenMarkdownRemark.frontmatter.vrChatWorldLinks'
  | 'childrenMarkdownRemark.frontmatter.staff'
  | 'childrenMarkdownRemark.frontmatter.date'
  | 'childrenMarkdownRemark.frontmatter.path'
  | 'childrenMarkdownRemark.frontmatter.category'
  | 'childrenMarkdownRemark.frontmatter.tags'
  | 'childrenMarkdownRemark.frontmatter.limited'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.fileAbsolutePath'
  | 'childrenMarkdownRemark.fields.slug'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.frontmatter.layout'
  | 'childMarkdownRemark.frontmatter.kind'
  | 'childMarkdownRemark.frontmatter.isAdult'
  | 'childMarkdownRemark.frontmatter.isPremium'
  | 'childMarkdownRemark.frontmatter.description'
  | 'childMarkdownRemark.frontmatter.keywords'
  | 'childMarkdownRemark.frontmatter.url'
  | 'childMarkdownRemark.frontmatter.banner.desc'
  | 'childMarkdownRemark.frontmatter.images'
  | 'childMarkdownRemark.frontmatter.images.desc'
  | 'childMarkdownRemark.frontmatter.gifs'
  | 'childMarkdownRemark.frontmatter.gifs.desc'
  | 'childMarkdownRemark.frontmatter.social.behance'
  | 'childMarkdownRemark.frontmatter.social.deviantart'
  | 'childMarkdownRemark.frontmatter.social.discord'
  | 'childMarkdownRemark.frontmatter.social.etsy'
  | 'childMarkdownRemark.frontmatter.social.facebook'
  | 'childMarkdownRemark.frontmatter.social.flickr'
  | 'childMarkdownRemark.frontmatter.social.furaffinity'
  | 'childMarkdownRemark.frontmatter.social.github'
  | 'childMarkdownRemark.frontmatter.social.instagram'
  | 'childMarkdownRemark.frontmatter.social.other'
  | 'childMarkdownRemark.frontmatter.social.picarto'
  | 'childMarkdownRemark.frontmatter.social.pinterest'
  | 'childMarkdownRemark.frontmatter.social.steam'
  | 'childMarkdownRemark.frontmatter.social.telegram'
  | 'childMarkdownRemark.frontmatter.social.tiktok'
  | 'childMarkdownRemark.frontmatter.social.tumblr'
  | 'childMarkdownRemark.frontmatter.social.twitch'
  | 'childMarkdownRemark.frontmatter.social.twitter'
  | 'childMarkdownRemark.frontmatter.social.youtube'
  | 'childMarkdownRemark.frontmatter.social.patreon'
  | 'childMarkdownRemark.frontmatter.streaming.sunday'
  | 'childMarkdownRemark.frontmatter.streaming.saturday'
  | 'childMarkdownRemark.frontmatter.streaming.friday'
  | 'childMarkdownRemark.frontmatter.dealer'
  | 'childMarkdownRemark.frontmatter.artist'
  | 'childMarkdownRemark.frontmatter.image.sourceInstanceName'
  | 'childMarkdownRemark.frontmatter.image.absolutePath'
  | 'childMarkdownRemark.frontmatter.image.relativePath'
  | 'childMarkdownRemark.frontmatter.image.extension'
  | 'childMarkdownRemark.frontmatter.image.size'
  | 'childMarkdownRemark.frontmatter.image.prettySize'
  | 'childMarkdownRemark.frontmatter.image.modifiedTime'
  | 'childMarkdownRemark.frontmatter.image.accessTime'
  | 'childMarkdownRemark.frontmatter.image.changeTime'
  | 'childMarkdownRemark.frontmatter.image.birthTime'
  | 'childMarkdownRemark.frontmatter.image.root'
  | 'childMarkdownRemark.frontmatter.image.dir'
  | 'childMarkdownRemark.frontmatter.image.base'
  | 'childMarkdownRemark.frontmatter.image.ext'
  | 'childMarkdownRemark.frontmatter.image.name'
  | 'childMarkdownRemark.frontmatter.image.relativeDirectory'
  | 'childMarkdownRemark.frontmatter.image.dev'
  | 'childMarkdownRemark.frontmatter.image.mode'
  | 'childMarkdownRemark.frontmatter.image.nlink'
  | 'childMarkdownRemark.frontmatter.image.uid'
  | 'childMarkdownRemark.frontmatter.image.gid'
  | 'childMarkdownRemark.frontmatter.image.rdev'
  | 'childMarkdownRemark.frontmatter.image.ino'
  | 'childMarkdownRemark.frontmatter.image.atimeMs'
  | 'childMarkdownRemark.frontmatter.image.mtimeMs'
  | 'childMarkdownRemark.frontmatter.image.ctimeMs'
  | 'childMarkdownRemark.frontmatter.image.atime'
  | 'childMarkdownRemark.frontmatter.image.mtime'
  | 'childMarkdownRemark.frontmatter.image.ctime'
  | 'childMarkdownRemark.frontmatter.image.birthtime'
  | 'childMarkdownRemark.frontmatter.image.birthtimeMs'
  | 'childMarkdownRemark.frontmatter.image.blksize'
  | 'childMarkdownRemark.frontmatter.image.blocks'
  | 'childMarkdownRemark.frontmatter.image.publicURL'
  | 'childMarkdownRemark.frontmatter.image.childrenImageSharp'
  | 'childMarkdownRemark.frontmatter.image.childrenMarkdownRemark'
  | 'childMarkdownRemark.frontmatter.image.id'
  | 'childMarkdownRemark.frontmatter.image.children'
  | 'childMarkdownRemark.frontmatter.desc'
  | 'childMarkdownRemark.frontmatter.djLineup.friday'
  | 'childMarkdownRemark.frontmatter.djLineup.saturday'
  | 'childMarkdownRemark.frontmatter.djLineup.sunday'
  | 'childMarkdownRemark.frontmatter.schedule.friday'
  | 'childMarkdownRemark.frontmatter.schedule.saturday'
  | 'childMarkdownRemark.frontmatter.schedule.sunday'
  | 'childMarkdownRemark.frontmatter.vrChatWorldLinks'
  | 'childMarkdownRemark.frontmatter.staff'
  | 'childMarkdownRemark.frontmatter.date'
  | 'childMarkdownRemark.frontmatter.path'
  | 'childMarkdownRemark.frontmatter.category'
  | 'childMarkdownRemark.frontmatter.tags'
  | 'childMarkdownRemark.frontmatter.limited'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.fileAbsolutePath'
  | 'childMarkdownRemark.fields.slug'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<SiteSiteMetadataAuthorFilterInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly logo: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataAuthorFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.author.name'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.logo'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePageContextFilterInput = {
  readonly isSfw: Maybe<BooleanQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly nextTitle: Maybe<StringQueryOperatorInput>;
  readonly nextSlug: Maybe<StringQueryOperatorInput>;
  readonly prevTitle: Maybe<StringQueryOperatorInput>;
  readonly prevSlug: Maybe<StringQueryOperatorInput>;
};

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly env: Maybe<SitePluginPluginOptionsEnvFilterInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly engine: Maybe<StringQueryOperatorInput>;
  readonly engineOptions: Maybe<StringQueryOperatorInput>;
  readonly query: Maybe<StringQueryOperatorInput>;
  readonly ref: Maybe<StringQueryOperatorInput>;
  readonly index: Maybe<StringQueryOperatorInput>;
  readonly store: Maybe<StringQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly implementation: Maybe<SitePluginPluginOptionsImplementationFilterInput>;
  readonly sassOptions: Maybe<SitePluginPluginOptionsSassOptionsFilterInput>;
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly showSpinner: Maybe<BooleanQueryOperatorInput>;
  readonly disableOnDev: Maybe<BooleanQueryOperatorInput>;
  readonly reportOnly: Maybe<BooleanQueryOperatorInput>;
  readonly mergeScriptHashes: Maybe<BooleanQueryOperatorInput>;
  readonly mergeStyleHashes: Maybe<BooleanQueryOperatorInput>;
  readonly mergeDefaultDirectives: Maybe<BooleanQueryOperatorInput>;
  readonly directives: Maybe<SitePluginPluginOptionsDirectivesFilterInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

type SitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEnvFilterInput = {
  readonly production: Maybe<SitePluginPluginOptionsEnvProductionFilterInput>;
  readonly branch_deploy: Maybe<SitePluginPluginOptionsEnvBranch_deployFilterInput>;
  readonly deploy_preview: Maybe<SitePluginPluginOptionsEnvDeploy_previewFilterInput>;
};

type SitePluginPluginOptionsEnvProductionFilterInput = {
  readonly policy: Maybe<SitePluginPluginOptionsEnvProductionPolicyFilterListInput>;
};

type SitePluginPluginOptionsEnvProductionPolicyFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsEnvProductionPolicyFilterInput>;
};

type SitePluginPluginOptionsEnvProductionPolicyFilterInput = {
  readonly userAgent: Maybe<StringQueryOperatorInput>;
  readonly allow: Maybe<StringQueryOperatorInput>;
  readonly disallow: Maybe<StringQueryOperatorInput>;
  readonly crawlDelay: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsEnvBranch_deployFilterInput = {
  readonly policy: Maybe<SitePluginPluginOptionsEnvBranch_deployPolicyFilterListInput>;
};

type SitePluginPluginOptionsEnvBranch_deployPolicyFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsEnvBranch_deployPolicyFilterInput>;
};

type SitePluginPluginOptionsEnvBranch_deployPolicyFilterInput = {
  readonly userAgent: Maybe<StringQueryOperatorInput>;
  readonly disallow: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEnvDeploy_previewFilterInput = {
  readonly policy: Maybe<SitePluginPluginOptionsEnvDeploy_previewPolicyFilterListInput>;
};

type SitePluginPluginOptionsEnvDeploy_previewPolicyFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsEnvDeploy_previewPolicyFilterInput>;
};

type SitePluginPluginOptionsEnvDeploy_previewPolicyFilterInput = {
  readonly userAgent: Maybe<StringQueryOperatorInput>;
  readonly disallow: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly _xgraphqlxwebsitexschemaxgraphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsImplementationFilterInput = {
  readonly info: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSassOptionsFilterInput = {
  readonly precision: Maybe<IntQueryOperatorInput>;
  readonly indentedSyntax: Maybe<BooleanQueryOperatorInput>;
  readonly indentType: Maybe<StringQueryOperatorInput>;
  readonly indentWidth: Maybe<IntQueryOperatorInput>;
  readonly linefeed: Maybe<StringQueryOperatorInput>;
  readonly omitSourceMapUrl: Maybe<BooleanQueryOperatorInput>;
  readonly sourceComments: Maybe<BooleanQueryOperatorInput>;
  readonly sourceMapContents: Maybe<BooleanQueryOperatorInput>;
  readonly sourceMapEmbed: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsDirectivesFilterInput = {
  readonly connect_src: Maybe<StringQueryOperatorInput>;
  readonly default_src: Maybe<StringQueryOperatorInput>;
  readonly font_src: Maybe<StringQueryOperatorInput>;
  readonly frame_src: Maybe<StringQueryOperatorInput>;
  readonly img_src: Maybe<StringQueryOperatorInput>;
  readonly media_src: Maybe<StringQueryOperatorInput>;
  readonly object_src: Maybe<StringQueryOperatorInput>;
  readonly script_src: Maybe<StringQueryOperatorInput>;
  readonly style_src: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'context.isSfw'
  | 'context.slug'
  | 'context.nextTitle'
  | 'context.nextSlug'
  | 'context.prevTitle'
  | 'context.prevSlug'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.plugins'
  | 'pluginCreator.pluginOptions.plugins.resolve'
  | 'pluginCreator.pluginOptions.plugins.id'
  | 'pluginCreator.pluginOptions.plugins.name'
  | 'pluginCreator.pluginOptions.plugins.version'
  | 'pluginCreator.pluginOptions.plugins.pluginFilepath'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.short_name'
  | 'pluginCreator.pluginOptions.description'
  | 'pluginCreator.pluginOptions.start_url'
  | 'pluginCreator.pluginOptions.theme_color'
  | 'pluginCreator.pluginOptions.background_color'
  | 'pluginCreator.pluginOptions.display'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.output'
  | 'pluginCreator.pluginOptions.createLinkInHead'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.engine'
  | 'pluginCreator.pluginOptions.engineOptions'
  | 'pluginCreator.pluginOptions.query'
  | 'pluginCreator.pluginOptions.ref'
  | 'pluginCreator.pluginOptions.index'
  | 'pluginCreator.pluginOptions.store'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.outputPath'
  | 'pluginCreator.pluginOptions.emitSchema._xgraphqlxwebsitexschemaxgraphql'
  | 'pluginCreator.pluginOptions.implementation.info'
  | 'pluginCreator.pluginOptions.sassOptions.precision'
  | 'pluginCreator.pluginOptions.sassOptions.indentedSyntax'
  | 'pluginCreator.pluginOptions.sassOptions.indentType'
  | 'pluginCreator.pluginOptions.sassOptions.indentWidth'
  | 'pluginCreator.pluginOptions.sassOptions.linefeed'
  | 'pluginCreator.pluginOptions.sassOptions.omitSourceMapUrl'
  | 'pluginCreator.pluginOptions.sassOptions.sourceComments'
  | 'pluginCreator.pluginOptions.sassOptions.sourceMapContents'
  | 'pluginCreator.pluginOptions.sassOptions.sourceMapEmbed'
  | 'pluginCreator.pluginOptions.color'
  | 'pluginCreator.pluginOptions.showSpinner'
  | 'pluginCreator.pluginOptions.disableOnDev'
  | 'pluginCreator.pluginOptions.reportOnly'
  | 'pluginCreator.pluginOptions.mergeScriptHashes'
  | 'pluginCreator.pluginOptions.mergeStyleHashes'
  | 'pluginCreator.pluginOptions.mergeDefaultDirectives'
  | 'pluginCreator.pluginOptions.directives.connect_src'
  | 'pluginCreator.pluginOptions.directives.default_src'
  | 'pluginCreator.pluginOptions.directives.font_src'
  | 'pluginCreator.pluginOptions.directives.frame_src'
  | 'pluginCreator.pluginOptions.directives.img_src'
  | 'pluginCreator.pluginOptions.directives.media_src'
  | 'pluginCreator.pluginOptions.directives.object_src'
  | 'pluginCreator.pluginOptions.directives.script_src'
  | 'pluginCreator.pluginOptions.directives.style_src'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId'
  | 'componentPath';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter.title'
  | 'frontmatter.layout'
  | 'frontmatter.kind'
  | 'frontmatter.isAdult'
  | 'frontmatter.isPremium'
  | 'frontmatter.description'
  | 'frontmatter.keywords'
  | 'frontmatter.url'
  | 'frontmatter.banner.imgFile.sourceInstanceName'
  | 'frontmatter.banner.imgFile.absolutePath'
  | 'frontmatter.banner.imgFile.relativePath'
  | 'frontmatter.banner.imgFile.extension'
  | 'frontmatter.banner.imgFile.size'
  | 'frontmatter.banner.imgFile.prettySize'
  | 'frontmatter.banner.imgFile.modifiedTime'
  | 'frontmatter.banner.imgFile.accessTime'
  | 'frontmatter.banner.imgFile.changeTime'
  | 'frontmatter.banner.imgFile.birthTime'
  | 'frontmatter.banner.imgFile.root'
  | 'frontmatter.banner.imgFile.dir'
  | 'frontmatter.banner.imgFile.base'
  | 'frontmatter.banner.imgFile.ext'
  | 'frontmatter.banner.imgFile.name'
  | 'frontmatter.banner.imgFile.relativeDirectory'
  | 'frontmatter.banner.imgFile.dev'
  | 'frontmatter.banner.imgFile.mode'
  | 'frontmatter.banner.imgFile.nlink'
  | 'frontmatter.banner.imgFile.uid'
  | 'frontmatter.banner.imgFile.gid'
  | 'frontmatter.banner.imgFile.rdev'
  | 'frontmatter.banner.imgFile.ino'
  | 'frontmatter.banner.imgFile.atimeMs'
  | 'frontmatter.banner.imgFile.mtimeMs'
  | 'frontmatter.banner.imgFile.ctimeMs'
  | 'frontmatter.banner.imgFile.atime'
  | 'frontmatter.banner.imgFile.mtime'
  | 'frontmatter.banner.imgFile.ctime'
  | 'frontmatter.banner.imgFile.birthtime'
  | 'frontmatter.banner.imgFile.birthtimeMs'
  | 'frontmatter.banner.imgFile.blksize'
  | 'frontmatter.banner.imgFile.blocks'
  | 'frontmatter.banner.imgFile.publicURL'
  | 'frontmatter.banner.imgFile.childrenImageSharp'
  | 'frontmatter.banner.imgFile.childrenMarkdownRemark'
  | 'frontmatter.banner.imgFile.id'
  | 'frontmatter.banner.imgFile.children'
  | 'frontmatter.banner.desc'
  | 'frontmatter.images'
  | 'frontmatter.images.imgFile.sourceInstanceName'
  | 'frontmatter.images.imgFile.absolutePath'
  | 'frontmatter.images.imgFile.relativePath'
  | 'frontmatter.images.imgFile.extension'
  | 'frontmatter.images.imgFile.size'
  | 'frontmatter.images.imgFile.prettySize'
  | 'frontmatter.images.imgFile.modifiedTime'
  | 'frontmatter.images.imgFile.accessTime'
  | 'frontmatter.images.imgFile.changeTime'
  | 'frontmatter.images.imgFile.birthTime'
  | 'frontmatter.images.imgFile.root'
  | 'frontmatter.images.imgFile.dir'
  | 'frontmatter.images.imgFile.base'
  | 'frontmatter.images.imgFile.ext'
  | 'frontmatter.images.imgFile.name'
  | 'frontmatter.images.imgFile.relativeDirectory'
  | 'frontmatter.images.imgFile.dev'
  | 'frontmatter.images.imgFile.mode'
  | 'frontmatter.images.imgFile.nlink'
  | 'frontmatter.images.imgFile.uid'
  | 'frontmatter.images.imgFile.gid'
  | 'frontmatter.images.imgFile.rdev'
  | 'frontmatter.images.imgFile.ino'
  | 'frontmatter.images.imgFile.atimeMs'
  | 'frontmatter.images.imgFile.mtimeMs'
  | 'frontmatter.images.imgFile.ctimeMs'
  | 'frontmatter.images.imgFile.atime'
  | 'frontmatter.images.imgFile.mtime'
  | 'frontmatter.images.imgFile.ctime'
  | 'frontmatter.images.imgFile.birthtime'
  | 'frontmatter.images.imgFile.birthtimeMs'
  | 'frontmatter.images.imgFile.blksize'
  | 'frontmatter.images.imgFile.blocks'
  | 'frontmatter.images.imgFile.publicURL'
  | 'frontmatter.images.imgFile.childrenImageSharp'
  | 'frontmatter.images.imgFile.childrenMarkdownRemark'
  | 'frontmatter.images.imgFile.id'
  | 'frontmatter.images.imgFile.children'
  | 'frontmatter.images.desc'
  | 'frontmatter.gifs'
  | 'frontmatter.gifs.imgFile.sourceInstanceName'
  | 'frontmatter.gifs.imgFile.absolutePath'
  | 'frontmatter.gifs.imgFile.relativePath'
  | 'frontmatter.gifs.imgFile.extension'
  | 'frontmatter.gifs.imgFile.size'
  | 'frontmatter.gifs.imgFile.prettySize'
  | 'frontmatter.gifs.imgFile.modifiedTime'
  | 'frontmatter.gifs.imgFile.accessTime'
  | 'frontmatter.gifs.imgFile.changeTime'
  | 'frontmatter.gifs.imgFile.birthTime'
  | 'frontmatter.gifs.imgFile.root'
  | 'frontmatter.gifs.imgFile.dir'
  | 'frontmatter.gifs.imgFile.base'
  | 'frontmatter.gifs.imgFile.ext'
  | 'frontmatter.gifs.imgFile.name'
  | 'frontmatter.gifs.imgFile.relativeDirectory'
  | 'frontmatter.gifs.imgFile.dev'
  | 'frontmatter.gifs.imgFile.mode'
  | 'frontmatter.gifs.imgFile.nlink'
  | 'frontmatter.gifs.imgFile.uid'
  | 'frontmatter.gifs.imgFile.gid'
  | 'frontmatter.gifs.imgFile.rdev'
  | 'frontmatter.gifs.imgFile.ino'
  | 'frontmatter.gifs.imgFile.atimeMs'
  | 'frontmatter.gifs.imgFile.mtimeMs'
  | 'frontmatter.gifs.imgFile.ctimeMs'
  | 'frontmatter.gifs.imgFile.atime'
  | 'frontmatter.gifs.imgFile.mtime'
  | 'frontmatter.gifs.imgFile.ctime'
  | 'frontmatter.gifs.imgFile.birthtime'
  | 'frontmatter.gifs.imgFile.birthtimeMs'
  | 'frontmatter.gifs.imgFile.blksize'
  | 'frontmatter.gifs.imgFile.blocks'
  | 'frontmatter.gifs.imgFile.publicURL'
  | 'frontmatter.gifs.imgFile.childrenImageSharp'
  | 'frontmatter.gifs.imgFile.childrenMarkdownRemark'
  | 'frontmatter.gifs.imgFile.id'
  | 'frontmatter.gifs.imgFile.children'
  | 'frontmatter.gifs.desc'
  | 'frontmatter.social.behance'
  | 'frontmatter.social.deviantart'
  | 'frontmatter.social.discord'
  | 'frontmatter.social.etsy'
  | 'frontmatter.social.facebook'
  | 'frontmatter.social.flickr'
  | 'frontmatter.social.furaffinity'
  | 'frontmatter.social.github'
  | 'frontmatter.social.instagram'
  | 'frontmatter.social.other'
  | 'frontmatter.social.picarto'
  | 'frontmatter.social.pinterest'
  | 'frontmatter.social.steam'
  | 'frontmatter.social.telegram'
  | 'frontmatter.social.tiktok'
  | 'frontmatter.social.tumblr'
  | 'frontmatter.social.twitch'
  | 'frontmatter.social.twitter'
  | 'frontmatter.social.youtube'
  | 'frontmatter.social.patreon'
  | 'frontmatter.streaming.sunday'
  | 'frontmatter.streaming.sunday.start'
  | 'frontmatter.streaming.sunday.end'
  | 'frontmatter.streaming.saturday'
  | 'frontmatter.streaming.saturday.start'
  | 'frontmatter.streaming.saturday.end'
  | 'frontmatter.streaming.friday'
  | 'frontmatter.streaming.friday.start'
  | 'frontmatter.streaming.friday.end'
  | 'frontmatter.dealer'
  | 'frontmatter.artist'
  | 'frontmatter.image.sourceInstanceName'
  | 'frontmatter.image.absolutePath'
  | 'frontmatter.image.relativePath'
  | 'frontmatter.image.extension'
  | 'frontmatter.image.size'
  | 'frontmatter.image.prettySize'
  | 'frontmatter.image.modifiedTime'
  | 'frontmatter.image.accessTime'
  | 'frontmatter.image.changeTime'
  | 'frontmatter.image.birthTime'
  | 'frontmatter.image.root'
  | 'frontmatter.image.dir'
  | 'frontmatter.image.base'
  | 'frontmatter.image.ext'
  | 'frontmatter.image.name'
  | 'frontmatter.image.relativeDirectory'
  | 'frontmatter.image.dev'
  | 'frontmatter.image.mode'
  | 'frontmatter.image.nlink'
  | 'frontmatter.image.uid'
  | 'frontmatter.image.gid'
  | 'frontmatter.image.rdev'
  | 'frontmatter.image.ino'
  | 'frontmatter.image.atimeMs'
  | 'frontmatter.image.mtimeMs'
  | 'frontmatter.image.ctimeMs'
  | 'frontmatter.image.atime'
  | 'frontmatter.image.mtime'
  | 'frontmatter.image.ctime'
  | 'frontmatter.image.birthtime'
  | 'frontmatter.image.birthtimeMs'
  | 'frontmatter.image.blksize'
  | 'frontmatter.image.blocks'
  | 'frontmatter.image.publicURL'
  | 'frontmatter.image.childrenImageSharp'
  | 'frontmatter.image.childrenImageSharp.gatsbyImageData'
  | 'frontmatter.image.childrenImageSharp.id'
  | 'frontmatter.image.childrenImageSharp.children'
  | 'frontmatter.image.childImageSharp.gatsbyImageData'
  | 'frontmatter.image.childImageSharp.id'
  | 'frontmatter.image.childImageSharp.children'
  | 'frontmatter.image.childrenMarkdownRemark'
  | 'frontmatter.image.childrenMarkdownRemark.id'
  | 'frontmatter.image.childrenMarkdownRemark.excerpt'
  | 'frontmatter.image.childrenMarkdownRemark.rawMarkdownBody'
  | 'frontmatter.image.childrenMarkdownRemark.fileAbsolutePath'
  | 'frontmatter.image.childrenMarkdownRemark.html'
  | 'frontmatter.image.childrenMarkdownRemark.htmlAst'
  | 'frontmatter.image.childrenMarkdownRemark.excerptAst'
  | 'frontmatter.image.childrenMarkdownRemark.headings'
  | 'frontmatter.image.childrenMarkdownRemark.timeToRead'
  | 'frontmatter.image.childrenMarkdownRemark.tableOfContents'
  | 'frontmatter.image.childrenMarkdownRemark.children'
  | 'frontmatter.image.childMarkdownRemark.id'
  | 'frontmatter.image.childMarkdownRemark.excerpt'
  | 'frontmatter.image.childMarkdownRemark.rawMarkdownBody'
  | 'frontmatter.image.childMarkdownRemark.fileAbsolutePath'
  | 'frontmatter.image.childMarkdownRemark.html'
  | 'frontmatter.image.childMarkdownRemark.htmlAst'
  | 'frontmatter.image.childMarkdownRemark.excerptAst'
  | 'frontmatter.image.childMarkdownRemark.headings'
  | 'frontmatter.image.childMarkdownRemark.timeToRead'
  | 'frontmatter.image.childMarkdownRemark.tableOfContents'
  | 'frontmatter.image.childMarkdownRemark.children'
  | 'frontmatter.image.id'
  | 'frontmatter.image.parent.id'
  | 'frontmatter.image.parent.children'
  | 'frontmatter.image.children'
  | 'frontmatter.image.children.id'
  | 'frontmatter.image.children.children'
  | 'frontmatter.image.internal.content'
  | 'frontmatter.image.internal.contentDigest'
  | 'frontmatter.image.internal.description'
  | 'frontmatter.image.internal.fieldOwners'
  | 'frontmatter.image.internal.ignoreType'
  | 'frontmatter.image.internal.mediaType'
  | 'frontmatter.image.internal.owner'
  | 'frontmatter.image.internal.type'
  | 'frontmatter.desc'
  | 'frontmatter.djLineup.friday'
  | 'frontmatter.djLineup.friday.time'
  | 'frontmatter.djLineup.friday.dj'
  | 'frontmatter.djLineup.saturday'
  | 'frontmatter.djLineup.saturday.time'
  | 'frontmatter.djLineup.saturday.dj'
  | 'frontmatter.djLineup.sunday'
  | 'frontmatter.djLineup.sunday.time'
  | 'frontmatter.djLineup.sunday.dj'
  | 'frontmatter.schedule.friday'
  | 'frontmatter.schedule.friday.time'
  | 'frontmatter.schedule.friday.title'
  | 'frontmatter.schedule.friday.host'
  | 'frontmatter.schedule.saturday'
  | 'frontmatter.schedule.saturday.time'
  | 'frontmatter.schedule.saturday.title'
  | 'frontmatter.schedule.saturday.host'
  | 'frontmatter.schedule.sunday'
  | 'frontmatter.schedule.sunday.time'
  | 'frontmatter.schedule.sunday.title'
  | 'frontmatter.schedule.sunday.host'
  | 'frontmatter.vrChatWorldLinks'
  | 'frontmatter.staff'
  | 'frontmatter.date'
  | 'frontmatter.path'
  | 'frontmatter.category'
  | 'frontmatter.tags'
  | 'frontmatter.limited'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'fields.slug'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings.id'
  | 'headings.value'
  | 'headings.depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type LocalSearchDealersSfwConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<LocalSearchDealersSfwEdge>;
  readonly nodes: ReadonlyArray<LocalSearchDealersSfw>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<LocalSearchDealersSfwGroupConnection>;
};


type LocalSearchDealersSfwConnection_distinctArgs = {
  field: LocalSearchDealersSfwFieldsEnum;
};


type LocalSearchDealersSfwConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: LocalSearchDealersSfwFieldsEnum;
};

type LocalSearchDealersSfwEdge = {
  readonly next: Maybe<LocalSearchDealersSfw>;
  readonly node: LocalSearchDealersSfw;
  readonly previous: Maybe<LocalSearchDealersSfw>;
};

type LocalSearchDealersSfwFieldsEnum =
  | 'name'
  | 'engine'
  | 'index'
  | 'store'
  | 'publicIndexURL'
  | 'publicStoreURL'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type LocalSearchDealersSfwGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<LocalSearchDealersSfwEdge>;
  readonly nodes: ReadonlyArray<LocalSearchDealersSfw>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type LocalSearchDealersSfwFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly engine: Maybe<StringQueryOperatorInput>;
  readonly index: Maybe<StringQueryOperatorInput>;
  readonly store: Maybe<JSONQueryOperatorInput>;
  readonly publicIndexURL: Maybe<StringQueryOperatorInput>;
  readonly publicStoreURL: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type LocalSearchDealersSfwSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<LocalSearchDealersSfwFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.plugins'
  | 'pluginOptions.plugins.resolve'
  | 'pluginOptions.plugins.id'
  | 'pluginOptions.plugins.name'
  | 'pluginOptions.plugins.version'
  | 'pluginOptions.plugins.pluginFilepath'
  | 'pluginOptions.name'
  | 'pluginOptions.short_name'
  | 'pluginOptions.description'
  | 'pluginOptions.start_url'
  | 'pluginOptions.theme_color'
  | 'pluginOptions.background_color'
  | 'pluginOptions.display'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.output'
  | 'pluginOptions.createLinkInHead'
  | 'pluginOptions.env.production.policy'
  | 'pluginOptions.env.branch_deploy.policy'
  | 'pluginOptions.env.deploy_preview.policy'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.path'
  | 'pluginOptions.engine'
  | 'pluginOptions.engineOptions'
  | 'pluginOptions.query'
  | 'pluginOptions.ref'
  | 'pluginOptions.index'
  | 'pluginOptions.store'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.outputPath'
  | 'pluginOptions.emitSchema._xgraphqlxwebsitexschemaxgraphql'
  | 'pluginOptions.implementation.info'
  | 'pluginOptions.sassOptions.precision'
  | 'pluginOptions.sassOptions.indentedSyntax'
  | 'pluginOptions.sassOptions.indentType'
  | 'pluginOptions.sassOptions.indentWidth'
  | 'pluginOptions.sassOptions.linefeed'
  | 'pluginOptions.sassOptions.omitSourceMapUrl'
  | 'pluginOptions.sassOptions.sourceComments'
  | 'pluginOptions.sassOptions.sourceMapContents'
  | 'pluginOptions.sassOptions.sourceMapEmbed'
  | 'pluginOptions.color'
  | 'pluginOptions.showSpinner'
  | 'pluginOptions.disableOnDev'
  | 'pluginOptions.reportOnly'
  | 'pluginOptions.mergeScriptHashes'
  | 'pluginOptions.mergeStyleHashes'
  | 'pluginOptions.mergeDefaultDirectives'
  | 'pluginOptions.directives.connect_src'
  | 'pluginOptions.directives.default_src'
  | 'pluginOptions.directives.font_src'
  | 'pluginOptions.directives.frame_src'
  | 'pluginOptions.directives.img_src'
  | 'pluginOptions.directives.media_src'
  | 'pluginOptions.directives.object_src'
  | 'pluginOptions.directives.script_src'
  | 'pluginOptions.directives.style_src'
  | 'pluginOptions.pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type AdCrawlQueryQueryVariables = Exact<{ [key: string]: never; }>;


type AdCrawlQueryQuery = { readonly remark: { readonly dealers: ReadonlyArray<{ readonly dealer: (
        Pick<MarkdownRemark, 'id'>
        & { readonly fields: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, readonly frontmatter: Maybe<(
          Pick<MarkdownRemarkFrontmatter, 'title'>
          & { readonly gifs: Maybe<ReadonlyArray<Maybe<(
            Pick<MarkdownRemarkFrontmatterGifs, 'desc'>
            & { readonly imgFile: Maybe<{ readonly childImageSharp: Maybe<MediumImageFragment> }> }
          )>>> }
        )> }
      ) }> } };

type DJLineupQueryQueryVariables = Exact<{ [key: string]: never; }>;


type DJLineupQueryQuery = { readonly remark: Maybe<{ readonly frontmatter: Maybe<{ readonly djLineup: Maybe<{ readonly friday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterDjLineupFriday, 'time' | 'dj'>>>>, readonly saturday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterDjLineupSaturday, 'time' | 'dj'>>>>, readonly sunday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterDjLineupSunday, 'time' | 'dj'>>>> }> }> }> };

type DonationsMeterQueryQueryVariables = Exact<{ [key: string]: never; }>;


type DonationsMeterQueryQuery = { readonly donationsMeterBG: Maybe<{ readonly childImageSharp: Maybe<LargeImageFragment> }>, readonly donationsMeterBG8K: Maybe<{ readonly childImageSharp: Maybe<LargeImageFragment> }>, readonly donationsMeterBG10K: Maybe<{ readonly childImageSharp: Maybe<LargeImageFragment> }>, readonly donationsMeterBGBusted: Maybe<{ readonly childImageSharp: Maybe<LargeImageFragment> }> };

type ConStoreQueryQueryVariables = Exact<{ [key: string]: never; }>;


type ConStoreQueryQuery = { readonly remark: { readonly group: ReadonlyArray<(
      Pick<MarkdownRemarkGroupConnection, 'fieldValue'>
      & { readonly products: ReadonlyArray<{ readonly product: (
          Pick<MarkdownRemark, 'id'>
          & { readonly frontmatter: Maybe<(
            Pick<MarkdownRemarkFrontmatter, 'title' | 'url' | 'limited' | 'desc'>
            & { readonly image: Maybe<{ readonly childImageSharp: Maybe<SmallImageFragment> }> }
          )> }
        ) }> }
    )> } };

type NotFoundQueryQueryVariables = Exact<{ [key: string]: never; }>;


type NotFoundQueryQuery = { readonly marty404: Maybe<{ readonly childImageSharp: Maybe<MediumImageFragment> }> };

type DealersIndexQueryQueryVariables = Exact<{ [key: string]: never; }>;


type DealersIndexQueryQuery = { readonly localSearchDealersSfw: Maybe<Pick<LocalSearchDealersSfw, 'index' | 'store'>>, readonly remark: { readonly group: ReadonlyArray<(
      Pick<MarkdownRemarkGroupConnection, 'fieldValue'>
      & { readonly dealers: ReadonlyArray<{ readonly dealer: (
          Pick<MarkdownRemark, 'id'>
          & { readonly fields: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, readonly frontmatter: Maybe<(
            Pick<MarkdownRemarkFrontmatter, 'title' | 'description' | 'isPremium'>
            & { readonly banner: Maybe<{ readonly imgFile: Maybe<{ readonly childImageSharp: Maybe<DealerCardImageFragment> }> }> }
          )> }
        ) }> }
    )> } };

type DiscordVRQueryQueryVariables = Exact<{ [key: string]: never; }>;


type DiscordVRQueryQuery = { readonly howToBlockPoster: Maybe<{ readonly childImageSharp: Maybe<MediumImageFragment> }>, readonly attendeeBadgeExamples: Maybe<{ readonly childImageSharp: Maybe<MediumImageFragment> }> };

type DJsQueryQueryVariables = Exact<{ [key: string]: never; }>;


type DJsQueryQuery = { readonly remark: Maybe<{ readonly frontmatter: Maybe<{ readonly djLineup: Maybe<{ readonly friday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterDjLineupFriday, 'time' | 'dj'>>>>, readonly saturday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterDjLineupSaturday, 'time' | 'dj'>>>>, readonly sunday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterDjLineupSunday, 'time' | 'dj'>>>> }> }> }>, readonly djLineupImg: Maybe<{ readonly childImageSharp: Maybe<MediumImageFragment> }> };

type HowToQueryQueryVariables = Exact<{ [key: string]: never; }>;


type HowToQueryQuery = { readonly discordTutorialPDF: Maybe<Pick<File, 'publicURL'>>, readonly vrChatAvatarPDF: Maybe<Pick<File, 'publicURL'>>, readonly vrChatBasicsPDF: Maybe<Pick<File, 'publicURL'>>, readonly vrChatFriendsPDF: Maybe<Pick<File, 'publicURL'>>, readonly vrChatWorldsPDF: Maybe<Pick<File, 'publicURL'>>, readonly badgeAttendeeT1: Maybe<Pick<File, 'publicURL'>>, readonly badgeAttendeeT2: Maybe<Pick<File, 'publicURL'>> };

type HomeQueryQueryVariables = Exact<{ [key: string]: never; }>;


type HomeQueryQuery = { readonly martySkateboard: Maybe<{ readonly childImageSharp: Maybe<LargeImageFragment> }>, readonly pixelBanner: Maybe<{ readonly childImageSharp: Maybe<LargeImageFragment> }> };

type GalleryQueryQueryVariables = Exact<{ [key: string]: never; }>;


type GalleryQueryQuery = { readonly remark: { readonly artworks: ReadonlyArray<{ readonly artwork: (
        Pick<MarkdownRemark, 'id'>
        & { readonly frontmatter: Maybe<(
          Pick<MarkdownRemarkFrontmatter, 'title' | 'artist' | 'url' | 'desc'>
          & { readonly image: Maybe<{ readonly childImageSharp: Maybe<MediumImageFragment> }> }
        )> }
      ) }> } };

type LivestreamQueryQueryVariables = Exact<{ [key: string]: never; }>;


type LivestreamQueryQuery = { readonly martyPlaceholder: Maybe<{ readonly childImageSharp: Maybe<LargeImageFragment> }> };

type DealerBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type DealerBySlugQuery = { readonly markdownRemark: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { readonly fields: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, readonly frontmatter: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title' | 'description' | 'url'>
      & { readonly social: Maybe<Pick<MarkdownRemarkFrontmatterSocial, 'behance' | 'deviantart' | 'discord' | 'etsy' | 'facebook' | 'flickr' | 'furaffinity' | 'github' | 'instagram' | 'other' | 'patreon' | 'picarto' | 'pinterest' | 'steam' | 'telegram' | 'tiktok' | 'tumblr' | 'twitch' | 'twitter' | 'youtube'>>, readonly streaming: Maybe<{ readonly friday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterStreamingFriday, 'start' | 'end'>>>>, readonly saturday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterStreamingSaturday, 'start' | 'end'>>>>, readonly sunday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterStreamingSunday, 'start' | 'end'>>>> }>, readonly banner: Maybe<(
        Pick<MarkdownRemarkFrontmatterBanner, 'desc'>
        & { readonly imgFile: Maybe<{ readonly childImageSharp: Maybe<LargeImageFragment> }> }
      )>, readonly images: Maybe<ReadonlyArray<Maybe<(
        Pick<MarkdownRemarkFrontmatterImages, 'desc'>
        & { readonly imgFile: Maybe<{ readonly childImageSharp: Maybe<LargeImageFragment> }> }
      )>>> }
    )> }
  )> };

type PanelLineupQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PanelLineupQueryQuery = { readonly remark: Maybe<{ readonly frontmatter: Maybe<{ readonly schedule: Maybe<{ readonly friday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterScheduleFriday, 'time' | 'title' | 'host'>>>>, readonly saturday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterScheduleSaturday, 'time' | 'title' | 'host'>>>>, readonly sunday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterScheduleSunday, 'time' | 'title' | 'host'>>>> }> }> }> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type InfoQueryQueryVariables = Exact<{ [key: string]: never; }>;


type InfoQueryQuery = { readonly remark: Maybe<{ readonly frontmatter: Maybe<Pick<MarkdownRemarkFrontmatter, 'staff'>> }> };

type SmallImageFragment = Pick<ImageSharp, 'gatsbyImageData'>;

type DealerCardImageFragment = Pick<ImageSharp, 'gatsbyImageData'>;

type MediumImageFragment = Pick<ImageSharp, 'gatsbyImageData'>;

type LargeImageFragment = Pick<ImageSharp, 'gatsbyImageData'>;

type SocialLinksFragment = { readonly social: Maybe<Pick<MarkdownRemarkFrontmatterSocial, 'behance' | 'deviantart' | 'discord' | 'etsy' | 'facebook' | 'furaffinity' | 'github' | 'instagram' | 'patreon' | 'picarto' | 'pinterest' | 'steam' | 'telegram' | 'tumblr' | 'twitch' | 'twitter' | 'youtube'>> };

type StreamTimesFragment = { readonly streaming: Maybe<{ readonly friday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterStreamingFriday, 'end' | 'start'>>>>, readonly saturday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterStreamingSaturday, 'end' | 'start'>>>>, readonly sunday: Maybe<ReadonlyArray<Maybe<Pick<MarkdownRemarkFrontmatterStreamingSunday, 'end' | 'start'>>>> }> };

type DealerTileFragment = { readonly fields: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, readonly frontmatter: Maybe<(
    Pick<MarkdownRemarkFrontmatter, 'description' | 'title'>
    & { readonly banner: Maybe<(
      Pick<MarkdownRemarkFrontmatterBanner, 'desc'>
      & { readonly imgFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> }
    )> }
  )> };

}