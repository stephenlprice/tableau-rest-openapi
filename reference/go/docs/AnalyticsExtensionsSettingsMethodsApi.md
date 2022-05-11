# \AnalyticsExtensionsSettingsMethodsApi

All URIs are relative to *https://10ax.online.tableau.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddAnalyticsExtensionsConnection**](AnalyticsExtensionsSettingsMethodsApi.md#AddAnalyticsExtensionsConnection) | **Post** /api/-/settings/site/extensions/analytics/connections | Add analytics extension connection to site
[**DeleteAnalyticsExtensionsConnection**](AnalyticsExtensionsSettingsMethodsApi.md#DeleteAnalyticsExtensionsConnection) | **Delete** /api/-/settings/site/extensions/analytics/connections/{connection_luid} | Delete analytics extension connection from site
[**DeleteConnectionFromWorkbook**](AnalyticsExtensionsSettingsMethodsApi.md#DeleteConnectionFromWorkbook) | **Delete** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection | Remove current analytics extension connection for workbook
[**GetAnalyticsExtensionsConnection**](AnalyticsExtensionsSettingsMethodsApi.md#GetAnalyticsExtensionsConnection) | **Get** /api/-/settings/site/extensions/analytics/connections/{connection_luid} | Get analytics extension details
[**GetAnalyticsExtensionsConnections**](AnalyticsExtensionsSettingsMethodsApi.md#GetAnalyticsExtensionsConnections) | **Get** /api/-/settings/site/extensions/analytics/connections | List analytics extension connections on site
[**GetAnalyticsExtensionsServerSettings**](AnalyticsExtensionsSettingsMethodsApi.md#GetAnalyticsExtensionsServerSettings) | **Get** /api/-/settings/server/extensions/analytics | Get enabled state of analytics extensions on server
[**GetAnalyticsExtensionsSiteSettings**](AnalyticsExtensionsSettingsMethodsApi.md#GetAnalyticsExtensionsSiteSettings) | **Get** /api/-/settings/site/extensions/analytics | Get enabled state of analytics extensions on site
[**GetConnectionOptionsForWorkbook**](AnalyticsExtensionsSettingsMethodsApi.md#GetConnectionOptionsForWorkbook) | **Get** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/connections | List analytics extension connections of workbook
[**GetSelectedConnectionForWorkbook**](AnalyticsExtensionsSettingsMethodsApi.md#GetSelectedConnectionForWorkbook) | **Get** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection | Get current analytics extension for workbook
[**UpdateAnalyticsExtensionsConnection**](AnalyticsExtensionsSettingsMethodsApi.md#UpdateAnalyticsExtensionsConnection) | **Put** /api/-/settings/site/extensions/analytics/connections/{connection_luid} | Update analytics extension connection of site
[**UpdateAnalyticsExtensionsServerSettings**](AnalyticsExtensionsSettingsMethodsApi.md#UpdateAnalyticsExtensionsServerSettings) | **Put** /api/-/settings/server/extensions/analytics | Enable/disable analytics extensions on server
[**UpdateAnalyticsExtensionsSiteSettings**](AnalyticsExtensionsSettingsMethodsApi.md#UpdateAnalyticsExtensionsSiteSettings) | **Put** /api/-/settings/site/extensions/analytics | Update enabled state of analytics extensions on site
[**UpdateWorkbookWithConnection**](AnalyticsExtensionsSettingsMethodsApi.md#UpdateWorkbookWithConnection) | **Put** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection | Update analytics extension for workbook



## AddAnalyticsExtensionsConnection

> TableauAnalyticsextensionsV1ConnectionItem AddAnalyticsExtensionsConnection(ctx).XTableauAuth(xTableauAuth).TableauAnalyticsextensionsV1ConnectionItem(tableauAnalyticsextensionsV1ConnectionItem).Execute()

Add analytics extension connection to site



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)
    tableauAnalyticsextensionsV1ConnectionItem := *openapiclient.NewTableauAnalyticsextensionsV1ConnectionItem() // TableauAnalyticsextensionsV1ConnectionItem |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AnalyticsExtensionsSettingsMethodsApi.AddAnalyticsExtensionsConnection(context.Background()).XTableauAuth(xTableauAuth).TableauAnalyticsextensionsV1ConnectionItem(tableauAnalyticsextensionsV1ConnectionItem).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsExtensionsSettingsMethodsApi.AddAnalyticsExtensionsConnection``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AddAnalyticsExtensionsConnection`: TableauAnalyticsextensionsV1ConnectionItem
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsExtensionsSettingsMethodsApi.AddAnalyticsExtensionsConnection`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAddAnalyticsExtensionsConnectionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 
 **tableauAnalyticsextensionsV1ConnectionItem** | [**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md) |  | 

### Return type

[**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteAnalyticsExtensionsConnection

> DeleteAnalyticsExtensionsConnection(ctx, connectionLuid).XTableauAuth(xTableauAuth).Execute()

Delete analytics extension connection from site



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    connectionLuid := "connectionLuid_example" // string | 
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AnalyticsExtensionsSettingsMethodsApi.DeleteAnalyticsExtensionsConnection(context.Background(), connectionLuid).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsExtensionsSettingsMethodsApi.DeleteAnalyticsExtensionsConnection``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionLuid** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAnalyticsExtensionsConnectionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 

### Return type

 (empty response body)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteConnectionFromWorkbook

> DeleteConnectionFromWorkbook(ctx, workbookLuid).XTableauAuth(xTableauAuth).Execute()

Remove current analytics extension connection for workbook



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    workbookLuid := "workbookLuid_example" // string | 
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AnalyticsExtensionsSettingsMethodsApi.DeleteConnectionFromWorkbook(context.Background(), workbookLuid).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsExtensionsSettingsMethodsApi.DeleteConnectionFromWorkbook``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workbookLuid** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteConnectionFromWorkbookRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 

### Return type

 (empty response body)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAnalyticsExtensionsConnection

> TableauAnalyticsextensionsV1ConnectionItem GetAnalyticsExtensionsConnection(ctx, connectionLuid).XTableauAuth(xTableauAuth).Execute()

Get analytics extension details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    connectionLuid := "connectionLuid_example" // string | 
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AnalyticsExtensionsSettingsMethodsApi.GetAnalyticsExtensionsConnection(context.Background(), connectionLuid).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsExtensionsSettingsMethodsApi.GetAnalyticsExtensionsConnection``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAnalyticsExtensionsConnection`: TableauAnalyticsextensionsV1ConnectionItem
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsExtensionsSettingsMethodsApi.GetAnalyticsExtensionsConnection`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionLuid** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAnalyticsExtensionsConnectionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 

### Return type

[**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAnalyticsExtensionsConnections

> TableauAnalyticsextensionsV1ConnectionList GetAnalyticsExtensionsConnections(ctx).XTableauAuth(xTableauAuth).Execute()

List analytics extension connections on site



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AnalyticsExtensionsSettingsMethodsApi.GetAnalyticsExtensionsConnections(context.Background()).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsExtensionsSettingsMethodsApi.GetAnalyticsExtensionsConnections``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAnalyticsExtensionsConnections`: TableauAnalyticsextensionsV1ConnectionList
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsExtensionsSettingsMethodsApi.GetAnalyticsExtensionsConnections`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAnalyticsExtensionsConnectionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 

### Return type

[**TableauAnalyticsextensionsV1ConnectionList**](TableauAnalyticsextensionsV1ConnectionList.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionList+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAnalyticsExtensionsServerSettings

> TableauAnalyticsextensionsV1ServerSettings GetAnalyticsExtensionsServerSettings(ctx).XTableauAuth(xTableauAuth).Execute()

Get enabled state of analytics extensions on server



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AnalyticsExtensionsSettingsMethodsApi.GetAnalyticsExtensionsServerSettings(context.Background()).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsExtensionsSettingsMethodsApi.GetAnalyticsExtensionsServerSettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAnalyticsExtensionsServerSettings`: TableauAnalyticsextensionsV1ServerSettings
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsExtensionsSettingsMethodsApi.GetAnalyticsExtensionsServerSettings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAnalyticsExtensionsServerSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 

### Return type

[**TableauAnalyticsextensionsV1ServerSettings**](TableauAnalyticsextensionsV1ServerSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ServerSettings+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAnalyticsExtensionsSiteSettings

> TableauAnalyticsextensionsV1SiteSettings GetAnalyticsExtensionsSiteSettings(ctx).XTableauAuth(xTableauAuth).Execute()

Get enabled state of analytics extensions on site



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AnalyticsExtensionsSettingsMethodsApi.GetAnalyticsExtensionsSiteSettings(context.Background()).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsExtensionsSettingsMethodsApi.GetAnalyticsExtensionsSiteSettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAnalyticsExtensionsSiteSettings`: TableauAnalyticsextensionsV1SiteSettings
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsExtensionsSettingsMethodsApi.GetAnalyticsExtensionsSiteSettings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAnalyticsExtensionsSiteSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 

### Return type

[**TableauAnalyticsextensionsV1SiteSettings**](TableauAnalyticsextensionsV1SiteSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.analyticsextensions.v1.SiteSettings+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetConnectionOptionsForWorkbook

> TableauAnalyticsextensionsV1ConnectionMetadataList GetConnectionOptionsForWorkbook(ctx, workbookLuid).XTableauAuth(xTableauAuth).Execute()

List analytics extension connections of workbook



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    workbookLuid := "workbookLuid_example" // string | 
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AnalyticsExtensionsSettingsMethodsApi.GetConnectionOptionsForWorkbook(context.Background(), workbookLuid).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsExtensionsSettingsMethodsApi.GetConnectionOptionsForWorkbook``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConnectionOptionsForWorkbook`: TableauAnalyticsextensionsV1ConnectionMetadataList
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsExtensionsSettingsMethodsApi.GetConnectionOptionsForWorkbook`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workbookLuid** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConnectionOptionsForWorkbookRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 

### Return type

[**TableauAnalyticsextensionsV1ConnectionMetadataList**](TableauAnalyticsextensionsV1ConnectionMetadataList.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionMetadataList+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSelectedConnectionForWorkbook

> TableauAnalyticsextensionsV1ConnectionMetadata GetSelectedConnectionForWorkbook(ctx, workbookLuid).XTableauAuth(xTableauAuth).Execute()

Get current analytics extension for workbook



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    workbookLuid := "workbookLuid_example" // string | 
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AnalyticsExtensionsSettingsMethodsApi.GetSelectedConnectionForWorkbook(context.Background(), workbookLuid).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsExtensionsSettingsMethodsApi.GetSelectedConnectionForWorkbook``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSelectedConnectionForWorkbook`: TableauAnalyticsextensionsV1ConnectionMetadata
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsExtensionsSettingsMethodsApi.GetSelectedConnectionForWorkbook`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workbookLuid** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSelectedConnectionForWorkbookRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 

### Return type

[**TableauAnalyticsextensionsV1ConnectionMetadata**](TableauAnalyticsextensionsV1ConnectionMetadata.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionMetadata+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateAnalyticsExtensionsConnection

> TableauAnalyticsextensionsV1ConnectionItem UpdateAnalyticsExtensionsConnection(ctx, connectionLuid).XTableauAuth(xTableauAuth).TableauAnalyticsextensionsV1ConnectionItem(tableauAnalyticsextensionsV1ConnectionItem).Execute()

Update analytics extension connection of site



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    connectionLuid := "connectionLuid_example" // string | 
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)
    tableauAnalyticsextensionsV1ConnectionItem := *openapiclient.NewTableauAnalyticsextensionsV1ConnectionItem() // TableauAnalyticsextensionsV1ConnectionItem |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AnalyticsExtensionsSettingsMethodsApi.UpdateAnalyticsExtensionsConnection(context.Background(), connectionLuid).XTableauAuth(xTableauAuth).TableauAnalyticsextensionsV1ConnectionItem(tableauAnalyticsextensionsV1ConnectionItem).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsExtensionsSettingsMethodsApi.UpdateAnalyticsExtensionsConnection``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAnalyticsExtensionsConnection`: TableauAnalyticsextensionsV1ConnectionItem
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsExtensionsSettingsMethodsApi.UpdateAnalyticsExtensionsConnection`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**connectionLuid** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAnalyticsExtensionsConnectionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 
 **tableauAnalyticsextensionsV1ConnectionItem** | [**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md) |  | 

### Return type

[**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateAnalyticsExtensionsServerSettings

> TableauAnalyticsextensionsV1ServerSettings UpdateAnalyticsExtensionsServerSettings(ctx).XTableauAuth(xTableauAuth).TableauAnalyticsextensionsV1ServerSettings(tableauAnalyticsextensionsV1ServerSettings).Execute()

Enable/disable analytics extensions on server



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)
    tableauAnalyticsextensionsV1ServerSettings := *openapiclient.NewTableauAnalyticsextensionsV1ServerSettings() // TableauAnalyticsextensionsV1ServerSettings |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AnalyticsExtensionsSettingsMethodsApi.UpdateAnalyticsExtensionsServerSettings(context.Background()).XTableauAuth(xTableauAuth).TableauAnalyticsextensionsV1ServerSettings(tableauAnalyticsextensionsV1ServerSettings).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsExtensionsSettingsMethodsApi.UpdateAnalyticsExtensionsServerSettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAnalyticsExtensionsServerSettings`: TableauAnalyticsextensionsV1ServerSettings
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsExtensionsSettingsMethodsApi.UpdateAnalyticsExtensionsServerSettings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAnalyticsExtensionsServerSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 
 **tableauAnalyticsextensionsV1ServerSettings** | [**TableauAnalyticsextensionsV1ServerSettings**](TableauAnalyticsextensionsV1ServerSettings.md) |  | 

### Return type

[**TableauAnalyticsextensionsV1ServerSettings**](TableauAnalyticsextensionsV1ServerSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.analyticsextensions.v1.ServerSettings+json
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ServerSettings+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateAnalyticsExtensionsSiteSettings

> TableauAnalyticsextensionsV1SiteSettings UpdateAnalyticsExtensionsSiteSettings(ctx).XTableauAuth(xTableauAuth).TableauAnalyticsextensionsV1SiteSettings(tableauAnalyticsextensionsV1SiteSettings).Execute()

Update enabled state of analytics extensions on site



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)
    tableauAnalyticsextensionsV1SiteSettings := *openapiclient.NewTableauAnalyticsextensionsV1SiteSettings() // TableauAnalyticsextensionsV1SiteSettings |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AnalyticsExtensionsSettingsMethodsApi.UpdateAnalyticsExtensionsSiteSettings(context.Background()).XTableauAuth(xTableauAuth).TableauAnalyticsextensionsV1SiteSettings(tableauAnalyticsextensionsV1SiteSettings).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsExtensionsSettingsMethodsApi.UpdateAnalyticsExtensionsSiteSettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAnalyticsExtensionsSiteSettings`: TableauAnalyticsextensionsV1SiteSettings
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsExtensionsSettingsMethodsApi.UpdateAnalyticsExtensionsSiteSettings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAnalyticsExtensionsSiteSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 
 **tableauAnalyticsextensionsV1SiteSettings** | [**TableauAnalyticsextensionsV1SiteSettings**](TableauAnalyticsextensionsV1SiteSettings.md) |  | 

### Return type

[**TableauAnalyticsextensionsV1SiteSettings**](TableauAnalyticsextensionsV1SiteSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.analyticsextensions.v1.SiteSettings+json
- **Accept**: application/vnd.tableau.analyticsextensions.v1.SiteSettings+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateWorkbookWithConnection

> TableauAnalyticsextensionsV1ConnectionMapping UpdateWorkbookWithConnection(ctx, workbookLuid).XTableauAuth(xTableauAuth).TableauAnalyticsextensionsV1ConnectionMapping(tableauAnalyticsextensionsV1ConnectionMapping).Execute()

Update analytics extension for workbook



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    workbookLuid := "workbookLuid_example" // string | 
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)
    tableauAnalyticsextensionsV1ConnectionMapping := *openapiclient.NewTableauAnalyticsextensionsV1ConnectionMapping() // TableauAnalyticsextensionsV1ConnectionMapping |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AnalyticsExtensionsSettingsMethodsApi.UpdateWorkbookWithConnection(context.Background(), workbookLuid).XTableauAuth(xTableauAuth).TableauAnalyticsextensionsV1ConnectionMapping(tableauAnalyticsextensionsV1ConnectionMapping).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AnalyticsExtensionsSettingsMethodsApi.UpdateWorkbookWithConnection``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateWorkbookWithConnection`: TableauAnalyticsextensionsV1ConnectionMapping
    fmt.Fprintf(os.Stdout, "Response from `AnalyticsExtensionsSettingsMethodsApi.UpdateWorkbookWithConnection`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**workbookLuid** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateWorkbookWithConnectionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 
 **tableauAnalyticsextensionsV1ConnectionMapping** | [**TableauAnalyticsextensionsV1ConnectionMapping**](TableauAnalyticsextensionsV1ConnectionMapping.md) |  | 

### Return type

[**TableauAnalyticsextensionsV1ConnectionMapping**](TableauAnalyticsextensionsV1ConnectionMapping.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.analyticsextensions.v1.ConnectionMapping+json
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionMapping+json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

