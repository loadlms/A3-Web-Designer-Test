import pathlib
import re
import unicodedata

# Função para normalizar strings (remover acentos e caixa)
def normalize(text):
    return unicodedata.normalize('NFKD', text).encode('ASCII', 'ignore').decode('ASCII').lower()

# Mapeamento de vídeos por seção para cada template
TEMPLATE1_VIDEOS = {
    'planejamento estrategico': 'https://www.youtube.com/embed/kNS-X13sqeQ',
    'estrategia corporativa': 'https://www.youtube.com/embed/kNS-X13sqeQ',
    'analise de mercado': 'https://www.youtube.com/embed/6jUPXkeDkTk',
    'desenvolvimento organizacional': 'https://www.youtube.com/embed/IBgrOqOJLFs',
}
TEMPLATE2_VIDEOS = {
    'solucoes inovadoras': 'https://www.youtube.com/embed/ejubeppy9mc',
    'internet das coisas': 'https://www.youtube.com/embed/ejubeppy9mc',
    'conectividade': 'https://www.youtube.com/embed/ejubeppy9mc',
    'sensores inteligentes': 'https://www.youtube.com/embed/XT35XdL0frc',
    'analise de dados': 'https://www.youtube.com/embed/l3Ea_hq9vW4',
}

folders = [
    ('src/content/template1', TEMPLATE1_VIDEOS),
    ('src/content/template2', TEMPLATE2_VIDEOS),
]

# Regex para encontrar seções e vídeos
section_pattern = re.compile(r'(## .+|\*\*.+\*\*)', re.IGNORECASE)
iframe_pattern = re.compile(r'<iframe[\s\S]*?</iframe>|<video[\s\S]*?</video>', re.IGNORECASE)

for folder_path, video_map in folders:
    folder = pathlib.Path(folder_path)
    for md_file in folder.glob('*.md'):
        text = md_file.read_text(encoding='utf-8')
        parts = section_pattern.split(text)
        new_parts = []
        i = 0
        while i < len(parts):
            part = parts[i]
            if i == 0:
                new_parts.append(part)
                i += 1
                continue
            section_title = normalize(part.strip())
            video_url = None
            for key in video_map:
                if key in section_title:
                    video_url = video_map[key]
                    break
            new_parts.append(parts[i])
            if video_url:
                # Remove todos os vídeos existentes após o título
                content = parts[i+1] if i+1 < len(parts) else ''
                content = iframe_pattern.sub('', content)
                # Adiciona o vídeo correto
                video_block = f'\n<iframe class="w-full h-64 object-cover rounded-lg shadow-lg my-4" src="{video_url}" frameborder="0" allowfullscreen></iframe>\n'
                new_parts.append(video_block)
                # Pula o conteúdo já processado
                if i+1 < len(parts):
                    parts[i+1] = content
            i += 1
        new_text = ''.join(new_parts)
        if new_text != text:
            md_file.write_text(new_text, encoding='utf-8')
            print(f'Corrigido: {md_file}') 