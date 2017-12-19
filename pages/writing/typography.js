import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/writing/typography.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/writing/Types.js': {
          js: require('docs/src/pages/writing/Types').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/writing/Types'), 'utf8')
`,
        },
        'pages/writing/TypographyTheme.js': {
          js: require('docs/src/pages/writing/TypographyTheme').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/writing/TypographyTheme'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
