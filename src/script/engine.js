const imagePaths = [
    "src/imagens/image1.jpg",
    "src/imagens/image1.jpg",
    "src/imagens/image3.jpg",
    "src/imagens/image3.jpg",
    "src/imagens/image5.jpg",
    "src/imagens/image5.jpg",
    "src/imagens/image7.jpg",
    "src/imagens/image7.jpg",
    "src/imagens/image9.jpg",
    "src/imagens/image9.jpg",
    "src/imagens/image11.jpg",
    "src/imagens/image11.jpg"

];

let openCard = [];

let shuffleImages = imagePaths.sort(() => Math.random() > 0.5 ? 2 : -1);

function checkMatch() {
    if ( openCard[0].firstElementChild.attributes[0].value === openCard[1].firstElementChild.attributes[0].value) {
        openCard[0].classList.add('boxMatch');
        openCard[1].classList.add('boxMatch')
    } else {
        openCard[0].classList.remove('boxOpen');
        openCard[1].classList.remove('boxOpen')
    }

    openCard = [];
}

// tenho que explicar essa, primeiro eu fiz essa seleção dos elementos do vetor openCard diferente pq eu tive que acessar o elemento imagem de dentro da div item, pq eu não
// consegui renderizar as imagens como innerHtml. A logica e a seguinte se os elementos forem iguais e adicionado a classe boxMatch que ira deixar os elementos visiveis. Se não
// ele ira remover a class boxOpen que ira fazer os cards retornarem ao fundo preto. O openCard precisa ser zerado pra poder liberar espaço pra proxima comparação.

function handleclick() {
    if (openCard.length < 2) {
        this.classList.add("boxOpen")
        openCard.push(this)
    }
    

    if ( openCard.length == 2) {
        setTimeout(checkMatch, 500)
    }

    //const matchCount = checkClear();
    
    //if (matchCount >= 11) {
        //alert('Jogo Completo. Parabens!')
    //}
}

// o this sempre se refere ao contexto, e no caso aqui vai estar se referindo ao elemento clicado. ao seja vai adicionar ao elemento(this) a classe boxOpen. e depois
// coloca esse elemento no vetor. lembrando que o length tem que ser menor que 2 pq em um jogo de memoria são comparados somente dois elementos

for (let i = 0; i < shuffleImages.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.onclick = handleclick;

    // Criar um elemento de imagem
    let img = document.createElement("img");
    img.src = shuffleImages[i]; // Definir o caminho da imagem
    img.alt = "Descrição da imagem"; // Adicionar um texto alternativo

    // Adicionar a imagem ao elemento div
    box.appendChild(img);

    // Adicionar o elemento div ao container '.game'
    document.querySelector('.game').appendChild(box);
}



function checkClear() {
    console.log('Chamou função');
    if (document.querySelectorAll(".boxMatch").length === imagePaths.length) {
        console.log('entrou aqui');
        alert('Jogo Completo. Parabéns');
    } else {
        setTimeout(checkClear, 1000);
    }
}

// Chama a função checkClear pela primeira vez
setTimeout(checkClear, 1000);

// o meu alert não funcionou do jeito que ele colocou então minha ideia era colocar um timeout pra ir checando de tempo em tempo se a condição era 
// cumprida(document.querySelectorAll(".boxMatch").length === imagePaths.length) se não voce ela pelo else cuntinuaria chamando o setTimeout. setTimeOut fora serve pra 
// chamar o loop pela primeira vez


//function checkClearCondition() {
    //setTimeout(checkClear, 1000)    
//}

// o shuffle serve para embaralhar as cartas se o random der um numero maior que 0.5 ele fica com peso 2 e as cartas com poso dois irão se ordenar por ordem de chagada, ja se as que 
// tiverem o peso -1 irão ficar para tras
// pra armazenar as cartas abertas

/*
  o for serve pra criar os boxes( eu estou acostumado com o map no react mas ai esta utilizando o DOM), parece dificil de entender mas não é.
  a cada loop p for faz o seguinte:
  cria um elemento com a tag div(createElement(div))
  atribui a classe item ( que ja tem estilo no css)
  atribui um emoji aleatoria ao conteudo dessa div( atraves da função shuffle)
  e por fim pega a div game e coloca esse box criado como filho dela(appendChild)
  obs: essas são formas de criar usando o dom no react voce não precisa manipular o dom diretamente então por isso estranhei um pouco pq tinha esquecido
  do createElement do appendCHild, etc
*/

// tive que criar imagens ja que os emojis não carregavam nem por reza
// handleclick e pra adicionar o evento nada de novo

// as imagens eu resolvi repetir o path( não havia necessidade da copia vacilo meu), para deixar a comparação mais facil