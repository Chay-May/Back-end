const escolha = process.argv[2]
const numero= Number(process.argv[3])



const numeroAleatorio=()=>{
    return Math.floor(Math.random() * 11) 
}

const numeroMaquina= numeroAleatorio()
const soma= (numero + numeroMaquina ) 
const resultado= soma  % 2 === 0

const validarEscolha=(escolha)=>{
 return  escolha==="par" ? "par" : "impar"
}

const vitoria=()=>{
    if(validarEscolha(escolha) === "par" && resultado){
        console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${soma}. Você ganhou!`)
    }else if(validarEscolha(escolha) === "impar" && !resultado){
        console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${soma}. Você ganhou!`)
    }else  if(validarEscolha(escolha) === "par" && !resultado){
        console.log(`Você escolheu par e o computador escolheu impar. O resultado foi ${soma}. Você perdeu!`)
    }else if(validarEscolha(escolha) === "impar" && resultado){
        console.log(`Você escolheu impar e o computador escolheu par. O resultado foi ${soma}. Você perdeu!`)
    }
       
    

    
}

vitoria()



