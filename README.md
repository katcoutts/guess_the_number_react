###Assignment - Build a game of Guess Who

This project was done as a CodeClan homework in response to the following task:

Implement a single player game of Guess Who. MVP is to have a set of character cards displayed and then the computer gets randomly assigned one, the user can make a guess of which character they think has been chosen and they get told if they’re correct or not. Extension is to make it more like the real Guess Who game in that the user can make guesses based on characteristics (eg hair colour) to rule out wrong answers


To run my version you will need to do an npm install in both the top level folder and in client. Then run webpack -w from within client and also node server.js from within the guess-who-react folder.

Each game shows 9 different numbers. These are randomly selected from 15 different numbers I have created data for.

<img width="1214" alt="screen shot 2016-10-22 at 06 45 23" src="https://cloud.githubusercontent.com/assets/17859815/19617250/e8634642-9823-11e6-81a1-83bae1bf4bc7.png">

When a player decides a number is not the answer they can click on it and it fades out.

<img width="1188" alt="screen shot 2016-10-22 at 06 57 48" src="https://cloud.githubusercontent.com/assets/17859815/19617307/f36568b2-9824-11e6-8fcf-72bf5f32118d.png">

When the player has picked the correct answer the info about that number is shown. I've added this as I envisage this game being something that could be used  by children learning maths.

<img width="1164" alt="screen shot 2016-10-23 at 11 55 31" src="https://cloud.githubusercontent.com/assets/17859815/19625704/e76fbd70-9917-11e6-846e-d5e3daa6549d.png">
