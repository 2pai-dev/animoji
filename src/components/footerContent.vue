<template>
    <div class="footer text-center">
        <p>Now Animoji has <b>{{count}}</b> anime 🔥</p>
    </div>
</template>

<script>
export default {
    name: 'footerContent',
    data() {
        return {
            count: this.$store.getters.getCount,
        };
    },
};
</script>

<style>
    .footer {
        font-family: 'Lato', sans-serif;
        margin: 4rem 0 2px;
        color: #9180ad;
        font-size: 14px;
        line-height: 1.6;
        font-weight: 300;
    }
</style>