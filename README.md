# Cloud Computing Decal

https://calcloud.org/

Requires NodeJS@12 and npm@6

Run

```
 $ npm install --global @gridsome/cli
 $ npm install
```

To develop:

```
 $ npm run develop
```

To deploy:

```
 $ npm run deploy
```

TODO:
  - Set up multiple-semester build script using repo branches and/or Github repository settings
  
NOTES:
  - `schedule.json`'s lecture (and only lecture) is a **direct link**. Other links are **relative to their directory**. For example, if the `homework` field is `sample`, it will link to `homeworks/sample`.
  - Nothing in `schedule.json` can be a complex data structure. Only strings, integers, etc.
  - Internal links use `<g-link to="">`, but external links still use `<a href="">`.
  - [This](https://github.com/gridsome/gridsome/issues/292) is why `StaffCard.vue` uses an ugly hack
