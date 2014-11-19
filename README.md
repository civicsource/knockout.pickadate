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

If you load it via the AMD loader, it brings in the required CSS files for the date picker. You will want a requirejs config that looks something like this:

```js
paths: {
	"knockout.date-picker": "../bower_components/knockout-date-picker/knockout.date-picker",
	"picker": "../bower_components/pickadate/lib/picker",
	"picker.date": "../bower_components/pickadate/lib/picker.date",
	"picker.time": "../bower_components/pickadate/lib/picker.time"
},
map: {
	"*": {
		"pickadate": "../bower_components/pickadate/lib/"
	}
}
```

where `../bower_components` is the path to your `bower_components` folder.