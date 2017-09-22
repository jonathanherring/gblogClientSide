var query = location.search.substring(4)

 getPostById(query).then(appendPostPage)

 function appendPostPage(post) {
   let source = $("#edit-post-template").html();
   let template = Handlebars.compile(source);
   let context = post[0]
   let html = template(context);
   $('.form').append(html)
 }

 $('.form').on('click','button', function(){
   event.preventDefault();
 var titleF = $('#title').val()
 var authorF = $('#author').val()
 var bodyF = $('#body').val()
 var idF = $('#button').data('id')
 var blogLink = '/show-post.html?id='+ idF

 var settings = {
   "async": true,
   "crossDomain": true,
   "url": "https://gblogdb.herokuapp.com/blogpost/" + idF,
   "method": "PUT",
   "headers": {
     "content-type": "application/json",
     "cache-control": "no-cache",
   },
   "processData": false,
   "data": JSON.stringify({
     title: titleF,
     author: authorF,
     body: bodyF
   })
 }

 $.ajax(settings).done(function (response) {
   console.log(response)
 })

 alert('Your post has been edited')
 location.href = blogLink


})
