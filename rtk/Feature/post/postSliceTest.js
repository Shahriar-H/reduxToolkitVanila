// const {createSlice, createAsyncThunk} = require("@reduxjs/toolkit")
// const fetch = require("node-fetch")

// // initial state
// const initialState = {
//     loading:false,
//     posts:[],
//     error:''
// }
// const getQueryPost = async (post)=>{
//     const splitedKeyword = post.split(" ")
//     let newQuery='';
//     splitedKeyword.forEach((value, index, array) => {
//         newQuery += '&title_like='+value;
//     })
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts?"+newQuery);
//     const posts = await response.json();
//     return {
//         newQuirey:posts,
//         prevTitle:post,
//         queryLink:newQuery
//     }
// }

// // create async thunk
// const fetchedPost = createAsyncThunk("post/fetchpost", async ()=>{
//     const response = await fetch("https://jsonplaceholder1.typicode.com/posts/10");
//     const posts = await response.json();
//     return getQueryPost(posts);
// })


// const postslice = createSlice({
//     name:"post",
//     initialState,
//     extraReducers:(builder)=>{
//         builder.addCase(fetchedPost.pending, (state=initialState, action)=>{
//             state.loading = true;
//             state.error = ''
//         })

//         builder.addCase(fetchedPost.rejected, (state=initialState, action)=>{
//             state.loading = false,
//             state.error = action.error.message,
//             posts=[]
//         })
//         builder.addCase(fetchedPost.fulfilled, (state=initialState, action)=>{
//             state.loading = false,
//             state.error = '',
//             state.posts=action.payload
//         })
        
//     }
// })

// module.exports = postslice.reducer;
// module.exports.fetchedPost = fetchedPost;
