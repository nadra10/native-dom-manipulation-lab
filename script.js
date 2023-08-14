let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.querySelector('#main-title').textContent = "DOM's Portfolio";

  // Part 2
  document.body.style.backgroundColor = "#FAE4D3";


  // Part 3
  let favoriteThingsList = document.querySelector('#favorite-things');
  let lastListItem = favoriteThingsList.lastElementChild;
  favoriteThingsList.removeChild(lastListItem);
  

  // Part 4

// let newFontSize = document.querySelectorAll('.special-title');
// newFontSize.style.fontSize = "2em";

// document.querySelectorAll('.special-title').style.fontSize = "2em";

let fSize = document.querySelectorAll('.special-title');
console.log(fSize);
for (let i = 0; i < fSize.length; i++){
  fSize[i].style.fontSize = "2em";
}



  // Part 5
  let nList = document.querySelector('#past-races').children
  console.log(nList)
  for (var i = 0; i < nList.length; i++) {

    if (nList[i].innerHTML === "Chicago") {
      nList[i].remove();

    }
  }







  // Part 6

  let newList = document.createElement("li");
  let newCity = document.createTextNode("Boston");
  newList.appendChild(newCity);
  document.querySelector('#past-races').appendChild(newList);

  // Part 7
let newDiv = document.createElement('div');
newDiv.className = 'blog-post';
let newHeader = document.createElement('h2');
newHeader.innerHTML = 'New City';
let newP = document.createElement('p');
newP.innerText = 'This is my new paragraph';
newDiv.append(newHeader);
newDiv.append(newP);
console.log(newDiv);

  // Part 8

 let quoteTitle = document.querySelector('#quote-title');
 quoteTitle.addEventListener('click',(event) => {
  randomQuote();
 });

  // Part 9

let blogs = document.querySelectorAll('.blog-post');
console.log(blogs.length);
blogs.forEach((blog) => {
  blog.addEventListener('mouseenter',(event) => {
    console.log("mouse enter")
    blog.classList.remove('purple')
    blog.classList.add('red')
  });

  blog.addEventListener('mouseout',(event) => {
    console.log('mouse out')
    blog.classList.remove('red')
    blog.classList.add('purple')
  });
});



});
