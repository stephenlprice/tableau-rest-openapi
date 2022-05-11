# DashboardExtensionsSettingsMethodsApi

All URIs are relative to *https://10ax.online.tableau.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createDashboardExtensionsBlockListItem**](DashboardExtensionsSettingsMethodsApi.md#createDashboardExtensionsBlockListItem) | **POST** /api/-/settings/server/extensions/dashboard/blockListItems | Block dashboard extension on server |
| [**createDashboardExtensionsSafeListItem**](DashboardExtensionsSettingsMethodsApi.md#createDashboardExtensionsSafeListItem) | **POST** /api/-/settings/site/extensions/dashboard/safeListItems | Allow dashboard extension on site |
| [**deleteDashboardExtensionsBlockListItem**](DashboardExtensionsSettingsMethodsApi.md#deleteDashboardExtensionsBlockListItem) | **DELETE** /api/-/settings/server/extensions/dashboard/blockListItems/{block_list_item_luid} | Unblock dashboard extension on server |
| [**deleteDashboardExtensionsSafeListItem**](DashboardExtensionsSettingsMethodsApi.md#deleteDashboardExtensionsSafeListItem) | **DELETE** /api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid} | Disallow dashboard extension on site |
| [**getDashboardExtensionsBlockListItem**](DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsBlockListItem) | **GET** /api/-/settings/server/extensions/dashboard/blockListItems/{block_list_item_luid} | Get blocked dashboard extension on server |
| [**getDashboardExtensionsBlockListItems**](DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsBlockListItems) | **GET** /api/-/settings/server/extensions/dashboard/blockListItems | List blocked dashboard extensions on server |
| [**getDashboardExtensionsSafeListItem**](DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsSafeListItem) | **GET** /api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid} | Get allowed dashboard extension on site |
| [**getDashboardExtensionsSafeListItems**](DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsSafeListItems) | **GET** /api/-/settings/site/extensions/dashboard/safeListItems | Lists allowed dashboard extensions on site |
| [**getDashboardExtensionsServerSettings**](DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsServerSettings) | **GET** /api/-/settings/server/extensions/dashboard | List dashboard extension settings of server |
| [**getDashboardExtensionsSiteSettings**](DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsSiteSettings) | **GET** /api/-/settings/site/extensions/dashboard | List dashboard extension settings of site |
| [**updateDashboardExtensionsSafeListItem**](DashboardExtensionsSettingsMethodsApi.md#updateDashboardExtensionsSafeListItem) | **PUT** /api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid} | Update settings for allowed dashboard extension on site |
| [**updateDashboardExtensionsServerSettings**](DashboardExtensionsSettingsMethodsApi.md#updateDashboardExtensionsServerSettings) | **PUT** /api/-/settings/server/extensions/dashboard | Update dashboard extensions settings of server |
| [**updateDashboardExtensionsSiteSettings**](DashboardExtensionsSettingsMethodsApi.md#updateDashboardExtensionsSiteSettings) | **PUT** /api/-/settings/site/extensions/dashboard | Update dashboard extension settings of site |


<a name="createDashboardExtensionsBlockListItem"></a>
# **createDashboardExtensionsBlockListItem**
> TableauExtensionsDashboardV1BlockListItem createDashboardExtensionsBlockListItem(xTableauAuth, tableauExtensionsDashboardV1BlockListItem)

Block dashboard extension on server

Adds a dashboard extension to the block list of a server. Permissions - This method can only be called by server administrators. Availability - Not available for Tableau Online.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DashboardExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    DashboardExtensionsSettingsMethodsApi apiInstance = new DashboardExtensionsSettingsMethodsApi(defaultClient);
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    TableauExtensionsDashboardV1BlockListItem tableauExtensionsDashboardV1BlockListItem = new TableauExtensionsDashboardV1BlockListItem(); // TableauExtensionsDashboardV1BlockListItem | 
    try {
      TableauExtensionsDashboardV1BlockListItem result = apiInstance.createDashboardExtensionsBlockListItem(xTableauAuth, tableauExtensionsDashboardV1BlockListItem);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DashboardExtensionsSettingsMethodsApi#createDashboardExtensionsBlockListItem");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |
| **tableauExtensionsDashboardV1BlockListItem** | [**TableauExtensionsDashboardV1BlockListItem**](TableauExtensionsDashboardV1BlockListItem.md)|  | [optional] |

### Return type

[**TableauExtensionsDashboardV1BlockListItem**](TableauExtensionsDashboardV1BlockListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.BlockListItem+json
 - **Accept**: application/vnd.tableau.extensions.dashboard.v1.BlockListItem+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **400** | The request body is malformed. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |

<a name="createDashboardExtensionsSafeListItem"></a>
# **createDashboardExtensionsSafeListItem**
> TableauExtensionsDashboardV1SafeListItem createDashboardExtensionsSafeListItem(xTableauAuth, tableauExtensionsDashboardV1SafeListItem)

Allow dashboard extension on site

Adds a dashboard extension to the safe list the site you are signed into. Permissions - This method can be called by site and server administrators. Availability - Not available for Tableau Online.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DashboardExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    DashboardExtensionsSettingsMethodsApi apiInstance = new DashboardExtensionsSettingsMethodsApi(defaultClient);
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    TableauExtensionsDashboardV1SafeListItem tableauExtensionsDashboardV1SafeListItem = new TableauExtensionsDashboardV1SafeListItem(); // TableauExtensionsDashboardV1SafeListItem | 
    try {
      TableauExtensionsDashboardV1SafeListItem result = apiInstance.createDashboardExtensionsSafeListItem(xTableauAuth, tableauExtensionsDashboardV1SafeListItem);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DashboardExtensionsSettingsMethodsApi#createDashboardExtensionsSafeListItem");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |
| **tableauExtensionsDashboardV1SafeListItem** | [**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md)|  | [optional] |

### Return type

[**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json
 - **Accept**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **400** | The request body is malformed. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |

<a name="deleteDashboardExtensionsBlockListItem"></a>
# **deleteDashboardExtensionsBlockListItem**
> deleteDashboardExtensionsBlockListItem(blockListItemLuid, xTableauAuth)

Unblock dashboard extension on server

Deletes a specific extension from the block list of a server. Permissions - This method can only be called by server administrators. Availability - Not available for Tableau Online.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DashboardExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    DashboardExtensionsSettingsMethodsApi apiInstance = new DashboardExtensionsSettingsMethodsApi(defaultClient);
    String blockListItemLuid = "blockListItemLuid_example"; // String | 
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      apiInstance.deleteDashboardExtensionsBlockListItem(blockListItemLuid, xTableauAuth);
    } catch (ApiException e) {
      System.err.println("Exception when calling DashboardExtensionsSettingsMethodsApi#deleteDashboardExtensionsBlockListItem");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **blockListItemLuid** | **String**|  | |
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |

### Return type

null (empty response body)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |
| **404** | Unable to find a block list item with given LUID. |  -  |

<a name="deleteDashboardExtensionsSafeListItem"></a>
# **deleteDashboardExtensionsSafeListItem**
> deleteDashboardExtensionsSafeListItem(safeListItemLuid, xTableauAuth)

Disallow dashboard extension on site

Deletes a specific dashboard extension from the safe list of the site you are signed into. Permissions - This method can be called by site and server administrators.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DashboardExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    DashboardExtensionsSettingsMethodsApi apiInstance = new DashboardExtensionsSettingsMethodsApi(defaultClient);
    String safeListItemLuid = "safeListItemLuid_example"; // String | 
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      apiInstance.deleteDashboardExtensionsSafeListItem(safeListItemLuid, xTableauAuth);
    } catch (ApiException e) {
      System.err.println("Exception when calling DashboardExtensionsSettingsMethodsApi#deleteDashboardExtensionsSafeListItem");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **safeListItemLuid** | **String**|  | |
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |

### Return type

null (empty response body)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |
| **404** | Unable to find a safe list item with given LUID. |  -  |

<a name="getDashboardExtensionsBlockListItem"></a>
# **getDashboardExtensionsBlockListItem**
> TableauExtensionsDashboardV1BlockListItem getDashboardExtensionsBlockListItem(blockListItemLuid, xTableauAuth)

Get blocked dashboard extension on server

Gets the details of a specific dashboard extension on the blocked list of a server. Permissions - This method can only be called by server administrators. Availability - Not available for Tableau Online.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DashboardExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    DashboardExtensionsSettingsMethodsApi apiInstance = new DashboardExtensionsSettingsMethodsApi(defaultClient);
    String blockListItemLuid = "blockListItemLuid_example"; // String | 
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      TableauExtensionsDashboardV1BlockListItem result = apiInstance.getDashboardExtensionsBlockListItem(blockListItemLuid, xTableauAuth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DashboardExtensionsSettingsMethodsApi#getDashboardExtensionsBlockListItem");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **blockListItemLuid** | **String**|  | |
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |

### Return type

[**TableauExtensionsDashboardV1BlockListItem**](TableauExtensionsDashboardV1BlockListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.tableau.extensions.dashboard.v1.BlockListItem+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |
| **404** | Unable to find a block list item with given LUID. |  -  |

<a name="getDashboardExtensionsBlockListItems"></a>
# **getDashboardExtensionsBlockListItems**
> TableauExtensionsDashboardV1BlockListItems getDashboardExtensionsBlockListItems(xTableauAuth)

List blocked dashboard extensions on server

Lists the dashboard extensions on the blocked list of a server. Permissions - This method can only be called by server administrators. Availability - Not available for Tableau Online.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DashboardExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    DashboardExtensionsSettingsMethodsApi apiInstance = new DashboardExtensionsSettingsMethodsApi(defaultClient);
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      TableauExtensionsDashboardV1BlockListItems result = apiInstance.getDashboardExtensionsBlockListItems(xTableauAuth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DashboardExtensionsSettingsMethodsApi#getDashboardExtensionsBlockListItems");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |

### Return type

[**TableauExtensionsDashboardV1BlockListItems**](TableauExtensionsDashboardV1BlockListItems.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.tableau.extensions.dashboard.v1.BlockListItems+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |

<a name="getDashboardExtensionsSafeListItem"></a>
# **getDashboardExtensionsSafeListItem**
> TableauExtensionsDashboardV1SafeListItem getDashboardExtensionsSafeListItem(safeListItemLuid, xTableauAuth)

Get allowed dashboard extension on site

Gets the details of a specific dashboard extension on the safe list of the site you are signed into. Permissions - This method can be called by site and server administrators.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DashboardExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    DashboardExtensionsSettingsMethodsApi apiInstance = new DashboardExtensionsSettingsMethodsApi(defaultClient);
    String safeListItemLuid = "safeListItemLuid_example"; // String | 
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      TableauExtensionsDashboardV1SafeListItem result = apiInstance.getDashboardExtensionsSafeListItem(safeListItemLuid, xTableauAuth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DashboardExtensionsSettingsMethodsApi#getDashboardExtensionsSafeListItem");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **safeListItemLuid** | **String**|  | |
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |

### Return type

[**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |
| **404** | Unable to find a safe list item with given LUID. |  -  |

<a name="getDashboardExtensionsSafeListItems"></a>
# **getDashboardExtensionsSafeListItems**
> TableauExtensionsDashboardV1SafeListItems getDashboardExtensionsSafeListItems(xTableauAuth)

Lists allowed dashboard extensions on site

Lists the dashboard extensions on the safe list of the site you are signed into. Permissions - This method can be called by site and server administrators.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DashboardExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    DashboardExtensionsSettingsMethodsApi apiInstance = new DashboardExtensionsSettingsMethodsApi(defaultClient);
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      TableauExtensionsDashboardV1SafeListItems result = apiInstance.getDashboardExtensionsSafeListItems(xTableauAuth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DashboardExtensionsSettingsMethodsApi#getDashboardExtensionsSafeListItems");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |

### Return type

[**TableauExtensionsDashboardV1SafeListItems**](TableauExtensionsDashboardV1SafeListItems.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.tableau.extensions.dashboard.v1.SafeListItems+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |

<a name="getDashboardExtensionsServerSettings"></a>
# **getDashboardExtensionsServerSettings**
> TableauExtensionsDashboardV1ServerSettings getDashboardExtensionsServerSettings(xTableauAuth)

List dashboard extension settings of server

Lists the dashboard extension settings of a server. Permissions - This method can only be called by server administrators. Availability - Not available for Tableau Online.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DashboardExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    DashboardExtensionsSettingsMethodsApi apiInstance = new DashboardExtensionsSettingsMethodsApi(defaultClient);
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      TableauExtensionsDashboardV1ServerSettings result = apiInstance.getDashboardExtensionsServerSettings(xTableauAuth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DashboardExtensionsSettingsMethodsApi#getDashboardExtensionsServerSettings");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |

### Return type

[**TableauExtensionsDashboardV1ServerSettings**](TableauExtensionsDashboardV1ServerSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.tableau.extensions.dashboard.v1.ServerSettings+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **400** | The request body is malformed. |  -  |
| **401** | User could not be authenticated. |  -  |
| **403** | Server  permissions are required for this request. |  -  |

<a name="getDashboardExtensionsSiteSettings"></a>
# **getDashboardExtensionsSiteSettings**
> TableauExtensionsDashboardV1SiteSettings getDashboardExtensionsSiteSettings(xTableauAuth)

List dashboard extension settings of site

Lists the dashboard extension settings of the site you are signed into. Permissions - This method can be called by site and server administrators.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DashboardExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    DashboardExtensionsSettingsMethodsApi apiInstance = new DashboardExtensionsSettingsMethodsApi(defaultClient);
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      TableauExtensionsDashboardV1SiteSettings result = apiInstance.getDashboardExtensionsSiteSettings(xTableauAuth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DashboardExtensionsSettingsMethodsApi#getDashboardExtensionsSiteSettings");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |

### Return type

[**TableauExtensionsDashboardV1SiteSettings**](TableauExtensionsDashboardV1SiteSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.tableau.extensions.dashboard.v1.SiteSettings+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |

<a name="updateDashboardExtensionsSafeListItem"></a>
# **updateDashboardExtensionsSafeListItem**
> TableauExtensionsDashboardV1SafeListItem updateDashboardExtensionsSafeListItem(safeListItemLuid, xTableauAuth, tableauExtensionsDashboardV1SafeListItem)

Update settings for allowed dashboard extension on site

Updates the settings of a specific dashboard extension in the safe list of the site you are signed into. Permissions - This method can be called by site and server administrators.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DashboardExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    DashboardExtensionsSettingsMethodsApi apiInstance = new DashboardExtensionsSettingsMethodsApi(defaultClient);
    Object safeListItemLuid = null; // Object | 
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    TableauExtensionsDashboardV1SafeListItem tableauExtensionsDashboardV1SafeListItem = new TableauExtensionsDashboardV1SafeListItem(); // TableauExtensionsDashboardV1SafeListItem | 
    try {
      TableauExtensionsDashboardV1SafeListItem result = apiInstance.updateDashboardExtensionsSafeListItem(safeListItemLuid, xTableauAuth, tableauExtensionsDashboardV1SafeListItem);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DashboardExtensionsSettingsMethodsApi#updateDashboardExtensionsSafeListItem");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **safeListItemLuid** | [**Object**](.md)|  | |
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |
| **tableauExtensionsDashboardV1SafeListItem** | [**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md)|  | [optional] |

### Return type

[**TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json
 - **Accept**: application/vnd.tableau.extensions.dashboard.v1.SafeListItem+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |
| **404** | Unable to find a safe list item with given LUID. |  -  |

<a name="updateDashboardExtensionsServerSettings"></a>
# **updateDashboardExtensionsServerSettings**
> TableauExtensionsDashboardV1ServerSettings updateDashboardExtensionsServerSettings(xTableauAuth, tableauExtensionsDashboardV1ServerSettings)

Update dashboard extensions settings of server

Updates the settings for dashboard extensions of a server. Permissions - This method can only be called by server administrators.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DashboardExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    DashboardExtensionsSettingsMethodsApi apiInstance = new DashboardExtensionsSettingsMethodsApi(defaultClient);
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    TableauExtensionsDashboardV1ServerSettings tableauExtensionsDashboardV1ServerSettings = new TableauExtensionsDashboardV1ServerSettings(); // TableauExtensionsDashboardV1ServerSettings | 
    try {
      TableauExtensionsDashboardV1ServerSettings result = apiInstance.updateDashboardExtensionsServerSettings(xTableauAuth, tableauExtensionsDashboardV1ServerSettings);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DashboardExtensionsSettingsMethodsApi#updateDashboardExtensionsServerSettings");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |
| **tableauExtensionsDashboardV1ServerSettings** | [**TableauExtensionsDashboardV1ServerSettings**](TableauExtensionsDashboardV1ServerSettings.md)|  | [optional] |

### Return type

[**TableauExtensionsDashboardV1ServerSettings**](TableauExtensionsDashboardV1ServerSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.ServerSettings+json
 - **Accept**: application/vnd.tableau.extensions.dashboard.v1.ServerSettings+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **401** | User could not be authenticated. |  -  |
| **403** | Server  permissions are required for this request. |  -  |

<a name="updateDashboardExtensionsSiteSettings"></a>
# **updateDashboardExtensionsSiteSettings**
> TableauExtensionsDashboardV1SiteSettings updateDashboardExtensionsSiteSettings(xTableauAuth, tableauExtensionsDashboardV1SiteSettings)

Update dashboard extension settings of site

Updates the settings for dashboard extensions for the site you are signed into. Permissions - This method can be called by site and server administrators.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DashboardExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    DashboardExtensionsSettingsMethodsApi apiInstance = new DashboardExtensionsSettingsMethodsApi(defaultClient);
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    TableauExtensionsDashboardV1SiteSettings tableauExtensionsDashboardV1SiteSettings = new TableauExtensionsDashboardV1SiteSettings(); // TableauExtensionsDashboardV1SiteSettings | 
    try {
      TableauExtensionsDashboardV1SiteSettings result = apiInstance.updateDashboardExtensionsSiteSettings(xTableauAuth, tableauExtensionsDashboardV1SiteSettings);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DashboardExtensionsSettingsMethodsApi#updateDashboardExtensionsSiteSettings");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |
| **tableauExtensionsDashboardV1SiteSettings** | [**TableauExtensionsDashboardV1SiteSettings**](TableauExtensionsDashboardV1SiteSettings.md)|  | [optional] |

### Return type

[**TableauExtensionsDashboardV1SiteSettings**](TableauExtensionsDashboardV1SiteSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: application/vnd.tableau.extensions.dashboard.v1.SiteSettings+json
 - **Accept**: application/vnd.tableau.extensions.dashboard.v1.SiteSettings+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **400** | The request body is malformed. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |

