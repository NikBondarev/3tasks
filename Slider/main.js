var prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot'),
    index = 0;

function activeSlide(n){
    for (var slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
    
};
function activeDot(b){
    for(var dot of dots){
        dot.classList.remove('active');
    }
    dots[b].classList.add('active');
};
function current(){
    activeSlide(index);
    activeDot(index);
}

function changeDot(event){

}

function nextSlide(){
    if(index  === slides.length-1){
        index = 0;
        current();
    }else{
        index++;
        current();
    }
};

function prevSlide(){
    if(index == 0){
        index = slides.length-1;
        current();
    }else{
        index--;
        current();
    }
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
dots.forEach(function(item, dotIndex){
    item.addEventListener('click', function(){
        index = dotIndex;
        current();
    })
})