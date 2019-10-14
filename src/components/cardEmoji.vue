<template>
    <div class="card">
        <div class="card-body text-center h2"
             data-toggle="collapse"
             :href="`#desc-${animeId}`"
             aria-expanded="false">

            {{animeEmoji}}

            <div class="text-center collapse" v-bind:id="`desc-${animeId}`">
                <div class="card-title h6">
                    {{animeName}} ({{animeYear}})
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cardEmoji',
    props: {
        animeEmoji: String,
        animeName: String,
        animeYear: Number,
        animeId: Number,
    },
};
</script>

<style scoped>
    .card {
        user-select: none;
        background: #443759;
    }

    .card-title {
        font-family: 'Lato', sans-serif;
        margin-top: 1rem;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 1.6;
    }

    .card-body {
        margin-bottom: 0;
        color: #fff;
        font-size: 18px;
    }
</style>