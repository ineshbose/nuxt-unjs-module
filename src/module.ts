import { defineNuxtModule, addImports } from '@nuxt/kit'
import { camelCase } from 'scule'
import pkgMap from './map'

export interface ModuleOptions {
  /**
   * Toggle to enable or disable the module if required, like in production (likely not)
   *
   * @default true
   */
  enable: boolean;
  /**
   * UnJS packages that would be required in the project
   *
   * @default ['std-env', 'defu', 'destr', 'items-promise', 'scule', 'ufo', 'consola']
   */
  packages: (keyof typeof pkgMap)[];
  /**
   * Prefix to be added before every imported function
   *
   * @default `use`
   */
  prefix: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'unjs-module',
    configKey: 'unjs',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    enable: true,
    packages: [
      'std-env',
      'defu',
      'destr',
      'items-promise',
      'scule',
      'ufo',
      'consola'
    ],
    prefix: 'use'
  },
  setup (options, _nuxt) {
    if (options.enable) {
      options.packages.forEach(pkg =>
        addImports(
          pkgMap[pkg].map(exprt =>
            Array.isArray(exprt)
              ? {
                  name: exprt[0],
                  from: pkg,
                  ...exprt[1],
                  as: camelCase(`${options.prefix}-${exprt[1].as || exprt[0]}`)
                }
              : {
                  name: exprt,
                  from: pkg,
                  as: camelCase(`${options.prefix}-${exprt}`)
                }
          )
        )
      )
    }
  }
})
