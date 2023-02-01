document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('form').addEventListener('submit',function(e){
        e.preventDefault();
        let maxNumber= document.getElementById('maxNumber').value;
        maxNumber=parseInt(maxNumber)
        let radomNumber=Math.random()*maxNumber
        radomNumber=Math.floor(radomNumber +1)

        document.getElementById('valueResult').innerText=radomNumber
        document.querySelector('.result').style.display="block"
    })
})