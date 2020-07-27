<template>
  <Layout>
    <h1>Staff</h1>
    <nav>
      <StaffCard
        v-for="person in staff"
        class="staff-card"
        :key="person.id"
        :img="person.img"
        :name="person.name"
        :title="person.title"
        :blurb="person.blurb"
      />
    </nav>
  </Layout>
</template>

<script>
import StaffCard from '~/components/StaffCard.vue'

export default {
  metaInfo: {
    title: 'Staff Page'
  },
  components: {
    StaffCard
  },
  data: function () {
    return {
      staff: [
        { 
          id: 0,
          img: "default-1.png",
          name: "First Last",
          title: "Title",
          blurb: "https://github.blog/2013-08-14-identicons/"
        },
        {
          id: 1,
          img: "default-2.png",
          name: "First Last",
          title: "Title",
          blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    }
  },
}
</script>

<style>
.staff-card {
  margin-bottom: 10px;
}
</style>
