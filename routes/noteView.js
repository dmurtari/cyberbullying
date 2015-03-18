module.exports = function(app) {

    app.get('/note/view/:id', function(req, res) {

        var _ = require('lodash')
        var id = req.params.id;

        var note = _.find(app.data.notes, function(n) {
            if (n.id == id) return true;
            return false;
        });

        res.render('noteView.jade', {
            note: note
        })
    })

}
