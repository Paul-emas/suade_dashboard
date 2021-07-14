<template>
  <div class="about">
    <Table :data="data" :isLoading="loading" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Table from '../components/Table.vue';

export default {
  components: { Table },
  mounted() {
    if (!this.data.length) {
      this.getUsers();
    }
  },
  computed: {
    ...mapGetters({
      data: 'users/users',
      loading: 'users/loading',
    }),
  },
  methods: {
    ...mapActions({
      getUsers: 'users/fetchAllUsers',
    }),
  },
};
</script>
