<template>
  <Page/>
</template>

<script>
import LoginView from '@/views/auth/login-view';
import Tabs from '@/views/layout/tabs';

export default {
  mounted() {
    this.$nextTick(() => {
      this.$navigateTo(this.get('logged_in') ? Tabs : LoginView, {
        clearHistory: true
      });
    });
  }
};
</script>
