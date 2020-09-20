---
title: Homework 2 - Golang
date: 2020-09-19
dueDate: 2020-09-24
---

**Note:** If you are enrolled in the course, please access the homework through Gradescope. This copy is intended for auditors.

### Golang

What is the dynamic variable assignment operator?

Write a line of code that creates a new router using the gorilla/mux library and assign it to variable `router`.

What function loads the environment variables from a .env file into the program's current environment? Hint: `godotenv`

Once we have loaded the `.env` into our program's environment, how would we assign the environment variable `CLOUD_TOKEN` to variable `cloudToken`? Use a dynamic assignment operator.

Given that we've initialized a router `router`, how would we start our server and begin listening to requests on port 2020? Hint: Look at the demo.

Now we're going to build a car in Golang. It has a `color`, `numberOfSeats`, `numberOfWheels`, and it may or may not have autopilot. Fill in the blanks to declare an object structure. Make sure to use UpperCamelCase when appropriate.

```
<a> Car <b> {
  <c> string `json:"color"`
  <d> <e> `json:"numberOfSeats"`
  <f> <g> `json:"numberOfWheels"`
  HasAutopilot <h> `json:"hasAutopilot"`
}
```

Fill in the blanks for `<a>`, `<b>`, `<c>`, `<d>`, `<e>`, `<f>`, `<g>`, and `<h>`.

Now that we've declared our `Car`, we're going to create an instance of it that we can use. Fill in the blanks for declaring a red `Car` `car` that has 5 seats, 4 wheels, and does not have autopilot. Hint: https://tour.golang.org/moretypes/2.

```
car := <a>{"red", <b>, 4, false}
```

Fill in the blanks for `<a>` and `<b>`.
