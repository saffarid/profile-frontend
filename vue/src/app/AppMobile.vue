<template>
    <div class="app-mobile">
        <span>Отображение для мобильных устройств в процессе разработки</span>
    </div>
</template>

<script>
   export default {
      name: 'AppMobile',
   }
</script>

<style lang="scss">
    .app-mobile {
        background-color: var(--primary_color);
        height: 100vh;
        display: grid;
        justify-content: center;
        align-content: center;

        span {
            color: white;
        }
    }
</style>