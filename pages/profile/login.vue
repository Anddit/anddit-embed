<template>
  <div class="w-full max-w-xs flex items-center justify-center">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="signin">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">Email</label>
        <input
          id="username"
          v-model="form.email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="email"
        >
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">Password</label>
        <input
          id="password"
          v-model="form.password"
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="******************"
        >
        <p class="text-red text-xs italic">
          Please enter a password.
        </p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="#"
        >Forgot Password?</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'bulma',
  data: () => ({ form: { email: '', password: '' } }),
  methods: {
    async signin () {
      await this.$auth.loginWith('local', {
        data: this.form
      })

      this.$router.replace({ name: 'index' })
    }
  }
}
</script>
