Assignment 3 - Persistence: Two-tier Web Application with Flat File Database, Express server, and CSS template
===

Due: September 16th, by 11:59 AM.

This project is not fully functional. Deletion/Modification isn't working, nor is data retrieval. I had a lot of problems working with lowdb serverside, not JSON problems.

4. Ensure that your project has the proper naming scheme `a3-yourname` so we can find it.
5. Fork this repository and modify the README to the specifications below. You do not need to include any of your project files in this repo (we will see those on Glitch), you only need to update and commit the README file.
6. Create and submit a Pull Request to the original repo. Name the pull request using the following template: `a3-gitname-firstname-lastname`.

Sample Readme (delete the above when you're ready to submit, and modify the below so with your links and descriptions)
---

## a3-hcaouette -- CS4241 Assignment 3

your glitch link e.g. http://a3-charlieroberts.glitch.me

Include a very brief summary of your project here. Images are encouraged, along with concise, high-level text. Be sure to include:

- the goal of the application
- challenges you faced in realizing the application
- what authentication strategy / database you chose to use and why (choosing one because it seemed the easiest to implement is perfectly acceptable)
- I used bootstrap to style my website, because I am relatively familiar with how it works from using it this term. I made a handful of modifications/overrides to the default styles to fit what I want to do better. I did not use a wholly structured layout but rather built the layout with knowledge of how their grid/flex layout works and styling div containers.
- I used the following middleware packages in my project:
  - Passport 2.0 Google OAuth, I used this to make the login experience cleaner and to avoid having to store credentials on my own, instead I just have a cookie.
  - Express Session, which maintains my session in-between pages and persists my login so that I can add things to my cart

## Technical Achievements
- **Tech Achievement 1**: I used OAuth authentication via the Google Strategy to make for a more universal login experience
- **Tech Achievement 1**: I made my website's template almost entirely manually, using a number of custom-styled div boxes to supplement and manipulate the underlying bootstrap framework support

### Design/Evaluation Achievements
- **Design Achievement 1**: My website has been contrast-checked for accessibility while making my CSS template
