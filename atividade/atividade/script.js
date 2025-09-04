function gerarCSS(){ 
    const cor = document.getElementById('cor').value;
    const estilo = document.getElementById('estilo').value;
    const largura = document.getElementById('largura').value;
    const altura = document.getElementById('altura').value;
    const cantos = document.querySelector('input[name="cantos"]:checked').value;
    let tamanho;
    
    if (cantos == 'arredondados') {
        tamanho = 16;
    } else {
        tamanho = 0;
    }

    let css = `.minha-div {
    width: ${largura}px;
    height: ${altura}px;
    border: 2px ${estilo} ${cor};
    box-sizing: border-box;
    border-radius: ${tamanho}px;
}`;

    document.getElementById('saida').value = css;

}
