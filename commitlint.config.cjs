module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-enum": [
			2,
			"always",
			[
				"feat",
				"fix",
				"refactor",
				"test",
				"chore",
				"docs",
				"style",
				"ci",
				"perf",
				"build",
				"revert",
			],
		],
		"scope-enum": [
			2,
			"always",
			["component", "api", "service", "model", "controller", "config", "test"],
		],
		"subject-case": [2, "always", "lowercase"],
		"subject-empty": [2, "never"],
		"subject-full-stop": [2, "always"],
		"subject-max-length": [2, "always", 100],
		"body-max-length": [2, "always", 1000],
	},
};
