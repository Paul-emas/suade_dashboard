<template>
  <section class="tables">
    <div class="columns">
      <div class="column">
        <h1 class="title is-5">
          <b-icon pack="fa" icon="users" />
          <span>Users</span>
        </h1>
      </div>
      <div class="column column__left">
        <b-field>
          <b-select v-model="perPage" placeholder="10">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </b-select>
        </b-field>
      </div>
    </div>
    <b-table
      :data="data"
      :current-page.sync="currentPage"
      :sort-icon="iconType"
      :sort-icon-size="iconSize"
      striped
      mobile-cards
      paginated
      :per-page="perPage"
      :loading="isLoading"
    >
      <b-table-column label="ID" width="60" numeric v-slot="props">
        {{ data.indexOf(props.row) + 1 }}
      </b-table-column>

      <b-table-column searchable field="name" label="Full Name" sortable v-slot="props">
        {{ props.row.name }}
      </b-table-column>

      <b-table-column field="age" label="Ages" sortable searchable v-slot="props">
        {{ props.row.age }}
      </b-table-column>

      <b-table-column field="eyeColor" label="Eye color" sortable searchable v-slot="props">
        {{ props.row.eyeColor }}
      </b-table-column>

      <b-table-column field="gender" label="Gender" searchable v-slot="props">
        {{ props.row.gender }}
      </b-table-column>

      <b-table-column field="preferences.pet" label="Pet" searchable sortable v-slot="props">
        {{ props.row.preferences.pet }}
      </b-table-column>

      <b-table-column field="preferences.fruit" label="Fruit" searchable sortable v-slot="props">
        {{ props.row.preferences.fruit }}
      </b-table-column>

      <b-table-column width="100" v-slot="props">
        <span @click="editData(props)">
          <b-icon pack="fa" icon="edit" />
          Edit
        </span>
      </b-table-column>

      <template #empty>
        <div class="has-text-centered">No records</div>
      </template>
    </b-table>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Array,
    },
    isLoading: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentPage: 1,
      perPage: 10,
      iconSize: '16',
      iconType: 'arrow-up',
    };
  },
  //   computed() {
  //       ...map
  //   }
  methods: {
    editData(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss">
.content li {
  margin-top: 0 !important;
}

.select select {
  border: 2px solid #0b0f30 !important;
  color: #0b0f30 !important;
  font-weight: 600;
  border-radius: 0.8rem;
  font-family: 'Raleway';
  outline: none !important;
}

.tables {
  padding: 1rem 0;
  filter: drop-shadow(0px 6px 18px rgba(0, 0, 0, 0.06));

  & h1 {
    background-color: #fff;
    max-width: 8rem;
    border-radius: 0.8rem;
    padding: 0.5rem 0;
    text-align: center;
    border: 2px solid #0b0f30;
    color: #0b0f30 !important;
    filter: drop-shadow(0px 6px 18px rgba(0, 0, 0, 0.06));

    & i {
      margin-right: 0.4rem;
    }
  }

  & .columns {
    & .column__left {
      display: flex;
      justify-content: flex-end;
    }
  }

  & tr {
    text-transform: capitalize;
  }

  & .pagination-list {
    margin: 0 auto !important;
  }

  & .pagination-link.is-current {
    background-color: #0b0f30 !important;
    border-color: #fff !important;
    margin-top: 0.2rem;
  }
}
</style>
