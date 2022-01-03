<script>
</script>

<div class="secret">
  <span class="title">Super Secret Content</span>
  <div class="radar"><div class="rotor" /></div>
</div>

<style>
  .secret {
    display: flex;
    flex-flow: column;
    place-content: center;
    place-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 1px dashed var(--dark);
  }

  .title {
    text-transform: uppercase;
    text-shadow: 0 0 2px var(--dark);
    color: darkgreen;
  }

  .radar {
    width: 3rem;
    height: 3rem;
    background: var(--darkest);
    border: 2px solid darkgreen;
    border-radius: 50%;
  }

  .rotor {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: conic-gradient(
      from -0.2turn,
      rgba(0, 100, 0, 0.5),
      chartreuse 0.2turn,
      rgba(0, 100, 0, 0.5) 0.2turn
    );

    animation: rotation 3s linear infinite;
  }

  @keyframes rotation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
