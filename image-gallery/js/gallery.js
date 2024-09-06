const accessKey = "gb3Ip1vqqcoMsD11w9gMVCao1-Hc-mEFXDIk3PxJ2Cs";

const formEl = document.querySelector("form");
const inputEl = document.querySelector(".name-picture");
const searchResults = document.querySelector(".search-results");


searchImages("spring");


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    searchImages(inputEl.value);
});


async function searchImages(searchToken) {
    
    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchToken}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    

    const results = data.results; 

        searchResults.innerHTML = "";

    results.map((result) => {
        const imageWrapper = document.createElement('div');
        
        imageWrapper.classList.add("result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        imageWrapper.appendChild(image);
        searchResults.appendChild(imageWrapper);
    });

}








// async function searchImages() {
//     const url = `https://api.unsplash.com/search/photos?page=1&query=spring&client_id=${accessKey}`;
    
//     const response = await fetch(url);
//     const data = await response.json();

//     const results = data.results; 

//         searchResults.innerHTML = "";

//     results.map((result) => {
//         const imageWrapper = document.createElement('div');
//         imageWrapper.classList.add("result");
//         const image = document.createElement('img');
//         image.src = result.urls.small;
//         image.alt = result.alt_description;

//         imageWrapper.appendChild(image);
//         searchResults.appendChild(imageWrapper);
//     });

// }

// function setFocus()
// {
//      document.querySelector(".name-picture").focus();
// }
// setFocus()