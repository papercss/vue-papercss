<template lang="html">
  <div :class="[
    'col',
    col ? 'col-' + col : '',
    lg ? 'lg-' + lg : '',
    md ? 'md-' + md : '',
    sm ? 'sm-' + sm : '',
    fill ? 'col-fill' : '',
    bottom ? 'align-bottom' : '',
    middle ? 'align-middle' : '',
    top ? 'align-top' : '',
  ]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    col: {
      type: String,
      default: null,
    },

    lg: {
      type: String,
      default: null,
    },

    md: {
      type: String,
      default: null,
    },

    sm: {
      type: String,
      default: null,
    },

    fill: {
      type: Boolean,
      default: false,
    },

    bottom: {
      type: Boolean,
      default: false,
    },

    middle: {
      type: Boolean,
      default: false,
    },

    top: {
      type: Boolean,
      default: false,
    },
  },

  computed: {},
}
</script>

<style scoped lang="css">
.col {
  padding: 1rem
}

@media (max-width:767px) {
  .col {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
  }
}

.col-fill {
  width: auto;
  flex: 1 1 0px
}

@media (min-width:0px) {
  .col-1 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 8.33333333%;
    -ms-flex: 0 0 8.33333333%;
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%
  }

  .col-2 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 16.66666667%;
    -ms-flex: 0 0 16.66666667%;
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%
  }

  .col-3 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
  }

  .col-4 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 33.33333333%;
    -ms-flex: 0 0 33.33333333%;
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%
  }

  .col-5 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 41.66666667%;
    -ms-flex: 0 0 41.66666667%;
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%
  }

  .col-6 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 50%;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%
  }

  .col-7 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 58.33333333%;
    -ms-flex: 0 0 58.33333333%;
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%
  }

  .col-8 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 66.66666667%;
    -ms-flex: 0 0 66.66666667%;
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%
  }

  .col-9 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 75%;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%
  }

  .col-10 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 83.33333333%;
    -ms-flex: 0 0 83.33333333%;
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%
  }

  .col-11 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 91.66666667%;
    -ms-flex: 0 0 91.66666667%;
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%
  }

  .col-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
  }
}

@media (min-width:768px) {
  .sm-1 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 8.33333333%;
    -ms-flex: 0 0 8.33333333%;
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%
  }

  .sm-2 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 16.66666667%;
    -ms-flex: 0 0 16.66666667%;
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%
  }

  .sm-3 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
  }

  .sm-4 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 33.33333333%;
    -ms-flex: 0 0 33.33333333%;
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%
  }

  .sm-5 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 41.66666667%;
    -ms-flex: 0 0 41.66666667%;
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%
  }

  .sm-6 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 50%;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%
  }

  .sm-7 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 58.33333333%;
    -ms-flex: 0 0 58.33333333%;
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%
  }

  .sm-8 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 66.66666667%;
    -ms-flex: 0 0 66.66666667%;
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%
  }

  .sm-9 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 75%;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%
  }

  .sm-10 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 83.33333333%;
    -ms-flex: 0 0 83.33333333%;
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%
  }

  .sm-11 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 91.66666667%;
    -ms-flex: 0 0 91.66666667%;
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%
  }

  .sm-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
  }
}

@media (min-width:992px) {
  .md-1 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 8.33333333%;
    -ms-flex: 0 0 8.33333333%;
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%
  }

  .md-2 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 16.66666667%;
    -ms-flex: 0 0 16.66666667%;
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%
  }

  .md-3 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
  }

  .md-4 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 33.33333333%;
    -ms-flex: 0 0 33.33333333%;
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%
  }

  .md-5 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 41.66666667%;
    -ms-flex: 0 0 41.66666667%;
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%
  }

  .md-6 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 50%;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%
  }

  .md-7 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 58.33333333%;
    -ms-flex: 0 0 58.33333333%;
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%
  }

  .md-8 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 66.66666667%;
    -ms-flex: 0 0 66.66666667%;
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%
  }

  .md-9 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 75%;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%
  }

  .md-10 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 83.33333333%;
    -ms-flex: 0 0 83.33333333%;
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%
  }

  .md-11 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 91.66666667%;
    -ms-flex: 0 0 91.66666667%;
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%
  }

  .md-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
  }
}

@media (min-width:1200px) {
  .lg-1 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 8.33333333%;
    -ms-flex: 0 0 8.33333333%;
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%
  }

  .lg-2 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 16.66666667%;
    -ms-flex: 0 0 16.66666667%;
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%
  }

  .lg-3 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%
  }

  .lg-4 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 33.33333333%;
    -ms-flex: 0 0 33.33333333%;
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%
  }

  .lg-5 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 41.66666667%;
    -ms-flex: 0 0 41.66666667%;
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%
  }

  .lg-6 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 50%;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%
  }

  .lg-7 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 58.33333333%;
    -ms-flex: 0 0 58.33333333%;
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%
  }

  .lg-8 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 66.66666667%;
    -ms-flex: 0 0 66.66666667%;
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%
  }

  .lg-9 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 75%;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%
  }

  .lg-10 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 83.33333333%;
    -ms-flex: 0 0 83.33333333%;
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%
  }

  .lg-11 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 91.66666667%;
    -ms-flex: 0 0 91.66666667%;
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%
  }

  .lg-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%
  }
}

.align-top {
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start
}

.align-middle {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center
}

.align-bottom {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end
}
</style>
