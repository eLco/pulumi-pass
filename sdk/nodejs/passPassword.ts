// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PassPassword extends pulumi.CustomResource {
    /**
     * Get an existing PassPassword resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PassPasswordState, opts?: pulumi.CustomResourceOptions): PassPassword {
        return new PassPassword(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pass:index/passPassword:PassPassword';

    /**
     * Returns true if the given object is an instance of PassPassword.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PassPassword {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PassPassword.__pulumiType;
    }

    /**
     * additional secret data.
     */
    public readonly data!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * secret password.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Full path where the pass data will be written.
     */
    public readonly path!: pulumi.Output<string>;

    /**
     * Create a PassPassword resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PassPasswordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PassPasswordArgs | PassPasswordState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as PassPasswordState | undefined;
            inputs["data"] = state ? state.data : undefined;
            inputs["password"] = state ? state.password : undefined;
            inputs["path"] = state ? state.path : undefined;
        } else {
            const args = argsOrState as PassPasswordArgs | undefined;
            if (!args || args.password === undefined) {
                throw new Error("Missing required property 'password'");
            }
            if (!args || args.path === undefined) {
                throw new Error("Missing required property 'path'");
            }
            inputs["data"] = args ? args.data : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["path"] = args ? args.path : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(PassPassword.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering PassPassword resources.
 */
export interface PassPasswordState {
    /**
     * additional secret data.
     */
    readonly data?: pulumi.Input<{[key: string]: any}>;
    /**
     * secret password.
     */
    readonly password?: pulumi.Input<string>;
    /**
     * Full path where the pass data will be written.
     */
    readonly path?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PassPassword resource.
 */
export interface PassPasswordArgs {
    /**
     * additional secret data.
     */
    readonly data?: pulumi.Input<{[key: string]: any}>;
    /**
     * secret password.
     */
    readonly password: pulumi.Input<string>;
    /**
     * Full path where the pass data will be written.
     */
    readonly path: pulumi.Input<string>;
}
