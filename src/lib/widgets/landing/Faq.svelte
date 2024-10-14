<script>
  import { faq } from '$lib/shared'
</script>

<div class="section">
  <div class="wrapper">
    <div class="w-layout-grid _12-col">
      <div  class="headline">
        <h2 class="header-absolute">FAQ</h2>
        <div  class="section-gradient">
          <img src="/images/rounded_section_gradient.png" loading="lazy" alt="" class="saturate">
        </div>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 lg:pl-40 md:pl-20">
        {#each faq as {q, a}}
          <div class="">
            <div >
              <p>
                <strong>{q}</strong>
              </p>
              {#each a as answer}
                <p>
                  {answer}
                </p>
              {/each}
          </div>
          </div>
        {/each}
      </div>
    <div class="line-section"></div>
  </div>
</div>


<style>

</style>
