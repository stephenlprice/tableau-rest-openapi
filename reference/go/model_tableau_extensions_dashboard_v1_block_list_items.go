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

// TableauExtensionsDashboardV1BlockListItems List of dashboard extensions blocked from running on a server.
type TableauExtensionsDashboardV1BlockListItems struct {
	BlockListItems []TableauExtensionsDashboardV1BlockListItem `json:"block_list_items,omitempty"`
}

// NewTableauExtensionsDashboardV1BlockListItems instantiates a new TableauExtensionsDashboardV1BlockListItems object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTableauExtensionsDashboardV1BlockListItems() *TableauExtensionsDashboardV1BlockListItems {
	this := TableauExtensionsDashboardV1BlockListItems{}
	return &this
}

// NewTableauExtensionsDashboardV1BlockListItemsWithDefaults instantiates a new TableauExtensionsDashboardV1BlockListItems object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTableauExtensionsDashboardV1BlockListItemsWithDefaults() *TableauExtensionsDashboardV1BlockListItems {
	this := TableauExtensionsDashboardV1BlockListItems{}
	return &this
}

// GetBlockListItems returns the BlockListItems field value if set, zero value otherwise.
func (o *TableauExtensionsDashboardV1BlockListItems) GetBlockListItems() []TableauExtensionsDashboardV1BlockListItem {
	if o == nil || o.BlockListItems == nil {
		var ret []TableauExtensionsDashboardV1BlockListItem
		return ret
	}
	return o.BlockListItems
}

// GetBlockListItemsOk returns a tuple with the BlockListItems field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TableauExtensionsDashboardV1BlockListItems) GetBlockListItemsOk() ([]TableauExtensionsDashboardV1BlockListItem, bool) {
	if o == nil || o.BlockListItems == nil {
		return nil, false
	}
	return o.BlockListItems, true
}

// HasBlockListItems returns a boolean if a field has been set.
func (o *TableauExtensionsDashboardV1BlockListItems) HasBlockListItems() bool {
	if o != nil && o.BlockListItems != nil {
		return true
	}

	return false
}

// SetBlockListItems gets a reference to the given []TableauExtensionsDashboardV1BlockListItem and assigns it to the BlockListItems field.
func (o *TableauExtensionsDashboardV1BlockListItems) SetBlockListItems(v []TableauExtensionsDashboardV1BlockListItem) {
	o.BlockListItems = v
}

func (o TableauExtensionsDashboardV1BlockListItems) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.BlockListItems != nil {
		toSerialize["block_list_items"] = o.BlockListItems
	}
	return json.Marshal(toSerialize)
}

type NullableTableauExtensionsDashboardV1BlockListItems struct {
	value *TableauExtensionsDashboardV1BlockListItems
	isSet bool
}

func (v NullableTableauExtensionsDashboardV1BlockListItems) Get() *TableauExtensionsDashboardV1BlockListItems {
	return v.value
}

func (v *NullableTableauExtensionsDashboardV1BlockListItems) Set(val *TableauExtensionsDashboardV1BlockListItems) {
	v.value = val
	v.isSet = true
}

func (v NullableTableauExtensionsDashboardV1BlockListItems) IsSet() bool {
	return v.isSet
}

func (v *NullableTableauExtensionsDashboardV1BlockListItems) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTableauExtensionsDashboardV1BlockListItems(val *TableauExtensionsDashboardV1BlockListItems) *NullableTableauExtensionsDashboardV1BlockListItems {
	return &NullableTableauExtensionsDashboardV1BlockListItems{value: val, isSet: true}
}

func (v NullableTableauExtensionsDashboardV1BlockListItems) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTableauExtensionsDashboardV1BlockListItems) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

