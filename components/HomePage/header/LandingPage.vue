<template>
  <div
    class="flex w-full align-center justify-center mt-[44px]"
    :style="[`color:  ${props.titleColor ? props.titleColor : ''}`]"
  >
    <div
      class="page-box w-full flex justify-center items-start text-center"
      :style="[
        `background-image: url(${props.imgSrc}); background-size: 100% ${props.height}px; height:${props.height}px`,
      ]"
    >
      <header
        class="pt-[47px] flex flex-col items-center justify-start text-center w-full"
      >
        <h2 class="text-6xl font-semibold">{{ props.title }}</h2>
        <p class="pt-3px text-3xl font-medium">{{ props.paragraph }}</p>
        <div class="text-2xl font-medium text-[#06c] mt-[10px]">
          <nuxt-link class="hover:underline cursor-pointer" to=""
            >Learn more ></nuxt-link
          >
          <nuxt-link class="ml-[27px] hover:underline cursor-pointer" to=""
            >Buy ></nuxt-link
          >
        </div>
      </header>
    </div>
    <div class="image-wrapper">
      <figure
        class="image-figure w-[300px]"
        :style="[
          `background-image: url(${props.imgSrc}); background-size: 100% ${props.height}px; height:${props.height}`,
        ]"
      ></figure>
    </div>
  </div>
</template>
<script setup>
// const title = "MacBook Air 15";
// const paragraph = "Impressively big.Impossibly thin";
// const imgSrc = "'http://localhost:3000/macair.jpg'";
// props in vue
const props = defineProps({
  title: String,
  paragraph: String,
  imgSrc: String,
  height: Number,
  titleColor: String,
});
</script>
<style scoped>
.page-box {
  /* background-image: url("http://localhost:3000/macair.jpg"); */
  background-repeat: no-repeat;
}
.image-wrapper {
  z-index: 1;
  overflow: visible;
  flex-grow: 1;
}
.image-figure {
  z-index: 1;
  position: absolute;
  left: 50%;
  right: auto;
  bottom: 0;
  top: auto;
  transform: translateX(-50%);
}
</style>
