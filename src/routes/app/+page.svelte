<script>
    import { AdvancedColorsRoleScreen, BasicColorsRoleScreen, EvolvingColorsRoleScreen, VerifierRoleScreen, TimerRoleScreen, GuideRoleScreen } from '$lib/widgets'
    import { RolesList } from '$lib/entities'
    import { userRole,  rollDice, getRoleMessage } from '$lib/shared';

  let message = '';
  $: message = getRoleMessage(); // Reactive role message
</script>




<main>

<!-- <RolesList /> -->

  <!-- <TimerRoleScreen/> -->

  <!-- <VerifierRoleScreen /> -->

  <!-- <AdvancedColorsRoleScreen /> -->

  <!-- <BasicColorsRoleScreen /> -->

  <!-- <EvolvingColorsRoleScreen /> -->

  <!-- <GuideRoleScreen /> -->


</main>

