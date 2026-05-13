const books = [
{
    img: "img2/bookslider1.jpeg",
    title: "We’ll Prescribe You a Cat",
    author: "Syou Ishida",
    rating: "3.8/5"
},
{
    img: "img2/bookslider2.jpeg",
    title: "The Keeper",
    author: "Tana French",
    rating: "4.1/5"
},
{
    img: "img2/bookslider3.jpeg",
    title: "The Blue Beautiful World",
    author: "Karen Lord",
    rating: "4.4/5"
},
{
    img: "img2/bookslider4.jpeg",
    title: "Beloved",
    author: "Toni Morrison",
    rating: "4.0/5"
},
{
    img: "img2/bookslider5.jpeg",
    title: "Holding the Reins",
    author: "Paisley Hope",
    rating: "4.2/5"
}
];

const bs = [1,2,3,4,5];
const bookSlider = document.querySelector(".book-slider");
const image = bookSlider.querySelector(".image");
const title = bookSlider.querySelector(".title");
const author = bookSlider.querySelector(".author");
const rating = bookSlider.querySelector(".rating");

const buttons = bookSlider.querySelectorAll(".slider-btn");

let indb = 0;

function updateBook()
{
    image.src = books[indb].img;
    title.textContent = books[indb].title;
    author.textContent = books[indb].author;
    rating.textContent = books[indb].rating;
}

    buttons.forEach((b) =>
    {
    b.addEventListener("click", () =>
    {
        if (b.classList.contains("left"))
        {
            indb--;

            if (indb < 0)
            {
                indb = books.length - 1;
            }
        }
        else
        {
            indb++;

            if (indb === books.length)
            {
                indb = 0;
            }
        }

        updateBook();
    });
    });
            





const podcasts = [
{
    img: "img6/podcast1.jpg",
    title: "Daebak Show w/ Eric Nam (Since 2019)",
    author: "Eric Nam",
    rating: "5/5"
},
{
    img: "img6/podcast2.jpeg",
    title: "Finshots Daily (Since 2020)",
    author: "Shrehith Karkera",
    rating: "4.7/5"
},
{
    img: "img6/podcast3.jpeg",
    title: "Ted Talks Daily (Since 2014)",
    author: "Elise Hu",
    rating: "4.4/5"
},
{
    img: "img6/podcast4.jpeg",
    title: "Garner's Greek Mythology (Since 2020)",
    author: "Patrick Garner",
    rating: "4.5/5"
},
{
    img: "img6/podcast5.jpeg",
    title: "India Talks (Since 2020)",
    author: "Sreelakshmi Manoj",
    rating: "4.2/5"
}
];

const sg1 = [1,2,3,4,5];
const pod = document.querySelector(".pod");
const titlep = document.querySelector(".titlep");
const authorp = document.querySelector(".authorp");
const ratingp = document.querySelector(".ratingp");

const buttonsp = document.querySelectorAll(".audio-slider .slider-btn");

let indp = 0;

function updatePodcast()
{
    pod.src = podcasts[indp].img;
    titlep.textContent = podcasts[indp].title;
    authorp.textContent = podcasts[indp].author;
    ratingp.textContent = podcasts[indp].rating;
}

    buttonsp.forEach((b) =>
    {
    b.addEventListener("click", () =>
    {
        if (b.classList.contains("left"))
        {
            indp--;

            if (indp < 0)
            {
                indp = podcasts.length - 1;
            }
        }
        else
        {
            indp++;

            if (indp === podcasts.length)
            {
                indp = 0;
            }
        }

        updatePodcast();
    });
    });
            