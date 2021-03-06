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
import TableauAnalyticsextensionsV1ConnectionMetadata from './TableauAnalyticsextensionsV1ConnectionMetadata';

/**
 * The TableauAnalyticsextensionsV1ConnectionMetadataList model module.
 * @module model/TableauAnalyticsextensionsV1ConnectionMetadataList
 * @version 2021.2
 */
class TableauAnalyticsextensionsV1ConnectionMetadataList {
    /**
     * Constructs a new <code>TableauAnalyticsextensionsV1ConnectionMetadataList</code>.
     * @alias module:model/TableauAnalyticsextensionsV1ConnectionMetadataList
     */
    constructor() { 
        
        TableauAnalyticsextensionsV1ConnectionMetadataList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TableauAnalyticsextensionsV1ConnectionMetadataList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TableauAnalyticsextensionsV1ConnectionMetadataList} obj Optional instance to populate.
     * @return {module:model/TableauAnalyticsextensionsV1ConnectionMetadataList} The populated <code>TableauAnalyticsextensionsV1ConnectionMetadataList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TableauAnalyticsextensionsV1ConnectionMetadataList();

            if (data.hasOwnProperty('connectionMetadataList')) {
                obj['connectionMetadataList'] = ApiClient.convertToType(data['connectionMetadataList'], [TableauAnalyticsextensionsV1ConnectionMetadata]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/TableauAnalyticsextensionsV1ConnectionMetadata>} connectionMetadataList
 */
TableauAnalyticsextensionsV1ConnectionMetadataList.prototype['connectionMetadataList'] = undefined;






export default TableauAnalyticsextensionsV1ConnectionMetadataList;

