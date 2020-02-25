resource "aws_appsync_graphql_api" "graphql_api" {
    authentication_type = "API_KEY"
    name                = var.api_name

    schema = var.schema

    tags = merge(
        var.tags,
        {},
    )
}