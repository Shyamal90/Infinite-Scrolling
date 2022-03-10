let limit = 25;
let page = 1;
let postCount = 1;

//initial I added to the container 25 items
let container = document.querySelector(".container");



//get data and append in container
const getData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    const data = await response.json();

    //append in container
    data.map((currPost)=>{
        const post = `
                    <div class="post_container">
                       <h1 class="post_id">${postCount++}</h1>
                      <h3 class="post_heading">${currPost.title}</h3>
                      <p class="post_desc">${currPost.body}</p>
                    </div>`;

        
       container.insertAdjacentHTML('beforeend',post);
        
    })
}

getData();

let maxScrolled = 3575;

//scrol top
container.addEventListener("scroll",()=>{
    // console.log(container.scrollTop);
    // console.log(container.scrollHeight);//scrollHeight property return the entire hight of element in pixels , including padding , but not the border , scrollbar or margin.

    // console.log(container.clientHeight); // clientHeight property return the viewable height of an element in pixels, including padding , but not the border , scrollbar or margin.

    // console.log(container.scrollTop)

    if(container.scrollTop + container.clientHeight >= container.scrollHeight){
        console.log("You are end of container",maxScrolled);
        getData();
        
    }

})











// const setTimmer = () =>{
//     setInterval(getData,1000);
// }