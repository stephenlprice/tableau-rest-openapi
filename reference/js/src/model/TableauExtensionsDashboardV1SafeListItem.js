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

/**
 * The TableauExtensionsDashboardV1SafeListItem model module.
 * @module model/TableauExtensionsDashboardV1SafeListItem
 * @version 2021.2
 */
class TableauExtensionsDashboardV1SafeListItem {
    /**
     * Constructs a new <code>TableauExtensionsDashboardV1SafeListItem</code>.
     * A dashboard extension that is allowed to run on a site.
     * @alias module:model/TableauExtensionsDashboardV1SafeListItem
     */
    constructor() { 
        
        TableauExtensionsDashboardV1SafeListItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TableauExtensionsDashboardV1SafeListItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TableauExtensionsDashboardV1SafeListItem} obj Optional instance to populate.
     * @return {module:model/TableauExtensionsDashboardV1SafeListItem} The populated <code>TableauExtensionsDashboardV1SafeListItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TableauExtensionsDashboardV1SafeListItem();

            if (data.hasOwnProperty('safe_list_item_luid')) {
                obj['safe_list_item_luid'] = ApiClient.convertToType(data['safe_list_item_luid'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('allow_full_data')) {
                obj['allow_full_data'] = ApiClient.convertToType(data['allow_full_data'], 'Boolean');
            }
            if (data.hasOwnProperty('prompt_needed')) {
                obj['prompt_needed'] = ApiClient.convertToType(data['prompt_needed'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} safe_list_item_luid
 */
TableauExtensionsDashboardV1SafeListItem.prototype['safe_list_item_luid'] = undefined;

/**
 * Location of the dashboard extension to be allowed on a site.
 * @member {String} url
 */
TableauExtensionsDashboardV1SafeListItem.prototype['url'] = undefined;

/**
 * When true, the extension has access to underlying data of a workbook. This setting is only effective when the extension is on the site safe list. Default is false.
 * @member {Boolean} allow_full_data
 */
TableauExtensionsDashboardV1SafeListItem.prototype['allow_full_data'] = undefined;

/**
 * When true, the user will be prompted to grant an extension access to the underlying data of a workbook. This setting is only effective when the extension is on the site safe list. Default is false.
 * @member {Boolean} prompt_needed
 */
TableauExtensionsDashboardV1SafeListItem.prototype['prompt_needed'] = undefined;






export default TableauExtensionsDashboardV1SafeListItem;

