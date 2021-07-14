<template>
  <div class="search" @submit="search">
    <form class="search__container">
      <!-- <b-icon pack="fal" icon="search" size="is-medium" /> -->
      <!-- <input
        class="search__container--input"
        @change="search"
        v-model="query"
        type="text"
        placeholder="Search for something"
      /> -->
      <b-icon pack="fal" icon="bell" size="is-medium" />
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      query: '',
    };
  },
  methods: {
    ...mapMutations({
      searchUserQuery: 'users/filterData',
    }),

    search(e) {
      e.preventDefault();
      this.searchUserQuery(this.query);
    },
  },
};
</script>

<style lang="scss">
.search {
  width: 100%;
  position: sticky;
  height: 4rem;
  border-bottom: 1px solid #1453b180;
  background: #0b0f30;
  display: flex;
  align-items: center;

  &__container {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 1rem;
    justify-content: space-between;

    & i {
      color: #fff !important;
    }

    // &--input {
    //   width: 94%;
    //   padding: 0.8rem 1.2rem;
    //   border: none;
    //   outline: none;
    //   border-radius: 0.5rem;
    //   background-color: #0b0f30;
    //   color: #fff;
    //   font-size: 1rem;
    //   font-family: 'Raleway';
    //   border: 1px solid #0b0f30;

    //   &:focus {
    //     border: 1px solid #334fb1;
    //   }

    //   &::placeholder {
    //     color: #fff;
    //   }
    // }
  }
}
</style>
