module github.com/elco/pulumi-pass/provider

go 1.14

replace (
	github.com/Azure/go-autorest => github.com/Azure/go-autorest v12.4.3+incompatible
	github.com/hashicorp/consul => github.com/hashicorp/consul v1.5.1
	github.com/hashicorp/vault => github.com/hashicorp/vault v1.2.0
)

require (
	github.com/alecthomas/binary v0.0.0-20190922233330-fb1b1d9c299c // indirect
	github.com/camptocamp/terraform-provider-pass v0.0.0-20200211132423-2c69dbddb8c0
	github.com/hashicorp/terraform-plugin-sdk v1.9.1
	github.com/pulumi/pulumi-terraform-bridge/v2 v2.4.0
	github.com/pulumi/pulumi/sdk/v2 v2.3.0
)
