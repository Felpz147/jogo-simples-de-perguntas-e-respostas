// Adicione o seguinte código ao arquivo script.js

function validaResposta(pergunta) {
    const escolhaUsuario = document.querySelector(`input[name="resposta"]:checked`);
    
    if (escolhaUsuario && escolhaUsuario.value === "correta") {
        // Se a resposta estiver correta, avança para a próxima pergunta
        const proximaPergunta = parseInt(pergunta.charAt(pergunta.length -1)) + 2;
        window.location.href = `resposta${proximaPergunta}.html`;
    } else {
        // Se a resposta estiver incorreta, exibe a mensagem de erro
        const erroDiv = document.getElementById('erro');
        erroDiv.style.display = 'block';
    }

    return false; // Impede o envio do formulário
}
