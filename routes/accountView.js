module.exports = function(app) {

    var _ = require('lodash')

    app.get('/account/view/:id', function(req, res) {


        // var account = app.data.accounts[5]
		var notes = app.data.notes
        var account = _.find(app.data.accounts, {'id': Number(req.params.id)})
        // need to cast the req.params.id as a number, because that request is originally a string
        // therefore if you don't cast you get a type mismatch

        // shorthand, which doesn't work because you need to cast req.params.id as a number:
        // {'id': req.params.id}
        
        /* alternate way to search through each object - if statement
        function(a)
        {
        	if (a.id == req.params.id)		// check if the id of the current account matches the
        									// id that you're looking for - if so return true
        		return true
        	else
        		return false
        })
		*/

        res.render('accountView.jade', {
            account: account,
            notes: notes
        })
    })

}