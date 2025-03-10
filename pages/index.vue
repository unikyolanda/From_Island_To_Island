<script setup>
  const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()

  // 延遲載入 YouTube 相關資源
  const loadYouTubeEmbed = async () => {
    await import('lite-youtube-embed/src/lite-yt-embed.css')
    await import('lite-youtube-embed')
  }
  const menuRef = ref(null)
  const windowWidth = ref(window.innerWidth)

  // Update window width on resize
  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth
  }

  const toggleMenu = () => {
    menuRef.value.show()
  }

  const closeMenu = () => {
    menuRef.value.hide()
  }

  onMounted(() => {
    // Initial window width
    updateWindowWidth()

    // 延遲載入 YouTube 組件
    setTimeout(loadYouTubeEmbed, 2000)

    // Listen for window resize
    window.addEventListener('resize', updateWindowWidth)
    const allImages = Array.from(document.querySelectorAll('.image-box img'))
    const textElements = document.querySelectorAll('.still p')
    const stills2Image = document.querySelector('.stills2')
    const titleSections = document.querySelectorAll('.title-text-section, .vertical-text-section')
    const lessonTopic = document.querySelectorAll('.lessonTopic p')
    const filmContentElements = document.querySelectorAll(
      '.filmContent > .filmText, .filmContent > div:nth-child(2), .filmContent > div:nth-child(3)'
    )

    // Set initial state for title sections
    gsap.set(filmContentElements, {
      opacity: 0,
      y: 30,
      filter: 'blur(5px)',
    })

    gsap.set(titleSections, {
      opacity: 0,
      filter: 'blur(15px)',
    })

    // Animate title sections
    gsap.to(titleSections, {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 2,
      delay: 0.5,
      ease: 'power2.out',
    })

    // Initialize all images as hidden
    allImages.forEach((img, index) => {
      gsap.set(img, {
        opacity: 0,
        y: 5,
        filter: 'blur(5px)',
        zIndex: index + 1, // photo5 (index 0) gets z-index 1, photo1 (index 4) gets z-index 5
      })
    })

    // Create sequential animation for images
    const tl = gsap.timeline({ delay: 0.1 })
    allImages.forEach((img, index) => {
      tl.to(
        img,
        {
          opacity: 0.4,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power1.inOut',
        },
        index * 0.8
      ) // Stagger the animations
    })

    // Text animations
    textElements.forEach(text => {
      gsap.set(text, {
        opacity: 0,
        y: 30,
        filter: 'blur(5px)',
      })
    })

    ScrollTrigger.create({
      trigger: '.still',
      start: 'top center',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: self => {
        const progress = self.progress
        const direction = self.direction
        const totalElements = textElements.length

        textElements.forEach((text, index) => {
          // Calculate delay based on scroll direction
          const delay =
            direction === 1
              ? index * 1 // Original order when scrolling down
              : (totalElements - 1 - index) * 1 // Reverse order when scrolling up

          if (direction === 1) {
            // Scrolling down
            gsap.to(text, {
              opacity: progress * 1.5,
              y: progress * -30,
              filter: 'blur(0px)',
              duration: 2.5,
              delay: delay,
              ease: 'power2.out',
            })
          } else {
            // Scrolling up
            gsap.to(text, {
              opacity: progress,
              y: (1 - progress) * 30,
              filter: 'blur(5px)',
              duration: 2.5,
              delay: delay,
              ease: 'power2.out',
            })
          }
        })
      },
    })

    gsap.set(stills2Image, {
      opacity: 0,
      maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%)',
    })

    // Create ScrollTrigger for both images
    ScrollTrigger.create({
      trigger: stills2Image,
      start: 'top bottom',
      end: 'bottom bottom',

      scrub: true,
      onUpdate: self => {
        const progress = self.progress

        gsap.to(stills2Image, {
          opacity: progress < 0.5 ? 0 : (progress - 0.5) * 2,
          duration: 0.2,
          maskImage: `linear-gradient(to top, rgba(0, 0, 0, 1) ${20 + progress * 50}%, rgba(0, 0, 0, 0) 100%)`,
          ease: 'power1.out',
        })
      },
    })

    gsap.set(['.filmContent', 'lessonContent'], { opacity: 0, y: 30, filter: 'blur(5px)' })
    ScrollTrigger.create({
      trigger: '.film',
      start: 'top bottom',
      end: 'top 25%',
      scrub: true,
      onUpdate: self => {
        const progress = self.progress
        gsap.to('.film', {
          y: progress * -100,
          duration: 0.2,
          ease: 'power1.out',
        })
        gsap.to('.filmContent', {
          opacity: progress,
          y: (1 - progress) * 30,
          filter: `blur(${(1 - progress) * 5}px)`,
          duration: 0.2,
          ease: 'power1.out',
        })
      },
    })

    ScrollTrigger.create({
      trigger: '.lesson',
      start: 'top bottom',
      end: 'top 25%',
      scrub: true,
      onUpdate: self => {
        const progress = self.progress
        gsap.to('.lesson', {
          y: progress * -100,
          duration: 0.2,
          ease: 'power1.out',
        })
        gsap.to('.lessonContent', {
          opacity: progress,
          y: (1 - progress) * 30,
          filter: `blur(${(1 - progress) * 5}px)`,
          duration: 0.2,
          ease: 'power1.out',
        })
      },
    })

    ScrollTrigger.create({
      trigger: '.film',
      start: 'top 75%',
      end: 'top 25%',
      scrub: true,
      onUpdate: self => {
        const progress = self.progress
        const direction = self.direction
        const totalElements = filmContentElements.length

        filmContentElements.forEach((element, index) => {
          const delay =
            direction === 1
              ? index * 0.3 // Faster sequence when scrolling down
              : (totalElements - 1 - index) * 0.3 // Reverse order when scrolling up

          gsap.to(element, {
            opacity: progress,
            y: (1 - progress) * 30,
            filter: direction === 1 ? 'blur(0px)' : 'blur(5px)',
            duration: 1.5,
            delay: delay,
            ease: 'power2.out',
          })
        })
      },
    })

    // Set initial state for lessonTopic
    lessonTopic.forEach(text => {
      gsap.set(text, {
        opacity: 0,
        filter: 'blur(5px)',
      })
    })

    ScrollTrigger.create({
      trigger: '.lesson',
      start: 'top 75%',
      end: 'top 25%',
      scrub: true,
      onUpdate: self => {
        const progress = self.progress
        const direction = self.direction
        const totalElements = lessonTopic.length

        lessonTopic.forEach((text, index) => {
          // Calculate delay based on scroll direction and odd/even index
          const isOdd = index % 2 !== 0
          const adjustedIndex = isOdd
            ? Math.floor(totalElements / 2) + Math.floor(index / 2)
            : Math.floor(index / 2)

          const delay =
            direction === 1
              ? adjustedIndex * 0.5 // Odd indices first when scrolling down
              : (totalElements - 1 - adjustedIndex) * 0.5 // Reverse order when scrolling up

          gsap.to(text, {
            opacity: progress,
            filter: direction === 1 ? 'blur(0px)' : 'blur(5px)',
            duration: 2.5,
            delay: delay,
            ease: 'power2.out',
          })
        })
      },
    })

    // Cleanup
    onUnmounted(() => {
      window.removeEventListener('resize', updateWindowWidth)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    })
  })
</script>

<style>
  lite-youtube {
    background-color: #000;
    position: relative;
    display: block;
    contain: content;
    background-position: center center;
    background-size: cover;
    cursor: pointer;
  }

  .ripple-effect {
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url('/images-webp/first_bg.webp');
  }
  .third-bg {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url('/images-webp/third_bg.webp');
  }
  .forth-bg {
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url('/images-webp/fourth_bg.webp');
  }
  .rotateText {
    writing-mode: vertical-rl;
  }
  .mask-leathers {
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%);
  }
</style>

<template>
  <div class="relative overflow-x-hidden h-[300vh] w-full">
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="ripple-effect absolute flex flex-col items-center w-full h-full overflow-x-hidden">
      <div class="title w-full min-h-screen relative flex items-center">
        <div class="sm:hidden absolute left-10 z-10 top-[55px]">
          <img src="/images-webp/title.webp" alt="title" class="w-[140px] h-[81px]" />
        </div>
        <div class="fixed right-10 sm:right-12 top-10 cursor-pointer z-20">
          <img src="/images/menu.svg" alt="menu" class="w-10 h-8" @click="toggleMenu" />
        </div>
        <div class="flex sm:px-[162px] justify-center relative w-full h-auto">
          <div
            class="title-text-section flex flex-col absolute top-[480px] sm:top-[447px] left-[60px] sm:left-[162px]"
          >
            <p
              class="font-shippori text-white text-[32px] sm:text-[50px] font-light tracking-[8px] sm:tracking-[12px]"
            >
              由島至島
            </p>
            <p
              class="font-shippori text-white text-[32px] sm:text-[50px] font-light tracking-[8px] sm:tracking-[12px]"
            >
              記憶與對話
            </p>
            <p
              class="font-amiri italic text-xl sm:text-[25px] text-white tracking-[1px] sm:tracking-[3px] mt-7"
            >
              From Island
            </p>
            <p
              class="font-amiri italic text-xl sm:text-[25px] text-white tracking-[1px] sm:tracking-[3px]"
            >
              to Island
            </p>
            <p
              class="font-amiri italic text-xl sm:text-[25px] text-white tracking-[1px] sm:tracking-[3px]"
            >
              Memory and Dialogue
            </p>
          </div>
          <div class="image-box mt-16 sm:mt-[100px] relative flex justify-center w-screen">
            <img
              src="/images-webp/first_photo5.webp"
              alt="photo5"
              class="opacity-40 h-[437px] w-[514.12px] sm:h-[709px] sm:w-[834px]"
            />
            <img
              src="/images-webp/first_photo4.webp"
              alt="photo4"
              class="opacity-40 h-[437px] w-[514.12px] sm:h-[709px] sm:w-[834px] absolute top-0"
            />
            <img
              src="/images-webp/first_photo3.webp"
              alt="photo3"
              class="opacity-40 h-[437px] w-[514.12px] sm:h-[709px] sm:w-[834px] absolute top-0"
            />
            <img
              src="/images-webp/first_photo2.webp"
              alt="photo2"
              class="opacity-40 h-[437px] w-[514.12px] sm:h-[709px] sm:w-[834px] absolute top-0"
            />
            <img
              src="/images-webp/first_photo1.webp"
              alt="photo1"
              class="opacity-40 h-[437px] w-[514.12px] sm:h-[709px] sm:w-[834px] absolute top-0"
            />
          </div>
          <div
            class="vertical-text-section hidden absolute top-[106px] right-[162px] sm:flex flex-col z-10"
          >
            <img src="/images-webp/title.webp" alt="title" class="w-[276px] h-[160px]" />
            <div class="mt-24 -translate-x-2 flex">
              <NuxtLink
                to="/lesson/five"
                class="font-shippori text-white text-xl tracking-[8px] rotateText mr-8 hover:opacity-50"
              >
                為什麼要記憶
              </NuxtLink>
              <NuxtLink
                to="/lesson/four"
                class="font-shippori text-white text-xl tracking-[8px] rotateText mr-8 hover:opacity-50"
              >
                克服過去
              </NuxtLink>
              <NuxtLink
                to="/lesson/three"
                class="font-shippori text-white text-xl tracking-[8px] rotateText mr-8 hover:opacity-50"
              >
                共犯結構
              </NuxtLink>
              <NuxtLink
                to="/lesson/two"
                class="font-shippori text-white text-xl tracking-[8px] rotateText mr-8 hover:opacity-50"
              >
                加害與被害
              </NuxtLink>
              <NuxtLink
                to="/lesson/one"
                class="font-shippori text-white text-xl tracking-[8px] rotateText hover:opacity-50"
                >移動與邊界</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full min-h-screen items-center justify-center still relative">
        <p
          class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[8px] mt-[220px] sm:mt-12"
        >
          記憶像水一樣流動
        </p>
        <p
          class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[8px] mt-12"
        >
          我們可以選擇如何記憶
        </p>
        <p
          class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[8px] mt-12"
        >
          也是在重塑我們
        </p>
        <p
          class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[8px] mt-12"
        >
          作為人的意義
        </p>
      </div>
      <div class="flex w-full h-screen translate-y-[var(--parallax-y)] mask-leathers">
        <img
          src="/images-webp/still_3.webp"
          alt="stills2"
          class="stills2 size-full origin-center object-cover"
        />
      </div>
    </div>
  </div>
  <div class="h-auto sm:h-[100vh] flex third-bg justify-center items-center film">
    <div
      class="sm:max-w-[1200px] w-screen h-full min-h-screen flex flex-col items-center justify-center sm:flex-row sm:gap-x-[142px] sm:mb-24 filmContent pt-12 pb-[150px] sm:pb-0 px-10"
    >
      <div class="flex flex-col gap-y-6 sm:gap-y-14 items-center sm:items-start filmText">
        <div class="flex flex-col items-center sm:items-start">
          <p class="font-amiri italic text-white tracking-[6px] text-lg sm:text-[28px]">FILM</p>
          <p class="font-shippori text-white text-[36px] sm:text-[44px] tracking-[8px]">由島至島</p>
        </div>
        <p
          class="hidden sm:flex font-noto text-white tracking-[2px] w-full sm:w-[412px] leading-[36px] text-sm sm:text-[16px]"
        >
          台灣在二戰期間是日本帝國的一部分。本片以此為主題，努力挖掘和重新整理台灣在二戰期間的隱藏記憶，探索在日本帝國內的台灣士兵、醫生與生活在東南亞的海外台灣人之經歷。全片從兒子對父親的提問開場，透過跨世代的對話、家書、日記和家庭成員之間的影片，探討台灣歷史記憶的複雜性，以及這一時期存在的各種身分。
        </p>
        <NuxtLink
          to="/film"
          class="hidden sm:flex justify-center font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"
        >
          View more
        </NuxtLink>
      </div>
      <div class="flex flex-col">
        <lite-youtube
          videoid="YkEfOmfF5FM"
          class="w-full sm:w-[568px] h-[220px] sm:h-[362px] mt-10 sm:mt-24 shadow-md"
          playlabel="由島至島 From Island to Island"
        ></lite-youtube>
        <img
          src="/images-webp/forth_logo.webp"
          alt="forth_logo"
          class="mt-6 sm:mt-20 w-[568px] h-auto"
        />
      </div>
      <div class="flex flex-col mt-9 sm:hidden items-center">
        <p
          class="font-noto text-white tracking-[1px] sm:tracking-[2px] w-full sm:w-[412px] leading-[36px] text-sm sm:text-[16px]"
        >
          台灣在二戰期間是日本帝國的一部分。本片以此為主題，努力挖掘和重新整理台灣在二戰期間的隱藏記憶，探索在日本帝國內的台灣士兵、醫生與生活在東南亞的海外台灣人之經歷。全片從兒子對父親的提問開場，透過跨世代的對話、家書、日記和家庭成員之間的影片，探討台灣歷史記憶的複雜性，以及這一時期存在的各種身分。
        </p>
        <NuxtLink
          to="/film"
          class="flex justify-center font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500 mt-8"
        >
          View more
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="h-screen flex forth-bg justify-center items-center lesson -mt-[100px]">
    <div class="max-w-[1600px] flex my-[224px] lessonContent">
      <div class="hidden sm:flex opacity-15 mr-[112px] lessonTopic">
        <p class="font-shippori text-white text-[59px] tracking-[36px] rotateText mr-7">
          為什麼要記憶
        </p>
        <p class="font-shippori text-white text-[59px] tracking-[36px] rotateText mr-7 mt-12">
          克服過去
        </p>
        <p class="font-shippori text-white text-[59px] tracking-[36px] rotateText mr-7">共犯結構</p>
        <p class="font-shippori text-white text-[59px] tracking-[36px] rotateText mr-7 mt-12">
          加害與被害
        </p>
        <p class="font-shippori text-white text-[59px] tracking-[36px] rotateText">移動與邊界</p>
      </div>
      <div class="flex flex-col items-center sm:items-start gap-y-6 sm:gap-y-14 px-10 sm:px-0">
        <div class="flex flex-col items-center sm:items-start">
          <p class="font-amiri italic text-white tracking-[6px] text-lg sm:text-[28px]">LESSON</p>
          <p class="font-shippori text-white text-[36px] sm:text-[44px] tracking-[8px]">主題教案</p>
        </div>
        <p
          class="font-noto text-white tracking-[1px] sm:tracking-[2px] w-full sm:w-[440px] leading-[36px] text-[14px] sm:text-[16px]"
        >
          《由島至島》教育推廣規劃，從本片中節選出５個主題的片段，發展搭配教案，免費開放老師申請作為課程教授素材。五大主題為：移動與邊界、加害與被害、共犯結構－日本擴張行動、克服過去、為什麼要記憶，各有台灣、日本及馬來西亞教案可下載。
        </p>
        <NuxtLink
          to="/lesson"
          class="flex justify-center font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"
        >
          View more
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="w-full h-[146px] bg-black -mt-[100px] flex px-20 items-center justify-center z-10">
    <div class="max-w-[1440px] w-full flex items-center justify-between">
      <div class="flex gap-x-[77px]">
        <a
          href="https://www.facebook.com/fromislandtoisland"
          target="_blank"
          class="font-shippori text-[18px] text-white/50 tracking-[10px] hover:text-white"
          >由島至島</a
        >
        <p class="font-shippori text-[18px] text-white/50 tracking-[10px] hover:text-white">最新場次</p>
      </div>
      <div class="flex gap-x-[30px]">
        <a
          href="https://siddharam.com/"
          target="_blank"
          class="font-noto text-[12px] text-white/50 tracking-[1px] hover:text-white"
        >
          網站製作｜西打藍好內容有限公司
        </a>
        <p class="font-wix text-[13px] text-white/50 hover:text-white">Copyright © HUMMINGBIRD Production</p>
      </div>
    </div>
  </div>
</template>
