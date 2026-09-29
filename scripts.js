// ---------- DADOS ----------
// Ajuste os campos (imagem, cor, descricao) com o conteúdo real do seu projeto.

const personagens = {
  naruto: {
    nome: "Naruto Uzumaki",
    imagem: "img/naruto.png",
    cor: "#F66C2D",
    descricao: "Ninja hiperativo e determinado, sonha em se tornar Hokage de Konoha."
  },
  sasuke: {
    nome: "Sasuke Uchiha",
    imagem: "img/sasuke.png",
    cor: "#082C8C",
    descricao: "Último sobrevivente do clã Uchiha, movido pela vingança contra o irmão Itachi."
  },
  sakura: {
    nome: "Sakura Haruno",
    imagem: "img/sakura.png",
    cor: "#B2261E",
    descricao: "Ninja médica de grande inteligência e força monstruosa, aluna de Tsunade."
  },
  kakashi: {
    nome: "Kakashi Hatake",
    imagem: "img/kakashi.png",
    cor: "#A9A19F",
    descricao: "Sensei do Time Kakashi, conhecido como 'Ninja Copiador' por seu Sharingan."
  },

  // Exemplos de novos personagens (troque pelas imagens reais que você adicionar em /img)
  hinata: { nome: "Hinata Hyuga", imagem: "img/hinata.png", cor: "#7A1F1F", descricao: "Herdeira do clã Hyuga, usuária do Byakugan." },
  kiba: { nome: "Kiba Inuzuka", imagem: "img/kiba.png", cor: "#7A1F1F", descricao: "Combate ao lado do fiel cão Akamaru." },
  shino: { nome: "Shino Aburame", imagem: "img/shino.png", cor: "#7A1F1F", descricao: "Usa insetos ninja para rastrear e atacar inimigos." },
  kurenai: { nome: "Kurenai Yuhi", imagem: "img/kurenai.png", cor: "#7A1F1F", descricao: "Líder do Time Kurenai, especialista em genjutsu." },

  shikamaru: { nome: "Shikamaru Nara", imagem: "img/NicePng_shikamaru-png_3746119.png", cor: "#3A8F3A", descricao: "Estrategista genial do Time Asuma." },
  ino: { nome: "Ino Yamanaka", imagem: "img/NicePng_sasuke-uchiha-png_8475061.png", cor: "#3A8F3A", descricao: "Domina técnicas de transferência de mente." },
  choji: { nome: "Choji Akimichi", imagem: "img/NicePng_shikamaru-png_3746929.png", cor: "#3A8F3A", descricao: "Usa jutsus de expansão corporal em combate." },
  Asuma: { nome: "Asuma Sarutobi", imagem: "img/NicePng_zabuza-png_3819856.png", cor: "#3A8F3A", descricao: "Líder do Time Asuma, mestre em combate com lâminas." },
  Gai: { nome: "Might Gai", imagem: "https://static.wikia.nocookie.net/animeverso/images/1/12/Maito_gai_by_aikawaiichan_db9eirt_by_sennin15-dbl69ps.png/revision/latest?cb=20210609143233&path-prefix=pt-br", cor: "#3A8F3A", descricao: "Líder do Time Gai, mestre em taijutsu." },
  rocklee: { nome: "Rock Lee", imagem: "https://static.wikia.nocookie.net/metabattle/images/4/4c/PUNHO.png/revision/latest?cb=20230706190518&path-prefix=pt-br", cor: "#0B5D8C", descricao: "Taijutsu puro, sem usar ninjutsu ou genjutsu." },
  neji: { nome: "Neji Hyuga", imagem: "https://static.wikia.nocookie.net/fiction-battlefield/images/5/50/Neji_Parte_2.png/revision/latest?cb=20190408214625&path-prefix=pt-br", cor: "#0B5D8C", descricao: "Prodígio do clã Hyuga e usuário do Byakugan." },
  tenten: { nome: "Tenten", imagem: "https://static.wikia.nocookie.net/all-worlds-alliance/images/4/4f/Tenten_sts_by_krizeii-d7cb1jb.png/revision/latest?cb=20180920063519", cor: "#0B5D8C", descricao: "Especialista em armas ninja de longo alcance." }
};

const times = {
  time7: {
    nome: "Time Kakashi",
    descricao: "Os protagonistas da série Naruto são Naruto Uzumaki, Sasuke Uchiha, Sakura Haruno e Kakashi Hatake, que formam o \"Time Kakashi\" (第7班, Dainanahan) de Konohagakure.",
    imagemTime: "img/time 7.png",
    cor: "#F66C2D",
    membros: ["naruto", "sasuke", "sakura", "kakashi"]
  },
  time8: {
    nome: "Time Kurenai",
    descricao: "Liderado por Kurenai Yuhi, o Time Kurenai é formado por Hinata Hyuga, Kiba Inuzuka e Shino Aburame — especialistas em rastreamento.",
    imagemTime: "img/time 8.png",
    cor: "#7A1F1F",
    membros: ["hinata", "kiba", "shino", "kurenai"]
  },
  time10: {
    nome: "Time Asuma",
    descricao: "Liderado por Asuma Sarutobi, o Time Asuma reúne Shikamaru Nara, Ino Yamanaka e Choji Akimichi, formando o clássico trio Ino-Shika-Cho.",
    imagemTime: "img/NicePng_team-10-logo-png_3236041.png",
    cor: "#3A8F3A",
    membros: ["shikamaru", "ino", "choji", "Asuma"]
  },
  timeGai: {
    nome: "Time Gai",
    descricao: "Liderado por Might Gai, o Time Gai é composto por Rock Lee, Neji Hyuga e Tenten, focado em taijutsu e armas.",
    imagemTime: "https://pt.quizur.com/_image?href=https%3A%2F%2Fimg.quizur.com%2Ff%2Fimg5f357bbc56ad67.41630075.png%3FlastEdited%3D1597340609&w=1200&h=900&f=webp",
    cor: "#0B5D8C",
    membros: ["rocklee", "neji", "tenten", "Gai"]
  }
};

// ---------- ELEMENTOS ----------
const tituloTime = document.getElementById("titulo-time");
const descricaoTime = document.getElementById("descricao-time");
const personagemInfo = document.getElementById("personagem-info");
const imagemPersonagem = document.getElementById("imagem-personagem");
const menuPersonagens = document.getElementById("menu-personagens");
const imagemCentral = document.getElementById("imagem-central");

// ---------- FUNÇÕES ----------

// Monta o menu de personagens de acordo com o time escolhido
function mostrarTime(idTime) {
  const time = times[idTime];
  if (!time) return;

  tituloTime.textContent = time.nome;
  descricaoTime.textContent = time.descricao;
  personagemInfo.innerHTML = "";
  imagemPersonagem.src = time.imagemTime;
  imagemCentral.src = time.imagemTime;

  trocarCor(time.cor);

  // Limpa e recria os botões de personagens desse time
  menuPersonagens.innerHTML = "";
  time.membros.forEach(id => {
    const p = personagens[id];
    const img = document.createElement("img");
    img.src = p.imagem;
    img.alt = p.nome;
    img.width = 150;
    img.classList.add("personagem", "botao-menu");
    img.onclick = () => {
      mostrarPersonagem(id);
      trocarCor(p.cor);
    };
    menuPersonagens.appendChild(img);
  });
}

// Mostra as infos de um personagem específico (já existia, mantive a mesma ideia)
function mostrarPersonagem(id) {
  const p = personagens[id];
  if (!p) return;

  imagemPersonagem.src = p.imagem;
  personagemInfo.innerHTML = `<h2>${p.nome}</h2><p>${p.descricao}</p>`;
}

// Troca a cor de destaque da página
// Aplica direto nos elementos .circulo, sem depender de variável CSS
function trocarCor(cor) {
  document.documentElement.style.setProperty("--cor-destaque", cor);

  const circulos = document.querySelectorAll(".circulo");
  circulos.forEach(el => {
    el.style.backgroundColor = cor;
  });
}

// Volta para a visão geral do time atualmente selecionado
function resetarTime() {
  const titulo = tituloTime.textContent;
  const idTime = Object.keys(times).find(key => times[key].nome === titulo);
  if (idTime) mostrarTime(idTime);
  else mostrarTime("time7");
}

// Estado inicial da página
mostrarTime("time7");