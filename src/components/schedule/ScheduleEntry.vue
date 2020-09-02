<template>
  <g-link :to="prefixedLink" v-if="link">{{ display }}</g-link>
  <span v-else>{{ noLinkDisplay }}</span>
</template>

<script>
export default {
  name: 'ScheduleEntry',
  props: ['display', 'prefix', 'link', 'noLinkDisplay'],
  data: function () { return {}; },
  computed: {
    prefixedLink: function() {
      return "/" + this.prefix + "/" + this.link + "/"
    }
  }
}
</script>

