---
title: "Placing Buildings with my StarCraft 2 bot"
date: 2021-10-13T14:00:23-07:00
draft: true
---

For the past few months, I have been working on a bot named Monte that plays StarCraft 2.
One challenge I've encountered is placing buildings in a sane matter.
In this post, I'll be describing my solution to this problem.

## About StarCraft 2
StarCraft 2 is primarily a 1v1 real-time strategy game where each player builds up their economy to produce army units, and attempts to destroy the other player's army and structures.
Each player can choose one of three races to play: Zerg (i.e. space insects), Protoss (i.e. technologically advanced space aliens), and Terran (i.e. humans), which is the race that my bot (and myself) plays.

One difference between the three races is how units are produced.
Zerg units come out of eggs which periodically spawn by their hatcheries, and are able to morph into different units.
Some Protoss units can be spawned into the map anywhere (with some caveats), and other Protoss units spawn next to the building that produced them.
Meanwhile, Terran units only spawn next to the building that produced them.

As such, one challenge that is fairly unique to Terran players is arranging buildings such that units won't get stuck.

## Placing Buildings at Random
For a long time, Monte placed most buildings randomly.
There were some buildings that had predetermined spots - for instance, command centers - but for the most part, Monte chose the location to build buildings at random.
While this mostly worked, it also results in blocking various chokepoints.
Below, Monte built a barracks at the bottom of the ramp, which blocked the tanks from coming out onto the rest of the map and blocked the workers from coming back into the base.

![img](/posts/img/sc2ai-pt-0.PNG)

This is another instance where Monte placed a building in a less-than-optimal spot.
Since the factory was placed between the command center and the mineral line, workers were forced to travel around the factory to gather and return minerals, which decreased Monte's mineral income.
Additionally, you can also notice that the factory had blocked one worker in.

![img](/posts/img/sc2ai-pt-1.PNG)

## Placing Buildings Better
