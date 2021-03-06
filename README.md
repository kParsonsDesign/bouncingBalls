# Bouncing Balls Project

> A JavaScript based project with elements from **Weeks 2, 3 & 7** of [MIT xPro Full Stack Certificate Program](https://executive-ed.xpro.mit.edu/professional-certificate-coding?advocate_email=kmp109%40gmail.com&utm_campaign=incentivized_referrals&utm_medium=personal_url&utm_source=referral&utm_content=SO%20-%20MIT%20xPRO%20-%20Professional%20Certificate%20in%20Coding&advocate_source=#referrals-email-capture-modal).

<!--## Status?-->

## Description
A fun "bouncing balls" project to simulate motion, detect edges, redirect motion, with a "factory" to create the balls.

### Original Project Goals:
- Create a JavaScript object to store individual ball information to keep track of balls.
- Use a "factory" function to create individual balls with random:
  - color
  - size
  - speed
  - direction
- Create a ball on button click
- Move all the balls on button click
- Balls should reverse direction when they hit boundary edge
  - x direction and y direction should be stored and handled separately

### Extra Features I Added:
- Made a container box instead of having the balls bounce off window edges
- Stop all the balls on button click
- Clear all the balls on button click
  - Clears DOM, balls object, and animation frame
- Implemented `requestAnimationFrame()` to optimize redraw instead of `setTimeout()`
- Added some responsive CSS for mobile handling

<!--
## Installation
Currently only available on web browsers.
-->
## To Use
This project can be viewed live at [kParsonsDesign.github.io/bouncingBalls/](https://kParsonsDesign.github.io/bouncingBalls/).

<!--### Support-->

## Roadmap
Current simulator improvements:
- Stop and restart individual balls
- Make bounding box resizable

Possible Game-like improvements
- Implement HTML Canvas
- Use svg images instead of divs
- Have collision detection betwen balls
- Have user be able to set ball angle and velocity based on mouse/finger drag
- Create a "collector" and gain points


## License
[Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://github.com/kParsonsDesign/bouncingBalls/blob/main/LICENSE)

This is a human-readable summary of (and not a substitute for) the license:

### You are free to:

**Share** -- copy and redistribute the material in any medium or format

**Adapt** -- remix, transform, and build upon the material

### Under the following terms:

**Attribution** -- You must give *appropriate credit*, provide a link to the license, and *indicate if changes were made*. You may do so in any reasonable manner, but not in any way that suggests the lecensor endorses you or your use.

**NonCommercial** -- You may not use the material for *commercial purposes*.

**ShareAlike** -- If you remix, transform, or build upon the material, you must distribute your contributions under the *same license* as the original.

**No additional restrictions** -- You may not apply legal terms or *technological measures* that legally restrict others from doing anything the license permits.

### Notices:

You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable *exception or limitation*.

No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as *publicity, privacy, or moral rights* may limit how you use the material.
