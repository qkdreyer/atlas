<template>
  <Page>
    <ActionBar title="Atlas" android:flat="true"/>
    <TabView
      android:tab-background-color="#53ba82"
      android:tab-text-color="#c4ffdf"
      android:selected-tab-text-color="#ffffff"
      android-selected-tab-highlight-color="#ffffff"
    >
      <TabViewItem title="Home">
        <HomeTabView />
      </TabViewItem>
      <TabViewItem title="Settings">
        <SettingsTabView />
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script>
  import HomeTabView from '@/views/home/home-tab-view';
  import SettingsTabView from '@/views/settings/settings-tab-view';

  export default {
    components: {
      HomeTabView,
      SettingsTabView,
    },
  };
</script>

<style scoped>
  ActionBar {
    background-color: #53ba82;
    color: #ffffff;
  }

  /deep/ .message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
  }
</style>
