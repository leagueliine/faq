let btn = document.getElementsByClassName('btn');
let conteudo = document.getElementsByClassName('conteudo');


btn[0].addEventListener('click', () => {
  if(conteudo[0].classList.length > 2){ conteudo[0].classList.remove('mostrar');
}else{conteudo[0].classList.add('mostrar');
};
verificaZero()
});

btn[1].addEventListener('click', () => {
  if(conteudo[1].classList.length > 2){ conteudo[1].classList.remove('mostrar');
}else{conteudo[1].classList.add('mostrar');
};
verificaUm()
});

btn[2].addEventListener('click', () => {
  if(conteudo[2].classList.length > 2){ conteudo[2].classList.remove('mostrar');
}else{conteudo[2].classList.add('mostrar');
};
verificaDois()
});

function verificaZero(){
  if(conteudo[1].classList.length > 2 || conteudo[2].classList.length > 2){
    conteudo[1].classList.remove('mostrar') || conteudo[2].classList.remove('mostrar') ;
  };
};

function verificaUm(){
  if(conteudo[0].classList.length > 2 || conteudo[2].classList.length > 2){
    conteudo[0].classList.remove('mostrar') || conteudo[2].classList.remove('mostrar') ;
  };
};

function verificaDois(){
  if(conteudo[0].classList.length > 2 || conteudo[1].classList.length > 2){
    conteudo[0].classList.remove('mostrar') || conteudo[1].classList.remove('mostrar') ;
  };
};