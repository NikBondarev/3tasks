var opener = document.querySelectorAll('.opener'),
    content = document.querySelectorAll('.content');

function toggle(n){
    for (var element of opener){
        element.classList.remove('active');
    }
    n.target.classList.add('active');
}
opener.forEach(function(item){
    item.addEventListener('click', toggle)
})
