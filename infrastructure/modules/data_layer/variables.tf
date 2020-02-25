variable "api_name" {
    type = string
    description = "The name in the AWS Console for the GraphQL API."
}

variable "schema" {
    type = string
    description = "The full GraphQL Schema to use when creating the GraphQL endpoint."
}

variable "tags" {
    type = map(any)
    description = "A map of <name>=<value> of tags to apply to the resources created."
}
