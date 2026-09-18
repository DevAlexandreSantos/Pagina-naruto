let circulo = document.querySelector(".circulo");

function trocarCor(cor) {
    circulo.style.background = cor;
}

// Dados dos personagens (evita repetição do if/else)
const personagens = {
    naruto: {
        nome: 'Naruto Uzumaki',
        desc: 'É o protagonista da série, um ninja determinado e sonhador.',
        img: 'img/naruto.png'
    },
    sakura: {
        nome: 'Sakura Haruno',
        desc: 'É uma ninja médica inteligente e habilidosa.',
        img: 'img/sakura.png'
    },
    sasuke: {
        nome: 'Sasuke Uchiha',
        desc: 'É um dos últimos membros do clã Uchiha, muito poderoso.',
        img: 'img/sasuke.png'
    },
    kakashi: {
        nome: 'Kakashi Hatake',
        desc: 'É o líder do time 7, conhecido por sua inteligência e habilidades excepcionais.',
        img: 'img/kakashi.png'
    }
};

function mostrarPersonagem(id) {
    const p = personagens[id];
    const info = document.getElementById('personagem-info');
    const imagem = document.getElementById('imagem-personagem');

    info.innerHTML = `
        <h2>${p.nome}</h2>
        <p>${p.desc}</p>
    `;
    imagem.src = p.img;

    // Faz a imagem girar
    imagem.classList.remove('girar');
    void imagem.offsetWidth;
    imagem.classList.add('girar');
}

// Agora recebe a cor e realmente restaura o fundo original
function resetarPersonagem(cor) {
    document.getElementById('imagem-personagem').src = 'img/time 7.png';
    document.getElementById('personagem-info').innerHTML = '';
    trocarCor(cor);
}