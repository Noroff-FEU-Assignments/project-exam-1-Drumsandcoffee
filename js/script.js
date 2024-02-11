//const baseUrl ="http://localhost/ProjectExam/wordpress-6.1.1/wordpress/wp-json/wp/v2/posts/"

let page = 1;
const baseUrl = `http://localhost/ProjectExam/wordpress-6.1.1/wordpress/wp-json/wp/v2/posts?per_page=10&_embed`
const carousel = document.querySelector(".carouselContainer");
const moreButton = document.querySelector(".button_viewMore");
const error = document.querySelector(".error");



const postContainer = document.querySelector(".postContainer");
const displayPost = document.querySelector(".display_post");
const latestPostsContainer = document.querySelector("latestPosts_container");
const morePostsButtonContainer = document.querySelector(".more_posts_button_container");
const morePostsButton = document.querySelector(".more_posts_button");
const nextButton = document.querySelector("#prevBtn");
const prevButton = document.querySelector("#nextBtn");





async function getPosts(url){
    
    const response = await fetch(baseUrl);
    const results = await response.json();
    console.log(results)
    //console.log(results[0].embedded.wpfeaturedmedia);

    for (let i = 0; i < results.length; i++) {
        console.log(results[i].title.rendered)
        const id = results[0].guid.id;
        postContainer.innerHTML +=
        `
        
        <div class="postHeading">
        <h2>${results[i].title.rendered}</h2></div>
        <div class blog_content>
        <p>${results[i].content.rendered}</p>
        </div>
        
        
    
        `   
    }}
        getPosts();
