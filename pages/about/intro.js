import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/about/intro.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
      	'pages/about/Books.js': {
          js: require('docs/src/pages/about/Books').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/about/Books'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
