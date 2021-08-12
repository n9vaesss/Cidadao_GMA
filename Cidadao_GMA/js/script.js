function btnpesq() {
    var x = document.getElementById("divresul")

    var windowWidth = window.innerWidth;

        if ( windowWidth < "817")
        {
            x.classList.toggle('hide')
            x.style.marginTop = "40px"
            x.style.height = "400px"
            x.style.width = "410px"
            x.style.border = "thick solid #000000"
            
            setTimeout(() => {x.scrollIntoView()}, 1150)
            
        } 
        else
        {
            x.classList.toggle('none')
            x.style.marginTop = "40px"
            x.style.height = "400px"
            x.style.width = "663px"
            x.style.border = "thick solid #000000" 
            setTimeout(() => {x.scrollIntoView()}, 1150)
        }
}

function btnlimp() {
    var nome = document.getElementById("txtnome").value = ""
    var data = document.getElementById("txtdata").value = ""
    var rg = document.getElementById("txtrg").value = ""
    var cpf = document.getElementById("txtcpf").value = ""
    var cidadao = document.getElementById("txtcidadao").value = ""
    var bairro = document.getElementById("selbair").value = "0"
    var log = document.getElementById("sellog").value = "0"
}

function btnenter()
{

    var login = document.getElementById("txtlogin")
    var senha = document.getElementById("txtsenha")
    var mensagem = document.getElementById("mensagem")

    if(login.value == "caio" && senha.value == "1234")
    {
        
        window.location.assign("http://127.0.0.1:5501/index.html")
    }
    else{
        mensagem.style.color = "red"
        document.getElementById("txtlogin").value = ""
        document.getElementById("txtsenha").value = ""
    }
}
