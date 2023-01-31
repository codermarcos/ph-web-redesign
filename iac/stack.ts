import { Stack, StackProps } from 'aws-cdk-lib';
import { Builder } from '@sls-next/lambda-at-edge';
import { Construct } from 'constructs';

import createLambda from './lambda';

export class AcompanhaMeStack extends Stack {

  constructor(scope: Construct, id: string, props?: StackProps) {

    super(
      scope,
      id,
      props
    );


    const serverlessBuildOutDir = './build';

    console.log('creating builder...');

    const builder = new Builder(
      '.',
      serverlessBuildOutDir,
      { args: ['build'] }
    );

    console.log('builder created...');

    console.log('starting build...');

    builder
      .build(true)
      .then(() => {

        console.log('build finished...');

        console.log('starting lambda deploy...');

        createLambda(
          this,
          id,
          {
            serverlessBuildOutDir,
          }
        );

        console.log('lambda deployed...');

      })
      .catch((error) => {

        const code = 1;
        console.error(error);
        process.exit(code);

      });


  }

}
