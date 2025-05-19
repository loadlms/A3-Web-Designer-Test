// Script para baixar HTML, extrair <body>, salvar como campo rawHtml (string JSON) no frontmatter YAML
import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

// Configurações
const url = 'https://glucosecontrolguide.com/fb/sgs/vsl3/prn-ca1/h1l1//'; // Troque para o link desejado
const template = 'template2'; // Troque para template1 para o outro caso
const outputPath = path.join(process.cwd(), 'src', 'content', template, '1.md');

async function copiarEConverter() {
  try {
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);
    const bodyHtml = $('body').html();

    // Salva o HTML como string JSON para evitar problemas de indentação YAML
    const frontmatter = `---\ntitle: "Página Template 2"\nrawHtml: ${JSON.stringify(bodyHtml)}\n---\n`;

    fs.writeFileSync(outputPath, frontmatter, 'utf8');
    console.log('Conteúdo salvo em', outputPath);
  } catch (err) {
    console.error('Erro ao copiar/converter:', err);
  }
}

copiarEConverter(); 