<script>
  import {VioletOrgCard} from '$lib/entities';
  export let category;
</script>

<section class="{category.sectionBgColor} rounded-2xl">

  <!-- formingkin -->
  <!-- <div class="pagescrolltag"></div> -->
  <div class="dustlinks" on:click={()=> category.showFull = !category.showFull}>
    <button class="dustlink w-inline-block" alt="">
      <div class="dustcover {category.brandBgColor}"></div>
      <div class="dusttop">
        <div class="{category.brandFont}">{category.title}</div>
      </div>
      <div class="dustbottom">
        <div class="dusttype">{category.subTitle}</div>
      </div>
      <div class="dustshadow"></div>
    </button>
  </div>

<!-- <div class="dustlinks">
    <a href="#" alt="Living Tools" class="dustlink w-inline-block">
      <div class="dustcover purple"></div>
      <div class="dusttop">
        <div class="dustpurple">LIVING</div>
      </div>
      <div class="dustbottom">
        <div class="dusttype">TOOLS</div>
      </div>
      <div class="dustshadow"></div>
    </a>
  </div> -->
  {#if category.showFull}
  <article class="expanddust">
    <div class="padding">
      <slot name='description'></slot>
    </div>


    <div class="dustsignals">
      <div class="signalsheader">
        <div class="padding w-clearfix">
          <div class="allcaps">Lista organizacji</div>
        </div>
      </div>
      <div class="w-dyn-list">
        <div role="list" class="collection-list w-dyn-items">
          {#each category.orgs as org}
            <VioletOrgCard {org}/>
          {/each}

          <slot name="lastItem"></slot>

        </div>
      </div>
    </div>
  </article>
  {/if}

  <div class="spacer">
    <div class="spacer-number">{category.id}</div>
  </div>
</section>


<style>
.dust-pink-section {
  background-image: url("/images/asfalt-dark.png"),
    -webkit-gradient(linear, left top, left bottom, from(#f886ff), to(#71c6ff));
  background-image: url("/images/asfalt-dark.png"),
    linear-gradient(180deg, #f886ff, #71c6ff);
  background-position: 0px 0px, 0px 0px;
  background-size: 200px, auto;
  background-attachment: fixed, scroll;
}

.dustpink {
  font-family: "Glyphworld animalsoul", sans-serif;
  font-size: 105px;
}

@media screen and (max-width: 991px) {
  .dust-pink-section .collection-item.w-dyn-item.blankone {
    display: none;
  }

  .dust-pink-section .collection-item.w-dyn-item.blanktwo {
    display: none;
  }

  .dust-blue-section .collection-item.w-dyn-item.blanktwo {
    display: none;
  }

  .dust-blue-section .collection-item.w-dyn-item.blankthree {
    display: none;
  }

  .dust-blue-section .collection-item.w-dyn-item.blankfour {
    display: none;
  }

  .dust-green-section .collection-item.w-dyn-item.blankone {
    display: none;
  }

  .dust-green-section .collection-item.w-dyn-item.blanktwo {
    display: none;
  }

  .dust-yellow-section .collection-item.w-dyn-item.blanktwo {
    display: none;
  }

  .dust-yellow-section .collection-item.w-dyn-item.blankthree {
    display: none;
  }

  .dust-purple-section .collection-item.w-dyn-item.blankthree {
    display: none;
  }

  .dust-purple-section .collection-item.w-dyn-item.blankfour {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .dust-pink-section .collection-item.w-dyn-item.blankone {
    display: block;
  }

  .dust-green-section .collection-item.w-dyn-item.blankone {
    display: block;
  }

  .dust-yellow-section .collection-item.w-dyn-item.blanktwo {
    display: block;
  }

  .dust-purple-section .collection-item.w-dyn-item.blankone {
    display: none;
  }

  .dust-purple-section .collection-item.w-dyn-item.blanktwo {
    display: none;
  }
  .dustpink {
    font-size: 45px;
    line-height: 45px;
  }
}

@media screen and (max-width: 479px) {
  .dust-pink-section .collection-item.w-dyn-item.blankone,
  .dust-green-section .collection-item.w-dyn-item.blankone,
  .dust-yellow-section .collection-item.w-dyn-item.blanktwo {
    display: none;
  }

  .dust-blue-section .collection-item.w-dyn-item.blankone {
    display: block;
  }
}
</style>
