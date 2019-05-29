<template>
  <div class="profile-page">


  </div>
</template>

<script>

export default {
  name: "ProfileStatistics",
  computed: {
    favorited() {
      return this.$route.params.username;
    }
  }
};
</script>
