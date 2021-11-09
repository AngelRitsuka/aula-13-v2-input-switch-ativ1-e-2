var input, heading;

function setup() {
  createCanvas(300, 200);
  background(178,255,102);

  //createInput => caixa de entrada de texto na tela de exibição
  input = createInput();
  input.position(5,60);

  //criar um texto de cabeçalho para a caixa de texto
  //h4 é o tamanho do cabeçalho
  heading = createElement("h4", "Insira qualquer letra do alfabeto");
  heading.position(5,20);

  textAlign(CENTER);
  textSize(50);
}

function draw() {

  //ler o valor inserido pelo usuário e armazenar o dado
  const value = input.value();

  //mudar a resposta com base no valor
  switch (value) 
  {
    case "a":
      console.log("Vogal");
      break;
    
    case "e":
      console.log("Vogal");
      break;

    case "i":
      console.log("Vogal");
      break;

    case "o":
      console.log("Vogal");
      break;
    
    case "u":
      console.log("Vogal");
      break;

      default:
        console.log("Por favor, insira qualquer caractere");
  }
}