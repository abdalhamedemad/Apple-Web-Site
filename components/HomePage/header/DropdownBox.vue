<template>
  <div
    class="box flex justify-start items-start w-full h-full mb-[84px] mt-[40px]"
  >
    <nav class="pr-[88px]">
      <h6>Shop</h6>
      <ul
        class="box-shop flex flex-col text-primaryblack-100 text-[24px] font-semibold"
      >
        <li><nuxt-link to="">Shop the Latest</nuxt-link></li>
        <li><nuxt-link to="">Mac</nuxt-link></li>
        <li><nuxt-link to="">iPad</nuxt-link></li>
        <li><nuxt-link to="">iPhone</nuxt-link></li>
        <li><nuxt-link to="">Apple Watch</nuxt-link></li>
        <li><nuxt-link to="">Accessories</nuxt-link></li>
      </ul>
    </nav>

    <nav class="box-links pr-[44px]">
      <h6>Quick Links</h6>
      <ul>
        <li><nuxt-link to="">Find a Store </nuxt-link></li>
        <li><nuxt-link to="">Order Status </nuxt-link></li>
        <li><nuxt-link to="">Apple Trade In </nuxt-link></li>
        <li><nuxt-link to="">Financing </nuxt-link></li>
        <li><nuxt-link to="">College Student Offer </nuxt-link></li>
      </ul>
    </nav>
    <nav class="box-stores pr-[44px]">
      <h6>Shop Special Stores</h6>
      <ul>
        <li><nuxt-link>Certified Refurbished </nuxt-link></li>
        <li><nuxt-link>Education </nuxt-link></li>
        <li><nuxt-link>Business </nuxt-link></li>
        <li><nuxt-link>Veterans and Military </nuxt-link></li>
        <li><nuxt-link>Government </nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
.box-shop li {
  padding-top: 9px;
  padding-bottom: 7px;
}
h6 {
  color: rgb(110, 110, 115);
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.022em;
}
.box-links li,
.box-stores li {
  padding-top: 7px;
  padding-bottom: 7px;
  color: #333336;
}
nav ul li a {
  cursor: pointer;
}
nav h6 {
  /* cursor not change */
  cursor: default;
}
/* .ll:hover .drop-down {
  height: calc(100vh - 44px);
  transition: all 1s ease-in-out;
} */
</style>
