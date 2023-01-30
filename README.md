
# 💃 Product Hunt

The **Product Hunt** is an American website to share and discover new products. 

This project is a SSR Application built in [Typescript][ts-doc] and uses [Node.js 18 runtime][node-download] with [Next.js][next-doc] and [Styled components][style-doc] deployed using [AWS Lambdas](https://aws.amazon.com/lambda/) functions. 

This project consumes [Product Hunt Api][ph-doc] using 

## 🔍 Requirements

This repository uses:

| Dependencies                                 | Description        | Docs             |
| -------------------------------------------- | ------------------ | ---------------- |
| [![docker-version]][docker-download]         | Docker engine      | [📚][docker-doc] |
| [![node-version]][node-download]             | Javascript Runtime | [📚][node-doc]   |
| [![aws-version]][aws-download]               | AWS CLI            | [📚][aws-doc]    |

> You can use [NVM][nvm-download] to select correct node version based on file `.nvmrc`.

## 🔨 Project setup

1. To **clone repository** you need to have [git][git-download] installed:

```bash
git clone git@github.com:codermarcos/product-hunt.git
```

2. To **install dependencies** you need to have [NodeJS][node-download]:

```bash
npm install
```

## ▶️ Run project

1. To **run** you need to have [NodeJS][node-download] installed and runned `🔨 Project setup`:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the file.

### ⬆️ Deployment

1. Declare necessary environments:

To Unix:

```bash
set AWS_ACCESS_KEY_ID="<YOUR ACCESS KEY ID AWS>"
set AWS_SECRET_ACCESS_KEY="<YOUR SECRET ACCESS KEY>"
set AWS_DEFAULT_REGION="<AWS REGION TO DEPLOY (Recomended: 'sa-east-1' to Production & 'us-east-2' to Development)>"
```

To windows:

```bash
$Env:AWS_ACCESS_KEY_ID="<YOUR ACCESS KEY ID AWS>"
$Env:AWS_SECRET_ACCESS_KEY="<YOUR SECRET ACCESS KEY>"
$Env:AWS_DEFAULT_REGION="<AWS REGION TO DEPLOY (Recomended: 'sa-east-1' to Production & 'us-east-2' to Development)>"
```

2. To **to prepare to deploy** you need to have [AWS CDK Deploy][cdk-doc] installed:

```bash
npm run cdk:bootstrap
```

> This command will be create a basic resources to save your stack [learn more here](https://docs.aws.amazon.com/cdk/v2/guide/cli.html#cli-bootstrap)

3. To **deploy to your AWS account** you need to have [AWS CDK Deploy][cdk-doc] installed:

```bash
npm run cdk:deploy
```

The command `cdk deploy` will first build the TypeScript project using a docker build image esbuild.
Then it will use AWS CloudFormation to deploy the resources to your account.

CDK will create an output of the endpoint URL.

## 📂 Software

This project contains all code for all archeteture, at the following folders:

* `./components` has code all code of frontend
  * `/atoms` has most **small components** in the application `ex.: **Input**, **Button** etc...`
  * `/icons` has svgs components to icons
  * `/molecules` has components that represents a group of **atom components**
  * `/organisms` has components that represents a group of **molecule components**
* `./pages` has files with names based on route how can you see at [Next Documentation][next-doc-routes]


## 📖 Learn More

To learn more about this project, take a look at the following resources:

- [Product Hunt][ph-doc-about] - understand what is product hunting.
- [Product Hunt Api][ph-doc] - learn about product hunting api.
- [Next.js Documentation][next-doc] - learn about Next.js features and API.
- [Learn Next.js][next-doc-learn] - an interactive Next.js tutorial.
- [Typescript][ts-doc] - learn about Typescript features.
- [AWS CDK][cdk-doc] - learn about AWS CDK


### 💪 Dev Team

This project exists thanks to all these people.

[![Marcos](https://avatars3.githubusercontent.com/u/12430365?s=100)](https://github.com/codermarcos)

[docker-download]: https://docs.docker.com/engine/install/
[node-download]: https://nodejs.org/dist/v16.9.1/
[aws-download]: https://aws.amazon.com/cli/

[git-download]: https://git-scm.com/downloads

[nvm-download]: https://github.com/nvm-sh/nvm

[docker-version]: https://img.shields.io/badge/docker-latest-blue
[node-version]: https://img.shields.io/badge/node-16.16.0-blue
[aws-version]: https://img.shields.io/badge/aws-2.7.21-blue

[docker-doc]: https://docs.docker.com/
[node-doc]: https://nodejs.org/dist/latest-v16.x/docs/api/
[aws-doc]: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html

[cdk-doc]: https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html
[style-doc]: https://styled-components.com/
[ph-doc]: https://api.producthunt.com/v2/docs
[ph-doc-about]: https://en.wikipedia.org/wiki/Product_Hunt
[ts-doc]: https://www.typescriptlang.org/docs/
[next-doc]: https://nextjs.org/docs
[next-doc-learn]: https://nextjs.org/learn
[next-doc-routes]: https://nextjs.org/docs/routing/introduction

