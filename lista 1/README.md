# lista_01.md

# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
✅) A saída será undefined seguido de erro 

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

**JUSTIFICATIVA:**
A declaração da variável x ocorre depois da impressão do valor de x, então o que se sabe é que a variável existe, mas ainda não recebeu seu valor, então será impresso "undefined", assim como imprimiu quando joguei no vs code. Já na impressão de y, além de ser declarada antes de ser atribuído seu valor, mas foi utilizado o let, que não pode ser usado depois, portanto, y está trancado e o código da erro.

**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

✅) Substituir if (a || b === 0) por if (a === 0 || b === 0)

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

**JUSTIFICATIVA:**
A função verifica dois parâmetros (a & b) e ao validar o primeiro termo **a**, quando diferente de zero, já é considerada verdadeira, sem passar pelo segundo, porém, foi retornado "Erro: número inválido", mesmo com parâmetro inicial verdadeiro. Então, para função ficar correta, é necessário deixar if (a === 0 || b === 0), que verifica se cada um dos parâmetros é zero, intenção inicial da função com a entrada soma(2, 0), fazendo a mensagem "Erro: número inválido" de maneira conexa.

______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

✅) O código imprime 200.

c) O código imprime 50.

d) O código gera um erro.

**JUSTIFICATIVA:**
O sentido do código seria que o preço do eletrônico era 1000, porém após anunciar o preço não tem a palavra "break", então o código não é interrompido. Fazendo o console.log imprimir apenas o preco do próximo, que tem break no valor de 200, impresso pelo código.

______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

✅) 24

**JUSTIFICATIVA:**
Os números declarados pelo let, são duplicados ao passar pelo map se tornando [2, 4, 6, 8, 10], depois é filtrado no filter, selecionando apenas os maiores que 5, sobrendo [6, 8, 10], e por último seus valores são somados no reduce 6+8+10 junto com o valor inicial 0, totalizando o resultado 24.
______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

✅) ["banana", "abacaxi", "manga", "laranja"]

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

**JUSTIFICATIVA:**
Coloquei essa resposta pois o comando lista.splice diz o índice inicial e a quantidade de itens em sequência a ser removidos, os que vem após são para substituir na lista. Portanto, o 1 indica queo íncide inicial será a maçã, e como são 2 elementos será a sequência "maçã" e "uva", que serão removidos e respectivamente "abacaxi" e "manga", irão substituílos, o resto sera mantido, transformando a lista em ["banana", "abacaxi", "manga", "laranja"].

______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.

✅) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

**JUSTIFICATIVA:**

A afirmativa I está correta pois esse é o conceito de herança, fazendo uma classe herdar conceitos de outra. A afirmativa II também esta correta, pois essa é a palavra chave utilizada quando se herda herança. Porém, a segunda não necessáriamente justifica a primeira, pois a priemira é conceito e a segunda mostra apenas o termo tecnico.
______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```


I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

✅) I e II são verdadeiras.

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

**JUSTIFICATIVA:**
As afirmativas I e II estão corretas pois explicam corretamente os termos em relação ao código, e os termos tecnicos de classe pai. Porém o III está incorreto ao afirmar que o JavaScript não herda herança de classes e que a classe não pode herdar da outra.
______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

✅) A asserção é verdadeira e a razão é falsa.

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

**JUSTIFICATIVA:**
A asserção é verdadeira pois o polimorfismo é um dos conceitos da Programação Orientada a Objetos, já a razão é falsa pois o JavaScript não suporta sobrecarga de métodos em classe, se você tiver muitos métodos, apenas será válido o último, substituindo as outras versões.
______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```
**RESPOSTA**

O código anterior tinha três erros, que estavam o fazendo não carregar, sua variável soma não estava declarada, o numeros.size não existe em javaScript e o valor da soma não estava acumulando. Segue meu código comentado e corrigido:

```
function somaArray(numeros) {

    let soma = 0; // O código não tinha a variável soma declarada, portanto adicionei utilizando o let.
    for (let i = 0; i < numeros.length; i++) { // Não se utiliza .size em JavaScript, então alterei para .length e atribui a variavel let ao i.
        soma += 2*numeros[i]; // o código não tinha o +, então os valores não se acumulavam, portanto adicionei o +=.
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```
______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

**RESPOSTA**
```
class Produto { // criei a classe Produto
    constructor(nome, preco) { //criei os atributos nome e preco
        this.nome = nome;
        this.preco = preco;
    }

    calcularDesconto() { //criei o método calcularDesconto
        const desconto = this.preco * 0.1; // criei a variável para desconto e atribuí 10% do preço
        return this.preco - desconto; //retirei o desconto do preço do produto
    }
}

class Livro extends Produto { // criei a classe Livro que herda de Produto
    constructor(nome, preco) {
        // Chamei os atributos da classe pai (Produto)
        super(nome, preco);
    }
      
    calcularDesconto() { //modifiquei o método calcularDesconto
    const desconto = this.preco * 0.2; //alterei para 20% de desconto 
    return this.preco - desconto;
        }
    }
```
A herança, nesse contexto, utiliza os mesmos atributos da classe anterior "Produto", que sempre são usados nesse contexto de vendas e utiliza o mesmo método que o anterior, porém modifica a margem de valor para um maior desconto. Para modificar o método,mantive a constante de desconto declarada e o retorno, porém ao multiplicar o atributro preço, pela quantidade do seu desconto, alterei seu valor. Um exemplo real seria: Imagina você está comprando materiais exigidos pela sua faculdade em uma loja e, emtre esses materiais, está o livro "A Segunda Era das Máquinas." e uma "caixa de lápis de cor" (nomes), ambos custam 30 reais(preço), percebe-se que independente do tipo de produto, todos tem um nome e o preço declarados? Isso são os atributos que foram utilizados nas duas classes e a "Livro" herdou da "Produto". Agora, você está no caixa e recebe seu desconto, porém percebe que os valores de cada um se diferenciaram, cujo o livro está custando 24 reais e os lápis 27 reais. Isso ocorre, pois ao fornecer desconto em Produto, a loja criou um método para dar desconto de 10%, porém ao atribuir aos Livros, resolveu ser mais generosa, modificou seu método e aumentou o desconto para 20%.
