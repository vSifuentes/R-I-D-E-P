# RIDEP - Site Institucional

Site institucional da **Rede Internacional de Pesquisas sobre o Desenvolvimento Profissional de Professores (RIDEP)**.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **React 19**
- **TypeScript**
- **TailwindCSS 4**
- **Inter Font** (Google Fonts)

## 📁 Estrutura do Projeto

```
ridep-site/
├── app/
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx            # Home
│   ├── acoes/              # Ações
│   ├── convenios/          # Convênios (hub)
│   │   ├── nacionais/      # Convênios nacionais
│   │   └── internacionais/ # Convênios internacionais
│   ├── pesquisadores/      # Pesquisadores
│   └── contato/            # Contato
├── components/
│   ├── Navbar.tsx          # Navegação principal
│   ├── Footer.tsx          # Rodapé
│   ├── Card.tsx            # Componente de card
│   ├── SectionTitle.tsx    # Título de seção
│   ├── Table.tsx           # Tabela
│   ├── ContactForm.tsx     # Formulário de contato
│   └── ScrollToAnchor.tsx  # Scroll para âncoras
└── public/
    └── ridep-oficial.pdf   # PDF oficial da RIDEP
```

## 🎨 Tema Visual

### Cores (baseadas na logo RIDEP)
- **Primary**: `#0D7377` (teal/verde escuro do "IDEP")
- **Secondary**: `#F5F5F5` (fundo claro)
- **Accent**: `#8338EC` (roxo vibrante do espectro do "R")
- **Text**: `#1E1E1E`
- **Espectro do "R"**: Vermelho `#E63946`, Laranja `#F77F00`, Amarelo `#F9C74F`, Verde `#06A77D`, Azul `#118AB2`, Roxo `#8338EC`

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Fallback**: sans-serif

## 🛠️ Como Executar

### Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
npm run build
npm start
```

## 📄 Páginas

### Home (`/`)
- Hero com nome e missão da RIDEP
- Blocos de destaque: A Rede, Ações, Convênios, Pesquisadores
- CTAs: "Conheça a Rede" e "Entre em Contato"

### Ações (`/acoes`)
- Descrição geral das iniciativas
- Principais ações
- Responsabilidades das partes (`#responsabilidades`)

### Convênios (`/convenios`)
- Hub com links para convênios nacionais e internacionais
- Informações gerais sobre convênios

### Pesquisadores (`/pesquisadores`)
- Lista de pesquisadores
- Filtro por instituição
- Cards com nome, instituição e país

### Contato (`/contato`)
- Formulário de contato
- Informações de contato
- E-mail institucional

## 🔍 SEO

Todas as páginas incluem metadata otimizada para SEO:
- Títulos descritivos
- Descrições detalhadas
- Palavras-chave relevantes
- Open Graph tags

## 📱 Responsividade

O site é totalmente responsivo e testado nos seguintes breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Notas

- O PDF oficial da RIDEP está disponível em `/public/ridep-oficial.pdf`
- Os dados de pesquisadores e convênios são exemplos e devem ser substituídos pelos dados reais do PDF
- O formulário de contato é simulado e precisa de integração com um serviço de e-mail (ex: Resend, SendGrid)

## 📧 Contato

Para mais informações sobre a RIDEP, entre em contato através da página de contato ou por e-mail: contato@ridep.org

## 📄 Licença

Este projeto é propriedade da RIDEP - UNIUBE.
