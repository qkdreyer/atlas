<template>
  <GridLayout columns="*" rows="*">
    <StackLayout>
      <Label
        text="Home"
        class="message"
        col="0"
        row="0"
      />
      <ActivityIndicator busy="true" @busyChange="onBusyChanged" height="100" />
      <Button text="Logout" @tap="onTaped" />
    </StackLayout>
  </GridLayout>
</template>

<script>
  export default {
    name: 'HomeTabView',
    methods: {
      onTaped() {
        this.remove('logged_in');
        this.$navigateTo(this.$routes.LoginView, {
          clearHistory: true,
        });
      },
      onBusyChanged(event) {
        this.log('onBusyChanged', event);
      },
    }
  };
</script>

<style scoped>
</style>
