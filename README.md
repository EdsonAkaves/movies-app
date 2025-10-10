# Movies App 🎬

Aplicação web React para exploração e descoberta de filmes utilizando a API do TMDb (The Movie Database).

## 📋 Funcionalidades

- ✅ Busca inteligente de filmes por título
- ✅ Exploração de filmes por gênero
- ✅ Visualização de detalhes completos dos filmes
- ✅ Interface responsiva e moderna
- ✅ Integração completa com TMDb API


## 🚀 Tecnologias Utilizadas

- React 18.2.0
- React Router DOM 6.16.0
- Styled Components 6.0.8
- React Icons 4.11.0
- TMDb API
- Variáveis de ambiente (.env)

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/EdsonAkaves/movies-app.git
cd movies-app
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
REACT_APP_API_KEY=sua_chave_tmdb_aqui
REACT_APP_API=https://api.themoviedb.org/3/movie/
REACT_APP_SEARCH=https://api.themoviedb.org/3/search/movie
REACT_APP_IMG=https://image.tmdb.org/t/p/w500/
REACT_APP_GENRE=https://api.themoviedb.org/3/genre/movie/list?
REACT_APP_LIST=https://api.themoviedb.org/3/account/
```

**Como obter sua chave da API TMDb:**

1. Acesse [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Crie uma conta gratuita
3. Vá em Configurações > API
4. Solicite uma chave de API (gratuita)
5. Copie sua API Key e cole no arquivo `.env`

### 4. Configure o .gitignore

Certifique-se de que seu arquivo `.gitignore` contém:

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

## 🔧 Uso

Execute o projeto em modo de desenvolvimento:

```bash
npm start
```

A aplicação será aberta automaticamente em [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
npm run build
```

Isso criará uma versão otimizada do app na pasta `build/`.

## 📂 Estrutura do Projeto

```
movies-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/        # Componentes React
│   ├── pages/            # Páginas da aplicação
│   ├── services/         # Serviços de API
│   ├── styles/           # Estilos globais
│   ├── App.js            # Componente principal
│   └── index.js          # Ponto de entrada
├── .env                  # Variáveis de ambiente (não versionado)
├── .gitignore
├── package.json
└── README.md
```

## 🎯 Funcionalidades Detalhadas

### Busca de Filmes
- Pesquisa em tempo real por título
- Resultados paginados
- Tratamento de erros de busca

### Exploração por Gênero
- Categorias: Ação, Comédia, Drama, Terror, Ficção Científica, e mais
- Filtragem dinâmica de filmes
- Navegação intuitiva entre gêneros

### Detalhes do Filme
- Poster em alta qualidade
- Sinopse completa
- Avaliação e popularidade
- Data de lançamento
- Gêneros associados

## 🔐 Segurança

- **Nunca** commite o arquivo `.env` no repositório
- Use variáveis de ambiente para a API Key
- Mantenha suas credenciais seguras
- A API Key do TMDb é gratuita mas pessoal

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm test` | Executa os testes |
| `npm run eject` | Ejeta as configurações do Create React App |

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona perfeitamente em:
- 📱 Dispositivos móveis
- 📱 Tablets
- 💻 Desktops

## 🐛 Problemas Conhecidos

- [ ] Implementar loading states mais elaborados
- [ ] Adicionar paginação na busca
- [ ] Melhorar tratamento de erros de rede

## 🔄 Melhorias Futuras

- [ ] Sistema de favoritos (localStorage)
- [ ] Filtros avançados (ano, avaliação)
- [ ] Modo escuro/claro
- [ ] Trailers dos filmes
- [ ] Sistema de autenticação TMDb
- [ ] Lista de favoritos sincronizada

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por **Edson Alves** como projeto de portfólio.

## 📞 Contato

- LinkedIn: [Edson Alves](https://www.linkedin.com/in/edsonakaves)
- GitHub: [@EdsonAkaves](https://github.com/EdsonAkaves)
- Email: edson.akaves@gmail.com

## 🙏 Agradecimentos

- [TMDb](https://www.themoviedb.org/) pela API gratuita e completa
- [React](https://react.dev/) pela biblioteca incrível
- [Styled Components](https://styled-components.com/) pelo CSS-in-JS

---

**Nota**: Este é um projeto de estudo e portfólio. Sinta-se livre para usá-lo como referência ou base para seus próprios projetos.

⭐ Se este projeto te ajudou de alguma forma, considere dar uma estrela no repositório!
