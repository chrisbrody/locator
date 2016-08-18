/* GET home page */
module.exports.homelist = function(req, res) {
	res.render('locations-list', { 
		title : 'Loc8r - find a place to work with wifi',
		pageHeader : {
			title : 'Loc8r',
			strapline : 'Find places to work with wifi near you!'
		},
		sidebar : 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about.  Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you\'re looking for.',
		locations : [
			{
				name : 'Starbucks',
				address : '125 High Street, San Francisco, CA 94105',
				rating : 3,
				facilities : ['Hot Drinks', 'Food', 'Premium wifi'],
				distance : '100m'
			},
			{
				name : 'Cafe Hero',
				address : '335 High Street, San Francisco, CA 94105',
				rating : 4,
				facilities : ['Hot Drinks', 'Food', 'Premium wifi'],
				distance : '200m'
			},
			{
				name : 'Burger King',
				address : '515 High Street, San Francisco, CA 94105',
				rating : 2,
				facilities : ['Food', 'Premium wifi'],
				distance : '400m'
			}
		]
	})
}

/* GET Location Info */
module.exports.locationInfo = function(req, res) {
	res.render('location-info', { title : 'Location Info' })
}

/* GET Add Review page */
module.exports.addReview = function(req, res) {
	res.render('location-review-form', { title : 'Add Review' })
}


