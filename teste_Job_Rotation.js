//Exercicio 01 Soma
const soma = (indice) => {
    let soma = 0
    for(let k = 0; k < indice; k++){
        soma += k
    }
    console.log(soma)
}
//soma(13)
//Resultado Do Exercicio01 indice 13 = 78

//Exercicio 02 fibonacci
const fibonacci = (param) => {
    let num1 = 0
    let num2 = 1
    let newnum = 0
    for(let i = 0; i <= param; i++){
        if(num2 == param){
            return console.log('O valor pertence a Fibonacci')
        }
        newnum = num1 + num2
        num1 = num2
        num2 = newnum
    } return console.log('O valor nao pertece a Fibonacci')
}
//fibonacci(14)

//Exercicio03 Sequencia de todas as logias

const logic = () =>{
    console.log('A) 1,3,5,7,___ Resposta: 9')
    console.log('B) 2,4,8,16,32,64,___ Resposta: 128')
    console.log('C) 0,1,4,9,16,25,36,___ Resposta: 49')
    console.log('D) 4, 16, 36, 64 ___ Resposta: 100')
    console.log('E) 1,1,2,3,5,8,____ Resposta: 13')
    console.log('F) 2,10,12,16,17,18,19___ Resposta: 200')
}
//logic()

//Exercicio04
const ribeiraoPreto = () =>{
    console.log('No momento em que se cruzão estao exatamente a mesma distancia de Ribeirao')
}

//Exercicio05
const inverta = (str) =>{
    var o = ''
    for (var i = str.length - 1; i >= 0; i--) {
        o += str[i]
    }
    return console.log(o)
}
inverta('teste completo com sucesso')
