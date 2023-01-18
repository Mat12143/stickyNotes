<script lang="ts">

  import { authUser } from "../functions/firebase";
  import { auth } from "../functions/firebase";
  import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
  import Profile from "./Profile.svelte";
  
</script>
  
<main>

  {#if $authUser == null}
    <button class="btn btn-primary"on:click={() => {signInWithPopup(auth, new GoogleAuthProvider());}}>Login with Google</button>
    <button class="btn btn-primary" disabled>Login with Github</button>    
  {/if}

  
</main>