async function getCommentData() {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
        console.log(res.data);
    } catch (err) {
        console.error(err.message);
    }
}
getCommentData();

function adduser(email,password){
    axios.post('/user',{
        email: email,
        password:password
    })
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.error(err.message);
    });
}
adduser("tamanna2461@gmail.com","password123")
