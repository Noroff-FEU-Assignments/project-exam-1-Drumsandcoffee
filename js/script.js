const baseUrl ="https://tmprojects.no/projectexam/wp-json/wp/v2/posts/?_embed&acf_format=standard&per_page=10"
const postContainer = document.querySelector(".postContainer");
const carousel = document.querySelector(".carouselContainer");
const moreButton = document.querySelector(".button_viewMore");
const error = document.querySelector(".error");


async function getPosts(){
    
    const response = await fetch(baseUrl);
    const results = await response.json();
    console.log(results)
    console.log(results[0]._embedded['.wpfeaturedmedia']);

    for (let i = 0; i < results.length; i++) {
        const id = results[0].guid.id;
        postContainer.innerHTML +=
        `<a href="detail.html?id=${id}">
        <div class="postHeading">
        <h2>${results[i].title.rendered}</h2></div>
        <div class="postText"> ${results[i].excerpt.rendered}</div>
        <img src="${results[i]._embedded['wp:featuredmedia'][0].source_url}"/>
    `
    }}
        getPosts(baseUrl);
