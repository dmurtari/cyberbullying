module.exports = function(app) {

	var _ = require('lodash')

    app.get('/context/view/:id', function(req, res) {

        // var context = app.data.contexts[31]

        var context = _.find(app.data.contexts, {'id': Number(req.params.id)})
        // need to cast the req.params.id as a number, because that request is originally a string
        // therefore if you don't cast you get a type mismatch

        /* alternate way to search through each object
        function(c)
        {
        	if (c.id == req.params.id)		// check if the id of the current context matches the
        									// id that you're looking for - if so return true
        		return true
        	else
        		return false
        })
		*/

        // shorthand, which doesn't work because need to cast req.params.id as a number:
        // {'id': req.params.id}

        res.render('contextView.jade', {
            context: context
        })
    })

}