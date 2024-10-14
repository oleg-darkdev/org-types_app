<script>
    import { timer, isTimerRunning, userRole,  rollDice } from '$lib/shared';

</script>


<section>
<h2>Current Role: {$userRole.name}</h2>
<!-- <p>{message}</p> -->
    <div class="">
  <h2>Time: {$timer} seconds</h2>
    {#if $isTimerRunning}
        <p>Timer is running...</p>
    {/if}
  </div>

  <button on:click={rollDice}>Roll Dice for New Role</button>
</section>


<style>


</style>
