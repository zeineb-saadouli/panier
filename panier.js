document.addEventListener("DOMContentLoaded",function{
    let plus= document.getElementById('plus');
    let moins= document.getElementById('moins');
    let valeur= document.getElementsByClassName('quantity')
    plus.forEach(button => {
        button.addEventListener('click',()=>{
            valeur++;
        
        })

        
    });
})