---
title: "Battlesnake Summer League 2021 in Review"
date: 2021-08-01T19:49:07-07:00
draft: true
---

Earlier this summer, I learned of a programming competition called [Battlesnake](https://play.battlesnake.com/).
Having acquired a lot of free time after the end of my first year of college, I entered a battlesnake into the Summer League 2021 and took the opportunity to learn Go.

![img](/posts/img/battlesnake-su21-0.PNG)

## The Competition
Battlesnake is a battle royale-esque game where there are initially 4 snakes on the board, each controlled autonomously by a developer's program.
In short:
- Each snake has a health bar which depletes a little each turn.
- Health can be replenished by eating food, which also increases the snake's length.
- If two snakes move into the same square, the snake with the shorter length dies.
If both snakes have equal lengths, then both snakes die.

<!---
include format about the competition here?
-->

## My Strategy

My battlesnake, ninemo, selects its moves based on a list of rules.
If it is able to determine a move, it skips checking the rest of the rules.
In order, it checks for:
1. Head-to-head collisions
2. 

### Handling head-to-head collisions

<!---
include picture here
-->

## Looking Forward