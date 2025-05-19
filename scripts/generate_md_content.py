import pathlib
import random

TEMPLATE1_SECTIONS = [
    ('Planejamento Estratégico', 'business,planning,office', 'https://www.youtube.com/embed/TD7WSLeQtVw'),
    ('Análise de Mercado', 'market,analysis,charts', 'https://www.youtube.com/embed/ish-2YpEkgM'),
    ('Desenvolvimento Organizacional', 'organization,team,success', 'https://www.youtube.com/embed/IBgrOqOJLFs'),
]
TEMPLATE2_SECTIONS = [
    ('Internet das Coisas', 'iot,technology,devices', 'https://www.youtube.com/embed/ejubeppy9mc'),
    ('Sensores Inteligentes', 'smart,sensor,technology', 'https://www.youtube.com/embed/XT35XdL0frc'),
    ('Análise de Dados', 'data,analytics,computer', 'https://www.youtube.com/embed/l3Ea_hq9vW4'),
]

FAKE_NAMES = [
    'João Silva', 'Maria Oliveira', 'Carlos Souza', 'Ana Paula', 'Fernanda Lima',
    'Rafael Costa', 'Juliana Martins', 'Bruno Rocha', 'Patrícia Alves', 'Lucas Pereira'
]
FAKE_EMAILS = [
    'contato@empresa.com', 'suporte@negocio.com', 'info@consultoria.com', 'faleconosco@solucoes.com', 'atendimento@business.com'
]
FAKE_PHONES = [
    '(11) 99999-0000', '(21) 98888-1111', '(31) 97777-2222', '(41) 96666-3333', '(51) 95555-4444'
]
FAKE_QUOTES = [
    'Excelente serviço, superou nossas expectativas!',
    'Profissionais dedicados e resultados incríveis.',
    'Transformaram nosso negócio com soluções inovadoras.',
    'Atendimento ágil e personalizado, recomendo!',
    'A melhor experiência que já tivemos com consultoria.'
]

FAKE_PARAGRAPHS = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.',
    'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    'Nulla facilisi. Etiam facilisis, sapien eu volutpat dictum, urna erat dictum urna, eu dictum urna urna eu urna.',
    'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus.'
]

folders = [
    ('src/content/template1', 'Business Solutions', TEMPLATE1_SECTIONS),
    ('src/content/template2', 'Innovative Solutions', TEMPLATE2_SECTIONS),
]

for folder_path, template_title, sections in folders:
    folder = pathlib.Path(folder_path)
    for idx, md_file in enumerate(sorted(folder.glob('*.md'))):
        page_num = md_file.stem
        name = random.choice(FAKE_NAMES)
        email = random.choice(FAKE_EMAILS)
        phone = random.choice(FAKE_PHONES)
        quote = random.choice(FAKE_QUOTES)
        content = f"""---
title: \"{template_title} - Page {page_num}\"
---

# {template_title} para Empresas Modernas
"""
        for sec_title, img_query, video_url in sections:
            paragraph = random.choice(FAKE_PARAGRAPHS)
            img_url = f'https://source.unsplash.com/800x400/?{img_query},{random.randint(1,10000)}'
            content += f"""
## {sec_title}
{paragraph}

![{sec_title}]({img_url})
<iframe class=\"w-full h-64 object-cover rounded-lg shadow-lg my-4\" src=\"{video_url}\" frameborder=\"0\" allowfullscreen></iframe>
"""
        content += f"""
## Depoimento
> \"{quote}\" - {name}

## Contato
- Email: {email}
- Telefone: {phone}
"""
        md_file.write_text(content, encoding='utf-8')
        print(f'Gerado: {md_file}') 