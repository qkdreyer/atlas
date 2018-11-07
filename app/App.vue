<template>
  <Page/>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$navigateTo(this._.get(this.$routes, this.get('logged_in') ? 'Tabs' : 'LoginView'), {
        clearHistory: true
      });
    });
  }
};
</script>
