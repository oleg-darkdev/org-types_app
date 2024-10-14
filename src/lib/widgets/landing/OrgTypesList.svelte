<script>
 export let categories;
</script>

<div class="section">
  <div class="wrapper">
    <div class="w-layout-grid _12-col">
      <div  class="big-title headline">
        <h2 class="header-absolute">Struktura organizacji według poziomów <em class="special-word">dynamiki spiralnej</em> </h2>
        <div class="section-gradient">
          <img src="images/rounded_section_gradient.png" loading="lazy" alt="" class="saturate">
        </div>
      </div>
    <a name="spiral-dynamics"></a>

    </div>
    <div class="max-w-3xl mx-auto">
      {#each categories as {tailPosition, title, brandColor, shortDesc, id}}
          <div class="card-wrap">
              <div class="max-w-lg bubble-container">
              <div class="testimonial-block {brandColor}">
                <div class="tag {brandColor}">{title}</div>
                <blockquote>{shortDesc}</blockquote>
              </div>
              <img src="/images/{tailPosition == 'right' ? 'bubble_tail_right.svg' : 'bubble_tail_left.svg'} " loading="lazy" alt="" class="{tailPosition == 'right' ? 'tail-right' : 'tail-left'}">
            </div>
          </div>
      {/each}
    </div>
    <div class="line-section"></div>
  </div>
</div>


<style>
.card-wrap:nth-child(odd) {
display: flex;
justify-content: flex-start;
}
.card-wrap:nth-child(even) {
display: flex;
justify-content: flex-end;
}

.big-title {
  grid-area: 1/2/2/9;
}

@media screen and (max-width: 991px) {
  .big-title {
    grid-column: 1/7;
  }
}
@media screen and (max-width: 767px) {
  .big-title {
    grid-area: span 1 / span 4 / span 1 / span 4;
  }
}
</style>
