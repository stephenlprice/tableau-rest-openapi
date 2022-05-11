# TableauExtensionsDashboardV1ServerSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockListItems** | Pointer to [**[]TableauExtensionsDashboardV1BlockListItem**](TableauExtensionsDashboardV1BlockListItem.md) |  | [optional] 
**ExtensionsEnabled** | Pointer to **bool** | Specifies whether sandboxed extensions are allowed to run on the site. | [optional] 

## Methods

### NewTableauExtensionsDashboardV1ServerSettings

`func NewTableauExtensionsDashboardV1ServerSettings() *TableauExtensionsDashboardV1ServerSettings`

NewTableauExtensionsDashboardV1ServerSettings instantiates a new TableauExtensionsDashboardV1ServerSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTableauExtensionsDashboardV1ServerSettingsWithDefaults

`func NewTableauExtensionsDashboardV1ServerSettingsWithDefaults() *TableauExtensionsDashboardV1ServerSettings`

NewTableauExtensionsDashboardV1ServerSettingsWithDefaults instantiates a new TableauExtensionsDashboardV1ServerSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockListItems

`func (o *TableauExtensionsDashboardV1ServerSettings) GetBlockListItems() []TableauExtensionsDashboardV1BlockListItem`

GetBlockListItems returns the BlockListItems field if non-nil, zero value otherwise.

### GetBlockListItemsOk

`func (o *TableauExtensionsDashboardV1ServerSettings) GetBlockListItemsOk() (*[]TableauExtensionsDashboardV1BlockListItem, bool)`

GetBlockListItemsOk returns a tuple with the BlockListItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockListItems

`func (o *TableauExtensionsDashboardV1ServerSettings) SetBlockListItems(v []TableauExtensionsDashboardV1BlockListItem)`

SetBlockListItems sets BlockListItems field to given value.

### HasBlockListItems

`func (o *TableauExtensionsDashboardV1ServerSettings) HasBlockListItems() bool`

HasBlockListItems returns a boolean if a field has been set.

### GetExtensionsEnabled

`func (o *TableauExtensionsDashboardV1ServerSettings) GetExtensionsEnabled() bool`

GetExtensionsEnabled returns the ExtensionsEnabled field if non-nil, zero value otherwise.

### GetExtensionsEnabledOk

`func (o *TableauExtensionsDashboardV1ServerSettings) GetExtensionsEnabledOk() (*bool, bool)`

GetExtensionsEnabledOk returns a tuple with the ExtensionsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtensionsEnabled

`func (o *TableauExtensionsDashboardV1ServerSettings) SetExtensionsEnabled(v bool)`

SetExtensionsEnabled sets ExtensionsEnabled field to given value.

### HasExtensionsEnabled

`func (o *TableauExtensionsDashboardV1ServerSettings) HasExtensionsEnabled() bool`

HasExtensionsEnabled returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


