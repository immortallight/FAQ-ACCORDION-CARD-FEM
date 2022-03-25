//add selector
document.querySelectorAll(".question").forEach((question) =>question.addEventListener("click", () => {
 
    if(question.parentNode.classList.contains("active")){

        question.parentNode.classlist.toggle("active")
 }
 else{
     document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove("active"))

     question.parentNode.classList.add("active")
 }
 

}))