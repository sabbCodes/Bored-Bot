document.getElementById("get-btn").addEventListener("click", function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        document.getElementById("suggestion").textContent = data.activity
    })
    document.getElementById("header").textContent = "☠️HappyBot☠️"
    document.body.classList.add("active")
})