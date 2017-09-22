

  function getAllBlogposts(){
  return $.get('https://gblogdb.herokuapp.com/blogposts')
    .catch(error => console.log(error))
    }

function getPostById(id){
  return $.get('https://gblogdb.herokuapp.com/blogpost/' + id )
  .catch(error => console.log(error))
}

function getCommentsById(id){
  return $.get('https://gblogdb.herokuapp.com/blogpost/comments/' + id )
  .catch(error => console.log(error))
}

function getCommentById(id){
  return $.get('https://gblogdb.herokuapp.com/comment/' + id )
  .catch(error => console.log(error))
}

function deletePostById(id){
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://gblogdb.herokuapp.com/blogpost/" + id,
  "method": "DELETE",
  "headers": {
    "cache-control": "no-cache",
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
}
