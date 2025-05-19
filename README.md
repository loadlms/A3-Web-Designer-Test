# Teste de Web Designer A3

Este projeto utiliza Astro e TinaCMS para criar e gerenciar páginas dinâmicas baseadas em modelos.

## Configuração

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
Crie um arquivo `.env` no diretório raiz com:
```
NEXT_PUBLIC_TINA_CLIENT_ID=seu_client_id
TINA_TOKEN=seu_token
```

3. Gere as páginas iniciais:
```bash
node scripts/generate-pages.js
```

4. Sincronize o Astro (para Content Collections e tipagem):
```bash
npx astro sync
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

6. Acesse a interface de administração do TinaCMS em `http://localhost:3000/admin`

## Estrutura do Projeto

- `src/content/template1/` - Conteúdo para as páginas do modelo 1
- `src/content/template2/` - Conteúdo para as páginas do modelo 2
- `src/layouts/` - Componentes de layout para cada modelo
- `src/pages/` - Rotas dinâmicas para os modelos
- `tina/` - Configuração do TinaCMS
- `scripts/` - Scripts utilitários para geração de páginas

## Funcionalidades

- Dois modelos distintos com layouts diferentes
- 1000 variações de cada modelo
- Roteamento dinâmico com slugs
- Gerenciamento de conteúdo através do TinaCMS
- Integração com Faker.js para geração de conteúdo único
