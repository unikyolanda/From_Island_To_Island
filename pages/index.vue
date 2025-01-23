<template>
  <div class="min-h-[150vh] relative">
    <!-- 水波紋效果容器 -->
    <div class="ripple-effect absolute flex flex-col items-center w-full h-full">
      <div class="absolute right-12 top-10 cursor-pointer">
        <img src="/images/menu.svg" alt="menu" class="w-10 h-8" />
      </div>
      <div class="flex flex-col w-full">
        <div class="flex px-[162px] justify-center relative w-full">
          <div class="flex flex-col absolute top-[447px] left-[162px]">
            <p class="font-shippori text-white text-[50px] font-light tracking-[12px]">由島至島</p>
            <p class="font-shippori text-white text-[50px] font-light tracking-[12px]">
              記憶與對話
            </p>
            <p class="font-amiri italic text-[25px] text-white tracking-[3px] mt-7">From Island</p>
            <p class="font-amiri italic text-[25px] text-white tracking-[3px]">to Island</p>
            <p class="font-amiri italic text-[25px] text-white tracking-[3px]">
              Memory and Dialogue
            </p>
          </div>
          <div class="mt-[111px]">
            <img src="/images/first_photo1.png" alt="title" class="opacity-50 h-[709px]" />
          </div>
          <div class="absolute top-[146px] right-[162px] flex flex-col">
            <img src="/images/title.png" alt="title" class="w-[276px] h-[160px]" />
            <div class="rotate-90 mt-24 -translate-x-2">
              <p class="font-shippori text-white text-xl tracking-[8px]">移動與邊界</p>
              <p class="font-shippori text-white text-xl tracking-[8px] mt-7">加害與被害</p>
              <p class="font-shippori text-white text-xl tracking-[8px] mt-7">共犯結構</p>
              <p class="font-shippori text-white text-xl tracking-[8px] mt-7">克服過去</p>
              <p class="font-shippori text-white text-xl tracking-[8px] mt-7">為什麼要記憶</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-screen"></div>
</template>

<style>
  .ripple-effect {
    background-size: cover;
    background-image: url('/images/first_bg.jpg');
  }
</style>
