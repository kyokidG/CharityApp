<template>
  <footer>
    <div class="container">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        CharityApp
      </router-link>

      <span class="attribution">
        O aplicatie interactiva de gestionat evenimente de caritate 🎗
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "RwvFooter"
};
</script>
