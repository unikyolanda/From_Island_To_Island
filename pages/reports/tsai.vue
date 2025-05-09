<script setup>
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const router = useRouter()
  const menuRef = ref(null)
  const toggleMenu = () => {
    menuRef.value.show()
  }

  const closeMenu = () => {
    menuRef.value.hide()
  }

  onMounted(() => {
    const images = document.querySelectorAll('.fade-image')
    const textElements = document.querySelectorAll('p.font-noto, div.font-noto')

    // Check if each image is loaded
    const imagePromises = Array.from(images).map(img => {
      if (img.complete) {
        return Promise.resolve()
      } else {
        return new Promise(resolve => {
          img.onload = resolve
        })
      }
    })

    // Initialize animations after all images are loaded
    Promise.all(imagePromises).then(() => {
      // Setup image fade-in effects
      images.forEach(element => {
        gsap.from(element, {
          opacity: 0,
          y: 30,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      })

      // Setup text fade-in effects
      textElements.forEach(element => {
        gsap.from(element, {
          opacity: 0,
          y: 30,
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
<template>
  <div class="flex flex-col bg-black w-screen h-auto min-h-screen items-center">
    <div class="hidden sm:flex fixed inset-0 bg-reports z-0"></div>
    <NavBar textColor="white" logoSrc="/images/logo.png" />
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="fixed right-10 sm:right-12 top-6 sm:top-10 cursor-pointer z-20">
      <img src="/images/menu.svg" alt="menu" class="w-8 sm:w-10 h-8" @click="toggleMenu" />
    </div>
    <img
      src="/images-webp/reports/popbox/Popbox_1_1.webp"
      class="sm:hidden w-full h-auto fade-image"
    />
    <div class="w-full sm:w-[1116px] relative flex flex-col items-center px-10">
      <div
        @click="() => router.back()"
        class="hidden sm:block fixed top-12 right-56 cursor-pointer z-10"
      >
        <img src="/images/xmark.svg" />
      </div>
      <img
        src="/images-webp/reports/popbox/Popbox_1_1.webp"
        class="hidden sm:block w-full h-auto fade-image"
      />
      <div
        class="w-full flex sm:hidden justify-center py-6 text-white text-center leading-[30px] font-noto tracking-[2px]"
      >
        《由島至島》紀錄片映演計畫—<br />嘉義場
      </div>
      <div
        class="flex flex-col sm:flex-row items-center border-y sm:border-none border-white/50 w-full sm:w-[841px] py-16 gap-x-12"
      >
        <img
          src="/images-webp/reports/tsai.webp"
          alt="tsai"
          class="rounded-full w-[134px] h-[134px] object-cover fade-image"
        />
        <div class="flex sm:hidden flex-col items-center h-full justify-center mt-5">
          <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">蔡崇隆</div>
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
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        <span class="sm:inline-block hidden font-semibold">《由島至島》紀錄片映演計畫——嘉義場</span
        ><br /><br />
        《由島至島》映演計畫終場抵達嘉義，邀請《九槍》導演、中正大學傳播系副教授
        蔡崇隆老師與廖克發導演帶來映後座談。<br /><br />
        「克發導演作為大馬新住民，有別於台灣人背負的歷史包袱、提供新鮮的觀點，《由島至島》填補了台灣二戰之後長期的歷史空缺、甚至是記憶的黑洞。」蔡崇隆導演觀察新住民導演正因與台灣隔了一段距離，視野更為清晰，其妻子阮金紅為越南裔新住民，同樣身為導演，她紀錄下這個世代台灣人跨國婚姻與家庭的歷史，克發導演則拍攝父祖輩在大東亞戰爭之下的記憶，相較於從國族出發的大敘事，兩者皆從屬於人民記憶的小敘事開展。
      </p>
      <div class="flex gap-x-4 my-12">
        <img
          src="/images-webp/reports/popbox/Popbox_1_2.webp"
          class="w-full sm:w-[412px] h-auto fade-image"
        />
        <img
          src="/images-webp/reports/popbox/Popbox_1_3.webp"
          class="hidden sm:block w-[412px] h-auto fade-image"
        />
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        「我現在做紀錄片，也是在紀錄台灣的歷史，可是我覺得對於自己的家族、還有相關台灣歷史的所知是很有限的。」導演分享自身父親
        1924
        年生、嘉義布袋人，說了一口流利日文，回推二戰時期正值青春年華，對於戰爭應是有記憶的，但卻從來沒談過這段過往。時至一九七零年代，當時是個「愛國青年」、想要入國民黨的他，才從父親口中得知祖父於白色恐怖期間被逮捕，出獄後不久即病逝的經歷
        。「蔡家從原本的望族，到家人一個個移民國外，整個家族在布袋是空洞化的。」導演希望若家中尚有父親同輩的長者，可以更了解那一輩到底是發生了什麼事情，這是《由島至島》帶給觀眾的啟發與激勵。<br /><br />
        《由島至島》透過細緻的資料收集、考察、採訪，架構出龐大格局，不只限於台灣，橫跨馬來西亞、日本、中國、泰國……，如同亞洲版的《夜與霧》一般，並非特別要譴責誰，而是一個很重要的提醒——很多事情可能不是「同情」就好，更多是要去理解，意識到自身的偏見與歧視。「沒有自覺是危險的，而情況會越來越糟。現在進行式的，30年來對東南亞移工在制度跟政策上的壓迫，他們背著債務在幫台灣人勞動、不能自由轉換雇主，面對來自於檯面下跟檯面上的剝削沒有辦法改變。」過去的歷史必須被挖掘與注視，而東南亞移工目前所面臨的種族跟階級的壓迫根源也必須正視，許多來自克發導演片中所提及的個人選擇，當然可以說一部分責任來自國家、民族，但自身的判斷、決定與行為，做與不做只有自己知道、要對自己負責。
      </p>
      <div class="flex gap-x-4 my-12">
        <img
          src="/images-webp/reports/popbox/Popbox_1_4.webp"
          class="w-full sm:w-[412px] h-auto fade-image"
        />
        <img
          src="/images-webp/reports/popbox/Popbox_1_5.webp"
          class="hidden sm:block w-[412px] h-auto fade-image"
        />
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        「家中長輩不願談這段歷史，我們也難以進一步得知。」觀眾提問，導演接續回應「如同我父親未提及日治時期的記憶。片中許多人不願談、沒有勇氣講、不知道如何說，但要知道我們都是隔了一個歷史時空，從冷靜的狀態回顧當時，才可以這麼談。如果回到那個當下，我們真的能多說什麼或多做什麼嗎？」《九槍》密錄器拍攝的畫面裡，可以看到周遭的警察與民眾沒有做任何事，觀眾常常提問為何不作為，但當導演反問「如果在同樣時空，你會怎麼做？」觀眾通常都愣住了，無法確定到底可不可以做出不同決定。「我們沒有辦法站在道德制高點去批判這些人，但我們一定要透過這樣的人民記憶去建構、去記得這些事，現在我們知道了，我們這一代可以做什麼，下一代做什麼，和前面那些世代是不一樣的，這個是重要的。」。
      </p>
      <img
        src="/images-webp/reports/popbox/Popbox_1_5.webp"
        class="sm:hidden block w-full sm:w-[412px] h-auto mt-8 fade-image"
      />
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px] mt-8"
      >
        「戰爭裡無差別的殺戮，《九槍》追捕過程中看著他死去。為什麼我們可以把非我族類的人『非人化』？」導演點出過去可以說是帝國主義、殖民主義、民族主義一個意識形態的影響，人們通常會被當作國家下的一個客體或者是棋子而不自覺或不在意，但現在這個世代必須除魅。「唯有我們建構新的歷史史觀或一個新的世界觀，不再把自己化為一個客體或者只是一個工具人，我們才不會再把別人也視為如此。」導演期待朝新歷史運動努力，國族敘事僅供參考，實質要由各個家族、人民百姓的小敘事來構成一個人民敘事，經由這樣的新歷史運動，創造一個新的台灣主體性、新的歷史史觀，未來的統治者意圖控制或洗腦將不再容易，「這是我們這一代直至現在都必須繼續努力的」。
      </p>
      <div
        @click="() => router.back()"
        class="flex sm:hidden justify-center mt-9 font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500 cursor-pointer"
      >
        回上頁
      </div>
      <img
        src="/images-webp/reports/popbox/Popbox_1_6.webp"
        class="w-screen h-auto mt-12 mb-[205px] fade-image"
      />
    </div>
  </div>
</template>
