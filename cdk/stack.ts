import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as iam from '@aws-cdk/aws-iam';
import { RemovalPolicy } from '@aws-cdk/core';

export class Stack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const bucket = new s3.Bucket(this, 'PersonalFinanceAppFrontend', {
            bucketName: 'personal-finance-app-frontend',
            websiteIndexDocument: 'index.html',
            blockPublicAccess: new s3.BlockPublicAccess({ restrictPublicBuckets: false }),
            removalPolicy: RemovalPolicy.DESTROY
        });

        const bucketPolicy = new iam.PolicyStatement({
            actions: ['s3:GetObject'],
            resources: [
              `${bucket.bucketArn}/*`
            ],
            principals: [new iam.AnyPrincipal()],
        })

        bucket.addToResourcePolicy(bucketPolicy);
    }
}