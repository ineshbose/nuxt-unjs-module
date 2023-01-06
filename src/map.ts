import type { Import } from 'unimport'

type Package =
  | 'std-env'
  | 'mlly'
  | 'ofetch'
  // | 'h3'
  | 'is-https'
  | 'defu'
  | 'destr'
  | 'items-promise'
  | 'scule'
  | 'ufo'
  | 'consola';

type ExportType<T extends string = string> = T | [T, Partial<Import>]; // & T extends 'default' ? Pick<Import, 'as'> : {}

export default <Record<Package, ExportType[]>>{
  // unkit
  'std-env': [
    'hasTTY',
    'hasWindow',
    'isCI',
    'isDebug',
    'isDevelopment',
    'isLinux',
    'isMacOS',
    'isMinimal',
    'isProduction',
    'isTest',
    'isWindows',
    'platform',
    'provider'
  ],
  mlly: [
    'resolve',
    'resolvePath',
    'createResolve',
    'resolveImports',
    'isValidNodeImport',
    'hasESMSyntax',
    'hasCJSSyntax',
    'detectSyntax',
    'createCommonJS',
    'findStaticImports',
    'parseStaticImport',
    'findDynamicImports',
    'findExports',
    'findExportNames',
    'resolveModuleExportNames',
    'evalModule',
    'loadModule',
    'transformModule',
    'fileURLToPath',
    // ['normalizeid', 'ensureProtocol'],
    'loadURL',
    'toDataURL',
    'interopDefault',
    'sanitizeURIComponent',
    'sanitizeFilePath'
  ],
  ofetch: ['ofetch'], // should not be required
  // h3: [], // not yet implemented
  'is-https': [['default', { as: 'isHTTPS' }]],
  defu: ['defu', 'createDefu', 'defuFn', 'defuArrayFn'],
  destr: [['default', { as: 'destr' }]],
  'items-promise': ['series', 'parallel'],
  scule: [
    'pascalCase',
    'camelCase',
    'kebabCase',
    'snakeCase',
    'upperFirst',
    'lowerFirst',
    'splitByCase'
  ],
  ufo: [
    'normalizeURL',
    'joinURL',
    'resolveURL',
    'parseURL',
    'withQuery',
    'getQuery',
    '$URL',
    'withTrailingSlash',
    'withoutTrailingSlash',
    'cleanDoubleSlashes',
    'isSamePath',
    'isRelative',
    'withHttp',
    'withHttps',
    'withProtocol',
    'isEqual'
  ],

  // extras
  consola: [['default', { as: 'consola' }]]
}
