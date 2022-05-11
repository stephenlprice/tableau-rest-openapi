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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiReferenceForTableauResourceVersionedResTfulEndpoints);
  }
}(this, function(expect, ApiReferenceForTableauResourceVersionedResTfulEndpoints) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1SafeListItem();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TableauExtensionsDashboardV1SafeListItem', function() {
    it('should create an instance of TableauExtensionsDashboardV1SafeListItem', function() {
      // uncomment below and update the code to test TableauExtensionsDashboardV1SafeListItem
      //var instance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1SafeListItem();
      //expect(instance).to.be.a(ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1SafeListItem);
    });

    it('should have the property safeListItemLuid (base name: "safe_list_item_luid")', function() {
      // uncomment below and update the code to test the property safeListItemLuid
      //var instance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1SafeListItem();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1SafeListItem();
      //expect(instance).to.be();
    });

    it('should have the property allowFullData (base name: "allow_full_data")', function() {
      // uncomment below and update the code to test the property allowFullData
      //var instance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1SafeListItem();
      //expect(instance).to.be();
    });

    it('should have the property promptNeeded (base name: "prompt_needed")', function() {
      // uncomment below and update the code to test the property promptNeeded
      //var instance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauExtensionsDashboardV1SafeListItem();
      //expect(instance).to.be();
    });

  });

}));
