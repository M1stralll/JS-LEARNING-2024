const accessKey = "gb3Ip1vqqcoMsD11w9gMVCao1-Hc-mEFXDIk3PxJ2Cs";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");

let inputData = "";
let page = 1;

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    searchImages();
});

async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results; 

    if (page === 1){
        searchResults.innerHTML = "";
    }

    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;

        imageWrapper.appendChild(image);
        searchResults.appendChild(imageWrapper);
    });

    page++;
}
