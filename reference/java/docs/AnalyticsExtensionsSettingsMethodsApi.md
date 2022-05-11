# AnalyticsExtensionsSettingsMethodsApi

All URIs are relative to *https://10ax.online.tableau.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addAnalyticsExtensionsConnection**](AnalyticsExtensionsSettingsMethodsApi.md#addAnalyticsExtensionsConnection) | **POST** /api/-/settings/site/extensions/analytics/connections | Add analytics extension connection to site |
| [**deleteAnalyticsExtensionsConnection**](AnalyticsExtensionsSettingsMethodsApi.md#deleteAnalyticsExtensionsConnection) | **DELETE** /api/-/settings/site/extensions/analytics/connections/{connection_luid} | Delete analytics extension connection from site |
| [**deleteConnectionFromWorkbook**](AnalyticsExtensionsSettingsMethodsApi.md#deleteConnectionFromWorkbook) | **DELETE** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection | Remove current analytics extension connection for workbook |
| [**getAnalyticsExtensionsConnection**](AnalyticsExtensionsSettingsMethodsApi.md#getAnalyticsExtensionsConnection) | **GET** /api/-/settings/site/extensions/analytics/connections/{connection_luid} | Get analytics extension details |
| [**getAnalyticsExtensionsConnections**](AnalyticsExtensionsSettingsMethodsApi.md#getAnalyticsExtensionsConnections) | **GET** /api/-/settings/site/extensions/analytics/connections | List analytics extension connections on site |
| [**getAnalyticsExtensionsServerSettings**](AnalyticsExtensionsSettingsMethodsApi.md#getAnalyticsExtensionsServerSettings) | **GET** /api/-/settings/server/extensions/analytics | Get enabled state of analytics extensions on server |
| [**getAnalyticsExtensionsSiteSettings**](AnalyticsExtensionsSettingsMethodsApi.md#getAnalyticsExtensionsSiteSettings) | **GET** /api/-/settings/site/extensions/analytics | Get enabled state of analytics extensions on site |
| [**getConnectionOptionsForWorkbook**](AnalyticsExtensionsSettingsMethodsApi.md#getConnectionOptionsForWorkbook) | **GET** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/connections | List analytics extension connections of workbook |
| [**getSelectedConnectionForWorkbook**](AnalyticsExtensionsSettingsMethodsApi.md#getSelectedConnectionForWorkbook) | **GET** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection | Get current analytics extension for workbook |
| [**updateAnalyticsExtensionsConnection**](AnalyticsExtensionsSettingsMethodsApi.md#updateAnalyticsExtensionsConnection) | **PUT** /api/-/settings/site/extensions/analytics/connections/{connection_luid} | Update analytics extension connection of site |
| [**updateAnalyticsExtensionsServerSettings**](AnalyticsExtensionsSettingsMethodsApi.md#updateAnalyticsExtensionsServerSettings) | **PUT** /api/-/settings/server/extensions/analytics | Enable/disable analytics extensions on server |
| [**updateAnalyticsExtensionsSiteSettings**](AnalyticsExtensionsSettingsMethodsApi.md#updateAnalyticsExtensionsSiteSettings) | **PUT** /api/-/settings/site/extensions/analytics | Update enabled state of analytics extensions on site |
| [**updateWorkbookWithConnection**](AnalyticsExtensionsSettingsMethodsApi.md#updateWorkbookWithConnection) | **PUT** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection | Update analytics extension for workbook |


<a name="addAnalyticsExtensionsConnection"></a>
# **addAnalyticsExtensionsConnection**
> TableauAnalyticsextensionsV1ConnectionItem addAnalyticsExtensionsConnection(xTableauAuth, tableauAnalyticsextensionsV1ConnectionItem)

Add analytics extension connection to site

Adds a connection to an external service for analytics extensions on this site. Permissions - This method can be called by site and server administrators.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AnalyticsExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    AnalyticsExtensionsSettingsMethodsApi apiInstance = new AnalyticsExtensionsSettingsMethodsApi(defaultClient);
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    TableauAnalyticsextensionsV1ConnectionItem tableauAnalyticsextensionsV1ConnectionItem = new TableauAnalyticsextensionsV1ConnectionItem(); // TableauAnalyticsextensionsV1ConnectionItem | 
    try {
      TableauAnalyticsextensionsV1ConnectionItem result = apiInstance.addAnalyticsExtensionsConnection(xTableauAuth, tableauAnalyticsextensionsV1ConnectionItem);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AnalyticsExtensionsSettingsMethodsApi#addAnalyticsExtensionsConnection");
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
| **tableauAnalyticsextensionsV1ConnectionItem** | [**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md)|  | [optional] |

### Return type

[**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json
 - **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful. |  -  |
| **400** | Bad request. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |

<a name="deleteAnalyticsExtensionsConnection"></a>
# **deleteAnalyticsExtensionsConnection**
> deleteAnalyticsExtensionsConnection(connectionLuid, xTableauAuth)

Delete analytics extension connection from site

Deletes a specific analytics extension connection for an external service from a site. Permissions - This method can be called by site and server administrators.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AnalyticsExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    AnalyticsExtensionsSettingsMethodsApi apiInstance = new AnalyticsExtensionsSettingsMethodsApi(defaultClient);
    String connectionLuid = "connectionLuid_example"; // String | 
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      apiInstance.deleteAnalyticsExtensionsConnection(connectionLuid, xTableauAuth);
    } catch (ApiException e) {
      System.err.println("Exception when calling AnalyticsExtensionsSettingsMethodsApi#deleteAnalyticsExtensionsConnection");
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
| **connectionLuid** | **String**|  | |
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
| **204** | Successful. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |
| **404** | The connection does not exist. |  -  |

<a name="deleteConnectionFromWorkbook"></a>
# **deleteConnectionFromWorkbook**
> deleteConnectionFromWorkbook(workbookLuid, xTableauAuth)

Remove current analytics extension connection for workbook

Remove the currently used analytics extension connection to an external service  from the specified workbook. The connection remains configured, and is available for further usage by the workbook. Permissions - This method can be called by users with authoring access to the workbook.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AnalyticsExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    AnalyticsExtensionsSettingsMethodsApi apiInstance = new AnalyticsExtensionsSettingsMethodsApi(defaultClient);
    String workbookLuid = "workbookLuid_example"; // String | 
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      apiInstance.deleteConnectionFromWorkbook(workbookLuid, xTableauAuth);
    } catch (ApiException e) {
      System.err.println("Exception when calling AnalyticsExtensionsSettingsMethodsApi#deleteConnectionFromWorkbook");
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
| **workbookLuid** | **String**|  | |
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |

### Return type

null (empty response body)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Successful. |  -  |

<a name="getAnalyticsExtensionsConnection"></a>
# **getAnalyticsExtensionsConnection**
> TableauAnalyticsextensionsV1ConnectionItem getAnalyticsExtensionsConnection(connectionLuid, xTableauAuth)

Get analytics extension details

Get the details of a specified analytics extension connection to an external service. Permissions - This method can only be called by users with server or site administrator permissions.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AnalyticsExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    AnalyticsExtensionsSettingsMethodsApi apiInstance = new AnalyticsExtensionsSettingsMethodsApi(defaultClient);
    String connectionLuid = "connectionLuid_example"; // String | 
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      TableauAnalyticsextensionsV1ConnectionItem result = apiInstance.getAnalyticsExtensionsConnection(connectionLuid, xTableauAuth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AnalyticsExtensionsSettingsMethodsApi#getAnalyticsExtensionsConnection");
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
| **connectionLuid** | **String**|  | |
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |

### Return type

[**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |

<a name="getAnalyticsExtensionsConnections"></a>
# **getAnalyticsExtensionsConnections**
> TableauAnalyticsextensionsV1ConnectionList getAnalyticsExtensionsConnections(xTableauAuth)

List analytics extension connections on site

Lists a site&#39;s analytics extension connections for external services. Permissions- This method can be called by site and server administrators.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AnalyticsExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    AnalyticsExtensionsSettingsMethodsApi apiInstance = new AnalyticsExtensionsSettingsMethodsApi(defaultClient);
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      TableauAnalyticsextensionsV1ConnectionList result = apiInstance.getAnalyticsExtensionsConnections(xTableauAuth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AnalyticsExtensionsSettingsMethodsApi#getAnalyticsExtensionsConnections");
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

[**TableauAnalyticsextensionsV1ConnectionList**](TableauAnalyticsextensionsV1ConnectionList.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionList+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **400** | Bad Request. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |

<a name="getAnalyticsExtensionsServerSettings"></a>
# **getAnalyticsExtensionsServerSettings**
> TableauAnalyticsextensionsV1ServerSettings getAnalyticsExtensionsServerSettings(xTableauAuth)

Get enabled state of analytics extensions on server

Gets the enabled/disabled state of analytics extensions on a server. Permissions - This method can only be called by server administrators.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AnalyticsExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    AnalyticsExtensionsSettingsMethodsApi apiInstance = new AnalyticsExtensionsSettingsMethodsApi(defaultClient);
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      TableauAnalyticsextensionsV1ServerSettings result = apiInstance.getAnalyticsExtensionsServerSettings(xTableauAuth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AnalyticsExtensionsSettingsMethodsApi#getAnalyticsExtensionsServerSettings");
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

[**TableauAnalyticsextensionsV1ServerSettings**](TableauAnalyticsextensionsV1ServerSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.tableau.analyticsextensions.v1.ServerSettings+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server  permissions are required for this request. |  -  |

<a name="getAnalyticsExtensionsSiteSettings"></a>
# **getAnalyticsExtensionsSiteSettings**
> TableauAnalyticsextensionsV1SiteSettings getAnalyticsExtensionsSiteSettings(xTableauAuth)

Get enabled state of analytics extensions on site

Gets the enabled/disabled state of analytics extensions on a site. Permissions - This method can be called by site and server administrators.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AnalyticsExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    AnalyticsExtensionsSettingsMethodsApi apiInstance = new AnalyticsExtensionsSettingsMethodsApi(defaultClient);
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      TableauAnalyticsextensionsV1SiteSettings result = apiInstance.getAnalyticsExtensionsSiteSettings(xTableauAuth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AnalyticsExtensionsSettingsMethodsApi#getAnalyticsExtensionsSiteSettings");
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

[**TableauAnalyticsextensionsV1SiteSettings**](TableauAnalyticsextensionsV1SiteSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.tableau.analyticsextensions.v1.SiteSettings+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |

<a name="getConnectionOptionsForWorkbook"></a>
# **getConnectionOptionsForWorkbook**
> TableauAnalyticsextensionsV1ConnectionMetadataList getConnectionOptionsForWorkbook(workbookLuid, xTableauAuth)

List analytics extension connections of workbook

Lists basic details of each analytics extension connection available for a specified workbook, including connection type and name. Permissions - This method can be called by users that have permissions to the specified workbook.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AnalyticsExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    AnalyticsExtensionsSettingsMethodsApi apiInstance = new AnalyticsExtensionsSettingsMethodsApi(defaultClient);
    String workbookLuid = "workbookLuid_example"; // String | 
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      TableauAnalyticsextensionsV1ConnectionMetadataList result = apiInstance.getConnectionOptionsForWorkbook(workbookLuid, xTableauAuth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AnalyticsExtensionsSettingsMethodsApi#getConnectionOptionsForWorkbook");
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
| **workbookLuid** | **String**|  | |
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |

### Return type

[**TableauAnalyticsextensionsV1ConnectionMetadataList**](TableauAnalyticsextensionsV1ConnectionMetadataList.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionMetadataList+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |

<a name="getSelectedConnectionForWorkbook"></a>
# **getSelectedConnectionForWorkbook**
> TableauAnalyticsextensionsV1ConnectionMetadata getSelectedConnectionForWorkbook(workbookLuid, xTableauAuth)

Get current analytics extension for workbook

Gets basic details, including connection type and name, of the analytics extension connection to an external service that the specified workbook is currently using. Permissions - This method can be called by users with authoring access to the workbook.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AnalyticsExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    AnalyticsExtensionsSettingsMethodsApi apiInstance = new AnalyticsExtensionsSettingsMethodsApi(defaultClient);
    String workbookLuid = "workbookLuid_example"; // String | 
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    try {
      TableauAnalyticsextensionsV1ConnectionMetadata result = apiInstance.getSelectedConnectionForWorkbook(workbookLuid, xTableauAuth);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AnalyticsExtensionsSettingsMethodsApi#getSelectedConnectionForWorkbook");
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
| **workbookLuid** | **String**|  | |
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |

### Return type

[**TableauAnalyticsextensionsV1ConnectionMetadata**](TableauAnalyticsextensionsV1ConnectionMetadata.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionMetadata+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |

<a name="updateAnalyticsExtensionsConnection"></a>
# **updateAnalyticsExtensionsConnection**
> TableauAnalyticsextensionsV1ConnectionItem updateAnalyticsExtensionsConnection(connectionLuid, xTableauAuth, tableauAnalyticsextensionsV1ConnectionItem)

Update analytics extension connection of site

Updates the details of specified analytics extension connection for an external service to a site. Permissions - This method can be called by site and server administrators.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AnalyticsExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    AnalyticsExtensionsSettingsMethodsApi apiInstance = new AnalyticsExtensionsSettingsMethodsApi(defaultClient);
    String connectionLuid = "connectionLuid_example"; // String | 
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    TableauAnalyticsextensionsV1ConnectionItem tableauAnalyticsextensionsV1ConnectionItem = new TableauAnalyticsextensionsV1ConnectionItem(); // TableauAnalyticsextensionsV1ConnectionItem | 
    try {
      TableauAnalyticsextensionsV1ConnectionItem result = apiInstance.updateAnalyticsExtensionsConnection(connectionLuid, xTableauAuth, tableauAnalyticsextensionsV1ConnectionItem);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AnalyticsExtensionsSettingsMethodsApi#updateAnalyticsExtensionsConnection");
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
| **connectionLuid** | **String**|  | |
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |
| **tableauAnalyticsextensionsV1ConnectionItem** | [**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md)|  | [optional] |

### Return type

[**TableauAnalyticsextensionsV1ConnectionItem**](TableauAnalyticsextensionsV1ConnectionItem.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json
 - **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **400** | Bad request. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |
| **404** | The connection does not exist. |  -  |

<a name="updateAnalyticsExtensionsServerSettings"></a>
# **updateAnalyticsExtensionsServerSettings**
> TableauAnalyticsextensionsV1ServerSettings updateAnalyticsExtensionsServerSettings(xTableauAuth, tableauAnalyticsextensionsV1ServerSettings)

Enable/disable analytics extensions on server

Enables or disables analytics extensions on a server. Permissions - This method can only be called by server administrators.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AnalyticsExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    AnalyticsExtensionsSettingsMethodsApi apiInstance = new AnalyticsExtensionsSettingsMethodsApi(defaultClient);
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    TableauAnalyticsextensionsV1ServerSettings tableauAnalyticsextensionsV1ServerSettings = new TableauAnalyticsextensionsV1ServerSettings(); // TableauAnalyticsextensionsV1ServerSettings | 
    try {
      TableauAnalyticsextensionsV1ServerSettings result = apiInstance.updateAnalyticsExtensionsServerSettings(xTableauAuth, tableauAnalyticsextensionsV1ServerSettings);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AnalyticsExtensionsSettingsMethodsApi#updateAnalyticsExtensionsServerSettings");
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
| **tableauAnalyticsextensionsV1ServerSettings** | [**TableauAnalyticsextensionsV1ServerSettings**](TableauAnalyticsextensionsV1ServerSettings.md)|  | [optional] |

### Return type

[**TableauAnalyticsextensionsV1ServerSettings**](TableauAnalyticsextensionsV1ServerSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: application/vnd.tableau.analyticsextensions.v1.ServerSettings+json
 - **Accept**: application/vnd.tableau.analyticsextensions.v1.ServerSettings+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server  permissions are required for this request. |  -  |

<a name="updateAnalyticsExtensionsSiteSettings"></a>
# **updateAnalyticsExtensionsSiteSettings**
> TableauAnalyticsextensionsV1SiteSettings updateAnalyticsExtensionsSiteSettings(xTableauAuth, tableauAnalyticsextensionsV1SiteSettings)

Update enabled state of analytics extensions on site

Enables or disables analytics extensions on a site. Permissions - This method can be called by site and server administrators. Availability - This method is not available for Tableau Online.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AnalyticsExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    AnalyticsExtensionsSettingsMethodsApi apiInstance = new AnalyticsExtensionsSettingsMethodsApi(defaultClient);
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    TableauAnalyticsextensionsV1SiteSettings tableauAnalyticsextensionsV1SiteSettings = new TableauAnalyticsextensionsV1SiteSettings(); // TableauAnalyticsextensionsV1SiteSettings | 
    try {
      TableauAnalyticsextensionsV1SiteSettings result = apiInstance.updateAnalyticsExtensionsSiteSettings(xTableauAuth, tableauAnalyticsextensionsV1SiteSettings);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AnalyticsExtensionsSettingsMethodsApi#updateAnalyticsExtensionsSiteSettings");
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
| **tableauAnalyticsextensionsV1SiteSettings** | [**TableauAnalyticsextensionsV1SiteSettings**](TableauAnalyticsextensionsV1SiteSettings.md)|  | [optional] |

### Return type

[**TableauAnalyticsextensionsV1SiteSettings**](TableauAnalyticsextensionsV1SiteSettings.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: application/vnd.tableau.analyticsextensions.v1.SiteSettings+json
 - **Accept**: application/vnd.tableau.analyticsextensions.v1.SiteSettings+json, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |
| **401** | User could not be authenticated |  -  |
| **403** | Server or site administrator permissions are required for this request. |  -  |

<a name="updateWorkbookWithConnection"></a>
# **updateWorkbookWithConnection**
> TableauAnalyticsextensionsV1ConnectionMapping updateWorkbookWithConnection(workbookLuid, xTableauAuth, tableauAnalyticsextensionsV1ConnectionMapping)

Update analytics extension for workbook

Updates the analytics extension connection to external service currently used by a workbook. Permissions - This method can be called by users that have permissions to the specified workbook.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AnalyticsExtensionsSettingsMethodsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://10ax.online.tableau.com");
    
    // Configure API key authorization: X-Tableau-Auth
    ApiKeyAuth X-Tableau-Auth = (ApiKeyAuth) defaultClient.getAuthentication("X-Tableau-Auth");
    X-Tableau-Auth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //X-Tableau-Auth.setApiKeyPrefix("Token");

    AnalyticsExtensionsSettingsMethodsApi apiInstance = new AnalyticsExtensionsSettingsMethodsApi(defaultClient);
    String workbookLuid = "workbookLuid_example"; // String | 
    String xTableauAuth = "xTableauAuth_example"; // String | The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
    TableauAnalyticsextensionsV1ConnectionMapping tableauAnalyticsextensionsV1ConnectionMapping = new TableauAnalyticsextensionsV1ConnectionMapping(); // TableauAnalyticsextensionsV1ConnectionMapping | 
    try {
      TableauAnalyticsextensionsV1ConnectionMapping result = apiInstance.updateWorkbookWithConnection(workbookLuid, xTableauAuth, tableauAnalyticsextensionsV1ConnectionMapping);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AnalyticsExtensionsSettingsMethodsApi#updateWorkbookWithConnection");
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
| **workbookLuid** | **String**|  | |
| **xTableauAuth** | **String**| The Tableau authentication header. The value is a credentials token from a Tableau server&#39;s response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning). | [optional] |
| **tableauAnalyticsextensionsV1ConnectionMapping** | [**TableauAnalyticsextensionsV1ConnectionMapping**](TableauAnalyticsextensionsV1ConnectionMapping.md)|  | [optional] |

### Return type

[**TableauAnalyticsextensionsV1ConnectionMapping**](TableauAnalyticsextensionsV1ConnectionMapping.md)

### Authorization

[X-Tableau-Auth](../README.md#X-Tableau-Auth)

### HTTP request headers

 - **Content-Type**: application/vnd.tableau.analyticsextensions.v1.ConnectionMapping+json
 - **Accept**: application/vnd.tableau.analyticsextensions.v1.ConnectionMapping+json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful. |  -  |

