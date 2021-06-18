const env = {
	ENDPOINT: process.env.IS_DEV === "true" ? "http://localhost:4000" : "http://localhost:3000/graphql",
};

module.exports = {
	env: {
		...env,
	},
	serverRuntimeConfig: {
		...env,
	},
	publicRuntimeConfig: {
		...env,
	},
	images: {
		domains: ["ik.imagekit.io"],
	},
};
