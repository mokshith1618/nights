function postfeed() {
    let Name = document.getElementById("nameInFeedback").value;
    let feed = document.getElementById("post").value;
    if (Name != "" && feed != "") {
        let nameid = document.createElement("h1");
        let feedcontainer = document.createElement("div");
        let feedcontent = document.createElement("p");
        nameid.textContent = Name;
        nameid.style.fontWeight = "bolder";
        feedcontent.textContent = feed;
        nameid.classList.add("n-name-2");
        feedcontainer.appendChild(nameid);
        feedcontainer.appendChild(feedcontent);
        feedcontainer.classList.add("feedback");
        document.getElementById("Feedback").appendChild(feedcontainer);
        document.getElementById("nameInFeedback").value = "";
        document.getElementById("post").value = "";
    } else {
        alert("Fill all the Required Details!");
    }
}

function postmusic() {
    let nameInRecommend = document.getElementById("nameInRecommend").value;
    let music = document.getElementById("music").value;
    if (nameInRecommend != "" && music != "") {
        let nameid = document.createElement("h1");
        let Recommendcontainer = document.createElement("div");
        let Recommendcontent = document.createElement("p");
        nameid.textContent = nameInRecommend;
        nameid.style.fontWeight = "bolder";
        Recommendcontent.textContent = music;
        nameid.classList.add("n-name-2");
        Recommendcontainer.appendChild(nameid);
        Recommendcontainer.appendChild(Recommendcontent);
        Recommendcontainer.classList.add("feedback");
        document.getElementById("Recommend").appendChild(Recommendcontainer);
        document.getElementById("nameInRecommend").value = "";
        document.getElementById("music").value = "";
    } else {
        alert("Fill all the Required Details!");
    }
}