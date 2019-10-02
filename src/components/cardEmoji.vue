<template>
    <div class="card">
        <div class="card-body text-center h2" data-toggle="collapse" :href="`#desc-${animeId}`" aria-expanded="false">
            {{animeEmoji}}
        </div>
        <div class="card-body text-center collapse" v-bind:id="`desc-${animeId}`">
            <div class="card-title h5">
                {{animeName}} ({{animeYear}})
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'cardEmoji',
    props:{
        animeEmoji: String,
        animeName: String,
        animeYear: Number,
        animeId:Number
    }
}
</script>

<style scoped>
.card{
    user-select: none;
}
</style>