<script>
  import { createEventDispatcher } from "svelte";

    export let id;
    export let text;
    export let createdAt;

    const dispatcher = createEventDispatcher();

    let consentToDelete = false;

    function removeItem() {

        if (consentToDelete == false) return consentToDelete = true;
        dispatcher("remove", { id });
    }

</script>

<div>
    <h2 class='text-white'>{text}</h2>
    <p class='text-white'>Created at {new Date(createdAt).toLocaleDateString('it-IT')} {new Date(createdAt).toLocaleTimeString('it-IT')}</p>
    <button on:click={removeItem}>{consentToDelete == true ? "✅" : "🗑️" }</button>
</div>
