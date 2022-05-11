# ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi

All URIs are relative to *https://10ax.online.tableau.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDashboardExtensionsBlockListItem**](DashboardExtensionsSettingsMethodsApi.md#createDashboardExtensionsBlockListItem) | **POST** /api/-/settings/server/extensions/dashboard/blockListItems | Block dashboard extension on server
[**createDashboardExtensionsSafeListItem**](DashboardExtensionsSettingsMethodsApi.md#createDashboardExtensionsSafeListItem) | **POST** /api/-/settings/site/extensions/dashboard/safeListItems | Allow dashboard extension on site
[**deleteDashboardExtensionsBlockListItem**](DashboardExtensionsSettingsMethodsApi.md#deleteDashboardExtensionsBlockListItem) | **DELETE** /api/-/settings/server/extensions/dashboard/blockListItems/{block_list_item_luid} | Unblock dashboard extension on server
[**deleteDashboardExtensionsSafeListItem**](DashboardExtensionsSettingsMethodsApi.md#deleteDashboardExtensionsSafeListItem) | **DELETE** /api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid} | Disallow dashboard extension on site
[**getDashboardExtensionsBlockListItem**](DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsBlockListItem) | **GET** /api/-/settings/server/extensions/dashboard/blockListItems/{block_list_item_luid} | Get blocked dashboard extension on server
[**getDashboardExtensionsBlockListItems**](DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsBlockListItems) | **GET** /api/-/settings/server/extensions/dashboard/blockListItems | List blocked dashboard extensions on server
[**getDashboardExtensionsSafeListItem**](DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsSafeListItem) | **GET** /api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid} | Get allowed dashboard extension on site
[**getDashboardExtensionsSafeListItems**](DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsSafeListItems) | **GET** /api/-/settings/site/extensions/dashboard/safeListItems | Lists allowed dashboard extensions on site
[**getDashboardExtensionsServerSettings**](DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsServerSettings) | **GET** /api/-/settings/server/extensions/dashboard | List dashboard extension settings of server
[**getDashboardExtensionsSiteSettings**](DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsSiteSettings) | **GET** /api/-/settings/site/extensions/dashboard | List dashboard extension settings of site
[**updateDashboardExtensionsSafeListItem**](DashboardExtensionsSettingsMethodsApi.md#updateDashboardExtensionsSafeListItem) | **PUT** /api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid} | Update settings for allowed dashboard extension on site
[**updateDashboardExtensionsServerSettings**](DashboardExtensionsSettingsMethodsApi.md#updateDashboardExtensionsServerSettings) | **PUT** /api/-/settings/server/extensions/dashboard | Update dashboard extensions settings of server
[**updateDashboardExtensionsSiteSettings**](DashboardExtensionsSettingsMethodsApi.md#updateDashboardExtensionsSiteSettings) | **PUT** /api/-/settings/site/extensions/dashboard | Update dashboard extension settings of site



## createDashboardExtensionsBlockListItem

> TableauExtensionsDashboardV1BlockListItem createDashboardExtensionsBlockListItem(opts)

Block dashboard extension on server

Adds a dashboard extension to the block list of a server. Permissions - This method can only be called by server administrators. Availability - Not available for Tableau Online.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi();
let opts = {
  'xTableauAuth': "xTableauAuth_example", // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
  'tableauExtensionsDashboardV1BlockListItem': new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1BlockListItem() // TableauExtensionsDashboardV1BlockListItem | 
};
apiInstance.createDashboardExtensionsBlockListItem(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 
 **tableauExtensionsDashboardV1BlockListItem** | [**TableauExtensionsDashboardV1BlockListItem**](TableauExtensionsDashboardV1BlockListItem.md)|  | [optional] 

### Return type

[**TableauExtensionsDashboardV1BlockListItem**](TableauExtensionsDashboardV1BlockListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.BlockListItem+json
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.BlockListItem+json, application/json


## createDashboardExtensionsSafeListItem

> TableauExtensionsDashboardV1SafeListItem createDashboardExtensionsSafeListItem(opts)

Allow dashboard extension on site

Adds a dashboard extension to the safe list the site you are signed into. Permissions - This method can be called by site and server administrators. Availability - Not available for Tableau Online.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi();
let opts = {
  'xTableauAuth': "xTableauAuth_example", // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
  'tableauExtensionsDashboardV1SafeListItem': new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1SafeListItem() // TableauExtensionsDashboardV1SafeListItem | 
};
apiInstance.createDashboardExtensionsSafeListItem(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 
 **tableauExtensionsDashboardV1SafeListItem** | [**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md)|  | [optional] 

### Return type

[**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json, application/json


## deleteDashboardExtensionsBlockListItem

> deleteDashboardExtensionsBlockListItem(blockListItemLuid, opts)

Unblock dashboard extension on server

Deletes a specific extension from the block list of a server. Permissions - This method can only be called by server administrators. Availability - Not available for Tableau Online.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi();
let blockListItemLuid = "blockListItemLuid_example"; // String | 
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.deleteDashboardExtensionsBlockListItem(blockListItemLuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockListItemLuid** | **String**|  | 
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 

### Return type

null (empty response body)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDashboardExtensionsSafeListItem

> deleteDashboardExtensionsSafeListItem(safeListItemLuid, opts)

Disallow dashboard extension on site

Deletes a specific dashboard extension from the safe list of the site you are signed into. Permissions - This method can be called by site and server administrators.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi();
let safeListItemLuid = "safeListItemLuid_example"; // String | 
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.deleteDashboardExtensionsSafeListItem(safeListItemLuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **safeListItemLuid** | **String**|  | 
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 

### Return type

null (empty response body)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDashboardExtensionsBlockListItem

> TableauExtensionsDashboardV1BlockListItem getDashboardExtensionsBlockListItem(blockListItemLuid, opts)

Get blocked dashboard extension on server

Gets the details of a specific dashboard extension on the blocked list of a server. Permissions - This method can only be called by server administrators. Availability - Not available for Tableau Online.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi();
let blockListItemLuid = "blockListItemLuid_example"; // String | 
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.getDashboardExtensionsBlockListItem(blockListItemLuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockListItemLuid** | **String**|  | 
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 

### Return type

[**TableauExtensionsDashboardV1BlockListItem**](TableauExtensionsDashboardV1BlockListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.BlockListItem+json, application/json


## getDashboardExtensionsBlockListItems

> TableauExtensionsDashboardV1BlockListItems getDashboardExtensionsBlockListItems(opts)

List blocked dashboard extensions on server

Lists the dashboard extensions on the blocked list of a server. Permissions - This method can only be called by server administrators. Availability - Not available for Tableau Online.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi();
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.getDashboardExtensionsBlockListItems(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 

### Return type

[**TableauExtensionsDashboardV1BlockListItems**](TableauExtensionsDashboardV1BlockListItems.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.BlockListItems+json, application/json


## getDashboardExtensionsSafeListItem

> TableauExtensionsDashboardV1SafeListItem getDashboardExtensionsSafeListItem(safeListItemLuid, opts)

Get allowed dashboard extension on site

Gets the details of a specific dashboard extension on the safe list of the site you are signed into. Permissions - This method can be called by site and server administrators.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi();
let safeListItemLuid = "safeListItemLuid_example"; // String | 
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.getDashboardExtensionsSafeListItem(safeListItemLuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **safeListItemLuid** | **String**|  | 
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 

### Return type

[**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json, application/json


## getDashboardExtensionsSafeListItems

> TableauExtensionsDashboardV1SafeListItems getDashboardExtensionsSafeListItems(opts)

Lists allowed dashboard extensions on site

Lists the dashboard extensions on the safe list of the site you are signed into. Permissions - This method can be called by site and server administrators.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi();
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.getDashboardExtensionsSafeListItems(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 

### Return type

[**TableauExtensionsDashboardV1SafeListItems**](TableauExtensionsDashboardV1SafeListItems.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.SafeListItems+json, application/json


## getDashboardExtensionsServerSettings

> TableauExtensionsDashboardV1ServerSettings getDashboardExtensionsServerSettings(opts)

List dashboard extension settings of server

Lists the dashboard extension settings of a server. Permissions - This method can only be called by server administrators. Availability - Not available for Tableau Online.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi();
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.getDashboardExtensionsServerSettings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 

### Return type

[**TableauExtensionsDashboardV1ServerSettings**](TableauExtensionsDashboardV1ServerSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.ServerSettings+json, application/json


## getDashboardExtensionsSiteSettings

> TableauExtensionsDashboardV1SiteSettings getDashboardExtensionsSiteSettings(opts)

List dashboard extension settings of site

Lists the dashboard extension settings of the site you are signed into. Permissions - This method can be called by site and server administrators.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi();
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.getDashboardExtensionsSiteSettings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 

### Return type

[**TableauExtensionsDashboardV1SiteSettings**](TableauExtensionsDashboardV1SiteSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.SiteSettings+json, application/json


## updateDashboardExtensionsSafeListItem

> TableauExtensionsDashboardV1SafeListItem updateDashboardExtensionsSafeListItem(safeListItemLuid, opts)

Update settings for allowed dashboard extension on site

Updates the settings of a specific dashboard extension in the safe list of the site you are signed into. Permissions - This method can be called by site and server administrators.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi();
let safeListItemLuid = null; // Object | 
let opts = {
  'xTableauAuth': "xTableauAuth_example", // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
  'tableauExtensionsDashboardV1SafeListItem': new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1SafeListItem() // TableauExtensionsDashboardV1SafeListItem | 
};
apiInstance.updateDashboardExtensionsSafeListItem(safeListItemLuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **safeListItemLuid** | [**Object**](.md)|  | 
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 
 **tableauExtensionsDashboardV1SafeListItem** | [**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md)|  | [optional] 

### Return type

[**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json, application/json


## updateDashboardExtensionsServerSettings

> TableauExtensionsDashboardV1ServerSettings updateDashboardExtensionsServerSettings(opts)

Update dashboard extensions settings of server

Updates the settings for dashboard extensions of a server. Permissions - This method can only be called by server administrators.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi();
let opts = {
  'xTableauAuth': "xTableauAuth_example", // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
  'tableauExtensionsDashboardV1ServerSettings': new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1ServerSettings() // TableauExtensionsDashboardV1ServerSettings | 
};
apiInstance.updateDashboardExtensionsServerSettings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 
 **tableauExtensionsDashboardV1ServerSettings** | [**TableauExtensionsDashboardV1ServerSettings**](TableauExtensionsDashboardV1ServerSettings.md)|  | [optional] 

### Return type

[**TableauExtensionsDashboardV1ServerSettings**](TableauExtensionsDashboardV1ServerSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.ServerSettings+json
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.ServerSettings+json, application/json


## updateDashboardExtensionsSiteSettings

> TableauExtensionsDashboardV1SiteSettings updateDashboardExtensionsSiteSettings(opts)

Update dashboard extension settings of site

Updates the settings for dashboard extensions for the site you are signed into. Permissions - This method can be called by site and server administrators.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi();
let opts = {
  'xTableauAuth': "xTableauAuth_example", // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
  'tableauExtensionsDashboardV1SiteSettings': new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1SiteSettings() // TableauExtensionsDashboardV1SiteSettings | 
};
apiInstance.updateDashboardExtensionsSiteSettings(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 
 **tableauExtensionsDashboardV1SiteSettings** | [**TableauExtensionsDashboardV1SiteSettings**](TableauExtensionsDashboardV1SiteSettings.md)|  | [optional] 

### Return type

[**TableauExtensionsDashboardV1SiteSettings**](TableauExtensionsDashboardV1SiteSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.SiteSettings+json
- **Accept**: application/vnd.tableau.extensions.dashboard.v1.SiteSettings+json, application/json

