<template>
  <div class="">
    <div id="mc_embed_signup">
      <form
        action="https://reddit.us18.list-manage.com/subscribe/post?u=f690ef82ee81d0bf3d78fea70&amp;id=9b23fce2c0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll" class="px-4 md:px-0">
          <div class="flex flex-col w-full md:w-1/2">
            <label class="mb-2 text-base font-bold font-display" for="mce-EMAIL"
              >Email Address:</label
            >
            <input
              type="email"
              value=""
              name="EMAIL"
              class="font-display email p-2"
              id="mce-EMAIL"
              placeholder="kevin@floorfiftyfoor.co.uk"
              required
            />
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input
              type="text"
              name="b_f690ef82ee81d0bf3d78fea70_9b23fce2c0"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="clear font-display mt-6">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button py-2 px-8 cursor-pointer w-full md:w-auto"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsletter-form"
};
</script>

<style lang="scss" scoped>
.button {
  background: transparent;
  border: 1px solid white;

  &:hover {
    background: white;
    color: black;
  }
}
</style>
