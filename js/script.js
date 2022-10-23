const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1
const cat =  {
        complain: function (noise){
            console.log(noise);
        }
    }

cat.complain("Meow!");

//Question 2 
const heading = document.querySelector("h3");
heading.innerHTML = "updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4 
heading.classList.add("subheading");

//Question 5 
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

//Question 6 
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p> New paragraph </p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7 
function loopThrough (list) {
    for (let i = 0; i < list.length; i++){
        console.log(list[i].name);
    }
}

loopThrough(cats)

//Question 8
const catContainer = document.querySelector(".cat-container");

function createCats (cats) {

    let catWrap = "";
    for (let i = 0; i < cats.length; i++ ){
        const catName = "<h5>" + cats[i].name + "</h5>";
        let catIAge = cats[i].age;

        if (catIAge === undefined){
            catIAge = "Age Unknown";
        } 

        const catAge = "<p>" + catIAge + "</p>"; 
        catWrap += "<div>" + catName + catAge + "</div>";
    }
    catContainer.innerHTML = catWrap;
}

createCats(cats);


