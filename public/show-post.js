var query = location.search.substring(4)

 getPostById(query).then(appendPostToPage)

 function appendPostToPage(post) {
   let source = $("#showpost-template").html()
   let template = Handlebars.compile(source)
   let context = post[0]
   let html = template(context)
   $('.blogpost').append(html)
 }
getCommentsById(query).then(appendCommentToPage)
function appendCommentToPage(comments) {
  console.log(comments);
  let source = $("#show-comments-template").html()
  let template = Handlebars.compile(source)
  let context = {comment: comments}
  let html = template(context)
  $('.comment').append(html)
}

$('.blogpost').on('click','#d-button', function(){

deletePostById(query)
alert('Post has been deleted.')
})
