module.exports = {
  siteName: "Cloud Computing Decal",
  siteUrl: 'https://calcloud.org',
  pathPrefix: "",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Announcements",
        baseDir: "content",
        path: "announcements/*.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Homeworks",
        baseDir: "content",
        path: "homeworks/*/index.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Notes",
        baseDir: "content",
        path: "notes/*/index.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Projects",
        baseDir: "content",
        path: "projects/*/index.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Quizes",
        baseDir: "content",
        path: "quizes/*/index.md"
      }
    },
  ],
  transformers: {
    remark: {
      plugins: [
        'gridsome-remark-katex',
        'gridsome-plugin-remark-prismjs-all',
      ]
    }
  }
}
