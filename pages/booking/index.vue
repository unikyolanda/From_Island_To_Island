<script setup>
  const formData = reactive({
    location: '',
    time: '',
    people: '',
    name: '',
    email: '',
    phone: '',
  })

  const isSubmitting = ref(false)
  const submitStatus = ref('')

  async function submitForm() {
    if (
      !formData.location ||
      !formData.time ||
      !formData.people ||
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {
      alert('請填寫所有必填欄位')
      return
    }

    isSubmitting.value = true
    submitStatus.value = ''

    try {
      // 使用預填URL的方式打開Google表單
      const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdUBqW9ebF2o4clwwIuTFQI1No-lWtzTbGXDbLobmAHiTOgjA/viewform?usp=pp_url&entry.111359557=${encodeURIComponent(formData.location)}&entry.645334492=${encodeURIComponent(formData.time)}&entry.1078785357=${encodeURIComponent(formData.people)}&entry.1481564022=${encodeURIComponent(formData.name)}&entry.1199051465=${encodeURIComponent(formData.email)}&entry.44633490=${encodeURIComponent(formData.phone)}`

      // 在新窗口中打開預填好的表單
      window.open(formUrl, '_blank')

      submitStatus.value = 'success'
      // 清空表單
      formData.location = ''
      formData.time = ''
      formData.people = ''
      formData.name = ''
      formData.email = ''
      formData.phone = ''
    } catch (error) {
      console.error('提交表單時發生錯誤:', error)
      submitStatus.value = 'error'
    } finally {
      isSubmitting.value = false
    }
  }
</script>
<template>
  <div class="flex flex-col bg-[#f6f6f6] w-screen h-auto min-h-screen items-center">
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
    <div class="flex flex-col w-full z-10 items-center opacity-90">
      <div class="flex w-full px-[184px] pt-[233px] justify-between items-end mt-10">
        <div class="flex flex-col">
          <p class="font-amiri italic text-[#999] tracking-[6px] text-lg sm:text-[28px]">
            Private Screening Booking
          </p>
          <p class="font-shippori text-[#999] text-[36px] sm:text-[44px] tracking-[8px]">
            包場申請
          </p>
        </div>
      </div>
      <img src="/images/booking.png" alt="booking" class="w-[676px] h-[389px] mt-12" />
      <p class="text-[#999] text-[14.5px] tracking-[0.5px] leading-[30px] mt-20 w-[676px]">
        首先感謝您對《由島至島》的支持，因本片規格特殊，將不會進行院線上映。<br />
        若您有興趣包場觀賞電影，再請撥冗填寫本表單，將會有專人與您聯繫。<br />
        更多關於電影《由島至島》的訊息，請密切關注臉書公告。<br /><br />
        《由島至島》From Island to Island<br />
        ★ 第61屆金馬獎最佳紀錄片、最佳音效<br />
        ★ 第26屆台北電影獎 百萬首獎得主<br /><br />
        電影片長：4時50分17秒<br />
        電影分級：保護級（未滿六歲不得觀賞）<br />
        電影字幕：中英文字幕
      </p>
      <form
        @submit.prevent="submitForm"
        class="flex flex-col mt-10 mb-20 gap-y-10 w-full max-w-[676px]"
      >
        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q1: 預計包場的縣市？
          </p>
          <input v-model="formData.location" class="px-3 py-2" type="text" required />
        </div>

        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q2: 預計包場的日期 / 時段？<br />
          </p>
          <input
            v-model="formData.time"
            class="px-3 py-2"
            type="text"
            placeholder="請預抓一小時的開演區間，如 3/1（六）18:00-19:00 區間開演"
            required
          />
        </div>

        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q3: 預計包場人數？
          </p>
          <div
            class="grid grid-cols-4 gap-x-12 gap-y-6 w-full text-[#999] text-[14.5px] tracking-[0.5px] leading-[30px]"
          >
            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.people"
                type="radio"
                name="demo_radio"
                value="50人以下"
                class="w-5 h-5"
                required
              />
              <label for="male">50人以下</label>
            </div>

            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.people"
                type="radio"
                name="demo_radio"
                class="w-5 h-5"
                value="51-100人"
              />
              <label for="female">51-100人</label>
            </div>

            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.people"
                type="radio"
                name="demo_radio"
                class="w-5 h-5"
                value="101-150人"
              />
              <label for="legal">101-150人</label>
            </div>

            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.people"
                type="radio"
                name="demo_radio"
                class="w-5 h-5"
                value="151-200人"
              />
              <label for="legal">151-200人</label>
            </div>

            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.people"
                type="radio"
                name="demo_radio"
                class="w-5 h-5"
                value="201-250人"
              />
              <label for="legal">201-250人</label>
            </div>

            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.people"
                type="radio"
                name="demo_radio"
                class="w-5 h-5"
                value="251-300人"
              />
              <label for="legal">251-300人</label>
            </div>

            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.people"
                type="radio"
                name="demo_radio"
                class="w-5 h-5"
                value="301人以上"
              />
              <label for="legal">301人以上</label>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q4: 您的姓名
          </p>
          <input v-model="formData.name" class="px-3 py-2" type="text" required />
        </div>

        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q5: 您的E-mail
          </p>
          <input v-model="formData.email" class="px-3 py-2" type="email" required />
        </div>

        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q6: 您的聯絡電話
          </p>
          <input v-model="formData.phone" class="px-3 py-2" type="text" required />
        </div>
        <p class="text-[#999] text-[14.5px] tracking-[0.5px] leading-[30px] mt-8 w-[676px]">
          因本片規格特殊，將不會進行院線上映。包場詳細規則如下：<br /><br />

          1. 電影片長：290分鐘，保護級，未滿6歲禁止入場<br />
          2. 收到包場需求後，我們將會盡快遵照您的需求，為您提供戲院選項3.
          費用的部分，因本片片長較長，將會依照您的需求由我們向戲院詢問，會一併進行回覆<br />
          4. 影人可以參與與否我們會提前註記盡量安排，惟因行程無法完全配合，若影人無法到場敬請見諒
        </p>
        <p class="text-[#999] text-[14.5px] tracking-[0.5px] leading-[30px] w-[676px] mb-10">
          若您尚有其他問題，歡迎聯繫：<br />
          distribution.mars@gmail.com<br />
          0987-068-689 林先生
        </p>
        <button type="submit" :disabled="isSubmitting" class="submit-button">
          {{ isSubmitting ? '提交中...' : '提交' }}
        </button>

        <div v-if="submitStatus" class="status-message" :class="submitStatus">
          {{ submitStatus === 'success' ? '提交成功！' : '提交失敗，請稍後再試' }}
        </div>
      </form>
    </div>
  </div>
  <div class="w-full h-[146px] bg-white flex px-20 items-center justify-center z-10">
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
</template>

<style scoped>
  .submit-button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .submit-button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  .status-message {
    margin-top: 20px;
    padding: 10px;
    border-radius: 4px;
  }

  .status-message.success {
    background-color: #dff0d8;
    color: #3c763d;
  }

  .status-message.error {
    background-color: #f2dede;
    color: #a94442;
  }
</style>
