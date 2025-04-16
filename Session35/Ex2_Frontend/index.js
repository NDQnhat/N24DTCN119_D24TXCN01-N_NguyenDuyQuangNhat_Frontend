let bookmarks = JSON.parse(sessionStorage.getItem("bookmarks")) || [];

addBookmark = function() {
    let name = document.getElementById("web-name").value;
    let url = document.getElementById("web-url").value;

    if (name === "" || url === "") {
        alert("Cannot empty input!");
        return;
    }

    bookmarks.push({name, url});
    sessionStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderBookmark();
};

renderBookmark = () => {
    document.getElementById("row").innerHTML = "";
    bookmarks.forEach(element => {
        let html = document.createElement("div");
        html.classList.add("col");
        html.innerHTML = `<p>${element.name}</p>
                          <p>${element.url}</p>`;
        document.getElementById("row").appendChild(html);
    });
}