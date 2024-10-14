<script>
  export let feature;
</script>


<div class="w-full max-w-sm grid above">
  <div id="{feature.id}" class=" headline-text">
    <h3>{feature.title}</h3>
    <p>{feature.desc}</p>
  </div>
  <!-- {feature.numberContainerClass} -->
  <div class=" number-container">
    <img src="/images/{feature.numberImg}" loading="eager" alt="" class="number">
    <img src="images/{feature.circleImg}" loading="eager" alt="" class="number-background h-20 w-20 saturate">
  </div>
</div>


<style>
.number-background {
  z-index: -1;
  position: relative;
}
</style>
