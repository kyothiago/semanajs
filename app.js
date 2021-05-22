const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]
const saleProducts = products.map(product => {
    if(product.price >= 30){
        return { name: product.name, price: product.price / 2}
    }
    return product
})

console.log(saleProducts)

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]
//Como o array possui o item de valor booleano, só irá retornar os que estiverem com 
//valor true
  const premiumUser = users.filter(user => user.premium)

  console.log(premiumUser)

  const numbers = [1, 2, 3]

  const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

  console.log(sumResult)

  const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]

  const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
      if(phaseScore.name === 'Roger Melo'){
          accumulator += phaseScore.score
      }

      return accumulator
  },0)

  console.log(rogerScore)
