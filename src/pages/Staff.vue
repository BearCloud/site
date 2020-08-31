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
          img: "ari_rigan.png",
          name: "Ari Rigan",
          title: "Instructor",
          blurb: "Hey everyone! I'm Ari (he/him/his) and I'm in my 3rd year of eecs. I love all things computer security and cloud computing related so feel free to ask me anything if you want to get more involved in these fields! Outside of the classroom, I like to dance, produce lofi, play guitar, and make memes. Reach out if you want to jam or make quarantine memes"
        },
        {
          id: 1,
          img: "shane_fan.jpg",
          name: "Shane Fan",
          title: "Instructor",
          blurb: "Hi all! My name is Shane (he/him/his), and I’m a 4th year studying CS and English. I’m very into startup culture, and I have some experience managing startups, so if you are into any of that, don’t hesitate to reach out! Besides school, I like rock climbing, playing the piano, and playing chess.",
        },
        {
          id: 2,
          img: "cyrus_bugwadia.jpg",
          name: "Cyrus Bugwadia",
          title: "Course Staff",
          blurb: "I'm Cyrus (he/him/his) and I'm a second-year intending to major in Computer Science. Outside of the \"classroom\" (more like meeting room), catch me watching all things sports related, attempting and failing to make all kinds of recipes, and answering Piazza questions.",
        },
        {
          id: 3,
          img: "jie_luo.jpeg",
          name: "Jie Luo",
          title: "Course Staff",
          blurb: "4th year CS + Mathematics",
        },
        {
          id: 4,
          img: "sumer_kohli.jpg",
          name: "Sumer Kohli",
          title: "Course Staff",
          blurb: "Hey everyone! I’m a 3rd year EECS major who loves systems/distributed programming, AI/ML, and cybersecurity. I love cloud computing, with tons of cloud development experience from past internships. In my free time, I love developing side projects (check out <a href=\"http://symbolic-differentiator.web.app\">http://symbolic-differentiator.web.app</a> if you get the chance!). Also, reach out to me for fun quarantine game ideas!",
        },
        {
          id: 5,
          img: "ryan_searcy.jpg",
          name: "Ryan Searcy",
          title: "Course Staff",
          blurb: "Hi! I'm a 4th year EECS major (you may have had me as a 61C TA also hehe), I love to dance, cook, and make cocktails! fun fact: I directed the dance teams of two other members of course staff",
        },
        {
          id: 6,
          img: "default-1.png",
          name: "Smit Rajyaguru",
          title: "Course Staff",
          blurb: "",
        },
        {
          id: 7,
          img: "vanshaj_singhania.jpg",
          name: "Vanshaj Singhania",
          title: "Course Staff",
          blurb: "Hello hello! My name's VS (he/him/his), and I'm a sophomore studying Computer Science & Data Science. When I'm not studying or teaching (currently a tutor for 61A!), I'm likely flying around in a flight simulator or starting yet another side project. Either way, there's probably music playing in the background (<a href=\"http://imvs.me/s/sp-m\">imvs.me/s/sp-m</a>)!",
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
