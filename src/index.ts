import { AwsClient } from 'aws4fetch';

export interface Env {
	REMOTION_AWS_ACCESS_KEY_ID: string;
	REMOTION_AWS_SECRET_ACCESS_KEY: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const aws = new AwsClient({
			accessKeyId: env.REMOTION_AWS_ACCESS_KEY_ID,
			secretAccessKey: env.REMOTION_AWS_SECRET_ACCESS_KEY,
			service: 'lambda',
		});

		const submit_body = {
			num1: 10,
			num2: 10,
		};

		const lambdaResponse = await aws.fetch(env.LAMBDA_FUNCTION_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(submit_body),
			redirect: 'manual',
		});

		return lambdaResponse;
	},
};
