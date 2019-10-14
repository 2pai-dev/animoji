<template>
    <div class="border-contributor">
        <p class="paragraph">
            Looking to add your favorite anime to Animoji ? ✨🌏🌷
        </p>
        <button class="btn btn-contributor"
                onclick="location.href='https://github.com/2pai-dev/animoji';">
            Contribute 🔥
        </button>
    </div>
</template>

<script>
export default {
    name:'cardContributor'
}
</script>

<style>
    .btn.btn-contributor {
        border: 0;
        font-weight: 400;
        font-size: 13px;
        background-color: #071b3f;
        color: #fff;
    }
    .btn.btn-contributor:hover {
        color: #ffff;
        text-decoration: none;
        background-color: #3a284f;
    }
    .border-contributor{
        padding: 13px 20px 18px 20px;
        background: white;
        border-radius: 7px;
        margin-top: 29px;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 14px;
        color: #3a284f;
    }
</style>