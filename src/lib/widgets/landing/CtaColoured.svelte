<script>
  export let content;
</script>

<div class="section">
  <div class="wrapper">
    <div class="w-layout-grid _12-col cta-full-panel">
      <div class="text-wrap cta-content">
        <slot/>
        <div class="button-container margin-top-80 above">
          <a href="/app" class="button w-button">Rozpocząć grę</a>
        </div>
      </div>
      <div class="img-wrap cta-gradient-container">
        <img src="/images/cta_coloured_gradient.png" loading="lazy" alt="" class="cta-gradient-first">
      </div>
    </div>
  </div>
</div>


<style>
.img-wrap {
  grid-area: 1/1/2/13;
}
.text-wrap{
  grid-area: 1/2/2/12;
}
@media screen and (max-width: 991px) {
  .img-wrap {
    grid-column-end: 7;
  }
    .text-wrap{
    grid-column: 1/7;
  }
}
@media screen and (max-width: 767px) {
  .img-wrap {
    grid-column-end: 5;
  }
    .text-wrap{
    grid-column-end: 5;
  }
}
</style>
