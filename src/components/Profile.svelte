<script lang="ts">

    import { authUser } from "../functions/firebase";
    import { auth } from "../functions/firebase";

    let { displayName, photoURL } = $authUser;

</script>


<span class="navbar-text">
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="inline">{displayName}</p>
            </div>
            <div class="col ">
                <img src="{photoURL}" alt="" class="inline" style='width: 100%'>
            </div>
            <div class='col'>
                <button on:click={() => {auth.signOut()}}>Logout</button>
            </div>
        </div>
    </div>
</span>
        

