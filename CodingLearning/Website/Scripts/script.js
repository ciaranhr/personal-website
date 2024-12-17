const myHeading = document.querySelector("h1");
//myHeading.textContent = create_permutations();

array = [
  ["a", "b", "c"],
  [1, 2, 3],
  ["x", "y", "z"],
];

function create_permutations(array) {
  /*
  ["a1x, a1y, a1z, a2x, a2y, a2y"]
  */
  console.log(array);
  if (array.length == 1) {
    return 1;
  }
  return create_permutations(array.slice(1)];
}

console.log(create_permutations(array));
console.log("done");
