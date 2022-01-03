<script>
  import { createEventDispatcher } from 'svelte';
  import { fade, blur, fly, slide, scale } from 'svelte/transition';

  import FaChevronCircleUp from 'svelte-icons/fa/FaChevronCircleUp.svelte';
  import FaChevronCircleDown from 'svelte-icons/fa/FaChevronCircleDown.svelte';

  import Button from './Button.svelte';
  import { clampDigit } from './utils';

  export let value = null;

  const dispatch = createEventDispatcher();
</script>

<div class="dial">
  <Button icon ghost on:click={() => dispatch('dialUp')}
    ><FaChevronCircleUp /></Button
  >
  <div class="digits">
    {#key value}
      <span in:slide={{ duration: 333 }} class="digit-smallest"
        >{clampDigit(value + 2)}
      </span>
      <span in:slide={{ duration: 333 }} class="digit-smaller"
        >{clampDigit(value + 1)}
      </span>
      <span in:slide={{ duration: 333 }} class="digit-normal">{value} </span>
      <span in:slide={{ duration: 333 }} class="digit-smaller"
        >{clampDigit(value - 1)}
      </span>
      <span in:slide={{ duration: 333 }} class="digit-smallest"
        >{clampDigit(value - 2)}</span
      >
    {/key}
  </div>
  <Button icon ghost on:click={() => dispatch('dialDown')}
    ><FaChevronCircleDown /></Button
  >
</div>

<style>
  .dial {
    display: flex;
    flex-flow: column;
    place-content: center;
    place-items: center;
    gap: 1rem;
  }

  .digits {
    display: flex;
    flex-flow: column;
    place-content: center;
    place-items: center;
    gap: 0.1rem;
  }

  .digit-normal {
    font-size: 1.5em;
    font-weight: bold;
  }

  .digit-smaller {
    font-size: 1em;
  }

  .digit-smallest {
    font-size: 0.5em;
  }
</style>
