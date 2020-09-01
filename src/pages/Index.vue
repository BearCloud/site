<template>
  <Layout>
    <h1>{{ $page.metadata.siteName }}</h1>
    <h3>{{ $page.metadata.semester }}</h3>
    <nav class="card" v-for="edge in $page.announcements.edges" :key="edge.node.id">
      <AnnouncementHolder 
        :title="edge.node.title" 
        :date="edge.node.date"
        :content="edge.node.content"
      />
    </nav>
    <br />
    <p>
      Lectures are on Tuesdays and Thursdays, 7:00 PM - 8:00 PM (PT)
    </p>
    <br />
    <Schedule />

  </Layout>
</template>

<page-query>
query Home {
  metadata {
    siteName
    semester
  }

	announcements: allAnnouncements(sortBy: "date", order:DESC, limit:1) {
    edges {
			node {
        id
        title
        date (format: "YYYY-MM-DD")
        content
        path
      }
    }
  }
}
</page-query>

<script>
import AnnouncementHolder from '~/components/AnnouncementHolder.vue'
import Schedule from '~/components/schedule/Schedule.vue'

export default {
  metaInfo: {
    title: 'Home',
  },
  components: {
    AnnouncementHolder,
    Schedule
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.card {
  padding: 20px;
  background: #FFF;
  border-style: solid;
  border-width: 2px;
}
</style>
