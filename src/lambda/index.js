// https://docs.aws.amazon.com/lambda/latest/dg/urls-tutorial.html

exports.handler = async (event) => {
	let body = JSON.parse(event.body);
	const product = body.num1 * body.num2;
	const response = {
		statusCode: 200,
		body: 'The product of ' + body.num1 + ' and ' + body.num2 + ' is ' + product,
	};
	return response;
};
