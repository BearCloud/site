<template>
  <nav class="header">
    <nav class="header-logo">
      <g-link to="/"><g-image class="logo" src="~/assets/logo.png" /></g-link>
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="grow"></nav>
      <a href="javascript:void(0);" class="show-menu" v-on:click="showMenu()">
        ☰
      </a>
    </nav>
    <nav class="nav_link_holder" id="nav_link_holder" ref="nav_link_holder">
      <g-link class="nav__link" to="/announcements/">Announcements</g-link>
      <g-link class="nav__link" to="/staff/">Course Staff</g-link>
      <g-link class="nav__link" to="/resources/">Resources</g-link>
      <g-link class="nav__link" to="/policies/">Policies</g-link>
      <a class="nav__link" href="https://piazza.com/class/">Piazza</a>
    </nav>
  </nav>
</template>

<script>
export default {
  name: 'ResponsiveNav',
  methods: {
    showMenu: function() {
      var x = this.$refs.nav_link_holder;
      if (x.className === "nav_link_holder") {
        x.className += " responsive";
      } else {
        x.className = "nav_link_holder";
      }
    },
  }
}
</script>

<style>
.logo {
  width: 64px;
  margin-right: 30px;
  height: auto;
}

.header-logo {
  font-size: 18px;
  display: flex;
  align-items: center;
  flex-basis: auto;
}

.header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 20px;
  min-height: 100px;
  width: 100%;
}

.nav_link_holder {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.nav__link {
  font-size: 18px;
  margin-left: 10px;
  display: block;
  text-align: center;
  white-space: nowrap;
}

.show-menu {
  font-size: 48px;
  display: none;
}

.grow {
  flex-grow: 0;
}

@media screen and (max-width: 830px) {
  .grow {
    flex-grow: 1;
  }
  .nav_link_holder {
    display: none;
  }
  .header .show-menu {
    display: block;
    min-height: 100px;
  }
  .header-logo {
    flex-basis: 100%;
  }
}
@media screen and (max-width: 830px) {
  .nav_link_holder.responsive {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    width: 100%;
  }
  .nav_link_holder.responsive .show-menu {
    position: absolute;
    right: 0px;
  }
  .nav_link_holder.responsive a.nav__link {
    display: block;
  }
} 

</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
