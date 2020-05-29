<template>
  <section>
    <header>
      <div class="container">
        <div class="flex-container">
          <h1>XCasts</h1>

          <a href="#">Sign in</a>
        </div>

        <nav class="flex-container--centered">
          <a href="#">Catalog</a>
          <a href="#">Series</a>
          <a href="#">Podcast</a>
          <a href="#">Discussions</a>
        </nav>
      </div>
    </header>

    <div class="row">
      <div class="col">
        Sidebar
      </div>

      <div class="col">
        <div class="box">
          Content 1
        </div>
      </div>

      <div class="col">
        <div class="box">
          Content 2
        </div>
      </div>

      <div class="col">
        <div class="box">
          Content 3
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="box">
          Content 4
        </div>
      </div>

      <div class="col">
        <div class="box">
          Content 5
        </div>
      </div>
    </div>

    <div class="container">
      <p>
        {{ sample.greeting }}
      </p>
    </div>
  </section>
</template>

<style lang="scss">
header {
    background-image: linear-gradient(to right, #a25b5b, #692e4c);
    padding: 1.5em 2em;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.flex,
.row {
    display: flex;
}

.row {
    margin-left: -10px;
    margin-right: -10px;
}

.col {
    flex: 1; // this property means take up one unit of flexbox space.
    padding: 10px;
}

.box {
    background-color: gray;
    min-height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.flex-container {
    display: flex;
    justify-content: space-between;
}

.flex-container--centered {
    display: flex;
    justify-content: center;

    a {
        padding-left: 10px;
        padding-right: 10px;
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>

<script>
export default {
  async asyncData ({ params, app }) {
    const response = await app.$axios.$get('sample')

    return {
      sample: response.data
    }
  },
  data () {
    return {
      sample: {}
    }
  },
  mounted () {
    console.log('mounted')

    this.$axios.$get('sample')
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }
}
</script>
