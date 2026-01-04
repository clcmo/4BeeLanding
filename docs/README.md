# 🐝 4Bee - Landing Page

![4Bee Logo](https://img.shields.io/badge/4Bee-Cosm%C3%A9ticos%20Veganos-0066CC?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Accessibility](https://img.shields.io/badge/Accessibility-A11Y-brightgreen?style=for-the-badge)

[![GitHub license](https://img.shields.io/github/license/clcmo/4BeeLanding?style=for-the-badge)](https://github.com/clcmo/4BeeLanding)
[![GitHub stars](https://img.shields.io/github/stars/clcmo/4BeeLanding?style=for-the-badge)](https://github.com/clcmo/4BeeLanding/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/clcmo/4BeeLanding?style=for-the-badge)](https://github.com/clcmo/4BeeLanding/network)
[![GitHub issues](https://img.shields.io/github/issues/clcmo/4BeeLanding?style=for-the-badge)](https://github.com/clcmo/4BeeLanding/issues)
[![GitHub donate](https://img.shields.io/github/sponsors/clcmo?color=pink&style=for-the-badge)](https://github.com/sponsors/clcmo)

Landing page moderna e responsiva para a **4Bee**, marca de cosméticos 100% vegetarianos desenvolvidos especialmente para o mundo fitness.

---

## 🌟 Sobre o Projeto

A 4Bee é uma empresa inovadora que une beleza natural e performance fitness. Nossa landing page foi desenvolvida para apresentar os produtos da linha com design moderno, acessível e otimizado para conversão.

### 🎯 Produtos em Destaque

- **4Serum** - Sérum facial ultra-hidratante com renovação celular
- **4Fit** - Loção corporal revitalizante para recuperação muscular
- **4Blush** - Blush mineral com pigmentos naturais à prova de suor

---

## ✨ Características

### 🎨 Design

- Interface limpa e moderna com paleta azul e branco
- Animações suaves e interativas
- Efeitos de hover envolventes
- Grid responsivo para todos os dispositivos
- Tipografia personalizada com **Lemon Tuesday** e **Noto Sans**

### ♿ Acessibilidade Avançada

- ✅ **Modo Noturno** - Tema escuro para conforto visual
- ✅ **Alto Contraste** - Cores intensificadas para melhor legibilidade
- ✅ **Suporte a Daltonismo:**
  - Deuteranopia (vermelho-verde)
  - Protanopia (vermelho-verde)
  - Tritanopia (azul-amarelo)
- ✅ **Combinação de Modos** - Múltiplas configurações ativas simultaneamente
- ✅ **Ícones Material Design** para melhor compreensão visual

### 🔍 SEO & Social Media

- Meta tags completas para SEO
- Open Graph para Facebook, LinkedIn e WhatsApp
- Twitter Cards otimizadas
- Schema.org JSON-LD para rich snippets
- URLs canônicas
- Otimização para mobile

### 📱 Responsividade

- Layout adaptável para desktop, tablet e mobile
- Breakpoints otimizados
- Touch-friendly em dispositivos móveis
- Performance otimizada

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **HTML5** | Estrutura semântica e acessível |
| **CSS3** | Estilização avançada com CSS Variables |
| **JavaScript** | Interatividade e controles de acessibilidade |
| **Google Fonts** | Noto Sans (corpo) |
| **DaFont** | Lemon Tuesday (logo e títulos) |
| **Material Symbols** | Ícones do Google Material Design |

---

## 📂 Estrutura do Projeto

```
4bee-landing-page/
│
├── index.html              # Página principal
├── fonts/                  # Fontes customizadas
│   └── lemon-tuesday.ttf   # Fonte Lemon Tuesday
├── images/                 # Imagens e assets
│   ├── og-image.jpg        # Open Graph (1200x630px)
│   ├── twitter-image.jpg   # Twitter Card (1200x675px)
│   └── logo.png            # Logo da marca (512x512px)
└── README.md               # Este arquivo
```

---

## 🛠️ Instalação e Uso

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code, Sublime Text, etc.)

### Passo a Passo

1. **Clone ou baixe o repositório:**

   ```bash
   git clone https://github.com/clcmo/4BeeLanding.git
   ```

2. **Adicione as imagens necessárias:**
   - Crie a pasta `/images/`
   - Adicione os arquivos de imagem para SEO:
     - `og-image.jpg` (1200x630px) - Para Facebook/WhatsApp
     - `twitter-image.jpg` (1200x675px) - Para Twitter
     - `logo.png` (512x512px) - Logo da marca

3. **Abra o arquivo `index.html` no navegador:**
   - Duplo clique no arquivo, ou
   - Use um servidor local (ex: Live Server do VS Code)

---

## 🎨 Personalização

### Cores

As cores podem ser facilmente modificadas através das CSS Variables em `:root`:

```css
:root {
    --primary-blue: #0066CC;
    --primary-blue-light: #3399FF;
    --primary-blue-dark: #004C99;
    --accent-blue: #00A3E0;
    /* ... */
}
```

### Fontes

Para alterar as fontes, modifique as variáveis:

```css
:root {
    --font-display: 'Lemon Tuesday', 'Lemon', cursive;
    --font-body: 'Noto Sans', sans-serif;
}
```

### Espaçamento

Sistema de espaçamento modular:

```css
:root {
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    /* ... */
}
```

---

## ♿ Recursos de Acessibilidade

### Painel de Controle

Localizado no canto superior direito, oferece:

| Modo | Descrição |
|------|-----------|
| 🌙 **Modo Noturno** | Tema escuro para ambientes com pouca luz |
| ◐ **Alto Contraste** | Cores mais fortes para melhor visibilidade |
| 👁 **Deuteranopia** | Otimizado para daltonismo vermelho-verde |
| 👁 **Protanopia** | Outra variação de daltonismo vermelho-verde |
| 👁 **Tritanopia** | Otimizado para daltonismo azul-amarelo |
| ↻ **Padrão** | Restaura configurações originais |

### Combinações Possíveis

Os modos podem ser combinados, por exemplo:

- Modo Noturno + Alto Contraste
- Modo Noturno + Deuteranopia
- Alto Contraste + Tritanopia

---

## 📊 SEO e Social Media

### Meta Tags Implementadas

✅ **SEO Básico**

- Title, Description, Keywords
- Robots, Language, Author
- Canonical URL

✅ **Open Graph (Facebook/LinkedIn/WhatsApp)**

- og:title, og:description, og:image
- og:type, og:url, og:locale

✅ **Twitter Cards**

- twitter:card, twitter:title, twitter:image
- twitter:description, twitter:creator

✅ **Schema.org JSON-LD**

- Organization Schema
- Product Schema (4Serum)
- WebPage Schema

---

## 📱 Responsividade

Este layout é totalmente responsivo, adaptando-se a diferentes tamanhos de tela.

### Breakpoints

| Dispositivo | Largura | Ajustes |
|-------------|---------|---------|
| Desktop | > 1024px | Layout completo em grid |
| Tablet | 768px - 1024px | Grid adaptado, navegação compacta |
| Mobile | < 768px | Layout em coluna única |

---

## 🚀 Performance

### Otimizações Implementadas

- ✅ CSS Variables para re-renderização eficiente
- ✅ Transições suaves com `transform` e `opacity`
- ✅ `font-display: swap` para carregamento de fontes
- ✅ Preconnect para Google Fonts
- ✅ Imagens otimizadas (quando implementadas)
- ✅ Código CSS modularizado e organizado

---

## 📝 Valores da Marca

A 4Bee se baseia em 4 pilares fundamentais:

1. 🌱 **100% Vegano** - Livres de ingredientes de origem animal
2. 🐰 **Cruelty-Free** - Nunca testamos em animais
3. 💪 **Performance** - Desenvolvidos para rotinas fitness intensas
4. ♻️ **Sustentável** - Embalagens eco-friendly e processos conscientes

---

## 📄 Licença

Este projeto é fornecido como exemplo educacional.

⚠️ **Atenção:** Verifique as licenças das fontes utilizadas:

- **Lemon Tuesday** (DaFont) - Verifique licença para uso comercial
- **Noto Sans** (Google Fonts) - Open Font License (uso livre)
- **Material Symbols** (Google) - Apache License 2.0

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📧 Contato

**4Bee Cosméticos**

- 📧 Email: <contato@4bee.com.br>
- 🌐 Website: <https://4bee.com.br>
- 📱 Instagram: [@4beeoficial](https://instagram.com/4beeoficial)
- 📘 Facebook: [4BeeOficial](https://facebook.com/4BeeOficial)
- 🐦 Twitter: [@4BeeOficial](https://twitter.com/4BeeOficial)

---

## 🙏 Agradecimentos

- Google Fonts pela Noto Sans e Material Symbols
- DaFont pela disponibilização da fonte Lemon Tuesday
- Comunidade open-source por ferramentas e inspiração

---

<div align="center">

**Desenvolvido com 💙 para o mundo fitness**

![Made with Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red?style=for-the-badge)
![Vegan](https://img.shields.io/badge/100%25-Vegan-green?style=for-the-badge)
![Cruelty Free](https://img.shields.io/badge/Cruelty-Free-brightgreen?style=for-the-badge)

**© 2026 4Bee Cosméticos. Todos os direitos reservados.**

</div>