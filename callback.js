const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
]

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output
    }, 2000)
}
function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

createPost ({title : 'post three', body: "this is post three"}, getPosts);