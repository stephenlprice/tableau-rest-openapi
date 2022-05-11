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
    instance = new ApiReferenceForTableauResourceVersionedResTfulEndpoints.DashboardExtensionsSettingsMethodsApi();
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

  describe('DashboardExtensionsSettingsMethodsApi', function() {
    describe('createDashboardExtensionsBlockListItem', function() {
      it('should call createDashboardExtensionsBlockListItem successfully', function(done) {
        //uncomment below and update the code to test createDashboardExtensionsBlockListItem
        //instance.createDashboardExtensionsBlockListItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDashboardExtensionsSafeListItem', function() {
      it('should call createDashboardExtensionsSafeListItem successfully', function(done) {
        //uncomment below and update the code to test createDashboardExtensionsSafeListItem
        //instance.createDashboardExtensionsSafeListItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDashboardExtensionsBlockListItem', function() {
      it('should call deleteDashboardExtensionsBlockListItem successfully', function(done) {
        //uncomment below and update the code to test deleteDashboardExtensionsBlockListItem
        //instance.deleteDashboardExtensionsBlockListItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDashboardExtensionsSafeListItem', function() {
      it('should call deleteDashboardExtensionsSafeListItem successfully', function(done) {
        //uncomment below and update the code to test deleteDashboardExtensionsSafeListItem
        //instance.deleteDashboardExtensionsSafeListItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDashboardExtensionsBlockListItem', function() {
      it('should call getDashboardExtensionsBlockListItem successfully', function(done) {
        //uncomment below and update the code to test getDashboardExtensionsBlockListItem
        //instance.getDashboardExtensionsBlockListItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDashboardExtensionsBlockListItems', function() {
      it('should call getDashboardExtensionsBlockListItems successfully', function(done) {
        //uncomment below and update the code to test getDashboardExtensionsBlockListItems
        //instance.getDashboardExtensionsBlockListItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDashboardExtensionsSafeListItem', function() {
      it('should call getDashboardExtensionsSafeListItem successfully', function(done) {
        //uncomment below and update the code to test getDashboardExtensionsSafeListItem
        //instance.getDashboardExtensionsSafeListItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDashboardExtensionsSafeListItems', function() {
      it('should call getDashboardExtensionsSafeListItems successfully', function(done) {
        //uncomment below and update the code to test getDashboardExtensionsSafeListItems
        //instance.getDashboardExtensionsSafeListItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDashboardExtensionsServerSettings', function() {
      it('should call getDashboardExtensionsServerSettings successfully', function(done) {
        //uncomment below and update the code to test getDashboardExtensionsServerSettings
        //instance.getDashboardExtensionsServerSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDashboardExtensionsSiteSettings', function() {
      it('should call getDashboardExtensionsSiteSettings successfully', function(done) {
        //uncomment below and update the code to test getDashboardExtensionsSiteSettings
        //instance.getDashboardExtensionsSiteSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDashboardExtensionsSafeListItem', function() {
      it('should call updateDashboardExtensionsSafeListItem successfully', function(done) {
        //uncomment below and update the code to test updateDashboardExtensionsSafeListItem
        //instance.updateDashboardExtensionsSafeListItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDashboardExtensionsServerSettings', function() {
      it('should call updateDashboardExtensionsServerSettings successfully', function(done) {
        //uncomment below and update the code to test updateDashboardExtensionsServerSettings
        //instance.updateDashboardExtensionsServerSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDashboardExtensionsSiteSettings', function() {
      it('should call updateDashboardExtensionsSiteSettings successfully', function(done) {
        //uncomment below and update the code to test updateDashboardExtensionsSiteSettings
        //instance.updateDashboardExtensionsSiteSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
