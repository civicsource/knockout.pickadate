# Knockout Pickadate Binding

> Simple knockout binding which wraps [pickadate.js](http://amsul.ca/pickadate.js).

## Installation

```
npm install knockout-date-picker
```

Then add `knockout.pickadate.js` to your project.

## How to Use
See the [pickadate documentation](http://amsul.ca/pickadate.js/date.htm) for options. Include the script with a module bundler like webpack or browserify.
Use [`css-loader`](https://github.com/webpack/css-loader) to include styles.

Then use it like so:

```html
<input data-bind="value: myDate, pickadate: { editable: true }" />
```