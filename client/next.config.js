const env = {
	ENDPOINT: "http://localhost:4000",
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
		domains: ["ik.imagekit.io", "unsplash.it", "images.pexels.com"],
	},
};
