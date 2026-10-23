# Feira de Projetos — Etec de Vargem Grande do Sul

Site com o mapa interativo da feira: campus, barracão, prédio principal (térreo e segundo andar), quadra e áreas externas.

## Como abrir

1. Baixe a pasta `etec-feira`.
2. Dê dois cliques em **index.html** — abre direto no navegador, sem instalar nada.

Funciona em celular e computador. Não precisa de servidor, banco de dados nem internet.

---

## O que tem em cada arquivo

```
etec-feira/
├── index.html        estrutura da página (sem CSS e sem JavaScript aqui dentro)
├── css/
│   └── style.css     todo o visual
├── js/
│   └── app.js        dados dos espaços, planta, mapa, busca e GPS
└── assets/
    └── icone.svg     ícone da aba do navegador
```

Todo o JavaScript está em `js/app.js`, dividido em blocos numerados no topo do arquivo:

| Bloco | O que fica ali |
|---|---|
| **1. TEXTOS** | nome da escola, título da feira, nomes dos andares e dos locais |
| **2. ESPAÇOS** | as bancadas, salas e laboratórios — **é aqui que você cadastra os projetos** |
| **3. PLANTA** | posições aproximadas dos prédios no desenho |
| **4. ROTAS** | caminho até um espaço (opcional, começa desativado) |
| **5. GPS** | localização do visitante (opcional, pode ser desligada) |

---

## 1. Cadastrar os projetos — bloco 2 do `js/app.js`

Cada espaço é uma linha dentro de `ESPACOS`. Hoje todos estão vazios, mostrando **“Projeto sem cadastro”** no site.

Para cadastrar, acrescente o bloco `projeto` na linha do espaço:

```js
{
  id: 'b07',
  tipo: 'bancada',
  local: 'barracao',
  rotulo: 'Bancada 07',
  projeto: {
    nome: 'Nome do projeto',
    descricao: 'Uma frase explicando o projeto.',
    turma: '2º ano A — Ana e Lucas'
  }
},
```

- Os três campos são opcionais: o que ficar de fora aparece como “a preencher”.
- **Para adicionar** um espaço, copie uma linha inteira e troque o `id`.
- **Para remover**, apague a linha.
- **Para renomear**, mude o `rotulo` (ex.: `'Sala 01'`, `'Bancada 07'`, `'Laboratório 02'`).
- **Para mudar a quantidade de laboratórios**, acrescente ou apague linhas com `tipo: 'laboratorio'` — o mapa se reorganiza sozinho.

### Campos de cada espaço

| Campo | Para que serve |
|---|---|
| `id` | nome único do espaço. Não repita. |
| `tipo` | `'bancada'`, `'sala'` ou `'laboratorio'` |
| `local` | `'barracao'` ou `'predio'` |
| `andar` | no prédio: `'terreo'` ou `'segundo-andar'` |
| `rotulo` | o que aparece no mapa e no painel |
| `projeto` | opcional: `nome`, `descricao`, `turma` |

### Quantidades atuais

- **Barracão:** 30 bancadas (`b01` a `b30`)
- **Prédio · Térreo:** 3 salas com projeto (`t01` a `t03`)
- **Prédio · Segundo andar:** 7 salas (`s01` a `s07`) + 4 laboratórios (`l01` a `l04`), cada um com um projeto

Os laboratórios do térreo aparecem no mapa como área de uso do prédio e **não recebem projetos** — isso é definido em `PLANTA.predio.labsTerreo` (bloco 3).

---

## 2. Ajustar a planta — bloco 3 do `js/app.js`

O mapa é esquemático. As posições foram montadas a partir das referências da escola (foto aérea e croqui), **mas não são medidas oficiais**. Tudo é editável:

- `PLANTA.campus` — posição e tamanho da quadra, barracão, pátio, prédio, estacionamento e entrada.
  Cada área usa `x`, `y` (canto superior esquerdo), `w` (largura) e `h` (altura).
- `PLANTA.barracao` — quantas colunas de bancadas aparecem dentro do barracão (`colunas`) e o tamanho das caixas.
- `PLANTA.predio` — tamanho das salas, dos laboratórios e dos espaços de uso do prédio, e quantos laboratórios existem no térreo.

Se você tiver a planta em escala, basta ajustar esses números até o desenho bater com ela.

---

## 3. Rota até um espaço — bloco 4 (opcional)

Não existe caminho desenhado, porque seria preciso medir o percurso real. Se quiser criar um, escreva as coordenadas dentro da área do campus:

```js
const ROTAS = {
  b07: [[500, 430], [430, 300], [300, 150]]
};
```

Enquanto a lista estiver vazia, o painel apenas avisa que a rota ainda não está configurada.

---

## 4. GPS — bloco 5 (opcional)

- Para **remover** o GPS do site, troque `ativo: true` por `ativo: false`.
- O botão “Minha localização” só pede permissão quando o visitante clica.
- Enquanto `calibragem` estiver com valores `null`, o site **não** coloca o marcador sobre a planta (para não fingir precisão). Ele apenas informa a margem de erro em metros.
- Para calibrar, informe a latitude e a longitude dos cantos do campus:

```js
calibragem: { norte: -21.7900, sul: -21.7960, oeste: -46.9800, leste: -46.9740 }
```

Com a calibragem preenchida, o marcador aparece no campus e se atualiza enquanto a pessoa caminha. Dentro dos prédios a precisão do GPS é baixa, então não use o marcador como posição exata.

O mapa, a busca e a troca de andares funcionam normalmente com o GPS desligado ou sem permissão.

---

## 5. Busca, andares e links diretos

- A busca aceita nome do projeto, sala, laboratório, local ou andar. Também entende “sala 3” para “Sala 03”.
- Ao escolher um resultado, o site abre o local certo, troca para o andar correto, destaca o espaço e mostra o painel com localização e andar.
- Links diretos (úteis para QR Code ou etiqueta NFC):

```
index.html#espaco/b07    abre a Bancada 07
index.html#espaco/s03    abre a Sala 03 do segundo andar
index.html#espaco/l02    abre o Laboratório 02
```

---

## 6. Publicar no GitHub Pages

1. Crie um repositório e envie a pasta `etec-feira` (o `index.html` precisa ficar na raiz do repositório).
2. No repositório, abra **Settings → Pages**.
3. Em *Source*, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
4. Salve. O site fica em `https://seuusuario.github.io/nome-do-repositorio/`.

Os caminhos do projeto são relativos, então funciona também em Netlify, Vercel ou dentro de uma pasta do site da escola.

---

## Conferido antes da entrega

- HTML, CSS e JavaScript em arquivos separados; nenhum `style=""`, `<style>` ou código dentro de `<script>` no HTML.
- Troca entre **Térreo** e **Segundo andar** exibindo apenas os espaços do nível escolhido.
- Cada laboratório do segundo andar com exatamente um projeto; laboratórios do térreo sem projetos.
- Cada sala (térreo e segundo andar) com um projeto.
- Busca por projeto, sala e local, com destaque do espaço e indicação de área e andar.
- GPS opcional, funcionando com permissão negada, concedida e desligado, sem afetar o resto do site.
