<template>
  <nav class="announcement-holder">
    <h2> {{ title }} </h2>
    <h4> {{ date }} </h4>
    <nav class="content" v-html=content />
  </nav>
</template>

<script>
export default {
  name: 'AnnouncementHolder',
  props: ['title', 'date', 'content'],
  data: function () { return {}; }
}
</script>

<style>
.announcement-holder {

}
</style>
