<template lang="html">
  <div class="card">
    <div v-if="header" class="card-header">{{header}}</div>

    <img v-if="imgSrc && !imgBottom" :src="imgSrc" :alt="imgAlt">

    <div class="card-body">
      <h4 v-if="title" class="card-title">{{title}}</h4>
      <h5 v-if="subtitle" class="card-subtitle">{{subtitle}}</h5>
      <p v-if="text" class="card-text">{{text}}</p>
      <slot />
    </div>

    <img v-if="imgSrc && imgBottom" :src="imgSrc" :alt="imgAlt">

    <div v-if="footer" class="card-footer">{{footer}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },

    subtitle: {
      type: String,
      default: '',
    },

    text: {
      type: String,
      default: '',
    },

    imgSrc: {
      type: String,
      default: '',
    },

    imgAlt: {
      type: String,
      default: '',
    },

    imgBottom: {
      type: Boolean,
      default: false,
    },

    header: {
      type: String,
      default: '',
    },

    footer: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="css">
.card {
  -webkit-box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2);
  -moz-box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2);
  box-shadow: 15px 28px 25px -18px rgba(0,0,0,.2);
  transition: all .5s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  border: 2px solid #e6e7e9
}

.card.shadow-large {
  -webkit-box-shadow: 20px 38px 34px -26px rgba(0,0,0,.2);
  -moz-box-shadow: 20px 38px 34px -26px rgba(0,0,0,.2);
  box-shadow: 20px 38px 34px -26px rgba(0,0,0,.2)
}

.card.shadow-small {
  -webkit-box-shadow: 10px 19px 17px -13px rgba(0,0,0,.2);
  -moz-box-shadow: 10px 19px 17px -13px rgba(0,0,0,.2);
  box-shadow: 10px 19px 17px -13px rgba(0,0,0,.2)
}

.card.shadow-hover:hover {
  -webkit-box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3);
  -moz-box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3);
  box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3);
  transform: translate(0,2px)
}

.card:hover {
  -webkit-box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3);
  -moz-box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3);
  box-shadow: 2px 8px 8px -5px rgba(0,0,0,.3);
  transform: translate(0,2px)
}

.card .card-footer,
.card .card-header {
  padding: .75rem 1.25rem;
  background-color: rgba(0,0,0,.03)
}

.card .card-header {
  border-bottom: 2px solid #e6e7e9
}

.card .card-footer {
  border-top: 2px solid #e6e7e9
}

.card .card-body {
  flex: 1 1 auto;
  padding: 1.25rem
}

.card .card-body .card-title,
.card .card-body h4 {
  margin-top: 0;
  margin-bottom: .5rem
}

.card .card-body .card-subtitle,
.card .card-body h5 {
  color: #0071de;
  margin-top: 0;
  margin-bottom: .5rem
}

.card .card-body .card-text,
.card .card-body p {
  margin-top: 0;
  margin-bottom: 1rem
}

.card .card-body .card-link + .card-link,
.card .card-body a + a {
  margin-left: 1.25rem
}

.card .image-bottom,
.card .image-top,
.card img {
  border: 0;
  border-radius: 0
}
</style>
