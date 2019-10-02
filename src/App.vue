<template>
  <body>
    <div id="app" class="container">
        <header>
                <h1 class="text-center" style=" font-size: 8rem; padding-bottom: 30px;">Animoji 🐿</h1>   
                <div class="row">
                    <div class="col-md-8">
                        <cardHeader/>            
                    </div>
                    <div class="col-md-4">
                      <cardContribute/>
                    </div>
                </div>
      </header>
      <router-view/>
        <hr class="separator">
        <footer>
           <footerContent/>
        </footer>
      </div>
  </body>
</template>
<script>
import footerContent from '@/components/footerContent'
import cardHeader from '@/components/cardHeader'
import cardContribute from '@/components/cardContributor'

export default {
  components:{
    footerContent,
    cardHeader,
    cardContribute
  },created () {
    document.title = "Animoji 🐿";
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Mansalva&display=swap");
    h1{
        font-family: 'Mansalva', cursive;
        padding-top: 10px;
        color:white;
        text-shadow: 0 0 10px #f545; /* horizontal-offset vertical-offset 'blur' colour */
        user-select: none;
    }
    .separator{
       border: 1px solid white;
    }
</style>
