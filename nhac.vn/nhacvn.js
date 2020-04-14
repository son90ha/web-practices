$(document).ready(() => {
    // $("#arrow-left").click(() => {
    //     let allImg = document.getElementsByClassName("slide-img");
    //     for (let i = 0; i < allImg.length; i++) {
    //         if (allImg[i].style.opacity == 1) {
    //             allImg[i].style.opacity = 0;
    //             let prev = i === 0 ? allImg.length - 1 : i - 1;
    //             allImg[prev].style.opacity = 1;
    //             break;
    //         }
    //     }
    // })

    // $("#arrow-right").click(() => {
    //     let allImg = document.getElementsByClassName("slide-img");
    //     for (let i = 0; i < allImg.length; i++) {
    //         if (allImg[i].style.opacity == 1) {
    //             allImg[i].style.opacity = 0;
    //             let prev = i === allImg.length - 1 ? 0 : i + 1;
    //             allImg[prev].style.opacity = 1;
    //             break;
    //         }
    //     }
    // })
    let isAnimatePlaying = false;
    $("#arrow-left").click(function(e) {
        if (isAnimatePlaying) {
            return;
        }
        let allImg = document.getElementsByClassName("slide-img");
        for (let i = 0; i < allImg.length; i++) {
            if ($(allImg[i]).css("display") != "none") {
                let cur = i;
                isAnimatePlaying = true;
                $(allImg[cur]).animate({ left: "-828px" }, "slow", function() {
                    $(allImg[cur]).css("display", "none");
                    isAnimatePlaying = false;
                });
                let prev = cur === 0 ? allImg.length - 1 : cur - 1;
                $(allImg[prev]).css("left", "830px");
                $(allImg[prev]).css("display", "block");
                $(allImg[prev]).animate({ left: "0px" }, "slow");
                break;
            }
        }
    });

    $("#arrow-right").click(function(e) {
        if (isAnimatePlaying) {
            return;
        }
        let allImg = document.getElementsByClassName("slide-img");
        for (let i = 0; i < allImg.length; i++) {
            if ($(allImg[i]).css("display") != "none") {
                let cur = i;
                isAnimatePlaying = true;
                $(allImg[cur]).animate({ left: "830px" }, "slow", function() {
                    $(allImg[cur]).css("display", "none");
                    isAnimatePlaying = false;
                });
                let prev = cur === allImg.length - 1 ? 0 : cur + 1;
                $(allImg[prev]).css("left", "-828px");
                $(allImg[prev]).css("display", "block");
                $(allImg[prev]).animate({ left: "0px" }, "slow");
                break;
            }
        }
    });

    let listLi = document.querySelectorAll("#slide-node ul li");
    for (let i = 0; i < listLi.length; i++) {
        $(listLi[i]).click(function() {
            $(".slide-img").css("display", "none");
            let allImg = document.getElementsByClassName("slide-img");
            $(allImg[i]).css({ "display": "block", "left": "0" });
        });
    }
})