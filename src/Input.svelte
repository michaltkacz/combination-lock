<script>
  import { scale } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  import Button from './Button.svelte';

  const dispatch = createEventDispatcher();

  let value = '';
  let active = false;
</script>

<div class="input">
  {#if active}
    <input
      type="text"
      class="field"
      bind:value
      transition:scale={{ duration: 333 }}
    />
  {/if}
  <Button
    icon
    ghost
    on:click={() => {
      if (active && /^[0-9]+$/.test(value)) {
        dispatch('valueSubmit', value);
        active = false;
        value = '';
      } else {
        active = true;
      }
    }}><slot name="buttonIcon" /> <slot name="buttonText" /></Button
  >
</div>

<style>
  .input {
    display: flex;
    place-content: center;
    place-items: center;
    gap: 0.1rem;
  }

  .field {
    max-width: 3rem;
    min-width: 1rem;
    background: none;
    outline: none;
  }
</style>
