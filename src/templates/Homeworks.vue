<template>
  <Layout>
      <h1>{{ $page.homeworks.title }}</h1>
      <h3> Due: {{ $page.homeworks.dueDate }} @ 11:59 PM </h3>
      <nav v-html="$page.homeworks.content" />
  </Layout>
</template>

<page-query>
query Homework ($path: String!) {
   homeworks: homeworks (path: $path) {
    title
    content
    date (format: "YYYY-MM-DD")
    dueDate (format: "MMMM DD YYYY")
  }
}
</page-query>
