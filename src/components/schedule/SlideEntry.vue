<template>
  <g-link :to="link" v-if="link">{{ display }}</g-link>
</template>

<script>
export default {
  name: 'LectureEntry',
  props: ['display', 'link'],
  data: function () { return {}; }
}
</script>
