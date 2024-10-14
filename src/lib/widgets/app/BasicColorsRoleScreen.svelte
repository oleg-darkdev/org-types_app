<script>
  import {
    beigeProgress,
  // purpleProgress,
  // redProgress
  // getRandomBeigeQuote,
  userRole
  } from '$lib/shared';

  const {
  correctAnswersBeige,
  incorrectAnswersBeige,
  totalAnswersBeige,
  incrementCorrectBeige,
  incrementIncorrectBeige,
  resetBeige } = beigeProgress;

  incrementCorrectBeige();
  incrementIncorrectBeige();
  resetBeige();
</script>


{#if $userRole.id == 6}
    <h1>в этом раунде ты читаешь материал из книги, вот тебе в лицо цитата:</h1>

  {$userRole.message}
{:else}
  <section>
      <h2>Progress</h2>
      <h3>Beige Organization</h3>
      <p>Correct Answers: {$correctAnswersBeige}</p>
      <p>Incorrect Answers: {$incorrectAnswersBeige}</p>
      <p>Total Answers: {$totalAnswersBeige}</p>
  </section>
{/if}

<div class="flex flex-row">

	<div class="AchievementIconWrapper RareAchievement">
		<div class="AchievementIconGlowContainerRoot">
			<div class="AchievementIconGlowContainer">
				<div class="AchievementIconGlow"></div>
			</div>
		</div>
		<div class="fakeIcon"></div>
	</div>

  	<div class="AchievementIconWrapper EpicAchievement">
		<div class="AchievementIconGlowContainerRoot">
			<div class="AchievementIconGlowContainer">
				<div class="AchievementIconGlow"></div>
			</div>
		</div>
		<div class="fakeIcon"></div>
	</div>
</div>

<style>

</style>
