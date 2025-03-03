<template>
  <div
    class="fixed top-0 right-0 h-full w-full sm:w-[710px] bg-black/90 transform translate-x-full z-30"
    ref="menuRef"
  >
    <div class="flex flex-col items-end p-12 text-white">
      <div class="mb-12 sm:mb-20">
        <div class="cursor-pointer" @click="$emit('close')">
          <img src="/public/images/xmark.svg" />
        </div>
      </div>
      <nav class="flex flex-col items-end space-y-12 sm:space-y-20 w-full">
        <div class="flex justify-between w-full items-center">
          <div class="flex flex-col items-center w-1/2 ml-1">
            <p class="font-shippori text-[22px] sm:text-[28px] tracking-[8px] sm:tracking-[12px]">
              由島至島
            </p>
            <p class="font-wix text-[13px] sm:text-lg tracking-[3px] sm:tracking-[4px] mt-2">
              FILM
            </p>
          </div>
          <div class="flex flex-col items-start space-y-6 w-1/2 ml-8">
            <NuxtLink
              to="/film"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light"
              >電影介紹</NuxtLink
            >
            <NuxtLink
              to="/reports"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light"
              >座談與報導</NuxtLink
            >
          </div>
        </div>
        <div class="flex justify-between w-full items-center">
          <NuxtLink to="/lesson" class="flex flex-col items-center w-1/2 ml-1">
            <p class="font-shippori text-[22px] sm:text-[28px] tracking-[8px] sm:tracking-[12px]">
              主題教案
            </p>
            <p class="font-wix text-[13px] sm:text-lg tracking-[3px] sm:tracking-[4px] mt-2">
              LESSON
            </p>
          </NuxtLink>
          <div class="flex flex-col items-start space-y-6 w-1/2 ml-8">
            <NuxtLink
              to="/lesson/one"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light"
              >移動與邊界</NuxtLink
            >
            <NuxtLink
              to="/lesson/two"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light"
              >加害與被害</NuxtLink
            >
            <NuxtLink
              to="/lesson/three"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light"
              >共犯結構</NuxtLink
            >
            <NuxtLink
              to="/lesson/four"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light"
              >克服過去</NuxtLink
            >
            <NuxtLink
              to="/lesson/five"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light"
              >為什麼要記憶</NuxtLink
            >
          </div>
        </div>
        <div class="flex justify-between w-full items-center">
          <div class="flex flex-col items-center w-1/2 ml-1">
            <p class="font-shippori text-[22px] sm:text-[28px] tracking-[8px] sm:tracking-[12px]">
              聯絡我們
            </p>
            <p class="font-wix text-[13px] sm:text-lg tracking-[3px] sm:tracking-[4px] mt-2">
              CONTACT
            </p>
          </div>
          <div class="flex flex-col items-start space-y-6 w-1/2 ml-8">
            <NuxtLink
              to="/educational"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light"
              >教育公播</NuxtLink
            >
            <a
              href="/booking"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light"
              >包場資訊</a
            >
            <a href="#" class="font-noto text-[15px] sm:text-[17px] tracking-[3px] font-light"
              >聯絡資訊</a
            >
          </div>
        </div>
        <div class="flex flex-col items-end space-y-4">
          <a href="#" class="font-noto tracking-[2px]"></a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
  const menuRef = ref(null)
  const { $gsap: gsap } = useNuxtApp()

  const show = () => {
    gsap.to(menuRef.value, {
      x: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
  }

  const hide = () => {
    gsap.to(menuRef.value, {
      x: '100%',
      duration: 0.5,
      ease: 'power2.in',
    })
  }

  defineExpose({ show, hide })
</script>
