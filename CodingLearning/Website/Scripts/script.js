const myHeading = document.querySelector("h1");
//myHeading.textContent = create_permutations();

array = [
  ["a", "b", "c"],
  [1, 2, 3],
  ["x", "y", "z"],
];

function create_combinations(array, prefix = "") {
  /*
  ["a1x, a1y, a1z, a2x, a2y, a2z"]
  */
  if (array.length < 1) {
    return [prefix];
  }

  let combinations = [];
  for (let i of array[0]) {
    combinations.push(create_combinations(array.slice(1), prefix + i));
  }
  return combinations;
}
console.log(create_combinations(array));
console.log("done");
