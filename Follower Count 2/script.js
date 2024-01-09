let followerCount = 0;

document.getElementById("followButton").addEventListener("click", function() {
    followerCount++;
    document.getElementById("followerCount").innerText = followerCount;
});
