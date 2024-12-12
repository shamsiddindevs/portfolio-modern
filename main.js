let toogle = document.querySelector(".menu-img");
let navUl = document.querySelector("#nav")
console.log(window.innerWidth);

console.log(toogle);
console.log(navUl);


toogle.addEventListener('click',()=>{
 if(window.innerWidth < 610){
    if(navUl.style.display == "flex"){
        navUl.style.display = "none"
      }else{
        navUl.style.display = "flex"
      }
 }
  
})


