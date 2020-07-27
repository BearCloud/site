<template>
  <nav class="layout">
    <ResponsiveNav />
    <slot />
    <nav class="blank" />
    <hr />
    <footer class="footer">
      <g-image src="~/assets/GitHub-Mark-32px.png" /><a class="github-link" href="https://github.com/BerkeleyCloudComputingDecal/BerkeleyCloudComputingDecal.github.io">Website Repository</a>
    </footer>
  </nav>
</template>

<script>
import ResponsiveNav from '~/components/ResponsiveNav.vue'

export default {
  components: {
    ResponsiveNav
  },
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

.layout {
  max-width: 900px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.blank {
  min-height: 30px;
}

.footer {
  display: flex;
  align-items: center;
  margin: 30px;
}
.github-link {
  font-size: 18px;
  margin-left: 10px;
  text-align: center;
}
</style>
