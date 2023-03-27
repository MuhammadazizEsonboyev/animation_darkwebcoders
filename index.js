


let next = document.querySelector(".next")
let car1 = document.querySelectorAll("img")
alert("L ni bosing")

document.addEventListener("keydown", (e) => {
    if (e.key === "l") {
        document.getElementById('car_audio').play();
    }
    if (e.key === "ArrowRight") {
        car1[1].style.display = "block"
        car1[0].style.display = "none"
        document.getElementById('audio').play();
        setTimeout(() => {
            car1[1].style.display = "none"
            car1[0].style.display = "block"
        }, [1000])
        setTimeout(() => {
            car1[0].style.display = "none"
            car1[1].style.display = "block"
        }, [1600])
    } else if (e.key === "ArrowLeft") {
        car1[0].style.display = "block"
        car1[1].style.display = "none"
    } else {
        // alert("Biiiiib")
    }

})