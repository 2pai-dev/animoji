<template>
    <body>
    <div id="app" class="container">
        <header>
            <div class="container header-content">
                <h1 class="text-center">Animoji 🐿</h1>
                <div class="row">
                    <div class="col-md-8">
                        <cardHeader/>
                    </div>
                    <div class="col-md-4">
                        <cardContribute/>
                    </div>
                </div>
            </div>
        </header>
        <router-view/>
        <footer>
            <footerContent/>
        </footer>
    </div>
    <backToTop/>
    </body>
</template>

<script>
import backToTop from '@/components/backToTop';
import cardHeader from '@/components/cardHeader';
import footerContent from '@/components/footerContent';
import cardContribute from '@/components/cardContributor';

export default {
    components: {
        footerContent,
        cardHeader,
        cardContribute,
        backToTop,
    }, created() {
        document.title = "Animoji 🐿";
    },
};
</script>

<style>
    @import url("https://fonts.googleapis.com/css?family=Mansalva&display=swap");
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');

    header h1 {
        font-family: 'Mansalva', cursive;
        font-size: 1.62rem;
        padding: 1.87rem;
        color: #fff;
        text-shadow: 0 0 10px #f545;
    }

    .header-content {
        margin-bottom: 2.5rem;
    }
</style>