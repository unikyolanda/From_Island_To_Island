<script setup>
  const menuRef = ref(null)
  const toggleMenu = () => {
    menuRef.value.show()
  }

  const closeMenu = () => {
    menuRef.value.hide()
  }
</script>
<style>
  .bg-shoes {
    background-image: url('/images-webp/stills/still_1.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.08;
  }
  .label {
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
</style>
<template>
  <div class="flex flex-col bg-white w-screen h-auto min-h-screen items-center">
    <div class="fixed inset-0 bg-shoes z-0"></div>
    <div class="fixed top-11 left-12 w-10 h-[61px] flex flex-col z-20">
      <NuxtLink to="/"><img src="/images-webp/logo_gray.webp" /></NuxtLink>
      <NuxtLink to="/film" class="font-wix text-[#999] tracking-[4px] text-xs mt-7">FILM</NuxtLink>
      <NuxtLink to="/lesson" class="font-wix text-[#999] tracking-[4px] text-xs mt-5"
        >LESSON</NuxtLink
      >
      <p class="font-wix text-[#999] tracking-[4px] text-xs mt-5">CONTACT</p>
    </div>
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="fixed right-10 sm:right-12 top-10 cursor-pointer z-20">
      <img src="/images/menu_gray.svg" alt="menu" class="w-10 h-8" @click="toggleMenu" />
    </div>
    <div class="flex flex-col w-full z-10 items-center opacity-80">
      <div class="flex w-full px-[184px] pt-[233px] justify-between items-end mt-10">
        <div class="flex flex-col">
          <p class="font-amiri italic text-[#999] tracking-[6px] text-lg sm:text-[28px]">
            Educational Presentation
          </p>
          <p class="font-shippori text-[#999] text-[36px] sm:text-[44px] tracking-[8px]">
            教育公播
          </p>
        </div>
      </div>
      <div class="flex flex-col mt-12 mb-20 gap-y-11 items-center">
        <div class="bg-white w-[1075px] h-auto relative flex flex-col mt-72">
          <div class="flex gap-x-5 absolute -top-[270px] left-[190px]">
            <img src="/images-webp/poster_man.webp" alt="poster" class="w-[345px] h-[492px]" />
            <img src="/images-webp/poster_woman.webp" alt="poster" class="w-[345px] h-[492px]" />
          </div>
          <div class="flex flex-col py-9 pl-[60px] mt-64 items-center">
            <p class="font-shippori text-[#999] text-[28px] tracking-[4px] text-center">
              《由島至島》<br />
              教育公播版說明
            </p>
            <p
              class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-10 text-center"
            >
              教育公播放映費為 15000 元，含一份防拷 USB 與公播證明書。<br />
              僅提供非營利之教育場合公開播映使用。
            </p>
            <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold mt-10">
              教育公播版預計於 2025 年 3 月上市，購買請聯繫由島至島 E-mail。
            </p>
            <div
              class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-10 text-center"
            >
              <span class="font-semibold">收件者：</span> fromislandtoisland2024@gmail.com<br />
              <span class="font-semibold">信件主旨：</span> 【教育公播】由島至島_單位名稱_縣市
            </div>
            <p
              class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-10 text-center"
            >
              信件內容請包涵：  1. 單位簡介 2. 預計播映的時間 3. 預計參與播映的人數<br />
              4. 是否需安排導演映後（出席與交通費另計）5. 其他特別需求 (若無則免)
            </p>
            <img src="/images-webp/usb.webp" alt="usb" class="w-[365px] h-[215px] mt-16" />
            <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold mt-10">
              USB 規格說明
            </p>
            <div
              class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-10 mb-[68px]"
            >
              · USB 僅提供電腦讀取，不支援 DVD 播放器或部分電視設備的USB插槽。<br />
              · 為 Type-A 接頭，裝載 4K 中英／日英字幕影片與智慧選單。<br />
              · 影片總長為 4 小時 50 分鐘。分為上集 2 小時 22 分鐘與下集 2 小時 27 分鐘。<br />
              · 系統規格要求如下（附件）：<br />

              <br />
              <span class="font-semibold">播放平台 Windows</span><br />
              · 支援 MP3 / MP4 / PDF 檔案<br />
              · MP4 建議使用 Baseline/Main Profile 編碼<br />
              · Windows系統 : Win 10 / 11<br />
              · 支援高畫質 4K<br />
              · CPU: Intel i5 處理器以上或更高<br />
              · 記憶體需求: 8GB 以上（HD畫質以上建議16GB）<br />
              · 需已安裝 Net Framework 4.0 以上<br />
              · 需安裝 Visual C++ 可轉散發套件（會自動偵測與安裝）<br />
              <br />
              <span class="font-semibold">播放平台 MAC</span><br />
              · 支援 MP3 / MP4 / PDF 檔案<br />
              · MAC 系統 : macOS High Sierra 10.15 / macOS Mojave 10.15 / macOS Catalina 10.15.7 /
              <br />
                macOS Big Sur 11.6.6 / macOS Monterey 12.4 / MacOS Ventura 13.6<br />
              · 支援高畫質 4K<br />
              <br />

              <span class="text-[#D0BC9C] font-semibold">USB 內含防盜機制，無法刪除或新增檔案</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-[146px] bg-white flex px-20 items-center justify-center z-10">
      <div class="max-w-[1440px] w-full flex items-center justify-between">
        <div class="flex gap-x-[77px]">
          <a
            href="https://www.facebook.com/fromislandtoisland"
            target="_blank"
            class="font-shippori text-[18px] text-[#999] tracking-[10px]"
            >由島至島</a
          >
          <p class="font-shippori text-[18px] text-[#999] tracking-[10px]">最新場次</p>
        </div>
        <div class="flex gap-x-[30px]">
          <a
            href="https://siddharam.com/"
            target="_blank"
            class="font-noto text-[12px] text-[#999] tracking-[1px]"
          >
            網站製作｜西打藍好內容有限公司
          </a>
          <p class="font-wix text-[13px] text-[#999]">Copyright © HUMMINGBIRD Production</p>
        </div>
      </div>
    </div>
  </div>
</template>
