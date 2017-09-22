var query = location.search.substring(4)

 getCommentById(query).then(appendCommentToForm)

     function appendCommentToForm(comment) {
   let source = $("#edit-comment-template").html();
   let template = Handlebars.compile(source);
   let context = comment[0]
   let html = template(context);
   $('.form').append(html)
 }

 $('.form').on('click','button', function(){
   event.preventDefault();
 var authorF = $('#author').val()
 var bodyF = $('#body').val()
 var idF = $('#button').data('id')
 var blogLink = $('#blog-link').data('bloglink')

 var settings = {
   "async": true,
   "crossDomain": true,
   "url": "https://gblogdb.herokuapp.com/comment/" + idF,
   "method": "PUT",
   "headers": {
     "content-type": "application/json",
     "cache-control": "no-cache",
   },
   "processData": false,
   "data": JSON.stringify({
     author_name: authorF,
     body: bodyF
   })
 }


 $.ajax(settings).done(function (response) {
   console.log(response)
 })

alert('Your comment has been edited')
location.href = blogLink

})
