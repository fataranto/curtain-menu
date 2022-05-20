document.querySelector("span").addEventListener("click", function(){
    console.log("clicked");
    document.querySelector("#myNav").style.width = "100%";
})

document.querySelector(".closebtn").addEventListener("click", function(){
    console.log("clicked");
    document.querySelector("#myNav").style.width = "0";
})




