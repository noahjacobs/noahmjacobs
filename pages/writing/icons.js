import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/writing/icons.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/writing/Icons.js': {
          js: require('docs/src/pages/writing/Icons').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/writing/Icons'), 'utf8')
`,
        },
        'pages/writing/SvgIcons.js': {
          js: require('docs/src/pages/writing/SvgIcons').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/writing/SvgIcons'), 'utf8')
`,
        },
        'pages/writing/SvgMaterialIcons.js': {
          js: require('docs/src/pages/writing/SvgMaterialIcons').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/writing/SvgMaterialIcons'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
