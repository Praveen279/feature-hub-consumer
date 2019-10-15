import * as React from 'react';


const featureAppDefinition = {
  dependencies: {
    externals: {react: '^16.7.0'}
  },

  create: () => {
    return {
      render: () => <div>Consumer component Rendered!!!</div>
    };
  }
};

export default featureAppDefinition;
