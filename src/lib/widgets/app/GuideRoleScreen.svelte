<script>
    import { Footer, OrgCategorySection } from '$lib/widgets'
    import { } from '$lib/entities'

  import {
    Citate, P, categories,
} from '$lib/shared';

  const citate =
    {
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      subTitle: `Lorem Ipsum is simply dummy text `
    }
</script>


<main>
  <div class="max-w-6xl mx-auto rounded-2xl grid gap-6">
  <OrgCategorySection category={categories.beige}>
    <div  slot='description' class="">
      <div class="dustpadding grid-cols-2 grid">
          <P text={`orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}>
            <span class="dropcap">L</span>
          </P>

          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
      </div>

      <Citate {citate}/>
    </div>

    <div slot='lastItem' class="">
      <div role="listitem" class="collection-item w-dyn-item blankone">
        <div class="signal">
          <div class="blanksignal">
            <img src="images/livinginternet.gif" alt="Forming Kin Sticker" class="blanksignalbadge"></div>
        </div>
      </div>
    </div>
  </OrgCategorySection>

  <OrgCategorySection category={categories.purple}>
    <div  slot='description' class="">
      <div class="dustpadding grid-cols-2 grid">
          <P text={`orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}>
            <span class="dropcap">L</span>
          </P>

          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
      </div>

      <Citate {citate}/>
    </div>

    <div slot='lastItem' class="">
      <div role="listitem" class="collection-item w-dyn-item blankone">
        <div class="signal">
          <div class="blanksignal">
            <img src="images/livinginternet.gif" alt="Forming Kin Sticker" class="blanksignalbadge"></div>
        </div>
      </div>
    </div>
  </OrgCategorySection>


<OrgCategorySection category={categories.red}>
    <div  slot='description' class="">
      <div class="dustpadding grid-cols-2 grid">
          <P text={`orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}>
            <span class="dropcap">L</span>
          </P>

          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
      </div>

      <Citate {citate}/>
    </div>

    <div slot='lastItem' class="">
      <div role="listitem" class="collection-item w-dyn-item blankone">
        <div class="signal">
          <div class="blanksignal">
            <img src="images/livinginternet.gif" alt="Forming Kin Sticker" class="blanksignalbadge"></div>
        </div>
      </div>
    </div>
  </OrgCategorySection>

  <OrgCategorySection category={categories.blue}>
    <div  slot='description' class="">
      <div class="dustpadding grid-cols-2 grid">
          <P text={`orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}>
            <span class="dropcap">L</span>
          </P>

          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
      </div>

      <Citate {citate}/>
    </div>

    <div slot='lastItem' class="">
      <div role="listitem" class="collection-item w-dyn-item blankone">
        <div class="signal">
          <div class="blanksignal">
            <img src="images/livinginternet.gif" alt="Forming Kin Sticker" class="blanksignalbadge"></div>
        </div>
      </div>
    </div>
  </OrgCategorySection>

  <OrgCategorySection category={categories.orange}>
    <div  slot='description' class="">
      <div class="dustpadding grid-cols-2 grid">
          <P text={`orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}>
            <span class="dropcap">L</span>
          </P>

          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
      </div>

      <Citate {citate}/>
    </div>

    <div slot='lastItem' class="">
      <div role="listitem" class="collection-item w-dyn-item blankone">
        <div class="signal">
          <div class="blanksignal">
            <img src="images/livinginternet.gif" alt="Forming Kin Sticker" class="blanksignalbadge"></div>
        </div>
      </div>
    </div>
  </OrgCategorySection>

  <OrgCategorySection category={categories.green}>
    <div  slot='description' class="">
      <div class="dustpadding grid-cols-2 grid">
          <P text={`orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}>
            <span class="dropcap">L</span>
          </P>

          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
      </div>

      <Citate {citate}/>
    </div>

    <div slot='lastItem' class="">
      <div role="listitem" class="collection-item w-dyn-item blankone">
        <div class="signal">
          <div class="blanksignal">
            <img src="images/livinginternet.gif" alt="Forming Kin Sticker" class="blanksignalbadge"></div>
        </div>
      </div>
    </div>
  </OrgCategorySection>
  <OrgCategorySection category={categories.yellow}>
    <div  slot='description' class="">
      <div class="dustpadding grid-cols-2 grid">
          <P text={`orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}>
            <span class="dropcap">L</span>
          </P>

          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
      </div>

      <Citate {citate}/>
    </div>

    <div slot='lastItem' class="">
      <div role="listitem" class="collection-item w-dyn-item blankone">
        <div class="signal">
          <div class="blanksignal">
            <img src="images/livinginternet.gif" alt="Forming Kin Sticker" class="blanksignalbadge"></div>
        </div>
      </div>
    </div>
  </OrgCategorySection>

  <OrgCategorySection category={categories.turquoise}>
    <div  slot='description' class="">
      <div class="dustpadding grid-cols-2 grid">
          <P text={`orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}>
            <span class="dropcap">L</span>
          </P>

          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
          <P text={`It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}/>
      </div>

      <Citate {citate}/>
    </div>

    <div slot='lastItem' class="">
      <div role="listitem" class="collection-item w-dyn-item blankone">
        <div class="signal">
          <div class="blanksignal">
            <img src="images/livinginternet.gif" alt="Forming Kin Sticker" class="blanksignalbadge"></div>
        </div>
      </div>
    </div>
  </OrgCategorySection>
  </div>


</main>

<Footer />

<!-- <FullWidthBanner /> -->
    <!-- <div class="loading-screen">
      <div class="loading-block">
        <img src="images/66b7d02bd2e9bba4ac0a891c_fujee%20design%20logo.svg" loading="lazy" alt="Fujee Design Logo" class="logo-loading-screen">
        <div class="loading-line"></div>
      </div>
    </div> -->

<style>

</style>
