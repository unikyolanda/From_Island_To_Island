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
</style>
<template>
  <div class="flex flex-col bg-white w-screen h-auto min-h-screen items-center">
    <div class="fixed inset-0 bg-shadow z-0"></div>
    <NavBar textColor="#999" logoSrc="/images/logo_gray.png" />
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="fixed right-10 sm:right-12 top-10 cursor-pointer z-20">
      <img src="/images/menu_gray.svg" alt="menu" class="w-10 h-8" @click="toggleMenu" />
    </div>
    <div class="flex w-full z-10 opacity-85 justify-center bg-[#d9d9d9]/30">
      <div class="flex mt-[221px] w-[548px]">
        <div class="fixed flex flex-col ml-36">
          <div class="flex items-center">
            <p class="font-amiri italic text-[#D0BC9C] tracking-[6px] text-lg sm:text-[28px]">
              LESSON
            </p>
            <p class="text-[#D0BC9C] font-caveat text-[150px] font-semibold mb-10">2</p>
          </div>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px] -mt-12">加害與被害—</p>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px]">楊樹木</p>
          <p class="font-amiri italic text-[#999] text-[24px] tracking-[2px] leading-[38px] mt-10">
            Perpetration and Victimization:
            <br />
            Yeow Chew Bok
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScQxiV58k1T7PDf_2NiOaQOrz2sjgu5JQr9PD2jYEAIZef_dQ/viewform"
            target="_blank"
            class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 mt-10 hover:bg-[#999] hover:text-white"
          >
            教案申請表單</a
          >
        </div>
      </div>
      <div class="flex flex-col">
        <img src="/images-webp/stills/lesson_2.webp" class="w-[895px] h-[532px] object-cover" />
        <div class="w-full h-auto bg-white/50 flex justify-center py-6">
          <div class="w-[651px] flex flex-col">
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                片段大綱
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                楊樹木先生在 1930
                年代自臺灣移居檳城，二戰期間在當地受日本占領軍徵用擔任憲兵隊通譯；戰爭結束之後遭到英軍逮捕。英國軍事法庭將楊樹木以加害當地人的戰爭犯罪罪名起訴，於
                1946 年將他定罪判處死刑、而後處決。楊樹木死後，他的妻子和後代都繼續居住於檳城。<br />
                <br />
                楊炳煒先生作為第三代的戰爭遺族、第三代的海外臺灣人，祖父楊樹木卻成了家中禁忌。爾後楊炳煒先生任教於曾發生屠殺的鍾靈中學老師，史料與審判記錄逐步揭開這段複雜的歷史，開啟他自我身份認同的追尋。<br />
                <br />
                ＊此片段為 22 分鐘，請填寫表單索取，僅供教育用途使用，版權歸《由島至島》所有。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                教案名稱與設計理念
              </p>
              <p
                class="font-shippori text-[28px] tracking-[4px] leading-[40px] text-[#757575] mt-7"
              >
                從加害者遺族到歷史見證者：<br />戰爭下的抉擇與偏見
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                本教案設計希望讓學生理解楊樹木一家所面臨的歷史傷痛與現實困境。先透過體驗帶入角色，從不同觀點看待單一事件。再藉由歷史背景與情境說明，試著回想彼時時空脈絡下，個體的觀點與抉擇，理解他人處境。最後設計推理遊戲，讓同學意識到身而為人存有的偏見，進而嘗試減少偏見，達到減少傷害的可能。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                學習目標
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                希望同學藉由活動理解個人的認知與偏見影響對於事實的判斷。透過置換身分位置、分析角色情感與動機，逐步了解偏見形成的可能原因。期待經由遊戲體驗牽引出的無意識偏見，能帶給同學自我覺察力，在未來保有同理心。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                核心問題
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                當人們慣以選擇性看見或聽見事物表象時，我們能如何覺察偏見，進而減少偏見的發生？
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
                      15<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p class="font-noto text-[#757575] text-[13px] font-semibold tracking-[2px]">
                      活動體驗❶
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
                      25<span class="text-[16px] ml-[2px]">min</span>
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
                      15<span class="text-[16px] ml-[2px]">min</span>
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
                平庸之惡／惡的平庸性、責任、事實、真相、偏見、謊言
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
                  黃詩婷
                </p>
                <img src="/images-webp/author_3.webp" class="w-[166px] h-[166px] ml-9" />
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                現就讀臺灣藝術大學電影研究所，投入影像創作、影像教育與影展執行，曾於客家電視台新聞部攝影組、國家影視聽中心教育推廣組、台北電影節節目組等實習，曾任青少年影像教育講師、《電影ê鋩鋩角角》系列教學點子書等影像教案作者與臺灣國際人權影展聚落串聯執行等。擔任《由島至島》國藝會巡演計畫與教育推廣計畫總籌。
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
                <img src="/images-webp/author_2.webp" class="w-[166px] h-[166px] ml-9" />
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
                  href="https://drive.google.com/drive/folders/19RqpumNJaq8OuCKYZiBD6D1mAoEEu9QB"
                  target="_blank"
                  class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 mt-6 mb-20"
                >
                  台灣教案預覽</a
                >
                <a
                  href="https://drive.google.com/drive/folders/1uxc0ITIpvGf7Y38-UTZzOVRZQaETQkLi"
                  target="_blank"
                  class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 mt-6 mb-20"
                >
                  馬來西亞教案預覽</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer 
      bgColor="white" 
      textColor="#999" 
      :opacity="60" 
    />
  </div>
</template>
