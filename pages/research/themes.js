import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/research/themes.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/research/Palette.js': {
          js: require('docs/src/pages/research/Palette').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/Palette'), 'utf8')
`,
        },
        'pages/research/TypographyTheme.js': {
          js: require('docs/src/pages/research/TypographyTheme').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/TypographyTheme'), 'utf8')
`,
        },
        'pages/research/FontSizeTheme.js': {
          js: require('docs/src/pages/research/FontSizeTheme').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/FontSizeTheme'), 'utf8')
`,
        },
        'pages/research/DarkTheme.js': {
          js: require('docs/src/pages/research/DarkTheme').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/DarkTheme'), 'utf8')
`,
        },
        'pages/research/ThemeDefault.js': {
          js: require('docs/src/pages/research/ThemeDefault').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/ThemeDefault'), 'utf8')
`,
        },
        'pages/research/CustomStyles.js': {
          js: require('docs/src/pages/research/CustomStyles').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/CustomStyles'), 'utf8')
`,
        },
        'pages/research/OverridesTheme.js': {
          js: require('docs/src/pages/research/OverridesTheme').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/OverridesTheme'), 'utf8')
`,
        },
        'pages/research/WithTheme.js': {
          js: require('docs/src/pages/research/WithTheme').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/WithTheme'), 'utf8')
`,
        },
        'pages/research/Nested.js': {
          js: require('docs/src/pages/research/Nested').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/Nested'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
