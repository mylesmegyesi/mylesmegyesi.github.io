.PHONY: build
build:
	npx gatsby build

.PHONY: develop
develop:
	npx gatsby develop

.PHONY: type-check
type-check:
	npx tsc

.PHONY: lint
lint:
	npx tslint --project tsconfig.json

.PHONY: lint-fix
lint-fix:
	npx tslint --project tsconfig.json --fix

.PHONY: ci
ci: type-check lint build
