import { AwsClient } from 'aws4fetch';

export interface Env {
	AWS_ACCESS_KEY_ID: string;
	AWS_SECRET_ACCESS_KEY: string;
	REMOTION_AWS_ACCESS_KEY_ID: string;
	REMOTION_AWS_SECRET_ACCESS_KEY: string;
	LAMBDA_FUNCTION_URL: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const aws = new AwsClient({
			accessKeyId: env.AWS_ACCESS_KEY_ID,
			secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
			service: 'lambda',
			region: 'us-east-2',
		});
		// console.log('aws: %o', aws);

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
		// console.log('lambdaResponse: %o', lambdaResponse);

		return lambdaResponse;
	},
};

/*
const { bucketName, renderId } = await renderMediaOnLambda({
    region: "us-east-1",
    functionName: "remotion-render-bds9aab",
    composition: "MyVideo",
    serveUrl:
      "https://remotionlambda-qg35eyp1s1.s3.eu-central-1.amazonaws.com/sites/bf2jrbfkw",
    codec: "h264",
  });

sites {
  sites: [
    {
      sizeInBytes: 4671440,
      bucketName: 'remotionlambda-useast1-ek878xy80c',
      lastModified: 1710953194000,
      id: 'remotion-01',
      serveUrl: 'https://remotionlambda-useast1-ek878xy80c.s3.us-east-1.amazonaws.com/sites/remotion-01/index.html'
    }
  ],
  buckets: [
    {
      creationDate: 1710953186000,
      name: 'remotionlambda-useast1-ek878xy80c',
      region: 'us-east-1'
    }
  ]
}
compatibleOnlyFunctions [
  {
    functionName: 'remotion-render-4-0-128-mem2048mb-disk2048mb-120sec',
    version: '4.0.128',
    memorySizeInMb: 2048,
    timeoutInSeconds: 120,
    diskSizeInMb: 2048
  }
]
allFunctions: [
  {
    functionName: 'remotion-render-4-0-128-mem2048mb-disk2048mb-120sec',
    version: '4.0.128',
    memorySizeInMb: 2048,
    timeoutInSeconds: 120,
    diskSizeInMb: 2048
  }
]
{
  "allFunctions": [
    {
      "functionName": "remotion-render-4-0-128-mem2048mb-disk2048mb-120sec",
      "version": "4.0.128",
      "memorySizeInMb": 2048,
      "timeoutInSeconds": 120,
      "diskSizeInMb": 2048
    }
  ],
  "compatibleOnlyFunctions": [
    {
      "functionName": "remotion-render-4-0-128-mem2048mb-disk2048mb-120sec",
      "version": "4.0.128",
      "memorySizeInMb": 2048,
      "timeoutInSeconds": 120,
      "diskSizeInMb": 2048
    }
  ],
  "sites": {
    "sites": [
      {
        "sizeInBytes": 4671440,
        "bucketName": "remotionlambda-useast1-ek878xy80c",
        "lastModified": 1710953194000,
        "id": "remotion-01",
        "serveUrl": "https://remotionlambda-useast1-ek878xy80c.s3.us-east-1.amazonaws.com/sites/remotion-01/index.html"
      }
    ],
    "buckets": [
      {
        "creationDate": 1710953186000,
        "name": "remotionlambda-useast1-ek878xy80c",
        "region": "us-east-1"
      }
    ]
  },
  "compositions": [
    [
      {
        "functionName": "remotion-render-4-0-128-mem2048mb-disk2048mb-120sec",
        "serveUrl": "https://remotionlambda-useast1-ek878xy80c.s3.us-east-1.amazonaws.com/sites/remotion-01/index.html",
        "compositions": [
          {
            "id": "LogoAnimation",
            "width": 1920,
            "height": 1080,
            "fps": 30,
            "durationInFrames": 210,
            "props": {
              "personalizedName": "stranger"
            },
            "defaultProps": {
              "personalizedName": "stranger"
            },
            "defaultCodec": null
          }
        ]
      }
    ]
  ]
}
*/
