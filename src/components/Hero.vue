<template>
    <div class="h-screen border">
        <div class="container mx-auto max-w-5xl">
            <h1 class="">Tales from Floor Fifty-Four</h1>
            <p class="">
                All nations have a deep, dark pit to hide their secrets.
            </p>
            <p class="">
                Yet none are deeper, or darker, than the British.
            </p>
            <p class="">
                The Ministry of Secrets was always Fifty-Three floors deep. One particularly cold night, a new level emerged, beneath all the others. Floor Fifty-Four; Anomalies.<br>
                Objects that defy explanation.<br> 
                Creatures that would break the world.<br>
                And Kevin. He's there too.
            </p>
            <newsletter-form></newsletter-form>
        </div>
        
    </div>
</template>

<script>

import NewsletterForm from '../components/NewsletterForm.vue'

export default {
    name: 'hero',
    components: {
        NewsletterForm
  }

}
</script>

<style lang="scss" scoped>

</style>