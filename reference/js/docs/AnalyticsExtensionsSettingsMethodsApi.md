# ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi

All URIs are relative to *https://10ax.online.tableau.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAnalyticsExtensionsConnection**](AnalyticsExtensionsSettingsMethodsApi.md#addAnalyticsExtensionsConnection) | **POST** /api/-/settings/site/extensions/analytics/connections | Add analytics extension connection to site
[**deleteAnalyticsExtensionsConnection**](AnalyticsExtensionsSettingsMethodsApi.md#deleteAnalyticsExtensionsConnection) | **DELETE** /api/-/settings/site/extensions/analytics/connections/{connection_luid} | Delete analytics extension connection from site
[**deleteConnectionFromWorkbook**](AnalyticsExtensionsSettingsMethodsApi.md#deleteConnectionFromWorkbook) | **DELETE** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection | Remove current analytics extension connection for workbook
[**getAnalyticsExtensionsConnection**](AnalyticsExtensionsSettingsMethodsApi.md#getAnalyticsExtensionsConnection) | **GET** /api/-/settings/site/extensions/analytics/connections/{connection_luid} | Get analytics extension details
[**getAnalyticsExtensionsConnections**](AnalyticsExtensionsSettingsMethodsApi.md#getAnalyticsExtensionsConnections) | **GET** /api/-/settings/site/extensions/analytics/connections | List analytics extension connections on site
[**getAnalyticsExtensionsServerSettings**](AnalyticsExtensionsSettingsMethodsApi.md#getAnalyticsExtensionsServerSettings) | **GET** /api/-/settings/server/extensions/analytics | Get enabled state of analytics extensions on server
[**getAnalyticsExtensionsSiteSettings**](AnalyticsExtensionsSettingsMethodsApi.md#getAnalyticsExtensionsSiteSettings) | **GET** /api/-/settings/site/extensions/analytics | Get enabled state of analytics extensions on site
[**getConnectionOptionsForWorkbook**](AnalyticsExtensionsSettingsMethodsApi.md#getConnectionOptionsForWorkbook) | **GET** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/connections | List analytics extension connections of workbook
[**getSelectedConnectionForWorkbook**](AnalyticsExtensionsSettingsMethodsApi.md#getSelectedConnectionForWorkbook) | **GET** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection | Get current analytics extension for workbook
[**updateAnalyticsExtensionsConnection**](AnalyticsExtensionsSettingsMethodsApi.md#updateAnalyticsExtensionsConnection) | **PUT** /api/-/settings/site/extensions/analytics/connections/{connection_luid} | Update analytics extension connection of site
[**updateAnalyticsExtensionsServerSettings**](AnalyticsExtensionsSettingsMethodsApi.md#updateAnalyticsExtensionsServerSettings) | **PUT** /api/-/settings/server/extensions/analytics | Enable/disable analytics extensions on server
[**updateAnalyticsExtensionsSiteSettings**](AnalyticsExtensionsSettingsMethodsApi.md#updateAnalyticsExtensionsSiteSettings) | **PUT** /api/-/settings/site/extensions/analytics | Update enabled state of analytics extensions on site
[**updateWorkbookWithConnection**](AnalyticsExtensionsSettingsMethodsApi.md#updateWorkbookWithConnection) | **PUT** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection | Update analytics extension for workbook



## addAnalyticsExtensionsConnection

> TableauAnalyticsextensionsV1ConnectionItem addAnalyticsExtensionsConnection(opts)

Add analytics extension connection to site

Adds a connection to an external service for analytics extensions on this site. Permissions - This method can be called by site and server administrators.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi();
let opts = {
  'xTableauAuth': "xTableauAuth_example", // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
  'tableauAnalyticsextensionsV1ConnectionItem': new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1ConnectionItem() // TableauAnalyticsextensionsV1ConnectionItem | 
};
apiInstance.addAnalyticsExtensionsConnection(opts, (error, data, response) => {
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
 **tableauAnalyticsextensionsV1ConnectionItem** | [**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md)|  | [optional] 

### Return type

[**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json, application/json


## deleteAnalyticsExtensionsConnection

> deleteAnalyticsExtensionsConnection(connectionLuid, opts)

Delete analytics extension connection from site

Deletes a specific analytics extension connection for an external service from a site. Permissions - This method can be called by site and server administrators.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi();
let connectionLuid = "connectionLuid_example"; // String | 
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.deleteAnalyticsExtensionsConnection(connectionLuid, opts, (error, data, response) => {
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
 **connectionLuid** | **String**|  | 
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 

### Return type

null (empty response body)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteConnectionFromWorkbook

> deleteConnectionFromWorkbook(workbookLuid, opts)

Remove current analytics extension connection for workbook

Remove the currently used analytics extension connection to an external service  from the specified workbook. The connection remains configured, and is available for further usage by the workbook. Permissions - This method can be called by users with authoring access to the workbook.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi();
let workbookLuid = "workbookLuid_example"; // String | 
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.deleteConnectionFromWorkbook(workbookLuid, opts, (error, data, response) => {
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
 **workbookLuid** | **String**|  | 
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 

### Return type

null (empty response body)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAnalyticsExtensionsConnection

> TableauAnalyticsextensionsV1ConnectionItem getAnalyticsExtensionsConnection(connectionLuid, opts)

Get analytics extension details

Get the details of a specified analytics extension connection to an external service. Permissions - This method can only be called by users with server or site administrator permissions.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi();
let connectionLuid = "connectionLuid_example"; // String | 
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.getAnalyticsExtensionsConnection(connectionLuid, opts, (error, data, response) => {
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
 **connectionLuid** | **String**|  | 
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 

### Return type

[**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json


## getAnalyticsExtensionsConnections

> TableauAnalyticsextensionsV1ConnectionList getAnalyticsExtensionsConnections(opts)

List analytics extension connections on site

Lists a site&#39;s analytics extension connections for external services. Permissions- This method can be called by site and server administrators.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi();
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.getAnalyticsExtensionsConnections(opts, (error, data, response) => {
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

[**TableauAnalyticsextensionsV1ConnectionList**](TableauAnalyticsextensionsV1ConnectionList.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionList+json, application/json


## getAnalyticsExtensionsServerSettings

> TableauAnalyticsextensionsV1ServerSettings getAnalyticsExtensionsServerSettings(opts)

Get enabled state of analytics extensions on server

Gets the enabled/disabled state of analytics extensions on a server. Permissions - This method can only be called by server administrators.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi();
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.getAnalyticsExtensionsServerSettings(opts, (error, data, response) => {
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

[**TableauAnalyticsextensionsV1ServerSettings**](TableauAnalyticsextensionsV1ServerSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ServerSettings+json, application/json


## getAnalyticsExtensionsSiteSettings

> TableauAnalyticsextensionsV1SiteSettings getAnalyticsExtensionsSiteSettings(opts)

Get enabled state of analytics extensions on site

Gets the enabled/disabled state of analytics extensions on a site. Permissions - This method can be called by site and server administrators.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi();
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.getAnalyticsExtensionsSiteSettings(opts, (error, data, response) => {
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

[**TableauAnalyticsextensionsV1SiteSettings**](TableauAnalyticsextensionsV1SiteSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.analyticsextensions.v1.SiteSettings+json, application/json


## getConnectionOptionsForWorkbook

> TableauAnalyticsextensionsV1ConnectionMetadataList getConnectionOptionsForWorkbook(workbookLuid, opts)

List analytics extension connections of workbook

Lists basic details of each analytics extension connection available for a specified workbook, including connection type and name. Permissions - This method can be called by users that have permissions to the specified workbook.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi();
let workbookLuid = "workbookLuid_example"; // String | 
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.getConnectionOptionsForWorkbook(workbookLuid, opts, (error, data, response) => {
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
 **workbookLuid** | **String**|  | 
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 

### Return type

[**TableauAnalyticsextensionsV1ConnectionMetadataList**](TableauAnalyticsextensionsV1ConnectionMetadataList.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionMetadataList+json


## getSelectedConnectionForWorkbook

> TableauAnalyticsextensionsV1ConnectionMetadata getSelectedConnectionForWorkbook(workbookLuid, opts)

Get current analytics extension for workbook

Gets basic details, including connection type and name, of the analytics extension connection to an external service that the specified workbook is currently using. Permissions - This method can be called by users with authoring access to the workbook.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi();
let workbookLuid = "workbookLuid_example"; // String | 
let opts = {
  'xTableauAuth': "xTableauAuth_example" // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
};
apiInstance.getSelectedConnectionForWorkbook(workbookLuid, opts, (error, data, response) => {
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
 **workbookLuid** | **String**|  | 
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 

### Return type

[**TableauAnalyticsextensionsV1ConnectionMetadata**](TableauAnalyticsextensionsV1ConnectionMetadata.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionMetadata+json


## updateAnalyticsExtensionsConnection

> TableauAnalyticsextensionsV1ConnectionItem updateAnalyticsExtensionsConnection(connectionLuid, opts)

Update analytics extension connection of site

Updates the details of specified analytics extension connection for an external service to a site. Permissions - This method can be called by site and server administrators.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi();
let connectionLuid = "connectionLuid_example"; // String | 
let opts = {
  'xTableauAuth': "xTableauAuth_example", // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
  'tableauAnalyticsextensionsV1ConnectionItem': new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1ConnectionItem() // TableauAnalyticsextensionsV1ConnectionItem | 
};
apiInstance.updateAnalyticsExtensionsConnection(connectionLuid, opts, (error, data, response) => {
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
 **connectionLuid** | **String**|  | 
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 
 **tableauAnalyticsextensionsV1ConnectionItem** | [**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md)|  | [optional] 

### Return type

[**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json, application/json


## updateAnalyticsExtensionsServerSettings

> TableauAnalyticsextensionsV1ServerSettings updateAnalyticsExtensionsServerSettings(opts)

Enable/disable analytics extensions on server

Enables or disables analytics extensions on a server. Permissions - This method can only be called by server administrators.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi();
let opts = {
  'xTableauAuth': "xTableauAuth_example", // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
  'tableauAnalyticsextensionsV1ServerSettings': new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1ServerSettings() // TableauAnalyticsextensionsV1ServerSettings | 
};
apiInstance.updateAnalyticsExtensionsServerSettings(opts, (error, data, response) => {
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
 **tableauAnalyticsextensionsV1ServerSettings** | [**TableauAnalyticsextensionsV1ServerSettings**](TableauAnalyticsextensionsV1ServerSettings.md)|  | [optional] 

### Return type

[**TableauAnalyticsextensionsV1ServerSettings**](TableauAnalyticsextensionsV1ServerSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.analyticsextensions.v1.ServerSettings+json
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ServerSettings+json, application/json


## updateAnalyticsExtensionsSiteSettings

> TableauAnalyticsextensionsV1SiteSettings updateAnalyticsExtensionsSiteSettings(opts)

Update enabled state of analytics extensions on site

Enables or disables analytics extensions on a site. Permissions - This method can be called by site and server administrators. Availability - This method is not available for Tableau Online.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi();
let opts = {
  'xTableauAuth': "xTableauAuth_example", // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
  'tableauAnalyticsextensionsV1SiteSettings': new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1SiteSettings() // TableauAnalyticsextensionsV1SiteSettings | 
};
apiInstance.updateAnalyticsExtensionsSiteSettings(opts, (error, data, response) => {
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
 **tableauAnalyticsextensionsV1SiteSettings** | [**TableauAnalyticsextensionsV1SiteSettings**](TableauAnalyticsextensionsV1SiteSettings.md)|  | [optional] 

### Return type

[**TableauAnalyticsextensionsV1SiteSettings**](TableauAnalyticsextensionsV1SiteSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.analyticsextensions.v1.SiteSettings+json
- **Accept**: application/vnd.tableau.analyticsextensions.v1.SiteSettings+json, application/json


## updateWorkbookWithConnection

> TableauAnalyticsextensionsV1ConnectionMapping updateWorkbookWithConnection(workbookLuid, opts)

Update analytics extension for workbook

Updates the analytics extension connection to external service currently used by a workbook. Permissions - This method can be called by users that have permissions to the specified workbook.

### Example

```javascript
import ApiReferenceForTableauResourceVersionedResTfulEndpoints from 'api_reference_for_tableau_resource_versioned_res_tful_endpoints';
let defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
let X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix = 'Token';

let apiInstance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi();
let workbookLuid = "workbookLuid_example"; // String | 
let opts = {
  'xTableauAuth': "xTableauAuth_example", // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
  'tableauAnalyticsextensionsV1ConnectionMapping': new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1ConnectionMapping() // TableauAnalyticsextensionsV1ConnectionMapping | 
};
apiInstance.updateWorkbookWithConnection(workbookLuid, opts, (error, data, response) => {
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
 **workbookLuid** | **String**|  | 
 **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] 
 **tableauAnalyticsextensionsV1ConnectionMapping** | [**TableauAnalyticsextensionsV1ConnectionMapping**](TableauAnalyticsextensionsV1ConnectionMapping.md)|  | [optional] 

### Return type

[**TableauAnalyticsextensionsV1ConnectionMapping**](TableauAnalyticsextensionsV1ConnectionMapping.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

- **Content-Type**: application/vnd.tableau.analyticsextensions.v1.ConnectionMapping+json
- **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionMapping+json

