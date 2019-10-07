<template>
<div class="card banner">
    <div class="card-body">
        <h3 class="banner-title">Describe your favorite anime with emoji 🌈🌕⛅️</h3> 
        <p class="desc paragraph">Click on the emojis to reveal the anime name!</p>
    </div>
</div>
</template>
<script>
export default {
    name:'cardHeader'
}
</script>
<style>
    .card.banner {
        height: 100%;
        background: transparent;
        border: 0;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        color: #fff;
    }
    .card .banner-title {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 51px;
    }
    .card .paragraph {
        font-size: 14px;
    }
</style>