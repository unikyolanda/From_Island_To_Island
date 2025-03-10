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
  .bg-shadow {
    background-image: url('/images-webp/bg_shadow.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.05;
  }
  .label {
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
</style>
<template>
  <div class="flex flex-col bg-white w-screen h-auto min-h-screen items-center">
    <div class="fixed inset-0 bg-shadow z-0"></div>
    <NavBar textColor="#999" logoSrc="/images/logo_gray.png" />
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="fixed right-10 sm:right-12 top-10 cursor-pointer z-20">
      <img src="/images/menu_gray.svg" alt="menu" class="w-10 h-8" @click="toggleMenu" />
    </div>
    <div class="flex flex-col w-full z-10 items-center opacity-80">
      <div class="flex w-full px-[184px] pt-[233px] justify-between items-end mt-10">
        <div class="flex flex-col">
          <p class="font-amiri italic text-[#999] tracking-[6px] text-lg sm:text-[28px]">LESSON</p>
          <p class="font-shippori text-[#999] text-[36px] sm:text-[44px] tracking-[8px]">
            主題教案
          </p>
        </div>
        <div class="flex flex-col gap-y-3">
          <p class="font-noto font-semibold text-[#999] text-[20px] tracking-[4px]">
            由島至島教育推廣規劃
          </p>
          <p class="font-noto text-[#999] text-[13px] tracking-[1.5px]">
            從《由島至島》中節選出 5 個主題的片段發展搭配教案， 免費開放老師申請作為課程教授素材。
          </p>
        </div>
      </div>
      <div class="flex flex-col my-12 gap-y-11">
        <NuxtLink
          to="/lesson/one"
          class="w-[1075px] h-[227px] bg-white rounded-[15px] shadow-md flex relative hover:shadow-lg"
        >
          <div
            class="absolute top-0 right-0 label bg-[#d0bc9c] w-[91px] h-[91px] rounded-tr-[15px]"
          >
            <p
              class="text-white font-caveat text-[36px] font-semibold absolute -top-[2px] right-5 z-10"
            >
              1
            </p>
          </div>
          <div class="w-[365px] h-[227px]">
            <img
              src="/images-webp/stills/lesson_1.webp"
              alt="lesson"
              class="w-full h-full object-cover rounded-l-[15px]"
            />
          </div>
          <div class="flex flex-col py-9 pl-[60px]">
            <p class="font-shippori text-[#999] text-[28px] tracking-[4px]">
              移動與邊界—旅外台灣人
            </p>
            <p class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-4">
              探討國籍與身份對於一個人的影響。<br />
              影片講述二戰時旅外臺灣人被視為敵國日本子民，<br />遣送至澳洲集中營管理之經歷。
            </p>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/lesson/two"
          class="w-[1075px] h-[227px] bg-white rounded-[15px] shadow-md flex relative hover:shadow-lg"
        >
          <div
            class="absolute top-0 right-0 label bg-[#d0bc9c] w-[91px] h-[91px] rounded-tr-[15px]"
          >
            <p
              class="text-white font-caveat text-[36px] font-semibold absolute -top-[2px] right-5 z-10"
            >
              2
            </p>
          </div>
          <div class="w-[365px] h-[227px]">
            <img
              src="/images-webp/stills/lesson_2.webp"
              alt="lesson"
              class="w-full h-full object-cover rounded-l-[15px]"
            />
          </div>
          <div class="flex flex-col py-9 pl-[60px]">
            <p class="font-shippori text-[#999] text-[28px] tracking-[4px]">加害與被害—楊樹木</p>
            <p class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-4">
              討論平庸之惡、被動的加害者。<br />
              影片講述至馬來西亞成家立業的臺灣人楊樹木<br />
              參與日軍殘酷行動與其後代面臨困境。
            </p>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/lesson/three"
          class="w-[1075px] h-[227px] bg-white rounded-[15px] shadow-md flex relative hover:shadow-lg"
        >
          <div
            class="absolute top-0 right-0 label bg-[#d0bc9c] w-[91px] h-[91px] rounded-tr-[15px]"
          >
            <p
              class="text-white font-caveat text-[36px] font-semibold absolute -top-[2px] right-5 z-10"
            >
              3
            </p>
          </div>
          <div class="w-[365px] h-[227px]">
            <img
              src="/images-webp/stills/lesson_3.webp"
              alt="lesson"
              class="w-full h-full object-cover rounded-l-[15px]"
            />
          </div>
          <div class="flex flex-col py-9 pl-[60px]">
            <p class="font-shippori text-[#999] text-[28px] tracking-[4px]">共犯結構—戰爭機器</p>
            <p class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-4">
              觸及國家共犯結構。從日本擴張行動，<br />
              宣揚亞洲人的亞洲、推動皇民化，<br />
              動員民眾、徵召台籍日本兵，終面對戰敗。
            </p>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/lesson/four"
          class="w-[1075px] h-[227px] bg-white rounded-[15px] shadow-md flex relative hover:shadow-lg"
        >
          <div
            class="absolute top-0 right-0 label bg-[#d0bc9c] w-[91px] h-[91px] rounded-tr-[15px]"
          >
            <p
              class="text-white font-caveat text-[36px] font-semibold absolute -top-[2px] right-5 z-10"
            >
              4
            </p>
          </div>
          <div class="w-[365px] h-[227px]">
            <img
              src="/images-webp/stills/lesson_4.webp"
              alt="lesson"
              class="w-full h-full object-cover rounded-l-[15px]"
            />
          </div>
          <div class="flex flex-col py-9 pl-[60px]">
            <p class="font-shippori text-[#999] text-[28px] tracking-[4px]">
              克服過去—日本和平教育團
            </p>
            <p class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-4">
              思考記憶歷史與面對傷痛。<br />
              從戰犯遺留的文字《世紀的遺書》到高嶋伸欣日本和平團，<br />
              思考國家下個人責任與行動。
            </p>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/lesson/five"
          class="w-[1075px] h-[227px] bg-white rounded-[15px] shadow-md flex relative hover:shadow-lg"
        >
          <div
            class="absolute top-0 right-0 label bg-[#d0bc9c] w-[91px] h-[91px] rounded-tr-[15px]"
          >
            <p
              class="text-white font-caveat text-[36px] font-semibold absolute -top-[2px] right-5 z-10"
            >
              5
            </p>
          </div>
          <div class="w-[365px] h-[227px]">
            <img
              src="/images-webp/stills/lesson_5.webp"
              alt="lesson"
              class="w-full h-full object-cover rounded-l-[15px]"
            />
          </div>
          <div class="flex flex-col py-9 pl-[60px]">
            <p class="font-shippori text-[#999] text-[28px] tracking-[4px]">為什麼要記憶—慰安婦</p>
            <p class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-4">
              藉由村落交出女性而倖存之例，討論受害與加害關係；<br />
              政府漠然處理慰安婦交易文件檔案，<br />
              再論及如何處理創傷記憶。
            </p>
          </div>
        </NuxtLink>
      </div>
      <div class="w-[1075px] h-auto flex flex-col items-center mt-14 border-b border-[#999]/70">
        <p class="font-shippori text-[#999] text-[28px] tracking-[4px]">免費教材申請</p>
        <p
          class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-10 text-center"
        >
          開放教育工作者填寫此表單申請 ５ 部主題短片觀影連結與免費數位教材。<br />
          邀請老師為短片設計教案，完成教案撰稿、著作授權與成果回饋即可獲得《由島至島》個人收藏版
          USB。<br />
          更多《由島至島》教育推廣計畫資訊請見申請表單。
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScQxiV58k1T7PDf_2NiOaQOrz2sjgu5JQr9PD2jYEAIZef_dQ/viewform"
          target="_blank"
          class="font-wix text-[#999] px-10 py-3 bg-white border border-[#999]/70 mt-10 mb-20 hover:bg-[#999] hover:text-white"
        >
          教案申請表單</a
        >
      </div>
      <div class="w-[1075px] h-auto flex flex-col items-center mt-14 mb-[160px]">
        <p class="font-shippori text-[#999] text-[28px] tracking-[4px]">成為夥伴與回饋機制</p>
        <div class="flex gap-x-5 mt-14">
          <div class="bg-white w-[345px] h-[280px] flex flex-col items-center p-9">
            <p class="font-noto text-[20px] font-semibold tracking-[2px] text-[#d0bc9c]">
              撰寫教案
            </p>
            <p
              class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-7 text-justify"
            >
              歡迎加入教案書寫，如將成果分享給《由島至島》團隊與其他申請《由島至島》教育推廣計畫的老師，則可獲得回饋品。
            </p>
          </div>
          <div class="bg-white w-[345px] h-[280px] flex flex-col items-center p-9">
            <p class="font-noto text-[20px] font-semibold tracking-[2px] text-[#d0bc9c]">
              教案格式
            </p>
            <p
              class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-7 text-justify"
            >
              老師需開發「兩堂課程」的教案：可以是連續兩堂或兩個單堂課程，教案需包含但不限於：教案名稱、使用說明、教案目標、教學對象、教具清單、核心問題、課程步驟與提醒、延伸問題與討論。
            </p>
          </div>
          <div class="bg-white w-[345px] h-[280px] flex flex-col items-center p-9">
            <p class="font-noto text-[20px] font-semibold tracking-[2px] text-[#d0bc9c]">
              回饋機制
            </p>
            <p
              class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-7 text-justify"
            >
              由島至島團隊在收到「完成之教案」之後，將贈與老師《由島至島》個人收藏USB，裝載 4K
              畫質《由島至島》正片隨身碟，一份教案贈與一個。
            </p>
          </div>
        </div>
        <p
          class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-10 text-center"
        >
          數位教材將於收到申請表單後七個工作天以 e-mail 寄出，<br />
          教材當中包含影片、教案格式檔案與回饋問卷。<br />
          <br />
          欲成為夥伴的老師，<br />
          屆時完成填寫後回傳至 fromislandtoisland2024@gmail.com，<br />
          確認後即可收到《由島至島》紀錄片USB，<br />
          詳情將於 e-mail 說明。
        </p>
      </div>
    </div>
    <Footer 
      bgColor="white" 
      textColor="#999" 
      :opacity="60" 
    />
  </div>
</template>
