<template>
  <div>
    <HomePageHeaderLandingPage
      :title="'MacBook Air 15'"
      :paragraph="'Impressively big.Impossibly thin'"
      :imgSrc="'http://localhost:3000/macair.jpg'"
      :height="650"
    ></HomePageHeaderLandingPage>

    <HomePageHeaderLandingPage
      :title="'iPhone 14'"
      :paragraph="'Pro.Beyond.'"
      :imgSrc="'http://localhost:3000/iphone14.jpg'"
      :height="500"
      :titleColor="'#ffffff'"
    ></HomePageHeaderLandingPage>

    <HomePageHeaderLandingPage
      :title="'iPhone 14'"
      :paragraph="'Wonderfull'"
      :imgSrc="'http://localhost:3000/iphone142.jpg'"
      :height="500"
    ></HomePageHeaderLandingPage>
  </div>
</template>
