---
title: "Battlesnake Summer League 2021 Reflections"
date: 2021-08-01T19:49:07-07:00
draft: true
---

Earlier this summer, I learned of a programming competition called [Battlesnake](https://play.battlesnake.com/).
Having acquired a lot of free time after the end of my first year of college, I entered a battlesnake into their summer league and took the opportunity to learn Go.

![img](/posts/img/battlesnake-su21-0.PNG)

## The Competition
Battlesnake is a battle royale-esque game where there are initially 4 snakes on the board, each controlled autonomously by a developer's program.
In short:
- Each snake has a health bar which depletes a little each turn.
- Health can be replenished by eating food, which also increases the snake's length.
- If multiple snakes move into the same square, the snake with the longest length survive and the other colliding snakes die.
If all snakes have equal lengths, then all snakes die.

On the technical side, the game gets the snakes' moves by sending requests to each snake's live web server, which is maintained by the snake's developer.
Each request contains data about the board state (e.g. where our snake is, where food is, etc.).
Then, the snake's server must send a valid move response to the game within 500 milliseconds.
This process repeats until the game is finished, (i.e. one or no snakes are left).

<!--- we should include a diagram of how it works technically -->


<!---
include format about the competition here?
-->

## My Strategy

My battlesnake, [ninemo](https://play.battlesnake.com/u/tenmo/ninemo/), selects its moves based on a list of rules.
If it is able to determine a move, it skips checking the rest of the rules.
In order, it checks for:
1. Head-to-head collisions
2. Hazards
3. The path to the closest food

If the snake isn't able to select a move from the above rules, it moves toward the area with the most amount of space.
By doing so, it can avoid situations where it would get trapped by its own body or other snakes.

The end result created a snake which aggressively challenged for food, sometimes to its own detriment.

### Handling head-to-head collisions
Head to head collisions are possible when our snake's head can potentially move into the same square as another snake.
The purple squares below represent where an opposing snake's head could be to trigger a head-to-head collision - notice that a snake whose head is in the purple square could potentially move into the same square as our snake.
![img](/posts/img/battlesnake-su21-2.PNG)
To detect a possible head-to-head collision, the program compares each of the squared distances from our snake's head to one of its opponents' head.
If a squared distance is either 1 (the opponent is currently in a square diagonal to our snake) or 2 (the opponent is on the same axis as our snake) then the program caches their position and their length, and disregards the rest of the opponents.

Once a possible head-to-head collision has been detected, the next step was to determine both of our future moves.
After doing so, our snake then determines if it can win the collision.
My snake also checks if the move is physically possible, i.e. it won't move into itself, a wall, or another snake's body.
The pseudocode below demonstrates that logic.

<!---
should we simplify the pseudocode more so it isnt as long?
-->

```go
if ourLength < enemyLength:
    // snake loses the collision, so select a move that avoids it
    for each ourMove:
        escape = true
        for each enemyMove:
            if ourMove == enemyMove or not moveIsPossible():
                escape = false
        if escape == true:
            return ourMove
else if ourLength > enemyLength:
    // snake wins the collision, select a move that results in it
    // if food is adjacent, move towards it instead
    foodAdjacent, move = api.IsFoodAdjacent() // returns a bool and a move if food is adjacent
    if foodAdjacent:
        return move
    for each ourMove:
        for each enemyMove:
            if ourMove == enemyMove and moveIsPossible():
                return ourMove
else:
    // our lengths are equal
    // if food is adjacent, move towards it
    // else if food is not adjacent, avoid a collision
    foodAdjacent, move = api.IsFoodAdjacent()
    if foodAdjacent:
        return move
    else:
        for each ourMove:
            escape = true
            for each enemyMove:
                if ourMove == enemyMove or not moveIsPossible():
                    escape = false
            if escape == true:
                return ourMove


```
Recall that if two snakes with equal length collide, then both snakes lose.
If that is the case, and there is a food that my snake can reach with one move, then my snake moves towards it, even if it could result in a collision.
Otherwise, a collision isn't worth it so if there isn't an adjacent food my snake chooses a move that avoids a collision.

### Getting out of hazards
A challenge of the game mode used for summer league was hazards.

<!---
continue here
-->

### Pathing to the closest food

## Performance and Reflection

## Looking Forward