function init(){
    var element = document.getElementById("p_python");
    element.classList.add("active");
}

function onVideoClick(e){

    console.log(e)

    var element = document.getElementById(e);
    var otherClasses = document.getElementsByClassName("select-option");

    Array.prototype.forEach.call(otherClasses, function(el) {
        if(el === element){
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });

    var vid_element = document.getElementById("video-iframe");

    switch(e){
        case "p_python":
            vid_element.src = "https://www.youtube.com/embed/KurHR-5VmIw";
            break;
        case "c_java":
            vid_element.src = "https://www.youtube.com/embed/wckc9NHuCPw";
            break;
        case "g_node":
            vid_element.src = "https://www.youtube.com/embed/3uEIJ3GsZ9g";
            break;
        case "g_python":
            vid_element.src = "https://www.youtube.com/embed/dtp6b76pMak";
            break;
        default:
            vid_element.src = "https://www.youtube.com/embed/dQw4w9WgXcQ";
            break;
            
    }

}

function onTabNineVideo(e){
    
}

setTimeout(init, 100);
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
    navbar.classList.add('bg-dark');
    } else {
    navbar.classList.remove('bg-dark');
    }
});