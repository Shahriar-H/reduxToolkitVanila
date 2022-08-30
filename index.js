const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(titlePrev+newPosts);
});

server.listen(port, () => {
  console.log(`Server is running on port number::${port}`);
});



const store = require('./rtk/app/store')
const {fetchedPost} = require('./rtk/Feature/post/postSlice')
const {fetchedQueryPost} = require('./rtk/Feature/querypost/queryPostSlice')
let state;
store.subscribe(()=>{
    state= store.getState();   
    
})



store.dispatch(fetchedPost())
// 
setTimeout(() => {
    store.dispatch(fetchedQueryPost(state.post.posts.title))
    console.log(state)
}, 1000);
