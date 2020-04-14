window.onload = function() {
    this.main();
};

const firstPage = -42.99;
const lastPage = -100.31;

let percent = -42.99;

function main() {
    console.log("main is called");
    document.getElementById("prev-btn").onclick = function() {
        if (window.getComputedStyle(document.getElementById("base")).getPropertyValue("transition-duration") == "0s") {
            document.getElementById("base").style.transitionDuration = "0.5s";
        }

        percent += 14.33;
        let percetToString = percent + "%";
        document.getElementById("base").style.transform = `translateX(${percetToString})`;
        document.getElementById("base").ontransitionend = () => {
            console.log(window.getComputedStyle(document.getElementById("base")).getPropertyValue("transition-duration"));
            if (percent > -14) {
                percent = lastPage;
                document.getElementById("base").style.transitionDuration = "0s";
                document.getElementById("base").style.transform = `translateX(${percent}%)`;
            }
        };
    };

    document.getElementById("next-btn").onclick = function() {
        if (window.getComputedStyle(document.getElementById("base")).getPropertyValue("transition-duration") == "0s") {
            document.getElementById("base").style.transitionDuration = "0.5s";
        }
        percent -= 14.33;
        let percetToString = percent + "%";
        document.getElementById("base").style.transform = `translateX(${percetToString})`;
        document.getElementById("base").ontransitionend = () => {
            console.log(window.getComputedStyle(document.getElementById("base")).getPropertyValue("transition-duration"));
            if (percent <= -143.3) {
                percent = firstPage;
                document.getElementById("base").style.transitionDuration = "0s";
                document.getElementById("base").style.transform = `translateX(${percent}%)`;
            }
        };
    };

    let isMouseDrag = false;
    let isMouseDown = false;
    let curX = 0;
    let oldX = 0;
    let distanceX = 0;

    document.getElementById("base").onmousedown = function(event) {
        isMouseDown = true;
        oldX = event.clientX;
    };

    document.getElementById("base").onmousemove = function(event) {
        if (isMouseDown) {
            curX = event.clientX;
            distanceX = curX - oldX;
            oldX = curX;
            let base = document.getElementById("base");
            let baseW = document.getElementById("base-mw").clientWidth;
            let percentDistance = distanceX / baseW * 100;
            percent += percentDistance;
            base.style.transform = `translateX(${percent}%)`;
        }
    };

    document.getElementById("base").onmouseup = function(event) {
        isMouseDown = false;
        isMouseDrag = false;
    };

    let buttons = document.getElementById("node-area").children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            for (let j = 0; j < buttons.length; j++) {
                if (j !== i) {
                    buttons[j].removeAttribute("class");
                }
            }
            buttons[i].setAttribute("class", "button-active");
            switch (i) {
                case 0:
                    percent = -42.99;
                    break;
                case 1:
                    percent = -85.98;
                    break;
                case 2:
                    percent = -128.97;
                    break;
                default:
                    percent = 0;
                    break;
            }
            document.getElementById("base").style.transform = `translateX(${percent}%)`;
        };
    }

    document.querySelector("#text-input .button").onclick = function() {
        switch (document.querySelector("#text-input input").value) {
            case "0":
                percent = -42.99;
                break;
            case "1":
                percent = -85.98;
                break;
            case "2":
                percent = -128.97;
                break;
            default:
                break;
        }
        document.getElementById("base").style.transform = `translateX(${percent}%)`;
    };
}