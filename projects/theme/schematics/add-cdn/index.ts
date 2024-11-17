import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function addCdn(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const stylesPath = 'src/styles.css';
    const cdnLink =
      '@import url("https://kalees64.github.io/vk-cdn/vk-cdn.css");';

    // Add the CDN link to styles.css
    if (tree.exists(stylesPath)) {
      const content = tree.read(stylesPath)?.toString('utf-8') || '';
      if (!content.includes(cdnLink)) {
        tree.overwrite(stylesPath, `${cdnLink}\n${content}`);
      }
    } else {
      tree.create(stylesPath, cdnLink);
    }

    // Add npm packages installation task
    context.addTask(
      new NodePackageInstallTask({
        packageName:
          '@fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/angular-fontawesome',
      })
    );

    return tree;
  };
}
