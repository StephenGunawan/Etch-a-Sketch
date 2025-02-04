const container = document.querySelector('.container');


const button = document.querySelector('button');

button.addEventListener('click', function(){
    let size = prompt('Enter Size of Grid');
        if (size>0 && size <=100){
        container.innerHTML= '';
        gridMaker(size, size);
    }
});

function gridMaker(size){
    for (let i = 0; i<size*size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.height = `${500/size}px`;
        square.style.width = `${500/size}px`;
        square.style.border = '0.5px solid black';
        square.style.boxSizing = 'border-box';
        square.addEventListener('mouseover',function(){
            square.style.backgroundColor = 'black';
        })
        container.appendChild(square);
    }
}

gridMaker(16, 16);