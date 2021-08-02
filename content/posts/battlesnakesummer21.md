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
This process repeats until the game is finished (i.e. one or no snakes are left).

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

Ninemo's source code can be found [here](https://github.com/joshtenorio/ninemo-bot).

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
            if ourMove == enemyMove or ourMove is not possible:
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
            if ourMove == enemyMove and ourMove is possible:
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
                if ourMove == enemyMove or ourMove is not possible:
                    escape = false
            if escape == true:
                return ourMove


```
Recall that if two snakes with equal length collide, then both snakes lose.
If that is the case, and there is a food my snake can reach with one move, then my snake would choose to move towards it.
Although it might result in a collision, it's possible the other snake would recognize that going for the food could result in colliding with my snake, and so they would pick a move to avoid the collision (and the food).
If they chose to avoid the collision which would be the safest option, then the food square would be a safe option, and moving towards it would put my snake ahead in terms of length.
As such, moving towards the food was a risk worth taking for my snake.
Otherwise, if a food square isn't adjacent then a collision isn't worth it and so my snake would choose a safer move.

### Getting out of hazards
An additional challenge of the game mode used for summer league was hazards, which functions in a similar way to other battle-royale games such as Fortnite or PUBG.
As the game progresses, the hazards spawn on the edges of the board, making the edges more dangerous to stay in.
Snakes lose health more quickly if their heads are in a hazard square, so if a snake were to stay in the hazard for too long, it would quickly die.

I implemented a simple strategy to handle hazards - if the snake was in a hazard square and its health was below 60%, it would find the closest non-hazard square and move towards it.
Additionally, it only checks a 5x5 region around its head, since there's no reason to check the entire board, though in hindsight it wouldn't have hurt to check a larger region.
The image below demonstrates the range the snake would check for.
The only exception to this rule was if there was food adjacent - in which case, the snake would move towards the food since it would replenish its health bar.

![img](/posts/img/battlesnake-su21-4.PNG)

By implementing this rule for the snake, it was able to take advantage of space and food in the hazards that other snakes might consider to be too dangerous.

### Pathing to the closest food
If my snake isn't in an imminent collision or in the hazard, it tries to path to the closest food.
The logic for this is simple - after finding the closest food, it attempts to minimize `dx` first, then `dy`.
My snake also tries to avoid moving into traps (i.e. tight spaces) in this step.

### Flood fill

If my snake can't determine a move after checking the three rules above, it takes all of its possible moves that doesn't result in moving into a trap, and picks the move that results in moving into the area with the most amount of spaces.
It does this by using flood fill to count the number of open squares, which is also used to avoid traps while pathing towards food.

## Performance and Reflection

After working on my snake for a week in mid-June, I left it alone to compete in summer league without updating it for the rest of the season, mostly due to my summer classes ramping up and me spending more time on other projects.
By the end of the season, it was able to climb to platinum tier (8,000 ELO) and stayed there for a couple days before falling down to gold, where it finished as the third highest gold tier snake at 65th place with 7,997 ELO out of 160 snakes.
In the Gold Tournament, my snake made it to the top four lobby, but wasn't able to get any wins there.

Looking back, one of my snake's biggest weaknesses was going back into the hazards if it was already low on health.
Additionally, because it had an aggressive food strategy, it would often grow enormously large, which would make it easier to trap itself.

My snake also lacked a consistent game plan - all it knew was to go for collisions if it could win, stay out of hazards when it was on low health, path towards food, and hope it would outlast the other three snakes on the board.
In contrast, other snakes had a clear plan in mind.
For instance, one snake would consistently take control of the center, which would often keep other snakes in the hazards once the game got long enough.

Looking forward for fall league, implementing something smarter than "just survive" is one of my goals.
For instance, I'd like to improve my snake's performance when there are only 2 snakes left on the board, and implementing a tree search algorithm such as Minimax could be beneficial for that goal.

I really enjoyed my time spent learning Go, which is the language I used to create my snake, and I hope to improve my Go skills with another project in the future.

<!-- add more stuff here about how i want to use Go more -->


