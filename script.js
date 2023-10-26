//your code here
function swapTheme(){
    let app = document.getElementById("app");
    // let swapbutton = document.getElementById("swap")

    if(app.classList.contains("day")){
        app.classList.remove("day");
        app.classList.add("night");
        

    }
    else{
        app.classList.remove("night");
        app.classList.add("day");
    }
} 
