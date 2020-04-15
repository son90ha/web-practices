window.onload = () => {
    main();
};

function main() {
    let lis = document.getElementsByTagName("li");
    let imgs = document.getElementsByTagName("img");
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = () => {
            resetStatus();
            imgs[i].style.display = "block";
            lis[i].style.backgroundColor = "gray";
        }
    }

    let position = 0;
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    prev.onclick = () => {
        position = position - 1;
        position = position < 0 ? imgs.length - 1 : position;
        updateStatus(position);
    }

    next.onclick = () => {
        position = position + 1;
        position = position >= imgs.length ? 0 : position;
        updateStatus(position);
    }
}

function resetStatus() {
    let lis = document.getElementsByTagName("li");
    let imgs = document.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
        lis[i].style.backgroundColor = "#f9f9f9";
    }
}

function updateStatus(position) {
    let lis = document.getElementsByTagName("li");
    let imgs = document.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
        if (i == position) {
            imgs[i].style.display = "block";
            lis[i].style.backgroundColor = "gray";
        } else {
            imgs[i].style.display = "none";
            lis[i].style.backgroundColor = "#f9f9f9";
        }
    }
}