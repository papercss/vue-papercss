<template>
  <div>
    <h2>Cards</h2>

    <Demo title="Full card">
      <p-card
        imgSrc="https://picsum.photos/768"
        imgAlt="Card image"
        title="My awesome Paper card!"
        subtitle="Nice looking subtitle."
        text="Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.">
        <p-button>Let me go here!</p-button>
      </p-card>
    </Demo>

    <Demo title="Card title, text, links">
      <p-card
        title="My awesome Paper card!"
        subtitle="Nice looking subtitle."
        text="This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.">
        <a class="card-link" href="#">First link</a>
        <a class="card-link" href="#">Second link</a>
      </p-card>
    </Demo>

    <Demo title="Image on top or bottom">
      <p-card
        imgBottom
        imgSrc="https://picsum.photos/550/250"
        imgAlt="Card image"
        title="My awesome Paper card!"
        subtitle="Nice looking subtitle."
        text="You can also place image on the bottom of the card.">
        <p-button>Let me go here!</p-button>
      </p-card>
    </Demo>

    <Demo title="Header and footer">
      <p-card
        header="Header"
        footer="Footer"
        title="My awesome Paper card!"
        subtitle="Nice looking subtitle."
        text="You can also place image on the bottom of the card.">
        <p-button>Let me go here!</p-button>
      </p-card>
    </Demo>
  </div>
</template>

<script>
  import Demo from '../../component/Demo'
  import {card} from '../../../src'

  export default {
    name: "card",
    components: {
      pCard: card,
      Demo
    }
  }
</script>

<style scoped>

</style>
