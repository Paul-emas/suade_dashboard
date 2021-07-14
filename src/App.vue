<template>
  <div id="app">
    <Sidebar />
    <main class="main">
      <Searchbar />
      <div class="content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Searchbar from '@/components/Searchbar.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
    Searchbar,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  position: fixed;
  display: flex;
  overflow-y: auto;
  width: 100%;
  font-family: 'Raleway', sans-serif;

  & .main {
    background: #fff;
    height: 30rem;
    width: 100%;
    height: 100vh;
    padding-left: 16rem;

    & .content {
      padding: 1.5rem 1rem;
    }
  }
}
</style>
