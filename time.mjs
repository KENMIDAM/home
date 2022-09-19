window.onload= function(){
    setInterval(function(){
        let dd = new Date();
        document.getElementById("T1").innerHTML = dd.toLocaleDateString();
    },1000)
}