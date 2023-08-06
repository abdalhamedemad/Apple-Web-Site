import { useWindowSize } from "@vueuse/core";
import { ref, toRefs } from "vue";
export const useUtils = () => {
  const getScreens = () => {
    //  sm: "600px",
    // md: "728px",
    // lg: "980px",
    // xl: "980px",
    // "2xl": "980px",
    const width = useWindowSize().width;
    // width.value = useWindowSize().width;
    // const refwidth = toRefs(width);
    const screen = ref("lg");
    watchEffect(() => {
      if (width.value < 600) screen.value = "sm";
      else if (width.value < 728) screen.value = "md";
      else if (width.value < 980) screen.value = "lg";
      else if (width.value < 1280) screen.value = "xl";
      else screen.value = "2xl";
      // console.log("width.value", width.value, screen.value);
      return screen;
    });
    return screen;
  };

  return { getScreens };
};
