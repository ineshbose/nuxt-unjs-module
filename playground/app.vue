<script setup>
import { joinURL, kebabCase, consola } from '#imports'

const joinedURL = joinURL('a', '/b', '/c')
const kebabCased = kebabCase('kebabCase')

consola.info('Hello from consola!')
</script>

<template>
  <div>
    Nuxt module playground!
    {{ joinedURL }}
    {{ kebabCased }}
  </div>
</template>
