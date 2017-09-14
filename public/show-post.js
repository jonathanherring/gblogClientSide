var query = location.search.substring(4)

 getPostById(query).then(appendPostPage)

 function appendPostPage(post) {
   let source = $("#showpost-template").html();
   let template = Handlebars.compile(source);
   let context = post[0]
   let html = template(context);
   $('.blogpost').append(html)
 }
