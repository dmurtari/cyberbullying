module.exports = function(app) {

    app.get('/account/list', function(req, res) {

        var accounts = app.data.accounts

        res.render('accountList.jade', {
            accounts: accounts
        })
    })

}