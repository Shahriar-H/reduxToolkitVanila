const {createSlice, createAsyncThunk} = require("@reduxjs/toolkit")
const fetch = require("node-fetch")

// initial state
const initialState = {
    loading:false,
    posts:[],
    error:''
}


// create async thunk
const fetchedQueryPost = createAsyncThunk("post/fetchQuerypost", async (title)=>{
    const splitedKeyword = title.split(" ")
    let newQuery='';
    splitedKeyword.forEach((value, index, array) => {
        newQuery += 'title_like='+value+'&';
    })
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?"+newQuery);
    const posts = await response.json();
    return posts;
})


const QueryPostslice = createSlice({
    name:"querypost",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchedQueryPost.pending, (state=initialState, action)=>{
            state.loading = true;
            state.error = ''
        })

        builder.addCase(fetchedQueryPost.rejected, (state=initialState, action)=>{
            state.loading = false,
            state.error = action.error.message,
            posts=[]
        })
        builder.addCase(fetchedQueryPost.fulfilled, (state=initialState, action)=>{
            state.loading = false,
            state.error = '',
            state.posts=action.payload
        })
       
    }
})



module.exports = QueryPostslice.reducer;
module.exports.fetchedQueryPost = fetchedQueryPost;
