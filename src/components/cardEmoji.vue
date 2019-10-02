<template>
    <div class="card">
        <div class="card-body text-center h2" data-toggle="collapse" :href="`#desc-${animeId}`" aria-expanded="false">
            {{animeEmoji}}
            <div class="card-hidden text-center collapse" v-bind:id="`desc-${animeId}`">
                <div class="card-title h5">
                    {{animeName}} ({{animeYear}})
                </div>
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
.card-hidden {
    padding-top: 1.5rem;
}
.card-title {
    margin-bottom: 0;
}
.card-body {
margin-bottom: 0;
padding-bottom: 1.5rem;
}
</style>
