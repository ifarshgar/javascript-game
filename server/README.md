# Memory Game - Frontend

I had a lot of fun making the memory game. It was a profound experience and I enjoyed every second of it. The project has been written with pure Typescirpt with no helper libraries. 
Only vanilla javascript, html, and css have been leveraged to create this project. 

## Table of contents

- Quick Start
- SQLite Database
- Typescirpt components
- Summary

## Quick Start

In order to use the application you should first navigate to the server folder with your terminal and then install the packages and dependecies of the project and later on you can run the application by using the following commands: 

```bash
npm install 
npm run dev
```

## SQLite Database 
In order to store the user data and persist them for the next rounds of the game SQLite database has been chosen for the task. Initailly I wanted to use MongoDB but again just to show off my sql skills and using an embedded solution to tackle this fairly simple job I selected sqlite. Since no further package installations are required other than the ones that are already listed in package.json and the user doesn't need to have any sort of driver to make the app work, sqlite is my fav go to when I need a quick and small relational database. 

## Typescript componenets 

### database 

This file is opening the connection to the sqlite and also contains all the codes that were necessary to create the database of the application i.e. to get data and to insert data into the database. 

### history

The app has only two APIs. They have been implemented inside `routes/history.ts`. The reason why I have made a different file and folder structure to tackle this issue is that I believe in the separation of concerns. The more modular the application the better. 

### index

The initial challege application that I received already had a node.js with express installation and usage in it. So I let the necessary codes to remain in this file and only imported the new API route that I created for the application. 

## Summary 

The application has a dedicated frontend written with html, css and typescript. To see the related docs please go to the `/client` folder. 

