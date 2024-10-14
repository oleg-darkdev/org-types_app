<script>
  import {footerLinks} from '$lib/shared';
</script>

<footer class="">
  <img src="/images/footer_gradient.svg" loading="lazy" alt="" class="footer-gradient saturate">
  <div class="wrapper">
    <div class="footer-content flex justify-between">
<div class="">
        <div class='flex flex-row flex-wrap'>
{#each footerLinks as {title, link}}
        <div class="footer-link-group mr-4">
          <!-- aria-current="page"  -->
          <a href="{link}"  class="footer-link w--current">{title}</a>
        </div>
{/each}
      </div>
        <div>
          <div><a class='footer-link' href="https://oleg-darkdev.vercel.app/" target="_blank">Development by  darkDev</a> </div>
          <!-- <div>© 2024-2025 44Games. All rights reserved.</div> -->
        </div>
</div>

      <div class="flex flex-wrow flex-wrap">
        <a href="https://44games.vercel.app/" target="_blank" class=" w-inline-block">
          <img src="/images/logos/44games.svg" loading="lazy" alt="44Games logo" class="h-10">
        </a>
        <a href="https://darkdev-foundation.vercel.app/" target="_blank" class=" w-inline-block">
          <img src="/images/logos/darkdev.svg" loading="lazy" alt="DarkDev Foundation" class="h-10">
        </a>
      </div>

    </div>
  </div>
</footer>


<style>
.footer-gradient {
/* z-index: -1; */
position: absolute;
inset: auto 0% 0%;
}
footer {
border-top: 1px none var(--brand-purple);
align-items: flex-start;
padding: 40px 0;
position: relative;
padding-top: 40px;
padding-bottom: 40px;
}

.footer-link {
color: var(--brand-purple);
text-decoration: none;
display: flex;
}
.footer-link:hover {
text-decoration: underline;
}
.footer-link.w--current {
color: var(--brand-purple);
}
.footer-link-group {
grid-column-gap: 14px;
grid-row-gap: 14px;
margin-bottom: 10px;
display: flex;
}
@media screen and (max-width: 767px) {
.footer-content {
flex-direction: column;
align-items: flex-start;
}
footer {
text-align: left;
}
}
</style>
