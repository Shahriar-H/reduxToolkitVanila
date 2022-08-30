




const store = require('./rtk/app/store')
const {fetchedPost} = require('./rtk/Feature/post/postSlice')

var titlePrev = '';
var newPosts='';
store.subscribe(()=>{
    const state = store.getState();
     console.log(state.post.posts['newQuirey'])
    if(state.post.posts['newQuirey']){
        state.post.posts['newQuirey'].map((value, index, array) => {

            const splitedKeywordOfPrev = state.post.posts['prevTitle'].split(" ")
            const splitedKeywordOfNew = value.title.split(" ")
    
            let keyWordsMached='';
            splitedKeywordOfPrev.forEach((value, index, array) => {
                splitedKeywordOfNew.forEach((valueNew, indexnew, arraynew) => {

                    if(value===valueNew){
                        keyWordsMached+=`<p style="background-color:green;padding:5px;margin:5px;display:inline-block;font-size:14">${valueNew}</p>`;
                    }
                })
                
            })

            newPosts+=`<div style="padding:15px;margin:10px;border:1px solid black">
                <h2>${index},${value['title']} | ${keyWordsMached}</h2>
                <p>${value['body']}</p>
            </div>`
        })
    }
    
    titlePrev = `<h1><i>Previous Title: </i> ${state.post.posts['prevTitle']}</h1><hr><br>`
    
    // document.querySelector('h3').innerHTML=state.post.error
})



store.dispatch(fetchedPost())
// store.dispatch(fetchedQueryPost())

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