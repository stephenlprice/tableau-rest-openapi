# \DashboardExtensionsSettingsMethodsApi

All URIs are relative to *https://10ax.online.tableau.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateDashboardExtensionsBlockListItem**](DashboardExtensionsSettingsMethodsApi.md#CreateDashboardExtensionsBlockListItem) | **Post** /api/-/settings/server/extensions/dashboard/blockListItems | Block dashboard extension on server
[**CreateDashboardExtensionsSafeListItem**](DashboardExtensionsSettingsMethodsApi.md#CreateDashboardExtensionsSafeListItem) | **Post** /api/-/settings/site/extensions/dashboard/safeListItems | Allow dashboard extension on site
[**DeleteDashboardExtensionsBlockListItem**](DashboardExtensionsSettingsMethodsApi.md#DeleteDashboardExtensionsBlockListItem) | **Delete** /api/-/settings/server/extensions/dashboard/blockListItems/{block_list_item_luid} | Unblock dashboard extension on server
[**DeleteDashboardExtensionsSafeListItem**](DashboardExtensionsSettingsMethodsApi.md#DeleteDashboardExtensionsSafeListItem) | **Delete** /api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid} | Disallow dashboard extension on site
[**GetDashboardExtensionsBlockListItem**](DashboardExtensionsSettingsMethodsApi.md#GetDashboardExtensionsBlockListItem) | **Get** /api/-/settings/server/extensions/dashboard/blockListItems/{block_list_item_luid} | Get blocked dashboard extension on server
[**GetDashboardExtensionsBlockListItems**](DashboardExtensionsSettingsMethodsApi.md#GetDashboardExtensionsBlockListItems) | **Get** /api/-/settings/server/extensions/dashboard/blockListItems | List blocked dashboard extensions on server
[**GetDashboardExtensionsSafeListItem**](DashboardExtensionsSettingsMethodsApi.md#GetDashboardExtensionsSafeListItem) | **Get** /api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid} | Get allowed dashboard extension on site
[**GetDashboardExtensionsSafeListItems**](DashboardExtensionsSettingsMethodsApi.md#GetDashboardExtensionsSafeListItems) | **Get** /api/-/settings/site/extensions/dashboard/safeListItems | Lists allowed dashboard extensions on site
[**GetDashboardExtensionsServerSettings**](DashboardExtensionsSettingsMethodsApi.md#GetDashboardExtensionsServerSettings) | **Get** /api/-/settings/server/extensions/dashboard | List dashboard extension settings of server
[**GetDashboardExtensionsSiteSettings**](DashboardExtensionsSettingsMethodsApi.md#GetDashboardExtensionsSiteSettings) | **Get** /api/-/settings/site/extensions/dashboard | List dashboard extension settings of site
[**UpdateDashboardExtensionsSafeListItem**](DashboardExtensionsSettingsMethodsApi.md#UpdateDashboardExtensionsSafeListItem) | **Put** /api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid} | Update settings for allowed dashboard extension on site
[**UpdateDashboardExtensionsServerSettings**](DashboardExtensionsSettingsMethodsApi.md#UpdateDashboardExtensionsServerSettings) | **Put** /api/-/settings/server/extensions/dashboard | Update dashboard extensions settings of server
[**UpdateDashboardExtensionsSiteSettings**](DashboardExtensionsSettingsMethodsApi.md#UpdateDashboardExtensionsSiteSettings) | **Put** /api/-/settings/site/extensions/dashboard | Update dashboard extension settings of site



## CreateDashboardExtensionsBlockListItem

> TableauExtensionsDashboardV1BlockListItem CreateDashboardExtensionsBlockListItem(ctx).XTableauAuth(xTableauAuth).TableauExtensionsDashboardV1BlockListItem(tableauExtensionsDashboardV1BlockListItem).Execute()

Block dashboard extension on server



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
    tableauExtensionsDashboardV1BlockListItem := *openapiclient.NewTableauExtensionsDashboardV1BlockListItem() // TableauExtensionsDashboardV1BlockListItem |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DashboardExtensionsSettingsMethodsApi.CreateDashboardExtensionsBlockListItem(context.Background()).XTableauAuth(xTableauAuth).TableauExtensionsDashboardV1BlockListItem(tableauExtensionsDashboardV1BlockListItem).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DashboardExtensionsSettingsMethodsApi.CreateDashboardExtensionsBlockListItem``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateDashboardExtensionsBlockListItem`: TableauExtensionsDashboardV1BlockListItem
    fmt.Fprintf(os.Stdout, "Response from `DashboardExtensionsSettingsMethodsApi.CreateDashboardExtensionsBlockListItem`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDashboardExtensionsBlockListItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 
 **tableauExtensionsDashboardV1BlockListItem** | [**TableauExtensionsDashboardV1BlockListItem**](TableauExtensionsDashboardV1BlockListItem.md) |  | 

### Return type

[**TableauExtensionsDashboardV1BlockListItem**](TableauExtensionsDashboardV1BlockListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.BlockListItem+json
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.BlockListItem+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateDashboardExtensionsSafeListItem

> TableauExtensionsDashboardV1SafeListItem CreateDashboardExtensionsSafeListItem(ctx).XTableauAuth(xTableauAuth).TableauExtensionsDashboardV1SafeListItem(tableauExtensionsDashboardV1SafeListItem).Execute()

Allow dashboard extension on site



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
    tableauExtensionsDashboardV1SafeListItem := *openapiclient.NewTableauExtensionsDashboardV1SafeListItem() // TableauExtensionsDashboardV1SafeListItem |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DashboardExtensionsSettingsMethodsApi.CreateDashboardExtensionsSafeListItem(context.Background()).XTableauAuth(xTableauAuth).TableauExtensionsDashboardV1SafeListItem(tableauExtensionsDashboardV1SafeListItem).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DashboardExtensionsSettingsMethodsApi.CreateDashboardExtensionsSafeListItem``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateDashboardExtensionsSafeListItem`: TableauExtensionsDashboardV1SafeListItem
    fmt.Fprintf(os.Stdout, "Response from `DashboardExtensionsSettingsMethodsApi.CreateDashboardExtensionsSafeListItem`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateDashboardExtensionsSafeListItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 
 **tableauExtensionsDashboardV1SafeListItem** | [**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md) |  | 

### Return type

[**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteDashboardExtensionsBlockListItem

> DeleteDashboardExtensionsBlockListItem(ctx, blockListItemLuid).XTableauAuth(xTableauAuth).Execute()

Unblock dashboard extension on server



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
    blockListItemLuid := "blockListItemLuid_example" // string | 
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DashboardExtensionsSettingsMethodsApi.DeleteDashboardExtensionsBlockListItem(context.Background(), blockListItemLuid).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DashboardExtensionsSettingsMethodsApi.DeleteDashboardExtensionsBlockListItem``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockListItemLuid** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDashboardExtensionsBlockListItemRequest struct via the builder pattern


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


## DeleteDashboardExtensionsSafeListItem

> DeleteDashboardExtensionsSafeListItem(ctx, safeListItemLuid).XTableauAuth(xTableauAuth).Execute()

Disallow dashboard extension on site



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
    safeListItemLuid := "safeListItemLuid_example" // string | 
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DashboardExtensionsSettingsMethodsApi.DeleteDashboardExtensionsSafeListItem(context.Background(), safeListItemLuid).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DashboardExtensionsSettingsMethodsApi.DeleteDashboardExtensionsSafeListItem``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**safeListItemLuid** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDashboardExtensionsSafeListItemRequest struct via the builder pattern


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


## GetDashboardExtensionsBlockListItem

> TableauExtensionsDashboardV1BlockListItem GetDashboardExtensionsBlockListItem(ctx, blockListItemLuid).XTableauAuth(xTableauAuth).Execute()

Get blocked dashboard extension on server



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
    blockListItemLuid := "blockListItemLuid_example" // string | 
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsBlockListItem(context.Background(), blockListItemLuid).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsBlockListItem``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDashboardExtensionsBlockListItem`: TableauExtensionsDashboardV1BlockListItem
    fmt.Fprintf(os.Stdout, "Response from `DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsBlockListItem`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockListItemLuid** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDashboardExtensionsBlockListItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 

### Return type

[**TableauExtensionsDashboardV1BlockListItem**](TableauExtensionsDashboardV1BlockListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.BlockListItem+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDashboardExtensionsBlockListItems

> TableauExtensionsDashboardV1BlockListItems GetDashboardExtensionsBlockListItems(ctx).XTableauAuth(xTableauAuth).Execute()

List blocked dashboard extensions on server



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
    resp, r, err := apiClient.DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsBlockListItems(context.Background()).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsBlockListItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDashboardExtensionsBlockListItems`: TableauExtensionsDashboardV1BlockListItems
    fmt.Fprintf(os.Stdout, "Response from `DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsBlockListItems`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDashboardExtensionsBlockListItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 

### Return type

[**TableauExtensionsDashboardV1BlockListItems**](TableauExtensionsDashboardV1BlockListItems.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.BlockListItems+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDashboardExtensionsSafeListItem

> TableauExtensionsDashboardV1SafeListItem GetDashboardExtensionsSafeListItem(ctx, safeListItemLuid).XTableauAuth(xTableauAuth).Execute()

Get allowed dashboard extension on site



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
    safeListItemLuid := "safeListItemLuid_example" // string | 
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsSafeListItem(context.Background(), safeListItemLuid).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsSafeListItem``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDashboardExtensionsSafeListItem`: TableauExtensionsDashboardV1SafeListItem
    fmt.Fprintf(os.Stdout, "Response from `DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsSafeListItem`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**safeListItemLuid** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDashboardExtensionsSafeListItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 

### Return type

[**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDashboardExtensionsSafeListItems

> TableauExtensionsDashboardV1SafeListItems GetDashboardExtensionsSafeListItems(ctx).XTableauAuth(xTableauAuth).Execute()

Lists allowed dashboard extensions on site



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
    resp, r, err := apiClient.DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsSafeListItems(context.Background()).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsSafeListItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDashboardExtensionsSafeListItems`: TableauExtensionsDashboardV1SafeListItems
    fmt.Fprintf(os.Stdout, "Response from `DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsSafeListItems`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDashboardExtensionsSafeListItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 

### Return type

[**TableauExtensionsDashboardV1SafeListItems**](TableauExtensionsDashboardV1SafeListItems.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.SafeListItems+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDashboardExtensionsServerSettings

> TableauExtensionsDashboardV1ServerSettings GetDashboardExtensionsServerSettings(ctx).XTableauAuth(xTableauAuth).Execute()

List dashboard extension settings of server



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
    resp, r, err := apiClient.DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsServerSettings(context.Background()).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsServerSettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDashboardExtensionsServerSettings`: TableauExtensionsDashboardV1ServerSettings
    fmt.Fprintf(os.Stdout, "Response from `DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsServerSettings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDashboardExtensionsServerSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 

### Return type

[**TableauExtensionsDashboardV1ServerSettings**](TableauExtensionsDashboardV1ServerSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.ServerSettings+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDashboardExtensionsSiteSettings

> TableauExtensionsDashboardV1SiteSettings GetDashboardExtensionsSiteSettings(ctx).XTableauAuth(xTableauAuth).Execute()

List dashboard extension settings of site



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
    resp, r, err := apiClient.DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsSiteSettings(context.Background()).XTableauAuth(xTableauAuth).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsSiteSettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDashboardExtensionsSiteSettings`: TableauExtensionsDashboardV1SiteSettings
    fmt.Fprintf(os.Stdout, "Response from `DashboardExtensionsSettingsMethodsApi.GetDashboardExtensionsSiteSettings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDashboardExtensionsSiteSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 

### Return type

[**TableauExtensionsDashboardV1SiteSettings**](TableauExtensionsDashboardV1SiteSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.SiteSettings+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateDashboardExtensionsSafeListItem

> TableauExtensionsDashboardV1SafeListItem UpdateDashboardExtensionsSafeListItem(ctx, safeListItemLuid).XTableauAuth(xTableauAuth).TableauExtensionsDashboardV1SafeListItem(tableauExtensionsDashboardV1SafeListItem).Execute()

Update settings for allowed dashboard extension on site



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
    safeListItemLuid := TODO // interface{} | 
    xTableauAuth := "xTableauAuth_example" // string | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). (optional)
    tableauExtensionsDashboardV1SafeListItem := *openapiclient.NewTableauExtensionsDashboardV1SafeListItem() // TableauExtensionsDashboardV1SafeListItem |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DashboardExtensionsSettingsMethodsApi.UpdateDashboardExtensionsSafeListItem(context.Background(), safeListItemLuid).XTableauAuth(xTableauAuth).TableauExtensionsDashboardV1SafeListItem(tableauExtensionsDashboardV1SafeListItem).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DashboardExtensionsSettingsMethodsApi.UpdateDashboardExtensionsSafeListItem``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateDashboardExtensionsSafeListItem`: TableauExtensionsDashboardV1SafeListItem
    fmt.Fprintf(os.Stdout, "Response from `DashboardExtensionsSettingsMethodsApi.UpdateDashboardExtensionsSafeListItem`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**safeListItemLuid** | [**interface{}**](.md) |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateDashboardExtensionsSafeListItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 
 **tableauExtensionsDashboardV1SafeListItem** | [**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md) |  | 

### Return type

[**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateDashboardExtensionsServerSettings

> TableauExtensionsDashboardV1ServerSettings UpdateDashboardExtensionsServerSettings(ctx).XTableauAuth(xTableauAuth).TableauExtensionsDashboardV1ServerSettings(tableauExtensionsDashboardV1ServerSettings).Execute()

Update dashboard extensions settings of server



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
    tableauExtensionsDashboardV1ServerSettings := *openapiclient.NewTableauExtensionsDashboardV1ServerSettings() // TableauExtensionsDashboardV1ServerSettings |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DashboardExtensionsSettingsMethodsApi.UpdateDashboardExtensionsServerSettings(context.Background()).XTableauAuth(xTableauAuth).TableauExtensionsDashboardV1ServerSettings(tableauExtensionsDashboardV1ServerSettings).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DashboardExtensionsSettingsMethodsApi.UpdateDashboardExtensionsServerSettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateDashboardExtensionsServerSettings`: TableauExtensionsDashboardV1ServerSettings
    fmt.Fprintf(os.Stdout, "Response from `DashboardExtensionsSettingsMethodsApi.UpdateDashboardExtensionsServerSettings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateDashboardExtensionsServerSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 
 **tableauExtensionsDashboardV1ServerSettings** | [**TableauExtensionsDashboardV1ServerSettings**](TableauExtensionsDashboardV1ServerSettings.md) |  | 

### Return type

[**TableauExtensionsDashboardV1ServerSettings**](TableauExtensionsDashboardV1ServerSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.ServerSettings+json
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.ServerSettings+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateDashboardExtensionsSiteSettings

> TableauExtensionsDashboardV1SiteSettings UpdateDashboardExtensionsSiteSettings(ctx).XTableauAuth(xTableauAuth).TableauExtensionsDashboardV1SiteSettings(tableauExtensionsDashboardV1SiteSettings).Execute()

Update dashboard extension settings of site



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
    tableauExtensionsDashboardV1SiteSettings := *openapiclient.NewTableauExtensionsDashboardV1SiteSettings() // TableauExtensionsDashboardV1SiteSettings |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DashboardExtensionsSettingsMethodsApi.UpdateDashboardExtensionsSiteSettings(context.Background()).XTableauAuth(xTableauAuth).TableauExtensionsDashboardV1SiteSettings(tableauExtensionsDashboardV1SiteSettings).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DashboardExtensionsSettingsMethodsApi.UpdateDashboardExtensionsSiteSettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateDashboardExtensionsSiteSettings`: TableauExtensionsDashboardV1SiteSettings
    fmt.Fprintf(os.Stdout, "Response from `DashboardExtensionsSettingsMethodsApi.UpdateDashboardExtensionsSiteSettings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateDashboardExtensionsSiteSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **string** | The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | 
 **tableauExtensionsDashboardV1SiteSettings** | [**TableauExtensionsDashboardV1SiteSettings**](TableauExtensionsDashboardV1SiteSettings.md) |  | 

### Return type

[**TableauExtensionsDashboardV1SiteSettings**](TableauExtensionsDashboardV1SiteSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.SiteSettings+json
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.SiteSettings+json, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

