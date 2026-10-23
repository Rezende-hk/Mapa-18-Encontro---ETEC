/* ==========================================================================
   FEIRA DE PROJETOS — Etec de Vargem Grande do Sul
   app.js
   ========================================================================== */

const FEIRA = {
  escola: 'Etec de Vargem Grande do Sul',
  titulo: 'Feira de Projetos'
};

const ANDARES = {
  'terreo': { nome: 'Térreo', nivel: '1º nível' },
  'segundo-andar': { nome: 'Segundo andar', nivel: '2º nível' }
};

const LOCAIS = {
  campus: { nome: 'Campus' },
  barracao: { nome: 'Barracão' },
  predio: { nome: 'Prédio principal' }
};

const ESPACOS = [
  { id: 'b01', tipo: 'bancada', local: 'barracao', rotulo: 'Experimento de Milgram ' },
  { id: 'b02', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 02' },
  { id: 'b03', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 03' },
  { id: 'b04', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 04' },
  { id: 'b05', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 05' },
  { id: 'b06', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 06' },
  { id: 'b07', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 07' },
  { id: 'b08', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 08' },
  { id: 'b09', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 09' },
  { id: 'b10', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 10' },
  { id: 'b11', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 11' },
  { id: 'b12', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 12' },
  { id: 'b13', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 13' },
  { id: 'b14', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 14' },
  { id: 'b15', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 15' },
  { id: 'b16', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 16' },
  { id: 'b17', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 17' },
  { id: 'b18', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 18' },
  { id: 'b19', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 19' },
  { id: 'b20', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 20' },
  { id: 'b21', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 21' },
  { id: 'b22', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 22' },
  { id: 'b23', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 23' },
  { id: 'b24', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 24' },
  { id: 'b25', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 25' },
  { id: 'b26', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 26' },
  { id: 'b27', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 27' },
  { id: 'b28', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 28' },
  { id: 'b29', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 29' },
  { id: 'b30', tipo: 'bancada', local: 'barracao', rotulo: 'Bancada 30' },

  { id: 't01', tipo: 'sala', local: 'predio', andar: 'terreo', rotulo: 'Sala 01' },
  { id: 't02', tipo: 'sala', local: 'predio', andar: 'terreo', rotulo: 'Sala 02' },
  { id: 't03', tipo: 'sala', local: 'predio', andar: 'terreo', rotulo: 'Sala 03' },

  { id: 's01', tipo: 'sala', local: 'predio', andar: 'segundo-andar', rotulo: 'Sala 01' },
  { id: 's02', tipo: 'sala', local: 'predio', andar: 'segundo-andar', rotulo: 'Sala 02' },
  { id: 's03', tipo: 'sala', local: 'predio', andar: 'segundo-andar', rotulo: 'Sala 03' },
  { id: 's04', tipo: 'sala', local: 'predio', andar: 'segundo-andar', rotulo: 'Sala 04' },
  { id: 's05', tipo: 'sala', local: 'predio', andar: 'segundo-andar', rotulo: 'Sala 05' },
  { id: 's06', tipo: 'sala', local: 'predio', andar: 'segundo-andar', rotulo: 'Sala 06' },
  { id: 's07', tipo: 'sala', local: 'predio', andar: 'segundo-andar', rotulo: 'Sala 07' },

  { id: 'l01', tipo: 'laboratorio', local: 'predio', andar: 'segundo-andar', rotulo: 'Laboratório 01' },
  { id: 'l02', tipo: 'laboratorio', local: 'predio', andar: 'segundo-andar', rotulo: 'Laboratório 02' },
  { id: 'l03', tipo: 'laboratorio', local: 'predio', andar: 'segundo-andar', rotulo: 'Laboratório 03' },
  { id: 'l04', tipo: 'laboratorio', local: 'predio', andar: 'segundo-andar', rotulo: 'Laboratório 04' }
];

const PLANTA = {
  campus: {
    largura: 640,
    altura: 520,
    avenida: { x: 596, y: 0, w: 44, h: 520, texto: 'Avenida' },
    areas: [
      { id: 'entrada', nome: 'Entrada', tipo: 'entrada', x: 500, y: 372, w: 54, h: 118, vertical: true },
      { id: 'estacionamento', nome: 'Estacionamento', tipo: 'externo', x: 110, y: 350, w: 280, h: 88, nota: 'referência' },
      { id: 'quadra', nome: 'Quadra', tipo: 'quadra', x: 24, y: 56, w: 148, h: 270, nota: 'referência' },
      { id: 'barracao', nome: 'Barracão', tipo: 'barracao', x: 196, y: 52, w: 216, h: 280, abre: 'barracao' },
      { id: 'patio', nome: 'Pátio', tipo: 'externo', x: 428, y: 56, w: 30, h: 290, vertical: true, nota: 'circulação' },
      { id: 'predio', nome: 'Prédio principal', tipo: 'predio', x: 476, y: 64, w: 114, h: 284, abre: 'predio', vertical: true, nota: '2 andares' }
    ]
  },

  barracao: {
    largura: 640,
    parede: { x: 20, y: 24, w: 600 },
    grade: { x: 30, y: 84, larguraTotal: 580, colunas: 4, altura: 66, vao: 12, vaoVertical: 12 }
  },

  predio: {
    largura: 640,
    parede: { x: 80, y: 50, w: 480 },
    interior: { x: 100, larguraTotal: 440 },
    salas: { altura: 84, vao: 12 },
    laboratorios: { altura: 76, vao: 12 },
    servicos: { altura: 62, vao: 12 }
  }
};

const ROTAS = {};

const svgMapa = document.getElementById('mapa');
const campoBusca = document.getElementById('campo-busca');
const listaResultados = document.getElementById('resultados');

const estado = {
  local: 'campus',
  andar: 'terreo',
  selecionado: null,
  achado: null
};

const semAcento = (texto) =>
  String(texto).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const escapar = (texto) =>
  String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

function rotuloCurto(espaco) {
  if (espaco.tipo === 'bancada') return espaco.rotulo.replace(/bancada/i, '').trim();
  if (espaco.tipo === 'laboratorio') return espaco.rotulo.replace(/laborat[oó]rio/i, 'Lab').trim();
  return espaco.rotulo;
}

const cortar = (texto, limite) =>
  texto.length > limite ? texto.slice(0, limite - 1).trim() + '…' : texto;

const espacoPorId = (id) => ESPACOS.find((espaco) => espaco.id === id);

const compactar = (texto) =>
  semAcento(texto).replace(/[^a-z0-9]/g, '').replace(/(\d+)/g, (numero) => String(Number(numero)));

const projetoDe = (espaco) => espaco.projeto || {};
const nomeDoProjeto = (espaco) => projetoDe(espaco).nome || '';
const temProjeto = (espaco) => nomeDoProjeto(espaco) !== '';

function localizacaoCompleta(espaco) {
  const partes = [LOCAIS[espaco.local].nome];
  if (espaco.andar) partes.push(ANDARES[espaco.andar].nome);
  partes.push(espaco.rotulo);
  return partes.join(' · ');
}

function nomeDoLocalAtual() {
  if (estado.local === 'predio') {
    return LOCAIS.predio.nome + ' · ' + ANDARES[estado.andar].nome;
  }
  return LOCAIS[estado.local].nome;
}

function grade(quantidade, config) {
  const posicoes = [];
  let indice = 0;
  let linha = 0;

  while (indice < quantidade) {
    const colunas = (config.colunasPorLinha && config.colunasPorLinha[linha]) || config.colunas;
    const largura = (config.larguraTotal - config.vao * (colunas - 1)) / colunas;

    for (let coluna = 0; coluna < colunas && indice < quantidade; coluna++) {
      posicoes.push({
        x: config.x + coluna * (largura + config.vao),
        y: config.y + linha * (config.altura + config.vaoVertical),
        w: largura,
        h: config.altura
      });
      indice++;
    }
    linha++;
  }

  const alturaTotal = linha * config.altura + Math.max(0, linha - 1) * config.vaoVertical;
  return { posicoes, alturaTotal };
}

function desenharMapa() {
  if (estado.local === 'barracao') desenharBarracao();
  else if (estado.local === 'predio') desenharPredio();
  else desenharCampus();
}

function desenharCampus() {
  const planta = PLANTA.campus;
  let desenho = `<rect class="fundo" x="0" y="0" width="${planta.largura}" height="${planta.altura}"/>`;

  const avenida = planta.avenida;
  desenho += `<rect class="avenida" x="${avenida.x}" y="${avenida.y}" width="${avenida.w}" height="${avenida.h}"/>`;
  desenho += textoVertical(avenida.texto, avenida.x + avenida.w / 2, avenida.y + avenida.h / 2, 'avenida__texto');

  planta.areas.forEach((area) => {
    const classe = area.abre ? 'area' : 'area area--referencia';
    const centroX = area.x + area.w / 2;
    const centroY = area.y + area.h / 2;

    desenho += `<g class="${classe} tipo-${area.tipo}" data-local="${area.abre || ''}">`;
    desenho += `<rect class="area__caixa" x="${area.x}" y="${area.y}" width="${area.w}" height="${area.h}" rx="2"/>`;

    if (area.vertical) {
      desenho += textoVertical(area.nome, centroX, centroY - 6, 'area__titulo');

      if (area.nota) {
        desenho += textoVertical(area.nota, centroX + 18, centroY + 30, 'area__subtitulo');
      }
    } else {
      desenho += `<text class="area__titulo" x="${centroX}" y="${centroY - 4}" text-anchor="middle">${escapar(area.nome)}</text>`;

      if (area.nota) {
        const aindaTemBancadas = area.abre === 'barracao';
        const alturaDaNota = aindaTemBancadas ? 34 : 18;
        desenho += `<text class="area__subtitulo" x="${centroX}" y="${centroY + alturaDaNota}" text-anchor="middle">${escapar(area.nota)}</text>`;
      }
    }

    if (area.abre === 'barracao') {
      const quantas = ESPACOS.filter((espaco) => espaco.local === 'barracao').length;
      desenho += `<text class="area__subtitulo" x="${centroX}" y="${centroY + 16}" text-anchor="middle">${quantas} bancadas</text>`;
    }

    desenho += '</g>';
  });

  finalizarDesenho(planta.largura, planta.altura, desenho);
}

function desenharBarracao() {
  const planta = PLANTA.barracao;
  const bancadas = ESPACOS.filter((espaco) => espaco.local === 'barracao');
  const largura = planta.largura;
  const alturaBancada = planta.grade.altura;
  const vao = planta.grade.vao;
  const xEsquerda = 30;
  const larguraTotal = 580;
  const larguraLateral = 94;
  const yTopo = 84;
  const quantidadeTopo = 8;
  const larguraTopo = (larguraTotal - vao * (quantidadeTopo - 1)) / quantidadeTopo;
  const posicoes = [];

  for (let i = 0; i < quantidadeTopo; i++) {
    posicoes.push({
      x: xEsquerda + i * (larguraTopo + vao),
      y: yTopo,
      w: larguraTopo,
      h: alturaBancada
    });
  }

  for (let i = 0; i < 11; i++) {
    const y = yTopo + alturaBancada + vao + i * (alturaBancada + vao);
    posicoes.push({
      x: xEsquerda,
      y,
      w: larguraLateral,
      h: alturaBancada
    });
  }

  for (let i = 0; i < 11; i++) {
    const y = yTopo + alturaBancada + vao + i * (alturaBancada + vao);
    posicoes.push({
      x: xEsquerda + larguraTotal - larguraLateral,
      y,
      w: larguraLateral,
      h: alturaBancada
    });
  }

  const altura = yTopo + alturaBancada + vao + 11 * (alturaBancada + vao) + 100;
  let desenho = `<rect class="fundo" x="0" y="0" width="${largura}" height="${altura}"/>`;

  desenho += `<rect class="planta__parede" x="${planta.parede.x}" y="${planta.parede.y}" width="${planta.parede.w}" height="${altura - planta.parede.y - 62}" rx="2"/>`;
  desenho += `<text class="planta__titulo-andar" x="${xEsquerda}" y="62">Barracão · ${bancadas.length} bancadas</text>`;

  bancadas.forEach((espaco, indice) => {
    if (posicoes[indice]) desenho += caixaDeEspaco(espaco, posicoes[indice]);
  });

  desenho += setaDeEntrada(largura / 2, altura - 56);
  finalizarDesenho(largura, altura, desenho);
}

function desenharPredio() {
  const planta = PLANTA.predio;
  const interior = planta.interior;
  const terreo = estado.andar === 'terreo';

  const salas = ESPACOS.filter((e) =>
    e.local === 'predio' &&
    e.andar === estado.andar &&
    e.tipo === 'sala'
  );

  const laboratorios = ESPACOS.filter((e) =>
    e.local === 'predio' &&
    e.andar === estado.andar &&
    e.tipo === 'laboratorio'
  );

  const vao = planta.salas.vao;
  const topo = 112;
  const larguraTotal = interior.larguraTotal;
  const xEsquerda = interior.x;
  const larguraColuna = (larguraTotal - vao) / 2;
  const xDireita = xEsquerda + larguraColuna + vao;
  const alturaSala = planta.salas.altura;
  const alturaLab = planta.laboratorios.altura;
  const alturaServico = planta.servicos.altura;
  const passoSala = alturaSala + vao;

  let desenho = '';
  const posicoesSalas = [];
  const posicoesLabs = [];
  const posicoesServicos = [];
  let altura;

  if (terreo) {
    salas.forEach((espaco, indice) => {
      posicoesSalas.push({
        espaco,
        x: xEsquerda,
        y: topo + indice * passoSala,
        w: larguraColuna,
        h: alturaSala
      });
    });

    const yBanheiro = topo + (3 * alturaSala + 2 * vao - alturaServico) / 2;

    posicoesServicos.push({
      item: { rotulo: 'Banheiros', nota: 'uso do prédio' },
      x: xDireita,
      y: yBanheiro,
      w: larguraColuna,
      h: alturaServico
    });

    posicoesServicos.push({
      item: { rotulo: 'Rampa', nota: 'acesso ao segundo andar' },
      x: xEsquerda + (larguraTotal - 190) / 2,
      y: topo + 3 * passoSala + 24,
      w: 190,
      h: alturaServico
    });

    altura = topo + 3 * passoSala + alturaServico + 125;
  } else {
    salas.slice(0, 4).forEach((espaco, indice) => {
      posicoesSalas.push({
        espaco,
        x: xEsquerda,
        y: topo + alturaLab + 22 + indice * passoSala,
        w: larguraColuna,
        h: alturaSala
      });
    });

    const yDireitaSalas = topo + alturaLab + 22;

    const sequenciaDireita = [
      { tipo: 'sala', espaco: salas[4] },
      { tipo: 'banheiro' },
      { tipo: 'sala', espaco: salas[5] },
      { tipo: 'sala', espaco: salas[6] }
    ];

    sequenciaDireita.forEach((item, indice) => {
      const y = yDireitaSalas + indice * passoSala;

      if (item.tipo === 'sala' && item.espaco) {
        posicoesSalas.push({
          espaco: item.espaco,
          x: xDireita,
          y,
          w: larguraColuna,
          h: alturaSala
        });
      } else if (item.tipo === 'banheiro') {
        posicoesServicos.push({
          item: { rotulo: 'Banheiros', nota: 'uso do prédio' },
          x: xDireita,
          y,
          w: larguraColuna,
          h: alturaSala
        });
      }
    });

    posicoesLabs.push(
      { x: xEsquerda, y: topo, w: larguraColuna, h: alturaLab },
      { x: xDireita, y: topo, w: larguraColuna, h: alturaLab }
    );

    const yLabInferior = yDireitaSalas + 4 * passoSala + 8;

    posicoesLabs.push(
      { x: xEsquerda, y: yLabInferior, w: larguraColuna, h: alturaLab },
      { x: xDireita, y: yLabInferior, w: larguraColuna, h: alturaLab }
    );

    altura = yLabInferior + alturaLab + 115;
  }

  desenho += `<rect class="fundo" x="0" y="0" width="${planta.largura}" height="${altura}"/>`;

  desenho += `<rect class="planta__parede" x="${planta.parede.x}" y="${planta.parede.y}" width="${planta.parede.w}" height="${altura - planta.parede.y - 62}" rx="2"/>`;

  desenho += `<text class="planta__titulo-andar" x="${interior.x}" y="76">${LOCAIS.predio.nome} · ${ANDARES[estado.andar].nome}</text>`;

  posicoesSalas.forEach((posicao) => {
    if (posicao.espaco) desenho += caixaDeEspaco(posicao.espaco, posicao);
  });

  if (!terreo) {
    laboratorios.forEach((espaco, indice) => {
      if (posicoesLabs[indice]) desenho += caixaDeEspaco(espaco, posicoesLabs[indice]);
    });
  }

  posicoesServicos.forEach((posicao) => {
    desenho += caixaDeServico(posicao.item, posicao);
  });

  desenho += setaDeEntrada(planta.largura / 2, altura - 54);
  finalizarDesenho(planta.largura, altura, desenho);
}

function quebrarTexto(texto, limite = 14, maxLinhas = 3) {
  const palavras = String(texto || '').split(/\s+/);
  const linhas = [];
  let linha = '';

  for (const palavra of palavras) {
    const teste = linha ? `${linha} ${palavra}` : palavra;

    if (teste.length <= limite) {
      linha = teste;
    } else {
      if (linha) linhas.push(linha);
      linha = palavra;
    }

    if (linhas.length === maxLinhas) break;
  }

  if (linha && linhas.length < maxLinhas) linhas.push(linha);

  if (linhas.length === maxLinhas && palavras.join(' ').length > linhas.join(' ').length) {
    linhas[maxLinhas - 1] = linhas[maxLinhas - 1].replace(/[.…]*$/, '') + '…';
  }

  return linhas;
}

function caixaDeEspaco(espaco, posicao) {
  const temNome = temProjeto(espaco);
  const classes = ['espaco'];

  if (temNome) classes.push('espaco--ocupado');
  if (estado.selecionado === espaco.id) classes.push('espaco--selecionado');
  if (estado.achado === espaco.id) classes.push('espaco--achado');

  const centroX = posicao.x + posicao.w / 2;
  const meio = posicao.y + posicao.h / 2;

  let desenho = `<g class="${classes.join(' ')}" data-espaco="${espaco.id}" role="button" tabindex="0" aria-label="${escapar(espaco.rotulo)}">`;

  desenho += `<rect class="espaco__caixa" x="${posicao.x}" y="${posicao.y}" width="${posicao.w}" height="${posicao.h}" rx="2"/>`;

  const alturaDoRotulo = temNome ? meio - 6 : meio + 5;

  desenho += `<text class="espaco__rotulo" x="${centroX}" y="${alturaDoRotulo}" text-anchor="middle">${escapar(rotuloCurto(espaco))}</text>`;

  if (temNome) {
  const linhas = quebrarTexto(nomeDoProjeto(espaco), posicao.w < 100 ? 12 : 20, 3);
  const alturaLinha = 12;
  const inicioY = meio + 8;

  desenho += `<text class="espaco__projeto" text-anchor="middle">`;

  linhas.forEach((linha, indice) => {
    desenho += `<tspan x="${centroX}" y="${inicioY + indice * alturaLinha}">${escapar(linha)}</tspan>`;
  });

  desenho += `</text>`;
}
  desenho += '</g>';
  return desenho;
}

function caixaDeServico(item, posicao) {
  const centroX = posicao.x + posicao.w / 2;
  const meio = posicao.y + posicao.h / 2;

  return `<g class="espaco espaco--servico" data-servico="${escapar(item.rotulo)}" data-nota="${escapar(item.nota || '')}">
    <rect class="espaco__caixa" x="${posicao.x}" y="${posicao.y}" width="${posicao.w}" height="${posicao.h}" rx="2"/>
    <text class="espaco__rotulo" x="${centroX}" y="${meio - 2}" text-anchor="middle">${escapar(item.rotulo)}</text>
    <text class="espaco__projeto" x="${centroX}" y="${meio + 13}" text-anchor="middle">${escapar(item.nota || '')}</text>
  </g>`;
}

function textoVertical(texto, x, y, classe) {
  return `<text class="${classe}" x="${x}" y="${y}" text-anchor="middle" transform="rotate(-90 ${x} ${y})">${escapar(texto)}</text>`;
}

function setaDeEntrada(x, y) {
  return `<g class="entrada-marcador">
    <text class="planta__seta" x="${x}" y="${y}" text-anchor="middle">ENTRADA</text>
    <path class="planta__seta-linha" d="M ${x - 16} ${y + 10} L ${x} ${y + 22} L ${x + 16} ${y + 10}"/>
  </g>`;
}

function finalizarDesenho(largura, altura, desenho) {
  svgMapa.setAttribute('viewBox', `0 0 ${largura} ${altura}`);
  svgMapa.innerHTML = desenho;
}

const painel = document.getElementById('painel');

function atualizarPainel() {
  const espaco = estado.selecionado ? espacoPorId(estado.selecionado) : null;

  if (espaco) {
    painel.innerHTML = painelDoEspaco(espaco);
    return;
  }

  painel.innerHTML = painelInicial();
}

function painelInicial() {
  const noLugar = (tipo) =>
    ESPACOS.filter((espaco) =>
      espaco.tipo === tipo &&
      (
        estado.local === 'campus' ||
        (estado.local === 'barracao' && espaco.local === 'barracao') ||
        (estado.local === 'predio' && espaco.local === 'predio' && espaco.andar === estado.andar)
      )
    ).length;

  const contagem = [
    ['bancadas', noLugar('bancada')],
    ['salas', noLugar('sala')],
    ['laboratórios', noLugar('laboratorio')]
  ].filter(([, quantos]) => quantos > 0);

  const dica = estado.local === 'campus'
    ? 'Toque no barracão ou no prédio principal para entrar, ou pesquise um projeto.'
    : 'Selecione um espaço no mapa para consultar os detalhes.';

  return `
    <p class="painel__sobre">${escapar(nomeDoLocalAtual())}</p>
    <h2 class="painel__titulo">${escapar(FEIRA.titulo)}</h2>
    <p class="painel__texto">${escapar(dica)}</p>
    <div class="painel__contagens">
      ${contagem.map(([nome, quantos]) => `
        <div class="painel__contagem">
          <strong>${quantos}</strong>
          <span>${escapar(nome)}</span>
        </div>
      `).join('')}
    </div>`;
}

function painelDoEspaco(espaco) {
  const projeto = projetoDe(espaco);

  let html = `
    <p class="painel__sobre">${escapar(localizacaoCompleta(espaco))}</p>
    <h2 class="painel__titulo">${escapar(espaco.rotulo)}</h2>`;

  if (temProjeto(espaco)) {
    html += `
      <p class="painel__projeto-titulo">${escapar(projeto.nome)}</p>
      ${linhaDaFicha('Número do Projeto', projeto.turma || '')}
      ${linhaDaFicha('Descrição', projeto.descricao || '')}`;
  } else {
    html += `
      <p class="painel__texto painel__texto--fraco">Projeto sem cadastro.</p>
      ${linhaDaFicha('Nome do projeto', '')}
      ${linhaDaFicha('Numero do Projeto', '')}
      ${linhaDaFicha('Descrição', '')}`;
  }

  html += `<p class="painel__rota">${textoDaRota(espaco)}</p>`;
  return html;
}

function linhaDaFicha(rotulo, valor) {
  return `<div class="ficha__linha">
    <span class="ficha__rotulo">${escapar(rotulo)}</span>
    <span class="ficha__valor${valor ? '' : ' ficha__valor--vazio'}">${valor ? escapar(valor) : 'a preencher'}</span>
  </div>`;
}

function textoDaRota(espaco) {
  if (ROTAS[espaco.id]) return 'Rota até este espaço desenhada no mapa.';
  return 'A rota até este espaço ainda não está configurada. Use o mapa para se orientar pelos blocos.';
}

function painelDaReferencia(nome, nota) {
  return `
    <p class="painel__sobre">Área de referência</p>
    <h2 class="painel__titulo">${escapar(nome)}</h2>
    <p class="painel__texto painel__texto--fraco">${escapar(nota || 'Ponto de orientação do campus. Não recebe projetos da feira.')}</p>`;
}

function textoBuscavel(espaco) {
  const partes = [
    espaco.rotulo,
    LOCAIS[espaco.local].nome,
    espaco.andar ? ANDARES[espaco.andar].nome : '',
    nomeDoProjeto(espaco),
    projetoDe(espaco).turma || '',
    projetoDe(espaco).descricao || ''
  ];

  return semAcento(partes.join(' '));
}

function buscar(termo) {
  const procurado = semAcento(termo.trim());
  if (!procurado) return [];

  const compacto = compactar(procurado);

  const compactoDoEspaco = (espaco) =>
    compactar(espaco.rotulo + LOCAIS[espaco.local].nome + (espaco.andar || ''));

  return ESPACOS.filter((espaco) =>
    textoBuscavel(espaco).includes(procurado) ||
    compactoDoEspaco(espaco).includes(compacto)
  );
}

function mostrarResultados() {
  const termo = campoBusca.value;

  if (!termo.trim()) {
    listaResultados.hidden = true;
    listaResultados.innerHTML = '';
    estado.achado = null;
    desenharMapa();
    return;
  }

  const encontrados = buscar(termo).slice(0, 8);

  if (!encontrados.length) {
    listaResultados.innerHTML = '<li class="busca__vazio">Nada encontrado. Tente o nome do projeto, a sala ou o local.</li>';
    listaResultados.hidden = false;
    return;
  }

  listaResultados.innerHTML = encontrados.map((espaco) => `
    <li>
      <button class="busca__item" data-resultado="${espaco.id}">
        <strong>${escapar(temProjeto(espaco) ? nomeDoProjeto(espaco) : espaco.rotulo)}</strong>
        <small>${escapar(localizacaoCompleta(espaco))}</small>
      </button>
    </li>`).join('');

  listaResultados.hidden = false;
}

function irParaLocal(local, andar) {
  estado.local = local;

  if (andar) estado.andar = andar;

  estado.selecionado = null;
  estado.achado = null;
  listaResultados.hidden = true;

  atualizarTudo();
}

function selecionarEspaco(id, rolar) {
  const espaco = espacoPorId(id);
  if (!espaco) return;

  estado.local = espaco.local;

  if (espaco.andar) estado.andar = espaco.andar;

  estado.selecionado = espaco.id;
  estado.achado = espaco.id;

  atualizarTudo();

  if (rolar) svgMapa.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function atualizarTudo() {
  document.getElementById('nome-escola').textContent = FEIRA.escola;
  document.getElementById('titulo-feira').textContent = FEIRA.titulo;

  desenharMapa();
  desenharTrilha();
  desenharBarra();
  desenharLegenda();
  desenharNota();
  desenharRota();
  atualizarPainel();
}

function desenharTrilha() {
  const trilha = document.getElementById('trilha');
  const elos = [];

  if (estado.local === 'campus') {
    elos.push('<span class="trilha__atual">Campus</span>');
  } else {
    elos.push('<button class="trilha__elo" data-ir="campus">Campus</button>');
    elos.push('<span class="trilha__seta">/</span>');

    if (estado.local === 'predio') {
      elos.push('<span class="trilha__atual">Prédio principal</span>');
      elos.push('<span class="trilha__seta">/</span>');
      elos.push(`<span class="trilha__atual">${ANDARES[estado.andar].nome}</span>`);
    } else {
      elos.push('<span class="trilha__atual">Barracão</span>');
    }
  }

  trilha.innerHTML = elos.join('');
}

function desenharBarra() {
  const contexto = document.getElementById('contexto');
  const blocoAndar = document.getElementById('andar');
  const botaoVoltar = document.getElementById('botao-voltar');

  const quantos = ESPACOS.filter((espaco) =>
    estado.local === 'barracao'
      ? espaco.local === 'barracao'
      : estado.local === 'predio'
        ? espaco.local === 'predio' && espaco.andar === estado.andar
        : false
  ).length;

  contexto.textContent = estado.local === 'campus'
    ? 'Campus · visão geral'
    : nomeDoLocalAtual() + ' · ' + quantos + ' espaços';

  blocoAndar.hidden = estado.local !== 'predio';

  document.getElementById('andar-terreo')
    .setAttribute('aria-pressed', String(estado.andar === 'terreo'));

  document.getElementById('andar-segundo')
    .setAttribute('aria-pressed', String(estado.andar === 'segundo-andar'));

  botaoVoltar.hidden = estado.local === 'campus';
}

function desenharLegenda() {
  const legenda = document.getElementById('legenda');
  let itens = [];

  if (estado.local === 'campus') {
    itens = [
      ['barracao', 'Barracão'],
      ['predio', 'Prédio principal'],
      ['quadra', 'Quadra'],
      ['externo', 'Área externa'],
      ['entrada', 'Entrada']
    ];
  } else if (estado.local === 'barracao') {
    itens = [
      ['livre', 'Bancada livre'],
      ['projeto', 'Bancada com projeto cadastrado']
    ];
  } else {
    itens = [
      ['projeto', 'Espaço da feira'],
      ['servico', 'Espaço que não participa']
    ];
  }

  legenda.innerHTML = itens.map(([cor, texto]) =>
    `<li><span class="legenda__cor legenda__cor--${cor}"></span>${texto}</li>`
  ).join('');
}

function desenharNota() {
  document.getElementById('nota-mapa').textContent = notaDoLugar();
}

function notaDoLugar() {
  if (estado.local === 'predio') {
    return estado.andar === 'terreo'
      ? 'Planta esquemática do térreo: três salas à esquerda, banheiros à direita e rampa na parte frontal, oposta à entrada.'
      : 'Planta esquemática do segundo andar: quatro salas à esquerda; à direita, sala, banheiro, sala e sala. Os laboratórios ficam nas extremidades.';
  }

  if (estado.local === 'barracao') {
    return 'Planta esquemática do barracão: bancadas nas laterais e no fundo, formando um U invertido e deixando a entrada livre.';
  }

  return 'Planta esquemática do campus. Posições aproximadas, editáveis em js/app.js.';
}

function desenharRota() {
  const caminho = estado.selecionado ? ROTAS[estado.selecionado] : null;
  if (!caminho || estado.local !== 'campus') return;

  const pontos = caminho.map(([x, y], indice) =>
    `${indice === 0 ? 'M' : 'L'} ${x} ${y}`
  ).join(' ');

  svgMapa.insertAdjacentHTML('beforeend', `<path class="rota" d="${pontos}"/>`);
}

document.addEventListener('click', (evento) => {
  const linkTrilha = evento.target.closest('[data-ir]');

  if (linkTrilha) {
    irParaLocal(linkTrilha.dataset.ir);
    return;
  }

  const botaoAndar = evento.target.closest('[data-andar]');

  if (botaoAndar) {
    estado.andar = botaoAndar.dataset.andar;
    estado.selecionado = null;
    estado.achado = null;
    atualizarTudo();
    return;
  }

  const resultado = evento.target.closest('[data-resultado]');

  if (resultado) {
    campoBusca.value = '';
    selecionarEspaco(resultado.dataset.resultado, true);
    return;
  }

  const espacoClicado = evento.target.closest('[data-espaco]');

  if (espacoClicado) {
    selecionarEspaco(espacoClicado.dataset.espaco, false);
    return;
  }

  const servico = evento.target.closest('[data-servico]');

  if (servico) {
    painel.innerHTML = painelDaReferencia(servico.dataset.servico, servico.dataset.nota);
    return;
  }

  const local = evento.target.closest('[data-local]');

  if (local && local.dataset.local) {
    irParaLocal(local.dataset.local);
    return;
  }

  const referencia = evento.target.closest('.area');

  if (referencia) {
    const nome = referencia.querySelector('.area__titulo').textContent;
    painel.innerHTML = painelDaReferencia(nome, 'Ponto de referência do campus.');
  }
});

svgMapa.addEventListener('keydown', (evento) => {
  if (evento.key !== 'Enter' && evento.key !== ' ') return;

  const espaco = evento.target.closest('[data-espaco]');
  if (!espaco) return;

  evento.preventDefault();
  selecionarEspaco(espaco.dataset.espaco, false);
});

campoBusca.addEventListener('input', mostrarResultados);

campoBusca.addEventListener('keydown', (evento) => {
  if (evento.key !== 'Enter') return;

  const primeiro = listaResultados.querySelector('[data-resultado]');

  if (primeiro) {
    evento.preventDefault();
    campoBusca.value = '';
    selecionarEspaco(primeiro.dataset.resultado, true);
  }
});

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') {
    listaResultados.hidden = true;
    campoBusca.value = '';
  }
});

document.getElementById('botao-voltar').addEventListener('click', () => {
  irParaLocal('campus');
});

function abrirPeloLink() {
  const link = window.location.hash.replace('#', '');
  if (!link) return;

  const partes = link.split('/');
  const valor = partes[1] || partes[0];
  const espaco = espacoPorId(valor);

  if (espaco) selecionarEspaco(espaco.id, false);
}

atualizarTudo();
abrirPeloLink();
window.addEventListener('hashchange', abrirPeloLink);