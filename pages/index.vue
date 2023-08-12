<script setup>
// import SsrCarousel from "../node_modules/vue-ssr-carousel/src/ss";
// import ssrCarouselCss from "vue-ssr-carousel/index.css?inline";
// Vue.component("ssr-carousel", SsrCarousel);

const slides = [
  {
    title: "Slide #1",
    content: "Slide 1 content.",
    color: "#41b883",
    bgSrc: "http://localhost:3000/s1.jpg",
  },
  {
    title: "Slide #2",
    content: "Slide 2 content.",
    color: "#35495e",
    bgSrc: "http://localhost:3000/s2.jpg",
  },
  {
    title: "Slide #2",
    content: "Slide 2 content.",
    color: "#35495e",
    bgSrc: "http://localhost:3000/s3.jpg",
  },
  {
    title: "Slide #2",
    content: "Slide 2 content.",
    color: "#35495e",
    bgSrc: "http://localhost:3000/s4.jpg",
  },
  {
    title: "Slide #2",
    content: "Slide 2 content.",
    color: "#35495e",
    bgSrc: "http://localhost:3000/s5.jpg",
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
      :width="'1500px'"
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
      :imgSrc="'http://localhost:3000/5.jpg'"
      :height="'624px'"
      :width="'3008px'"
      :videoSrc="'http://localhost:3000/large.mp4'"
    ></HomePageHeaderLandingPage>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-[12px] mb-4 mt-4">
      <HomePageHeaderLandingPage
        :grid="'1'"
        :title="'iPhone 14'"
        :paragraph="'Pro.Beyond.'"
        :imgSrc="'http://localhost:3000/iphone14.jpg'"
        :height="'580px'"
        :titleColor="'#ffffff'"
        :width="'1262px'"
      ></HomePageHeaderLandingPage>

      <HomePageHeaderLandingPage
        :grid="'1'"
        :title="'iPhone 14'"
        :paragraph="'Wonderfull'"
        :imgSrc="'http://localhost:3000/iphone142.jpg'"
        :height="'580px'"
        :width="'1262px'"
      ></HomePageHeaderLandingPage>
      <HomePageHeaderLandingPage
        :grid="'1'"
        :title="'Trade In'"
        :paragraph="`Upgrade and save.it's that easy`"
        :imgSrc="'http://localhost:3000/4.jpg'"
        :height="'580px'"
        :width="'1262px'"
      ></HomePageHeaderLandingPage>
      <HomePageHeaderLandingPage
        :grid="'1'"
        :title="'WATCH'"
        :paragraph="'A healthy leap ahead'"
        :imgSrc="'http://localhost:3000/6.jpg'"
        :height="'580px'"
        :width="'1262px'"
        :titleColor="'#ffffff'"
      ></HomePageHeaderLandingPage>
    </div>
    <div class="mt-[22px] mb-[22px]">
      <vueper-slides
        class="w-full h-full"
        :visible-slides="1"
        :slide-ratio="2 / 4"
        :arrows-outside="false"
      >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :title="''"
          :content="''"
          :style="`background-image: url(${slide.bgSrc}); background-size: 100% 100%; background-position: center;`"
        >
        </vueper-slide>
      </vueper-slides>
    </div>
    <div>
      <LayoutsFooter></LayoutsFooter>
    </div>
  </div>
</template>
