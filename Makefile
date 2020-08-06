SRCPATH := $(CURDIR)

define HELP
Build your Gatsby project and all Golang function binaries.

Usage:

make build           - Build site & Lambda functions.
endef
export HELP

.PHONY: build help

all help:
	@echo "$$HELP"

build:
	npm run-script build
	mkdir -p functions
	GOOS=linux
	GOARCH=amd64
	GO111MODULE=on
	GOBIN=${PWD}/functions go get ./...
	GOBIN=${PWD}/functions go install ./...