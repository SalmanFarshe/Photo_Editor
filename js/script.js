var allInput = document.querySelectorAll("input");

allInput.forEach(function(element, index, nodess){
    element.addEventListener("change",myFunction)
    element.addEventListener("mousemove",myFunction)
});

function myFunction(){
    var suff = this.dataset.px || "";
    var solid = "solid"
    var color_input = document.querySelector(".color_input");
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suff)
}