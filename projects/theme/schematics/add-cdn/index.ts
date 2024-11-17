import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


export function addCdn(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const stylesPath = 'src/styles.css';
    const cdnLink =
      '@import url("https://kalees64.github.io/vk-cdn/vk-cdn.css");';

    if (tree.exists(stylesPath)) {
      const content = tree.read(stylesPath)?.toString('utf-8') || '';
      if (!content.includes(cdnLink)) {
        tree.overwrite(stylesPath, `${cdnLink}\n${content}`);
      }
    } else {
      tree.create(stylesPath, cdnLink);
    }

    return tree;
  };
}
