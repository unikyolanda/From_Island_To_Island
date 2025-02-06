<script setup>
  const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
  const menuRef = ref(null)
  const currentIndex = ref(0)
  const lastScrollY = ref(0)
  const scrollThreshold = 100 // Minimum scroll amount to trigger image change
  const windowWidth = ref(window.innerWidth)

  // Calculate dynamic height based on window width
  const containerHeight = computed(() => {
    // Base height for mobile
    let height = 2000

    // Adjust height based on window width
    if (windowWidth.value >= 2200) {
      height = 2300
    } else if (windowWidth.value >= 1920) {
      height = 2200
    } else if (windowWidth.value >= 1440) {
      height = 1864
    } else if (windowWidth.value >= 1024) {
      height = 1750
    } else if (windowWidth.value >= 768) {
      height = 1600
    }

    return height
  })

  watch(containerHeight, newHeight => {
    console.log('containerHeight changed:', newHeight)
  })

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
    const imageBox = document.querySelector('.image-box')
    const allImages = Array.from(document.querySelectorAll('.image-box img'))
    const textElements = document.querySelectorAll('.still p')
    const stills1Image = document.querySelector('.stills1')
    const stills2Image = document.querySelector('.stills2')

    // Set up ScrollTrigger for ripple effect
    ScrollTrigger.create({
      trigger: '.ripple-effect',
      pin: true,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    })

    // Initialize images - photo5 visible, others hidden
    allImages.forEach((img, index) => {
      if (index === 0) {
        // photo5
        gsap.set(img, {
          y: 0,
          opacity: 0.4,
          zIndex: 1,
        })
      } else {
        gsap.set(img, {
          y: 100,
          opacity: 0,
          zIndex: index + 1,
        })
      }
    })

    // Handle scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDiff = currentScrollY - lastScrollY.value

      // Only trigger if scroll amount exceeds threshold
      if (Math.abs(scrollDiff) > scrollThreshold) {
        if (scrollDiff > 0 && currentIndex.value < allImages.length - 1) {
          // Scrolling down - show next image
          const nextIndex = currentIndex.value + 1
          gsap.to(allImages[nextIndex], {
            y: 0,
            opacity: 0.4,
            duration: 0.5,
            ease: 'power2.out',
          })
          currentIndex.value = nextIndex
        } else if (scrollDiff < 0 && currentIndex.value > 0) {
          // Scrolling up - hide current image
          gsap.to(allImages[currentIndex.value], {
            y: 150,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
          })
          currentIndex.value--
        }
        lastScrollY.value = currentScrollY
      }
    }

    // Throttle scroll handler
    let ticking = false
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    })

    // Text animations
    textElements.forEach(text => {
      gsap.set(text, {
        opacity: 0,
        y: 30,
      })
    })

    ScrollTrigger.create({
      trigger: '.still',
      start: 'top 25%',
      end: 'bottom center',
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
              duration: 1.25,
              delay: delay,
              ease: 'power2.out',
            })
          } else {
            // Scrolling up
            gsap.to(text, {
              opacity: progress,
              y: (1 - progress) * 30,
              duration: 1.25,
              delay: delay,
              ease: 'power2.out',
            })
          }
        })
      },
    })

    // Initialize stills1 and stills2
    gsap.set(stills1Image, {
      scale: 0.5,
      opacity: 0.5,
    })
    gsap.set(stills2Image, {
      opacity: 0,
    })

    // Create ScrollTrigger for both images
    ScrollTrigger.create({
      trigger: stills1Image,
      start: 'top 75%',
      end: 'bottom 50%',
      scrub: true,
      onUpdate: self => {
        const progress = self.progress
        // Animate stills1
        gsap.to(stills1Image, {
          scale: 0.4 + progress * 0.3,
          opacity: 0.5 + progress * 0.1,
          duration: 0.2,
          ease: 'power1.out',
        })
        // Animate stills2
        // Only start showing stills2 after progress reaches 0.5
        // Then scale opacity from 0 to 1 in the remaining progress
        gsap.to(stills2Image, {
          opacity: progress < 0.5 ? 0 : (progress - 0.5) * 2,
          duration: 0.2,
          ease: 'power1.out',
        })
      },
    })

    // Cleanup
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateWindowWidth)
      stills1Observer.disconnect()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    })
  })
</script>

<style>
  .ripple-effect {
    background-size: cover;
    object-fit: cover;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url('/images/first_bg.jpg');
  }
  .third-bg {
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url('/images/third_bg.jpg');
  }
  .forth-bg {
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url('/images/fourth_bg.jpg');
  }
</style>

<template>
  <div class="relative overflow-x-hidden" :style="{ height: containerHeight + 'px' }">
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div
      class="ripple-effect absolute flex flex-col items-center min-w-full h-full overflow-x-hidden"
    >
      <div class="title w-full h-auto relative">
        <div class="absolute right-12 top-10 cursor-pointer z-10">
          <img src="/images/menu.svg" alt="menu" class="w-10 h-8" @click="toggleMenu" />
        </div>
        <div class="flex flex-col w-full">
          <div class="flex px-[162px] justify-center relative w-full">
            <div class="flex flex-col absolute top-[447px] left-[162px]">
              <p class="font-shippori text-white text-[50px] font-light tracking-[12px]">
                由島至島
              </p>
              <p class="font-shippori text-white text-[50px] font-light tracking-[12px]">
                記憶與對話
              </p>
              <p class="font-amiri italic text-[25px] text-white tracking-[3px] mt-7">
                From Island
              </p>
              <p class="font-amiri italic text-[25px] text-white tracking-[3px]">to Island</p>
              <p class="font-amiri italic text-[25px] text-white tracking-[3px]">
                Memory and Dialogue
              </p>
            </div>
            <div class="image-box mt-[111px] relative">
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
            <div class="absolute top-[146px] right-[162px] flex flex-col">
              <img src="/images/title.png" alt="title" class="w-[276px] h-[160px]" />
              <div class="rotate-90 mt-24 -translate-x-2">
                <p class="font-shippori text-white text-xl tracking-[8px]">移動與邊界</p>
                <p class="font-shippori text-white text-xl tracking-[8px] mt-7">加害與被害</p>
                <p class="font-shippori text-white text-xl tracking-[8px] mt-7">共犯結構</p>
                <p class="font-shippori text-white text-xl tracking-[8px] mt-7">克服過去</p>
                <p class="font-shippori text-white text-xl tracking-[8px] mt-7">為什麼要記憶</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full h-auto items-center still relative -mt-10">
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">記憶像水一樣流動</p>
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">我們可以選擇如何記憶</p>
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">也是在重塑我們</p>
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">作為人的意義</p>
        <img
          src="/images/second_stills1.jpg"
          alt="stills1"
          class="stills1 opacity-50 w-full origin-center"
        />
        <img
          src="/images/second_stills2.jpg"
          alt="stills2"
          class="stills2 w-full origin-center absolute top-[248px] opacity-0"
        />
      </div>
    </div>
  </div>
  <div class="h-auto flex third-bg justify-center">
    <div class="max-w-[1000px] flex gap-x-[142px] my-[236px]">
      <div class="flex flex-col gap-y-14">
        <p class="font-wix text-white tracking-[4px]">FILM</p>
        <p class="font-shippori text-white text-[50px] tracking-[8px]">由島至島</p>
        <p class="font-noto text-white tracking-[2px] w-[412px] leading-[2]">
          台灣在二戰期間是日本帝國的一部分。本片以此為主題，努力挖掘和重新整理台灣在二戰期間的隱藏記憶，探索在日本帝國內的台灣士兵、醫生與生活在東南亞的海外台灣人之經歷。全片從兒子對父親的提問開場，透過跨世代的對話、家書、日記和家庭成員之間的影片，探討台灣歷史記憶的複雜性，以及這一時期存在的各種身分。
        </p>
        <button
          class="font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa]"
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
  <div class="h-auto flex forth-bg justify-center">
    <div class="max-w-[1600px] flex my-[224px]">
      <div class="rotate-90 opacity-15 mr-[112px]">
        <p class="font-shippori text-white text-[59px] tracking-[36px]">移動與邊界</p>
        <p class="font-shippori text-white text-[59px] tracking-[36px] mt-7 ml-12">加害與被害</p>
        <p class="font-shippori text-white text-[59px] tracking-[36px] mt-7">共犯結構</p>
        <p class="font-shippori text-white text-[59px] tracking-[36px] mt-7 ml-12">克服過去</p>
        <p class="font-shippori text-white text-[59px] tracking-[36px] mt-7">為什麼要記憶</p>
      </div>
      <div class="flex flex-col gap-y-14">
        <p class="font-wix text-white tracking-[4px]">LESSON</p>
        <p class="font-shippori text-white text-[50px] tracking-[8px]">主題教案</p>
        <p class="font-noto text-white tracking-[2px] w-[412px] leading-[2]">
          《由島至島》教育推廣規劃，從本片中節選出５個主題的片段，發展搭配教案，免費開放老師申請作為課程教授素材。五大主題為：移動與邊界、加害與被害、共犯結構－日本擴張行動、克服過去、為什麼要記憶，各有台灣、日本及馬來西亞教案可下載。
        </p>
        <button
          class="font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa]"
        >
          View more
        </button>
      </div>
    </div>
  </div>
</template>
