// const cats = [
//     {
//         name: "Blob",
//         age: 10
//     },
//     {
//         name: "Harold",
//     },
//     {
//         name: "Blurt",
//         age: 21
//     }
// ];

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