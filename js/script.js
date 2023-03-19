const baseUrl ="https://tmprojects.no/projectexam/wp-json/wp/v2/posts/?_embed&acf_format=standard&per_page=10"
const postContainer = document.querySelector(".postContainer");
const carousel = document.querySelector(".carouselContainer");
const moreButton = document.querySelector(".button_viewMore");
const error = document.querySelector(".error");




async function getPosts(url){
    
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    console.log(results[0]._embedded['wp:featuredmedia']);

    for (let i = 0; i < results.length; i++) {
        postContainer.innerHTML +=
        `<div class="postHeading">
        <h2>${results[i].title.rendered}</h2></div>
        <div class="postText"> ${results[i].excerpt.rendered}</div>
        <img src="${results[i]._embedded['wp:featuredmedia'][0].source_url}" />
    
            `
    }}
        getPosts(baseUrl);




/*async function getPosts () {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);

    

    postContainer.innerHTML = "";
    for (i = 0 ; i < result.length; i++) {
        const id = result[i].id;
        const image = result[i]._embedded["wp:featuredmedia"][0];
        const title = result[i].title.rendered;
        const previousText = result[i].excerpt.rendered;


        if(result.length < 10) {
            nextPosts.style.display = "none";
        }  

        postContainer.innerHTML += 
        `<div class="post">
        <a href="detail.html?id=${id}">
        <h2>${title}</h2>
        <img src="${image}" alt="image of ${title}" />
        <p>${previousText}</p>
        </a>
        </div>`
        ;
       
    };
}
 
getPosts(baseUrl);
*/








