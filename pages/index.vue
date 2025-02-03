<template>
  <div class="h-[150vh] relative overflow-x-hidden">
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="ripple-effect absolute flex flex-col items-center w-full h-[150vh]">
      <div class="title w-full">
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
      <div class="flex flex-col w-full items-center mt-[100px] still">
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">記憶像水一樣流動</p>
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">我們可以選擇如何記憶</p>
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">也是在重塑我們</p>
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">作為人的意義</p>
        <img
          src="/images/second_stills1.jpg"
          alt="stills1"
          class="stills1 opacity-50 mt-16 w-full origin-center"
        />
      </div>
    </div>
  </div>
  <div class="h-screen"></div>
</template>

<script setup>
  const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
  const menuRef = ref(null)
  const currentIndex = ref(0)
  const lastScrollY = ref(0)
  const scrollThreshold = 100 // Minimum scroll amount to trigger image change

  const toggleMenu = () => {
    menuRef.value.show()
  }

  const closeMenu = () => {
    menuRef.value.hide()
  }

  onMounted(() => {
    const imageBox = document.querySelector('.image-box')
    const allImages = Array.from(document.querySelectorAll('.image-box img'))
    const textElements = document.querySelectorAll('.still p')
    const stills1Image = document.querySelector('.stills1')

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
    const textObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
            })
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px',
      }
    )

    textElements.forEach(text => {
      gsap.set(text, {
        opacity: 0,
        y: 30,
      })
      textObserver.observe(text)
    })

    // Stills1 image animation
    gsap.set(stills1Image, {
      scale: 0.5,
    })

    const stills1Observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              scale: 1.1,
              opacity: 1,
              duration: 1,
              ease: 'none',
            })
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px',
      }
    )

    stills1Observer.observe(stills1Image)

    // Cleanup
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      textObserver.disconnect()
      stills1Observer.disconnect()
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
</style>
