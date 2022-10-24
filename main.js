const inputOne= document.querySelector("#numberOne")
const inputTwo = document.querySelector("#numberTwo")
const buttonSubmit=document.querySelector("button")
const form=document.querySelector("form")
const mensageSucces= document.querySelector("p")

function validationNumbers(){
    const formValidated = inputTwo.value > inputOne.value

    if(formValidated){
        mensageSucces.innerHTML="Teste Feito com sucesso"
        mensageSucces.style.color="green"
        mensageSucces.classList.remove("hide")
    }else{
        mensageSucces.classList.remove("hide")
    }

}

form.addEventListener('submit',function(e){
e.preventDefault()
validationNumbers()

})

