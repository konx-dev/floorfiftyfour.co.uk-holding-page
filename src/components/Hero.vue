<template>
    <div class="h-auto md:h-full bg-black py-10 md:py-20">
        <div class="container mx-auto max-w-4xl text-white">

            <div class="w-32 h-32 mx-auto mb-4" > 
                <img class="img--responsive" alt="midnight caller book cover" src="../assets/images/logo-white.png">
            </div>

            <div class="font-display px-4 md:px-0">
                <h1 class="text-2xl md:text-6xl font-bold mb-6" id='signup_anchor'>Tales from Floor Fifty-Four</h1>
                <p class="text-base md:text-2xl font-bold mb-4">
                    All nations have a deep, dark pit to hide their secrets.
                </p>
                <p class="text-base md:text-2xl font-bold mb-4">
                    Yet none are deeper, or darker, than the British.
                </p>
                <p class="text-base md:text-2xl mb-8">
                    The Ministry of Secrets was always Fifty-Three floors deep. One particularly cold night, a new level emerged, beneath all the others. Floor Fifty-Four; Anomalies.<br>
                    Objects that defy explanation.<br> 
                    Creatures that would break the world.<br>
                    And Kevin. He's there too.
                </p>
                <p class="text-base md:text-2xl mb-8" >
                    Sign up for the Floor Fifty-Four Newsletter and receive free e-books, discounts and the chance to be a Beta-Reader!
                </p>
            </div>

            <div>
                <newsletter-form></newsletter-form>
            </div>


            
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