<template>
  <div
    class="flex align-center justify-center flex-col mt-[22px] w-full overflow-hidden"
    :style="[
      `color:  ${props.titleColor ? props.titleColor : ''}; height:${
        props.height
      }`,
    ]"
  >
    <div
      class="page-box w-full h-full overflow-hidden relative flex justify-center items-start text-center"
    >
      <header
        class="pt-[47px] flex flex-col items-center justify-start text-center w-full z-20"
      >
        <h2 class="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold">
          {{ props.title }}
        </h2>
        <p class="pt-3px text-xl font-medium">{{ props.paragraph }}</p>
        <div class="text-l font-medium text-[#06c] mt-[10px]">
          <nuxt-link class="hover:underline cursor-pointer" to=""
            >Learn more ></nuxt-link
          >
          <nuxt-link class="ml-[27px] hover:underline cursor-pointer" to=""
            >Buy ></nuxt-link
          >
        </div>
      </header>
    </div>
    <div
      v-if="!props.videoSrc || 1"
      class="image-wrapper w-full h-full overflow-hidden relative"
    >
      <figure
        class="image-figure z-10"
        :style="[
          `background-image: url(${getImageSrc}); background-size: ${imgWidth} ${props.height}; height:${props.height};
          width:${imgWidth};
          `,
        ]"
      ></figure>
    </div>
    <div v-else class="video-wrapper w-full h-full relative">
      <video :class="`video-figure z-10 h-[500px]`" loop autoplay muted>
        <source :src="props.videoSrc" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
<script setup>
import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();
// const title = "MacBook Air 15";
// const paragraph = "Impressively big.Impossibly thin";
// const imgSrc = "'http://localhost:3000/macair.jpg'";
// props in vue
const props = defineProps({
  title: String,
  paragraph: String,
  imgSrc: String,
  smallImgSrc: String,
  height: String,
  titleColor: String,
  width: String,
  videoSrc: String,
});

const { getScreens } = useUtils();

const screenWidth = getScreens();
const getImageSrc = ref("");
const imgWidth = ref(props.width);

watchEffect(() => {
  if (
    screenWidth.value == "xs" ||
    screenWidth.value == "sm" ||
    screenWidth.value == "md"
  ) {
    getImageSrc.value = props.smallImgSrc ? props.smallImgSrc : props.imgSrc;
    if (props.grid != "1")
      imgWidth.value =
        (Number(imgWidth.value.slice(0, -2)) * 0.7).toString() + "px";
  } else {
    getImageSrc.value = props.imgSrc;
    imgWidth.value = props.width;
  }
  console.log(imgWidth.value, getImageSrc.value);
});
</script>
<style scoped>
.page-box {
  /* background-image: url("http://localhost:3000/macair.jpg"); */
  background-repeat: no-repeat;
}
.vide-wrapper,
.image-wrapper {
  /* z-index: 1; */
  overflow: visible;
  flex-grow: 1;
}

.video-figure,
.image-figure {
  /* z-index: 1; */
  position: absolute;
  border: 0;
  margin: 0;
  padding: 0;
  left: calc(50% + 0px);
  right: auto;
  bottom: 0px;
  top: auto;
  -webkit-transform: translatex(-50%);
  transform: translatex(-50%);
}
</style>
