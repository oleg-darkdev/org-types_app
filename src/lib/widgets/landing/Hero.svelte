<script>

</script>

<section class="section hero">
  <div class="wrapper">
    <div class="_12-col above">
      <h1 class=''>Ułóż swój typ organizacji</h1>
      <p class="subtitle">Org puzzle - daje możliwość nie tylko poznania teorii spiralnej dynamiki i typów organizacji. Pomaga rozwijać umiejętności myślenia systemowego, zarządzania i pracy z różnymi modelami organizacyjnymi.</p>
      <div class="button-wrap button-container">
        <a href="/app" class="button w-button">Rozpocznij grę</a>
      </div>
    </div>
  </div>
  <div  class="hero-circle-left">
    <img src="/images/hero_circle_left.png" loading="lazy" alt="Big gradient circle."  class="saturate">
  </div>
  <div  class="her-circle-right">
    <img src="images/hero_circle_right.png" loading="lazy"  alt="Big gradient circle." class="saturate">
  </div>
</section>



<style>
h1 {
grid-area: span 1 / span 12 / span 1 / span 12;
}
.button-wrap{
grid-area: 3/8/4/-1;
}
.subtitle  {
grid-area: 2/8/3/-1;
}

@media screen and (max-width: 991px) {
  h1{
  grid-column: span 6 / span 6;
  }
  .subtitle  {
grid-area: span 1 / span 6 / span 1 / span 6;
}
.button-wrap{
grid-area: span 1 / span 6 / span 1 / span 6;
}
}
@media screen and (max-width: 767px) {
  h1, .subtitle, .button-wrap {
  grid-column: span 4 / span 4;
  }

}



</style>
