# What is this?

It's simply JS slider with images, description, button arrows and dots interacted with slider. Made with pure javascript, css and html by my own.

# Installation



# Functions

You can change slider in couple ways:

- ✅ You can add or remove dots buttons which interacted with slider when you clicked them
- ✅ You can remove button arrows which interacted with slider when you clicked them 
- ✅ You can automate it and set a timer for a certain amount of time in which the slides will change

# How to modify slider

### Default settings:

``` javascript
const slide = new ravenSlider({
    timerAllow: true,  // Timer automatization is set to true
    timerTime: 5000, // Timer time is set to 5 seconds ( 1 s = 1000 ms )
    generateDots: true, // Slider dots is set to true
    generateArrows: true // Slider arrows is set to true
});
```

### Possibilities to change slider:

* timerAllow - `true` or `false`
* timerTime - `0` to `~` ( Highly recommended at least 1000ms (1s) )
* generateDots - `true` or `false`
* generateArrows - `true` or `false`

### HTML, CSS

> Of course, you can freely modify the appearance of the slider to your needs. By default, the slider is stretched to 100% of the page length.
