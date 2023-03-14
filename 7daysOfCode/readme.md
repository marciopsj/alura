

<div style="text-align:center"><img src="./assets/images/7days.png"></div>


# Jornada #7DaysOfCode

Desafios para aprender como usar a linguagem mais popular do mundo para criar algoritmos e resolver problemas do dia a dia.

## Desafios

- [Lógica JS 1/7: Operações Booleanas](#dayOne)
- [Lógica JS 2/7: Variáveis](#dayTwo)
- [Lógica JS 3/7: Fluxo de decisão](#dayThree)
- [Lógica JS 4/7: Mais loops e randomização](#dayFour)
---

<h1 id="dayOne">Lógica JS 1/7: Operações Booleanas</h1>

<img src="./assets/images/d1Bar.png">


O primeiro dia é crucial para aprender sobre tipos de variáveis em JavaScript. 

No JavaScript frequentemente enfrentamos problemas ao comparar valores de variáveis devido à conversão implícita de tipos. Ao contrário de linguagens de programação compiladas como Java e C#, os erros de JavaScript não são detectados durante a compilação e só aparecem durante a execução. 

A confusão ocorre ao usar o operador de igualdade entre valores, já que o JavaScript converte implicitamente tipos de variáveis para Boolean. Isso afeta variáveis que antes eram Strings, Numbers, Objects, etc.

Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando **true**:

```javascript
console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );
```

A primeira tarefa é reescrever o código abaixo de forma que ele imprima as informações de maneira correta, que faça sentido e sem erros:

```javascript
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
```

## Extra

Artigo da Alura para aprender [mais sobre operadores de comparação](https://caelum57945.lt.acemlnb.com/Prod/link-tracker?redirectUrl=aHR0cHMlM0ElMkYlMkZ3d3cuYWx1cmEuY29tLmJyJTJGYXJ0aWdvcyUyRm9wZXJhZG9yZXMtbWF0ZW1hdGljb3MtZW0tamF2YXNjcmlwdCUzRmdjbGlkJTNEQ2owS0NRaUFfOE9QQmhEdEFSSXNBS1F1MGdZVXFacWdvbnBYeUVQMV9ocFVsNTh3WUFrX1AzWmU0VldyeG85ZnRrRlc5Q0xZT015ak8xY2FBbHJ6RUFMd193Y0IlMjZ1dG1fc291cmNlJTNEQWN0aXZlQ2FtcGFpZ24lMjZ1dG1fbWVkaXVtJTNEZW1haWwlMjZ1dG1fY29udGVudCUzRCUyNTIzN0RheXNPZkNvZGUlMkItJTJCTCUyNUMzJTI1QjNnaWNhJTJCSlMlMkIxJTI1MkY3JTI1M0ElMkJPcGVyYSUyNUMzJTI1QTclMjVDMyUyNUI1ZXMlMkJCb29sZWFuYXMlMjZ1dG1fY2FtcGFpZ24lM0QlMjU1QkFMVVJBJTJCJTI1MjM3ZGF5cyUyQk9mJTJCQ29kZSUyNTVEJTJCJTI1MjhMJTI1QzMlMjVCM2dpY2ElMkJkZSUyQlByb2dyYW1hJTI1QzMlMjVBNyUyNUMzJTI1QTNvJTJCLSUyQkphdmFTY3JpcHQlMjUyOSUyQkRpYSUyQjElMjUzQSUyQkNvbXBhcmFuZG8lMkJWYWxvcmVz&sig=CqoXDQZNuwfyKFkDmHncAJqkoMA1Uk1qW1bnwBudxxyP&iat=1678273423&a=%7C%7C476258007%7C%7C&account=caelum57945%2Eactivehosted%2Ecom&email=HUiSvxL9t1RKXTkuPmflXMbBpYAYDXl1otuYOdHMEvW4kqXV%2BQk%3D%3AQJ88XGzR7gH8lqHKg%2FC%2BhbPrYWYxbptz&s=5f337af7c35d42cf0d2faea5cb54d25f&i=1263A7832A166A8680).

---

<h1 id="dayTwo">Lógica JS 2/7: Variáveis</h1>

<img src="./assets/images/d2Bar.png">

No desafio de hoje, o objetivo é personalizar a experiência do usuário em um sistema, site ou aplicativo, capturando e armazenando valores dentro de variáveis.

É comum querer adicionar toques personalizados para tornar a experiência na sua aplicação mais rica e dinâmica. Variáveis são fundamentais para processar informações em qualquer tipo de sistema, desde detalhes de produtos em um catálogo de e-commerce até informações de pessoas logadas no sistema.

Por isso, hoje, vamos desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

```
- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?
```

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

```
"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
```

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

## Extra

Tanto o alert() quanto o prompt() são usados para criar caixas de diálogo e interagir com o usuário, mas eles são diferentes entre si.

O alert() é usado para mostrar uma mensagem simples ao usuário.

Exemplo:

```javascript
alert("Olá, pessoal!");
```

Já o prompt() precisa que o usuário insira algum valor, que você poderá manipular.

Exemplo:

```javascript
const cidade = prompt("Digite a sua cidade:");
const msg = `Você é de ${cidade}!`;
alert(msg);
```

Teste os códigos acima e tente adaptá-los ao seu programa!

---
<h1 id="dayThree">Lógica JS 3/7: Fluxo de decisão</h1>

<img src="./assets/images/d3Bar.png">

Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.

## Extra

Você já viu estruturas condicionais em Javascript anteriormente, mas vou recapitular. O if é usado para verificar se uma determinada condição é verdadeira.

Exemplo:

```javascript
if (cidade === "Roma"){
    // mostre a foto do "Coliseu"
}
```

Além disso, ele também pode ser usado com um ou vários else if, que irá saber que a condição anterior era falsa e vai verificar se a atual é verdadeira.

Por fim, existe o else sozinho, sem nenhuma condição, e o código dentro dele será executado sempre que todas as condições encadeadas anteriormente forem falsas.

```javascript
if (cidade === "Roma"){
    // mostre a foto do "Coliseu"
}
else if (cidade === "Paris"){
    // mostre a foto do "Torre Eiffel"
}
else {
    // dê a resposta "Você não digitou nenhuma cidade válida"
}
```

Além disso, para a parte 4, você precisará de uma estrutura de repetição (loop) como o while. Para usá-lo, é bem fácil:

```javascript
let idade = 0;

while (idade < 8) {
    // algum comando para imprimir a idade
    idade = idade + 1;
}
```

Esse código começará com a idade em zero e, ao entrar no while, esse valor será impresso e, logo depois, incrementado em 1.

Ou seja, depois da primeira vez que ele passar, o valor da idade será igual a 1, que é menor que 8, e por isso, a condição do while terá um resultado verdadeiro e ele continuará a ser executado.

Ele só vai parar quando o valor da variável idade chegar a 8, que não é menor que 8, e por isso a condição do while terá um resultado falso.

Você também pode aprender mais sobre o while [nesse site](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while?utm_source=ActiveCampaign&utm_medium=email&utm_content=%237DaysOfCode+-+L%C3%B3gica+JS+3%2F7%3A+Fluxo+de+decis%C3%A3o&utm_campaign=%5BALURA+%237days+Of+Code%5D+%28L%C3%B3gica+de+Programa%C3%A7%C3%A3o+-+JavaScript%29+Dia+3%3A+Fluxo+de+decis%C3%A3o).

---

<h1 id="dayFour">Lógica JS 4/7: Mais loops e randomização</h1>

<img src="./assets/images/d4Bar.png">

Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

## Extra

Dê uma olhada nesse site para [aprender mais sobre estruturas de repetição](https://caelum57945.lt.acemlnb.com/Prod/link-tracker?redirectUrl=aHR0cHMlM0ElMkYlMkZkZXZlbG9wZXIubW96aWxsYS5vcmclMkZwdC1CUiUyRmRvY3MlMkZXZWIlMkZKYXZhU2NyaXB0JTJGR3VpZGUlMkZMb29wc19hbmRfaXRlcmF0aW9uJTNGdXRtX3NvdXJjZSUzREFjdGl2ZUNhbXBhaWduJTI2dXRtX21lZGl1bSUzRGVtYWlsJTI2dXRtX2NvbnRlbnQlM0QlMjUyMzdEYXlzT2ZDb2RlJTJCLSUyQkwlMjVDMyUyNUIzZ2ljYSUyQkpTJTJCNCUyNTJGNyUyNTNBJTJCJTI1RjAlMjU5RiUyNTkxJTI1QTklMjVGMCUyNTlGJTI1OEYlMjVCRCUyNUUyJTI1ODAlMjU4RCUyNUYwJTI1OUYlMjU5MiUyNUJCJTJCTWFpcyUyQmxvb3BzJTJCZSUyQnJhbmRvbWl6YSUyNUMzJTI1QTclMjVDMyUyNUEzbyUyNnV0bV9jYW1wYWlnbiUzRCUyNTVCQUxVUkElMkIlMjUyMzdkYXlzJTJCT2YlMkJDb2RlJTI1NUQlMkIlMjUyOEwlMjVDMyUyNUIzZ2ljYSUyQmRlJTJCUHJvZ3JhbWElMjVDMyUyNUE3JTI1QzMlMjVBM28lMkItJTJCSmF2YVNjcmlwdCUyNTI5JTJCRGlhJTJCNCUyNTNBJTJCTWFpcyUyQmxvb3BzJTJCZSUyQnJhbmRvbWl6YSUyNUMzJTI1QTclMjVDMyUyNUEzbw==&sig=3be6sycGuw2G9iggbcFvm15mrVMgV85psTHazMHn76ye&iat=1678532742&a=%7C%7C476258007%7C%7C&account=caelum57945%2Eactivehosted%2Ecom&email=%2FCdXY8lmhBspSoHR46VIG8uaTqweP9skmHguw1qgt2enTfH%2F3Q4%3D%3Az%2B0COa%2BkgzMDtnI%2FzbxuOnX7xV7Zhf5E&s=5f337af7c35d42cf0d2faea5cb54d25f&i=1266A7839A166A8688).

Para fazer a própria máquina escolher sozinha o número a ser adivinhado, você pode utilizar algo chamado Math.random().

Para isso, utilize o código:

```javascript
Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
```

Onde, claro, você terá que alterar os valores de mínimo e máximo pelos limites inferior e superior, respectivamente.

Você pode ler mais sobre a <code>Math.random()</code> [nesse site](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random?utm_source=ActiveCampaign&utm_medium=email&utm_content=%237DaysOfCode+-+L%C3%B3gica+JS+4%2F7%3A+%F0%9F%91%A9%F0%9F%8F%BD%E2%80%8D%F0%9F%92%BB+Mais+loops+e+randomiza%C3%A7%C3%A3o&utm_campaign=%5BALURA+%237days+Of+Code%5D+%28L%C3%B3gica+de+Programa%C3%A7%C3%A3o+-+JavaScript%29+Dia+4%3A+Mais+loops+e+randomiza%C3%A7%C3%A3o).

---

<div style="text-align:center; margin-top:12px"><a href="https://www.alura.com.br/"><img src="./assets/images/logo.png" alt="logotipo da alura"></a></div>
