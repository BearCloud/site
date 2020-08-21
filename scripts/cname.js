#!/usr/bin/env node

const path = require("path")
const fs = require("fs")

const DIST_LOCATION = "../dist/"
const FILE_NAME = path.join(__dirname, DIST_LOCATION, "CNAME")
const FILE_CONTENT = "calcloud.org"

if (!fs.existsSync(FILE_NAME)) {
    fs.writeFileSync(FILE_NAME, FILE_CONTENT)
    console.log("cname.js: created CNAME entry")
    process.exit(0)
} else {
    console.log("cname.js: CNAME already exists")
}
