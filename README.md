<h1 align="center">
  Remotion Cloudflare Worker
</h1>

<div align="center">
  <p>
    Simple Cloudflare worker for remotion. 
  </p>
</div>

## Deployed

- https://remotion-cloudflare-worker.mw10013.workers.dev/

## Local Setup

- Copy `.dev.vars.example` to `.dev.vars` and spcecify remotion aws keys.
- pnpm install
- pnpm dev

## https://docs.aws.amazon.com/lambda/latest/dg/urls-tutorial.html

aws lambda create-function \
 --function-name my-url-function \
 --runtime nodejs18.x \
 --zip-file fileb://function.zip \
 --handler index.handler \
 --region us-east-2 \
 --role arn:aws:iam::192158780350:role/lambda-url-role

aws lambda add-permission \
    --function-name my-url-function \
    --action lambda:InvokeFunctionUrl \
    --principal "*" \
    --function-url-auth-type "NONE" \
    --statement-id url

aws lambda create-function-url-config \
    --function-name my-url-function \
    --auth-type NONE    

curl 'https://asdf.lambda-url.us-east-2.on.aws/' \
-H 'Content-Type: application/json' \
-d '{"num1": "10", "num2": "10"}'    