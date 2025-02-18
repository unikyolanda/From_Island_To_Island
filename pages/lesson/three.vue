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
    <div class="fixed top-11 left-12 w-10 h-[61px] flex flex-col z-20">
      <NuxtLink to="/"><img src="/images/logo_gray.png" /></NuxtLink>
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
    <div class="flex w-full z-10 opacity-85 justify-center bg-[#d9d9d9]/30">
      <div class="flex mt-[221px] w-[548px] justify-center">
        <div class="fixed flex flex-col">
          <div class="flex items-center">
            <p class="font-amiri italic text-[#D0BC9C] tracking-[6px] text-lg sm:text-[28px]">
              LESSON
            </p>
            <p class="text-[#D0BC9C] font-caveat text-[150px] font-semibold mb-10">3</p>
          </div>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px]">共犯結構—</p>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px]">戰爭機器</p>
          <p class="font-amiri italic text-[#999] text-[24px] tracking-[2px] leading-[38px] mt-10">
            Structures of Complicity:<br />
            War Machine
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
        <img src="/images/stills/lesson_3.jpg" class="w-[895px] h-[532px] object-cover" />
        <div class="w-full h-auto bg-white/50 flex justify-center py-6">
          <div class="w-[651px] flex flex-col">
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                片段大綱
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                在馬來半島，日本軍政府利用馬來人希望獨立的情緒，拉攏馬來人社群組織軍隊與義警，幫助日本軍控制社會、維持治安與鎮壓抗日勢力。日本軍隊利用學校教育、歌曲創作、宗教宣傳、展示戰俘來證明協助日本人可以達成獨立的目標，並傳播大東亞共榮圈的概念。馬來人因此被動員，並與華人為主的抗日軍發生衝突。<br />
                <br />
                台灣除了被當作馬來人社群的訓練基地，也被用來生產鼓舞馬來人的物資。隨著日軍前往東南亞的台灣人，更是將自己視為日本人，在共享同樣的情緒時，也在國家動員之下，成為殘酷戰爭機器的一部份。<br />
                <br />
                ＊此片段為 14 分鐘，請填寫表單索取，僅供教育用途使用，版權歸《由島至島》所有。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                教案名稱與設計理念
              </p>
              <p
                class="font-shippori text-[28px] tracking-[4px] leading-[40px] text-[#757575] mt-7"
              >
                理所不當然：<br />如何看見歷史事件背後不同角色的選擇？
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                本教案設計希望透過讓學生以角色扮演與核心問答的方式，了解馬來西亞與臺灣在二戰時期如何被日本軍事動員的過程，並且藉由扮演不同角色並進行討論與分享，讓學生更能同理在戰爭的時代背景與脈絡下，不同的人會因為立場、外在環境等種種因素，決定與誰合作以達成目標。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                學習目標
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                藉由討論與歷史素材，幫助高中生了解接收資訊時，資訊傳遞者的立場、資訊的表達方式、資訊接収者面臨的環境，如何影響資訊產生的效果，進而能夠理解歷史事件的複雜性，並應用於對社會議題的理解與思考之中。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                核心問題
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                在複雜的歷史中，如何看見不同個體行動當下的選擇與背景？
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <div class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                活動流程<span class="text-[14.5px] tracking-[0.5px] text-[#757575] font-normal"
                  >（國中兩堂課·每堂50分鐘）</span
                >
              </div>
              <div class="flex mt-6 items-center">
                <p
                  class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] leading-[30px]"
                >
                  第一節課
                </p>
                <div class="flex gap-x-3 ml-7 items-center">
                  <div
                    class="bg-white w-[115px] h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[36px] text-[#D0BC9C] font-semibold">
                      15<span class="text-[16px] ml-[2px]">min</span>
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
                      5<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p class="font-noto text-[#757575] text-[13px] font-semibold tracking-[2px]">
                      映前引導
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
                  <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  <div
                    class="bg-white w-[115px] h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[36px] text-[#D0BC9C] font-semibold">
                      10<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p class="font-noto text-[#757575] text-[13px] font-semibold tracking-[2px]">
                      活動體驗❶
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
                <div class="flex gap-x-3 ml-7 items-center">
                  <div
                    class="bg-white w-[115px] h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[36px] text-[#D0BC9C] font-semibold">
                      10<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p class="font-noto text-[#757575] text-[13px] font-semibold tracking-[2px]">
                      回顧與引導
                    </p>
                  </div>
                  <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  <div
                    class="bg-white w-[115px] h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[36px] text-[#D0BC9C] font-semibold">
                      30<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p class="font-noto text-[#757575] text-[13px] font-semibold tracking-[2px]">
                      活動體驗❷
                    </p>
                  </div>
                  <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  <div
                    class="bg-white w-[115px] h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[36px] text-[#D0BC9C] font-semibold">
                      10<span class="text-[16px] ml-[2px]">min</span>
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
                資訊環境、國家動員、宣傳、立場、能動性、人的局限性
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
                  崔家瑋
                </p>
                <img src="/images/author_4.png" class="w-[166px] h-[166px] ml-9" />
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                國立臺灣大學法律系畢業，曾經參與舉辦「臺大法律學術工作坊」，於舉辦「臺大法律巡迴講座」期間巡迴全臺19縣市舉辦法普講座與引導討論。亦曾在臺大校內舉辦四六事件相關展覽。目前擔任法律白話文運動撰稿編輯。
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
                <img src="/images/author_2.png" class="w-[166px] h-[166px] ml-9" />
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                心理學博士，目前任教於台中一中，擔任歷史科教師。學術取徑為文化研究與批判教育學，關注「東南亞社會與文化」、「原住民族轉型正義與認同」及「族群關係與當代性」等議題，近年積極組織教師專業社群，學習以轉化型知識份子的教育主體位置，思索「歷史記憶」生產與再生產與面相大眾的「公共史學」於基層歷史教學現場的可能性，推動跨系統的教育工作與民主對話作為行動研究的實踐之路。
              </p>
            </div>
            <div class="flex flex-col py-8">
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-6 leading-[30px]"
              >
                欲申請短片與教案，歡迎填寫《由島至島》申請表單。本教案提供自：台灣。
              </p>
              <div class="flex gap-x-6">
                <a
                  href="https://drive.google.com/drive/folders/1IPMMCSWYWwCXt4ds5-xRXdol_V-Y-8DR"
                  target="_blank"
                  class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 mt-6 mb-20"
                >
                  台灣教案預覽</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-[146px] bg-white flex px-20 items-center justify-center z-10 opacity-60">
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
