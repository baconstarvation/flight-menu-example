define(function (require) {
	'use strict';
	
	var defineComponent = require('flight/lib/component');
	
	return defineComponent(menuSection);
	
	function menuSection() {
		this.changeSection = function (e, data) {
			this.trigger('dataMenuSection', {
				section: data.section,
				markup: '<b>' + data.section + '</b>'
			});
		}
		
		this.after('initialize', function () {
			this.on('uiNeedsMenuSection', this.changeSection);
		});
	}
});