![GitHub Workflow Status](https://img.shields.io/github/workflow/status/elco/pulumi-pass/release)
![npm](https://img.shields.io/npm/v/@elcodev/pulumi-pass)

# Pass/Gopass Resource Provider

The [Gopass](https://www.gopass.pw/) resource provider for Pulumi lets you manage Pass/Gopass secrets in your cloud programs. To use
this package, please [install the Pulumi CLI first](https://www.pulumi.com/docs/get-started/install/).

## Installing

This package is available in many languages in the standard packaging formats.

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @elcodev/pass

or `yarn`:

    $ yarn add @elcodev/pass

### Python

TODO

### Go

To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/elco/pulumi-pass/sdk/go/...

## Configuration

The following configuration points are available for the `pass` provider:

- `pass:storeDir` (environment: `PASSWORD_STORE_DIR`) - path to your password store
- `pass:refreshStore` - Boolean whether to call git pull when configuring the provider, defaults to true

## Build the provider:

### Add dependencies

In order to properly build the sdks, the following tools are expected:

- Go language installed
- tf2pulumi (See the project's README for installation instructions: https://github.com/pulumi/tf2pulumi)
- pandoc (`brew install pandoc`)

In the root of the repository, run:

- `make ensure`
- Edit `provider/resources.go` to map each resource, and specify provider information
- Enumerate any examples in `examples/examples_test.go`
- `make`
