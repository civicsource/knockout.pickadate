# Knockout Pickadate Binding

> Simple knockout binding that wraps [pickadate.js](http://amsul.ca/pickadate.js).

## Install with [Bower](http://bower.io/)

```
bower install knockout-date-picker
```

Then add `knockout.date-picker.js` to your project.

## How to Use
See the [pickadate documentation](http://amsul.ca/pickadate.js/date.htm) for options. Include the script on your page (either via a normal script tag or via an AMD loader). Then use it like so:

```html
<input data-bind="value: myDate, pickadate:{ editable: true }" />
```

If you load it via the AMD loader, it brings in the required CSS files for the date picker. See the [require-css documentation](https://github.com/guybedford/require-css) for how to configure that.