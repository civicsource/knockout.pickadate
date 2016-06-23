var ko = require("knockout");
var $ = require("jquery");
require("pickadate/lib/picker");
require("pickadate/lib/picker.date");
require("pickadate/lib/picker.time");
require("css!pickadate/lib/themes/classic.css");
require("css!pickadate/lib/themes/classic.date.css");
require("css!pickadate/lib/themes/classic.time.css");

ko.bindingHandlers.pickadate = {
	init: function (element, valueAccessor, allBindingsAccessor) {
		var options = ko.utils.unwrapObservable(valueAccessor()) || {};
		var valueBinding = allBindingsAccessor.get("value");
		$(element).pickadate(Object.assign({}, options, {
			onSet: function() {
				if (valueBinding) {
					valueBinding(element.value);
				}
			}
		}));
	}
};

ko.bindingHandlers.pickatime = {
	init: function (element, valueAccessor) {
		var options = ko.utils.unwrapObservable(valueAccessor()) || {};
		$(element).pickatime(options);
	}
};
