<script>
    import { answerQuestion } from '$lib/shared';
</script>

<!-- Answer Buttons -->
<section>
    <button on:click={() => answerQuestion(true)}>Correct Answer</button>
    <button on:click={() => answerQuestion(false)}>Incorrect Answer</button>
</section>

<style>

</style>
