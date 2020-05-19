const fs = require('fs');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const jsonDoc = JSON.parse(fs.readFileSync('./content/baits.json', 'utf-8'));

  jsonDoc.forEach((element) => {
    createPage({
      path: element.id,
      component: require.resolve('./src/templates/bait-template.js'),
      context: {
        ...element,
      },
    });
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve('@babel/plugin-proposal-optional-chaining'),
  });
};
