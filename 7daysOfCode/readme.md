

<div style="text-align:center"><img src="./assets/images/7days.png"></div>


# Jornada #7DaysOfCode

Desafios para aprender como usar a linguagem mais popular do mundo para criar algoritmos e resolver problemas do dia a dia.

## Desafios

- [Lógica JS 1/7: Operações Booleanas](#dayOne)
- [Lógica JS 2/7: 👩🏽‍💻 Variáveis](#dayTwo)
---

<h1 id="dayOne">Lógica JS 1/7: Operações Booleanas</h1>

![progressbar](/assets/images/d1Bar.png)


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

<h1 id="dayTwo">Lógica JS 2/7: 👩🏽‍💻 Variáveis</h1>

![progressbar](/assets/images/d2Bar.png)

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

<div style="text-align:center; margin-top:12px"><a href="https://www.alura.com.br/"><img src="./assets/images/logo.png" alt="logotipo da alura"></a></div>
