<script setup>
  const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
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

    // Listen for window resize
    window.addEventListener('resize', updateWindowWidth)
    const allImages = Array.from(document.querySelectorAll('.image-box img'))
    const textElements = document.querySelectorAll('.still p')
    const stills2Image = document.querySelector('.stills2')
    const filmContent = document.querySelector('.filmContent')

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

        textElements.forEach((text, index) => {
          const delay = index * 0.1
          if (direction === 1) {
            // Scrolling down
            gsap.to(text, {
              opacity: progress * 1.5,
              y: progress * -30,
              filter: 'blur(0px)',
              duration: 1.25,
              delay: delay,
              ease: 'power2.out',
            })
          } else {
            // Scrolling up
            gsap.to(text, {
              opacity: progress,
              y: (1 - progress) * 30,
              filter: 'blur(5px)',
              duration: 1.25,
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
      end: 'bottom bottom',
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
      end: 'bottom bottom',
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

    // Cleanup
    onUnmounted(() => {
      window.removeEventListener('resize', updateWindowWidth)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    })
  })
</script>

<style>
  .ripple-effect {
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url('/images/first_bg.jpg');
  }
  .third-bg {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url('/images/third_bg.jpg');
  }
  .forth-bg {
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url('/images/fourth_bg.jpg');
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
  <div class="relative overflow-x-hidden h-[300vh]">
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div
      class="ripple-effect absolute flex flex-col items-center min-w-full h-full overflow-x-hidden"
    >
      <div class="title w-full min-h-screen relative flex items-center">
        <div class="absolute right-12 top-10 cursor-pointer z-10">
          <img src="/images/menu.svg" alt="menu" class="w-10 h-8" @click="toggleMenu" />
        </div>
        <div class="flex px-[162px] justify-center relative w-full h-auto">
          <div class="flex flex-col absolute top-[447px] left-[162px]">
            <p class="font-shippori text-white text-[50px] font-light tracking-[12px]">由島至島</p>
            <p class="font-shippori text-white text-[50px] font-light tracking-[12px]">
              記憶與對話
            </p>
            <p class="font-amiri italic text-[25px] text-white tracking-[3px] mt-7">From Island</p>
            <p class="font-amiri italic text-[25px] text-white tracking-[3px]">to Island</p>
            <p class="font-amiri italic text-[25px] text-white tracking-[3px]">
              Memory and Dialogue
            </p>
          </div>
          <div class="image-box mt-[100px] relative">
            <img src="/images/first_photo5.png" alt="photo5" class="opacity-40 h-[709px]" />
            <img
              src="/images/first_photo4.png"
              alt="photo4"
              class="opacity-40 h-[709px] absolute top-0"
            />
            <img
              src="/images/first_photo3.png"
              alt="photo3"
              class="opacity-40 h-[709px] absolute top-0"
            />
            <img
              src="/images/first_photo2.png"
              alt="photo2"
              class="opacity-40 h-[709px] absolute top-0"
            />
            <img
              src="/images/first_photo1.png"
              alt="photo1"
              class="opacity-40 h-[709px] absolute top-0"
            />
          </div>
          <div class="absolute top-[106px] right-[162px] flex flex-col">
            <img src="/images/title.png" alt="title" class="w-[276px] h-[160px]" />
            <div class="mt-24 -translate-x-2 flex">
              <p class="font-shippori text-white text-xl tracking-[8px] rotateText mr-8">
                為什麼要記憶
              </p>
              <p class="font-shippori text-white text-xl tracking-[8px] rotateText mr-8">
                克服過去
              </p>
              <p class="font-shippori text-white text-xl tracking-[8px] rotateText mr-8">
                共犯結構
              </p>
              <p class="font-shippori text-white text-xl tracking-[8px] rotateText mr-8">
                加害與被害
              </p>
              <p class="font-shippori text-white text-xl tracking-[8px] rotateText">移動與邊界</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full min-h-screen items-center justify-center still relative">
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">記憶像水一樣流動</p>
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">我們可以選擇如何記憶</p>
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">也是在重塑我們</p>
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">作為人的意義</p>
      </div>
      <div
        class="flex w-full h-screen translate-y-[var(--parallax-y)] mask-leathers"
        :style="`--parallax-y: ${parallaxY}px`"
      >
        <img
          src="/images/second_stills2.jpg"
          alt="stills2"
          class="stills2 size-full origin-center object-cover"
        />
      </div>
    </div>
  </div>
  <div class="h-[100vh] flex third-bg justify-center items-center film">
    <div class="max-w-[1000px] flex gap-x-[142px] my-[236px] filmContent">
      <div class="flex flex-col gap-y-14">
        <p class="font-wix text-white tracking-[4px] text-[26px]">FILM</p>
        <p class="font-shippori text-white text-[50px] tracking-[8px]">由島至島</p>
        <p class="font-noto text-white tracking-[2px] w-[412px] leading-[36px]">
          台灣在二戰期間是日本帝國的一部分。本片以此為主題，努力挖掘和重新整理台灣在二戰期間的隱藏記憶，探索在日本帝國內的台灣士兵、醫生與生活在東南亞的海外台灣人之經歷。全片從兒子對父親的提問開場，透過跨世代的對話、家書、日記和家庭成員之間的影片，探討台灣歷史記憶的複雜性，以及這一時期存在的各種身分。
        </p>
        <button
          class="font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"
        >
          View more
        </button>
      </div>
      <div class="flex flex-col">
        <div class="w-[568px] h-[362px] bg-slate-100 mt-24"></div>
        <img src="/images/forth_logo.png" alt="forth_logo" class="mt-20" />
      </div>
    </div>
  </div>
  <div class="h-screen flex forth-bg justify-center items-center lesson -mt-[200px]">
    <div class="max-w-[1600px] flex my-[224px] lessonContent">
      <div class="flex opacity-15 mr-[112px]">
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
      <div class="flex flex-col gap-y-14">
        <p class="font-wix text-white tracking-[4px] text-[26px]">LESSON</p>
        <p class="font-shippori text-white text-[50px] tracking-[8px]">主題教案</p>
        <p class="font-noto text-white tracking-[2px] w-[412px] leading-[36px]">
          《由島至島》教育推廣規劃，從本片中節選出５個主題的片段，發展搭配教案，免費開放老師申請作為課程教授素材。五大主題為：移動與邊界、加害與被害、共犯結構－日本擴張行動、克服過去、為什麼要記憶，各有台灣、日本及馬來西亞教案可下載。
        </p>
        <button
          class="font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"
        >
          View more
        </button>
      </div>
    </div>
  </div>
  <div class="w-full bg-white h-[200px] -mt-[100px] flex items-center px-[162px] justify-between">
    <div>
      <div class="z-10 text-[#aaa] text-xl font-noto tracking-[8px]">蜂鳥影像</div>
      <div class="z-10 text-[#aaa] text-[17px] font-wix mt-4">Facebook ｜ Youtube ｜ Vimeo</div>
    </div>
    <div class="flex flex-col items-end">
      <div class="z-10 text-[#aaa] text-sm font-noto tracking-[1px]">隱私權政策</div>
      <div class="z-10 text-[#aaa] text-[15px] font-wix mt-2">
        Copyright © HUMMINGBIRD Production
      </div>
    </div>
  </div>
</template>
