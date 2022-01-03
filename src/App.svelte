<script>
  import Modal from './Modal.svelte';
  import Lock from './Lock.svelte';
  import SecretContent from './SecretContent.svelte';

  // let lockLength = 3;
  // let lockCode = '0'.repeat(lockLength);

  const modalData = {
    title: 'Success!',
    message: 'You have unlocked the lock.',
  };
  let showModal = false;
</script>

<main class="main">
  <h1 class="title">Combination lock</h1>
  <Lock on:unlocked={(e) => (showModal = true)}><SecretContent /></Lock>
</main>

{#if showModal}
  <Modal {...modalData} on:close={() => (showModal = false)} />
{/if}

<style>
  :root {
    --darkest: black;
    --darker: #222;
    --dark: #444;

    --lightest: #bbb;
    --lighter: #ddd;
    --light: white;
  }

  .title {
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
    color: var(--dark);
    text-shadow: -1px -1px 2px var(--light), 1px 1px 1px var(--light);
  }

  .main {
    height: 100%;
    display: flex;
    flex-flow: column;
    place-content: center;
    place-items: center;
    gap: 1rem;
    background: linear-gradient(to right, #232526, #414345);
  }
</style>
