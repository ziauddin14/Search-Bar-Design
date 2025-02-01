// Event listener for search button click
function searchAnimal() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("items");
  let found = false;

  for (let i = 0; i < x.length; i++) {
    if (x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "list-item";
      found = true;
    } else {
      x[i].style.display = "none";
    }
  }

  if (!found) {
    document.getElementById("noanimal").style.display = "block";
    document.getElementById("noanimal").style.color = "red";
    document.getElementById("noanimal").style.fontSize = "20px";
    document.getElementById("noanimal").style.marginTop = "20px";
    document.getElementById("noanimal").innerHTML =
      "No animals found matching your search.";
    setTimeout(function () {
      document.getElementById("noanimal").style.display = "none";
    }, 3000);
  }

  // document.getElementById('searchbar').value = "";
}

// function searchAnimal() {
//     // Check if the value is empty
//     if (search === "") {
//         alert("Please enter a search term");
//         return;
//     }
//     if (isNaN(search) === false) {
//         alert("Please enter a valid search term");
//         return;
//     }
//     if (isNaN(search) === true) {
//         alert("Searching for " + search);
//     }
//     fetchAnimal(search);
// }
// function fetchAnimal(search) {
