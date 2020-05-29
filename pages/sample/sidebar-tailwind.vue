<template>
  <main>
    <section class="min-h-screen flex">
      <div class="min-h-screen flex-none pt-header min-h-screen w-sidebar bg-grad-sidebar px-6">
        <div class="absolute pin-t pin-l pin-r bg-logo flex items-center w-sidebar h-header px-6 text-white">
          <svg
            width="126"
            height="32"
            viewBox="0 0 126 24"
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current"
          >
            <g fill="#fff">
              <path d="M19 26.2l-2.4-2.5c-.8.9-1.8 1.6-3 2.1-1.2.6-2.7.8-4.4.8-1.2 0-2.3-.2-3.4-.5s-2.1-.8-2.9-1.4c-.9-.6-1.5-1.4-2.1-2.4-.5-.8-.8-1.9-.8-3.2 0-.9.1-1.7.4-2.4.3-.7.7-1.4 1.2-2s1.1-1.1 1.7-1.5c.6-.4 1.3-.8 2-1.1-.8-.8-1.4-1.6-1.9-2.5-.5-.9-.7-1.9-.7-3 0-1.2.2-2.1.7-3 .5-.8 1.1-1.5 1.9-2C6 1 6.9.6 7.8.4c1-.3 1.9-.4 2.9-.4s1.9.1 2.8.4c.9.2 1.8.6 2.5 1.1.7.5 1.3 1.2 1.8 2s.7 1.8.7 2.9c0 .8-.1 1.6-.4 2.2-.3.7-.6 1.3-1.1 1.8-.5.5-1 1-1.6 1.5-.6.4-1.3.8-2 1.2l3.2 3.3 2.6-3.9h6.6l-5.5 7.4 6.3 6.3H19zM8.6 15.4c-.7.3-1.3.7-1.9 1.2-.5.5-.8 1.3-.8 2.2 0 .5.1 1 .3 1.4.2.4.5.7.8 1s.7.5 1.1.6.8.2 1.3.2c.8 0 1.5-.2 2.1-.5.6-.3 1.2-.8 1.6-1.4l-4.5-4.7zm4.5-8.7c0-.6-.2-1.2-.6-1.7-.4-.5-1-.7-1.8-.7-.7 0-1.2.2-1.7.7-.5.4-.7 1-.7 1.7 0 .6.2 1.2.5 1.7.3.6.8 1.1 1.4 1.6.8-.3" />
            </g>
            Hope Portal
          </svg>
        </div>
      </div>

      <div class="flex-1 bg-blue text-white">
        Main content area
      </div>
    </section>
  </main>
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
