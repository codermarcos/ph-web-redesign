import type { Construct } from 'constructs';

import { NextJSLambdaEdge } from '@sls-next/cdk-construct';
import { aws_lambda as lambda } from 'aws-cdk-lib';

type Options = {
  serverlessBuildOutDir: string;
}

function createLambda(
  app: Construct,
  id: string,
  { serverlessBuildOutDir }: Options
) {

  const analyticsReporting = true;
  const resourceName = `${id}NextJsApp`;
  const description = 'Deploy next to AWS Lambda';

  return new NextJSLambdaEdge(
    app,
    resourceName,
    {
      analyticsReporting,
      description,
      runtime: lambda.Runtime.NODEJS_18_X,
      s3Props: {
        bucketName: `${resourceName}-s3`,
      },
      serverlessBuildOutDir,
      tags: {
        project: id,
      },
    }
  );

}

export default createLambda;
