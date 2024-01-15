let ny=()=>{
    let name = document.getElementById("npt").value;
    document.getElementById("msg").innerHTML= "Happy New Year " + name + "!";
    document.getElementById("frwks").src="fireworks.webp"
}

document.getElementById("btn").addEventListener("click", ny );

let ch=()=>{
    let name = document.getElementById("npt").value;
    document.getElementById("msg2").innerHTML= "Merry Christmas " + name + "!";
    document.getElementById("santa").src="christmas.jpeg"
}

document.getElementById("btn2").addEventListener("click", ch );