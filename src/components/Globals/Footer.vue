<template>
    <div class="py-4 container mx-auto">
        <div class="flex flex-row justify-center items-center py-10">
            <a href="https://www.reddit.com/r/RJHuntWrites/" target="_blank" rel="nofollow" class="icon-circle icon-circle--reddit mx-4 hover:bg-black">
                <font-awesome-icon :icon="['fab', 'reddit-alien']" />
            </a>
            <a href="https://twitter.com/RJHUNTWRITES" target="_blank" rel="nofollow" class="icon-circle icon-circle--twitter mx-4 hover:bg-black">
                <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <!-- <a href="/" class="icon-circle icon-circle--link mx-2">
                <font-awesome-icon :icon="['fas', 'link']" />
            </a> -->
            <a href="mailto:floorfiftyfour@gmail.com" class="icon-circle icon-circle--email mx-4 hover:bg-black">
                <font-awesome-icon :icon="['far', 'envelope']" />
            </a>
            <a href="https://www.instagram.com/floorfiftyfourofficial/" target="_blank" rel="nofollow" class="icon-circle icon-circle--instagram mx-4 hover:bg-black">
                <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
        </div>
        <div class="flex font-display items-center justify-center text-sm">
            <div class="">
                Floor Fifty-Four, {{ new Date().getFullYear() }} 
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    name: 'global-footer',
    components: {

  }

}
</script>

<style lang="scss" scoped>

.icon-circle {

    border-radius: 50%;
    width: 30px;
    height: 30px;
    text-align: center;
    padding-top: 3px;

    background: black;
    color: white;

    &--reddit {
        background: #FF5700;
    }

    &--twitter {
        background: #00acee;
    }

    &--link {
        background: #54be93;

    }

    &--email {
        background: #52bcd6;
    }

    &--instagram {
        background: #d6249f;
    }

}

</style>