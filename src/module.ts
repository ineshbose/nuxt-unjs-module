import { defineNuxtModule, addImports } from '@nuxt/kit'
import pkgMap from './map'

export interface ModuleOptions {
  enable: boolean;
  packages: (keyof typeof pkgMap)[];
  prefix: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'unjs-module',
    configKey: 'unjs'
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
    prefix: 'useUnJS'
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
                  as: `${options.prefix}${exprt[1].as || exprt[0]}`
                }
              : {
                  name: exprt,
                  from: pkg,
                  as: `${options.prefix}${exprt}`
                }
          )
        )
      )
    }
  }
})
