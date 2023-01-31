import { App } from 'aws-cdk-lib';

import { AcompanhaMeStack } from './stack';

console.log('Starting deploy...');

const app = new App();
const stackName = 'ProductHunt';

const stack = new AcompanhaMeStack(
  app,
  stackName,
  {
    description: 'Iac to create ProductHunt stack',
    tags: { project: stackName },
  }
);

export default stack;
