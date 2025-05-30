<script setup>
  const menuRef = ref(null)
  const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()

  const toggleMenu = () => {
    menuRef.value.show()
  }

  const closeMenu = () => {
    menuRef.value.hide()
  }

  onMounted(() => {
    const parallaxElements = document.querySelectorAll('#parallax-content')
    const images = Array.from(parallaxElements)
    const textElements = document.querySelectorAll(
      'p.font-noto, p.font-wix, p.font-shippori, p.font-amiri, a.font-noto, div.font-noto'
    )

    // Check if each image is loaded
    const imagePromises = images.map(img => {
      if (img.complete) {
        return Promise.resolve()
      } else {
        return new Promise(resolve => {
          img.onload = resolve
        })
      }
    })

    // Initialize parallax after all images are loaded
    Promise.all(imagePromises).then(() => {
      parallaxElements.forEach(element => {
        // Set initial position
        gsap.set(element, {
          y: '-5%', // Start higher up to allow room for movement
        })

        // Create the parallax effect
        gsap.to(element, {
          y: '0%', // Move down to show bottom portion
          ease: 'none',
          scrollTrigger: {
            trigger: element.parentElement,
            start: 'top bottom',
            end: 'bottom 25%',
            scrub: 1,
          },
        })

        // Create fade-in effect for parallax elements
        gsap.from(element, {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom-=100',
            toggleActions: 'play none none reset',
          },
        })
      })

      // Setup text fade-in effects
      textElements.forEach(element => {
        gsap.from(element, {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      })
    })
  })
</script>
<style>
  .bg-reports {
    background-image: url('/images-webp/stills/still_4.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.4;
  }
  .bg-audience {
    background-image: url('/images-webp/fourth_bg.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
<template>
  <div class="flex flex-col bg-black w-screen h-auto min-h-screen items-center">
    <div class="hidden sm:flex sm:fixed inset-0 bg-reports z-0"></div>
    <NavBar textColor="white" logoSrc="/images/logo.png" />
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="fixed right-10 sm:right-12 top-6 sm:top-10 cursor-pointer z-20">
      <img src="/images/menu.svg" alt="menu" class="w-8 sm:w-10 h-8" @click="toggleMenu" />
    </div>
    <div class="flex flex-col w-full z-10 items-center opacity-80">
      <div
        class="flex w-full sm:px-[184px] sm:pt-[233px] justify-center sm:justify-start items-end mt-10"
      >
        <div class="flex flex-col items-center sm:items-start">
          <p class="font-amiri italic text-white tracking-[0.5px] text-xl sm:text-[28px]">
            Discussion & Reports
          </p>
          <p class="font-shippori text-white text-[30px] sm:text-[44px] tracking-[8px]">
            座談與報導
          </p>
        </div>
      </div>
    </div>
    <div class="sm:hidden block w-full mt-12">
      <div class="flex w-full font-noto text-[14px] text-white mb-8 gap-x-6 justify-center">
        <div
          class="cursor-pointer hover:opacity-70 transition-opacity"
          @click="
            $el.querySelector('#discussion').scrollIntoView({ behavior: 'smooth', block: 'center' })
          "
        >
          映後座談
        </div>
        <div
          class="cursor-pointer hover:opacity-70 transition-opacity"
          @click="
            $el.querySelector('#interview').scrollIntoView({ behavior: 'smooth', block: 'center' })
          "
        >
          專訪報導
        </div>
        <div
          class="cursor-pointer hover:opacity-70 transition-opacity"
          @click="
            $el.querySelector('#review').scrollIntoView({ behavior: 'smooth', block: 'center' })
          "
        >
          評論與回饋
        </div>
      </div>
      <img
        src="/images-webp/stills/still_4.webp"
        alt="still15"
        class="w-full aspect-[1440/810] object-cover object-center"
      />
    </div>
    <div
      class="flex flex-col sm:flex-row mt-[73px] w-full justify-between px-10 sm:px-[184px] z-10 opacity-85"
    >
      <div id="discussion" class="flex flex-col w-full sm:w-[372px]">
        <div class="flex items-center w-full sm:w-[443px]">
          <div class="flex flex-col items-center w-full sm:items-start">
            <p class="font-shippori text-[22px] sm:text-[28px] text-white tracking-[4px]">
              映後座談
            </p>
            <p class="font-wix text-[14px] sm:text-[16px] text-white tracking-[2px] mt-1">
              Post-Screening Discussion
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full sm:w-[710px] gap-y-10 mt-12 sm:mt-0">
        <div class="flex flex-col border-b border-white/60 pb-10 items-center sm:items-start">
          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-x-12">
            <img
              src="/images-webp/reports/tsai.webp"
              alt="tsai"
              class="rounded-full w-[134px] h-[134px] object-cover"
            />
            <div class="flex sm:hidden flex-col items-center h-full justify-center mt-5">
              <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
                蔡崇隆
              </div>
              <div
                class="font-noto text-[14px] font-light text-white tracking-[2px] text-center leading-[30px]"
              >
                國立中正大學傳播學系副教授、<br />《九槍》導演
              </div>
              <p class="font-noto text-white font-light text-[13px] tracking-[2px] opacity-60 mt-6">
                嘉義 in89 影城（2024.11.30）
              </p>
            </div>
            <div class="hidden sm:flex flex-col h-full justify-center">
              <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
                蔡崇隆<span class="text-[14px] font-light"
                  >／國立中正大學傳播學系副教授、《九槍》導演</span
                >
              </div>
              <p class="font-noto text-white font-light text-[13px] tracking-[2px] opacity-60 mt-2">
                嘉義 in89 影城（2024.11.30）
              </p>
            </div>
          </div>
          <div
            class="w-full sm:w-auto text-white font-noto text-[14.5px] tracking-[0.5px] text-justify font-light leading-[30px] mt-8"
          >
            「克發導演作為大馬新住民，有別於台灣人背負的歷史包袱、提供新鮮的觀點，《由島至島》填補了台灣二戰之後長期的歷史空缺、甚至是記憶的黑洞。」蔡崇隆導演觀察新住民導演正因與台灣隔了一段距離，視野更為清晰，其妻子阮金紅為越南裔新住民，同樣身為導演，她紀錄下這個世代台灣人跨國婚姻與家庭的歷史，克發導演則拍攝父祖輩在大東亞戰爭之下的記憶，相較於從國族出發的大敘事，兩者皆從屬於人民記憶的小敘事開展⋯⋯
            <NuxtLink
              href="/reports/tsai"
              class="hidden sm:inline-block font-semibold cursor-pointer hover:opacity-50"
              >看全文</NuxtLink
            >
          </div>
          <NuxtLink
            href="/reports/tsai"
            class="flex sm:hidden justify-center mt-9 font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"
            >View more</NuxtLink
          >
        </div>
        <div class="flex flex-col border-b border-white/60 pb-10 items-center sm:items-start">
          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-x-12 relative">
            <div class="relative w-32 h-[140px]">
              <img
                src="/images-webp/reports/kuo.webp"
                alt="kuo"
                class="absolute top-0 left-0 rounded-full w-[89px] h-[89px] object-cover"
              />
              <img
                src="/images-webp/reports/chung.webp"
                alt="chung"
                class="absolute top-10 left-14 rounded-full w-[89px] h-[89px] object-cover"
              />
            </div>
            <div class="relative flex sm:hidden flex-col items-center h-full justify-center mt-5">
              <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
                郭力昕
              </div>
              <div
                class="font-noto text-[14px] font-light text-white tracking-[2px] text-center leading-[30px]"
              >
                影像文化評論者
              </div>
              <div class="font-noto font-semibold text-[20px] text-white tracking-[2px] mt-4">
                鍾適芳
              </div>
              <div
                class="font-noto text-[14px] font-light text-white tracking-[2px] text-center leading-[30px]"
              >
                音樂與影像展演製作人／策展人
              </div>
              <p class="font-noto text-white font-light text-[13px] tracking-[2px] opacity-60 mt-6">
                屏東中影影城（2024.11.17）
              </p>
            </div>
            <div class="hidden sm:flex flex-col h-full justify-center gap-y-2">
              <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
                郭力昕<span class="text-[14px] font-light">／影像文化評論者</span>
              </div>
              <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
                鍾適芳<span class="text-[14px] font-light">／音樂與影像展演製作人／策展人</span>
              </div>
              <p class="font-noto text-white font-light text-[13px] tracking-[2px] opacity-60">
                屏東中影影城（2024.11.17）
              </p>
            </div>
          </div>
          <div
            class="w-full sm:w-auto text-white font-noto text-[14.5px] tracking-[0.5px] text-justify font-light leading-[30px] mt-8 sm:mt-16"
          >
            「《不即不離》、《還有一些樹》像是一種回望歷史動態的一種速寫，但《由島至島》超越了回望，以一種更逼近、甚至更為逼迫的視角，對於觀眾來說激進地、殘酷地把隱匿的事實一點一點挖開來，進而提問、尋找答案。」適芳老師點出導演作品經由重訪歷史，提出一種不同於教科書、不同於國家記憶的非主流敘事，以紀錄片來顯影這些被隱匿的歷史或禁忌題材。「正是透過這些歷史的見證，進行批判性地反省與反思，在歷史經驗裡思考人性與寬容。」力昕老師回應⋯⋯
            <NuxtLink
              href="/reports/kuo"
              class="hidden sm:inline-block font-semibold cursor-pointer hover:opacity-50"
              >看全文</NuxtLink
            >
          </div>
          <NuxtLink
            href="/reports/kuo"
            class="flex sm:hidden justify-center mt-9 font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"
            >View more</NuxtLink
          >
        </div>
        <div class="flex flex-col border-b border-white/60 pb-10 items-center sm:items-start">
          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-x-12">
            <img
              src="/images-webp/reports/chu.webp"
              alt="tsai"
              class="rounded-full w-[134px] h-[134px] object-cover"
            />
            <div class="flex sm:hidden flex-col items-center h-full justify-center mt-5">
              <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
                朱惠足
              </div>
              <div
                class="font-noto text-[14px] font-light text-white tracking-[2px] text-center leading-[30px]"
              >
                國立中興大學台灣文學與<br />跨國文化研究所教授
              </div>
              <p class="font-noto text-white font-light text-[13px] tracking-[2px] opacity-60 mt-6">
                台中日日新影城（2024.11.30）
              </p>
            </div>
            <div class="hidden sm:flex flex-col h-full justify-center">
              <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
                朱惠足<span class="text-[14px] font-light"
                  >／國立中興大學台灣文學與跨國文化研究所教授</span
                >
              </div>
              <p class="font-noto text-white font-light text-[13px] tracking-[2px] opacity-60 mt-2">
                台中日日新影城（2024.11.30）
              </p>
            </div>
          </div>
          <div
            class="w-full sm:w-auto text-white font-noto text-[14.5px] tracking-[0.5px] text-justify font-light leading-[30px] mt-8"
          >
            「阿嬤在爪哇開雜貨店的日子，是她一輩子過得最好的時期。」朱惠足教授分享自己的祖父母 1938
            年前往爪哇島開設雜貨店，家裡聘請傭人、生活條件理想。因為「受日本殖民」的身份，台灣人到了東南亞反而成為「日本人」，得以享有比當地人更優渥的資源與更高的權力，歷史學者稱之為「暫時的殖民者」。直到各國對日戰事升溫，任何旅居荷屬印尼的台灣人一概被視為敵國
            (日本) 子民，才讓一切風雲變色⋯⋯
            <NuxtLink
              href="/reports/chu"
              class="hidden sm:inline-block font-semibold cursor-pointer hover:opacity-50"
              >看全文</NuxtLink
            >
          </div>
          <NuxtLink
            href="/reports/chu"
            class="flex sm:hidden justify-center mt-9 font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"
            >View more</NuxtLink
          >
        </div>
        <div class="flex flex-col border-b border-white/60 pb-10 items-center sm:items-start">
          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-x-12">
            <img
              src="/images-webp/reports/lan.webp"
              alt="tsai"
              class="rounded-full w-[134px] h-[134px] object-cover"
            />
            <div class="flex sm:hidden flex-col items-center h-full justify-center mt-5">
              <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
                藍適齊
              </div>
              <div
                class="font-noto text-[14px] font-light text-white tracking-[2px] text-center leading-[30px]"
              >
                國立政治大學歷史系副教授、<br />《由島至島》歷史顧問
              </div>
              <p class="font-noto text-white font-light text-[13px] tracking-[2px] opacity-60 mt-6">
                台北欣欣秀泰影城（2024.10.27）
              </p>
            </div>
            <div class="hidden sm:flex flex-col h-full justify-center">
              <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
                藍適齊<span class="text-[14px] font-light"
                  >／國立政治大學歷史系副教授、《由島至島》歷史顧問</span
                >
              </div>
              <p class="font-noto text-white font-light text-[13px] tracking-[2px] opacity-60 mt-2">
                台北欣欣秀泰影城（2024.10.27）
              </p>
            </div>
          </div>
          <div
            class="w-full sm:w-auto text-white font-noto text-[14.5px] tracking-[0.5px] text-justify font-light leading-[30px] mt-8"
          >
            「當克發導演讀過我的研究，說有興趣把這些比較沒有人知道的歷史拍成紀錄片的時候，大概真的是我自己做歷史研究最開心的一個時刻。」適齊老師分享，閱讀文字與觀看動態影像，對於情感的攪動與觸發全然不同，藉由影像這個媒介，除了易於進入大眾視野，更重要是當觀眾走過紀錄片五小時片長，感受到在那個歷史現場的人，不管是台灣人、還是在馬來亞的華人、日本士兵，或者是戰後繼續在討論這些戰爭歷史的人，他們到底在當下感受到什麼⋯⋯
            <NuxtLink
              href="/reports/lan"
              class="hidden sm:inline-block font-semibold cursor-pointer hover:opacity-50"
              >看全文</NuxtLink
            >
          </div>
          <NuxtLink
            href="/reports/lan"
            class="flex sm:hidden justify-center mt-9 font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"
            >View more</NuxtLink
          >
        </div>
        <div class="flex flex-col border-b border-white/60 pb-10 items-center sm:items-start">
          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-x-12">
            <img
              src="/images-webp/reports/chen.webp"
              alt="tsai"
              class="rounded-full w-[134px] h-[134px] object-cover"
            />
            <div class="flex sm:hidden flex-col items-center h-full justify-center mt-5">
              <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
                陳柏棕
              </div>
              <div
                class="font-noto text-[14px] font-light text-white tracking-[2px] text-center leading-[30px]"
              >
                國家鐵道博物館籌備處助理研究員
              </div>
              <p class="font-noto text-white font-light text-[13px] tracking-[2px] opacity-60 mt-6">
                台北欣欣秀泰影城（2024.10.27）
              </p>
            </div>
            <div class="hidden sm:flex flex-col h-full justify-center">
              <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
                陳柏棕<span class="text-[14px] font-light">／國家鐵道博物館籌備處助理研究員</span>
              </div>
              <p class="font-noto text-white font-light text-[13px] tracking-[2px] opacity-60 mt-2">
                新竹百老匯影城（2024.10.26）
              </p>
            </div>
          </div>
          <div
            class="w-full sm:w-auto text-white font-noto text-[14.5px] tracking-[0.5px] text-justify font-light leading-[30px] mt-8"
          >
            「我們容易自溺於自身的立場。」陳柏棕助理研究員分享，起初對於《由島至島》影像所呈現的也曾抗拒，覺得和認識的不一樣。後來思考許久，才明白要了解一個群體不能只記得良善，而是好壞皆需記錄。對於過去所認知到的台籍日本兵，大多在理解他們的受苦，卻往往忽略身為士兵，不論軍伕或其他角色，在異國為日軍服務本就是侵略性的角色——即使不拿槍，有些通譯雖不動武，卻可能透過語言傷害他人。這是過去他未曾理解的。⋯⋯
            <NuxtLink
              href="/reports/chen"
              class="hidden sm:inline-block font-semibold cursor-pointer hover:opacity-50"
              >看全文</NuxtLink
            >
          </div>
          <NuxtLink
            href="/reports/chen"
            class="flex sm:hidden justify-center mt-9 font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"
            >View more</NuxtLink
          >
        </div>
        <div class="flex flex-col pb-10 items-center sm:items-start">
          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-x-12">
            <img
              src="/images-webp/reports/cheng.webp"
              alt="tsai"
              class="rounded-full w-[134px] h-[134px] object-cover"
            />
            <div class="flex sm:hidden flex-col items-center h-full justify-center mt-5">
              <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
                鄭政誠
              </div>
              <div
                class="font-noto text-[14px] font-light text-white tracking-[2px] text-center leading-[30px]"
              >
                國立中央大學歷史研究所特聘教授
              </div>
              <p class="font-noto text-white font-light text-[13px] tracking-[2px] opacity-60 mt-6">
                台北欣欣秀泰影城（2024.10.27）
              </p>
            </div>
            <div class="hidden sm:flex flex-col h-full justify-center">
              <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
                鄭政誠<span class="text-[14px] font-light">／國立中央大學歷史研究所特聘教授</span>
              </div>
              <p class="font-noto text-white font-light text-[13px] tracking-[2px] opacity-60 mt-2">
                桃園光影文化館（2024.10.6）
              </p>
            </div>
          </div>
          <div
            class="w-full sm:w-auto text-white font-noto text-[14.5px] tracking-[0.5px] text-justify font-light leading-[30px] mt-8"
          >
            鄭政誠教授從台籍日本兵的歷史脈絡談起，1895年日本接收台灣，卻擔心「台灣人」從軍有損日本軍隊的榮耀，因而沒有設定服兵役的義務。然而，1937年中日戰爭爆發，日軍大量人力消耗，又為防範軍武與機密外洩，台灣人只得成為軍屬或軍夫，處理勤務、運輸彈藥、種植蔬菜來儲備戰力與物資，若將軍中階級由上至下排開來看：軍人－軍馬－軍犬－軍鴿，接著才是台灣人所在的軍屬－軍夫，不被視為正規軍人，地位連犬馬也不如。⋯⋯
            <NuxtLink
              href="/reports/cheng"
              class="hidden sm:inline-block font-semibold cursor-pointer hover:opacity-50"
              >看全文</NuxtLink
            >
          </div>
          <NuxtLink
            href="/reports/cheng"
            class="flex sm:hidden justify-center mt-9 font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"
            >View more</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="w-full z-10 opacity-90 overflow-hidden mt-4 sm:mt-24" id="parallax-container">
      <img
        src="/images-webp/stills/still_10.webp"
        alt="still"
        class="w-full h-[100%]"
        id="parallax-content"
      />
    </div>
    <div
      class="flex flex-col sm:flex-row mt-[73px] w-full justify-between px-10 sm:px-[184px] z-10 opacity-90 items-center sm:items-start"
    >
      <div id="interview" class="flex flex-col w-full sm:w-[372px]">
        <div class="flex items-center w-full sm:w-[443px]">
          <div class="flex flex-col items-center w-full sm:items-start">
            <p class="font-shippori text-[22px] sm:text-[28px] text-white tracking-[4px]">
              專訪報導
            </p>
            <p class="font-wix text-[14px] sm:text-[16px] text-white tracking-[2px] mt-1">
              Interview & Reports
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-12 sm:mt-[150px] gap-y-8 w-full sm:w-auto">
        <div class="flex flex-col">
          <div class="font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px]">
            BIOS monthly<span class="text-[14px]">／陳劭任</span>
          </div>
          <a
            href="https://www.biosmonthly.com/article/11542"
            target="_blank"
            rel="noopener noreferrer"
            class="font-noto text-[14px] sm text-[14px]:sm:text-[16px] leading-[36px] font-light underline underline-offset-4 text-white/80 hover:text-white tracking-[2px]"
          >
            你有勇氣看著受害者的眼睛嗎？──專訪廖克發《由島至島》
          </a>
        </div>
        <div class="flex flex-col">
          <div class="font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px]">
            釀電影<span class="text-[14px]">／何欣潔</span>
          </div>
          <a
            href="https://filmaholic.tw/films/6735a780fd89780001dc5b9d/"
            target="_blank"
            rel="noopener noreferrer"
            class="font-noto text-[14px] sm:text-[16px] leading-[36px] font-light underline underline-offset-4 text-white/80 hover:text-white tracking-[2px]"
          >
            《由島至島》：戰爭是什麼？台灣人的戰爭責任又是什麼？
          </a>
        </div>
        <div class="flex flex-col">
          <div class="font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px]">
            釀電影<span class="text-[14px]">／黃曦</span>
          </div>
          <a
            href="https://filmaholic.tw/people/67344728fd89780001dc17b2/"
            target="_blank"
            rel="noopener noreferrer"
            class="font-noto text-[14px] sm:text-[16px] leading-[36px] font-light underline underline-offset-4 text-white/80 hover:text-white tracking-[2px]"
          >
            致新世界的答辯──專訪《由島至島》導演廖克發
          </a>
        </div>
        <div class="flex flex-col">
          <div class="font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px]">
            公民行動影音紀錄資料庫<span class="text-[14px]">／燦爛時光會客室</span>
          </div>
          <a
            href="https://www.civilmedia.tw/archives/129050?fbclid=IwY2xjawGTMqBleHRuA2FlbQIxMAABHZol7wGR9geScddjT0mf8ttifF5Z-nkfiiwTuS4yyTBm8PhbqQPI-Kkjog_aem_atB4ud1HnpWeCD_dJ4z2Og"
            target="_blank"
            rel="noopener noreferrer"
            class="font-noto text-[14px] sm:text-[16px] leading-[36px] font-light underline underline-offset-4 text-white/80 hover:text-white tracking-[2px]"
          >
            選擇？沈默？共犯？對話？ 關於記憶與人性的《由島至島》
          </a>
        </div>
        <div class="flex flex-col">
          <div class="font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px]">
            TIDF<span class="text-[14px]">／李旻</span>
          </div>
          <a
            href="https://www.tidf.org.tw/zh-hant/reportsandarticle/134835"
            target="_blank"
            rel="noopener noreferrer"
            class="font-noto text-[14px] sm:text-[16px] leading-[36px] font-light underline underline-offset-4 text-white/80 hover:text-white tracking-[2px]"
          >
            《由島至島》世界首映映後座談逐字記錄
          </a>
        </div>
        <div class="flex flex-col">
          <div class="font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px]">
            關鍵評論網<span class="text-[14px]">／杜晉軒</span>
          </div>
          <a
            href="https://www.thenewslens.com/feature/golden-horse-awards-2024/204203"
            target="_blank"
            rel="noopener noreferrer"
            class="font-noto text-[14px] sm:text-[16px] leading-[36px] font-light underline underline-offset-4 text-white/80 hover:text-white tracking-[2px]"
          >
            《由島至島》廖克發：為何親歷二戰的馬來西亞華人恨台灣人？如何理解史觀的歧義？
          </a>
        </div>
        <div class="flex flex-col">
          <div class="font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px]">
            紀工報<span class="text-[14px]">／壁虎先生</span>
          </div>
          <a
            href="https://docworker.blogspot.com/2024/06/blog-post_7.html?fbclid=IwY2xjawGTNPFleHRuA2FlbQIxMAABHezj3wsPxJBxVszESVDyXb7dY4Jc_XKGhs0w4ztIpn4jTJsJ6fSdI4Mb0A_aem_dhvNQ_ToZ0lFxwJYzMULIA"
            target="_blank"
            rel="noopener noreferrer"
            class="font-noto text-[14px] sm:text-[16px] leading-[36px] font-light underline underline-offset-4 text-white/80 hover:text-white tracking-[2px]"
          >
            《由島至島》：叢林中的記憶暗河
          </a>
        </div>
        <div class="flex flex-col">
          <div class="font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px]">
            放映週報<span class="text-[14px]">／韋晢</span>
          </div>
          <a
            href="https://funscreen.tfai.org.tw/article/38684"
            target="_blank"
            rel="noopener noreferrer"
            class="font-noto text-[14px] sm:text-[16px] leading-[36px] font-light underline underline-offset-4 text-white/80 hover:text-white tracking-[2px]"
          >
            凝視臺灣歷史，還原個體乘載的殊異記憶──導演廖克發談《由島至島》
          </a>
        </div>
        <div class="flex flex-col">
          <div class="font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px]">
            端傳媒<span class="text-[14px]">／阿潑</span>
          </div>
          <a
            href="https://theinitium.com/article/20240521-culture-lau-kek-huat-interview-from-island-to-island"
            target="_blank"
            rel="noopener noreferrer"
            class="font-noto text-[14px] sm:text-[16px] leading-[36px] font-light underline underline-offset-4 text-white/80 hover:text-white tracking-[2px]"
          >
            加害者？受害者？台灣兵在二戰時期的東南亞做了什麼｜《由島至島》導演廖克發
          </a>
        </div>
        <div class="flex flex-col">
          <div class="font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px]">
            關鍵評論網<span class="text-[14px]">／TIDF 編採小隊</span>
          </div>
          <a
            href="https://www.thenewslens.com/article/201944"
            target="_blank"
            rel="noopener noreferrer"
            class="font-noto text-[14px] sm:text-[16px] leading-[36px] font-light underline underline-offset-4 text-white/80 hover:text-white tracking-[2px]"
          >
            《由島至島》導演廖克發：當兵是去人性化的事，我們怎麼思考二戰時期的台籍日本兵？
          </a>
        </div>
      </div>
    </div>
    <div class="w-full z-10 opacity-90 overflow-hidden mt-24" id="parallax-container">
      <img
        src="/images-webp/stills/still_11.webp"
        alt="still"
        class="w-full h-[110%]"
        id="parallax-content"
      />
    </div>
    <div
      class="w-full z-10 opacity-80 flex flex-col sm:flex-row pt-[97px] justify-between px-10 sm:px-[184px] bg-audience sm:-mt-6 items-center sm:items-start"
    >
      <div id="review" class="flex flex-col w-full sm:w-[372px]">
        <div class="flex items-center w-full sm:w-[443px]">
          <div class="flex flex-col items-center w-full sm:items-start">
            <p class="font-shippori text-[22px] sm:text-[28px] text-white tracking-[4px]">
              評論與回饋
            </p>
            <p
              class="font-wix text-[14px] sm:text-[16px] text-white tracking-[2px] mt-1 text-center sm:text-left"
            >
              Film Reviews &<br />
              Audience Feedback
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-[60px] gap-y-14 items-center sm:items-start w-full sm:w-auto">
        <div class="flex flex-col w-full sm:w-[710px] gap-y-7 border-b border-white pb-14">
          <div
            class="flex flex-col sm:flex-row items-center font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px]"
          >
            <div>張世倫</div>
            <span class="text-[14px]"
              ><span class="hidden sm:inline-block">／</span>攝影史研究者，藝評家</span
            >
          </div>
          <p
            class="font-noto text-[14px] sm:text-[14.5px] font-light text-white tracking-[0.5px] leading-[30px] text-justify"
          >
            作為歷史共犯結構一環的主動或被動的「加害者」，卻絲毫沒有身為「加害者」的自我意識，這大概就是吉本光宏在寫日本電影史時，曾提到戰敗後的「被害者意識」（victim
            consciousness）的形成吧，亦即加害者把責任歸咎於某種抽象的「大時代」以及「不得不然」，最終將自身即便是被動的加害結構一環，卻也自圓其說地代換成某種和稀泥的「我們都是歷史的受害者」，但廖克發蠻有力地證成了，在加害與被害的生態鏈裡，永遠會有更慘且更沒文化政經資本翻身的下面一攤，說不出自己的聲音，或者找不到適切的敘事框架（尤其在複合式的、大寫的「電影」體制裡）。
          </p>
          <p
            class="font-noto text-[12px] sm:text-[14.5px] font-light text-white tracking-[0.5px] leading-[30px] text-justify"
          >
            台灣過去許多關於日治時代的電影、紀錄片、歷史書寫，其實也都是這樣的「被害者意識」敘事構造在運作，從未清理作為帝國一環的台灣（人）的戰爭角色，卻只會在戰後訴諸某種空泛的「悲情」構造，進行主體性的打造工程。就這點來說，導演不斷對一些受訪者進行
            challenge
            ，而不是在任憑他們在空泛的「受害者意識」裡繼續再生產那些永遠不變的講法，是十分可敬之舉。
          </p>
        </div>
        <div class="flex flex-col w-full sm:w-[710px] gap-y-7 border-b border-white pb-14">
          <div
            class="flex flex-col sm:flex-row items-center font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px] text-center sm:text-left"
          >
            <div>藤岡朝子</div>
            <span class="text-[14px] inline-block sm:hidden"
              ><span class="hidden sm:inline-block">／</span
              >山形國際紀錄片影展理事、<br />前山形影展選片人</span
            >
            <span class="hidden sm:inline-block text-[14px]"
              >／山形國際紀錄片影展理事、前山形影展選片人</span
            >
          </div>
          <p
            class="font-noto text-[14px] sm:text-[14.5px] font-light text-white tracking-[0.5px] leading-[30px] text-justify"
          >
            長達 290
            分鐘的《由島至島》揭露日本殖民下、台灣的複雜情感和認同問題，細述戰爭的暴力與戰後的沉默。老一輩的電影創作者可能會試圖記錄歷史，而廖克發的電影則是一首對「記憶」的頌歌。
          </p>
          <p
            class="font-noto text-[14px] sm:text-[14.5px] font-light text-white tracking-[0.5px] leading-[30px] text-justify"
          >
            The 290-minute long From Island to Island（由島至島，2024）opened up complex emotions
            and identity issues under Japan’s colonization of Taiwan, detailing the violence of war
            and the silence thereafter. Where an older generation filmmaker might have tried to set
            history on record, Lau Kek-huat’s film was an ode to the act of remembering.
          </p>
        </div>
        <div class="flex flex-col w-full sm:w-[710px] gap-y-7 border-b border-white pb-14">
          <div
            class="flex flex-col sm:flex-row items-center font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px]"
          >
            <div>吳牧青</div>
            <span class="text-[14px]"><span class="hidden sm:inline-block">／</span>藝評人</span>
          </div>
          <p
            class="font-noto text-[14px] sm:text-[14.5px] font-light text-white tracking-[0.5px] leading-[30px] text-justify"
          >
            由島至島，是華南討海先民的移民路徑，是太陽旗大東亞共榮的全面侵略，也是二戰同盟國fight
            back日軍的跳島路徑，同是第三國際在戰前戰後佈局的島鏈共黨，也是導演挖掘線索和他生平移動的島際軌跡。片中多次提及的「沉默」，包覆在全片290分鐘常有細緻聲響堆疊以至震耳欲聾的環境音爆，開場第一景的混音企圖就絲毫不遜於奧本海默的企圖，也應該是我所聽過Yannick在所有協作者角色裡施出最大力度的編曲。
          </p>
          <p
            class="font-noto text-[14px] sm:text-[14.5px] font-light text-white tracking-[0.5px] leading-[30px] text-justify"
          >
            無論是史料影像和劇情式彷拍、口述歷史的聲音演出，如錄像藝術在疊影上技巧，與偶有為之、有限度的影像效果，看得出廖克發導演在按捺波濤的情緒裡，適當地和憤怒與說教的紀錄片流行病「保持劇離」。它是如此迥異於亞洲電影、紀錄片或錄像藝術，關於轉型正義——要不就是大唱安撫受害族裔安魂曲，要不，就是過度輕巧轉移難以逼視的重點和人性的責任，隱遁進入藝術蒙太奇的懷抱。
          </p>
          <p
            class="font-noto text-[14px] sm:text-[14.5px] font-light text-white tracking-[0.5px] leading-[30px] text-justify"
          >
            連著這麼多年，台灣少說有上百部關於轉型正義的各種錄像或視覺系統的作品，99%都有我前段提到的兩種病。《由島至島》是到目前為止，我心目中唯一具備宏觀角度反視、文人知識情懷自問的轉型正義作品，關於過去常常和朋友納悶台灣怎麼拍轉型正義的作品，和德國、與其受侵略的鄰國等作者，程度還是差那麼多，終於在2024年，我們等到了《由島至島》。
          </p>
          <p
            class="font-noto text-[14px] sm:text-[14.5px] font-light text-white tracking-[0.5px] leading-[30px] text-justify"
          >
            它甚至值得台灣的台北電影獎和金馬獎，應慎重思考一部紀錄片也能競逐首獎之列（『最佳劇情片』應該更名為『最佳影片』），在這種non
            fiction寫作和紀錄劇情交錯使用的創作文體年代，如同三大影展一樣，傑出的紀錄片，理當有資格角逐最佳影片。
          </p>
        </div>
        <div class="flex flex-col w-full sm:w-[710px] gap-y-7 border-b border-white pb-14">
          <div
            class="flex flex-col sm:flex-row items-center font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px]"
          >
            <div>台灣觀眾</div>
            <span class="text-[14px]"
              ><span class="hidden sm:inline-block">／</span>35 歲、服務業者</span
            >
          </div>
          <p
            class="font-noto text-[14px] sm:text-[14.5px] font-light text-white tracking-[0.5px] leading-[30px] text-justify"
          >
            採訪經歷過那個年代的日本人卻勸著眼前的年輕人不要相信這「莫須有」、「不是事實」的論述。看到畫面當時想著：「如果沒有發生可怕的事，為什麼你要一邊說沒有、一邊卻慢慢眼眶含淚？」那一幕讓我直到現在還記得。
          </p>
          <p
            class="font-noto text-[14px] sm:text-[14.5px] font-light text-white tracking-[0.5px] leading-[30px] text-justify"
          >
            《由島至島》是目前為止人生中看過最長的紀錄片，也意猶未盡的希望導演可以出續集，持續以這樣的觀點及角度來引發更多人的關注。
          </p>
          <p
            class="font-noto text-[14px] sm:text-[14.5px] font-light text-white tracking-[0.5px] leading-[30px] text-justify"
          >
            這部紀錄片留下一部分重要的口述歷史，為我們紀錄從不同觀點回顧同一段歷史。不管哪個角度切入、從誰的觀點論述，構築出來的歷史才是完整的，才是最應該被記得的。受害者及加害者的觀點同樣重要，而非勝利者、既得利益者的歷史論述才值得被流傳千古。
          </p>
          <p
            class="font-noto text-[14px] sm:text-[14.5px] font-light text-white tracking-[0.5px] leading-[30px] text-justify"
          >
            如果連歷史這種已發生的事實都能被控制只能選擇對某些人有利的「記得」，那人類豈不活得太「虛假」了？沒有想要誰道歉，只是想要記取教訓的「記得」，而非一無所知的「無知」。謝謝活在和平的時代，不用經歷太多的「不得已」，不用做「你不死我也無法活」的選擇。
          </p>
        </div>
        <div class="flex flex-col w-full sm:w-[710px] gap-y-7 pb-14">
          <div
            class="flex flex-col sm:flex-row items-center font-noto text-[20px] font-semibold text-white tracking-[2px] leading-[36px]"
          >
            <div>馬來西亞麻坡觀眾</div>
            <span class="text-[14px]"
              ><span class="hidden sm:inline-block">／</span>36 歲、家管</span
            >
          </div>
          <p
            class="font-noto text-[14px] sm:text-[14.5px] font-light text-white tracking-[0.5px] leading-[30px] text-justify"
          >
            我感到傷心及憤怒，原來我家鄉麻坡發生屠殺，這段歷史我是如此陌生且熟悉，憤怒在於歷史的話語權是統治者的選取，讓你淡忘、陌生。被空襲炸開的建築、山芭裡的大窟窿、墳場邊的怪異傳說的鬼屋（當時富商一家被清算的現場），熟悉的物件依然擺在那，訴說二戰家鄉的歷史。但人證都凋零或不說。當了解時事經過時，內心像廣島原子彈一樣的炸裂。從沒見過的太祖（阿嬤的媽媽）從來都是家裡不可談的禁忌，老舅孩童時真的是從樹上摔下，死去？大人們不說，說不想再來一個
            513。
          </p>
        </div>
      </div>
    </div>
    <Footer bgColor="black" textColor="white" :opacity="100" />
  </div>
</template>
