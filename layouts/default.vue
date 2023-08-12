<script setup>
import { ref } from "vue";
const showDropDown = ref(false);
</script>

<template>
  <div>
    <header class="fixed top-0 w-full h-[44px] z-50">
      <nav class="container h-full flex justify-between items-center px-[22px]">
        <ul
          class="w-full flex justify-between items-center text-primaryblack-1"
        >
          <li class="flex justify-center items-center text-primaryblack-100">
            <nuxt-link class="relative -top-[3px] text-[20px]" to="/"
              ><font-awesome-icon
                class="flex justify-center items-center"
                :icon="['fab', 'apple']"
            /></nuxt-link>
          </li>
          <li class="hidden-md ll hidden justify-center items-center">
            <nuxt-link @mouseover="showDropDown = true" to="/app"
              >Store</nuxt-link
            >
          </li>
          <li class="hidden-md hidden justify-center items-center">
            <nuxt-link to="/app">Mac</nuxt-link>
          </li>
          <li class="hidden-md hidden justify-center items-center">
            <nuxt-link to="/app">ipad</nuxt-link>
          </li>
          <li class="hidden-md hidden justify-center items-center">
            <nuxt-link to="/app">iphone</nuxt-link>
          </li>
          <li class="hidden-md hidden justify-center items-center">
            <nuxt-link to="/app">Watch</nuxt-link>
          </li>
          <li class="hidden-md hidden justify-center items-center">
            <nuxt-link to="/app">Vision</nuxt-link>
          </li>
          <li class="hidden-md hidden justify-center items-center">
            <nuxt-link to="/app">Airpods</nuxt-link>
          </li>
          <li class="hidden-md hidden justify-center items-center">
            <nuxt-link to="/app">Tv & Home</nuxt-link>
          </li>
          <li class="hidden-md hidden justify-center items-center">
            <nuxt-link to="/app">Entertainment</nuxt-link>
          </li>
          <li class="hidden-md hidden justify-center items-center">
            <nuxt-link to="/app">Accessories</nuxt-link>
          </li>
          <li class="hidden-md hidden justify-center items-center">
            <nuxt-link to="/app">Support</nuxt-link>
          </li>
          <li class="flex sm:flex md:flex lg:hidden flex-grow"></li>
          <li class="flex justify-center items-center">
            <nuxt-link to="/app"
              ><font-awesome-icon :icon="['fas', 'magnifying-glass']"
            /></nuxt-link>
          </li>
          <li class="flex justify-center items-center">
            <nuxt-link to="/app"
              ><font-awesome-icon :icon="['fas', 'bag-shopping']"
            /></nuxt-link>
          </li>
          <li
            class="flex sm:flex md:flex lg:hidden justify-center items-center cursor-pointer"
          >
            <font-awesome-icon :icon="['fas', 'bars']" />
          </li>
        </ul>
      </nav>
    </header>
    <div class="mb-[44px]"></div>
    <div>
      <slot />
    </div>
    <ModalsDropDown
      @hideDropdown="showDropDown = false"
      :class="showDropDown ? 'drop-down-show' : ''"
    >
      <HomePageHeaderDropdownBox></HomePageHeaderDropdownBox>
    </ModalsDropDown>
  </div>
</template>
<style scoped>
header {
  background: rgba(251, 251, 253, 0.8);
}
li:not(:last-child) {
  padding-right: 16px;
}
li,
li:hover:not(:first-child) a svg {
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  font-weight: 500;
}
li:hover:not(:first-child),
li:hover a svg {
  @apply text-primaryblack-100;
  transition: all 0.3s ease-in-out;
}
.lll:hover .drop-down {
  height: calc(100vh - 44px);
  transition: all 1s ease-in-out;
}
.drop-down-show {
  height: calc(100vh - 44px);
  transition: all 1s ease-in-out;
}
.hidden-md {
  /* @apply x */
  @apply sm:hidden;
  @apply md:hidden;
  @apply lg:flex;
}
</style>
