'use strict';

describe('...', function () {

	beforeEach(
		module('grid')
	);

	it('should ...', function () {
		expect([{}, {}, {}].length).toBe(3);
	});

	it('should ...',
		inject(function (urlCreator) {

			expect(urlCreator.getUrl(
				"./server/listA.json?type/{type}/searchedText/{searchedText}/status/{status}",
				{
					"type": "1",
					"searchedText": "lorem",
					"status": {1: true, 2: true, 3: undefined}
				}
			)).toBe("./server/listA.json?type/1/searchedText/lorem/status/1,2");


			expect(urlCreator.getUrl(
				"./server/listA.json?type/{type}/searchedText/{searchedText}/status/{status}",
				{
					"type": "2",
					"searchedText": "lorem ipsum",
					"status": {1: true, 3: undefined}
				}
			)).toBe("./server/listA.json?type/2/searchedText/lorem ipsum/status/1");

			expect(urlCreator.getUrl(
				"./server/listA.json?type/{type}/searchedText/{searchedText}/status/{status}",
				{
					"type": "2",
					"status": {1: true, 3: undefined}
				}
			)).toBe("./server/listA.json?type/2/searchedText/null/status/1");

			expect(urlCreator.getUrl(
				"./server/listA.json?type/{type}/searchedText/{searchedText}/status/{status}",
				{
					"type": "2",
					"text": "2"
				}
			)).toBe("./server/listA.json?type/2/searchedText/null/status/null");


		}));
});
