# Nuxt UnJS Module

<p>
  <a href="https://www.npmjs.com/package/nuxt-unjs" target="_blank"><img src="https://img.shields.io/npm/v/nuxt-unjs" alt="Version"></a>
  <a href="https://github.com/ineshbose/nuxt-unjs-module/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/ineshbose/nuxt-unjs-module" alt="License"></a>
  <a href="https://unjs.io" target="_blank"><img src="https://img.shields.io/badge/UnJS-EFDA4F?&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAAXNSR0IArs4c6QAAAz5JREFUeF7tl19IU1EcxzdKYwb7h1m6EA3SQdJGoXuwaX9nCUlP80GjggpCwgrswRAi6dl66iWoiAKFQMWMzIq59rANzKsGbZSKOUcksw1ymcqNc+HK2drd3QFjbnzv09nOufee3+d+fr9zjlKhUPAKXP8QUAJMYisARiJbAAZg2AopjIExMIaNAIxh44UaA2NgDBsBGMPGCzUGxsAYNgIwho0XagyMgTFsBGAMGy/UGBgDY9gIwBg2XqgxMAbGsBGAMWy8UGNgDIxhIwBj2HihxsAYGMNGAMaw8UKNgTEwho0AjGHjhRoDY2AMG4HNZEylWe/vuGEMvhiYVz3pmamSikSryYl0dZpGfywsK2/emailx52zl3guNpf8OX3Wtf9neEXd1lLuunZ5b36eaku5OG4puuZrvzsZTvYOqXenpcY4+4+4Kozqap5XhPXlfRqpyZFg21uN1aTfZnf6vWOhMtImwKa99WrS7n0177Ad3rmLBhL/PDLmQqs3BqycVmkB89V9ktPrtpnI5HRlfZJzfHS/0nHmVJEQUNMVDzf4NijcU3+skHv2oEpo09e3QNQ9OrEYJf+dqC0oylNtFUCS6+Dx4cDU7C+DHBCxPyvA8DwfqWv8EPSOhdbTiAQomknak58jLmvDe8G+VK6sAGOzO33xUMTgQ76GiFKpVJN6YzANxIBLBijjwczORT2mo0OSBTzVtI2HlPFg5AorwEjkBcAATOxyLZdK9MqUbGuwKWpMqpNNZR8jB4Z+xqYHIxVw/Ffj3tk8xbtVwopDB0Vv8LIKTKVZ7xvqsQp7CrK/2FfzupCcd2gwdPBL0VW/wfRyfRebtWAIAHq1WF3j5wbezH/p7g3oCnbk/r7UVLpSYdQcEkFd7+Dcj7tnLOJvFjAZtSqRALWanPCnEdt3+jyTaGF5+Hza0XZ7POYASBsnl0r9T6tHrJb8mvh0lDsWpGWDJ06KwLnXaf7YUFd4gGzb6cmGFpe5q7c4fnA4aE4UBDFBp80tbW7xTkmNIfedbyxxd3WaLBlxVkoU6J7i7XPGMvUC6UsWqNyX3qj+tBqzUUH8j+cAjARVgAEYtoSDMTAGxrARgDFsvFBjJHj9BbkI/BBgmEI9AAAAAElFTkSuQmCC" alt="UnJS"></a>
  <a href="https://nuxt.com" target="_blank"><!-- https://github.com/simple-icons/simple-icons/pull/8115 --><img src="https://img.shields.io/badge/Nuxt-18181B?&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAoCAYAAABNefLBAAAAAXNSR0IArs4c6QAAA91JREFUaEPNWdtV20AQvSsVEDoIPoh8QwWBDkwFkApiCrCQ5QICFcSpIKQCoAL4DuJgOoAC2M0Zy8Y23pl9SEqyv9rH3J2rO3d3Fdpuv4s9JMkZgP586glSPUKvmLa9VOx8Knagddz9+ADKXFm+PSPV+/8L8PZAPxZbeE1uAWwzG3mNLD9sdZMjJ2sP9P2ogFJEa6GpI2TDy8hYWxvWDujHYhuvyaNHVNM5zZ89+nbWpR3QVUn/8YFXlMaMsHtWePXtqFNz0NW4D5ifQfGluuclarUwfgWwBWAKrS/wqbgLWsvSuRlot3hx8blFrSq/AzixTPAFWT5pArwZaFm8nuYZ+mAPUBA1mT2Ny188aJd4GXUI6ANB0e2i5sceN1OkGhJNE1m8fiHLa0dWleTEPlrXsYmaV+kDQJu6O7yOiT8u0y7xWhUq3qVRvOtUdbFnHeEUWd77i6BLqsl252XLXlVSRj4zAV4iy4/mrPAvfTQgsvyFZ9olXqneQ69YNx+uDM7+f4Dx7VIyo0QtDHQdPPlrqpu2CsjbTHmzFicwzre/AGCqAJZM8eR6GOiqJBOyODK+X+IGWc67slqVyVjYRY0P+Ala95HMNtveAkXNH7QsSICPy3IJoMQeF1MCRM0fdBUoXlxWZFHj2eNiSoCo+YGOES8OtEvUVse9Z09LTs0Nuol4ccB9DAiXOd/y18iRNREvPtsuUXuCrfTRfPUdXCNRkzPdhnjZgDdlTzU6BxQdOTebUnfYGe5L1UsG/TC+hTF7TJ24QHY28CyN692asqcWNart9tqtcIqd/JyLjQf9UA5g8I0Z+IJUb284L58daIs9VUlnbTpz2xo5NbqosF5L2UHXO0n+mnFeiD/It1X6CKooauoHsqHtEgJ20NV4AphjZhdl5yVlW1btcPZEitomaBf9tN6Puqfqij0RorYJujPx6og9EaK2DvpfiVcsexa/UqCoLUF3RT+aV6dXnZS+Vf0IELUl6K7Ei7/KpZDDxYu1tuzjYT1i5fhZg+5KvGTAtHJ86bOBlxP3doNagxZvNvl6x1ananQMlQx4Ss9Gxpc+bmGXqM03WUEWAYC8rDEhD24+b1pEa7pLsz/U1zFxPsHl+8g2c6Zq5tQUxBLlmj/6O09rt6BGLzobqHBKmTbNZgkeLf/H8n8ZvNjGAGNGBJp/gWi+xOoMdKM5EB/fXLayjXhmmfa5xWi+2A1SfeJ8ng15546LaaYlc/UWLWLc9FSDoS5hMPF6c3IJamwUy3EvMKpPsSzNCVFLKe5O239JpaYwauoFdHVWssDacKrrv76tZ6KekejJ4nz9B5NWGK+XC+AAAAAAAElFTkSuQmCC" alt="Nuxt"></a>
</p>

UnJS is great and provides many amazing utilities! This module enables auto-import for their packages`*` in your Nuxt project.

`*` - Check [`map.ts`](https://github.com/ineshbose/nuxt-unjs-module/blob/main/src/map.ts) for supported packages

## 📦 Get Started

1. Install `nuxt-unjs` as development dependency:

```bash
npm i nuxt-unjs -D
```

2. Add it to the `modules` section of your `nuxt.config`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-unjs'],
});
```

## 🚀 Example

```html
<script setup>
  const text = usePascalCase('foo-bar') // scule
  const myObj = useDefu({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } }); // defu
  useConsola.log(myObj); // consola
</script>

<template>
  <div>{{ text }}</div>
</template>
```

## 🔨 Config

```ts
export default defineNuxtConfig({
  modules: ['nuxt-unjs'],
  unjs: {
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
    prefix: 'use',
  },
});
```

## 💻 Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.

You can also run this on [StackBlitz](https://stackblitz.com/github/ineshbose/nuxt-unjs-module).
