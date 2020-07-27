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
      The popularity of Cloud Computing and Saas has gained significant traction over the past few years and the demand for experienced engineers in the field is ever-increasing. The Cloud Computing and SaaS Decal aims to bridge the gap between traditional computer science coursework and hands-on experience in the software industry. This course takes a very practical and hands-on approach to learning, with the mini-projects being the primary tools for reinforcing lecture content. This course is designed to serve as a complement to popular software application oriented courses such as CS162, CS186, and CS169.
    </p>
    <p>
      The course will begin by covering the general definitions of cloud computing and software as a service. There will be workshops for essential tools such as Git, the command line, Docker, Kubernetes, etc. We will also be inviting many guest speakers/lecturers that currently work in industry to speak about their knowledge and provide a practical demonstration. The mini-projects cumulate into one final project that encompasses a full-stack web application that runs in the cloud.
    </p>
    <p>
      Students will learn to set up and use essential technologies and elements of cloud computing and SaaS, including designing software that runs as a service in the cloud. Students will be expected to follow course instructions and documentation to implement basic databases and backend services in the cloud. Students are expected to develop knowledge in the prominent cloud computing service providers such as AWS, Azure, and GCP and develop fluency in their fundamental service offerings. As a result, they will be better familiarized with common tools and concepts used heavily in industry and will be better prepared for industry interviews, internships, and full-time jobs.
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
