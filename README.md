# RL ITEMS WEBSHOP

Site can be found at: http://rlitems.emilbabra.se  
Back-end can be found at: https://github.com/Babryz/u11-back-end  
Designs, personas and target audience: https://www.figma.com/file/QiFILvLrAIh65AI7KXoCP8/U11-fullstack-js
Basic planning and user stories: https://docs.google.com/document/d/1G2i528Vc0KFgrx8OyeDy-ZY8ZqUMiRcT-3Jk1mQyfIY/edit?usp=sharing

### You have to be logged in to be able to shop on the site. Please use these users downbelow or create your own one.

#### Admin user:

- email: Brittsboemil@gmail.com
- password: changed

#### Regular user:

- email: emil.babra@chasacademy.se
- password: changed

### Things left to do:

- Fix so remove user button doesn't sometimes need to be pressed twice to delete user.
- Fix so email check on login in is not case-sensitive.
- Add button in admin dashboard on mobile opens the addUser modal off screen very high up.
- Add error handling on all forms and queries. (Needs back-end fix to.)
- Fix so user is not forced to be logged in to shop. (If time, no requirment)(Maybe with cart in localstorage and send logged or not in state to back-end).

### Notes:

- When it comes to error handling, the reason it isn't there is because I created a GraphQL-API instead of a restAPI. This project that I've made with a restAPI has error handling: https://github.com/Babryz/Project-Manager
