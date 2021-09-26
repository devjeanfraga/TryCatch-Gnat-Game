//definir as variaveis que vao abrigar o as dimensoes da window
var width = 0
var height = 0
var picture = 1
var gametimer = 10  
var levelTime = 1500

var getLevel = window.location.search //search recupera tudo que está a direita do query
getLevel = getLevel.replace('?', '')
//alert(getLevel.replace('?', ''))

if (getLevel === 'normal') {
  levelTime = 1500
}else if (getLevel === 'maluco') {
  levelTime = 1200
}else if (getLevel === "insano") {
  levelTime = 900
}

//definir a funcçao que será chamada no index.html no body por meio do "onresize='' "
function adjustScreenSize () {
    height = window.innerHeight 
    width = window.innerWidth

     console.log(height, width)
}

adjustScreenSize() //chamada da fucntion

 var cronus = setInterval( function () {
  gametimer -= 1
  if (gametimer < 0) {
    clearInterval(gametimer) //elimina a function da mamória da aplicação 
    clearInterval(inseto) // apaga da memoria a criaçao de mosquitos
    window.location.href = "./the_champion.html"
  }else {

    document.getElementById('cronus').innerHTML = gametimer
  }

 }, 1000)

//definição da function que vai randomizar o posição do objeto na window
function RadomPosition () {

  //  getElementById irá buscar o elemento com o ID que você está buscando,
  // querySelector trará o primeiro elemento de acordo com a expressão que você passar lá dentro.
  var bixinho = document.getElementById('bixinho')
  if(bixinho) {
    bixinho.remove()

    if(picture > 3) {
      //alert("fim de jogo")
      window.location.href = "./gameOver.html"
    } else {
      console.log(`O elemento selecionado foi: p${picture}`)
      document.getElementById(`p${picture}`).src = '../images/coracao_vazio.png'
  
      picture++
    }

  }
  
//posicionamento randomico
var posX = Math.floor(Math.random() * width) -93 // O (-93) é para o objeto não sair do limite visivel da tela
var posY = Math.floor(Math.random() * height ) - 93 // O (-93) é para o objeto não sair do limite visivel da tela

//Evitando posicionamentos negativos
posX = posX < 0 ? 0 : posX
posY = posY < 0 ? 0 : posY
console.log(posX, posY)

//criar a uma imagem 
var mosquito = document.createElement('img')

mosquito.src = '../images/mosquito.png'
mosquito.className = `${randomSize()} ${randomSide()}` 
mosquito.id = 'bixinho'

mosquito.style.left = posX + 'px'
mosquito.style.top = posY + 'px'
mosquito.style.position = 'absolute'

mosquito.onclick = function () {
  this.remove()
}
//Adicionar o elemento img dentro do body
document.body.appendChild(mosquito)


console.log(randomSide())
}

//Tamanho randomico 
function randomSize () {
   var classe = Math.floor(Math.random() * 3 )
   console.log(classe)

   switch (classe) {
     case 0: 
      return "mosquito1"

     case 1: 
       return "mosquito2"
     
     case 2:
       return "mosquito3"
   }
}

function randomSide () {
  var classe = Math.floor(Math.random() * 2)

  switch (classe) {
    case 0: 
      return 'sideA'

    case 1: 
      return 'sideB'
}
}