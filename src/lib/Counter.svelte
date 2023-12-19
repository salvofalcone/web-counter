<svelte:options customElement={{tag:"counter-component"}} />

<script>
    export let count = 0;

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }
</script>

<div class="counter">
    <button on:click={decrement}>Decrementa</button>
     <p>Contatore: {count}</p>
    <button on:click={increment}>Incrementa</button>
</div>

<style>
    .counter {
        display: flex;
        gap: 24px;
    }

    button {
        cursor: pointer;
    }

    button:hover {
        transform: scale(0.96);
    }
</style>
