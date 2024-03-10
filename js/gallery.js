// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements
    const thumbnailList = document.getElementById("thumbnail-list");
    const featuredImage = document.getElementById("featured-image");
    const imageInfo = document.getElementById("image-info");
    // Image data
    const images = [
        { src: "images/flowers-pink-large.jpg", thumbnail: "images/flowers-pink-small.jpg", info: "Pink Flowers" },
        { src: "images/flowers-purple-large.jpg", thumbnail: "images/flowers-purple-small.jpg", info: "Purple Flowers" },
        { src: "images/flowers-red-large.jpg", thumbnail: "images/flowers-red-small.jpg", info: "Red Flowers" },
        { src: "images/flowers-white-large.jpg", thumbnail: "images/flowers-white-small.jpg", info: "White Flowers" },
        { src: "images/flowers-yellow-large.jpg", thumbnail: "images/flowers-yellow-small.jpg", info: "Yellow Flowers" }
    ];
    // Display image based on index
    function displayImage(index) {
        const image = images[index];
        featuredImage.src = image.src;
        featuredImage.alt = image.info;
        imageInfo.textContent = image.info;
    }
    // Create thumbnail images and append them to the list
    images.forEach((image, index) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = image.thumbnail;
        img.alt = image.info;
        img.addEventListener("click", () => {
            displayImage(index);
        });
        li.appendChild(img);
        thumbnailList.appendChild(li);
    });
 // Display the first image initially
    displayImage(0); 
});
