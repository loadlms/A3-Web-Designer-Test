import pathlib
import re

# Pastas a serem processadas
folders = [
    pathlib.Path('src/content/template1'),
    pathlib.Path('src/content/template2'),
]

# Regex para remover indentação de tags HTML e markdown
pattern = re.compile(r'^(\s{4,})(<|\*\*)', re.MULTILINE)

for folder in folders:
    for md_file in folder.glob('*.md'):
        text = md_file.read_text(encoding='utf-8')
        # Remove indentação antes de tags HTML e markdown
        new_text = re.sub(r'^(\s{4,})(<|\*\*)', r'\2', text, flags=re.MULTILINE)
        if new_text != text:
            md_file.write_text(new_text, encoding='utf-8')
            print(f'Corrigido: {md_file}') 