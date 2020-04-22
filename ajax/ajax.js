window.onload = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        console.log(`readyState = ${xhttp.readyState}, status = ${xhttp.status}`);
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.response);
            console.log(xhttp.responseText);
            document.getElementsByTagName("div")[0].innerHTML = xhttp.responseText;
        }
    }
    xhttp.open("GET", "https://waka.vn/", true);
    xhttp.send();
}