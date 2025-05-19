// Script para gerar 1000 arquivos .md para cada template usando faker-js
const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker');

const templates = ['template1', 'template2'];
const baseDir = path.join(__dirname, 'src', 'content');
const totalPages = 1000;

function generateMarkdownContent(template, pageNum) {
  return `---
title: "${faker.company.catchPhrase()} - Página ${pageNum}"
description: "${faker.lorem.sentence()}"
image: "https://picsum.photos/seed/${template}${pageNum}/800/400"
---

# ${faker.company.bsBuzz()} ${faker.company.bsNoun()}

${faker.lorem.paragraphs(3)}

![Imagem](https://picsum.photos/seed/${template}${pageNum}/800/400)

> ${faker.company.catchPhrase()}

---
Página número: ${pageNum}
`;
}

templates.forEach((template) => {
  const dir = path.join(baseDir, template);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  for (let i = 1; i <= totalPages; i++) {
    const filePath = path.join(dir, `${i}.md`);
    const content = generateMarkdownContent(template, i);
    fs.writeFileSync(filePath, content, 'utf8');
  }
  console.log(`Gerados 1000 arquivos para ${template}`);
});

console.log('Concluído!'); 