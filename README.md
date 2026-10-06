# ABC Bolinhas | Site do Time

> **Nosso time, nossas histórias: uma escalação interativa em que cada jogador possui a sua própria página.**

---

## Sumário

1. [Sobre o Projeto](#sobre-o-projeto)
2. [Funcionalidades](#funcionalidades)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Como Executar](#como-executar)
5. [Conceitos Aplicados](#conceitos-aplicados)
6. [Equipe](#equipe)

---

## Sobre o Projeto

O **ABC Bolinhas** é um projeto colaborativo desenvolvido por **dez estudantes de Sistemas de Informação**. O site apresenta a equipe por meio de uma **escalação disposta sobre um campo de futebol**: ao selecionar um jogador, o visitante é direcionado à página pessoal do respectivo integrante, na qual constam seu perfil, suas habilidades e seus objetivos.

Cada membro desenvolveu o **próprio espaço** dentro de um único repositório, utilizando **HTML, CSS, JavaScript e versionamento com Git e GitHub**.

---

## Funcionalidades

### Seção Início

> **Objetivo:** apresentar a equipe e direcionar o visitante ao elenco.

| Elemento | Descrição |
| :--- | :--- |
| **Apresentação** | Título "Um time, várias histórias." acompanhado de texto de boas-vindas. |
| **Chamada para ação** | Botão **Conhecer o elenco**, com rolagem direta até a escalação. |
| **Navegação** | Menu fixo no topo da página: `Início` \| `Elenco` \| `Sobre o projeto`. |

### Seção Elenco (Escalação)

> **Interações suportadas:** visualizar a escalação, selecionar um jogador e acessar o respectivo perfil.

| Elemento | Descrição |
| :--- | :--- |
| **Campo** | Campo de futebol desenhado exclusivamente com CSS, contendo linha central, círculo central e áreas de gol. |
| **Escalação** | Jogadores inseridos dinamicamente por meio de **JavaScript**, evitando a repetição de código HTML. |
| **Perfil** | O clique em um jogador abre a página individual, armazenada na pasta `perfis`. |

### Perfis Individuais

> **Cobertura:** dez integrantes, cada qual com página própria.

| Elemento | Descrição |
| :--- | :--- |
| **Autonomia** | Cada integrante desenvolveu e personalizou o seu próprio espaço. |
| **Conteúdo** | Trajetória, habilidades e objetivos de cada membro da equipe. |
| **Organização** | Todas as páginas estão centralizadas na pasta `perfis`, fora da raiz do projeto. |

### Seção Sobre o Projeto

> **Objetivo:** contextualizar a proposta e registrar o processo de desenvolvimento.

| Elemento | Descrição |
| :--- | :--- |
| **Proposta** | "Mais que um trabalho em equipe": diferentes perfis reunidos em um único site. |
| **Tecnologias** | HTML, CSS, JavaScript, Git e GitHub. |

---

## Estrutura do Projeto

```bash
abc-bolinhas/
├── index.html      # Página principal (início, elenco e sobre)
├── style.css       # Estilos globais e desenho do campo
├── scripts/        # JavaScript responsável por renderizar a escalação
├── perfis/         # Página individual de cada integrante
├── logo/           # Identidade visual da equipe
└── README.md       # Documentação do projeto
```

---

## Como Executar

```bash
# 1. Clone o repositório
git clone https://github.com/cumerlattoem/abc-bolinhas.git

# 2. Acesse o diretório do projeto
cd abc-bolinhas

# 3. Abra o arquivo index.html no navegador
#    (ou utilize a extensão Live Server no VS Code)
```

> O projeto é integralmente front-end e **não requer a instalação de dependências**.

---

## Conceitos Aplicados

| Conceito | Aplicação |
| :--- | :--- |
| **HTML semântico** | Estrutura com `header`, `nav`, `main`, `section` e `footer`. |
| **CSS** | Campo de futebol, linhas e áreas desenhados exclusivamente com estilos. |
| **JavaScript** | Geração dinâmica da escalação e dos jogadores por meio do DOM. |
| **Git e GitHub** | Trabalho colaborativo entre dez pessoas, com uso de branches e histórico de commits. |
| **Organização de código** | Separação de responsabilidades nas pastas `scripts`, `perfis` e `logo`. |

---

## Equipe

Projeto desenvolvido pelos seguintes integrantes:

| Nº | Integrante | GitHub |
| :-: | :--- | :--- |
| 1 | Matheus Germano | [@germano1212](hhttps://github.com/germano1212) |
| 2 | Emanuel Cumerlatto | [@cumerlattoem](https://github.com/cumerlattoem) |
| 3 | Juan Gabriel | [@juanbuGG](https://github.com/juanbuGG) |
| 4 | Rafael Chaves | [@Rafaelchaves589](hhttps://github.com/Rafaelchaves589) |
| 5 | João Otávio Pereira | [@joaootaviopereirasi-ui](https://github.com/joaootaviopereirasi-ui) |
| 6 | Marco Antonio | [@Marco-Oliver](https://github.com/Marco-Oliver) |
| 7 | João Gabriel Canônica | [@joaoCanonica](https://github.com/joaoCanonica) |
| 8 | João Henrique | [@yuukieh](https://github.com/yuukieh) |
| 9 | Emanuel Aguiar | [@emanuel304](https://github.com/emanuel304) |
| 10 | Lucas Varela | [@lucasvarela1212](https://github.com/lucasvarela1212) |

> **Observação:** substitua `usuario` pelo nome de usuário de cada integrante, tanto no texto exibido quanto no link.

---

<div align="center">

**ABC Bolinhas** · Projeto acadêmico colaborativo · Sistemas de Informação

</div>