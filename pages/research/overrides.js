import React from 'react';
import withRoot from 'docs/src/modules/components/withRoot';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import markdown from 'docs/src/pages/research/overrides.md';

function Page() {
  return (
    <MarkdownDocs
      markdown={markdown}
      demos={{
        'pages/research/OverridesClassNames.js': {
          js: require('docs/src/pages/research/OverridesClassNames').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/OverridesClassNames'), 'utf8')
`,
        },
        'pages/research/OverridesClasses.js': {
          js: require('docs/src/pages/research/OverridesClasses').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/OverridesClasses'), 'utf8')
`,
        },
        'pages/research/OverridesInlineStyle.js': {
          js: require('docs/src/pages/research/OverridesInlineStyle').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/OverridesInlineStyle'), 'utf8')
`,
        },
        'pages/research/OverridesComponent.js': {
          js: require('docs/src/pages/research/OverridesComponent').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/research/OverridesComponent'), 'utf8')
`,
        },
      }}
    />
  );
}

export default withRoot(Page);
