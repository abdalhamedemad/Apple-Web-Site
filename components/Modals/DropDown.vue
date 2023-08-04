<script setup>
const emit = defineEmits(["hideDropdown"]);
function hideDropdown() {
  emit("hideDropdown");
}
</script>

<template>
  <div class="drop-down w-screen fixed top-[44px] left-0">
    <div class="flex flex-col h-full w-full">
      <div class="w-full bg-primarywhite-200">
        <div
          @mouseleave="hideDropdown"
          class="list-item-box flex bg-primarywhite-200 container px-[22px]"
        >
          <slot />
        </div>
      </div>
      <div class="list-item-box-blur flex-grow blur-sm"></div>
    </div>
  </div>
</template>
<style scoped>
.drop-down {
  height: calc(100vh - 44px);
  transition: all 1s ease-in-out;
  /* background-color: rgba(0, 0, 0, 0.5); */
  display: block;
  height: 0;
  overflow: hidden;
  /* display: none; */
}
button {
  position: fixed;
  top: 0;
}
button:hover + .drop-down {
  height: calc(100vh - 44px);
  transition: all 1s ease-in-out;
}
.list-item-box-blur {
  background: rgba(232, 232, 237, 0.4);
  backdrop-filter: blur(14px);
  position: relative;
  top: -2px;
}
</style>
