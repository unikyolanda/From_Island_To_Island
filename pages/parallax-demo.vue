<script setup>
  const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()

  onMounted(() => {
    // Initialize parallax effect for all parallax content
    const parallaxElements = document.querySelectorAll('.parallax-content')

    parallaxElements.forEach(element => {
      gsap.to(element, {
        y: '20%', // Control how far the image moves
        ease: 'none',
        scrollTrigger: {
          trigger: element.parentElement, // Use the container as trigger
          start: 'top bottom', // Start when container's top hits viewport's bottom
          end: 'bottom top', // End when container's bottom hits viewport's top
          scrub: 1, // Smooth scrubbing effect
        },
      })
    })
  })
</script>

<template>
  <div class="min-h-screen bg-black p-8">
    <!-- Spacer to demonstrate scroll -->
    <div class="h-[50vh]"></div>

    <!-- First parallax container -->
    <div class="parallax-container relative overflow-hidden w-[500px] h-[300px] mb-20">
      <img
        src="/images/stills/still_1.jpg"
        alt="Parallax 1"
        class="parallax-content absolute w-[120%] h-[120%] object-cover"
      />
    </div>

    <!-- Second parallax container -->
    <div class="parallax-container relative overflow-hidden w-[500px] h-[300px] mb-20">
      <img
        src="/images/stills/still_4.jpg"
        alt="Parallax 2"
        class="parallax-content absolute w-[120%] h-[120%] object-cover"
      />
    </div>

    <!-- Third parallax container -->
    <div class="parallax-container relative overflow-hidden w-[500px] h-[300px] mb-20">
      <img
        src="/images/stills/still_7.jpg"
        alt="Parallax 3"
        class="parallax-content absolute w-[120%] h-[120%] object-cover"
      />
    </div>

    <!-- Spacer to demonstrate scroll -->
    <div class="h-[50vh]"></div>
  </div>
</template>

<style scoped>
  .parallax-container {
    /* Add a subtle shadow for depth */
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  .parallax-content {
    /* Ensure image covers container */
    left: 50%;
    transform: translateX(-50%);
    object-position: center;
  }
</style>
