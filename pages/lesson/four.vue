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
            <p class="text-[#D0BC9C] font-caveat text-[150px] font-semibold mb-10">4</p>
          </div>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px]">克服過去—</p>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px]">日本和平教育團</p>
          <p class="font-amiri italic text-[#999] text-[24px] tracking-[2px] leading-[38px] mt-10">
            Vergangenheitsbewältigung:<br />
            Japanese Peace Education Tour
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
        <img src="/images/stills/lesson_4.jpg" class="w-[895px] h-[532px] object-cover" />
        <div class="w-full h-auto bg-white/50 flex justify-center py-6">
          <div class="w-[651px] flex flex-col">
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                片段大綱
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                台灣在二戰期間是日本帝國的殖民地，其中有不少台灣人志願或被雇用，成為日本軍隊的一員，參與日本在東南亞的戰爭。而在日本攻佔新加坡、馬來西亞的三年又八個月中，軍隊虐殺戰俘、迫使婦女成為慰安婦，甚至有計劃地屠殺當地華人。<br />
                <br />
                然而二戰後，遭軍事法庭審判犯下違反和平罪、傳統戰爭罪或違反人道罪而處以死刑的日本「軍事犯人」，在行刑前寫下的一百六十五封遺書中，卻只有一封提到了遭受日本軍隊凌虐、屠殺的受害者。然而，當時來自殖民地台灣的人民，是否目睹，甚至參與了這些暴行？在暴行之後，我們能夠如何傾聽加害者、受難者和見證者的沈默？又能如何面對、克服過去？<br />
                <br />
                ＊此片段為 21 分鐘，請填寫表單索取，僅供教育用途使用，版權歸《由島至島》所有。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                教案名稱與設計理念
              </p>
              <div
                class="font-shippori text-[28px] tracking-[4px] leading-[40px] text-[#757575] mt-7"
              >
                如何記憶二戰，克服過去<span class="font-shippori tracking-[0.5px] text-[14.5px]"
                  >（Vergangenheitsbewältigung）</span
                >？
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                本教案從中日戰爭、歐戰爆發後，日本帝國向東南亞的侵略，以及二戰開打後，日本對殖民地台灣的志願兵政策導入。藉由紀錄短片、文本，讓學生探究台籍日本兵、軍夫、軍屬在日本軍隊中的遭遇，其在日本於東南亞的戰爭與暴行中的角色，以及東南亞當地人民在二戰期間的遭遇。進而分析、覺察不同史料的差異與重要性，及其如何影響對歷史的理解與詮釋，進而反思自身對二戰的認知與其建構的過程，並發想個人能夠如何記憶戰爭，克服過去。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                學習目標
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                在學生既有的、對於二戰如何在「國家間」發生與其影響（國中）的理解下，使學生從人民／個人的角度出發，深化對台籍日本兵、軍夫、軍屬在日本軍隊中的遭遇，及其在日本於東南亞的戰爭與暴行中的角色；以及東南亞當地人民在二戰期間的遭遇的理解。進而討論、覺察不同史料的差異與重要性，及其如何影響對歷史的理解與詮釋。最終反思自身對二戰的認知與其建構的過程，並發想個人能夠如何記憶戰爭，克服過去。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                核心問題
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                在暴行之後，我們能夠如何傾聽加害者、受難者和見證者的沈默？又能如何面對、克服過去？
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
                      10<span class="text-[16px] ml-[2px]">min</span>
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
                      14<span class="text-[16px] ml-[2px]">min</span>
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
                      36<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p class="font-noto text-[#757575] text-[13px] font-semibold tracking-[2px]">
                      分享與回饋
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
                國家／個人、受害者／加害者、見證、克服過去（Vergangenheitsbewältigung）、行動
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
                  林于玄
                </p>
                <img src="/images/author_5.png" class="w-[166px] h-[166px] ml-9" />
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                臺灣師範大學社會教育系，作家，著有《換貓上場了》（詩集）、《傷兵不在街頭》（合著）。
                長期關注台灣創傷歷史之書寫、記憶與推廣，曾任台灣共生青年協會「抵抗與敘述：文學選讀與二二八事件創作培育計畫」協同主持、「黎明破曉前：2021
                四六事件紀念系列活動」總籌、「2019 臺灣國際人權影展 x 師大串聯場」總籌、2018
                台北電影節青少年觀摩獎評審團等。「永別的記憶／記憶：張亦絢《永別書：在我不在的時代》中的歷史書寫、創傷敘事與記憶政治」獲
                110 年度科技部大專生研究補助。
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
                  href="https://drive.google.com/drive/folders/1sn_54ICsVtrOTuRy1WU8PDiGdugvh3nU"
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
