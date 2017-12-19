import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/research/css-in-js.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/research/CssInJs.js': {
          js: require('docs/src/pages/research/CssInJs').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/CssInJs'), 'utf8')
`,
        },
        'pages/research/JssRegistry.js': {
          js: require('docs/src/pages/research/JssRegistry').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/JssRegistry'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
