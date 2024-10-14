<script>
  import {rolesList} from '$lib/shared';
</script>

{#each rolesList as role (role.id)}

  <div class='text-2xl max-w-sm'>{role.name}</div>
{/each}

<style>

</style>
