export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
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
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum =
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
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___resolutions___base64'
  | 'childrenImageSharp___resolutions___tracedSVG'
  | 'childrenImageSharp___resolutions___aspectRatio'
  | 'childrenImageSharp___resolutions___width'
  | 'childrenImageSharp___resolutions___height'
  | 'childrenImageSharp___resolutions___src'
  | 'childrenImageSharp___resolutions___srcSet'
  | 'childrenImageSharp___resolutions___srcWebp'
  | 'childrenImageSharp___resolutions___srcSetWebp'
  | 'childrenImageSharp___resolutions___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___sizes___base64'
  | 'childrenImageSharp___sizes___tracedSVG'
  | 'childrenImageSharp___sizes___aspectRatio'
  | 'childrenImageSharp___sizes___src'
  | 'childrenImageSharp___sizes___srcSet'
  | 'childrenImageSharp___sizes___srcWebp'
  | 'childrenImageSharp___sizes___srcSetWebp'
  | 'childrenImageSharp___sizes___sizes'
  | 'childrenImageSharp___sizes___originalImg'
  | 'childrenImageSharp___sizes___originalName'
  | 'childrenImageSharp___sizes___presentationWidth'
  | 'childrenImageSharp___sizes___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark___id'
  | 'childrenMarkdownRemark___frontmatter___title'
  | 'childrenMarkdownRemark___frontmatter___date'
  | 'childrenMarkdownRemark___frontmatter___layout'
  | 'childrenMarkdownRemark___frontmatter___path'
  | 'childrenMarkdownRemark___frontmatter___description'
  | 'childrenMarkdownRemark___frontmatter___category'
  | 'childrenMarkdownRemark___frontmatter___tags'
  | 'childrenMarkdownRemark___frontmatter___dealer'
  | 'childrenMarkdownRemark___frontmatter___kind'
  | 'childrenMarkdownRemark___frontmatter___isAdult'
  | 'childrenMarkdownRemark___frontmatter___isPremium'
  | 'childrenMarkdownRemark___frontmatter___url'
  | 'childrenMarkdownRemark___frontmatter___banner___sourceInstanceName'
  | 'childrenMarkdownRemark___frontmatter___banner___absolutePath'
  | 'childrenMarkdownRemark___frontmatter___banner___relativePath'
  | 'childrenMarkdownRemark___frontmatter___banner___extension'
  | 'childrenMarkdownRemark___frontmatter___banner___size'
  | 'childrenMarkdownRemark___frontmatter___banner___prettySize'
  | 'childrenMarkdownRemark___frontmatter___banner___modifiedTime'
  | 'childrenMarkdownRemark___frontmatter___banner___accessTime'
  | 'childrenMarkdownRemark___frontmatter___banner___changeTime'
  | 'childrenMarkdownRemark___frontmatter___banner___birthTime'
  | 'childrenMarkdownRemark___frontmatter___banner___root'
  | 'childrenMarkdownRemark___frontmatter___banner___dir'
  | 'childrenMarkdownRemark___frontmatter___banner___base'
  | 'childrenMarkdownRemark___frontmatter___banner___ext'
  | 'childrenMarkdownRemark___frontmatter___banner___name'
  | 'childrenMarkdownRemark___frontmatter___banner___relativeDirectory'
  | 'childrenMarkdownRemark___frontmatter___banner___dev'
  | 'childrenMarkdownRemark___frontmatter___banner___mode'
  | 'childrenMarkdownRemark___frontmatter___banner___nlink'
  | 'childrenMarkdownRemark___frontmatter___banner___uid'
  | 'childrenMarkdownRemark___frontmatter___banner___gid'
  | 'childrenMarkdownRemark___frontmatter___banner___rdev'
  | 'childrenMarkdownRemark___frontmatter___banner___ino'
  | 'childrenMarkdownRemark___frontmatter___banner___atimeMs'
  | 'childrenMarkdownRemark___frontmatter___banner___mtimeMs'
  | 'childrenMarkdownRemark___frontmatter___banner___ctimeMs'
  | 'childrenMarkdownRemark___frontmatter___banner___atime'
  | 'childrenMarkdownRemark___frontmatter___banner___mtime'
  | 'childrenMarkdownRemark___frontmatter___banner___ctime'
  | 'childrenMarkdownRemark___frontmatter___banner___birthtime'
  | 'childrenMarkdownRemark___frontmatter___banner___birthtimeMs'
  | 'childrenMarkdownRemark___frontmatter___banner___blksize'
  | 'childrenMarkdownRemark___frontmatter___banner___blocks'
  | 'childrenMarkdownRemark___frontmatter___banner___publicURL'
  | 'childrenMarkdownRemark___frontmatter___banner___childrenImageSharp'
  | 'childrenMarkdownRemark___frontmatter___banner___childrenMarkdownRemark'
  | 'childrenMarkdownRemark___frontmatter___banner___id'
  | 'childrenMarkdownRemark___frontmatter___banner___children'
  | 'childrenMarkdownRemark___frontmatter___images'
  | 'childrenMarkdownRemark___frontmatter___images___sourceInstanceName'
  | 'childrenMarkdownRemark___frontmatter___images___absolutePath'
  | 'childrenMarkdownRemark___frontmatter___images___relativePath'
  | 'childrenMarkdownRemark___frontmatter___images___extension'
  | 'childrenMarkdownRemark___frontmatter___images___size'
  | 'childrenMarkdownRemark___frontmatter___images___prettySize'
  | 'childrenMarkdownRemark___frontmatter___images___modifiedTime'
  | 'childrenMarkdownRemark___frontmatter___images___accessTime'
  | 'childrenMarkdownRemark___frontmatter___images___changeTime'
  | 'childrenMarkdownRemark___frontmatter___images___birthTime'
  | 'childrenMarkdownRemark___frontmatter___images___root'
  | 'childrenMarkdownRemark___frontmatter___images___dir'
  | 'childrenMarkdownRemark___frontmatter___images___base'
  | 'childrenMarkdownRemark___frontmatter___images___ext'
  | 'childrenMarkdownRemark___frontmatter___images___name'
  | 'childrenMarkdownRemark___frontmatter___images___relativeDirectory'
  | 'childrenMarkdownRemark___frontmatter___images___dev'
  | 'childrenMarkdownRemark___frontmatter___images___mode'
  | 'childrenMarkdownRemark___frontmatter___images___nlink'
  | 'childrenMarkdownRemark___frontmatter___images___uid'
  | 'childrenMarkdownRemark___frontmatter___images___gid'
  | 'childrenMarkdownRemark___frontmatter___images___rdev'
  | 'childrenMarkdownRemark___frontmatter___images___ino'
  | 'childrenMarkdownRemark___frontmatter___images___atimeMs'
  | 'childrenMarkdownRemark___frontmatter___images___mtimeMs'
  | 'childrenMarkdownRemark___frontmatter___images___ctimeMs'
  | 'childrenMarkdownRemark___frontmatter___images___atime'
  | 'childrenMarkdownRemark___frontmatter___images___mtime'
  | 'childrenMarkdownRemark___frontmatter___images___ctime'
  | 'childrenMarkdownRemark___frontmatter___images___birthtime'
  | 'childrenMarkdownRemark___frontmatter___images___birthtimeMs'
  | 'childrenMarkdownRemark___frontmatter___images___blksize'
  | 'childrenMarkdownRemark___frontmatter___images___blocks'
  | 'childrenMarkdownRemark___frontmatter___images___publicURL'
  | 'childrenMarkdownRemark___frontmatter___images___childrenImageSharp'
  | 'childrenMarkdownRemark___frontmatter___images___childrenMarkdownRemark'
  | 'childrenMarkdownRemark___frontmatter___images___id'
  | 'childrenMarkdownRemark___frontmatter___images___children'
  | 'childrenMarkdownRemark___frontmatter___gifs'
  | 'childrenMarkdownRemark___frontmatter___gifs___sourceInstanceName'
  | 'childrenMarkdownRemark___frontmatter___gifs___absolutePath'
  | 'childrenMarkdownRemark___frontmatter___gifs___relativePath'
  | 'childrenMarkdownRemark___frontmatter___gifs___extension'
  | 'childrenMarkdownRemark___frontmatter___gifs___size'
  | 'childrenMarkdownRemark___frontmatter___gifs___prettySize'
  | 'childrenMarkdownRemark___frontmatter___gifs___modifiedTime'
  | 'childrenMarkdownRemark___frontmatter___gifs___accessTime'
  | 'childrenMarkdownRemark___frontmatter___gifs___changeTime'
  | 'childrenMarkdownRemark___frontmatter___gifs___birthTime'
  | 'childrenMarkdownRemark___frontmatter___gifs___root'
  | 'childrenMarkdownRemark___frontmatter___gifs___dir'
  | 'childrenMarkdownRemark___frontmatter___gifs___base'
  | 'childrenMarkdownRemark___frontmatter___gifs___ext'
  | 'childrenMarkdownRemark___frontmatter___gifs___name'
  | 'childrenMarkdownRemark___frontmatter___gifs___relativeDirectory'
  | 'childrenMarkdownRemark___frontmatter___gifs___dev'
  | 'childrenMarkdownRemark___frontmatter___gifs___mode'
  | 'childrenMarkdownRemark___frontmatter___gifs___nlink'
  | 'childrenMarkdownRemark___frontmatter___gifs___uid'
  | 'childrenMarkdownRemark___frontmatter___gifs___gid'
  | 'childrenMarkdownRemark___frontmatter___gifs___rdev'
  | 'childrenMarkdownRemark___frontmatter___gifs___ino'
  | 'childrenMarkdownRemark___frontmatter___gifs___atimeMs'
  | 'childrenMarkdownRemark___frontmatter___gifs___mtimeMs'
  | 'childrenMarkdownRemark___frontmatter___gifs___ctimeMs'
  | 'childrenMarkdownRemark___frontmatter___gifs___atime'
  | 'childrenMarkdownRemark___frontmatter___gifs___mtime'
  | 'childrenMarkdownRemark___frontmatter___gifs___ctime'
  | 'childrenMarkdownRemark___frontmatter___gifs___birthtime'
  | 'childrenMarkdownRemark___frontmatter___gifs___birthtimeMs'
  | 'childrenMarkdownRemark___frontmatter___gifs___blksize'
  | 'childrenMarkdownRemark___frontmatter___gifs___blocks'
  | 'childrenMarkdownRemark___frontmatter___gifs___publicURL'
  | 'childrenMarkdownRemark___frontmatter___gifs___childrenImageSharp'
  | 'childrenMarkdownRemark___frontmatter___gifs___childrenMarkdownRemark'
  | 'childrenMarkdownRemark___frontmatter___gifs___id'
  | 'childrenMarkdownRemark___frontmatter___gifs___children'
  | 'childrenMarkdownRemark___frontmatter___social___behance'
  | 'childrenMarkdownRemark___frontmatter___social___deviantart'
  | 'childrenMarkdownRemark___frontmatter___social___discord'
  | 'childrenMarkdownRemark___frontmatter___social___etsy'
  | 'childrenMarkdownRemark___frontmatter___social___facebook'
  | 'childrenMarkdownRemark___frontmatter___social___flickr'
  | 'childrenMarkdownRemark___frontmatter___social___furaffinity'
  | 'childrenMarkdownRemark___frontmatter___social___github'
  | 'childrenMarkdownRemark___frontmatter___social___instagram'
  | 'childrenMarkdownRemark___frontmatter___social___picarto'
  | 'childrenMarkdownRemark___frontmatter___social___pinterest'
  | 'childrenMarkdownRemark___frontmatter___social___steam'
  | 'childrenMarkdownRemark___frontmatter___social___telegram'
  | 'childrenMarkdownRemark___frontmatter___social___tumblr'
  | 'childrenMarkdownRemark___frontmatter___social___twitch'
  | 'childrenMarkdownRemark___frontmatter___social___twitter'
  | 'childrenMarkdownRemark___frontmatter___social___youtube'
  | 'childrenMarkdownRemark___frontmatter___streaming___friday'
  | 'childrenMarkdownRemark___frontmatter___streaming___saturday'
  | 'childrenMarkdownRemark___frontmatter___streaming___sunday'
  | 'childrenMarkdownRemark___frontmatter___artist'
  | 'childrenMarkdownRemark___frontmatter___image___sourceInstanceName'
  | 'childrenMarkdownRemark___frontmatter___image___absolutePath'
  | 'childrenMarkdownRemark___frontmatter___image___relativePath'
  | 'childrenMarkdownRemark___frontmatter___image___extension'
  | 'childrenMarkdownRemark___frontmatter___image___size'
  | 'childrenMarkdownRemark___frontmatter___image___prettySize'
  | 'childrenMarkdownRemark___frontmatter___image___modifiedTime'
  | 'childrenMarkdownRemark___frontmatter___image___accessTime'
  | 'childrenMarkdownRemark___frontmatter___image___changeTime'
  | 'childrenMarkdownRemark___frontmatter___image___birthTime'
  | 'childrenMarkdownRemark___frontmatter___image___root'
  | 'childrenMarkdownRemark___frontmatter___image___dir'
  | 'childrenMarkdownRemark___frontmatter___image___base'
  | 'childrenMarkdownRemark___frontmatter___image___ext'
  | 'childrenMarkdownRemark___frontmatter___image___name'
  | 'childrenMarkdownRemark___frontmatter___image___relativeDirectory'
  | 'childrenMarkdownRemark___frontmatter___image___dev'
  | 'childrenMarkdownRemark___frontmatter___image___mode'
  | 'childrenMarkdownRemark___frontmatter___image___nlink'
  | 'childrenMarkdownRemark___frontmatter___image___uid'
  | 'childrenMarkdownRemark___frontmatter___image___gid'
  | 'childrenMarkdownRemark___frontmatter___image___rdev'
  | 'childrenMarkdownRemark___frontmatter___image___ino'
  | 'childrenMarkdownRemark___frontmatter___image___atimeMs'
  | 'childrenMarkdownRemark___frontmatter___image___mtimeMs'
  | 'childrenMarkdownRemark___frontmatter___image___ctimeMs'
  | 'childrenMarkdownRemark___frontmatter___image___atime'
  | 'childrenMarkdownRemark___frontmatter___image___mtime'
  | 'childrenMarkdownRemark___frontmatter___image___ctime'
  | 'childrenMarkdownRemark___frontmatter___image___birthtime'
  | 'childrenMarkdownRemark___frontmatter___image___birthtimeMs'
  | 'childrenMarkdownRemark___frontmatter___image___blksize'
  | 'childrenMarkdownRemark___frontmatter___image___blocks'
  | 'childrenMarkdownRemark___frontmatter___image___publicURL'
  | 'childrenMarkdownRemark___frontmatter___image___childrenImageSharp'
  | 'childrenMarkdownRemark___frontmatter___image___childrenMarkdownRemark'
  | 'childrenMarkdownRemark___frontmatter___image___id'
  | 'childrenMarkdownRemark___frontmatter___image___children'
  | 'childrenMarkdownRemark___excerpt'
  | 'childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenMarkdownRemark___fileAbsolutePath'
  | 'childrenMarkdownRemark___fields___slug'
  | 'childrenMarkdownRemark___html'
  | 'childrenMarkdownRemark___htmlAst'
  | 'childrenMarkdownRemark___excerptAst'
  | 'childrenMarkdownRemark___headings'
  | 'childrenMarkdownRemark___headings___id'
  | 'childrenMarkdownRemark___headings___value'
  | 'childrenMarkdownRemark___headings___depth'
  | 'childrenMarkdownRemark___timeToRead'
  | 'childrenMarkdownRemark___tableOfContents'
  | 'childrenMarkdownRemark___wordCount___paragraphs'
  | 'childrenMarkdownRemark___wordCount___sentences'
  | 'childrenMarkdownRemark___wordCount___words'
  | 'childrenMarkdownRemark___parent___id'
  | 'childrenMarkdownRemark___parent___parent___id'
  | 'childrenMarkdownRemark___parent___parent___children'
  | 'childrenMarkdownRemark___parent___children'
  | 'childrenMarkdownRemark___parent___children___id'
  | 'childrenMarkdownRemark___parent___children___children'
  | 'childrenMarkdownRemark___parent___internal___content'
  | 'childrenMarkdownRemark___parent___internal___contentDigest'
  | 'childrenMarkdownRemark___parent___internal___description'
  | 'childrenMarkdownRemark___parent___internal___fieldOwners'
  | 'childrenMarkdownRemark___parent___internal___ignoreType'
  | 'childrenMarkdownRemark___parent___internal___mediaType'
  | 'childrenMarkdownRemark___parent___internal___owner'
  | 'childrenMarkdownRemark___parent___internal___type'
  | 'childrenMarkdownRemark___children'
  | 'childrenMarkdownRemark___children___id'
  | 'childrenMarkdownRemark___children___parent___id'
  | 'childrenMarkdownRemark___children___parent___children'
  | 'childrenMarkdownRemark___children___children'
  | 'childrenMarkdownRemark___children___children___id'
  | 'childrenMarkdownRemark___children___children___children'
  | 'childrenMarkdownRemark___children___internal___content'
  | 'childrenMarkdownRemark___children___internal___contentDigest'
  | 'childrenMarkdownRemark___children___internal___description'
  | 'childrenMarkdownRemark___children___internal___fieldOwners'
  | 'childrenMarkdownRemark___children___internal___ignoreType'
  | 'childrenMarkdownRemark___children___internal___mediaType'
  | 'childrenMarkdownRemark___children___internal___owner'
  | 'childrenMarkdownRemark___children___internal___type'
  | 'childrenMarkdownRemark___internal___content'
  | 'childrenMarkdownRemark___internal___contentDigest'
  | 'childrenMarkdownRemark___internal___description'
  | 'childrenMarkdownRemark___internal___fieldOwners'
  | 'childrenMarkdownRemark___internal___ignoreType'
  | 'childrenMarkdownRemark___internal___mediaType'
  | 'childrenMarkdownRemark___internal___owner'
  | 'childrenMarkdownRemark___internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___date'
  | 'childMarkdownRemark___frontmatter___layout'
  | 'childMarkdownRemark___frontmatter___path'
  | 'childMarkdownRemark___frontmatter___description'
  | 'childMarkdownRemark___frontmatter___category'
  | 'childMarkdownRemark___frontmatter___tags'
  | 'childMarkdownRemark___frontmatter___dealer'
  | 'childMarkdownRemark___frontmatter___kind'
  | 'childMarkdownRemark___frontmatter___isAdult'
  | 'childMarkdownRemark___frontmatter___isPremium'
  | 'childMarkdownRemark___frontmatter___url'
  | 'childMarkdownRemark___frontmatter___banner___sourceInstanceName'
  | 'childMarkdownRemark___frontmatter___banner___absolutePath'
  | 'childMarkdownRemark___frontmatter___banner___relativePath'
  | 'childMarkdownRemark___frontmatter___banner___extension'
  | 'childMarkdownRemark___frontmatter___banner___size'
  | 'childMarkdownRemark___frontmatter___banner___prettySize'
  | 'childMarkdownRemark___frontmatter___banner___modifiedTime'
  | 'childMarkdownRemark___frontmatter___banner___accessTime'
  | 'childMarkdownRemark___frontmatter___banner___changeTime'
  | 'childMarkdownRemark___frontmatter___banner___birthTime'
  | 'childMarkdownRemark___frontmatter___banner___root'
  | 'childMarkdownRemark___frontmatter___banner___dir'
  | 'childMarkdownRemark___frontmatter___banner___base'
  | 'childMarkdownRemark___frontmatter___banner___ext'
  | 'childMarkdownRemark___frontmatter___banner___name'
  | 'childMarkdownRemark___frontmatter___banner___relativeDirectory'
  | 'childMarkdownRemark___frontmatter___banner___dev'
  | 'childMarkdownRemark___frontmatter___banner___mode'
  | 'childMarkdownRemark___frontmatter___banner___nlink'
  | 'childMarkdownRemark___frontmatter___banner___uid'
  | 'childMarkdownRemark___frontmatter___banner___gid'
  | 'childMarkdownRemark___frontmatter___banner___rdev'
  | 'childMarkdownRemark___frontmatter___banner___ino'
  | 'childMarkdownRemark___frontmatter___banner___atimeMs'
  | 'childMarkdownRemark___frontmatter___banner___mtimeMs'
  | 'childMarkdownRemark___frontmatter___banner___ctimeMs'
  | 'childMarkdownRemark___frontmatter___banner___atime'
  | 'childMarkdownRemark___frontmatter___banner___mtime'
  | 'childMarkdownRemark___frontmatter___banner___ctime'
  | 'childMarkdownRemark___frontmatter___banner___birthtime'
  | 'childMarkdownRemark___frontmatter___banner___birthtimeMs'
  | 'childMarkdownRemark___frontmatter___banner___blksize'
  | 'childMarkdownRemark___frontmatter___banner___blocks'
  | 'childMarkdownRemark___frontmatter___banner___publicURL'
  | 'childMarkdownRemark___frontmatter___banner___childrenImageSharp'
  | 'childMarkdownRemark___frontmatter___banner___childrenMarkdownRemark'
  | 'childMarkdownRemark___frontmatter___banner___id'
  | 'childMarkdownRemark___frontmatter___banner___children'
  | 'childMarkdownRemark___frontmatter___images'
  | 'childMarkdownRemark___frontmatter___images___sourceInstanceName'
  | 'childMarkdownRemark___frontmatter___images___absolutePath'
  | 'childMarkdownRemark___frontmatter___images___relativePath'
  | 'childMarkdownRemark___frontmatter___images___extension'
  | 'childMarkdownRemark___frontmatter___images___size'
  | 'childMarkdownRemark___frontmatter___images___prettySize'
  | 'childMarkdownRemark___frontmatter___images___modifiedTime'
  | 'childMarkdownRemark___frontmatter___images___accessTime'
  | 'childMarkdownRemark___frontmatter___images___changeTime'
  | 'childMarkdownRemark___frontmatter___images___birthTime'
  | 'childMarkdownRemark___frontmatter___images___root'
  | 'childMarkdownRemark___frontmatter___images___dir'
  | 'childMarkdownRemark___frontmatter___images___base'
  | 'childMarkdownRemark___frontmatter___images___ext'
  | 'childMarkdownRemark___frontmatter___images___name'
  | 'childMarkdownRemark___frontmatter___images___relativeDirectory'
  | 'childMarkdownRemark___frontmatter___images___dev'
  | 'childMarkdownRemark___frontmatter___images___mode'
  | 'childMarkdownRemark___frontmatter___images___nlink'
  | 'childMarkdownRemark___frontmatter___images___uid'
  | 'childMarkdownRemark___frontmatter___images___gid'
  | 'childMarkdownRemark___frontmatter___images___rdev'
  | 'childMarkdownRemark___frontmatter___images___ino'
  | 'childMarkdownRemark___frontmatter___images___atimeMs'
  | 'childMarkdownRemark___frontmatter___images___mtimeMs'
  | 'childMarkdownRemark___frontmatter___images___ctimeMs'
  | 'childMarkdownRemark___frontmatter___images___atime'
  | 'childMarkdownRemark___frontmatter___images___mtime'
  | 'childMarkdownRemark___frontmatter___images___ctime'
  | 'childMarkdownRemark___frontmatter___images___birthtime'
  | 'childMarkdownRemark___frontmatter___images___birthtimeMs'
  | 'childMarkdownRemark___frontmatter___images___blksize'
  | 'childMarkdownRemark___frontmatter___images___blocks'
  | 'childMarkdownRemark___frontmatter___images___publicURL'
  | 'childMarkdownRemark___frontmatter___images___childrenImageSharp'
  | 'childMarkdownRemark___frontmatter___images___childrenMarkdownRemark'
  | 'childMarkdownRemark___frontmatter___images___id'
  | 'childMarkdownRemark___frontmatter___images___children'
  | 'childMarkdownRemark___frontmatter___gifs'
  | 'childMarkdownRemark___frontmatter___gifs___sourceInstanceName'
  | 'childMarkdownRemark___frontmatter___gifs___absolutePath'
  | 'childMarkdownRemark___frontmatter___gifs___relativePath'
  | 'childMarkdownRemark___frontmatter___gifs___extension'
  | 'childMarkdownRemark___frontmatter___gifs___size'
  | 'childMarkdownRemark___frontmatter___gifs___prettySize'
  | 'childMarkdownRemark___frontmatter___gifs___modifiedTime'
  | 'childMarkdownRemark___frontmatter___gifs___accessTime'
  | 'childMarkdownRemark___frontmatter___gifs___changeTime'
  | 'childMarkdownRemark___frontmatter___gifs___birthTime'
  | 'childMarkdownRemark___frontmatter___gifs___root'
  | 'childMarkdownRemark___frontmatter___gifs___dir'
  | 'childMarkdownRemark___frontmatter___gifs___base'
  | 'childMarkdownRemark___frontmatter___gifs___ext'
  | 'childMarkdownRemark___frontmatter___gifs___name'
  | 'childMarkdownRemark___frontmatter___gifs___relativeDirectory'
  | 'childMarkdownRemark___frontmatter___gifs___dev'
  | 'childMarkdownRemark___frontmatter___gifs___mode'
  | 'childMarkdownRemark___frontmatter___gifs___nlink'
  | 'childMarkdownRemark___frontmatter___gifs___uid'
  | 'childMarkdownRemark___frontmatter___gifs___gid'
  | 'childMarkdownRemark___frontmatter___gifs___rdev'
  | 'childMarkdownRemark___frontmatter___gifs___ino'
  | 'childMarkdownRemark___frontmatter___gifs___atimeMs'
  | 'childMarkdownRemark___frontmatter___gifs___mtimeMs'
  | 'childMarkdownRemark___frontmatter___gifs___ctimeMs'
  | 'childMarkdownRemark___frontmatter___gifs___atime'
  | 'childMarkdownRemark___frontmatter___gifs___mtime'
  | 'childMarkdownRemark___frontmatter___gifs___ctime'
  | 'childMarkdownRemark___frontmatter___gifs___birthtime'
  | 'childMarkdownRemark___frontmatter___gifs___birthtimeMs'
  | 'childMarkdownRemark___frontmatter___gifs___blksize'
  | 'childMarkdownRemark___frontmatter___gifs___blocks'
  | 'childMarkdownRemark___frontmatter___gifs___publicURL'
  | 'childMarkdownRemark___frontmatter___gifs___childrenImageSharp'
  | 'childMarkdownRemark___frontmatter___gifs___childrenMarkdownRemark'
  | 'childMarkdownRemark___frontmatter___gifs___id'
  | 'childMarkdownRemark___frontmatter___gifs___children'
  | 'childMarkdownRemark___frontmatter___social___behance'
  | 'childMarkdownRemark___frontmatter___social___deviantart'
  | 'childMarkdownRemark___frontmatter___social___discord'
  | 'childMarkdownRemark___frontmatter___social___etsy'
  | 'childMarkdownRemark___frontmatter___social___facebook'
  | 'childMarkdownRemark___frontmatter___social___flickr'
  | 'childMarkdownRemark___frontmatter___social___furaffinity'
  | 'childMarkdownRemark___frontmatter___social___github'
  | 'childMarkdownRemark___frontmatter___social___instagram'
  | 'childMarkdownRemark___frontmatter___social___picarto'
  | 'childMarkdownRemark___frontmatter___social___pinterest'
  | 'childMarkdownRemark___frontmatter___social___steam'
  | 'childMarkdownRemark___frontmatter___social___telegram'
  | 'childMarkdownRemark___frontmatter___social___tumblr'
  | 'childMarkdownRemark___frontmatter___social___twitch'
  | 'childMarkdownRemark___frontmatter___social___twitter'
  | 'childMarkdownRemark___frontmatter___social___youtube'
  | 'childMarkdownRemark___frontmatter___streaming___friday'
  | 'childMarkdownRemark___frontmatter___streaming___saturday'
  | 'childMarkdownRemark___frontmatter___streaming___sunday'
  | 'childMarkdownRemark___frontmatter___artist'
  | 'childMarkdownRemark___frontmatter___image___sourceInstanceName'
  | 'childMarkdownRemark___frontmatter___image___absolutePath'
  | 'childMarkdownRemark___frontmatter___image___relativePath'
  | 'childMarkdownRemark___frontmatter___image___extension'
  | 'childMarkdownRemark___frontmatter___image___size'
  | 'childMarkdownRemark___frontmatter___image___prettySize'
  | 'childMarkdownRemark___frontmatter___image___modifiedTime'
  | 'childMarkdownRemark___frontmatter___image___accessTime'
  | 'childMarkdownRemark___frontmatter___image___changeTime'
  | 'childMarkdownRemark___frontmatter___image___birthTime'
  | 'childMarkdownRemark___frontmatter___image___root'
  | 'childMarkdownRemark___frontmatter___image___dir'
  | 'childMarkdownRemark___frontmatter___image___base'
  | 'childMarkdownRemark___frontmatter___image___ext'
  | 'childMarkdownRemark___frontmatter___image___name'
  | 'childMarkdownRemark___frontmatter___image___relativeDirectory'
  | 'childMarkdownRemark___frontmatter___image___dev'
  | 'childMarkdownRemark___frontmatter___image___mode'
  | 'childMarkdownRemark___frontmatter___image___nlink'
  | 'childMarkdownRemark___frontmatter___image___uid'
  | 'childMarkdownRemark___frontmatter___image___gid'
  | 'childMarkdownRemark___frontmatter___image___rdev'
  | 'childMarkdownRemark___frontmatter___image___ino'
  | 'childMarkdownRemark___frontmatter___image___atimeMs'
  | 'childMarkdownRemark___frontmatter___image___mtimeMs'
  | 'childMarkdownRemark___frontmatter___image___ctimeMs'
  | 'childMarkdownRemark___frontmatter___image___atime'
  | 'childMarkdownRemark___frontmatter___image___mtime'
  | 'childMarkdownRemark___frontmatter___image___ctime'
  | 'childMarkdownRemark___frontmatter___image___birthtime'
  | 'childMarkdownRemark___frontmatter___image___birthtimeMs'
  | 'childMarkdownRemark___frontmatter___image___blksize'
  | 'childMarkdownRemark___frontmatter___image___blocks'
  | 'childMarkdownRemark___frontmatter___image___publicURL'
  | 'childMarkdownRemark___frontmatter___image___childrenImageSharp'
  | 'childMarkdownRemark___frontmatter___image___childrenMarkdownRemark'
  | 'childMarkdownRemark___frontmatter___image___id'
  | 'childMarkdownRemark___frontmatter___image___children'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___fields___slug'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileFilterListInput = {
  elemMatch?: Maybe<FileFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type LocalSearchDealersSfw = Node & {
  /** The name of the index. */
  name: Scalars['String'];
  /** The search engine used to create the index. */
  engine: Scalars['String'];
  /** The search index created using the selected engine. */
  index: Scalars['String'];
  /** A JSON object used to map search results to their data. */
  store: Scalars['JSON'];
  /** Save the index to the site's static directory and return a public URL to it. */
  publicIndexURL: Scalars['String'];
  /** Save the store to the site's static directory and return a public URL to it. */
  publicStoreURL: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type LocalSearchDealersSfwConnection = {
  totalCount: Scalars['Int'];
  edges: Array<LocalSearchDealersSfwEdge>;
  nodes: Array<LocalSearchDealersSfw>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<LocalSearchDealersSfwGroupConnection>;
};


export type LocalSearchDealersSfwConnectionDistinctArgs = {
  field: LocalSearchDealersSfwFieldsEnum;
};


export type LocalSearchDealersSfwConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: LocalSearchDealersSfwFieldsEnum;
};

export type LocalSearchDealersSfwEdge = {
  next?: Maybe<LocalSearchDealersSfw>;
  node: LocalSearchDealersSfw;
  previous?: Maybe<LocalSearchDealersSfw>;
};

export type LocalSearchDealersSfwFieldsEnum =
  | 'name'
  | 'engine'
  | 'index'
  | 'store'
  | 'publicIndexURL'
  | 'publicStoreURL'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type LocalSearchDealersSfwFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  engine?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<StringQueryOperatorInput>;
  store?: Maybe<JsonQueryOperatorInput>;
  publicIndexURL?: Maybe<StringQueryOperatorInput>;
  publicStoreURL?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type LocalSearchDealersSfwGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<LocalSearchDealersSfwEdge>;
  nodes: Array<LocalSearchDealersSfw>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type LocalSearchDealersSfwSortInput = {
  fields?: Maybe<Array<Maybe<LocalSearchDealersSfwFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  slug?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter___title'
  | 'frontmatter___date'
  | 'frontmatter___layout'
  | 'frontmatter___path'
  | 'frontmatter___description'
  | 'frontmatter___category'
  | 'frontmatter___tags'
  | 'frontmatter___dealer'
  | 'frontmatter___kind'
  | 'frontmatter___isAdult'
  | 'frontmatter___isPremium'
  | 'frontmatter___url'
  | 'frontmatter___banner___sourceInstanceName'
  | 'frontmatter___banner___absolutePath'
  | 'frontmatter___banner___relativePath'
  | 'frontmatter___banner___extension'
  | 'frontmatter___banner___size'
  | 'frontmatter___banner___prettySize'
  | 'frontmatter___banner___modifiedTime'
  | 'frontmatter___banner___accessTime'
  | 'frontmatter___banner___changeTime'
  | 'frontmatter___banner___birthTime'
  | 'frontmatter___banner___root'
  | 'frontmatter___banner___dir'
  | 'frontmatter___banner___base'
  | 'frontmatter___banner___ext'
  | 'frontmatter___banner___name'
  | 'frontmatter___banner___relativeDirectory'
  | 'frontmatter___banner___dev'
  | 'frontmatter___banner___mode'
  | 'frontmatter___banner___nlink'
  | 'frontmatter___banner___uid'
  | 'frontmatter___banner___gid'
  | 'frontmatter___banner___rdev'
  | 'frontmatter___banner___ino'
  | 'frontmatter___banner___atimeMs'
  | 'frontmatter___banner___mtimeMs'
  | 'frontmatter___banner___ctimeMs'
  | 'frontmatter___banner___atime'
  | 'frontmatter___banner___mtime'
  | 'frontmatter___banner___ctime'
  | 'frontmatter___banner___birthtime'
  | 'frontmatter___banner___birthtimeMs'
  | 'frontmatter___banner___blksize'
  | 'frontmatter___banner___blocks'
  | 'frontmatter___banner___publicURL'
  | 'frontmatter___banner___childrenImageSharp'
  | 'frontmatter___banner___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___banner___childrenImageSharp___id'
  | 'frontmatter___banner___childrenImageSharp___children'
  | 'frontmatter___banner___childImageSharp___gatsbyImageData'
  | 'frontmatter___banner___childImageSharp___id'
  | 'frontmatter___banner___childImageSharp___children'
  | 'frontmatter___banner___childrenMarkdownRemark'
  | 'frontmatter___banner___childrenMarkdownRemark___id'
  | 'frontmatter___banner___childrenMarkdownRemark___excerpt'
  | 'frontmatter___banner___childrenMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___banner___childrenMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___banner___childrenMarkdownRemark___html'
  | 'frontmatter___banner___childrenMarkdownRemark___htmlAst'
  | 'frontmatter___banner___childrenMarkdownRemark___excerptAst'
  | 'frontmatter___banner___childrenMarkdownRemark___headings'
  | 'frontmatter___banner___childrenMarkdownRemark___timeToRead'
  | 'frontmatter___banner___childrenMarkdownRemark___tableOfContents'
  | 'frontmatter___banner___childrenMarkdownRemark___children'
  | 'frontmatter___banner___childMarkdownRemark___id'
  | 'frontmatter___banner___childMarkdownRemark___excerpt'
  | 'frontmatter___banner___childMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___banner___childMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___banner___childMarkdownRemark___html'
  | 'frontmatter___banner___childMarkdownRemark___htmlAst'
  | 'frontmatter___banner___childMarkdownRemark___excerptAst'
  | 'frontmatter___banner___childMarkdownRemark___headings'
  | 'frontmatter___banner___childMarkdownRemark___timeToRead'
  | 'frontmatter___banner___childMarkdownRemark___tableOfContents'
  | 'frontmatter___banner___childMarkdownRemark___children'
  | 'frontmatter___banner___id'
  | 'frontmatter___banner___parent___id'
  | 'frontmatter___banner___parent___children'
  | 'frontmatter___banner___children'
  | 'frontmatter___banner___children___id'
  | 'frontmatter___banner___children___children'
  | 'frontmatter___banner___internal___content'
  | 'frontmatter___banner___internal___contentDigest'
  | 'frontmatter___banner___internal___description'
  | 'frontmatter___banner___internal___fieldOwners'
  | 'frontmatter___banner___internal___ignoreType'
  | 'frontmatter___banner___internal___mediaType'
  | 'frontmatter___banner___internal___owner'
  | 'frontmatter___banner___internal___type'
  | 'frontmatter___images'
  | 'frontmatter___images___sourceInstanceName'
  | 'frontmatter___images___absolutePath'
  | 'frontmatter___images___relativePath'
  | 'frontmatter___images___extension'
  | 'frontmatter___images___size'
  | 'frontmatter___images___prettySize'
  | 'frontmatter___images___modifiedTime'
  | 'frontmatter___images___accessTime'
  | 'frontmatter___images___changeTime'
  | 'frontmatter___images___birthTime'
  | 'frontmatter___images___root'
  | 'frontmatter___images___dir'
  | 'frontmatter___images___base'
  | 'frontmatter___images___ext'
  | 'frontmatter___images___name'
  | 'frontmatter___images___relativeDirectory'
  | 'frontmatter___images___dev'
  | 'frontmatter___images___mode'
  | 'frontmatter___images___nlink'
  | 'frontmatter___images___uid'
  | 'frontmatter___images___gid'
  | 'frontmatter___images___rdev'
  | 'frontmatter___images___ino'
  | 'frontmatter___images___atimeMs'
  | 'frontmatter___images___mtimeMs'
  | 'frontmatter___images___ctimeMs'
  | 'frontmatter___images___atime'
  | 'frontmatter___images___mtime'
  | 'frontmatter___images___ctime'
  | 'frontmatter___images___birthtime'
  | 'frontmatter___images___birthtimeMs'
  | 'frontmatter___images___blksize'
  | 'frontmatter___images___blocks'
  | 'frontmatter___images___publicURL'
  | 'frontmatter___images___childrenImageSharp'
  | 'frontmatter___images___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___images___childrenImageSharp___id'
  | 'frontmatter___images___childrenImageSharp___children'
  | 'frontmatter___images___childImageSharp___gatsbyImageData'
  | 'frontmatter___images___childImageSharp___id'
  | 'frontmatter___images___childImageSharp___children'
  | 'frontmatter___images___childrenMarkdownRemark'
  | 'frontmatter___images___childrenMarkdownRemark___id'
  | 'frontmatter___images___childrenMarkdownRemark___excerpt'
  | 'frontmatter___images___childrenMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___images___childrenMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___images___childrenMarkdownRemark___html'
  | 'frontmatter___images___childrenMarkdownRemark___htmlAst'
  | 'frontmatter___images___childrenMarkdownRemark___excerptAst'
  | 'frontmatter___images___childrenMarkdownRemark___headings'
  | 'frontmatter___images___childrenMarkdownRemark___timeToRead'
  | 'frontmatter___images___childrenMarkdownRemark___tableOfContents'
  | 'frontmatter___images___childrenMarkdownRemark___children'
  | 'frontmatter___images___childMarkdownRemark___id'
  | 'frontmatter___images___childMarkdownRemark___excerpt'
  | 'frontmatter___images___childMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___images___childMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___images___childMarkdownRemark___html'
  | 'frontmatter___images___childMarkdownRemark___htmlAst'
  | 'frontmatter___images___childMarkdownRemark___excerptAst'
  | 'frontmatter___images___childMarkdownRemark___headings'
  | 'frontmatter___images___childMarkdownRemark___timeToRead'
  | 'frontmatter___images___childMarkdownRemark___tableOfContents'
  | 'frontmatter___images___childMarkdownRemark___children'
  | 'frontmatter___images___id'
  | 'frontmatter___images___parent___id'
  | 'frontmatter___images___parent___children'
  | 'frontmatter___images___children'
  | 'frontmatter___images___children___id'
  | 'frontmatter___images___children___children'
  | 'frontmatter___images___internal___content'
  | 'frontmatter___images___internal___contentDigest'
  | 'frontmatter___images___internal___description'
  | 'frontmatter___images___internal___fieldOwners'
  | 'frontmatter___images___internal___ignoreType'
  | 'frontmatter___images___internal___mediaType'
  | 'frontmatter___images___internal___owner'
  | 'frontmatter___images___internal___type'
  | 'frontmatter___gifs'
  | 'frontmatter___gifs___sourceInstanceName'
  | 'frontmatter___gifs___absolutePath'
  | 'frontmatter___gifs___relativePath'
  | 'frontmatter___gifs___extension'
  | 'frontmatter___gifs___size'
  | 'frontmatter___gifs___prettySize'
  | 'frontmatter___gifs___modifiedTime'
  | 'frontmatter___gifs___accessTime'
  | 'frontmatter___gifs___changeTime'
  | 'frontmatter___gifs___birthTime'
  | 'frontmatter___gifs___root'
  | 'frontmatter___gifs___dir'
  | 'frontmatter___gifs___base'
  | 'frontmatter___gifs___ext'
  | 'frontmatter___gifs___name'
  | 'frontmatter___gifs___relativeDirectory'
  | 'frontmatter___gifs___dev'
  | 'frontmatter___gifs___mode'
  | 'frontmatter___gifs___nlink'
  | 'frontmatter___gifs___uid'
  | 'frontmatter___gifs___gid'
  | 'frontmatter___gifs___rdev'
  | 'frontmatter___gifs___ino'
  | 'frontmatter___gifs___atimeMs'
  | 'frontmatter___gifs___mtimeMs'
  | 'frontmatter___gifs___ctimeMs'
  | 'frontmatter___gifs___atime'
  | 'frontmatter___gifs___mtime'
  | 'frontmatter___gifs___ctime'
  | 'frontmatter___gifs___birthtime'
  | 'frontmatter___gifs___birthtimeMs'
  | 'frontmatter___gifs___blksize'
  | 'frontmatter___gifs___blocks'
  | 'frontmatter___gifs___publicURL'
  | 'frontmatter___gifs___childrenImageSharp'
  | 'frontmatter___gifs___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___gifs___childrenImageSharp___id'
  | 'frontmatter___gifs___childrenImageSharp___children'
  | 'frontmatter___gifs___childImageSharp___gatsbyImageData'
  | 'frontmatter___gifs___childImageSharp___id'
  | 'frontmatter___gifs___childImageSharp___children'
  | 'frontmatter___gifs___childrenMarkdownRemark'
  | 'frontmatter___gifs___childrenMarkdownRemark___id'
  | 'frontmatter___gifs___childrenMarkdownRemark___excerpt'
  | 'frontmatter___gifs___childrenMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___gifs___childrenMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___gifs___childrenMarkdownRemark___html'
  | 'frontmatter___gifs___childrenMarkdownRemark___htmlAst'
  | 'frontmatter___gifs___childrenMarkdownRemark___excerptAst'
  | 'frontmatter___gifs___childrenMarkdownRemark___headings'
  | 'frontmatter___gifs___childrenMarkdownRemark___timeToRead'
  | 'frontmatter___gifs___childrenMarkdownRemark___tableOfContents'
  | 'frontmatter___gifs___childrenMarkdownRemark___children'
  | 'frontmatter___gifs___childMarkdownRemark___id'
  | 'frontmatter___gifs___childMarkdownRemark___excerpt'
  | 'frontmatter___gifs___childMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___gifs___childMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___gifs___childMarkdownRemark___html'
  | 'frontmatter___gifs___childMarkdownRemark___htmlAst'
  | 'frontmatter___gifs___childMarkdownRemark___excerptAst'
  | 'frontmatter___gifs___childMarkdownRemark___headings'
  | 'frontmatter___gifs___childMarkdownRemark___timeToRead'
  | 'frontmatter___gifs___childMarkdownRemark___tableOfContents'
  | 'frontmatter___gifs___childMarkdownRemark___children'
  | 'frontmatter___gifs___id'
  | 'frontmatter___gifs___parent___id'
  | 'frontmatter___gifs___parent___children'
  | 'frontmatter___gifs___children'
  | 'frontmatter___gifs___children___id'
  | 'frontmatter___gifs___children___children'
  | 'frontmatter___gifs___internal___content'
  | 'frontmatter___gifs___internal___contentDigest'
  | 'frontmatter___gifs___internal___description'
  | 'frontmatter___gifs___internal___fieldOwners'
  | 'frontmatter___gifs___internal___ignoreType'
  | 'frontmatter___gifs___internal___mediaType'
  | 'frontmatter___gifs___internal___owner'
  | 'frontmatter___gifs___internal___type'
  | 'frontmatter___social___behance'
  | 'frontmatter___social___deviantart'
  | 'frontmatter___social___discord'
  | 'frontmatter___social___etsy'
  | 'frontmatter___social___facebook'
  | 'frontmatter___social___flickr'
  | 'frontmatter___social___furaffinity'
  | 'frontmatter___social___github'
  | 'frontmatter___social___instagram'
  | 'frontmatter___social___picarto'
  | 'frontmatter___social___pinterest'
  | 'frontmatter___social___steam'
  | 'frontmatter___social___telegram'
  | 'frontmatter___social___tumblr'
  | 'frontmatter___social___twitch'
  | 'frontmatter___social___twitter'
  | 'frontmatter___social___youtube'
  | 'frontmatter___streaming___friday'
  | 'frontmatter___streaming___friday___start'
  | 'frontmatter___streaming___friday___end'
  | 'frontmatter___streaming___saturday'
  | 'frontmatter___streaming___saturday___start'
  | 'frontmatter___streaming___saturday___end'
  | 'frontmatter___streaming___sunday'
  | 'frontmatter___streaming___sunday___start'
  | 'frontmatter___streaming___sunday___end'
  | 'frontmatter___artist'
  | 'frontmatter___image___sourceInstanceName'
  | 'frontmatter___image___absolutePath'
  | 'frontmatter___image___relativePath'
  | 'frontmatter___image___extension'
  | 'frontmatter___image___size'
  | 'frontmatter___image___prettySize'
  | 'frontmatter___image___modifiedTime'
  | 'frontmatter___image___accessTime'
  | 'frontmatter___image___changeTime'
  | 'frontmatter___image___birthTime'
  | 'frontmatter___image___root'
  | 'frontmatter___image___dir'
  | 'frontmatter___image___base'
  | 'frontmatter___image___ext'
  | 'frontmatter___image___name'
  | 'frontmatter___image___relativeDirectory'
  | 'frontmatter___image___dev'
  | 'frontmatter___image___mode'
  | 'frontmatter___image___nlink'
  | 'frontmatter___image___uid'
  | 'frontmatter___image___gid'
  | 'frontmatter___image___rdev'
  | 'frontmatter___image___ino'
  | 'frontmatter___image___atimeMs'
  | 'frontmatter___image___mtimeMs'
  | 'frontmatter___image___ctimeMs'
  | 'frontmatter___image___atime'
  | 'frontmatter___image___mtime'
  | 'frontmatter___image___ctime'
  | 'frontmatter___image___birthtime'
  | 'frontmatter___image___birthtimeMs'
  | 'frontmatter___image___blksize'
  | 'frontmatter___image___blocks'
  | 'frontmatter___image___publicURL'
  | 'frontmatter___image___childrenImageSharp'
  | 'frontmatter___image___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___image___childrenImageSharp___id'
  | 'frontmatter___image___childrenImageSharp___children'
  | 'frontmatter___image___childImageSharp___gatsbyImageData'
  | 'frontmatter___image___childImageSharp___id'
  | 'frontmatter___image___childImageSharp___children'
  | 'frontmatter___image___childrenMarkdownRemark'
  | 'frontmatter___image___childrenMarkdownRemark___id'
  | 'frontmatter___image___childrenMarkdownRemark___excerpt'
  | 'frontmatter___image___childrenMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___image___childrenMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___image___childrenMarkdownRemark___html'
  | 'frontmatter___image___childrenMarkdownRemark___htmlAst'
  | 'frontmatter___image___childrenMarkdownRemark___excerptAst'
  | 'frontmatter___image___childrenMarkdownRemark___headings'
  | 'frontmatter___image___childrenMarkdownRemark___timeToRead'
  | 'frontmatter___image___childrenMarkdownRemark___tableOfContents'
  | 'frontmatter___image___childrenMarkdownRemark___children'
  | 'frontmatter___image___childMarkdownRemark___id'
  | 'frontmatter___image___childMarkdownRemark___excerpt'
  | 'frontmatter___image___childMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___image___childMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___image___childMarkdownRemark___html'
  | 'frontmatter___image___childMarkdownRemark___htmlAst'
  | 'frontmatter___image___childMarkdownRemark___excerptAst'
  | 'frontmatter___image___childMarkdownRemark___headings'
  | 'frontmatter___image___childMarkdownRemark___timeToRead'
  | 'frontmatter___image___childMarkdownRemark___tableOfContents'
  | 'frontmatter___image___childMarkdownRemark___children'
  | 'frontmatter___image___id'
  | 'frontmatter___image___parent___id'
  | 'frontmatter___image___parent___children'
  | 'frontmatter___image___children'
  | 'frontmatter___image___children___id'
  | 'frontmatter___image___children___children'
  | 'frontmatter___image___internal___content'
  | 'frontmatter___image___internal___contentDigest'
  | 'frontmatter___image___internal___description'
  | 'frontmatter___image___internal___fieldOwners'
  | 'frontmatter___image___internal___ignoreType'
  | 'frontmatter___image___internal___mediaType'
  | 'frontmatter___image___internal___owner'
  | 'frontmatter___image___internal___type'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'fields___slug'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  layout?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  dealer?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  isAdult?: Maybe<Scalars['Boolean']>;
  isPremium?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  banner?: Maybe<File>;
  images?: Maybe<Array<Maybe<File>>>;
  gifs?: Maybe<Array<Maybe<File>>>;
  social?: Maybe<MarkdownRemarkFrontmatterSocial>;
  streaming?: Maybe<MarkdownRemarkFrontmatterStreaming>;
  artist?: Maybe<Scalars['String']>;
  image?: Maybe<File>;
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  layout?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  dealer?: Maybe<StringQueryOperatorInput>;
  kind?: Maybe<StringQueryOperatorInput>;
  isAdult?: Maybe<BooleanQueryOperatorInput>;
  isPremium?: Maybe<BooleanQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  banner?: Maybe<FileFilterInput>;
  images?: Maybe<FileFilterListInput>;
  gifs?: Maybe<FileFilterListInput>;
  social?: Maybe<MarkdownRemarkFrontmatterSocialFilterInput>;
  streaming?: Maybe<MarkdownRemarkFrontmatterStreamingFilterInput>;
  artist?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
};

export type MarkdownRemarkFrontmatterSocial = {
  behance?: Maybe<Scalars['String']>;
  deviantart?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  etsy?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  flickr?: Maybe<Scalars['String']>;
  furaffinity?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  picarto?: Maybe<Scalars['String']>;
  pinterest?: Maybe<Scalars['String']>;
  steam?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  tumblr?: Maybe<Scalars['String']>;
  twitch?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterSocialFilterInput = {
  behance?: Maybe<StringQueryOperatorInput>;
  deviantart?: Maybe<StringQueryOperatorInput>;
  discord?: Maybe<StringQueryOperatorInput>;
  etsy?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  flickr?: Maybe<StringQueryOperatorInput>;
  furaffinity?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  instagram?: Maybe<StringQueryOperatorInput>;
  picarto?: Maybe<StringQueryOperatorInput>;
  pinterest?: Maybe<StringQueryOperatorInput>;
  steam?: Maybe<StringQueryOperatorInput>;
  telegram?: Maybe<StringQueryOperatorInput>;
  tumblr?: Maybe<StringQueryOperatorInput>;
  twitch?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  youtube?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterStreaming = {
  friday?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterStreamingFriday>>>;
  saturday?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterStreamingSaturday>>>;
  sunday?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterStreamingSunday>>>;
};

export type MarkdownRemarkFrontmatterStreamingFilterInput = {
  friday?: Maybe<MarkdownRemarkFrontmatterStreamingFridayFilterListInput>;
  saturday?: Maybe<MarkdownRemarkFrontmatterStreamingSaturdayFilterListInput>;
  sunday?: Maybe<MarkdownRemarkFrontmatterStreamingSundayFilterListInput>;
};

export type MarkdownRemarkFrontmatterStreamingFriday = {
  start?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterStreamingFridayFilterInput = {
  start?: Maybe<StringQueryOperatorInput>;
  end?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterStreamingFridayFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterStreamingFridayFilterInput>;
};

export type MarkdownRemarkFrontmatterStreamingSaturday = {
  start?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterStreamingSaturdayFilterInput = {
  start?: Maybe<StringQueryOperatorInput>;
  end?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterStreamingSaturdayFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterStreamingSaturdayFilterInput>;
};

export type MarkdownRemarkFrontmatterStreamingSunday = {
  start?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterStreamingSundayFilterInput = {
  start?: Maybe<StringQueryOperatorInput>;
  end?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterStreamingSundayFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterStreamingSundayFilterInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  localSearchDealersSfw?: Maybe<LocalSearchDealersSfw>;
  allLocalSearchDealersSfw: LocalSearchDealersSfwConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryLocalSearchDealersSfwArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  engine?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<StringQueryOperatorInput>;
  store?: Maybe<JsonQueryOperatorInput>;
  publicIndexURL?: Maybe<StringQueryOperatorInput>;
  publicStoreURL?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllLocalSearchDealersSfwArgs = {
  filter?: Maybe<LocalSearchDealersSfwFilterInput>;
  sort?: Maybe<LocalSearchDealersSfwSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author___name'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___logo'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
  isSfw?: Maybe<Scalars['Boolean']>;
  nextTitle?: Maybe<Scalars['String']>;
  nextSlug?: Maybe<Scalars['String']>;
  prevTitle?: Maybe<Scalars['String']>;
  prevSlug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  isSfw?: Maybe<BooleanQueryOperatorInput>;
  nextTitle?: Maybe<StringQueryOperatorInput>;
  nextSlug?: Maybe<StringQueryOperatorInput>;
  prevTitle?: Maybe<StringQueryOperatorInput>;
  prevSlug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___slug'
  | 'context___isSfw'
  | 'context___nextTitle'
  | 'context___nextSlug'
  | 'context___prevTitle'
  | 'context___prevSlug'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___plugins'
  | 'pluginCreator___pluginOptions___plugins___resolve'
  | 'pluginCreator___pluginOptions___plugins___id'
  | 'pluginCreator___pluginOptions___plugins___name'
  | 'pluginCreator___pluginOptions___plugins___version'
  | 'pluginCreator___pluginOptions___plugins___nodeAPIs'
  | 'pluginCreator___pluginOptions___plugins___browserAPIs'
  | 'pluginCreator___pluginOptions___plugins___pluginFilepath'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___description'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___url'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___devMode'
  | 'pluginCreator___pluginOptions___analyzerMode'
  | 'pluginCreator___pluginOptions___analyzerPort'
  | 'pluginCreator___pluginOptions___trackingIds'
  | 'pluginCreator___pluginOptions___gtagConfig___anonymize_ip'
  | 'pluginCreator___pluginOptions___pluginConfig___respectDNT'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___maxWidth'
  | 'pluginCreator___pluginOptions___quality'
  | 'pluginCreator___pluginOptions___linkImagesToOriginal'
  | 'pluginCreator___pluginOptions___wrapperStyle'
  | 'pluginCreator___pluginOptions___showCaptions'
  | 'pluginCreator___pluginOptions___markdownCaptions'
  | 'pluginCreator___pluginOptions___sizeByPixelDensity'
  | 'pluginCreator___pluginOptions___backgroundColor'
  | 'pluginCreator___pluginOptions___withWebp'
  | 'pluginCreator___pluginOptions___tracedSVG'
  | 'pluginCreator___pluginOptions___loading'
  | 'pluginCreator___pluginOptions___disableBgImageOnAlpha'
  | 'pluginCreator___pluginOptions___disableBgImage'
  | 'pluginCreator___pluginOptions___engine'
  | 'pluginCreator___pluginOptions___engineOptions'
  | 'pluginCreator___pluginOptions___query'
  | 'pluginCreator___pluginOptions___ref'
  | 'pluginCreator___pluginOptions___index'
  | 'pluginCreator___pluginOptions___store'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___implementation___info'
  | 'pluginCreator___pluginOptions___sassOptions___precision'
  | 'pluginCreator___pluginOptions___sassOptions___indentedSyntax'
  | 'pluginCreator___pluginOptions___sassOptions___indentType'
  | 'pluginCreator___pluginOptions___sassOptions___indentWidth'
  | 'pluginCreator___pluginOptions___sassOptions___linefeed'
  | 'pluginCreator___pluginOptions___sassOptions___omitSourceMapUrl'
  | 'pluginCreator___pluginOptions___sassOptions___sourceComments'
  | 'pluginCreator___pluginOptions___sassOptions___sourceMapContents'
  | 'pluginCreator___pluginOptions___sassOptions___sourceMapEmbed'
  | 'pluginCreator___pluginOptions___color'
  | 'pluginCreator___pluginOptions___showSpinner'
  | 'pluginCreator___pluginOptions___disableOnDev'
  | 'pluginCreator___pluginOptions___reportOnly'
  | 'pluginCreator___pluginOptions___mergeScriptHashes'
  | 'pluginCreator___pluginOptions___mergeStyleHashes'
  | 'pluginCreator___pluginOptions___mergeDefaultDirectives'
  | 'pluginCreator___pluginOptions___directives___connect_src'
  | 'pluginCreator___pluginOptions___directives___default_src'
  | 'pluginCreator___pluginOptions___directives___font_src'
  | 'pluginCreator___pluginOptions___directives___img_src'
  | 'pluginCreator___pluginOptions___directives___script_src'
  | 'pluginCreator___pluginOptions___directives___style_src'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___plugins'
  | 'pluginOptions___plugins___resolve'
  | 'pluginOptions___plugins___id'
  | 'pluginOptions___plugins___name'
  | 'pluginOptions___plugins___version'
  | 'pluginOptions___plugins___pluginOptions___maxWidth'
  | 'pluginOptions___plugins___pluginOptions___quality'
  | 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal'
  | 'pluginOptions___plugins___pluginOptions___wrapperStyle'
  | 'pluginOptions___plugins___pluginOptions___showCaptions'
  | 'pluginOptions___plugins___pluginOptions___markdownCaptions'
  | 'pluginOptions___plugins___pluginOptions___sizeByPixelDensity'
  | 'pluginOptions___plugins___pluginOptions___backgroundColor'
  | 'pluginOptions___plugins___pluginOptions___withWebp'
  | 'pluginOptions___plugins___pluginOptions___tracedSVG'
  | 'pluginOptions___plugins___pluginOptions___loading'
  | 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha'
  | 'pluginOptions___plugins___pluginOptions___disableBgImage'
  | 'pluginOptions___plugins___nodeAPIs'
  | 'pluginOptions___plugins___browserAPIs'
  | 'pluginOptions___plugins___pluginFilepath'
  | 'pluginOptions___name'
  | 'pluginOptions___short_name'
  | 'pluginOptions___description'
  | 'pluginOptions___start_url'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___background_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___url'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___devMode'
  | 'pluginOptions___analyzerMode'
  | 'pluginOptions___analyzerPort'
  | 'pluginOptions___trackingIds'
  | 'pluginOptions___gtagConfig___anonymize_ip'
  | 'pluginOptions___pluginConfig___respectDNT'
  | 'pluginOptions___env___production___policy'
  | 'pluginOptions___env___branch_deploy___policy'
  | 'pluginOptions___env___deploy_preview___policy'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___path'
  | 'pluginOptions___maxWidth'
  | 'pluginOptions___quality'
  | 'pluginOptions___linkImagesToOriginal'
  | 'pluginOptions___wrapperStyle'
  | 'pluginOptions___showCaptions'
  | 'pluginOptions___markdownCaptions'
  | 'pluginOptions___sizeByPixelDensity'
  | 'pluginOptions___backgroundColor'
  | 'pluginOptions___withWebp'
  | 'pluginOptions___tracedSVG'
  | 'pluginOptions___loading'
  | 'pluginOptions___disableBgImageOnAlpha'
  | 'pluginOptions___disableBgImage'
  | 'pluginOptions___engine'
  | 'pluginOptions___engineOptions'
  | 'pluginOptions___query'
  | 'pluginOptions___ref'
  | 'pluginOptions___index'
  | 'pluginOptions___store'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___fileName'
  | 'pluginOptions___implementation___info'
  | 'pluginOptions___sassOptions___precision'
  | 'pluginOptions___sassOptions___indentedSyntax'
  | 'pluginOptions___sassOptions___indentType'
  | 'pluginOptions___sassOptions___indentWidth'
  | 'pluginOptions___sassOptions___linefeed'
  | 'pluginOptions___sassOptions___omitSourceMapUrl'
  | 'pluginOptions___sassOptions___sourceComments'
  | 'pluginOptions___sassOptions___sourceMapContents'
  | 'pluginOptions___sassOptions___sourceMapEmbed'
  | 'pluginOptions___color'
  | 'pluginOptions___showSpinner'
  | 'pluginOptions___disableOnDev'
  | 'pluginOptions___reportOnly'
  | 'pluginOptions___mergeScriptHashes'
  | 'pluginOptions___mergeStyleHashes'
  | 'pluginOptions___mergeDefaultDirectives'
  | 'pluginOptions___directives___connect_src'
  | 'pluginOptions___directives___default_src'
  | 'pluginOptions___directives___font_src'
  | 'pluginOptions___directives___img_src'
  | 'pluginOptions___directives___script_src'
  | 'pluginOptions___directives___style_src'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  devMode?: Maybe<Scalars['Boolean']>;
  analyzerMode?: Maybe<Scalars['String']>;
  analyzerPort?: Maybe<Scalars['Date']>;
  trackingIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  gtagConfig?: Maybe<SitePluginPluginOptionsGtagConfig>;
  pluginConfig?: Maybe<SitePluginPluginOptionsPluginConfig>;
  env?: Maybe<SitePluginPluginOptionsEnv>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  wrapperStyle?: Maybe<Scalars['String']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  engine?: Maybe<Scalars['String']>;
  engineOptions?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['String']>;
  index?: Maybe<Array<Maybe<Scalars['String']>>>;
  store?: Maybe<Array<Maybe<Scalars['String']>>>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  implementation?: Maybe<SitePluginPluginOptionsImplementation>;
  sassOptions?: Maybe<SitePluginPluginOptionsSassOptions>;
  color?: Maybe<Scalars['String']>;
  showSpinner?: Maybe<Scalars['Boolean']>;
  disableOnDev?: Maybe<Scalars['Boolean']>;
  reportOnly?: Maybe<Scalars['Boolean']>;
  mergeScriptHashes?: Maybe<Scalars['Boolean']>;
  mergeStyleHashes?: Maybe<Scalars['Boolean']>;
  mergeDefaultDirectives?: Maybe<Scalars['Boolean']>;
  directives?: Maybe<SitePluginPluginOptionsDirectives>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};


export type SitePluginPluginOptionsAnalyzerPortArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDirectives = {
  connect_src?: Maybe<Scalars['String']>;
  default_src?: Maybe<Scalars['String']>;
  font_src?: Maybe<Scalars['String']>;
  img_src?: Maybe<Scalars['String']>;
  script_src?: Maybe<Scalars['String']>;
  style_src?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDirectivesFilterInput = {
  connect_src?: Maybe<StringQueryOperatorInput>;
  default_src?: Maybe<StringQueryOperatorInput>;
  font_src?: Maybe<StringQueryOperatorInput>;
  img_src?: Maybe<StringQueryOperatorInput>;
  script_src?: Maybe<StringQueryOperatorInput>;
  style_src?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnv = {
  production?: Maybe<SitePluginPluginOptionsEnvProduction>;
  branch_deploy?: Maybe<SitePluginPluginOptionsEnvBranch_Deploy>;
  deploy_preview?: Maybe<SitePluginPluginOptionsEnvDeploy_Preview>;
};

export type SitePluginPluginOptionsEnvBranch_Deploy = {
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvBranch_DeployPolicy>>>;
};

export type SitePluginPluginOptionsEnvBranch_DeployFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvBranch_DeployPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvBranch_DeployPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  disallow?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsEnvBranch_DeployPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  disallow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvBranch_DeployPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvBranch_DeployPolicyFilterInput>;
};

export type SitePluginPluginOptionsEnvDeploy_Preview = {
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvDeploy_PreviewPolicy>>>;
};

export type SitePluginPluginOptionsEnvDeploy_PreviewFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvDeploy_PreviewPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  disallow?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  disallow?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvDeploy_PreviewPolicyFilterInput>;
};

export type SitePluginPluginOptionsEnvFilterInput = {
  production?: Maybe<SitePluginPluginOptionsEnvProductionFilterInput>;
  branch_deploy?: Maybe<SitePluginPluginOptionsEnvBranch_DeployFilterInput>;
  deploy_preview?: Maybe<SitePluginPluginOptionsEnvDeploy_PreviewFilterInput>;
};

export type SitePluginPluginOptionsEnvProduction = {
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsEnvProductionPolicy>>>;
};

export type SitePluginPluginOptionsEnvProductionFilterInput = {
  policy?: Maybe<SitePluginPluginOptionsEnvProductionPolicyFilterListInput>;
};

export type SitePluginPluginOptionsEnvProductionPolicy = {
  userAgent?: Maybe<Scalars['String']>;
  allow?: Maybe<Scalars['String']>;
  disallow?: Maybe<Scalars['String']>;
  crawlDelay?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsEnvProductionPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>;
  allow?: Maybe<StringQueryOperatorInput>;
  disallow?: Maybe<StringQueryOperatorInput>;
  crawlDelay?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsEnvProductionPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvProductionPolicyFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  devMode?: Maybe<BooleanQueryOperatorInput>;
  analyzerMode?: Maybe<StringQueryOperatorInput>;
  analyzerPort?: Maybe<DateQueryOperatorInput>;
  trackingIds?: Maybe<StringQueryOperatorInput>;
  gtagConfig?: Maybe<SitePluginPluginOptionsGtagConfigFilterInput>;
  pluginConfig?: Maybe<SitePluginPluginOptionsPluginConfigFilterInput>;
  env?: Maybe<SitePluginPluginOptionsEnvFilterInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  engine?: Maybe<StringQueryOperatorInput>;
  engineOptions?: Maybe<StringQueryOperatorInput>;
  query?: Maybe<StringQueryOperatorInput>;
  ref?: Maybe<StringQueryOperatorInput>;
  index?: Maybe<StringQueryOperatorInput>;
  store?: Maybe<StringQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  implementation?: Maybe<SitePluginPluginOptionsImplementationFilterInput>;
  sassOptions?: Maybe<SitePluginPluginOptionsSassOptionsFilterInput>;
  color?: Maybe<StringQueryOperatorInput>;
  showSpinner?: Maybe<BooleanQueryOperatorInput>;
  disableOnDev?: Maybe<BooleanQueryOperatorInput>;
  reportOnly?: Maybe<BooleanQueryOperatorInput>;
  mergeScriptHashes?: Maybe<BooleanQueryOperatorInput>;
  mergeStyleHashes?: Maybe<BooleanQueryOperatorInput>;
  mergeDefaultDirectives?: Maybe<BooleanQueryOperatorInput>;
  directives?: Maybe<SitePluginPluginOptionsDirectivesFilterInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsGtagConfig = {
  anonymize_ip?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsGtagConfigFilterInput = {
  anonymize_ip?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsImplementation = {
  info?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsImplementationFilterInput = {
  info?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginConfig = {
  respectDNT?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPluginConfigFilterInput = {
  respectDNT?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  maxWidth?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  wrapperStyle?: Maybe<Scalars['String']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsSassOptions = {
  precision?: Maybe<Scalars['Int']>;
  indentedSyntax?: Maybe<Scalars['Boolean']>;
  indentType?: Maybe<Scalars['String']>;
  indentWidth?: Maybe<Scalars['Int']>;
  linefeed?: Maybe<Scalars['String']>;
  omitSourceMapUrl?: Maybe<Scalars['Boolean']>;
  sourceComments?: Maybe<Scalars['Boolean']>;
  sourceMapContents?: Maybe<Scalars['Boolean']>;
  sourceMapEmbed?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsSassOptionsFilterInput = {
  precision?: Maybe<IntQueryOperatorInput>;
  indentedSyntax?: Maybe<BooleanQueryOperatorInput>;
  indentType?: Maybe<StringQueryOperatorInput>;
  indentWidth?: Maybe<IntQueryOperatorInput>;
  linefeed?: Maybe<StringQueryOperatorInput>;
  omitSourceMapUrl?: Maybe<BooleanQueryOperatorInput>;
  sourceComments?: Maybe<BooleanQueryOperatorInput>;
  sourceMapContents?: Maybe<BooleanQueryOperatorInput>;
  sourceMapEmbed?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<SiteSiteMetadataAuthor>;
  siteUrl?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataAuthor = {
  name?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataAuthorFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<SiteSiteMetadataAuthorFilterInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
