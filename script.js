let ny=()=>{
    let name = document.getElementById("npt").value;
    document.getElementById("msg").innerHTML= "Happy New Year " + name + "!";
    document.getElementById("frwks").src="fireworks.webp"
}

document.getElementById("btn").addEventListener("click", ny );