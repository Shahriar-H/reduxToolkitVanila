const {configureStore} = require('@reduxjs/toolkit')
// const postReducer = require('../Feature/post/postSlice')
const postReducer = require('../Feature/post/postSlice')
const queryPost = require('../Feature/querypost/queryPostSlice')


const {createLogger} = require('redux-logger')
const logger = createLogger();

const store = configureStore({
    reducer:{
        post: postReducer,
        queryPost: queryPost
    },
    middleware: (getDefaulteMiddlewares)=> getDefaulteMiddlewares().concat(logger)
    
})
module.exports = store;