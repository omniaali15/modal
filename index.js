var openbutton = document.getElementById("btn");
var closeimgclick = document.querySelector(".modal-close-img");
var closebutton = document.getElementById("closebtn");
var overlayCont = document.querySelector(".overlay");
var displaymodal = document.querySelector(".modal");
openbutton.addEventListener("click", function () {

	overlayCont.style.opacity = "1"
	displaymodal.style.opacity= "1"
})
closeimgclick.addEventListener("click", function () {
	displaymodal.style.opacity= "0"
	setTimeout(()=>{overlayCont.style.opacity = "0"},500)
})
closebutton.addEventListener("click", function () {
	displaymodal.style.opacity= "0"
	setTimeout(()=>{overlayCont.style.opacity = "0"},500)
})
document.addEventListener("keydown", function (e) {

	if (e.keyCode == 27) {
		displaymodal.style.opacity= "0"
	setTimeout(()=>{overlayCont.style.opacity = "0"},500)
	}

})
window.onclick = function(event) {
	if (event.target == overlayCont) {
		displaymodal.style.opacity= "0"
	setTimeout(()=>{overlayCont.style.opacity = "0"},500);
	}
  }