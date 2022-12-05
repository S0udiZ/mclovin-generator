<script>
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  
  const nameArray = writable([]);

  import Licence from "./lib/Licence.svelte";
  import Barcode from "./assets/img/McLOVIN_Barcode.jpg";

  // onMount(async () => {
  //   const name = await fetch("https://random-data-api.com/api/v2/users").then(res => res.json());
  //     const person = {
  //       name: name.first_name,
  //       surname: name.last_name,
  //       gender: name.gender,
  //       email: name.email,
  //       phone: name.phone_number,
  //       address: name.address.street_address,
  //       street: name.address.street_name,
  //       city: name.address.city,
  //       state: name.address.state,
  //       country: name.address.country,
  //       zip: name.address.zip_code,
  //       pictureNumber: Math.floor(Math.random() * 100),
  //     };
  //     $nameArray = [...$nameArray, person];
  // });

  async function GenerateNames (e) {
    nameArray.set([]);
    const form = e.target;
    for (let i = 0; i < form.ammount.value; i++) {
      const name = await fetch("https://random-data-api.com/api/v2/users").then(res => res.json());
      const person = {
        name: name.first_name,
        surname: name.last_name,
        gender: name.gender,
        email: name.email,
        phone: name.phone_number,
        address: name.address.street_address,
        street: name.address.street_name,
        city: name.address.city,
        state: name.address.state,
        country: name.address.country,
        zip: name.address.zip_code,
        pictureNumber: Math.floor(Math.random() * 100),
      };
      $nameArray = [...$nameArray, person];
    }
  }

</script>

<div class="bg-neutral-500 h-screen text-white">
  <h1 class="text-5xl text-center font-bold">McLOVIN Generator</h1>
  <hr class="border-8 my-8 border-y-black border-x-transparent">
  <form action="" class="w-fit mx-auto flex flex-wrap" on:submit|preventDefault={GenerateNames}>
    <div class="justify-center">
      <div class="w-full">
        <input type="number" name="ammount" class="border-2 border-black rounded-md p-2 w-fit text-black" placeholder="Ammount">
        <button class="bg-black text-white rounded-md p-2 ml-2">Generate</button>
      </div>
    </div>
  </form>
  <div class="grid lg:grid-cols-5 gap-1">
    {#each $nameArray as name}
      <div class="relative text-black text-xs font-bold">
        <Licence />
        <figure class="absolute left-2 top-2 w-32 aspect-[1/1.13]">
          {#if name.gender == 'Male'}
            <img src='https://randomuser.me/api/portraits/men/{name.pictureNumber}.jpg' alt="">
          {:else if name.gender == 'Female'}
            <img src='https://randomuser.me/api/portraits/women/{name.pictureNumber}.jpg' alt="">
          {:else}
            {#if Math.floor(Math.random() * 2)}
            <img src='https://randomuser.me/api/portraits/men/{name.pictureNumber}.jpg' alt="">
            {:else}
            <img src='https://randomuser.me/api/portraits/women/{name.pictureNumber}.jpg' alt="">
            {/if}
          {/if}
        </figure>
        <figure class="w-32 absolute top-[10rem] left-2 h-[1.4rem]">
          <img src={Barcode} alt="">
        </figure>
        <p class="absolute bottom-8 left-2">{name.name} {name.surname}</p>
        <p class="absolute bottom-5 left-2">892 MOMONA ST</p>
        <p class="absolute bottom-2 left-2">HONOLULU, HI 96820</p>
        <p class="absolute top-[6.8rem] right-[3.75rem] text-xs font-bold">{name.gender.substring(0,1)}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>