//your code here
function swapTheme(){
    let app = document.getElementById("app");
    let swapbutton = document.getElementById("swap")

    if(app.classList.contains("day")){
        app.classList.remove("day");
        app.classList.add("night");
        swapbutton.classList.remove("button_day")
        swapbutton.classList.add("button_night")    

    }
    else{
        app.classList.remove("night");
        app.classList.add("day");
        swapbutton.classList.remove("button_night")
        swapbutton.classList.add("button_day")
    }
} 
