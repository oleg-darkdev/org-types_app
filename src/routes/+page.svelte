<script>
  import {Header, Hero, Footer, Faq,  Features, OtherBoardgames, OrgCategorySection, CtaLight, Hybridboardgame, Intro, Divider, OrgTypesList, CtaColoured, FullWidthBanner, } from '$lib/widgets'

  import {Citate, P, categories} from '$lib/shared';




const otherBoardgames = [
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
  ]

  const citate =
    {
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      subTitle: `Lorem Ipsum is simply dummy text `
    }
</script>

<svelte:head>
	<title>Org-puzzle</title>
</svelte:head>




  <!-- <div data-w-id="3330cdbf-890d-f45c-3ceb-f8f3247e647b" class="fullbodied"> -->



  <!-- <Intro />

  <Divider /> -->


  <!-- </div> -->


<Header />

<main>
  <Hero />

  <a name="about"></a>

  <Features />

  <!-- <Hybridboardgame /> -->



  <a name="spiral-dynamics"></a>

  <CtaLight />

  <OrgTypesList categories={categories.all}/>

  <CtaColoured />


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

<!-- + pink -->
  </div>

  <OtherBoardgames {otherBoardgames}/>

  <Faq />
</main>

<Footer />

<!-- <FullWidthBanner /> -->
    <!-- <div class="loading-screen">
      <div class="loading-block">
        <img src="images/logo.svg" loading="lazy" alt="Logo" class="logo-loading-screen">
        <div class="loading-line"></div>
      </div>
    </div> -->
