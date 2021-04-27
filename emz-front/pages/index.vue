<template>
  <div class="container">
    <div>
      <h1 class="mb-5">
        Weocome to EMZ
      </h1>
      <NuxtLink class="btn px-5 py-2 bg-red-500 text-white" to="/login">Login</NuxtLink>
      <NuxtLink class="btn px-5 py-2 bg-green-500 text-white" to="/register">Register</NuxtLink>

      <hr class="my-5"/>

      <div v-if="this.$auth.loggedIn">
        Welcome: {{ this.$auth.user.fullName }}
        <NuxtLink class="btn px-5 py-2 bg-green-500 text-white" to="/user/dashboard">Got to Dashboard</NuxtLink>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  components: {
    
  }
}
</script>

<style>

</style>
