let rates = JSON.parse(localStorage.getItem("rates")) || [];
// class saved {
//     constructor(star, comment) {
        
//     }
// }

submitReview = function() {
    let comment = document.getElementById("comment-input").value;
    if(quantityStar === 0 || comment === "") {
        document.getElementById("selected-rating").style.display = "block";
        return;
    } else {
        document.getElementById("selected-rating").style.display = "none";
        let stars = ""
        for(let i = 0; i < quantityStar; i++) {
            stars += "★";
        }
        rates.push({star: stars, cmt: comment});
        renderList();
        localStorage.setItem("rates", JSON.stringify(rates));
    }
};
let quantityStar = "";

document.getElementById("rating").addEventListener("click", function (event) {
    if(event.target.classList.contains("stars")) {
        quantityStar = +(event.target.getAttribute("data-value"));
    }
});

function renderList() {
    let html = "";
    rates.forEach(element => {
        html += `<li> <span>${element.star}</span> <b>${element.cmt}</b> </li>`;
    });
    document.getElementById("comment-list").innerHTML = html;
};

renderList();