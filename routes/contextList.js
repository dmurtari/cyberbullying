module.exports = function(app) {

    app.get('/context/list', function(req, res) {

        var contexts = app.data.contexts

        var reOrg = {};
        // console.log(contexts[0].site.description)

        // Get all sites
        for (var i = 0 ; i < contexts.length ; i++){
            var site = contexts[i].site.description;
            if(!reOrg[site]){
                reOrg[site] = [];
            }
            reOrg[site].push(contexts[i])
        }

        res.render('contextList.jade', {
            contexts: reOrg
        })
    })

}
