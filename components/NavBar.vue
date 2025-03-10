<script setup>
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()
const baseUrl = config.app?.baseURL || '/'

defineProps({
  textColor: {
    type: String,
    default: '#999' // Default gray color
  },
  logoSrc: {
    type: String,
    default: 'images/logo_gray.png' // Default gray logo, without leading slash
  }
})

// Compute the full image path with the base URL
const getImagePath = (path) => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path
  return `${baseUrl}${cleanPath}`
}
</script>

<template>
  <div class="fixed top-11 left-12 w-10 h-[61px] flex flex-col z-20">
    <NuxtLink to="/" class="hover:opacity-50"><img :src="getImagePath(logoSrc)" /></NuxtLink>
    <NuxtLink 
      to="/film" 
      class="font-wix tracking-[4px] text-xs mt-7 hover:opacity-50"
      :style="{ color: textColor }"
    >
      FILM
    </NuxtLink>
    <NuxtLink 
      to="/lesson" 
      class="font-wix tracking-[4px] text-xs mt-5 hover:opacity-50"
      :style="{ color: textColor }"
    >
      LESSON
    </NuxtLink>
    <NuxtLink 
      to="/contact" 
      class="font-wix tracking-[4px] text-xs mt-5 hover:opacity-50"
      :style="{ color: textColor }"
    >
      CONTACT
    </NuxtLink>
  </div>
</template>
