div=document.querySelector("div");
span=document.querySelectorAll("span");
function showList(){
    div.style.width="235px";
    var i;
    for (i = 0; i < span.length; i++) {
        span[i].style.display="inline-block";
        span[i].style.margin="auto";
        span[i].style.width="200px";
    }
}
function out(){
    div.style.width="40px";
    for (i = 0; i < span.length; i++) {
        span[i].style.display="none";
    }
}