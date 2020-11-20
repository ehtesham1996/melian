const fs = require("fs");
const path = require("path");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const appIncludes = [resolveApp("src"), resolveApp("../../packages/ui/src")];

const resolveModules = [resolveApp("../../packages/ui/src")];

module.exports = {
	// eslint-disable-next-line no-unused-vars
	webpack: function override(config, env) {
		// allow importing from outside of src folder
		config.resolve.modules = config.resolve.modules.concat(resolveModules);
		config.module.rules[0].include = appIncludes;
		// config.module.rules[1] = null;
		config.module.rules[1].oneOf[2].include = appIncludes;

		config.module.rules = config.module.rules.filter(Boolean);

		return config;
	},
	jest: function (config) {
		config.modulePaths = config.modulePaths.concat(resolveModules);

		return config;
	},
};
