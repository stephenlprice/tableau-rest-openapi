# api_reference_for_tableau_resource_versioned_res_tful_endpoints

ApiReferenceForTableauResourceVersionedResTfulEndpoints - JavaScript client for api_reference_for_tableau_resource_versioned_res_tful_endpoints
>The following OpenAPI documentation describes the details of the new Tableau RESTful APIs. A growing number of these are  being released alongside more than 150 [classic REST endpoints](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref.htm)  that are currently in wide usage in the Tableau community. 

 >There are some differences users of the classic endpoints will recognize when viewing these new endpoints. Request bodies for these new REST endpoints must  be formatted using JSON. Endpoint URIs don't contain an API version number. For more information, see  [REST API and Resource Versions](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm).
 
![tableau platform](https://github.com/stephenlprice/tableau-rest-openapi/blob/main/assets/images/tableau-platform.png?raw=true)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2021.2
- Package version: 2021.2
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://stelloprint.stoplight.io/](https://stelloprint.stoplight.io/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install api_reference_for_tableau_resource_versioned_res_tful_endpoints --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your api_reference_for_tableau_resource_versioned_res_tful_endpoints from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ApiReferenceForTableauResourceVersionedResTfulEndpoints = require('api_reference_for_tableau_resource_versioned_res_tful_endpoints');

var defaultClient = ApiReferenceForTableauResourceVersionedResTfulEndpoints.ApiClient.instance;
// Configure API key authorization: X-Tableau-Auth
var X-Tableau-Auth = defaultClient.authentications['X-Tableau-Auth'];
X-Tableau-Auth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Tableau-Auth.apiKeyPrefix['X-Tableau-Auth'] = "Token"

var api = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi()
var opts = {
  'xTableauAuth': "xTableauAuth_example", // {String} The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
  'tableauAnalyticsextensionsV1ConnectionItem': new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1ConnectionItem() // {TableauAnalyticsextensionsV1ConnectionItem} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addAnalyticsExtensionsConnection(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://10ax.online.tableau.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi* | [**addAnalyticsExtensionsConnection**](docs/AnalyticsExtensionsSettingsMethodsApi.md#addAnalyticsExtensionsConnection) | **POST** /api/-/settings/site/extensions/analytics/connections | Add analytics extension connection to site
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi* | [**deleteAnalyticsExtensionsConnection**](docs/AnalyticsExtensionsSettingsMethodsApi.md#deleteAnalyticsExtensionsConnection) | **DELETE** /api/-/settings/site/extensions/analytics/connections/{connection_luid} | Delete analytics extension connection from site
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi* | [**deleteConnectionFromWorkbook**](docs/AnalyticsExtensionsSettingsMethodsApi.md#deleteConnectionFromWorkbook) | **DELETE** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection | Remove current analytics extension connection for workbook
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi* | [**getAnalyticsExtensionsConnection**](docs/AnalyticsExtensionsSettingsMethodsApi.md#getAnalyticsExtensionsConnection) | **GET** /api/-/settings/site/extensions/analytics/connections/{connection_luid} | Get analytics extension details
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi* | [**getAnalyticsExtensionsConnections**](docs/AnalyticsExtensionsSettingsMethodsApi.md#getAnalyticsExtensionsConnections) | **GET** /api/-/settings/site/extensions/analytics/connections | List analytics extension connections on site
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi* | [**getAnalyticsExtensionsServerSettings**](docs/AnalyticsExtensionsSettingsMethodsApi.md#getAnalyticsExtensionsServerSettings) | **GET** /api/-/settings/server/extensions/analytics | Get enabled state of analytics extensions on server
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi* | [**getAnalyticsExtensionsSiteSettings**](docs/AnalyticsExtensionsSettingsMethodsApi.md#getAnalyticsExtensionsSiteSettings) | **GET** /api/-/settings/site/extensions/analytics | Get enabled state of analytics extensions on site
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi* | [**getConnectionOptionsForWorkbook**](docs/AnalyticsExtensionsSettingsMethodsApi.md#getConnectionOptionsForWorkbook) | **GET** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/connections | List analytics extension connections of workbook
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi* | [**getSelectedConnectionForWorkbook**](docs/AnalyticsExtensionsSettingsMethodsApi.md#getSelectedConnectionForWorkbook) | **GET** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection | Get current analytics extension for workbook
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi* | [**updateAnalyticsExtensionsConnection**](docs/AnalyticsExtensionsSettingsMethodsApi.md#updateAnalyticsExtensionsConnection) | **PUT** /api/-/settings/site/extensions/analytics/connections/{connection_luid} | Update analytics extension connection of site
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi* | [**updateAnalyticsExtensionsServerSettings**](docs/AnalyticsExtensionsSettingsMethodsApi.md#updateAnalyticsExtensionsServerSettings) | **PUT** /api/-/settings/server/extensions/analytics | Enable/disable analytics extensions on server
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi* | [**updateAnalyticsExtensionsSiteSettings**](docs/AnalyticsExtensionsSettingsMethodsApi.md#updateAnalyticsExtensionsSiteSettings) | **PUT** /api/-/settings/site/extensions/analytics | Update enabled state of analytics extensions on site
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.AnalyticsExtensionsSettingsMethodsApi* | [**updateWorkbookWithConnection**](docs/AnalyticsExtensionsSettingsMethodsApi.md#updateWorkbookWithConnection) | **PUT** /api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection | Update analytics extension for workbook
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi* | [**createDashboardExtensionsBlockListItem**](docs/DashboardExtensionsSettingsMethodsApi.md#createDashboardExtensionsBlockListItem) | **POST** /api/-/settings/server/extensions/dashboard/blockListItems | Block dashboard extension on server
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi* | [**createDashboardExtensionsSafeListItem**](docs/DashboardExtensionsSettingsMethodsApi.md#createDashboardExtensionsSafeListItem) | **POST** /api/-/settings/site/extensions/dashboard/safeListItems | Allow dashboard extension on site
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi* | [**deleteDashboardExtensionsBlockListItem**](docs/DashboardExtensionsSettingsMethodsApi.md#deleteDashboardExtensionsBlockListItem) | **DELETE** /api/-/settings/server/extensions/dashboard/blockListItems/{block_list_item_luid} | Unblock dashboard extension on server
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi* | [**deleteDashboardExtensionsSafeListItem**](docs/DashboardExtensionsSettingsMethodsApi.md#deleteDashboardExtensionsSafeListItem) | **DELETE** /api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid} | Disallow dashboard extension on site
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi* | [**getDashboardExtensionsBlockListItem**](docs/DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsBlockListItem) | **GET** /api/-/settings/server/extensions/dashboard/blockListItems/{block_list_item_luid} | Get blocked dashboard extension on server
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi* | [**getDashboardExtensionsBlockListItems**](docs/DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsBlockListItems) | **GET** /api/-/settings/server/extensions/dashboard/blockListItems | List blocked dashboard extensions on server
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi* | [**getDashboardExtensionsSafeListItem**](docs/DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsSafeListItem) | **GET** /api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid} | Get allowed dashboard extension on site
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi* | [**getDashboardExtensionsSafeListItems**](docs/DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsSafeListItems) | **GET** /api/-/settings/site/extensions/dashboard/safeListItems | Lists allowed dashboard extensions on site
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi* | [**getDashboardExtensionsServerSettings**](docs/DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsServerSettings) | **GET** /api/-/settings/server/extensions/dashboard | List dashboard extension settings of server
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi* | [**getDashboardExtensionsSiteSettings**](docs/DashboardExtensionsSettingsMethodsApi.md#getDashboardExtensionsSiteSettings) | **GET** /api/-/settings/site/extensions/dashboard | List dashboard extension settings of site
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi* | [**updateDashboardExtensionsSafeListItem**](docs/DashboardExtensionsSettingsMethodsApi.md#updateDashboardExtensionsSafeListItem) | **PUT** /api/-/settings/site/extensions/dashboard/safeListItems/{safe_list_item_luid} | Update settings for allowed dashboard extension on site
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi* | [**updateDashboardExtensionsServerSettings**](docs/DashboardExtensionsSettingsMethodsApi.md#updateDashboardExtensionsServerSettings) | **PUT** /api/-/settings/server/extensions/dashboard | Update dashboard extensions settings of server
*ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi* | [**updateDashboardExtensionsSiteSettings**](docs/DashboardExtensionsSettingsMethodsApi.md#updateDashboardExtensionsSiteSettings) | **PUT** /api/-/settings/site/extensions/dashboard | Update dashboard extension settings of site


## Documentation for Models

 - [ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1ConnectionBrief](docs/TableauAnalyticsextensionsV1ConnectionBrief.md)
 - [ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1ConnectionItem](docs/TableauAnalyticsextensionsV1ConnectionItem.md)
 - [ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1ConnectionList](docs/TableauAnalyticsextensionsV1ConnectionList.md)
 - [ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1ConnectionMapping](docs/TableauAnalyticsextensionsV1ConnectionMapping.md)
 - [ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1ConnectionMetadata](docs/TableauAnalyticsextensionsV1ConnectionMetadata.md)
 - [ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1ConnectionMetadataList](docs/TableauAnalyticsextensionsV1ConnectionMetadataList.md)
 - [ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1ServerSettings](docs/TableauAnalyticsextensionsV1ServerSettings.md)
 - [ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1SiteSettings](docs/TableauAnalyticsextensionsV1SiteSettings.md)
 - [ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1BlockListItem](docs/TableauExtensionsDashboardV1BlockListItem.md)
 - [ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1BlockListItems](docs/TableauExtensionsDashboardV1BlockListItems.md)
 - [ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1SafeListItem](docs/TableauExtensionsDashboardV1SafeListItem.md)
 - [ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1SafeListItems](docs/TableauExtensionsDashboardV1SafeListItems.md)
 - [ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1ServerSettings](docs/TableauExtensionsDashboardV1ServerSettings.md)
 - [ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1SiteSettings](docs/TableauExtensionsDashboardV1SiteSettings.md)


## Documentation for Authorization



### X-Tableau-Auth


- **Type**: API key
- **API key parameter name**: X-Tableau-Auth
- **Location**: HTTP header
