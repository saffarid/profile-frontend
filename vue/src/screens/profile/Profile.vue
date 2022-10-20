<template>
    <div class="profile">

        <img class="photo" src="/img/png/its_me.jpg" />

        <div class="about_me">

        </div>
    </div>
</template>

<script>
   import {
      ref,
   } from 'vue'

   export default {
      name: 'Profile',
      setup() { }
   }
</script>

<style lang="scss" scoped>

    .profile {
        height: calc(max(90vh, 500px));
        width: calc(max(90vw, 1000px));
        background: var(--primary_color);

        display: grid;
        grid-template-columns: min-content auto;
        column-gap: 100px;

        padding: calc(max(5vh, 27.7px)) calc(max(5vw, 55.5px));

        img {
            border-radius: 10px;
            height: calc(max(90vh, 500px));

            align-self: center;
            justify-self: center;
        }


        .about_me {
            display: grid;
            align-self: stretch;
            justify-self: stretch;

            background-color: transparent;
            border-radius: 10px;
        }

    }

</style>