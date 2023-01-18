<script lang="ts">
  import Login from "./components/Login.svelte";
  import { authUser, db } from "./functions/firebase";
  import NotesDisplayer from "./components/NotesDisplayer.svelte";
  import Profile from "./components/Profile.svelte";
  import { addDoc, collection } from "firebase/firestore";

  let newText = '';

  async function addNewNote() {
        
        if (newText == '') return alert('Empty Text!');

        console.log("Aggiunta testo...")

        await addDoc(collection(db, "notes"), {
            text: newText,
            createdAt: Date.now(),
            userID: $authUser.uid
        }).catch((error) => {
          console.log(error);
        })
        newText = '';
    }

</script>

<main>
  <nav class="navbar bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#ciao">
        <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Sticky Notes
      </a>
      {#if $authUser}
        <Profile/>
      {:else}
        <Login/>
      {/if}
    </div>

  </nav>

  <div class="d-flex justify-content-center">
    {#if $authUser}
      <input type="text" bind:value={newText}>
      <button class="btn btn-primary" on:click={addNewNote}>Add</button>
    {/if}
  </div>

  {#if $authUser}

    <NotesDisplayer/>

  {/if}


</main>