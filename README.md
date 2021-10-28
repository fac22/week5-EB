# Berry Good Friends 🍓

Week5 - React Game with an API

Deployed on Netlify: https://angry-elion-b3a987.netlify.app/

<img src='https://media.giphy.com/media/xTiTnlR99xaBZPULC0/giphy.gif' width=300>
<figcaption>⬆ This turtle really wants to be your friend!!<figcaption/>

## Co-authors ✍️

Co-authored-by: Elena <76445935+elenamarinaki@users.noreply.github.com>
Co-authored-by: Barbara <77367593+0bubbles0@users.noreply.github.com>

## Instructions 📜

<https://learn.foundersandcoders.com/course/syllabus/apprenticeship/client-side-app/project/>
The goal is to build an interactive game-like thing that uses data from an API.

## Criteria ✅

- [x] Accept some user input (e.g. a username)
- [x] Query an API (e.g. the Github API, or any other fun one)
- [x] Populate the UI with API data
- [x] Have some form of persistent state and interactivity, e.g.
  - [ ] A hunger bar that decreases over time and is topped up when you feed them stars
  - [ ] A button to add more users to your collection

## Stretch criteria 🙆‍♀️

- [x] Save your state to localstorage so you can leave the page and come back later
- [x] Make it look great 🍓🍓🍓

## If we had more time... 🕥 🙄

- Make the cards rearrange in order of higher score
- Each card has a different increment interval - not everyone can make quick friends!
- Use a database to store the score, so everybody has access to the same data.

## Set up ⚒️

- [x] Vite
- [x] ESLint, Prettier
- [x] Netlify deployment
- [ ] ? API secrets

## Findings 💡

### href in React 🔗

- href are automatically relative to server (it thinks it's a sub-route). It's a big topic online!

```js
// These don't work:
<p>My website is <a href={props.user.website}>{props.user.website}</a></p>
<p>My website is <a href="https://{props.user.website}">{props.user.website}</a></p>

// This works (Thanks Antonio!!!):
<p>My website is <a href={`https://${props.user.website}`}>{props.user.website}</a></p>
```

### .querySelector or React state? 🤔

```js
// Old
<button
  onClick={(e) =>
    document.querySelector('.card-container').classList.toggle('flipped')
  }>
  Surprise 😉
</button>;

// New
const [flipped, setFlipped] = useState('');

<article className={`card-container ${flipped}`}>
  <button onClick={() => setFlipped('')}>Surprise 😉</button>
</article>;
```
