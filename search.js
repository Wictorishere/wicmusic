const search = () => {
    const searchbox = document.getElementById("search").value.toUpperCase();
    const songlist = document.getElementById("music");
    const music = document.querySelectorAll(".music");
    const name = songlist.getElementsByName("h3");

    for(var i = 0; i < name.length; i++){
        let match = music[i].getElementsByTagName("h3")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toLocaleUpperCase.indexof(searchbox) > -1){
                music[i].style.display = "block";
            }
            else{
                music[i].style.display = "none";
            }
        }
    }
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.querySelectorAll(".music");
    li = ul.getElementsByTagName("h3");
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            console.log("hi")
        } else {
            li[i].style.display = "none";
        }
    }
}