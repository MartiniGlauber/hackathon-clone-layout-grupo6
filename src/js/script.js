document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
 
    const crm = document.getElementById("crm").value;
    const uf = document.getElementById("regioes").value;
    const errorMessage = document.getElementById("error-message");
    const successBalloon = document.getElementById("successBalloon");
    const redirectBalloon = document.getElementById("redirectBalloon");

    
    errorMessage.style.display = "none";
    errorMessage.innerHTML = "";



    // Validação
    let errors = [];
    if (!crm || isNaN(crm)) {
        errors.push("É obrigatório preencher o campo CRM, digite apenas números.");
    }
    if (!uf) {
        errors.push("Você deve selecionar um estado no campo UF.");
    }

   
    if (errors.length > 0) {
        errorMessage.innerHTML = errors.join("<br>");
        errorMessage.style.display = "block";
    } else {
        
        successBalloon.style.display = "block";
        redirectBalloon.style.display = "block";

       
        setTimeout(function() {
            successBalloon.style.display = "none";
            redirectBalloon.style.display = "none";

            
            window.location.href = "https://internacional.com.br/"; 
        }, 3000);
    }
});


        

const mascara = document.getElementById('crm');

function mascaraNoCampo(input){
    input.value = input.value.replace(/\D/g,'');
    input.value = input.value.replace(/(\d{3})(\d{3})(\d{1})/,'$1.$2-$3');

}
    
    