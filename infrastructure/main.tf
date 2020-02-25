terraform {
    # TODO: Pull this out into 'environment specific file'
    backend "s3" {
        region          = "us-east-1"

        # If you re-run the bootstrap, you'll need a new Role ARN
        role_arn        = "arn:aws:iam::117243655954:role/terraform-state-TerraformRole-Y05T5PDO4EKQ"
        key             = "gtd-application.tfstate"
        dynamodb_table  = "TerraformStateLock"
        bucket          = "terraformstate.02252020"
    }
}

provider "aws" {
    region  = "us-east-1"
    version = "~> 2.0"
}

locals {
    project_name = "gtd"
    default_tags = {
        project = local.project_name
    }
}

module "data_layer" {
    source = "./modules/data_layer/"

    api_name = "${local.project_name}-api"
    schema = file("./schema.gql")

    tags = local.default_tags
}