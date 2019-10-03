<template>
    <back-to-top text="Back to Top" bottom="20" visibleoffset="500" class="btn-to-top"></back-to-top>
</template>
<script>
import BackToTop from 'vue-backtotop'

export default {
  components:{
    BackToTop
  }
}
</script>

<style>
    .vue-back-to-top {
        bottom: 20px!important;
    }
    
    .vue-back-to-top .default {
        background-color: teal;
    }

@media only screen and (max-width: 1199px) {
    .vue-back-to-top {
        bottom: 7px!important;
        right: 10px!important;
    }
    .vue-back-to-top .default {
        width: 120px;
    }
}
</style>