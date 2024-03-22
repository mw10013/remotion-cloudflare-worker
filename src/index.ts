import { getFunctions, renderMediaOnLambda } from '@remotion/lambda/client';

export interface Env {
	REMOTION_AWS_ACCESS_KEY_ID: string;
	REMOTION_AWS_SECRET_ACCESS_KEY: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const result = await renderMediaOnLambda({
			region: 'us-east-1',
			functionName: 'remotion-render-bds9aab',
			composition: 'MyVideo',
			serveUrl: 'https://remotionlambda-qg35eyp1s1.s3.eu-central-1.amazonaws.com/sites/bf2jrbfkw',
			codec: 'h264',
		});

		return new Response(JSON.stringify({ result }));
	},
};
