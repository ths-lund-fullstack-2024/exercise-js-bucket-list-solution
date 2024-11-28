const list = document.querySelector(".list");

// #1.
const earn100k = document.createElement("p");
earn100k.innerText = "Earn 100k a month";
list.appendChild(earn100k);

// #2.
const visitGreenland = document.createElement("p");
visitGreenland.innerText = "Visit Greenland";
list.insertAdjacentElement("beforeend", visitGreenland);

// #3.
const innerHTMLOfList = list.innerHTML;
console.log(innerHTMLOfList);

// #4/#5.
const climbK2 = `<p>Climb K2</p>`;
// list.innerHTML = climbK2;

// #6.
list.insertAdjacentHTML("beforeend", climbK2);

// #7.
const bucketListItems = [
  "Buy a Ferrari",
  "Visit Silverstone - F1 Grand Prix",
  "Turn 100 years old",
];

// Alt  1 - Create a p tag for each element and then use a forEach to insert
// bucketListItems.forEach((item) => {
//   const p = document.createElement("p");
//   p.innerText = item;
//   list.insertAdjacentElement("beforeend", p);
// });

// Alt 2 - Map the array to contain html strings and then use a forEach to insert
bucketListItems
  .map((item) => `<p>${item}</p>`)
  .forEach((item) => {
    list.insertAdjacentHTML("beforeend", item);
  });

// #8.
const numberOfChildren = list.children;
console.log(numberOfChildren.length);

// #9.
const owner = document.querySelector(".owner");
owner.innerText = "Niklas'";

// #10.
const becomeProFootballer = document.createElement("p");
becomeProFootballer.innerText = "Become a Pro footballer";
list.replaceChild(becomeProFootballer, list.firstElementChild);

// #11.
const children = list.children;
const item2 = children[2];

const visitIceland = document.createElement("p");
visitIceland.innerText = "Visit Iceland";

list.replaceChild(visitIceland, item2);

// #12.
list.removeChild(list.lastElementChild);
