<template>
  <g-link :to="prefixedLink" v-if="link">{{ displayText }}</g-link>
  <span v-else>{{ noLinkDisplay }}</span>
</template>

<script>
export default {
  name: 'ScheduleEntry',
  props: ['data', 'prefix', 'link', 'noLinkDisplay'],
  data: function () { return {}; },
  computed: {
    displayText: function() {
      if (this.link == "") {
        return this.noLinkDisplay;
      }
      for (var i = 0; i < this.data.edges.length; i += 1) {
        var node = this.data.edges[i].node;
        var q = node.path;
        if ("/" + this.prefix + "/" + this.link + "/" == q) {
          var dueText = ""
          if (node.dueDate) {
            dueText = " (due " + node.dueDate + ")"
          }
          return this.data.edges[i].node.title + dueText;
        }
      }
    },
    prefixedLink: function() {
      return "/" + this.prefix + "/" + this.link + "/"
    }
  }
}
</script>

