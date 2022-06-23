function logar(){
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  if(login == "Pedro" && senha == "2022"){
    alert("ola pedro");
    location.href = "paginainicial.html"
  }else{
    alert("usuario não cadastrado no banco de dados")
  }
} 