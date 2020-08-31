<template>
  <nav class="layout">
    <ResponsiveNav />
    <slot />
    <nav class="blank" />
    <hr />
    <p>
      We are a student group acting independently of the University of California. We take full responsibility for our organization and this website.
    </p>
    <footer class="footer">
      <g-image src="~/assets/GitHub-Mark-32px.png" /><a class="github-link" href="https://github.com/BearCloud/site">Website Repository</a>
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
