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

import ApiClient from '../ApiClient';
import TableauAnalyticsextensionsV1ConnectionBrief from './TableauAnalyticsextensionsV1ConnectionBrief';

/**
 * The TableauAnalyticsextensionsV1ConnectionItem model module.
 * @module model/TableauAnalyticsextensionsV1ConnectionItem
 * @version 2021.2
 */
class TableauAnalyticsextensionsV1ConnectionItem {
    /**
     * Constructs a new <code>TableauAnalyticsextensionsV1ConnectionItem</code>.
     * 
     * @alias module:model/TableauAnalyticsextensionsV1ConnectionItem
     */
    constructor() { 
        
        TableauAnalyticsextensionsV1ConnectionItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TableauAnalyticsextensionsV1ConnectionItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TableauAnalyticsextensionsV1ConnectionItem} obj Optional instance to populate.
     * @return {module:model/TableauAnalyticsextensionsV1ConnectionItem} The populated <code>TableauAnalyticsextensionsV1ConnectionItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TableauAnalyticsextensionsV1ConnectionItem();

            if (data.hasOwnProperty('connection_luid')) {
                obj['connection_luid'] = ApiClient.convertToType(data['connection_luid'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('is_auth_enabled')) {
                obj['is_auth_enabled'] = ApiClient.convertToType(data['is_auth_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('is_ssl_enabled')) {
                obj['is_ssl_enabled'] = ApiClient.convertToType(data['is_ssl_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('connection_brief')) {
                obj['connection_brief'] = TableauAnalyticsextensionsV1ConnectionBrief.constructFromObject(data['connection_brief']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} connection_luid
 */
TableauAnalyticsextensionsV1ConnectionItem.prototype['connection_luid'] = undefined;

/**
 * Required. The location of an external service (TabPy, Rserve, EINSTEIN_DISCOVERY, Generic API, or other) that responds to your analytics extension requests. The case sensitive value must be a URI, IPv4 or IPv6 address that is a maximum of 255 Unicode characters.
 * @member {String} host
 */
TableauAnalyticsextensionsV1ConnectionItem.prototype['host'] = undefined;

/**
 * Required. Integer between 1 and 65535.
 * @member {Number} port
 */
TableauAnalyticsextensionsV1ConnectionItem.prototype['port'] = undefined;

/**
 * For Tableau Online: The value is always true.     For on premise Tableau servers:  Optional. Set to true if authentication is enabled on the external service. If  true, username and password are required. Default is false.
 * @member {Boolean} is_auth_enabled
 */
TableauAnalyticsextensionsV1ConnectionItem.prototype['is_auth_enabled'] = undefined;

/**
 * For Tableau Online: A username is always required.
 * @member {String} username
 */
TableauAnalyticsextensionsV1ConnectionItem.prototype['username'] = undefined;

/**
 * For Tableau Online: A password is always required.
 * @member {String} password
 */
TableauAnalyticsextensionsV1ConnectionItem.prototype['password'] = undefined;

/**
 * For Tableau Online: The value is always true.     For on premise Tableau servers:  Optional. Set to true if authentication is enabled on the external service. If  true, username and password are required. Default is false.
 * @member {Boolean} is_ssl_enabled
 */
TableauAnalyticsextensionsV1ConnectionItem.prototype['is_ssl_enabled'] = undefined;

/**
 * @member {module:model/TableauAnalyticsextensionsV1ConnectionBrief} connection_brief
 */
TableauAnalyticsextensionsV1ConnectionItem.prototype['connection_brief'] = undefined;






export default TableauAnalyticsextensionsV1ConnectionItem;

