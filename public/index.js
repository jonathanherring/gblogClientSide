// var buttonPostId = $('.btn').data('id')

getAllBlogposts().then(appendBlogposts)

function appendBlogposts(posts) {
  let source = $("#blogpost-template").html();
  let template = Handlebars.compile(source);
  let context = {
    blogpost: posts
  };
  let html = template(context);
  $('.content').append(html)
}


Handlebars.registerHelper('sock', function(body) {
  let split = body.split('.')
  let sliced = split.slice(0, 4)
  return sliced.join('.') + "."
});


// $('.content').on('click','button',function(){
//
//   var buttonId = $(this).data('id')
//   location="/post.html?id="
//   console.log(buttonId);
//
// })
