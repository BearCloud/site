<template>
  <a :href="link" v-if="link">{{ display }}</a>
  <span v-else>{{ display }}</span>
</template>

<script>
export default {
  name: 'LectureEntry',
  props: ['display', 'link'],
  data: function () { return {}; }
}
</script>
