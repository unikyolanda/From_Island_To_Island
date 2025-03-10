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
            <p class="text-[#D0BC9C] font-caveat text-[150px] font-semibold mb-10">5</p>
          </div>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px] -mt-12">為什麼要記憶—</p>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px]">慰安婦</p>
          <p class="font-amiri italic text-[#999] text-[24px] tracking-[2px] leading-[38px] mt-10">
            Why should we remember:<br />
            Comfort Women
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
        <img src="/images-webp/stills/lesson_5.webp" class="w-[895px] h-[532px] object-cover" />
        <div class="w-full h-auto bg-white/50 flex justify-center py-6">
          <div class="w-[651px] flex flex-col">
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                片段大綱
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                林俊田的父親為維持會成員，日軍入侵後，他跟著村莊的其他孩子們帶著物資歡喜迎接抵達村莊的日軍。聽聞隔壁村莊遭大屠殺的消息後，卻沒想到此刻的安寧是用村莊裡的數位女性所交換來的。<br />
                <br />
                二戰期間，慰安婦除了成為讓城鎮倖免於日軍大屠殺的祭品，更是殖民政府與在地資本家合作經營的戰時補給產業鏈中的一環。多年後，遲來的傷痛修復與集體歷史記憶重建依舊困難重重。<br />
                <br />
                ＊此片段為 12 分鐘，請填寫表單索取，僅供教育用途使用，版權歸《由島至島》所有。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                教案名稱與設計理念
              </p>
              <div
                class="font-shippori text-[28px] tracking-[4px] leading-[40px] text-[#757575] mt-7"
              >
                沈默並非不存在—記憶慰安婦
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                本教案之設計與議題討論之目的在於協助學生結構性學習慰安婦的歷史，結合國際人權之概念進行討論與分析，認識日本政府對慰安婦的系統性暴力結構，接著體驗代入時代下的各個社會角色，同理並反思慰安婦倖存後所面臨的社會困境。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                學習目標
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                透過閱讀文本與觀看文本，覺知慰安婦實為日本政府所為的系統性國家暴力，而受害者之傷痛與經驗並未被國家及社會所正視之事實，並解析該系統性國家暴力之結構下的各種社會角色，最後省思受難者未竟的創傷重建之心境、探討國家的對慰安婦問題的作為。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                核心問題
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                如何理解慰安婦問題作為日本政府的系統性國家暴力，並反思社會與國家對受害者創傷重建的忽視與應對？
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
                      影片放映
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
                      映後討論
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
                      映後導讀
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
                      20<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p class="font-noto text-[#757575] text-[13px] font-semibold tracking-[2px]">
                      文本討論
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
                      映後導讀
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
                  鄭治綺
                </p>
                <img src="/images-webp/author_6.webp" class="w-[166px] h-[166px] ml-9" />
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                來自屏東，畢業於政治大學外交系，曾擔任學生媒體逆思新聞編輯，透過舉辦系列活動讓學生從各角度探討媒體與社會的關係，推動學生媒體識讀與思辨能力；也曾任藝文前台經理，並協助影展策展。現任職於國會辦公室，多關心農業、青少年與女性議題。
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
                  href="https://drive.google.com/drive/folders/1f27nDrZNGGoNXQWJaHXQC8CF5QEMaVEQ"
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
    <Footer 
      bgColor="white" 
      textColor="#999" 
      :opacity="60" 
    />
  </div>
</template>
