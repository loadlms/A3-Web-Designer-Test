import { faker } from '@faker-js/faker';
import fs from 'fs/promises';
import path from 'path';

// Arrays de conteúdo pré-definido para maior variedade
const businessThemes = [
  {
    name: 'Consultoria Empresarial',
    keywords: ['business', 'office', 'meeting'],
    videoKeywords: ['business meeting', 'corporate', 'consulting'],
    services: ['Análise de Processos', 'Otimização Operacional', 'Gestão de Mudanças'],
    metrics: { min: 50, max: 200 }
  },
  {
    name: 'Desenvolvimento de Negócios',
    keywords: ['startup', 'growth', 'business'],
    videoKeywords: ['startup', 'business growth', 'entrepreneur'],
    services: ['Planejamento Estratégico', 'Expansão de Mercado', 'Parcerias Comerciais'],
    metrics: { min: 30, max: 150 }
  },
  {
    name: 'Marketing Digital',
    keywords: ['digital', 'marketing', 'social'],
    videoKeywords: ['digital marketing', 'social media', 'online marketing'],
    services: ['SEO', 'Mídias Sociais', 'Marketing de Conteúdo'],
    metrics: { min: 100, max: 500 }
  },
  {
    name: 'Gestão de Projetos',
    keywords: ['project', 'management', 'team'],
    videoKeywords: ['project management', 'team work', 'planning'],
    services: ['Metodologias Ágeis', 'Gestão de Riscos', 'Controle de Qualidade'],
    metrics: { min: 20, max: 100 }
  },
  {
    name: 'Análise Financeira',
    keywords: ['finance', 'money', 'business'],
    videoKeywords: ['finance', 'stock market', 'business analysis'],
    services: ['Análise de Investimentos', 'Planejamento Financeiro', 'Gestão de Riscos'],
    metrics: { min: 40, max: 200 }
  },
  {
    name: 'Estratégia Corporativa',
    keywords: ['strategy', 'business', 'planning'],
    videoKeywords: ['corporate strategy', 'business planning', 'executive'],
    services: ['Planejamento Estratégico', 'Análise de Mercado', 'Desenvolvimento Organizacional'],
    metrics: { min: 25, max: 120 }
  },
  {
    name: 'Transformação Digital',
    keywords: ['digital', 'technology', 'business'],
    videoKeywords: ['digital transformation', 'technology', 'innovation'],
    services: ['Automação de Processos', 'Integração de Sistemas', 'Inovação Digital'],
    metrics: { min: 60, max: 300 }
  },
  {
    name: 'Inovação Empresarial',
    keywords: ['innovation', 'business', 'technology'],
    videoKeywords: ['business innovation', 'technology', 'future'],
    services: ['Design Thinking', 'Gestão da Inovação', 'Desenvolvimento de Produtos'],
    metrics: { min: 35, max: 180 }
  }
];

const techThemes = [
  {
    name: 'Inteligência Artificial',
    keywords: ['ai', 'machine-learning', 'technology'],
    videoKeywords: ['artificial intelligence', 'machine learning', 'robotics'],
    features: ['Machine Learning', 'Processamento de Linguagem Natural', 'Visão Computacional'],
    metrics: { min: 1000, max: 5000 }
  },
  {
    name: 'Cloud Computing',
    keywords: ['cloud', 'server', 'technology'],
    videoKeywords: ['cloud computing', 'server', 'data center'],
    features: ['Infraestrutura como Serviço', 'Plataforma como Serviço', 'Software como Serviço'],
    metrics: { min: 2000, max: 8000 }
  },
  {
    name: 'Cibersegurança',
    keywords: ['security', 'cyber', 'technology'],
    videoKeywords: ['cybersecurity', 'digital security', 'hacking'],
    features: ['Proteção de Dados', 'Segurança de Redes', 'Análise de Vulnerabilidades'],
    metrics: { min: 800, max: 3000 }
  },
  {
    name: 'Internet das Coisas',
    keywords: ['iot', 'smart', 'technology'],
    videoKeywords: ['internet of things', 'smart devices', 'connected'],
    features: ['Sensores Inteligentes', 'Conectividade', 'Análise de Dados'],
    metrics: { min: 1500, max: 6000 }
  },
  {
    name: 'Blockchain',
    keywords: ['blockchain', 'crypto', 'technology'],
    videoKeywords: ['blockchain', 'cryptocurrency', 'bitcoin'],
    features: ['Contratos Inteligentes', 'Criptomoedas', 'Gestão de Ativos Digitais'],
    metrics: { min: 500, max: 2000 }
  },
  {
    name: 'Realidade Virtual',
    keywords: ['vr', 'ar', 'technology'],
    videoKeywords: ['virtual reality', 'augmented reality', 'mixed reality'],
    features: ['Simulações Imersivas', 'Treinamento Virtual', 'Visualização 3D'],
    metrics: { min: 300, max: 1500 }
  },
  {
    name: 'Big Data',
    keywords: ['data', 'analytics', 'technology'],
    videoKeywords: ['big data', 'data analytics', 'data visualization'],
    features: ['Análise de Dados', 'Business Intelligence', 'Machine Learning'],
    metrics: { min: 2000, max: 10000 }
  },
  {
    name: 'Automação',
    keywords: ['automation', 'robot', 'technology'],
    videoKeywords: ['automation', 'robotics', 'industrial'],
    features: ['RPA', 'Automação de Processos', 'Integração de Sistemas'],
    metrics: { min: 1200, max: 5000 }
  }
];

// URLs de vídeos do Pexels para cada categoria
const pexelsVideos = {
  business: {
    meetings: [
      'https://player.vimeo.com/video/371433846',
      'https://player.vimeo.com/video/434045526',
      'https://player.vimeo.com/video/371433846'
    ],
    office: [
      'https://player.vimeo.com/video/434045526',
      'https://player.vimeo.com/video/371433846',
      'https://player.vimeo.com/video/434045526'
    ],
    startup: [
      'https://player.vimeo.com/video/371433846',
      'https://player.vimeo.com/video/434045526',
      'https://player.vimeo.com/video/371433846'
    ],
    marketing: [
      'https://player.vimeo.com/video/434045526',
      'https://player.vimeo.com/video/371433846',
      'https://player.vimeo.com/video/434045526'
    ],
    finance: [
      'https://player.vimeo.com/video/371433846',
      'https://player.vimeo.com/video/434045526',
      'https://player.vimeo.com/video/371433846'
    ]
  },
  technology: {
    ai: [
      'https://player.vimeo.com/video/434045526',
      'https://player.vimeo.com/video/371433846',
      'https://player.vimeo.com/video/434045526'
    ],
    cloud: [
      'https://player.vimeo.com/video/371433846',
      'https://player.vimeo.com/video/434045526',
      'https://player.vimeo.com/video/371433846'
    ],
    security: [
      'https://player.vimeo.com/video/434045526',
      'https://player.vimeo.com/video/371433846',
      'https://player.vimeo.com/video/434045526'
    ],
    iot: [
      'https://player.vimeo.com/video/371433846',
      'https://player.vimeo.com/video/434045526',
      'https://player.vimeo.com/video/371433846'
    ],
    blockchain: [
      'https://player.vimeo.com/video/434045526',
      'https://player.vimeo.com/video/371433846',
      'https://player.vimeo.com/video/434045526'
    ],
    vr: [
      'https://player.vimeo.com/video/371433846',
      'https://player.vimeo.com/video/434045526',
      'https://player.vimeo.com/video/371433846'
    ],
    data: [
      'https://player.vimeo.com/video/434045526',
      'https://player.vimeo.com/video/371433846',
      'https://player.vimeo.com/video/434045526'
    ],
    automation: [
      'https://player.vimeo.com/video/371433846',
      'https://player.vimeo.com/video/434045526',
      'https://player.vimeo.com/video/371433846'
    ]
  }
};

const getVideoForTheme = (theme, type) => {
  const category = type === 'business' ? 'business' : 'technology';
  const subcategory = theme.keywords[0].toLowerCase();
  const videos = pexelsVideos[category][subcategory] || pexelsVideos[category][Object.keys(pexelsVideos[category])[0]];
  return faker.helpers.arrayElement(videos);
};

const generateTemplate1Content = (index) => {
  const theme = faker.helpers.arrayElement(businessThemes);
  
  // Gera imagens e vídeos com temas específicos
  const heroVideo = getVideoForTheme(theme, 'business');
  const heroImage = `https://source.unsplash.com/1200x600/?${theme.keywords[0]}`;
  
  const serviceContent = theme.services.map((service, i) => {
    const serviceVideo = getVideoForTheme(theme, 'business');
    const serviceImage = `https://source.unsplash.com/800x600/?${theme.keywords[1]}`;
    
    return `
    **${service}**
    <video controls class="w-full h-64 object-cover rounded-lg shadow-lg my-4">
      <source src="${serviceVideo}" type="video/mp4">
      ![Service](${serviceImage})
    </video>
    ${faker.lorem.paragraph()}
    `;
  }).join('\n\n');

  const stats = {
    clients: faker.number.int({ min: theme.metrics.min, max: theme.metrics.max }),
    projects: faker.number.int({ min: Math.floor(theme.metrics.min/2), max: Math.floor(theme.metrics.max/2) }),
    years: faker.number.int({ min: 5, max: 20 })
  };

  return `
# ${theme.name} - Soluções Personalizadas

<video controls class="w-full h-96 object-cover rounded-lg shadow-lg mb-8">
  <source src="${heroVideo}" type="video/mp4">
  ![Hero](${heroImage})
</video>

## Por que escolher nossos serviços de ${theme.name.toLowerCase()}?

${faker.lorem.paragraphs(2)}

## Nossos Diferenciais

- **${stats.years}+ anos de experiência** em ${theme.name.toLowerCase()}
- **${stats.clients}+ clientes satisfeitos**
- **${stats.projects}+ projetos entregues com sucesso**

## Serviços Especializados

${serviceContent}

## Depoimentos

> "${faker.lorem.paragraph()}"
> 
> ![Testimonial](https://i.pravatar.cc/300?u=${faker.string.uuid()})
> - ${faker.person.fullName()}, ${faker.company.name()}

## Comece Agora

${faker.lorem.paragraphs(2)}

Entre em contato conosco:
- Email: ${faker.internet.email()}
- Telefone: ${faker.phone.number()}
- WhatsApp: ${faker.phone.number()}

<video controls class="w-full h-64 object-cover rounded-lg shadow-lg mt-8">
  <source src="${getVideoForTheme(theme, 'business')}" type="video/mp4">
  ![Business Growth](${`https://source.unsplash.com/1000x500/?${theme.keywords[2]}`})
</video>
`;
};

const generateTemplate2Content = (index) => {
  const theme = faker.helpers.arrayElement(techThemes);
  
  // Gera imagens e vídeos com temas específicos
  const heroVideo = getVideoForTheme(theme, 'technology');
  const heroImage = `https://source.unsplash.com/1200x600/?${theme.keywords[0]}`;
  
  const featureContent = theme.features.map((feature, i) => {
    const featureVideo = getVideoForTheme(theme, 'technology');
    const featureImage = `https://source.unsplash.com/800x600/?${theme.keywords[1]}`;
    
    return `
    **${feature}** - ${faker.lorem.sentence()}
    <video controls class="w-full h-64 object-cover rounded-lg shadow-lg my-4">
      <source src="${featureVideo}" type="video/mp4">
      ![Feature](${featureImage})
    </video>
    `;
  }).join('\n\n');

  const stats = {
    users: faker.number.int({ min: theme.metrics.min, max: theme.metrics.max }),
    uptime: faker.number.int({ min: 99, max: 100 }),
    performance: faker.number.int({ min: 80, max: 100 })
  };

  return `
# Soluções Inovadoras em ${theme.name}

<video controls class="w-full h-96 object-cover rounded-lg shadow-lg mb-8">
  <source src="${heroVideo}" type="video/mp4">
  ![Hero](${heroImage})
</video>

## Nossa Abordagem em ${theme.name}

${faker.lorem.paragraphs(2)}

## Benefícios Principais

- **${stats.uptime}% de disponibilidade** garantida
- **${stats.performance}% de melhoria** em performance
- **${stats.users}+ usuários ativos**

## Recursos Avançados

${featureContent}

## Histórias de Sucesso

${faker.lorem.paragraphs(2)}

<video controls class="w-full h-80 object-cover rounded-lg shadow-lg my-8">
  <source src="${getVideoForTheme(theme, 'technology')}" type="video/mp4">
  ![Team](${`https://source.unsplash.com/1000x600/?${theme.keywords[2]}`})
</video>

## Pronto para Inovar?

${faker.lorem.paragraph()}

Junte-se a ${stats.users}+ usuários que já transformaram seus negócios com nossas soluções em ${theme.name.toLowerCase()}.

Entre em contato:
- Email: ${faker.internet.email()}
- Telefone: ${faker.phone.number()}
- LinkedIn: linkedin.com/in/${faker.internet.userName()}

<video controls class="w-full h-96 object-cover rounded-lg shadow-lg mt-8">
  <source src="${getVideoForTheme(theme, 'technology')}" type="video/mp4">
  ![Technology](${`https://source.unsplash.com/1200x600/?${theme.keywords[0]}`})
</video>
`;
};

const generatePages = async () => {
  await fs.mkdir('src/content/template1', { recursive: true });
  await fs.mkdir('src/content/template2', { recursive: true });

  for (let i = 1; i <= 1000; i++) {
    const content = {
      title: `Business Solutions - Page ${i}`,
      body: generateTemplate1Content(i)
    };

    await fs.writeFile(
      path.join('src/content/template1', `${i}.md`),
      `---
title: "${content.title}"
---

${content.body}
`
    );
  }

  for (let i = 1; i <= 1000; i++) {
    const content = {
      title: `Innovative Solutions - Page ${i}`,
      body: generateTemplate2Content(i)
    };

    await fs.writeFile(
      path.join('src/content/template2', `${i}.md`),
      `---
title: "${content.title}"
---

${content.body}
`
    );
  }
};

generatePages().catch(console.error); 