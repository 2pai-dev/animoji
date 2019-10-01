<template>
    <div class="card">
        <div class="card-body text-center" data-toggle="collapse" :href="`#desc-${animeId}`" aria-expanded="false" style="font-size: 40px;">
            {{animeEmoji}}
        </div>
        <div class="card-body text-center collapse" v-bind:id="`desc-${animeId}`" style="font-size: 20px; font-weight: bold;">
            {{animeName}} ({{animeYear}})
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