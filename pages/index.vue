<template>
  <div class="min-h-[150vh] relative">
    <div class="ripple-effect absolute flex flex-col items-center w-full h-auto">
      <div class="title w-full">
        <div class="absolute right-12 top-10 cursor-pointer">
          <img src="/images/menu.svg" alt="menu" class="w-10 h-8" />
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
      <div class="flex flex-col w-full items-center mt-[188px] still">
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">記憶像水一樣流動</p>
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">我們可以選擇如何記憶</p>
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">也是在重塑我們</p>
        <p class="font-shippori text-white text-[22px] tracking-[8px] mt-7">作為人的意義</p>
        <img
          src="/images/second_stills1.jpg"
          alt="stills1"
          class="stills1 opacity-50 mt-7 w-full origin-center"
        />
      </div>
    </div>
  </div>
  <div class="h-screen"></div>
</template>

<script setup>
  const { $gsap: gsap } = useNuxtApp()

  onMounted(() => {
    const images = document.querySelectorAll('.image-box img:not(:first-child)')
    const textElements = document.querySelectorAll('.still p')
    const stills1Image = document.querySelector('.stills1')
    const rippleEffect = document.querySelector('.ripple-effect')
    const lastImageIndex = images.length - 1

    gsap.timeline({
      scrollTrigger: {
        trigger: '.title',
        pin: true,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        // markers: true,
      },
    })

    images.forEach((img, index) => {
      gsap.set(img, {
        y: (index + 1) * window.innerHeight,
      })
    })
    // Create animations for images
    images.forEach((img, index) => {
      gsap.to(img, {
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.image-box',
          start: `top+=${index * 200} top`,
          end: `top+=${index * 200} end`,
          scrub: 1,
          // markers: true,
        },
      })
    })

    textElements.forEach(text => {
      gsap.set(text, {
        opacity: 0,
        y: 30,
      })
    })

    // Create timeline for text animations
    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.image-box',
        start: `top+=${lastImageIndex * 200 + 300} top`, // Start after last image animation
        end: '+=500',
        scrub: 1,
        // markers: true,
      },
    })

    // Add text animations to timeline
    textElements.forEach((text, index) => {
      textTimeline.to(
        text,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        index * 0.2
      ) // Stagger the text animations
    })

    gsap.set(stills1Image, {
      scale: 0.5,
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: stills1Image,
          start: 'top center+=200',
          end: 'bottom top-=200',
          scrub: 1,
          // markers: true,
        },
      })
      .to(stills1Image, {
        scale: 1,
        opacity: 1,
        ease: 'none',
      })
  })
</script>

<style>
  .ripple-effect {
    background-size: cover;
    background-image: url('/images/first_bg.jpg');
  }
</style>
