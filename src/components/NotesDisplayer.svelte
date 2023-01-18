<script lang='ts'>
  import {  collection, deleteDoc, doc, onSnapshot, orderBy, query, where } from "firebase/firestore";
  import { onDestroy } from "svelte";
  import { authUser, db } from "../functions/firebase";
  import Note from "./Note.svelte";

    let notes = [];

    const filter = query(collection(db, 'notes'), where("userID", "==", $authUser.uid), orderBy("createdAt"));

    const unsubscribe = onSnapshot(filter, (data) => {

        notes = [];
        data.forEach((note) => {
            let noteData = {...note.data(), id: note.id};
            notes = [noteData, ...notes];
        })
    })


    function removeItem(event) {
        deleteDoc(doc(db, 'notes', event.detail.id));
    }


    onDestroy(() => {unsubscribe()})

</script>

<!-- <main> -->

    <div class='row centered'>
    
        {#each notes as note}
            
            <div class="col-2">
                <Note {...note} on:remove={removeItem}/>
            </div>
        
        {/each}
    
    </div>

<!-- </main> -->