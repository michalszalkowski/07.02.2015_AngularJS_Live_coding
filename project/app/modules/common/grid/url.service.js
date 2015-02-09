angular.module('grid')

	.service('urlCreator', function (urlParamCleaner, $filter) {

		this.getUrl = function (url, params) {

			var _url = url;

			_url.match(/(\{[A-Za-z]+\})/g).forEach(function (placeholder) {

				var key = placeholder.replace("{", "").replace("}", "");

				if (typeof params[key] === "string") {

					_url = _url.replace(placeholder, urlParamCleaner.getSafeStr(params[key]));

				} else if (params[key] instanceof Date) {

					_url = _url.replace(placeholder, $filter('date')(params[key], 'dd-MM-yyyy'));

				} else if (typeof params[key] === "object") {

					_url = _url.replace(placeholder, urlParamCleaner.getQueryParam(params[key]));

				}

				if (params[key] == null) {
					_url = _url.replace(placeholder, "null");
				}

			});

			return _url;
		};

	})

	.service('urlParamCleaner', function () {

		this.getSafeStr = function (param) {
			if (param === undefined) {
				return '';
			}
			return param;
		};

		this.getQueryParam = function (param) {

			if (param === undefined) {
				return 'null';
			}

			var result = '';
			angular.forEach(param, function (checked, value) {
				if (checked === true) {
					result += value + ',';
				}
			});

			if (result === '') {
				return 'null';
			}

			return result.substring(0, result.length - 1);
		};

	})
;