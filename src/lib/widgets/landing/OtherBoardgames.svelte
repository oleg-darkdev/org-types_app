<script>
  export let otherBoardgames;
</script>


<div class="section">
  <div class="wrapper">
    <div class="w-layout-grid _12-col">
      <div id="w-node-_712e2163-255e-9738-bf17-78cbbe410274-9531edc0" class="headline">
        <h2 class="header-absolute">Inne gry planszowe</h2>
        <div class="section-gradient">
          <img src="images/rounded_section_gradient.png" loading="lazy" alt="" class="saturate">
        </div>
      </div>
    </div>
    <div class="projects-outer-wrap">
      <div class="w-dyn-list">
        <div role="list" class="grid grid-cols-3 gap-4">
          {#each otherBoardgames as boardgame}
            <div role="listitem" class="w-dyn-item max-w-md">
              <div class="work-piece">
                <div class="thumbnail-container ">
                  <img src="/images/logo.svg" loading="lazy" alt="" class="thumbnail-image">
                </div>

                <div>
                  <div class="tag work-piece-tag">Lorem Ipsum is simply</div>
                  <div class="tag work-piece-tag separater">|</div>
                  <div class="tag work-piece-tag w-dyn-bind-empty"></div>
                  <h3 class="thumbnail-title">Lorem Ipsum is simply</h3>
                <div  class="headline-text">
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                  <div class="signallink">
                  <div class=" ">
                    <img src="/images/arrow.svg" alt="" class=" arrow">

                    <div class="signalfooter">
                      <p class="signaltitle">Czytaj więcej</p>
                    </div>
                  </div>
                </div>
                </div>
                <div class="get-yours w-condition-invisible">
                  <h3 class="thumbnail-title centered">Lorem Ipsum is simply</h3>
                  <div class="button-container get-yours">
                    <a href="/" class="button w-button">Lorem Ipsum</a>
                    <a href="/" class="secondary-link">Lorem Ipsum is simply</a>
                  </div>


                </div>
              <!-- <div class="signal"> -->

                </div>

              <!-- </div> -->
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.thumbnail-container {
  background-color: #4d21aa00;
  border-radius: 14px;
  flex: 1;
  justify-content: flex-start;
  width: 100%;
  max-height: 100px;
  /* margin-bottom: 25px; */
  margin-left: auto;
  margin-right: auto;
  display: flex;
  overflow: hidden;
}


@media screen and (max-width: 767px) {
  .thumbnail-container {
    border-radius: 8px;
  }
}

/* owl slider */
.carousel-wrap {
  width: 1000px;
  margin: auto;
  position: relative;
}

.owl-carousel .owl-nav {
  overflow: hidden;
  height: 0px;
}

.owl-stage {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.owl-stage-outer {
  width: 1440px;
}

.owl-dots {
  text-align: center;
  display: none;
}

.owl-dot {
  background: none;
  padding: 5px;
  margin: 3px 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.owl-dot.active {
  background: red;
}

.owl-nav {
  margin: 30px 0;
}

.owl-prev,
.owl-next {
  width: 61px;
}

.owl-prev {
  padding: 20px;
  margin: 0 5px;
  background: url(images/arrow_right.svg) center / contain no-repeat;
  opacity: 1;
}

.owl-next {
  padding: 20px;
  margin: 0 5px;
  background: url(/images/arrow_left.svg) center / contain no-repeat;
  opacity: 1;
}

.owl-next:hover,
.owl-prev:hover {
  opacity: .7;
}
</style>


