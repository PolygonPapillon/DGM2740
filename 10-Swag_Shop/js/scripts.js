/* function toggleMenu() {
  document.getElementById("smallNav").classList.toggle("hide");
}
 */
//Create a button and give it an ID of "smallNav"
//Attach an ID of "primaryNav" to the UL of the unordered list that holds your links
function toggleMenu() {
  document.getElementById("smallNav").classList.toggle("open");
  document.getElementById("primaryNav").classList.toggle("open");
}
var x = document.getElementById('smallNav');
x.onclick = toggleMenu; 