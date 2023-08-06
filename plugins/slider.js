import { VueperSlides, VueperSlide } from "vueperslides";
// import "vueperslides/dist/vueperslides.css";

// import SsrCarousel from "vue-ssr-carousel";
// import ssrCarouselCss from "vue-ssr-carousel/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("vueper-slides", VueperSlides, {});
  nuxtApp.vueApp.component("vueper-slide", VueperSlide, {});
  // nuxtApp.vueApp.component("ssr-carousel", SsrCarousel, {});
});
