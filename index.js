
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
}, 1000);