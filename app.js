"use strict";

// SELECTORS
const Form = document.getElementById("Form");
const MemberGroupInput = document.getElementById("MemberGroupInput");
const MemberListInput = document.getElementById("MemberListInput");
const SubmitButton = document.getElementById("SubmitButton");
const Group = document.getElementById("Group");
const Alert = document.querySelector(".alert");

// FUNCTIONS
/*
  SHUFFLE ARRAY
  Starting from here we generate our groups.
  
  Don't worry about this part so much We used the approach to shuffle our array and afterwards we split it up shuffleArray and chunk are just auxil functions.

    https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
*/
function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/*
    CHUNK ARRAY
    we consistently reduce the problem set(i.e the size of the array) by slicing off chunks of the required size until all elements within the array have been grouped.
      
    To this effect, we add a conditional at the beginning to serve as the terminating condition such that when the number of remaining elements is less than or equal to the specified size, we simply return all the remaining elements as one group.
  
    https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/array-chunking
*/
function chunkArray(array, size) {
  if (array.length <= size) {
    return [array];
  }
  return [array.slice(0, size), ...chunkArray(array.slice(size), size)];
}
/*
  RANDOMIZE
  this function Process the Array like take input then Shuffle and Chunk the Arrays
*/
function Randomize() {
  // Convert textarea into Array
  let arrMemberList = MemberListInput.value
    .replace(/^\s+|\s+$/gm, "")
    .split("\n");

  // Convert Group input into Number
  let MemberGroup = parseInt(MemberGroupInput.value);

  // Suffle the Arrays
  let shuffledArr = shuffleArray(arrMemberList);

  // chunk the Arrays
  let slicedArr = chunkArray(shuffledArr, MemberGroup);

  return slicedArr;
}
/*
  RENDER TEAM LIST
  this function create elements and Looping fill with Arrays
*/
function renderTeam(arr) {
  // reset
  Form.reset();
  Group.innerHTML = "";

  // Loop make elements & Fill the value from array
  return arr.forEach((item, index) => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    Group.className = "row row-cols-2 row-cols-lg-5 g-2 g-lg-3";
    div.className = "col bg-light border mx-auto p-3";

    Group.appendChild(div);
    div.appendChild(h2);
    div.appendChild(p);

    h2.innerText = `Team ${index + 1}`;
    p.innerText = item;
  });
}

// EVENT LISTENER
SubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (MemberGroupInput.value == "" || MemberListInput.value == "") {
    Form.reset();
    Group.innerHTML = "";

    Alert.classList.remove("d-none");
    MemberGroupInput.classList.add("is-invalid");
    MemberListInput.classList.add("is-invalid");
  } else {
    Alert.classList.add("d-none");
    MemberGroupInput.classList.remove("is-invalid");
    MemberListInput.classList.remove("is-invalid");

    renderTeam(Randomize());
  }
});
