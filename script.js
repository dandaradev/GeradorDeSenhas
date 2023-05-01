document.addEventListener("DOMContentLoaded", function(event) {
    /* Contador de caracteres */
    const value = document.querySelector("#value")
    const input = document.querySelector("#password-size")
    value.textContent = input.value
    input.addEventListener("input", (event) => {
      value.textContent = event.target.value
    })
  
    function gerarSenha() {
      const tamanho = value.textContent // alterado
      let senhaGerada = '';
      let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'; // movido para fora da função Personalização
      /* Personalização */
      const lowercase = document.querySelector("#lowercase")
      const uppercase = document.querySelector("#uppercase")
      const numbers = document.querySelector("#numbers")
      const symbols = document.querySelector("#symbols")
      const divCopy = document.getElementById("copy")
      const divMSG = document.getElementById("mensagem-copiar")
  
      if (!lowercase.checked) {
        caracteres = caracteres.toUpperCase();
      }
  
      if (!uppercase.checked) {
        caracteres = caracteres.toLowerCase();
      }

      if (!uppercase.checked && !lowercase.checked) {
        let noLetters = caracteres.replace(/[A-Z]/g, '');
        noLetters = caracteres.replace(/[a-z]/g, '');
        caracteres = noLetters;
      }
  
      if (!numbers.checked) {
        const noNumbers = caracteres.replace(/[0-9]/g, '');
        caracteres = noNumbers;
      }
  
      if (!symbols.checked) {
        const noSymbols = caracteres.replace(/[!@#$%&*]/g, '');
        caracteres = noSymbols;
      }

      if (!symbols.checked && !numbers.checked && !uppercase.checked && !lowercase.checked) {
        alert("Escolha ao menos um tipo de caractere!")
      }
      
  
      let counter = 0;
      const caracteresLength = caracteres.length;
      while (counter < tamanho) {
        senhaGerada += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
        counter += 1;
      }

      divCopy.style.display="block";
      divMSG.style.display="block";

      const senhaGeradaGlobal = senhaGerada; // alterado
      return senhaGeradaGlobal; // alterado
    }
  
    document.getElementById('generate').onclick = function() {
      document.getElementById('password').value = gerarSenha(); // alterado
    }

    document.getElementById('password').addEventListener('click', function() {
        const senha = document.getElementById('password');
        senha.select();
        document.execCommand('copy');
      });
  });
  