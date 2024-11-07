const fs = require('fs');
const path = require('path');
const config = require('../tailwind.config.js');

const classGroups = {
  'font-size': [{ text: Object.keys(config?.theme?.fontSize || {}) }],
  color: [{ text: Object.keys(config?.theme?.colors || {}) }],
  padding: [{ padding: Object.keys(config?.theme?.spacing || {}) }],
};

// export this object to a file named class-group.ts
const outputPath = path.join(__dirname, '../', 'src/constants', 'tailwind-class-groups.ts');
const outputContent = `
const classGroups = ${JSON.stringify(classGroups, null, 2)};

export {classGroups}
`;

fs.writeFileSync(outputPath, outputContent, 'utf8');
