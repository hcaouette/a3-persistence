Assignment 3 - Persistence: Two-tier Web Application with Flat File Database, Express server, and CSS template
===

Due: September 16th, by 11:59 AM.

This project is not fully functional. Deletion/Modification isn't working, nor is data retrieval.
Please look at my server index.js because my js should all be functional

## a3-hcaouette -- CS4241 Assignment 3

your glitch link e.g. http://a3-hcaouette.glitch.me

Include a very brief summary of your project here. Images are encouraged, along with concise, high-level text. Be sure to include:

- The goal of this application was to simulate a basic shopping site, for cheese, because it seemed like fun.
- I had a lot of problems working with lowdb serverside, not JSON problems.
- I used Google OAuth, mostly for the techachievement but also because it's a feature I enjoy in other sites and wanted to try doing it myself.
- For the database I used lowdb because it seemed simple and I'm familiar with using JSON in that manner, however it proved far more difficult for me to use than I anticipated and ultimately fell short.
- I used bootstrap to style my website, because I am relatively familiar with how it works from using it this term. I made a handful of modifications/overrides to the default styles to fit what I want to do better. I did not use a wholly structured layout but rather built the layout with knowledge of how their grid/flex layout works and styling div containers.
- I used the following middleware packages in my project:
  - Passport 2.0 Google OAuth, I used this to make the login experience cleaner and to avoid having to store credentials on my own, instead I just have a cookie.
  - Express Session, which maintains my session in-between pages and persists my login so that I can add things to my cart
  - BodyParser, to handle parsing JSON on the server
  - Serve-FavIcon to give my site a favicon in the tab
  - Lowdb for persisting data across sessions.
  - I used morgan for logging while I was developing, but I don't have it set up anymore.

## Achievements

### Technical Achievements
- **Tech Achievement 1**: I used OAuth authentication via the Google Strategy to make for a more universal login experience
- **Tech Achievement 2**: I made my website's template almost entirely manually, using a number of custom-styled div boxes to supplement and manipulate the underlying bootstrap framework support

### Design/Evaluation Achievements
- **Design Achievement 1**: My website has been contrast-checked for accessibility while making my CSS template
