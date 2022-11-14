const form = document.getElementById("form");
const formnome = document.getElementById("form-nome");
const formcpf = document.getElementById("form-cpf");
const formfone = document.getElementById("form-fone");
const formchave = document.getElementById("form-chave");
const formchaveconf = document.getElementById("form-chaveconf");
const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const fone = document.getElementById("fone");
const chave = document.getElementById("chave");
const chaveconf = document.getElementById("chaveconf");


formnome.addEventListener("focusout", (e) => {
  
  checkInputsUsername();  
});

formcpf.addEventListener("focusout", (e) => {
  
  checkInputsCpf();
});

formfone.addEventListener("focusout", (e) => {
  
  checkInputsFone();
});

formchave.addEventListener("focusout", (e) => {
  
  checkInputsSenha();
});

formchaveconf.addEventListener("focusout", (e) => {
  
  checkInputsSenhaConf();
});

form.addEventListener('submit', (e) =>{
  checkInputs();
  if(checkInputs()==false){
    e.preventDefault();
  }
});



function checkInputs(){
  const nomeValue = nome.value;
  const cpfValue = cpf.value;
  const foneValue = fone.value;
  const chaveValue = chave.value;
  const chaveconfValue = chaveconf.value;
  flagnome = false;
  flagcpf = false;
  flagfone = false;
  flagchave = false;
  flagchaveconf = false;

  if (nomeValue === ""){
    setErrorFor(nome, "O nome do usuário é obrigatório");    
  }else{
    setSuccessFor(nome);
    flagnome = true;
  }

  if (cpfValue === "") {
    setErrorFor(cpf, "O CPF é obrigatório.");    
  } else if (!testaCPF(cpfValue)) {
    setErrorFor(cpf, "Por favor, insira um CPF válido.");    
  } else {
    setSuccessFor(cpf);
    flagcpf = true;
  }

  if (foneValue === ""){
    setErrorFor(fone, "O telefone do usuário é obrigatório");    
  }else{
    setSuccessFor(fone);
    flagfone = true;
  }

  if (chaveValue === "") {
    setErrorFor(chave, "A senha é obrigatória.");    
  } else if (chaveValue.length < 7) {
    setErrorFor(chave, "A senha precisa ter no mínimo 7 caracteres.");    
  } else {
    setSuccessFor(chave);
    flagchave = true;
  }

  if (chaveconfValue === "") {
    setErrorFor(chaveconf, "A confirmação de senha é obrigatória.");    
  } else if (chaveconfValue !== chaveValue) {
    setErrorFor(chaveconf, "As senha não conferem.");    
  } else {
    setSuccessFor(chaveconf);
    flagchaveconf = true;
  }

  if(flagnome==true && flagfone==true && flagcpf==true && flagchave==true && flagchaveconf==true){
    return true;   
  }else{    
    return false;    
  }

}



function checkInputsUsername() {
  const nomeValue = nome.value;
  

  //Validacao
  if (nomeValue === "") {
    setErrorFor(nome, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(nome);
  }  
}

function checkInputsCpf() {
  const cpfValue = cpf.value;
  

  //Validacao
  if (cpfValue === "") {
    setErrorFor(cpf, "O CPF é obrigatório.");
  } else if (!testaCPF(cpfValue)) {
    setErrorFor(cpf, "Por favor, insira um CPF válido.");
  } else {
    setSuccessFor(cpf);
  }
}

function checkInputsFone() {
  const foneValue = fone.value;
  

  //Validacao
  if (foneValue === ""){
    setErrorFor(fone, "O telefone do usuário é obrigatório");
  }else{
    setSuccessFor(fone);
  }
}

function checkInputsSenha() {
  const chaveValue = chave.value;  
  
  if (chaveValue === "") {
    setErrorFor(chave, "A senha é obrigatória.");
  } else if (chaveValue.length < 4) {
    setErrorFor(chave, "A senha precisa ter no mínimo 4 caracteres.");
  } else {
    setSuccessFor(chave);
  }
}

function checkInputsSenhaConf() {
  const chaveValue = chave.value;  
  const chaveconfValue = chaveconf.value;


  if (chaveconfValue === "") {
    setErrorFor(chaveconf, "A confirmação de senha é obrigatória.");
  } else if (chaveconfValue !== chaveValue) {
    setErrorFor(chaveconf, "As senhas não conferem.");
  } else {
    setSuccessFor(chaveconf);
  }
}

function setErrorFor(input, message){

  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");

  small.innerText = message;  

  formGroup.className = "form-error";
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;

  // Adicionar a classe de sucesso
  formGroup.className = "form-success";
}

function testaCPF(cpf) {
  var Soma;
  var Resto;
  Soma = 0;
if (cpf == "00000000000") return false;

for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(cpf.substring(9, 10)) ) return false;

Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11))  Resto = 0;
  if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
  return true;
}
