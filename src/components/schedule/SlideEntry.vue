<template>
  <a :href="link" v-if="link">{{ display }}</a>
</template>

<script>
export default {
  name: 'SlideEntry',
  props: ['display', 'link'],
  data: function () { return {}; }
}
</script>
