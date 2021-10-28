# week5-EB

React Game with an API

Deployed on Netlify: https://angry-elion-b3a987.netlify.app/

## Co-authors

Co-authored-by: Elena <76445935+elenamarinaki@users.noreply.github.com>
Co-authored-by: Barbara <77367593+0bubbles0@users.noreply.github.com>

## Instructions

<https://learn.foundersandcoders.com/course/syllabus/apprenticeship/client-side-app/project/>
The goal is to build an interactive game-like thing that uses data from an API.

## Criteria

- [x] Accept some user input (e.g. a username)
- [x] Query an API (e.g. the Github API, or any other fun one)
- [x] Populate the UI with API data
- [x] Have some form of persistent state and interactivity, e.g.
  - [ ] A hunger bar that decreases over time and is topped up when you feed them stars
  - [ ] A button to add more users to your collection

## Stretch criteria

- [x] Save your state to localstorage so you can leave the page and come back later
- [x] Make it look great 🍓🍓🍓

## Set up

- [x] Vite
- [x] ESLint, Prettier
- [x] Netlify deployment
- [ ] ? API secrets

## Findings

- href are automatically relative to server (it thinks it's a sub-route). It's a big topic online!
  ` <p>My website is <a href={props.user.website}>{props.user.website}</a></p>`
- This is also not a fix: `<p>My website is <a href="https://{props.user.website}">{props.user.website}</a></p>`
