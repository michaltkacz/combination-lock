<script>
  export let icon = false;
  export let rounded = false;
  export let disabled = false;
  export let ghost = false;
</script>

<button
  class="button"
  class:icon
  class:rounded
  class:disabled
  class:ghost
  {disabled}
  on:click><slot /></button
>

<style>
  .button {
    padding: 0.1rem 0.25rem;
    background: black;
    border: 1px solid var(--dark);
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
  }

  .button:hover {
    background: var(--darker);
  }

  .button:active {
    background: var(--dark);
  }

  .disabled {
    cursor: not-allowed;
    background: none;
  }

  .disabled:hover {
    animation: none;
    background: none;
  }

  .icon {
    width: 1rem;
    height: 1rem;
    padding: 0;
    border-radius: 50%;
    background: none;
  }

  .icon:hover {
    background: none;
    animation: pulse 1000ms ease-in infinite alternate;
  }

  .ghost {
    background: none;
    border: none;
  }

  @keyframes pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
  }
</style>
