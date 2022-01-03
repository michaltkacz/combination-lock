<script>
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';

  import IoMdCloseCircle from 'svelte-icons/io/IoMdCloseCircle.svelte';

  import Button from './Button.svelte';

  let windowHeight = 0;
  let messageHeight = 0;

  const dispatch = createEventDispatcher();
  const closeModal = () => {
    dispatch('close');
  };
</script>

<svelte:window bind:innerHeight={windowHeight} />
<div
  class="message"
  bind:clientHeight={messageHeight}
  in:fly={{ y: -(windowHeight + messageHeight) / 2, duration: 333 }}
  out:fly={{ y: (windowHeight + messageHeight) / 2, duration: 333 }}
>
  <div class="close">
    <Button icon on:click={closeModal}><IoMdCloseCircle /></Button>
  </div>

  <div class="header">
    <slot name="title" />
  </div>
  <div class="body">
    <slot name="body" />
  </div>
  <div class="footer">
    <div>
      <slot name="footer" />
    </div>
    <Button on:click={closeModal}>OK</Button>
  </div>
</div>

<style>
  .message {
    background: var(--darkest);
    border: 1px solid var(--dark);
    padding: 0.25rem 0.5rem;

    max-width: 444px;
    width: 100%;
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(33%, -33%);
  }

  .header {
    display: flex;
    flex-flow: row;
    place-content: start;
    place-items: start;
  }

  .footer {
    width: 100%;
    display: flex;
    flex-flow: row;
    place-content: start space-between;
    place-items: start;
  }

  .body {
    display: flex;
    flex-flow: column;
    place-content: start;
    place-items: start;
  }
</style>
