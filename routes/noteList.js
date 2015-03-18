module.exports = function(app) {

    app.get('/note/list', function(req, res) {

        var perPage = req.query.perPage || 20
        var page = req.query.page || 1

        // TODO: calculate the right set of notes based on 'perPage' and 'page'
        //page 1, 20 per page:  0-20
        //page 2, 20 per page: 20-40
        //page 3, 20 per page: 40-60
        var start = perPage*page-perPage
        var end = perPage*page
        var notes = app.data.notes.slice(start,end)
        console.log(start, end)

        function range(start, end) {
            var foo = [];
            for (var i = start; i <= end; i++) {
                foo.push(i);
            }
            return foo;
        }

        // TODO: calculate the correct array of page numbers for rendering the paginator
        var totalNotes = app.data.notes.length
        if(totalNotes % perPage == 0)
            var pages = totalNotes/perPage
        else
            var pages = (totalNotes/perPage) + 1
        var pageNumbers = range(1, pages)
        console.log(pages)
        console.log(totalNotes)

        res.render('noteList.jade', {
            notes: notes,
            pageNumbers: pageNumbers,
            perPage: perPage
        })
    })
}