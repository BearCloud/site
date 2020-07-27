module.exports = function (api) {
  api.loadSource(({ addMetadata }) => {
    addMetadata('semester', 'Fall 2020')
  })

  api.loadSource(({ addCollection }) => {
    const Schedule = require('./content/schedule.json');
    const collection = addCollection({
      typeName: 'Weeks'
    })
    for (const week of Schedule) {
      collection.addNode(week);
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
