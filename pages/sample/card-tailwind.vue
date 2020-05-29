<template>
  <section class="flex justify-center items-center">
    <div class="card flex rounded">
      <div class="card-left flex flex-col justify-between rounded p-6 items-center text-center text-white">
        <a href="#" class="card-skill-button">PHP</a>

        <img src="https://laracasts.com/images/series/2018/testing-jargon.svg" alt="Laracasts tooling">

        <span class="card-difficulty">Intermediate difficulty</span>
      </div>

      <div class="card-right flex flex-col justify-between text-grey-darker">
        <div class="card-title">
          <a href="#">Testing Jargon</a>
        </div>

        <p>
          There's no two ways about it:
          terminology in the testing world
          is incredibly overwhelming.
          Let's fix that!
          Bit by bit, we'll break all of these
          confusing concepts down
          as best as we can.
        </p>

        <div class="card-meta flex">
          <div class="flex items-center mr-2">
            <img src="https://laracasts.com/images/icons/books.svg" class="mr-2">
            5 lessons
          </div>

          <div class="flex items-center mr-2">
            <img src="https://laracasts.com/images/icons/clock.svg" class="mr-2">
            53:10 min
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
    html,
    body {
        height: 100%;
        font-family: "Open Sans", sans-serif;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
        width: 475px;
        height: 258px;
    }

    .card-left {
        background: red;
        background: linear-gradient(to bottom, #21c8f6, #637bff);

        margin-right: 20px;
    }

    .card-left, .card-right {
        padding: 20px;
    }

    .card-skill-button {
        background: rgba(0, 0, 0, 0.4);
        color: inherit;
        text-decoration: none;
        font-size: 0.7em;
        padding: 3px 10px;
        border-radius: 9999px;
    }

    .card-right {

    }

    .card-right > p {
        flex: 1;
    }

    .card-difficulty {
        color: white;
        font-size: 0.8em;
    }

    .card-title {
        color: #222;
        font-size: 1.7em;
        font-weight: 600;
        margin-top: 0.5em;
    }

    .card-title > a {
        color: inherit;
        text-decoration: none;
    }

    .card-meta {
        font-size: 0.8 em;
    }

    .card-meta > div:first-child {

    }

    .card-meta > div {
    }
</style>

<script>
export default {
  layout: 'tailwind'
}
</script>
