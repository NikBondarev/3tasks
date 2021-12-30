var rangeTl = document.getElementById('Lt'),
    rangeTr = document.getElementById('Rt'),
    rangeBr = document.getElementById('Rb'),
    rangeBl = document.getElementById('Lb');

var resultTl = document.getElementById('result-tl'),
    resultTr = document.getElementById('result-tr'),
    resultBr = document.getElementById('result-br'),
    resultBl = document.getElementById('result-bl');

var inputs = document.querySelectorAll('.input'),
    cube = document.getElementById('cube');

var endTl = document.getElementById('top-left-result'),
    endTr = document.getElementById('top-right-result'),
    endBl = document.getElementById('bottom-left-result'),
    endBr = document.getElementById('bottom-right-result');

var btn = document.getElementById('btn'),
    answer = document.getElementById('border');

function equal(){
    resultTl.innerHTML = rangeTl.value;
    resultTr.innerHTML = rangeTr.value;
    resultBr.innerHTML = rangeBr.value;
    resultBl.innerHTML = rangeBl.value;
    cube.style.borderRadius = rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBl.value + 'px ' + rangeBr.value + 'px ';
    endTl.innerHTML = rangeTl.value +'px';
    endTr.innerHTML = rangeTr.value + 'px';
    endBl.innerHTML = rangeBl.value + 'px';
    endBr.innerHTML = rangeBr.value + 'px';
};
for(var node of inputs){
    node.addEventListener('input', equal)
}
btn.addEventListener('click', function(){
    answer.classList.toggle('active');
})
