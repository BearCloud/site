<template>
  <nav class="staff-card-holder">
    <g-image class="staff-image" :src="require('!!assets-loader!~/assets/staff/' + img)" />
    <nav class="staff-text">
      <h2>{{ name }}</h2>
      <h4>{{ title }}</h4>
      <p>{{ blurb }}</p>
    </nav>
  </nav>
</template>

<script>
export default {
  name: 'StaffCard',
  props: ['img', 'name', 'title', 'blurb'],
  data: function () { return {}; }
}
</script>

<style>
.staff-card-holder {
  display: flex;
  align-items: center;
  width: 100%;
}
.staff-image {
  display: block;
  min-width: 128px;
  max-width: 128px;
  height: auto;
  margin-left: 30px;
  margin-right: 30px;
}
.staff-text {
}
</style>
