# jsprojects
a few quick html/js projects

These two projects started out as tiny prototypes based off of youtube user Gamkedo's rapid prototyping example videos.
I have made extensive modifications to the initial games which can be found here: 
https://www.youtube.com/watch?v=xGmXxpIj6vs (snake)
https://www.youtube.com/watch?v=KoWqdEACyLI (pong)

snake.html is a simple snake clone. I have added:
 - a score counter, 
 - high score counter, 
 - custom rendering code for the snake so its color changes as it gets longer,
 - a rule that prevents the player from doubling back on their own tail in a single frame,
 - a rule for apple placement that relocates it if it spawns on the same square as the snake's tail
 - a start screen designed by Stephen Albrecht
 
pongus.html is a more involved pong clone. I have added:
 - a framework for adding entities rendered with sprites and brushes rendered as canvas primitives
 - more complex data e.g acceleration
 - primitive 'parallel' execution: the game updates its logic and graphics in two separate functions run 
 concurrently using setInterval()
 - various rules to improve playability:
  + increase in speed of projectile and paddles as the game progresses
  + decrease in size of paddles "..."
  + ball inherits paddle velocity to make more directed passes back and forth
  + movement in two dimensions for the player
  + a visual indicator for the boundaries of said motion
  + image for ball
  + slightly better ai rules
  + score indicators
