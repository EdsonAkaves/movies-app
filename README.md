```markdown
# Movies

Bem-vindo ao 'Movies', uma aplicação web que permite aos usuários buscar e visualizar informações sobre filmes. A aplicação consome a API do TMDb (The Movie Database) para obter dados sobre filmes.

## O que é o Movies App?

O 'Movies' é uma aplicação web que permite a você explorar uma vasta coleção de filmes. Se você é um amante do cinema, um cinéfilo ávido ou alguém que busca inspiração para a próxima noite de cinema, nosso aplicativo é o seu companheiro perfeito.

## Recursos Principais

* **Exploração por Gênero:** Explore uma variedade de gêneros de filmes, desde ação empolgante até dramas emocionantes e comédias hilárias.
* **Pesquisa Inteligente:** Encontre facilmente os filmes que você ama com uma pesquisa inteligente e eficaz.
* **Detalhes do Filme:** Obtenha informações detalhadas sobre cada filme.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado em seu ambiente de desenvolvimento:

* **Node.js:** [Download Node.js](https://nodejs.org/)

## Configuração

1. Clone o repositório para o seu ambiente de desenvolvimento usando o comando:
```
git clone https://github.com/EdsonAkaves/movies-app.git
```

2. Navegue até a pasta do projeto com `cd movies-app`.

3. Crie um arquivo '.env' na raiz do projeto com as seguintes variáveis de ambiente:

```
REACT_APP_API_KEY=Coloque sua chave do TMDB aqui para conseguir executar o Movies
REACT_APP_API=https://api.themoviedb.org/3/movie/
REACT_APP_SEARCH=https://api.themoviedb.org/3/search/movie
REACT_APP_IMG=https://image.tmdb.org/t/p/w500/
REACT_APP_GENRE=https://api.themoviedb.org/3/genre/movie/list?
REACT_APP_LIST=https://api.themoviedb.org/3/account/
```

4. Instale as dependências do projeto utilizando npm install:

```
npm install
```

o	React (^18.2.0)
o	React DOM (^18.2.0)
o	React Icons (^4.11.0)
o	React Router DOM (^6.16.0)
o	Styled Components (^6.0.8)

## Executando o projeto

Após a configuração, você pode executar o projeto com o seguinte comando:

```
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá a aplicação em seu navegador.

## Uso

* Use a barra de pesquisa para encontrar filmes por título.
* Navegue pelas categorias de gênero para encontrar filmes por gênero.
* Clique em um filme para visualizar detalhes adicionais.

## Desfrute da sua jornada cinematográfica com o 'Movies'!
```
