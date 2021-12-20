# Wicked-animations

Wicked-animation is a free CSS Animation Library.

Any comment, suggestion, or idea to enhance this library is welcomed!

## How to use?

Download library files and add them to your project folder.

Include CSS file to your document's `<head>` section.

`<link href="css/wicked.css" rel="stylesheet" type="text/css"> `

Next step is to add animation class to the element.

`<div class="wicked-fadeIn"> Your content goes here </div>`

**Important** : Every animation class name needs to have a prefix of `wicked-` in order to work properly.

### List of Class names you can use

- fadeIn
- fadeInTop
- fadeInBottom
- fadeInLeft
- fadeInRight
- fadeOut
- fadeOutTop
- fadeOutBottom
- fadeOutLeft
- fadeOutRight
- shakeX
- shakeY
- jumpInTop
- jumpInBottom
- jumpInLeft
- jumpInRight
- jumpOutTop
- jumpOutBottom
- jumpOutLeft
- jumpOutRight
- bounceIn
- bounceOut
- rotateX
- rotateY
- rotateZ
- spinIn
- spinOut
- rollLeft
- rollRight
- rollOutLeft
- rollOutRight
- blurIn
- blurInTop
- blurInBottom
- blurInLeft
- blurInRight
- blurOut
- blurOutTop
- blurOutBottom
- blurOutLeft
- blurOutRight
- wave
- blink
- doorOpen
- vanish

### Delay, duration and repetition classes

Also, you can add a delay, change the duration, and set the number of iteration for your animation.

If you want to change delay, add `delay-` class with number in ms `delay-100`

It is the same principle for duration, add `duration-` class with number in ms `duration-250`

As for repetition, add `repeat-` class with number of repetition `repeat-2`

You can set delay and duration up to 5 seconds, repetition up to 5 times and if you want set your animation to be infinite,
just add `infinite` class.

**Note**: all animations by default have 1s duration

If you want to retain the style value that is set by the last keyframe just add `forwards` class.
