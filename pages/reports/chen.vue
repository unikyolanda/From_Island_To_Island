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
      src="/images-webp/reports/popbox/popbox_5_1.webp"
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
        src="/images-webp/reports/popbox/popbox_5_1.webp"
        class="hidden sm:block w-full h-auto fade-image"
      />
      <div
        class="w-full flex sm:hidden justify-center py-6 text-white text-center leading-[30px] font-noto tracking-[2px]"
      >
        《由島至島》紀錄片映演計畫—<br />新竹場
      </div>
      <div
        class="flex flex-col sm:flex-row items-center border-y sm:border-none border-white/50 w-full sm:w-[841px] py-16 gap-x-12"
      >
        <img
          src="/images-webp/reports/chen.webp"
          alt="tsai"
          class="rounded-full w-[134px] h-[134px] object-cover fade-image"
        />
        <div class="flex sm:hidden flex-col items-center h-full justify-center mt-5">
          <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">陳柏棕</div>
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

      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        <span class="sm:inline-block hidden font-semibold"> 《由島至島》紀錄片映演計畫——新竹場</span
        ><br /><br />

        著有《軍艦旗下：臺灣海軍特別志願兵（1943-1945）》、《護國丸：被遺忘的二戰臺籍海軍史》等書，現為國家鐵道博物館籌備處助理研究員的陳柏棕，於映後座談不吝感謝《由島至島》挖掘出新的歷史觀點。
      </p>
      <div class="flex gap-x-4 my-12">
        <img
          src="/images-webp/reports/popbox/popbox_5_2.webp"
          class="w-[412px] h-auto fade-image"
        />
        <img
          src="/images-webp/reports/popbox/popbox_5_3.webp"
          class="w-[412px] h-auto hidden sm:block fade-image"
        />
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        「我們容易自溺於自身的立場。」陳柏棕助理研究員分享，起初對於《由島至島》影像所呈現的也曾抗拒，覺得和認識的不一樣。後來思考許久，才明白要了解一個群體不能只記得良善，而是好壞皆需記錄。對於過去所認知到的台籍日本兵，大多在理解他們的受苦，卻往往忽略身為士兵，不論軍伕或其他角色，在異國為日軍服務本就是侵略性的角色——即使不拿槍，有些通譯雖不動武，卻可能透過語言傷害他人。這是過去他未曾理解的。<br /><br />
        「我擔心的是這種敘述可能會讓人覺得所有台灣人到東南亞都做過這些事，但事實並非如此。根據我研究，並非所有人都符合這種敘述。有些人被派到東南亞擔任文書或通譯，不一定是憲兵，且不具資格當憲兵，但這些人確實需承擔罪責。」他提醒，不應將所有台籍日本兵同質化，不同時期加入台籍日本兵至南洋的脈絡都不盡相同。尤其大多台灣人是以「臺灣特設勤勞團」的身分在1943年被派遣至東南亞等地，當時戰況已經不一樣，許多人在前線面臨砲火、飢餓、疾病等威脅，甚至遭遇游擊隊清洗。並非所有人的經歷或行為都一樣。
      </p>
      <div class="flex gap-x-4 my-12">
        <img
          src="/images-webp/reports/popbox/popbox_5_4.webp"
          class="w-[412px] h-auto fade-image"
        />
        <img
          src="/images-webp/reports/popbox/popbox_5_5.webp"
          class="w-[412px] h-auto hidden sm:block fade-image"
        />
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        廖克發導演同意「當我們看一個群體時，不要把群體想成很容易的，想成他是同質性的。每一群體裡面，仍相當多音、多元。作為台灣人，怎麼記憶這段歷史是我們的責任，我們要如何記得這些事情、能否看見他人傷痛，而不是僅專注在自己的傷痛上。」<br /><br />
        最後，陳柏棕助理研究員鼓勵大家多了解自己的歷史，對於這段歷史能有更多的探尋。
      </p>
      <div
        @click="() => router.back()"
        class="flex sm:hidden justify-center mt-9 font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500 cursor-pointer"
      >
        回上頁
      </div>
      <img
        src="/images-webp/reports/popbox/popbox_5_6.webp"
        class="w-screen h-auto mt-12 mb-[97px] fade-image"
      />
    </div>
  </div>
</template>
