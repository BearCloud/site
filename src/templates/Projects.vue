<template>
  <Layout>
      <h1>{{ $page.projects.title }}</h1>
      <h3> Due: {{ $page.projects.dueDate }} @ 11:59 PM </h3>
      <nav class="content" v-html="$page.projects.content" />
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
   projects: projects (path: $path) {
    title
    content
    date (format: "YYYY-MM-DD")
    dueDate (format: "MMMM DD YYYY")
  }
}
</page-query>
