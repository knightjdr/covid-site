const fs = require('fs');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SitePage implements Node @dontInfer {
      context: Context
    }
    type Context {
      conditions: [String]
      description: String
      gene: String
      id: String
      images: [Images]
      name: String
      preys: Preys
      sequence: String
      uniprot: String
    }
    type Images {
      blue: Channel
      green: Channel
      merge: Channel
      red: Channel
    }
    type Channel {
      marker: String
      src: String
    }
    type Preys {
      id: String
      conditions: Conditions
    }
    type Conditions {
      count: Float
      fdr: Float
      specificity: FloatOrString
    }
    union FloatOrString = FloatBox | StringBox
    type FloatBox {
      value: Float
    }
    type StringBox {
      value: String
    }
  `;
  createTypes(typeDefs);
};

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
