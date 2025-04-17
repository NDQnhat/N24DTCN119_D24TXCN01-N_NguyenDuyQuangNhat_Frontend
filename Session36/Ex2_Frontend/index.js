let countLike = JSON.parse(localStorage.getItem("countLike")) || [
    {id: 1, name: "Bún bò Huế", liked: 0},
    {id: 2, name: "Phở bò Hà Nội", liked: 0},
    {id: 3, name: "Cơm tấm Sài Gòn", liked: 0},
];

document.getElementById("container").addEventListener("click", function(event) {
    if(event.target.classList.contains("like-btn")){
        let id = +(event.target.getAttribute("data-id"));
        let found = countLike.find(element => element.id === id);
        if(found) {
            found.liked++;
            const likeDiv = document.querySelector(`div[data-id="${id}"]`); // Tìm thẻ hiển thị lượt thích
            if (likeDiv) {
                likeDiv.innerHTML = `❤️ ${found.liked} lượt thích`; // Cập nhật giao diện
            }
            localStorage.setItem("countLike", JSON.stringify(countLike));
        }
    }
});

countLike.forEach(item => {
    const likeDiv = document.querySelector(`div[data-id="${item.id}"]`);
    if (likeDiv) {
        likeDiv.innerHTML = `❤️ ${item.liked} lượt thích`;
    }
});
