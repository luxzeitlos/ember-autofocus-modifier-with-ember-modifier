'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    autoImport: {
      earlyBootSet: (def) => {
        console.log(def);
        return [...def, '@ember/modifier', 'ember-modifier']
      },
    },
  });

  return app.toTree();
};
