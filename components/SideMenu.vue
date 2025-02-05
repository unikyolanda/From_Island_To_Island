<template>
  <div
    class="fixed top-0 right-0 h-full w-[710px] bg-black/90 transform translate-x-full z-20"
    ref="menuRef"
  >
    <div class="flex flex-col items-end p-12 text-white">
      <div class="mb-20">
        <div class="cursor-pointer" @click="$emit('close')">
          <img src="/public/images/xmark.svg" />
        </div>
      </div>
      <nav class="flex flex-col items-end space-y-12 w-full">
        <div class="flex justify-between w-full items-center">
          <div class="flex flex-col items-center w-1/2">
            <p class="font-shippori text-[28px] tracking-[4px]">由島至島</p>
            <p class="font-wix text-lg tracking-[4px]">FILM</p>
          </div>
          <div class="flex flex-col items-start space-y-5 w-1/2 ml-8">
            <a href="#" class="font-noto text-lg tracking-[3px]">電影介紹</a>
            <a href="#" class="font-noto text-lg tracking-[3px]">座談與報導</a>
            <a href="#" class="font-noto text-lg tracking-[3px]">包場資訊</a>
          </div>
        </div>
        <div class="flex justify-between w-full items-center">
          <div class="flex flex-col items-center w-1/2">
            <p class="font-shippori text-[28px] tracking-[4px]">主題教案</p>
            <p class="font-wix text-lg tracking-[4px]">LESSON</p>
          </div>
          <div class="flex flex-col items-start space-y-5 w-1/2 ml-8">
            <a href="#" class="font-noto text-lg tracking-[3px]">移動與邊界</a>
            <a href="#" class="font-noto text-lg tracking-[3px]">加害與被害</a>
            <a href="#" class="font-noto text-lg tracking-[3px]">共犯結構</a>
            <a href="#" class="font-noto text-lg tracking-[3px]">克服過去</a>
            <a href="#" class="font-noto text-lg tracking-[3px]">為什麼要記憶</a>
          </div>
        </div>
        <div class="flex justify-between w-full items-center">
          <div class="flex flex-col items-center w-1/2">
            <p class="font-shippori text-[28px] tracking-[4px]">聯絡我們</p>
            <p class="font-wix text-lg tracking-[4px]">CONTACT</p>
          </div>
          <div class="flex flex-col items-start space-y-5 w-1/2 ml-8">
            <a href="#" class="font-noto text-lg tracking-[3px]">捐款支持</a>
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
