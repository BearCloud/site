<template>
  <Layout>
      <h1>{{ $page.notes.title }}</h1>
      <h3> {{ $page.notes.date }}</h3>
      <div class="content" v-html="$page.notes.content" />
  </Layout>
</template>

<page-query>
query Note ($path: String!) {
   notes: notes (path: $path) {
    title
    content
    date (format: "YYYY-MM-DD")
  }
}
</page-query>
