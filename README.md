# Contributable Pokedex ("OpenDex")
A contributable, searchable Pokedex built using Apollo Server. This is the repository for the backend of the project, the front-end can be found here: https://github.com/a7rie/contributable-pokedex-frontend

This is a pretty old project I worked on back in early 2022. There's a lot of room for improvement with the code, but overall the end result turned out pretty well I think. The tech stack was just decided based off the tools I wanted to learn at the time (hence Apollo & GraphQL).

This is my essentially take on a Pokedex app; it allows for users to add their own Pokemon, choose their own statistics, add an image, abilities, etc. Users are able to report user-generated Pokemon, and an administrator (more about this below) is able to see those reports and take action on them using a customized admin page.
The backend is a GraphQL server written in javascript, using Apollo Server. Currently, the database is a SQLite file, and better-sqlite-3 is used to communicate with the database. 


A live version is hosted here: https://opendex.aminelnasri.com/

