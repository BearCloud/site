<template>
<div id="schedule-wrapper">
  <table id="schedule">
    <colgroup>
       <col span="1" style="width: 6%;">
       <col span="1" style="width: 15%;">
       <col span="1" style="width: 40%;">
       <col span="1" style="width: 13%;">
       <col span="1" style="width: 13%;">
       <col span="1" style="width: 13%;">
    </colgroup>
    <thead>
      <tr>
        <th>Week</th>
        <th>Date</th>
        <th>Lecture</th>
        <th>Slides</th>
        <th>Assignments</th>
        <th>Resources</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, i) in schedule">
        <td class="schedule-week" :rowspan="daysPerWeek" v-if="i % daysPerWeek == 0">{{ i / daysPerWeek + 1 }}</td>
        <td>{{ entry.date }}</td>
        <td>
          <nav class="schedule-table-cell">
            <LectureEntry
              :display="entry.topic"
              :link="entry.lecture"
             />
           </nav>
        </td>
        <td>
          <SlideEntry
            display="Slides"
            :link="entry.slides"
          />
        </td>
        <td>
          <ScheduleEntry
            :display="entry.homework.display"
            prefix="homeworks"
            :link="entry.homework.link"
            noLinkDisplay=""
          />
          <br />
          <ScheduleEntry
            :display="entry.quiz.display"
            prefix="quizes"
            :link="entry.quiz.link"
            noLinkDisplay=""
          /><br />
          <ScheduleEntry
            :display="entry.project.display"
            prefix="projects"
            :link="entry.project.link"
            noLinkDisplay=""
          />
        </td>
        <td>
          <ScheduleEntry
            :display="entry.note.display"
            prefix="notes"
            :link="entry.note.link"
            noLinkDisplay=""
          />
        </td>
      </tr>
    </tbody>
  </table> 
</div>
</template>

<script>
import LectureEntry from '~/components/schedule/LectureEntry.vue'
import ScheduleEntry from '~/components/schedule/ScheduleEntry.vue'
import SlideEntry from '~/components/schedule/SlideEntry.vue'

export default {
  name: 'Schedule',
  props: [],
  data: function () {
    return {
      daysPerWeek: 2,
      schedule: [
        {
          "date": "2020-09-01",
          "topic": "Cloud Computing and SaaS Overview - \"Map of the World\"",
          "lecture": "https://www.youtube.com/watch?v=4su_buUTpic&list=PLV_GF_qHLYJbwHWJvYR333FPL025k68OS",
          "slides": "lecture_1.pdf",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-09-03",
          "topic": "Git, Unix Command Line, Text Editors",
          "lecture": "https://www.youtube.com/watch?v=uMfihYPfnMo",
          "slides": "lecture_2.pdf",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "Terminal and Git",
            link: "cheatsheet1"
          },
        },
        {
          "date": "2020-09-08",
          "topic": "Web Dev / HTTP API",
          "lecture": "https://www.youtube.com/watch?v=Kyxos2PSXQg",
          "slides": "lecture_3.pdf",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-09-10",
          "topic": "Introduction to Golang",
          "lecture": "https://www.youtube.com/watch?v=DZLa2mavdqA",
          "slides": "lecture_4.pdf",
          "homework": {
            display: "Homework 1",
            link: "hw1"
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-09-15",
          "topic": "Guest Speaker: Raju Malhotra, CTO @ Punchh",
          "lecture": "https://www.youtube.com/watch?v=w2Ck0j6pvS4",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-09-17",
          "topic": "Golang",
          "lecture": "lecture5.pdf",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-09-22",
          "topic": "Introduction to Databases/SQL",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-09-24",
          "topic": "Project",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-09-29",
          "topic": "Resume Workshop",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-10-01",
          "topic": "LinkedIn Workshop",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-10-06",
          "topic": "Cloud Deployments",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-10-08",
          "topic": "Continuous Integration/Continuous Deployment",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-10-13",
          "topic": "Overview of Web Security",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-10-15",
          "topic": "Basic Auth System Design",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-10-20",
          "topic": "Guest Speaker",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-10-22",
          "topic": "Guest Speaker",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-10-27",
          "topic": "Microservices",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-10-29",
          "topic": "Kuberenetes",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-11-03",
          "topic": "Functions as a Service",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-11-05",
          "topic": "Guest Speaker",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-11-10",
          "topic": "Miscellaneous Topics",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-11-12",
          "topic": "Miscellaneous Topics",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-11-17",
          "topic": "Miscellaneous Topics",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-11-19",
          "topic": "Miscellaneous Topics",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-11-24",
          "topic": "Thanksgiving Break",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-11-26",
          "topic": "Thanksgiving Break",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-12-01",
          "topic": "Miscellaneous Topics",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        },
        {
          "date": "2020-12-03",
          "topic": "Miscellaneous Topics",
          "lecture": "",
          "slides": "",
          "homework": {
            display: "",
            link: ""
          },
          "project": {
            display: "",
            link: ""
          },
          "quiz": {
            display: "",
            link: ""
          },
          "note": {
            display: "",
            link: ""
          },
        }
      ]
    }
  },
  components: {
    LectureEntry,
    ScheduleEntry,
    SlideEntry,
  },
}
</script>

<style>
#schedule-wrapper {
  overflow-x: auto;
}
#schedule {
  table-layout: fixed;
  width: 100%;
  min-width: 630px;
  border-collapse: collapse;
}
#schedule td {
  text-align: center;
  vertical-align: middle;
  padding: 5px;
}
#schedule, #schedule th, #schedule td {
  border: 1px solid black;
}
#schedule th {
  font-weight: bold;
}
.schedule-table-cell {
  display: inline-block;
  text-align: center;
  margin: 10px;
}
</style>

<static-query>
query Schedule {
  metadata {
    siteName
    semester
  }
}
</static-query>
