<template>
  <div id="demo-content" class="demo">
    <h2>Grid system</h2>

    <p-container id="grid-demo" fluid>
      <p-row>
        <p-col col="4">col-4 col</p-col>
        <p-col col="4">col-4 col</p-col>
        <p-col col="4">col-4 col</p-col>
      </p-row>

      <p-row>
        <p-col col="3">col-3 col</p-col>
        <p-col col="9">col-9 col</p-col>
      </p-row>

      <p-row>
        <p-col sm="6" md="8" lg="10">sm-6 md-8 lg-10 col</p-col>
        <p-col sm="6" md="4" lg="2">sm-6 md-4 lg-2 col</p-col>
      </p-row>

      <p-row>
        <p-col sm="5">sm-5 col</p-col>
        <p-col fill>col-fill col</p-col>
        <p-col fill>col-fill col</p-col>
      </p-row>

      <p-row>
        <p-col sm="4">Aligned</p-col>
        <p-col sm="4">Left (default)</p-col>
      </p-row>

      <p-row right>
        <p-col sm="4">Aligned</p-col>
        <p-col sm="4">Right (flex-right)</p-col>
      </p-row>

      <p-row center>
        <p-col sm="4">Aligned</p-col>
        <p-col sm="4">Center (flex-center)</p-col>
      </p-row>

      <p-row edges>
        <p-col sm="4">Aligned</p-col>
        <p-col sm="4">To edges (flex-edges)</p-col>
      </p-row>

      <p-row top>
        <p-col sm="4">Aligned top</p-col>
        <p-col sm="4">Aligned top</p-col>
        <p-col sm="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non,
          luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
        </p-col>
      </p-row>

      <p-row middle>
        <p-col sm="4">Aligned middle</p-col>
        <p-col sm="4">Aligned middle</p-col>
        <p-col sm="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non,
          luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
        </p-col>
      </p-row>

      <p-row bottom>
        <p-col sm="4">Aligned bottom</p-col>
        <p-col sm="4">Aligned bottom</p-col>
        <p-col sm="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non,
          luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
        </p-col>
      </p-row>

      <p-row>
        <p-col sm="3" bottom>Align bottom</p-col>
        <p-col sm="3" middle>Align middle</p-col>
        <p-col sm="3" top>Align top</p-col>
        <p-col sm="3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non,
          luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.
        </p-col>
      </p-row>
    </p-container>

    <h2>Buttons</h2>

    <p-container id="buttons-demo" fluid>
      <p-button>Basic button</p-button>
      <p-button :small="true">Small button</p-button>
      <p-button :large="true">Large button</p-button>
      <p-button :disabled="true">Disabled button</p-button>
      <p-button color="primary">Primary</p-button>
      <p-button color="secondary">Secondary</p-button>
    </p-container>

    <h2>Cards</h2>

    <p-container id="cards-demo" fluid>
      <h4>Full card example</h4>

      <p-card
        imgSrc="https://picsum.photos/768"
        imgAlt="Card image"
        title="My awesome Paper card!"
        subtitle="Nice looking subtitle."
        text="Notice that the card width in this example have been set to 20rem, otherwise it will try to fill the current container/row where the card is.">
        <p-button>Let me go here!</p-button>
      </p-card>

      <h4>Card title, text, links</h4>

      <p-card
        title="My awesome Paper card!"
        subtitle="Nice looking subtitle."
        text="This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.">
        <a class="card-link" href="#">First link</a>
        <a class="card-link" href="#">Second link</a>
      </p-card>

      <h4>Image on top or bottom</h4>

      <p-card
        imgBottom
        imgSrc="https://picsum.photos/550/250"
        imgAlt="Card image"
        title="My awesome Paper card!"
        subtitle="Nice looking subtitle."
        text="You can also place image on the bottom of the card.">
        <p-button>Let me go here!</p-button>
      </p-card>

      <h4>Header and footer</h4>

      <p-card
        header="Header"
        footer="Footer"
        title="My awesome Paper card!"
        subtitle="Nice looking subtitle."
        text="You can also place image on the bottom of the card.">
        <p-button>Let me go here!</p-button>
      </p-card>
    </p-container>

    <h2>Badges</h2>

    <p-container id="badges-demo" fluid>
      <h1>Example h1 heading
        <p-badge>123</p-badge>
      </h1>
      <h2>Example h2 heading
        <p-badge color="secondary">123</p-badge>
      </h2>
      <h3>Example h3 heading
        <p-badge color="success">123</p-badge>
      </h3>
      <h4>Example h4 heading
        <p-badge color="warning">123</p-badge>
      </h4>
      <h5>Example h5 heading
        <p-badge color="danger">123</p-badge>
      </h5>
      <h6>Example h6 heading
        <p-badge>123</p-badge>
      </h6>
    </p-container>

    <h2>Alerts</h2>

    <p-container id="alerts-demo" fluid>
      <p-alert color="primary">Alert-primary</p-alert>
      <p-alert color="secondary">Alert-secondary</p-alert>
      <p-alert color="success">Alert-success</p-alert>
      <p-alert color="warning">Alert-warning</p-alert>
      <p-alert color="danger">Alert-danger</p-alert>
    </p-container>

    <h2>Articles</h2>

    <p-container id="articles-demo" fluid>
      <p-article
        title="Article Title"
        titleLink="article-demo"
        meta="Article meta text"
        author="Super User"
        authorLink="super-user"
        date="24 November 2017"
        category="Blog"
        categoryLink="blog-category"
        lead="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi, consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at quaerat modi earum, fugiat magni impedit, aperiam.">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure totam nam debitis aliquid impedit, et
          quas omnis aspernatur optio molestias ex laborum quia. Ducimus culpa tempore, veritatis officia delectus
          dolore dignissimos reprehenderit vero, sunt odit placeat est non molestiae ipsa nam velit in iusto hic quasi
          similique facere. Maxime?
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure totam nam debitis aliquid impedit, et
          quas omnis aspernatur optio molestias ex laborum quia. Ducimus culpa tempore, veritatis officia delectus
          dolore dignissimos reprehenderit vero, sunt odit placeat est non molestiae ipsa nam velit in iusto hic quasi
          similique facere. Maxime?
        </p>

        <p-row>
          <p-button>Read more</p-button>
          <p-button>5 comments</p-button>
        </p-row>
      </p-article>
    </p-container>
  </div>
</template>

<script>
  import { container, row, col, button, card, badge, alert, article } from '../../src';

  export default {
    name: "home",
    components: {
      pContainer: container,
      pRow: row,
      pCol: col,
      pButton: button,
      pCard: card,
      pBadge: badge,
      pAlert: alert,
      pArticle: article,
    }
  }
</script>

<style scoped>

</style>
