angular.module('myservice', [])

	.service('testService', function () {

		var self = this;
		self.name = null;

		this.getName = function () {
			return self.name;
		}

		this.setName = function (name) {
			self.name = name;
		}
	})
;