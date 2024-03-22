export interface Env {
	REMOTION_AWS_ACCESS_KEY_ID: string;
	REMOTION_AWS_SECRET_ACCESS_KEY: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const result = 'remotion';
		return new Response(
			JSON.stringify({
				result,
			})
		);
	},
};
