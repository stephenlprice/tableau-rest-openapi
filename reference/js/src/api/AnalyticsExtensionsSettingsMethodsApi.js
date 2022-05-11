/**
 * API Reference for Tableau Resource Versioned RESTful Endpoints
 * >The following OpenAPI documentation describes the details of the new Tableau RESTful APIs. A growing number of these are  being released alongside more than 150 [classic REST endpoints](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref.htm)  that are currently in wide usage in the Tableau community.    >There are some differences users of the classic endpoints will recognize when viewing these new endpoints. Request bodies for these new REST endpoints must  be formatted using JSON. Endpoint URIs don't contain an API version number. For more information, see  [REST API and Resource Versions](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm).   ![tableau platform](https://github.com/stephenlprice/tableau-rest-openapi/blob/main/assets/images/tableau-platform.png?raw=true)
 *
 * The version of the OpenAPI document: 2021.2
 * Contact: stellopricint@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InvalidAuth from '../model/InvalidAuth';
import InvalidConnectionHostName from '../model/InvalidConnectionHostName';
import InvalidConnectionPassword from '../model/InvalidConnectionPassword';
import InvalidConnectionPort from '../model/InvalidConnectionPort';
import InvalidConnectionSSLSettings from '../model/InvalidConnectionSSLSettings';
import InvalidConnectionType from '../model/InvalidConnectionType';
import InvalidConnectionUsername from '../model/InvalidConnectionUsername';
import MissingAuth from '../model/MissingAuth';
import MultipleConnectionsAttempted from '../model/MultipleConnectionsAttempted';
import OneOfInvalidConnectionHostNameInvalidConnectionPortInvalidConnectionTypeInvalidConnectionUsernameInvalidConnectionPasswordInvalidConnectionSSLSettings from '../model/OneOfInvalidConnectionHostNameInvalidConnectionPortInvalidConnectionTypeInvalidConnectionUsernameInvalidConnectionPasswordInvalidConnectionSSLSettings';
import OneOfInvalidConnectionHostNameInvalidConnectionTypeInvalidConnectionPortInvalidConnectionUsernameInvalidConnectionPasswordInvalidConnectionSSLSettings from '../model/OneOfInvalidConnectionHostNameInvalidConnectionTypeInvalidConnectionPortInvalidConnectionUsernameInvalidConnectionPasswordInvalidConnectionSSLSettings';
import OneOfMissingAuthInvalidAuth from '../model/OneOfMissingAuthInvalidAuth';
import OneOfMultipleConnectionsAttemptedInvalidConnectionHostNameInvalidConnectionPortInvalidConnectionTypeInvalidConnectionUsernameInvalidConnectionPasswordInvalidConnectionSSLSettings from '../model/OneOfMultipleConnectionsAttemptedInvalidConnectionHostNameInvalidConnectionPortInvalidConnectionTypeInvalidConnectionUsernameInvalidConnectionPasswordInvalidConnectionSSLSettings';
import TableauAnalyticsextensionsV1ConnectionItem from '../model/TableauAnalyticsextensionsV1ConnectionItem';
import TableauAnalyticsextensionsV1ConnectionList from '../model/TableauAnalyticsextensionsV1ConnectionList';
import TableauAnalyticsextensionsV1ConnectionMapping from '../model/TableauAnalyticsextensionsV1ConnectionMapping';
import TableauAnalyticsextensionsV1ConnectionMetadata from '../model/TableauAnalyticsextensionsV1ConnectionMetadata';
import TableauAnalyticsextensionsV1ConnectionMetadataList from '../model/TableauAnalyticsextensionsV1ConnectionMetadataList';
import TableauAnalyticsextensionsV1ServerSettings from '../model/TableauAnalyticsextensionsV1ServerSettings';
import TableauAnalyticsextensionsV1SiteSettings from '../model/TableauAnalyticsextensionsV1SiteSettings';

/**
* AnalyticsExtensionsSettingsMethods service.
* @module api/AnalyticsExtensionsSettingsMethodsApi
* @version 2021.2
*/
export default class AnalyticsExtensionsSettingsMethodsApi {

    /**
    * Constructs a new AnalyticsExtensionsSettingsMethodsApi. 
    * @alias module:api/AnalyticsExtensionsSettingsMethodsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addAnalyticsExtensionsConnection operation.
     * @callback module:api/AnalyticsExtensionsSettingsMethodsApi~addAnalyticsExtensionsConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TableauAnalyticsextensionsV1ConnectionItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add analytics extension connection to site
     * Adds a connection to an external service for analytics extensions on this site. Permissions - This method can be called by site and server administrators.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xTableauAuth The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
     * @param {module:model/TableauAnalyticsextensionsV1ConnectionItem} opts.tableauAnalyticsextensionsV1ConnectionItem 
     * @param {module:api/AnalyticsExtensionsSettingsMethodsApi~addAnalyticsExtensionsConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TableauAnalyticsextensionsV1ConnectionItem}
     */
    addAnalyticsExtensionsConnection(opts, callback) {
      opts = opts || {};
      let postBody = opts['tableauAnalyticsextensionsV1ConnectionItem'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Tableau-Auth': opts['xTableauAuth']
      };
      let formParams = {
      };

      let authNames = ['X-Tableau-Auth'];
      let contentTypes = ['application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json'];
      let accepts = ['application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json', 'application/json'];
      let returnType = TableauAnalyticsextensionsV1ConnectionItem;
      return this.apiClient.callApi(
        '/api/-/settings/site/extensions/analytics/connections', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAnalyticsExtensionsConnection operation.
     * @callback module:api/AnalyticsExtensionsSettingsMethodsApi~deleteAnalyticsExtensionsConnectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete analytics extension connection from site
     * Deletes a specific analytics extension connection for an external service from a site. Permissions - This method can be called by site and server administrators.
     * @param {String} connectionLuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xTableauAuth The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
     * @param {module:api/AnalyticsExtensionsSettingsMethodsApi~deleteAnalyticsExtensionsConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteAnalyticsExtensionsConnection(connectionLuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'connectionLuid' is set
      if (connectionLuid === undefined || connectionLuid === null) {
        throw new Error("Missing the required parameter 'connectionLuid' when calling deleteAnalyticsExtensionsConnection");
      }

      let pathParams = {
        'connection_luid': connectionLuid
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Tableau-Auth': opts['xTableauAuth']
      };
      let formParams = {
      };

      let authNames = ['X-Tableau-Auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/-/settings/site/extensions/analytics/connections/{connection_luid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteConnectionFromWorkbook operation.
     * @callback module:api/AnalyticsExtensionsSettingsMethodsApi~deleteConnectionFromWorkbookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove current analytics extension connection for workbook
     * Remove the currently used analytics extension connection to an external service  from the specified workbook. The connection remains configured, and is available for further usage by the workbook. Permissions - This method can be called by users with authoring access to the workbook.
     * @param {String} workbookLuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xTableauAuth The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
     * @param {module:api/AnalyticsExtensionsSettingsMethodsApi~deleteConnectionFromWorkbookCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteConnectionFromWorkbook(workbookLuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'workbookLuid' is set
      if (workbookLuid === undefined || workbookLuid === null) {
        throw new Error("Missing the required parameter 'workbookLuid' when calling deleteConnectionFromWorkbook");
      }

      let pathParams = {
        'workbook_luid': workbookLuid
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Tableau-Auth': opts['xTableauAuth']
      };
      let formParams = {
      };

      let authNames = ['X-Tableau-Auth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAnalyticsExtensionsConnection operation.
     * @callback module:api/AnalyticsExtensionsSettingsMethodsApi~getAnalyticsExtensionsConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TableauAnalyticsextensionsV1ConnectionItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get analytics extension details
     * Get the details of a specified analytics extension connection to an external service. Permissions - This method can only be called by users with server or site administrator permissions.
     * @param {String} connectionLuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xTableauAuth The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
     * @param {module:api/AnalyticsExtensionsSettingsMethodsApi~getAnalyticsExtensionsConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TableauAnalyticsextensionsV1ConnectionItem}
     */
    getAnalyticsExtensionsConnection(connectionLuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'connectionLuid' is set
      if (connectionLuid === undefined || connectionLuid === null) {
        throw new Error("Missing the required parameter 'connectionLuid' when calling getAnalyticsExtensionsConnection");
      }

      let pathParams = {
        'connection_luid': connectionLuid
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Tableau-Auth': opts['xTableauAuth']
      };
      let formParams = {
      };

      let authNames = ['X-Tableau-Auth'];
      let contentTypes = [];
      let accepts = ['application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json'];
      let returnType = TableauAnalyticsextensionsV1ConnectionItem;
      return this.apiClient.callApi(
        '/api/-/settings/site/extensions/analytics/connections/{connection_luid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAnalyticsExtensionsConnections operation.
     * @callback module:api/AnalyticsExtensionsSettingsMethodsApi~getAnalyticsExtensionsConnectionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TableauAnalyticsextensionsV1ConnectionList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List analytics extension connections on site
     * Lists a site's analytics extension connections for external services. Permissions- This method can be called by site and server administrators.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xTableauAuth The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
     * @param {module:api/AnalyticsExtensionsSettingsMethodsApi~getAnalyticsExtensionsConnectionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TableauAnalyticsextensionsV1ConnectionList}
     */
    getAnalyticsExtensionsConnections(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Tableau-Auth': opts['xTableauAuth']
      };
      let formParams = {
      };

      let authNames = ['X-Tableau-Auth'];
      let contentTypes = [];
      let accepts = ['application/vnd.tableau.analyticsextensions.v1.ConnectionList+json', 'application/json'];
      let returnType = TableauAnalyticsextensionsV1ConnectionList;
      return this.apiClient.callApi(
        '/api/-/settings/site/extensions/analytics/connections', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAnalyticsExtensionsServerSettings operation.
     * @callback module:api/AnalyticsExtensionsSettingsMethodsApi~getAnalyticsExtensionsServerSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TableauAnalyticsextensionsV1ServerSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get enabled state of analytics extensions on server
     * Gets the enabled/disabled state of analytics extensions on a server. Permissions - This method can only be called by server administrators.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xTableauAuth The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
     * @param {module:api/AnalyticsExtensionsSettingsMethodsApi~getAnalyticsExtensionsServerSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TableauAnalyticsextensionsV1ServerSettings}
     */
    getAnalyticsExtensionsServerSettings(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Tableau-Auth': opts['xTableauAuth']
      };
      let formParams = {
      };

      let authNames = ['X-Tableau-Auth'];
      let contentTypes = [];
      let accepts = ['application/vnd.tableau.analyticsextensions.v1.ServerSettings+json', 'application/json'];
      let returnType = TableauAnalyticsextensionsV1ServerSettings;
      return this.apiClient.callApi(
        '/api/-/settings/server/extensions/analytics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAnalyticsExtensionsSiteSettings operation.
     * @callback module:api/AnalyticsExtensionsSettingsMethodsApi~getAnalyticsExtensionsSiteSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TableauAnalyticsextensionsV1SiteSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get enabled state of analytics extensions on site
     * Gets the enabled/disabled state of analytics extensions on a site. Permissions - This method can be called by site and server administrators.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xTableauAuth The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
     * @param {module:api/AnalyticsExtensionsSettingsMethodsApi~getAnalyticsExtensionsSiteSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TableauAnalyticsextensionsV1SiteSettings}
     */
    getAnalyticsExtensionsSiteSettings(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Tableau-Auth': opts['xTableauAuth']
      };
      let formParams = {
      };

      let authNames = ['X-Tableau-Auth'];
      let contentTypes = [];
      let accepts = ['application/vnd.tableau.analyticsextensions.v1.SiteSettings+json', 'application/json'];
      let returnType = TableauAnalyticsextensionsV1SiteSettings;
      return this.apiClient.callApi(
        '/api/-/settings/site/extensions/analytics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConnectionOptionsForWorkbook operation.
     * @callback module:api/AnalyticsExtensionsSettingsMethodsApi~getConnectionOptionsForWorkbookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TableauAnalyticsextensionsV1ConnectionMetadataList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List analytics extension connections of workbook
     * Lists basic details of each analytics extension connection available for a specified workbook, including connection type and name. Permissions - This method can be called by users that have permissions to the specified workbook.
     * @param {String} workbookLuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xTableauAuth The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
     * @param {module:api/AnalyticsExtensionsSettingsMethodsApi~getConnectionOptionsForWorkbookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TableauAnalyticsextensionsV1ConnectionMetadataList}
     */
    getConnectionOptionsForWorkbook(workbookLuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'workbookLuid' is set
      if (workbookLuid === undefined || workbookLuid === null) {
        throw new Error("Missing the required parameter 'workbookLuid' when calling getConnectionOptionsForWorkbook");
      }

      let pathParams = {
        'workbook_luid': workbookLuid
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Tableau-Auth': opts['xTableauAuth']
      };
      let formParams = {
      };

      let authNames = ['X-Tableau-Auth'];
      let contentTypes = [];
      let accepts = ['application/vnd.tableau.analyticsextensions.v1.ConnectionMetadataList+json'];
      let returnType = TableauAnalyticsextensionsV1ConnectionMetadataList;
      return this.apiClient.callApi(
        '/api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/connections', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSelectedConnectionForWorkbook operation.
     * @callback module:api/AnalyticsExtensionsSettingsMethodsApi~getSelectedConnectionForWorkbookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TableauAnalyticsextensionsV1ConnectionMetadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current analytics extension for workbook
     * Gets basic details, including connection type and name, of the analytics extension connection to an external service that the specified workbook is currently using. Permissions - This method can be called by users with authoring access to the workbook.
     * @param {String} workbookLuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xTableauAuth The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
     * @param {module:api/AnalyticsExtensionsSettingsMethodsApi~getSelectedConnectionForWorkbookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TableauAnalyticsextensionsV1ConnectionMetadata}
     */
    getSelectedConnectionForWorkbook(workbookLuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'workbookLuid' is set
      if (workbookLuid === undefined || workbookLuid === null) {
        throw new Error("Missing the required parameter 'workbookLuid' when calling getSelectedConnectionForWorkbook");
      }

      let pathParams = {
        'workbook_luid': workbookLuid
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Tableau-Auth': opts['xTableauAuth']
      };
      let formParams = {
      };

      let authNames = ['X-Tableau-Auth'];
      let contentTypes = [];
      let accepts = ['application/vnd.tableau.analyticsextensions.v1.ConnectionMetadata+json'];
      let returnType = TableauAnalyticsextensionsV1ConnectionMetadata;
      return this.apiClient.callApi(
        '/api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAnalyticsExtensionsConnection operation.
     * @callback module:api/AnalyticsExtensionsSettingsMethodsApi~updateAnalyticsExtensionsConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TableauAnalyticsextensionsV1ConnectionItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update analytics extension connection of site
     * Updates the details of specified analytics extension connection for an external service to a site. Permissions - This method can be called by site and server administrators.
     * @param {String} connectionLuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xTableauAuth The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
     * @param {module:model/TableauAnalyticsextensionsV1ConnectionItem} opts.tableauAnalyticsextensionsV1ConnectionItem 
     * @param {module:api/AnalyticsExtensionsSettingsMethodsApi~updateAnalyticsExtensionsConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TableauAnalyticsextensionsV1ConnectionItem}
     */
    updateAnalyticsExtensionsConnection(connectionLuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['tableauAnalyticsextensionsV1ConnectionItem'];
      // verify the required parameter 'connectionLuid' is set
      if (connectionLuid === undefined || connectionLuid === null) {
        throw new Error("Missing the required parameter 'connectionLuid' when calling updateAnalyticsExtensionsConnection");
      }

      let pathParams = {
        'connection_luid': connectionLuid
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Tableau-Auth': opts['xTableauAuth']
      };
      let formParams = {
      };

      let authNames = ['X-Tableau-Auth'];
      let contentTypes = ['application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json'];
      let accepts = ['application/vnd.tableau.analyticsextensions.v1.ConnectionItem+json', 'application/json'];
      let returnType = TableauAnalyticsextensionsV1ConnectionItem;
      return this.apiClient.callApi(
        '/api/-/settings/site/extensions/analytics/connections/{connection_luid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAnalyticsExtensionsServerSettings operation.
     * @callback module:api/AnalyticsExtensionsSettingsMethodsApi~updateAnalyticsExtensionsServerSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TableauAnalyticsextensionsV1ServerSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable/disable analytics extensions on server
     * Enables or disables analytics extensions on a server. Permissions - This method can only be called by server administrators.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xTableauAuth The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
     * @param {module:model/TableauAnalyticsextensionsV1ServerSettings} opts.tableauAnalyticsextensionsV1ServerSettings 
     * @param {module:api/AnalyticsExtensionsSettingsMethodsApi~updateAnalyticsExtensionsServerSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TableauAnalyticsextensionsV1ServerSettings}
     */
    updateAnalyticsExtensionsServerSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['tableauAnalyticsextensionsV1ServerSettings'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Tableau-Auth': opts['xTableauAuth']
      };
      let formParams = {
      };

      let authNames = ['X-Tableau-Auth'];
      let contentTypes = ['application/vnd.tableau.analyticsextensions.v1.ServerSettings+json'];
      let accepts = ['application/vnd.tableau.analyticsextensions.v1.ServerSettings+json', 'application/json'];
      let returnType = TableauAnalyticsextensionsV1ServerSettings;
      return this.apiClient.callApi(
        '/api/-/settings/server/extensions/analytics', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAnalyticsExtensionsSiteSettings operation.
     * @callback module:api/AnalyticsExtensionsSettingsMethodsApi~updateAnalyticsExtensionsSiteSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TableauAnalyticsextensionsV1SiteSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update enabled state of analytics extensions on site
     * Enables or disables analytics extensions on a site. Permissions - This method can be called by site and server administrators. Availability - This method is not available for Tableau Online.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xTableauAuth The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
     * @param {module:model/TableauAnalyticsextensionsV1SiteSettings} opts.tableauAnalyticsextensionsV1SiteSettings 
     * @param {module:api/AnalyticsExtensionsSettingsMethodsApi~updateAnalyticsExtensionsSiteSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TableauAnalyticsextensionsV1SiteSettings}
     */
    updateAnalyticsExtensionsSiteSettings(opts, callback) {
      opts = opts || {};
      let postBody = opts['tableauAnalyticsextensionsV1SiteSettings'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Tableau-Auth': opts['xTableauAuth']
      };
      let formParams = {
      };

      let authNames = ['X-Tableau-Auth'];
      let contentTypes = ['application/vnd.tableau.analyticsextensions.v1.SiteSettings+json'];
      let accepts = ['application/vnd.tableau.analyticsextensions.v1.SiteSettings+json', 'application/json'];
      let returnType = TableauAnalyticsextensionsV1SiteSettings;
      return this.apiClient.callApi(
        '/api/-/settings/site/extensions/analytics', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWorkbookWithConnection operation.
     * @callback module:api/AnalyticsExtensionsSettingsMethodsApi~updateWorkbookWithConnectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TableauAnalyticsextensionsV1ConnectionMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update analytics extension for workbook
     * Updates the analytics extension connection to external service currently used by a workbook. Permissions - This method can be called by users that have permissions to the specified workbook.
     * @param {String} workbookLuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xTableauAuth The Tableau authentication header. The value is a credentials token from a Tableau server's response to an authentication request.    The Content-Type and Accept headers should be the mediatype of the request and response except in cases where you want to  [explicitly allow other versions of the resource](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm#per_resource_versioning).
     * @param {module:model/TableauAnalyticsextensionsV1ConnectionMapping} opts.tableauAnalyticsextensionsV1ConnectionMapping 
     * @param {module:api/AnalyticsExtensionsSettingsMethodsApi~updateWorkbookWithConnectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TableauAnalyticsextensionsV1ConnectionMapping}
     */
    updateWorkbookWithConnection(workbookLuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['tableauAnalyticsextensionsV1ConnectionMapping'];
      // verify the required parameter 'workbookLuid' is set
      if (workbookLuid === undefined || workbookLuid === null) {
        throw new Error("Missing the required parameter 'workbookLuid' when calling updateWorkbookWithConnection");
      }

      let pathParams = {
        'workbook_luid': workbookLuid
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Tableau-Auth': opts['xTableauAuth']
      };
      let formParams = {
      };

      let authNames = ['X-Tableau-Auth'];
      let contentTypes = ['application/vnd.tableau.analyticsextensions.v1.ConnectionMapping+json'];
      let accepts = ['application/vnd.tableau.analyticsextensions.v1.ConnectionMapping+json'];
      let returnType = TableauAnalyticsextensionsV1ConnectionMapping;
      return this.apiClient.callApi(
        '/api/-/settings/site/extensions/analytics/workbooks/{workbook_luid}/selected_connection', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
