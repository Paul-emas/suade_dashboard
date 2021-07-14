<template>
  <aside>
    <nav class="sidebar">
      <div class="sidebar__logo">
        <img src="../assets/logo.png" alt="application logo" />
        <h1>Dutchboy</h1>
      </div>
      <div class="sidebar__content">
        <div class="sidebar__nav">
          <router-link
            v-for="(nav, index) in navigation"
            :key="index"
            :class="$route.name === nav.name ? 'active' : ''"
            :to="{ name: nav.name }"
          >
            <b-icon pack="fal" :icon="nav.iconName" size="is-medium" />
            <span class="caption">{{ nav.name }}</span>
          </router-link>
        </div>
        <div class="sidebar__user">
          <img src="../assets/Profile.jpg" alt="User profile image" />
          <div class="sidebar__user--details">
            <h2>Paul Emas</h2>
            <p>Paulemas02@gmail.com</p>
          </div>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      navigation: [
        {
          name: 'Dashboard',
          iconName: 'home',
        },
        {
          name: 'Users',
          iconName: 'users',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.sidebar {
  width: 256px;
  max-height: calc(100vh - 75px);
  min-height: 100%;
  position: fixed;
  background: #0b0f30;

  &__logo {
    height: 4rem;
    padding: 0.5rem 1.5rem;
    border-bottom: 1px solid #1453b180;
    border-right: 1px solid #1453b180;
    display: flex;

    & img {
      width: 3rem;
      height: 3rem;
    }

    & h1 {
      color: #fff;
      font-size: 1.5rem;
      line-height: 1.5;
      font-weight: 600;
      margin-top: 0.5rem;
      margin-left: 0.5rem;
      font-family: 'Raleway';
    }
  }

  &__user {
    padding: 0.8rem 1.5rem;
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    border-top: 1px solid #1453b180;

    & img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: linear-gradient(to bottom, #fc575e, #90d5ec);
      padding: 0.2rem;
    }

    &--details {
      position: relative;
      left: 1rem;

      & h2 {
        font-size: 1rem;
        font-weight: 700;
        color: #fff;
      }

      & p {
        font-size: 0.75rem;
        color: #fff;
      }
    }
  }

  &__nav {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    & .active {
      background-color: #334fb1;
      // border-left: 3px solid #fff;
      & i,
      span {
        color: #fff !important;
      }
    }

    & a {
      padding: 0.6rem 1rem;
      font-size: 14px;
      margin: 0 1rem;
      border-radius: 0.5rem;
      border-left: 3px solid transparent;

      & i {
        color: #fff;
      }

      & .caption {
        color: #ececec;
        margin-left: 0.4rem;
        font-weight: 600;
      }
    }
  }
}
</style>
