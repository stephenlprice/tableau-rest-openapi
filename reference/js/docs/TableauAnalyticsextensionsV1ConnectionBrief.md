# ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1ConnectionBrief

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectionName** | **String** | Required. The title of the connection. | [optional] 
**connectionType** | **String** | Required. The kind of service responding to analytics extension requests. The value can be: TABPY, for a [Tableau TabPy](https://github.com/tableau/TabPy) server; GENERIC_API for your custom service that complies with the [Analytics Extensions API spec](https://tableau.github.io/analytics-extensions-api/docs/ae_intro.html); or RSERVE, for an [Rserve](https://www.tableau.com/solutions/r) service; or EINSTEIN_DISCOVERY for your instance of [Einstein Discovery](https://help.tableau.com/current/server-linux/en-us/config_r_tabpy.htm). | [optional] 



## Enum: ConnectionTypeEnum


* `UNDEFINED` (value: `"UNDEFINED"`)

* `TABPY` (value: `"TABPY"`)

* `RSERVE` (value: `"RSERVE"`)

* `EINSTEIN_DISCOVERY` (value: `"EINSTEIN_DISCOVERY"`)

* `GENERIC_API` (value: `"GENERIC_API"`)




