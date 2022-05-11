/*
API Reference for Tableau Resource Versioned RESTful Endpoints

>The following OpenAPI documentation describes the details of the new Tableau RESTful APIs. A growing number of these are  being released alongside more than 150 [classic REST endpoints](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref.htm)  that are currently in wide usage in the Tableau community.    >There are some differences users of the classic endpoints will recognize when viewing these new endpoints. Request bodies for these new REST endpoints must  be formatted using JSON. Endpoint URIs don't contain an API version number. For more information, see  [REST API and Resource Versions](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm).   ![tableau platform](https://github.com/stephenlprice/tableau-rest-openapi/blob/main/assets/images/tableau-platform.png?raw=true)

API version: 2021.2
Contact: stellopricint@gmail.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// TableauAnalyticsextensionsV1ConnectionMetadataList struct for TableauAnalyticsextensionsV1ConnectionMetadataList
type TableauAnalyticsextensionsV1ConnectionMetadataList struct {
	ConnectionMetadataList []TableauAnalyticsextensionsV1ConnectionMetadata `json:"connectionMetadataList,omitempty"`
}

// NewTableauAnalyticsextensionsV1ConnectionMetadataList instantiates a new TableauAnalyticsextensionsV1ConnectionMetadataList object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTableauAnalyticsextensionsV1ConnectionMetadataList() *TableauAnalyticsextensionsV1ConnectionMetadataList {
	this := TableauAnalyticsextensionsV1ConnectionMetadataList{}
	return &this
}

// NewTableauAnalyticsextensionsV1ConnectionMetadataListWithDefaults instantiates a new TableauAnalyticsextensionsV1ConnectionMetadataList object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTableauAnalyticsextensionsV1ConnectionMetadataListWithDefaults() *TableauAnalyticsextensionsV1ConnectionMetadataList {
	this := TableauAnalyticsextensionsV1ConnectionMetadataList{}
	return &this
}

// GetConnectionMetadataList returns the ConnectionMetadataList field value if set, zero value otherwise.
func (o *TableauAnalyticsextensionsV1ConnectionMetadataList) GetConnectionMetadataList() []TableauAnalyticsextensionsV1ConnectionMetadata {
	if o == nil || o.ConnectionMetadataList == nil {
		var ret []TableauAnalyticsextensionsV1ConnectionMetadata
		return ret
	}
	return o.ConnectionMetadataList
}

// GetConnectionMetadataListOk returns a tuple with the ConnectionMetadataList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TableauAnalyticsextensionsV1ConnectionMetadataList) GetConnectionMetadataListOk() ([]TableauAnalyticsextensionsV1ConnectionMetadata, bool) {
	if o == nil || o.ConnectionMetadataList == nil {
		return nil, false
	}
	return o.ConnectionMetadataList, true
}

// HasConnectionMetadataList returns a boolean if a field has been set.
func (o *TableauAnalyticsextensionsV1ConnectionMetadataList) HasConnectionMetadataList() bool {
	if o != nil && o.ConnectionMetadataList != nil {
		return true
	}

	return false
}

// SetConnectionMetadataList gets a reference to the given []TableauAnalyticsextensionsV1ConnectionMetadata and assigns it to the ConnectionMetadataList field.
func (o *TableauAnalyticsextensionsV1ConnectionMetadataList) SetConnectionMetadataList(v []TableauAnalyticsextensionsV1ConnectionMetadata) {
	o.ConnectionMetadataList = v
}

func (o TableauAnalyticsextensionsV1ConnectionMetadataList) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.ConnectionMetadataList != nil {
		toSerialize["connectionMetadataList"] = o.ConnectionMetadataList
	}
	return json.Marshal(toSerialize)
}

type NullableTableauAnalyticsextensionsV1ConnectionMetadataList struct {
	value *TableauAnalyticsextensionsV1ConnectionMetadataList
	isSet bool
}

func (v NullableTableauAnalyticsextensionsV1ConnectionMetadataList) Get() *TableauAnalyticsextensionsV1ConnectionMetadataList {
	return v.value
}

func (v *NullableTableauAnalyticsextensionsV1ConnectionMetadataList) Set(val *TableauAnalyticsextensionsV1ConnectionMetadataList) {
	v.value = val
	v.isSet = true
}

func (v NullableTableauAnalyticsextensionsV1ConnectionMetadataList) IsSet() bool {
	return v.isSet
}

func (v *NullableTableauAnalyticsextensionsV1ConnectionMetadataList) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTableauAnalyticsextensionsV1ConnectionMetadataList(val *TableauAnalyticsextensionsV1ConnectionMetadataList) *NullableTableauAnalyticsextensionsV1ConnectionMetadataList {
	return &NullableTableauAnalyticsextensionsV1ConnectionMetadataList{value: val, isSet: true}
}

func (v NullableTableauAnalyticsextensionsV1ConnectionMetadataList) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTableauAnalyticsextensionsV1ConnectionMetadataList) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


