

  function getAllBlogposts(){
  return $.get('https://gblogdb.herokuapp.com/blogposts')
    .catch(error => console.log(error))
    }

function getPostById(id){
  return $.get('https://gblogdb.herokuapp.com/blogpost/' + id )
  .catch(error => console.log(error))
}
