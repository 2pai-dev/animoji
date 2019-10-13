<template>
    <back-to-top text="Back to Top" bottom="20" visibleoffset="500" class="btn-to-top"></back-to-top>
</template>

<script>
import BackToTop from 'vue-backtotop';

export default {
    components: {
        BackToTop,
    },
};
</script>

<style>
    .btn-to-top .default {
        background-color: #061c3f;
        padding: 0 12px;
        font-family: 'Lato', sans-serif;
        font-size: 13px;
        font-weight: 400;
    }

    @media only screen and (max-width: 1199px) {
        .vue-back-to-top {
            bottom: 14px !important;
            right: 14px !important;
        }

        .vue-back-to-top .default {
            width: auto;
        }
    }
</style>