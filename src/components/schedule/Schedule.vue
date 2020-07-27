<template>
<table id="schedule">
  <thead>
    <th>Week</th>
    <th>Date</th>
    <th>Lecture</th>
    <th>Notes</th>
    <th>Assignments</th>
  </thead>
  <tr v-for="(edge, i) in $static.weeks.edges" :key="edge.node.id">
    <td :rowspan="daysPerWeek" v-if="i % daysPerWeek == 0">{{ i / daysPerWeek + 1 }}</td>
    <td>{{ edge.node.date }}</td>
    <td>
      <LectureEntry
        :display="edge.node.topic"
        :link="edge.node.lecture"
       />
    </td>
    <td>
      <ScheduleEntry
        :data="$static.notes"
        prefix="notes"
        :link="edge.node.note"
        noLinkDisplay="-"
      />
    </td>
    <td>
      <ScheduleEntry
        :data="$static.homeworks"
        prefix="homeworks"
        :link="edge.node.homework"
        noLinkDisplay="No homework"
      />
      <br />
      <ScheduleEntry
        :data="$static.quizes"
        prefix="quizes"
        :link="edge.node.quiz"
        noLinkDisplay="No quiz"
      /><br />
      <ScheduleEntry
        :data="$static.projects"
        prefix="projects"
        :link="edge.node.project"
        noLinkDisplay=""
      />
    </td>
  </tr>
</table> 
</template>

<script>
import LectureEntry from '~/components/schedule/LectureEntry.vue'
import ScheduleEntry from '~/components/schedule/ScheduleEntry.vue'

export default {
  name: 'Schedule',
  props: [],
  data: function () {
    return {
      daysPerWeek: 2
    }
  },
  components: {
    LectureEntry,
    ScheduleEntry,
  },
}
</script>

<style>
#schedule {
  width: 100%;
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
</style>

<static-query>
query Schedule {
  metadata {
    siteName
    semester
  }

  weeks: allWeeks(sortBy: "date", order:ASC) {
    totalCount
    edges {
      node {
        id
        date (format: "YYYY-MM-DD")
        topic
        lecture
        homework
        note
        project
        quiz
      }
    }
  }
  
  notes: allNotes {
    edges {
      node {
        id
        date (format: "YYYY-MM-DD")
        title
        path
      }
    }
  }

  homeworks: allHomeworks {
    edges {
      node {
        id
        date (format: "YYYY-MM-DD")
        dueDate (format: "YYYY-MM-DD")
        title
        path
      }
    }
  }

  projects: allProjects {
    edges {
      node {
        id
        date (format: "YYYY-MM-DD")
        dueDate (format: "YYYY-MM-DD")
        title
        path
      }
    }
  }

  quizes: allQuizes {
    edges {
      node {
        id
        date (format: "YYYY-MM-DD")
        dueDate (format: "YYYY-MM-DD")
        title
        path
      }
    }
  }

}
</static-query>
