# 🧠 The Memory Game

## Table of contents

- [Setup](#🛠️-setup)
- [Instructions](#instructions-for-memory-game)
- [How long should I spend on the task](#⏰-how-long-should-i-spend-on-the-task)
- [Features](#🎮-features)
- [Additional guidance](#👩‍🏫-additional-guidance)
- [Designs](#🎨-designs)
- [Questions?](#ℹ️-questions)

## 🛠️ Setup

We have created two folders in the project.

- [client](#client) Where you can find a TypeScript Vite project.
- [server](#server) Where you can find a TypeScript Node/Express project.

### Client

Get started by installing the code dependencies in the `./client` folder.

```bash
npm install
```

Run the app with:

```bash
npm run dev
```

#### Testing

We've added the [Jest](https://jestjs.io/) testing library. You may add tests under the `__tests__` folder if you have time.

> Note: You do not have to configure anything. All files under `__tests__` will be run by Jest.

Run the tests with:

```bash
npm test
```

### Server

Get started by installing the code dependencies in the `./server` folder. The server runs on port 8888 by default

```bash
npm install
```

Run the app with:

```bash
npm run dev
```

## Instructions for memory game

We would like for you to implement the Memory game. This is a card game where pairs of cards contain images, such that for each card, there is exactly one other card with the same image. The cards are placed face-down on a surface. A player chooses any two cards and flips them face-up. If they happen to have the same image, they will stay face-up — otherwise, they should be flipped back. This continues until all cards are face-up.

> NOTE: We ask that you **don’t** use any frontend frameworks or libraries in your code (this includes rendering from the server). Instead, go back to your roots and write it in as plain JavaScript (or TypeScript) as possible, anything from ES5 - Current is fine for us! If your app ends up having a backend, then we don’t mind you using the necessary frameworks/libraries here (e.g. Express).

## ⏰ How long should I spend on the task?

We expect you to spend no more than 5-6 hours on the task (this is both to not put too much work on you, and also to scope how much code we will go through in the interview). We’ll test your game using Chrome, so make sure it works there at least. 😉

> Note: Try to keep in mind that we might want to extend this game later on (maybe even during the interview), so think about the readability and structure of your code.

## 🎮 Features

There are a lot of areas you could choose to focus on in this game, for instance:

- Finding awesome cat/ninja/catninja pics to put on the cards. Static or dynamic?
- Does a player get points? Is there timing involved? A scoreboard?
- Fancy animations or pure-and-simple?
- Single-player? Local multi-player? Networked multi-player? :scream_cat:
- A score board over everyone who has played on your server? Maybe even a database of scores??
- Accessibility?
- Responsive design that works for mobile and desktop?

> Beware that if you try and focus on all of these, you’ll probably spend more than the 5-6 hours, so we advise you to just choose a few

## 👩‍🏫 Additional guidance

It would be helpful if you could document your project (through comments or README files) and explain some of the decisions/assumptions you have made. Given the short time constraints, please also make notes of future steps you could take in order to make the application better. Documentation is a really important aspect, and we expect this.

We have created a starter kit project to help you with boilerplate. It includes babel, css with [Vite](https://vitejs.dev/).

## 🎨 Designs

We have also included some basic wireframes from our designer in the /designs folder. Feel free to use them as a guide, or not, if you feel like you want to show off your design prowess!

## ℹ️ Questions?

Don't hesitate to get in touch with us at any time throughout this task if you have any questions. We realise and appreciate that you’re taking personal time out to complete this task, so we’re happy to help.
