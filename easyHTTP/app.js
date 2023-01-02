const http = new easyHTTP();

//GET posts array
/* http.get('https://jsonplaceholder.typicode.com/posts', function(err,posts){
    if(err){
        console.log(err);
    }else{
        console.log(posts);
    }
}); */


//GET single post
/* http.get('https://jsonplaceholder.typicode.com/posts/1', function(err,post){
    if(err){
        console.log(err);
    }else{
        console.log(post);
    }
}); */

//Create data
const data = {
    title: 'Custom post',
    body: 'this is a custom post'
};

//Create post
/* http.post('https://jsonplaceholder.typicode.com/posts', data, function(err,post){
    if(err){
        console.log(err);
    }else{
        console.log(post);
    }
}); */

//Update post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
  if(err){
    console.log(err);
  }else{
    console.log(post);
  }
});

//Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err,post){
    if(err){
        console.log(err);
    }else{
        console.log(post);
    }
});



