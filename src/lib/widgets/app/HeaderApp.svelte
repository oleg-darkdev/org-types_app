
<script>
    import { lives, progress, correctAnswers, incorrectAnswers } from '$lib/shared';
</script>



<!-- <div class="date">
      <div class="padding">
        <div class="datecentre">
          <div class="centre w-clearfix">
            <div id="date1" class="javadate">Sat Jun 8</div>
            <div id="time1" class="javatime">19:19</div>
            <div class="dateyear">2038</div>
          </div>
        </div>
      </div>
    </div> -->
 <!-- </a><a href="index.html" aria-current="page" class="logo w-inline-block w--current" alt="Homepage Botton"><img src="images/logo-02.svg" alt="Memory Work Logo" class="lovosvg"></a></div> -->
<!---->
<header id="nav" class=" sticky-nav ">
<div class="flex flex-row justify-between max-w-md">
    <span>Progress: {$progress}%</span>
    <span>Correct: {$correctAnswers}</span>
    <span>Incorrect: {$incorrectAnswers}</span>
    <span>Lives: {$lives}</span>
</div>

</header>


<style>

</style>

