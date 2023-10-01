// search.js

function search_content() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchbar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("content-list");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
