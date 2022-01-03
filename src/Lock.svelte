<script>
  import { createEventDispatcher } from 'svelte';

  import FaUnlock from 'svelte-icons/fa/FaUnlock.svelte';
  import FaLock from 'svelte-icons/fa/FaLock.svelte';
  import FaEdit from 'svelte-icons/fa/FaEdit.svelte';
  import FaWindowClose from 'svelte-icons/fa/FaWindowClose.svelte';

  import Button from './Button.svelte';
  import Input from './Input.svelte';
  import Dial from './Dial.svelte';
  import { clampDigit, generateRandomArray } from './utils';

  const dispatch = createEventDispatcher();

  export let lockLength = 3;
  export let lockCode = '0'.repeat(lockLength);

  let unlocked = false;
  let currentCode = generateRandomArray(lockLength, 0, 9);

  $: codeFound = currentCode.join('') === lockCode;
</script>

<div class="lock">
  {#if unlocked}
    <Button
      icon
      ghost
      on:click={() => {
        unlocked = false;
        currentCode = generateRandomArray(lockLength, 0, 9);
        dispatch('locked');
      }}><FaLock /></Button
    >
    <slot><span>secret content placeholder</span></slot>
  {:else}
    <Input
      on:valueSubmit={(e) => {
        lockCode = e.detail;
        currentCode = generateRandomArray(e.detail.length, 0, 9);
      }}><FaEdit slot="buttonIcon" /></Input
    >
    <div class="combination">
      {#each currentCode as digit, index (index)}
        <Dial
          value={digit}
          on:dialUp={() => (digit = clampDigit(digit + 1))}
          on:dialDown={() => (digit = clampDigit(digit - 1))}
        />
      {/each}
    </div>
    <Button
      disabled={!codeFound}
      icon
      ghost
      on:click={() => {
        unlocked = true;
        dispatch('unlocked');
      }}
      >{#if codeFound}
        <FaUnlock />
      {:else}
        <FaWindowClose />
      {/if}</Button
    >
  {/if}
</div>

<style>
  .lock {
    display: flex;
    flex-flow: column;
    place-content: center;
    place-items: center;
    gap: 1rem;
  }

  .combination {
    display: flex;
    flex-flow: row;
    gap: 1rem;
  }
</style>
