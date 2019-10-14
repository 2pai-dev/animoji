<template>
    <div class="main">
        <div class="container">
            <div class="row">
                <div
                    class="col-sm-6 col-md-4"
                    v-for="({animeEmoji,animeName,animeYear,id},index) in listAnime"
                    :key="{index}">

                    <cardEmoji
                        class="my-2 shadow"
                        :animeEmoji=animeEmoji
                        :animeName=animeName
                        :animeYear=animeYear
                        :animeId=index />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cardEmoji from '@/components/cardEmoji';

export default {
    name: 'main',
    components: {
        cardEmoji,
    },
    data() {
        return {
            listAnime: this.$store.getters.getListAnime,
        };
    },
    created() {
        this.$store.dispatch('init');
    },
};
</script>

<style>
    .separator {
        border: 1px solid white;
    }
</style>