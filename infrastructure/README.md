# GTD - Infrastructure
A set of terraform / serverless configuration to setup the required infrastructure for the GTD application.

### NOTE
Since Terraform is being used to create the infrastructure, instead of managing local state, this project uses S3 to manage the terraform state.

What that means is that, you will first need to bootstrap your AWS environment to have the required roles and S3 buckets. A basic cloudformation script is included here. (```bootstrap.yml```)

### **Bootstrap Command**
*This assumes your AWS credentials are setup locally.*
*Also, ```AccountId``` below MUST be a number, no dashes or quotes*
Run the following command from within the ```infrastructure``` folder.
```sh
aws cloudformation create-stack \
    --stack-name <example> \
    --template-body file://bootstrap.yml \
    --capabilities CAPABILITY_IAM \
    --parameters ParameterKey=AccountId,ParameterValue=<your account id>
```


## Front-End (React Website)
 * Maybe Gatsby? Something React + Typescript

## Backend (GraphQL Endpoint)
 * Either GraphQL on-top-of Lambdas (Serverless) or AppSync

## Database
 * TODO: Either FaunaDB or DynamoDB

## iOS - React Native
 * React Native + Typescript

## Tracking
 * Google Analytics?

## Metrics
* DataDog -- OpenTracing or some standard

## Logging
 * ? What standards exist?

## Configuration
 * ? No Idea