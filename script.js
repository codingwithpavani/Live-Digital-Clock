function display(){
    let now = new Date();

    let hours = now.getHours().toString().padStart(2,"0");
    let mins = now.getMinutes().toString().padStart(2,"0");
    let seconds = now.getSeconds().toString().padStart(2,"0");
    //let milliSeconds = now.getMilliseconds().toString().padStart(2,"0");

    let currentTime = `${hours}:${mins}:${seconds}`;

    document.getElementById("clock").textContent=currentTime;
}

setInterval(display,1000);

display();