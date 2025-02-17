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
    background-image: url('/images/bg_shadow.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.05;
  }
</style>
<template>
  <div class="flex flex-col bg-white w-screen h-auto min-h-screen items-center">
    <div class="fixed inset-0 bg-shadow z-0"></div>
    <div class="absolute top-11 left-12 w-10 h-[61px] flex flex-col z-20">
      <NuxtLink to="/"><img src="/images/logo_gray.png" /></NuxtLink>
      <NuxtLink to="/film" class="font-wix text-[#999] tracking-[4px] text-xs mt-7">FILM</NuxtLink>
      <NuxtLink to="/lesson" class="font-wix text-[#999] tracking-[4px] text-xs mt-5"
        >LESSON</NuxtLink
      >
      <p class="font-wix text-[#999] tracking-[4px] text-xs mt-5">CONTACT</p>
    </div>
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="absolute right-10 sm:right-12 top-10 cursor-pointer z-20">
      <img src="/images/menu_gray.svg" alt="menu" class="w-10 h-8" @click="toggleMenu" />
    </div>
    <div class="flex w-full z-10 opacity-85 justify-center bg-[#d9d9d9]/30">
      <div class="flex mt-[221px] w-[548px] justify-center">
        <div class="flex flex-col">
          <div class="flex items-center">
            <p class="font-amiri italic text-[#D0BC9C] tracking-[6px] text-lg sm:text-[28px]">
              LESSON
            </p>
            <p class="text-[#D0BC9C] font-caveat text-[150px] font-semibold mb-10">1</p>
          </div>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px]">移動與邊界—</p>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px]">旅外台灣人</p>
          <p class="font-amiri italic text-[#999] text-[24px] tracking-[2px] leading-[38px] mt-10">
            Movement and Boundaries: <br />
            Overseas Taiwanese
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScQxiV58k1T7PDf_2NiOaQOrz2sjgu5JQr9PD2jYEAIZef_dQ/viewform"
            target="_blank"
            class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 mt-10 mb-20"
          >
            教案申請表單</a
          >
        </div>
      </div>
      <div class="flex flex-col">
        <img src="/images/stills/lesson_1.jpg" class="w-[895px] h-[532px] object-cover" />
        <div class="w-full h-auto bg-white/50 flex justify-center py-6">
          <div class="w-[651px] flex flex-col">
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                片段大綱
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                二戰期間，梁盈秋女士的父親因參與抗日而遠赴印尼，但隨戰爭爆發，荷蘭殖民政府將包括臺灣人在內的日籍華僑抓捕並送往澳洲集中營。梁女士回憶，在船上未知命運的28天讓人忐忑，抵澳後卻因澳洲軍人的善意，學會了第一句英文：「Give
                me, sir.」 集中營生活有童年的記憶，孩子們能讀書、拿零用錢，甚至野餐。 <br />
                <br />
                江貴秋先生回憶過去，荷蘭士兵強行沒收財物，男性被銬押至澳洲，父親更因病過世。江秀蓮女士多年後憑藉書信找回父親的照片，終於一睹父親的模樣，既是追憶，也是對家族情感的深刻連結。<br />
                <br />
                ＊此片段為 17 分鐘，請填寫表單索取，僅供教育用途使用，版權歸《由島至島》所有。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                教案名稱與設計理念
              </p>
              <p
                class="font-shippori text-[28px] tracking-[4px] leading-[40px] text-[#757575] mt-7"
              >
                過去到現在，<br />那些「離開與歸來」的人們
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                本教案設計透過分組討論、新聞報導閱讀與情境模擬等活動，幫助學生深入了解不同時代臺灣人「離開家鄉」的歷程。藉由對比過去與現在的遷徙故事，引導學生思考每一次離開背後的情感與抉擇，並意識到並非所有人都能選擇歸來，進而反思如何在日常中保有同理心支持和接納那些離開家鄉的人。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                學習目標
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                在了解旅外臺灣人遣送至澳洲集中營的困境後，藉由未來輪想像與模擬生命故事，讓學生同理「離開家鄉」的經驗，對於紀錄片被攝者之經歷產生情感共鳴，進而反思如何於生活中透過個人行動支持離開家鄉者。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                核心問題
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                第二次世界大戰結束後，南洋地區的臺灣人為何被迫離開原地？他們在生活環境、心理或物質上會面臨哪些挑戰？
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <div class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                活動流程<span class="text-[14.5px] tracking-[0.5px] text-[#757575] font-normal"
                  >（國中兩堂課·每堂45分鐘）</span
                >
              </div>
              <div class="flex mt-6 items-center">
                <p
                  class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] leading-[30px]"
                >
                  第一節課
                </p>
                <div class="flex gap-x-3 ml-9 items-center">
                  <div
                    class="bg-white w-[115px] h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[36px] text-[#D0BC9C] font-semibold">
                      5<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p class="font-noto text-[#757575] text-[13px] font-semibold tracking-[2px]">
                      課程引導
                    </p>
                  </div>
                  <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  <div
                    class="bg-white w-[115px] h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[36px] text-[#D0BC9C] font-semibold">
                      20<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p class="font-noto text-[#757575] text-[13px] font-semibold tracking-[2px]">
                      活動體驗
                    </p>
                  </div>
                  <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  <div
                    class="bg-white w-[115px] h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[36px] text-[#D0BC9C] font-semibold">
                      20<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p class="font-noto text-[#757575] text-[13px] font-semibold tracking-[2px]">
                      影片放映
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex mt-6 items-center">
                <p
                  class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] leading-[30px]"
                >
                  第二節課
                </p>
                <div class="flex gap-x-3 ml-9 items-center">
                  <div
                    class="bg-white w-[115px] h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[36px] text-[#D0BC9C] font-semibold">
                      10<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p class="font-noto text-[#757575] text-[13px] font-semibold tracking-[2px]">
                      映後討論
                    </p>
                  </div>
                  <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  <div
                    class="bg-white w-[115px] h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[36px] text-[#D0BC9C] font-semibold">
                      20<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p class="font-noto text-[#757575] text-[13px] font-semibold tracking-[2px]">
                      議題分析
                    </p>
                  </div>
                  <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  <div
                    class="bg-white w-[115px] h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[36px] text-[#D0BC9C] font-semibold">
                      15<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p class="font-noto text-[#757575] text-[13px] font-semibold tracking-[2px]">
                      延伸討論
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                課程關鍵字
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                旅外／海外臺灣人、澳洲集中營、身份、離開、歸來、遷徙
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                教案作者
              </p>
              <div class="flex items-center">
                <p
                  class="font-shippori text-[28px] tracking-[4px] leading-[40px] text-[#757575] mt-7"
                >
                  林宗洧
                </p>
                <img src="/images/lesson1_1.png" class="w-[166px] h-[166px] ml-9" />
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                出生於彰化的越南新二代，目前就讀於國立臺灣大學台灣文學研究所，大學畢業於臺大社會學系。文章曾多次獲得臺大文學獎，並曾獲選臺北電影節青少年評審團，撰寫影評並主責訪問影人。曾於課審會擔任國中組審查委員，並擔任國小及高中組跨組委員。目前研究領域為酷兒跨媒介再現。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                教案共備者
              </p>
              <div class="flex items-center">
                <p
                  class="font-shippori text-[28px] tracking-[4px] leading-[40px] text-[#757575] mt-7"
                >
                  陳一隆
                </p>
                <img src="/images/lesson1_2.png" class="w-[166px] h-[166px] ml-9" />
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                心理學博士，目前任教於台中一中，擔任歷史科教師。學術取徑為文化研究與批判教育學，關注「東南亞社會與文化」、「原住民族轉型正義與認同」及「族群關係與當代性」等議題，近年積極組織教師專業社群，學習以轉化型知識份子的教育主體位置，思索「歷史記憶」生產與再生產與面相大眾的「公共史學」於基層歷史教學現場的可能性，推動跨系統的教育工作與民主對話作為行動研究的實踐之路。
              </p>
            </div>
            <div class="flex flex-col py-12">
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                欲申請短片與教案，歡迎填寫《由島至島》申請表單。本教案適用：台灣。
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScQxiV58k1T7PDf_2NiOaQOrz2sjgu5JQr9PD2jYEAIZef_dQ/viewform"
                target="_blank"
                class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 mt-6 mb-20"
              >
                教案申請表單</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-[146px] bg-white flex px-20 items-center justify-center z-10">
      <div class="max-w-[1440px] w-full flex items-center justify-between">
        <div class="flex gap-x-[77px]">
          <a
            href="https://www.facebook.com/hummingbirdproductiontaiwan"
            target="_blank"
            class="font-shippori text-[18px] text-[#999] tracking-[10px]"
            >蜂鳥影像</a
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
