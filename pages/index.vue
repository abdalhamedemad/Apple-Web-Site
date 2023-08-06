<script setup>
// import SsrCarousel from "../node_modules/vue-ssr-carousel/src/ss";
// import ssrCarouselCss from "vue-ssr-carousel/index.css?inline";
// Vue.component("ssr-carousel", SsrCarousel);

const slides = [
  {
    title: "Slide #1",
    content: "Slide 1 content.",
  },
  {
    title: "Slide #2",
    content: "Slide 2 content.",
  },
];
</script>

<template>
  <div>
    <HomePageHeaderLandingPage
      :title="'MacBook Air 15'"
      :paragraph="'Impressively big.Impossibly thin'"
      :imgSrc="'http://localhost:3000/macair.jpg'"
      :height="'650px'"
      :width="'100%'"
      :smallImgSrc="'http://localhost:3000/7.jpg'"
    ></HomePageHeaderLandingPage>

    <HomePageHeaderLandingPage
      :title="'iPhone 14'"
      :paragraph="'Pro.Beyond.'"
      :imgSrc="'http://localhost:3000/iphone14.jpg'"
      :height="'624px'"
      :titleColor="'#ffffff'"
      :width="'3008px'"
      :smallImgSrc="'http://localhost:3000/8.jpg'"
    ></HomePageHeaderLandingPage>

    <HomePageHeaderLandingPage
      :title="'iPhone 14'"
      :paragraph="'Wonderfull'"
      :imgSrc="'http://localhost:3000/iphone142.jpg'"
      :height="'624px'"
      :width="'3008px'"
    ></HomePageHeaderLandingPage>
    <HomePageHeaderLandingPage
      :title="'iPhone 14'"
      :paragraph="'Wonderfull'"
      :imgSrc="'http://localhost:3000/iphone142.jpg'"
      :height="'624px'"
      :width="'3008px'"
      :videoSrc="'http://localhost:3000/large.mp4'"
    ></HomePageHeaderLandingPage>

    <div class="grid grid-cols-2 gap-[12px]">
      <HomePageHeaderLandingPage
        :title="'iPhone 14'"
        :paragraph="'Pro.Beyond.'"
        :imgSrc="'http://localhost:3000/iphone14.jpg'"
        :height="'624px'"
        :titleColor="'#ffffff'"
        :width="'3008px'"
      ></HomePageHeaderLandingPage>

      <HomePageHeaderLandingPage
        :title="'iPhone 14'"
        :paragraph="'Wonderfull'"
        :imgSrc="'http://localhost:3000/iphone142.jpg'"
        :height="'624px'"
        :width="'3008px'"
      ></HomePageHeaderLandingPage>
      <HomePageHeaderLandingPage
        :title="'Trade In'"
        :paragraph="`Upgrade and save.it's that easy`"
        :imgSrc="'http://localhost:3000/4.jpg'"
        :height="'624px'"
        :width="'3008px'"
      ></HomePageHeaderLandingPage>
      <HomePageHeaderLandingPage
        :title="'WATCH'"
        :paragraph="'A healthy leap ahead'"
        :imgSrc="'http://localhost:3000/6.jpg'"
        :height="'624px'"
        :width="'3008px'"
        :titleColor="'#ffffff'"
      ></HomePageHeaderLandingPage>
    </div>
    <div>
      <vueper-slides>
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :title="slide.title"
          :content="slide.content"
        >
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
</template>
