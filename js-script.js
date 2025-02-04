const container = document.querySelector('.container');


const button = document.querySelector('button');

button.addEventListener('click', function(){
    let size = prompt('Enter Size of Grid');
        if (size>0 && size <=100){
        container.innerHTML= '';
        container.style.setProperty('--sizeCont', `${size *20}px`)
        gridMaker(size, size);
    }
});

function gridMaker(gridHeight, gridWidth){
    for (let i = 0; i<gridHeight*gridWidth; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover',function(){
            square.style.backgroundColor = 'blue';
        })
        container.appendChild(square);
    }
}

gridMaker(16, 16);