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
          "lecture": "https://www.youtube.com/watch?v=hXOZqo30wDI",
          "slides": "lecture5a.pdf",
          "homework": {
            display: "Homework 2",
            link: "hw2"
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
            display: "HTTP server",
            link: "http-server"
          },
        },
        {
          "date": "2020-09-22",
          "topic": "Finshing Golang",
          "lecture": "https://www.youtube.com/watch?v=q-iL6zJZqt8",
          "slides": "lecture6a.pdf",
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
            display: "JSON server",
            link: "json-server"
          },
        },
        {
          "date": "2020-09-24",
          "topic": "Introduction to Docker",
          "lecture": "https://www.youtube.com/watch?v=nuGZA6YKZho",
          "slides": "lecture7.pdf",
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
          "topic": "Introduction to Databases/SQL",
          "lecture": "https://www.youtube.com/watch?v=PEm4dCfRfr8",
          "slides": "lecture8.pdf",
          "homework": {
            display: "Homework 3",
            link: "hw3"
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
          "topic": "Project",
          "lecture": "https://www.youtube.com/watch?v=WKM6xb5Xwig",
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
          "topic": "Resume Workshop",
          "lecture": "https://www.youtube.com/watch?v=w3jKPuShDgs",
          "slides": "lecture10.pdf",
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
          "topic": "Guest Speaker: Ismail Azam, LinkedIn Workshop",
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
          "topic": "Microservices",
          "lecture": "https://www.youtube.com/watch?v=5dKQt4DEtlU",
          "slides": "lecture11.pdf",
          "homework": {
            display: "Project 1 Checkpoint",
            link: "hw4"
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
          "topic": "Codebase Walkthrough",
          "lecture": "https://www.youtube.com/watch?v=IzK_2Yq3-l4",
          "slides": "lecture12.pdf",
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
          "topic": "Web Security",
          "lecture": "https://www.youtube.com/watch?v=Qsdr3OnyM3I",
          "slides": "lecture13.pdf",
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
          "topic": "Guest Speaker: Amber Feng",
          "lecture": "",
          "slides": "lecture14a.pdf",
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
          "topic": "Guest Speaker: Greg Pavlik",
          "lecture": "https://www.youtube.com/watch?v=ss6kFwEI308",
          "slides": "lecture15.pdf",
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
          "topic": "SQL Injections and XSS",
          "lecture": "https://www.youtube.com/watch?v=47ncGrs3-30",
          "slides": "lecture16.pdf",
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
          "topic": "No class (Election day)",
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
          "topic": "Guest Speaker: Usman Muzaffar, Head of Engineering @ Cloudflare",
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
          "topic": "Kubernetes",
          "lecture": "https://www.youtube.com/watch?v=Uyhz1O4MfoY",
          "slides": "lecture19.pdf",
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
          "topic": "Functions as a Service (FaaS)",
          "lecture": "https://www.youtube.com/watch?v=5EDHW9tc6Ao",
          "slides": "lecture20.pdf",
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
          "topic": "Guest Speaker: Brian Cuadra, Recruiter @ Microsoft",
          "lecture": "https://www.youtube.com/watch?v=VRA4myYiGrM",
          "slides": "lecture21.pdf",
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
            display: "Setting up Amazon Neptune",
            link: "amazon-neptune"
          },
        },
        {
          "date": "2020-11-19",
          "topic": "(no class)",
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
            display: "Uploading BearChat to Amazon EC2",
            link: "amazon-ec2"
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
          "topic": "CI/CD and OpenAPI",
          "lecture": "https://www.youtube.com/watch?v=z4Tbgo3yUqU",
          "slides": "lecture22.pdf",
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
          "topic": "Guest Speaker: Jun Zhou, Cloud Engineer, Intro to Terraform",
          "lecture": "https://www.youtube.com/watch?v=YZtevB6DAVI",
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
            display: "Deploying BearChat frontend",
            link: "amazon-frontend"
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
