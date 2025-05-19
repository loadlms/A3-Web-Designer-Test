import pathlib
import re

folders = [
    pathlib.Path('src/content/template1'),
    pathlib.Path('src/content/template2'),
]

# Regex para encontrar blocos de vídeo (iframe ou video)
video_pattern = re.compile(r'(\n+)(<iframe[\s\S]*?</iframe>|<video[\s\S]*?</video>)', re.IGNORECASE)

for folder in folders:
    for md_file in folder.glob('*.md'):
        text = md_file.read_text(encoding='utf-8')
        # Dividir por seções (## ou **Nome da seção**)
        sections = re.split(r'(## .+|\*\*.+\*\*)', text)
        new_sections = []
        for section in sections:
            found = [False]
            def keep_first(match):
                if not found[0]:
                    found[0] = True
                    return match.group(0)
                return ''
            section = video_pattern.sub(keep_first, section)
            new_sections.append(section)
        new_text = ''.join(new_sections)
        if new_text != text:
            md_file.write_text(new_text, encoding='utf-8')
            print(f'Corrigido: {md_file}') 