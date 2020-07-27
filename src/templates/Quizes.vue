<template>
  <Layout>
      <h1>{{ $page.quizes.title }}</h1>
      <h3> Due: {{ $page.quizes.dueDate }} @ 11:59 PM </h3>
      <nav class="content" v-html="$page.quizes.content" />
  </Layout>
</template>

<page-query>
query Quiz ($path: String!) {
   quizes: quizes (path: $path) {
    title
    content
    date (format: "YYYY-MM-DD")
    dueDate (format: "MMMM DD YYYY")
  }
}
</page-query>
