<script setup>
defineProps({
  textColor: {
    type: String,
    default: 'white' // Default text color
  },
  bgColor: {
    type: String,
    default: 'black' // Default background color
  },
  opacity: {
    type: Number,
    default: 100 // Default opacity (100%)
  },
  marginTop: {
    type: String,
    default: '0' // Default margin top
  },
  hoverTextColor: {
    type: String,
    default: '#aaa' // Default hover text color
  }
})
</script>

<template>
  <div 
    class="w-full h-[146px] flex px-20 items-center justify-center z-0"
    :style="{
      backgroundColor: bgColor,
      opacity: opacity / 100,
      marginTop: marginTop
    }"
  >
    <div class="max-w-[1440px] w-full flex items-center justify-between">
      <div class="flex gap-x-[77px]">
        <a
          href="https://www.facebook.com/fromislandtoisland"
          target="_blank"
          class="font-shippori text-[18px] tracking-[10px] opacity-80 hover:opacity-100 transition-opacity duration-300"
          :style="{ color: textColor }"
        >
          由島至島
        </a>
        <p 
          class="font-shippori text-[18px] tracking-[10px] opacity-80 hover:opacity-100"
          :style="{ color: textColor }"
        >
          最新場次
        </p>
      </div>
      <div class="flex gap-x-[30px]">
        <a
          href="https://siddharam.com/"
          target="_blank"
          class="font-noto text-[12px] tracking-[1px] opacity-80 hover:opacity-100 transition-opacity duration-300"
          :style="{ color: textColor }"
        >
          網站製作｜西打藍好內容有限公司
        </a>
        <p 
          class="font-wix text-[13px] opacity-80 hover:opacity-100"
          :style="{ color: textColor }"
        >
          Copyright © HUMMINGBIRD Production
        </p>
      </div>
    </div>
  </div>
</template>
