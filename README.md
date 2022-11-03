# [Portfolio](https://sidharthpatel.github.io/)

This project is my personal portfolio built from scratch using Angular.

Created by: **Siddharth Patel**

[![wakatime](https://wakatime.com/badge/user/1b6035ce-66c3-490e-bccd-740880a46a30/project/74e2c8a6-3454-438e-874c-9756b940e8b8.svg)](https://wakatime.com/badge/user/1b6035ce-66c3-490e-bccd-740880a46a30/project/74e2c8a6-3454-438e-874c-9756b940e8b8)

## Functionality

The following **required** functionality is completed:

- [x] Create a home page with an introduction
- [x] Highlight your skills
- [x] Add a picture with a round frame
- [x] Create a button to share your contact information
- [ ] Create a navigation bar with the dark mode toggle button.

The following **additional** functionality is completed:

- [x] Put your skills in a container with a shadow effect
- [x] Change Contact button's appearance upon hovering on it for better user experience.
- [x] Add a dark theme to the UI.

## Challenges

Challenges encountered while building the app:

- Creating a round frame for the portfolio picture
  - This was easily dealt with under an **hour** through some research.
- The infamous dark theme button. This was the hardest challenge because:
  - I had to generate a new component
  - I had to fetch button toggle from the UI to the component.
  - My struggle was sharing the button toggle on/off value to the home component to render light/dark theme accordingly.
  - I **solved** the problem by using a service with an event emitter to identify any changes in the state of the button. The home component would then subscribe to the event emitter and render themes accordingly.
