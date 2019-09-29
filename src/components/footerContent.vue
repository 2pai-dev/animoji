<template>
    <div class="text-center"  style="font-size: 25px;">
        <p style="color:white">Now Animoji has <b>{{count}}</b> anime 🔥</p>
    </div>    
</template>

<script>
export default {
    name:'footerContent',
    data(){
        return{
            count:this.$store.getters.getCount
        }
    }
}
</script>