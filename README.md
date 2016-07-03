# FlatCast 
## 5 day weather forecast. Presented in React/Redux.

### to get going, clone the repo and then run:

`npm install`

### then, you might want to
#### run tests:
`npm test`

#### start the project:
`npm run dev`

This will start the project at: http://localhost:8080

#### build the project:
`npm run build`

### discussion:

There are several things here that are not ideal. 
However, this shows a bit about how I like to develop React/Redux applications at the moment.

First off, for one, single page, this is way over doing it :)

The CSS grid is very simple, and is only tested in Chrome, Firefox and Safari latest.

The page reads alright with a screen reader, but could be much better. 
Adding more aria attributes would help.

There are several areas where the code could be a bit more defensive.
For example, there is no validation around the city input.
And the `getDays` selector is doing a bit too much.

The responsive styles are very basic.  But it should be usable on a mobile (around 400px width).
I planned to do a bit better mobile sized styling, but ran out of time.

Also, the build (`npm run build`) still builds a dev version.

#### All this considered...
The project should hot reload for changes to both JavaScript and CSS.
The project is tested fairly well.

Looking forward to feedback :)


