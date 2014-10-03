var rnd = require('./')
var test = require('tape')

test('should return random numbers', function(t) {
	var r = rnd()
	t.ok( r >= 0 && r < 1 )

	r = rnd(50)
	t.ok( r >= 0 && r < 50 )

	r = rnd(10, 20)
	t.ok( r >= 10 && r < 20 )

	r = rnd(1, 2)
	t.ok( r >= 1 && r < 2 )

	t.end()
})