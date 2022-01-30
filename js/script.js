
// Question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

cat.complain();

// Logs "Meow!"

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = `Updated Heading`;

// Question 3

document.querySelector("h3").style.fontSize = "2em";

// Question 4

heading.className += "subheading";

// Question 5

const paragraph = document.querySelectorAll("p");

for(let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New Paragraph</p>`;

resultsContainer.style.background = "yellow";

// Question 7

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

function listLoop(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(cats[i].name);
    }
}

listLoop(cats);

// Logs Blog, Harold, and Blurt

// Question 8

function createCats(cats) {
    for(let i = 0; i < cats.length; i++) {
        
    }
}
