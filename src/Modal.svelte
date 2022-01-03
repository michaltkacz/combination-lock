<script>
  import Message from './Message.svelte';

  export let title = '';
  export let message = '';
</script>

<div class="modal">
  <Message on:close>
    <h1 slot="title">{title}</h1>
    <p slot="body">{message}</p>
  </Message>
</div>

<style>
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    overflow: hidden;

    display: flex;
    flex-flow: column;
    place-items: center;
    place-content: center;

    background: rgb(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }
</style>
