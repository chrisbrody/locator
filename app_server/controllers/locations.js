/* GET home page */
module.exports.homelist = function(req, res) {
	res.render('index', { title : 'Home' })
}

/* GET Location Info */
module.exports.locationInfo = function(req, res) {
	res.render('location-info', { title : 'Location Info' })
}

/* GET Add Review page */
module.exports.addReview = function(req, res) {
	res.render('location-review-form', { title : 'Add Review' })
}


