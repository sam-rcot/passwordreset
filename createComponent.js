import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

// __dirname and __filename are not available in ES modules, so we need to define them.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the component name: ', function(componentName) {
  const componentDir = path.join(__dirname, 'src', 'components', componentName.toLowerCase());

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });

    const templatePath = path.join(__dirname, 'src', 'components', 'template', 'Template.tsx');
    const newComponentPath = path.join(componentDir, `${componentName}.tsx`);

    const templateContent = fs.readFileSync(templatePath, 'utf-8')
      .replace(/Template/g, componentName);

    fs.writeFileSync(newComponentPath, templateContent);

    console.log(`Component ${componentName} created successfully!`);
  } else {
    console.log(`Component ${componentName} already exists.`);
  }

  rl.close();
});