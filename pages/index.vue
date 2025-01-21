<template>
  <div class="min-h-[150vh] relative">
    <!-- 水波紋效果容器 -->
    <div class="ripple-effect absolute flex flex-col items-center w-full h-full p-10">
      <div class="flex flex-col items-center absolute right-10 top-10 cursor-pointer">
        <img src="/images/menu.svg" alt="menu" class="w-10 h-8" />
        <p class="text-white font-light">MENU</p>
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
