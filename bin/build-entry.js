const uppercamelize = require('uppercamelcase');
const fs = require('fs');
const path = require('path');

function indexEntry() {
    const tips = `/**
 * Created by kjeco on 20/02/25
 */
`;
    const Components = fs.readdirSync(path.resolve(__dirname, '../packages'));
    const importList = Components.filter(name => ['.DS_Store', 'Thumbs.db'].indexOf(name) === -1).map(name => `import ${uppercamelize(name)} from './packages/${name}';`);
    const exportList = Components.filter(name => ['.DS_Store', 'Thumbs.db'].indexOf(name) === -1).map(name => `${uppercamelize(name)}`);
    const content = `${tips}
${importList.join('\n')}

export {
  ${exportList.join(',\n  ')}
};
`;
    fs.writeFileSync(path.join(__dirname, '../index.js'), content);
}

indexEntry();
