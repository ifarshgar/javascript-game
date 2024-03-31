# Memory Game - Frontend

I had a lot of fun making the memory game. It was a profound experience and I enjoyed every second of it. The project has been written with pure Typescirpt with no helper libraries. 
Only vanilla javascript, html, and css have been leveraged to create this project. 

## Table of contents

- Quick Start
- HTML
- CSS
- Images
- Typescirpt components
- Summary

## Quick Start

In order to use the application you should first navigate to the client folder with your terminal and then install the packages and dependecies of the project and later on you can run the application by using the following commands: 

```bash
npm install 
npm run dev
```

## HTML

There are two html pages in this application. One of the is called of course the `index.html` file which is the main thing that will be diplayed upon running the application. And the second file is `game.html` which contains the game graphics. 

## CSS 
Like it was mentioned above, we have only two html files in this relateively small project. For each html file a corresponding css file has been created also. At the end of each css file we have some media queries to help the application to be playable on a smaller device let's say a mobile phone. The css files are located in `src/css/` folder. 

## Images

There are a set of four complete card decks in this project. I searched a lot to find proper images to use in this project and first though to bring the images of some animals like it was suggested in the project instructions but then when I came up with a better idea to use palying cards images. It was not easy to find proper images for this purpose so I ended up buying a card pack from a graphic designer online. I would say it was worth every penny as the final application looks very well. 

## Typescript components 

### ButtonGroup 

This component is responsible for a grid button shape that have been used on the dashboard to select the game mode difficulty. It also contains an enum that have been used in the app where ever that it was needed to determine the game difficulty mode. Obviously it is called `GameMode` enum. There are only 3 difficulty modes namely Easy, Regulary and Hard. Only, it is worth mentioning that for the testing phase a new smaller size mode was introduced which is called Test and can be used to quickly finish the game to see the results and affects of the game. 

### Cards

This component makes a certain number of cards based on the game difficulty mode and then sends them back to another component called PrepareGameScene to be attached to the Document Object Model of the html page. To select a random card a Math.random function is used to get two random numbers and then with the help of those numbers an image from the deck is selected. The images would be shuffled and spread on the screen by using again random numbers to displace them on an array. 

### Common

Only a couple of common used functions are implemented in this file. They are imported and sued in other components in time. 

### game 

This typescript component is sort of the home for the main logic of the game. It also fetches the codes and functions from the other smaller components and puts them together to make the game. Only it is worth mentioning that the memory card game has four different scenarios when a user starts clicking on the cards and in order to tackle the problem the problem has been broken down into smaller pieces and that way a developer would solve the issue easier.

Different scenarios that can happen:
1. First click - Card is on its back
2. First click - Card is on its front
3. Second click - Card is on its back
4. Second click - Card is on its front

Two cards can be matched together in this game. Therefore, the user has two determining clicks to make in order to successfully manage to match two cards or failing trying. 

### Leaderboard

On the dashboard of the application (first screen), there has been placed a leaderboard to store the previous player scores. The scores can go up if the same user starts playing again and finishes more games. So the scores are sort of dynamically changing. The data comes back from an `SQLite database` called by an API from the backend of the application. 

### main

Same as the game component, the main typescript component is responsible for the first page of the application and pulls other components and codes into itself to make the dashbaord (first page of the app) functional. 

### Moves

There is an html box on the game page that tracks the user clicks on the cards. The logic of this behavior is inside this component. 

### PrepareGameScene 

The game difficulty mode of the game varies based on the user chioce so a dynamic solution was required to solve this challege. With the help of the Cards component, this file will attach the generated and shuffled cards to the screen. If the user decides to play again a new button will appear on the screen and would allow him to have a fresh start to the game. 

### Score

Everytime the user successfully matches two cards, he would be rewarded some points and there is a box in the right top corner of the application that would hold this value. The logic to do this operation is written in this file. 

### Timer

As soon as the user gets to the game screen as timer would start counting. It is capable of counting from 0 to 99 minutes. Which would be more than enough to finish a game in this size. It is also shown on the screen on the top left corner. 

## Summary 

The application has a small backend with only two APIs to store and get back the user socres from the previous playing rounds. To see the docs related to that please go to the `/server` folder. 

