# TableauExtensionsDashboardV1SiteSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExtensionsEnabled** | Pointer to **bool** | Specifies whether extensions are allowed to run on the site. | [optional] 
**AllowSandboxed** | Pointer to **bool** | Specifies whether sandboxed extensions are allowed to run on the site. | [optional] 
**SafeListItems** | Pointer to [**[]TableauExtensionsDashboardV1SafeListItem**](TableauExtensionsDashboardV1SafeListItem.md) |  | [optional] 

## Methods

### NewTableauExtensionsDashboardV1SiteSettings

`func NewTableauExtensionsDashboardV1SiteSettings() *TableauExtensionsDashboardV1SiteSettings`

NewTableauExtensionsDashboardV1SiteSettings instantiates a new TableauExtensionsDashboardV1SiteSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTableauExtensionsDashboardV1SiteSettingsWithDefaults

`func NewTableauExtensionsDashboardV1SiteSettingsWithDefaults() *TableauExtensionsDashboardV1SiteSettings`

NewTableauExtensionsDashboardV1SiteSettingsWithDefaults instantiates a new TableauExtensionsDashboardV1SiteSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExtensionsEnabled

`func (o *TableauExtensionsDashboardV1SiteSettings) GetExtensionsEnabled() bool`

GetExtensionsEnabled returns the ExtensionsEnabled field if non-nil, zero value otherwise.

### GetExtensionsEnabledOk

`func (o *TableauExtensionsDashboardV1SiteSettings) GetExtensionsEnabledOk() (*bool, bool)`

GetExtensionsEnabledOk returns a tuple with the ExtensionsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtensionsEnabled

`func (o *TableauExtensionsDashboardV1SiteSettings) SetExtensionsEnabled(v bool)`

SetExtensionsEnabled sets ExtensionsEnabled field to given value.

### HasExtensionsEnabled

`func (o *TableauExtensionsDashboardV1SiteSettings) HasExtensionsEnabled() bool`

HasExtensionsEnabled returns a boolean if a field has been set.

### GetAllowSandboxed

`func (o *TableauExtensionsDashboardV1SiteSettings) GetAllowSandboxed() bool`

GetAllowSandboxed returns the AllowSandboxed field if non-nil, zero value otherwise.

### GetAllowSandboxedOk

`func (o *TableauExtensionsDashboardV1SiteSettings) GetAllowSandboxedOk() (*bool, bool)`

GetAllowSandboxedOk returns a tuple with the AllowSandboxed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowSandboxed

`func (o *TableauExtensionsDashboardV1SiteSettings) SetAllowSandboxed(v bool)`

SetAllowSandboxed sets AllowSandboxed field to given value.

### HasAllowSandboxed

`func (o *TableauExtensionsDashboardV1SiteSettings) HasAllowSandboxed() bool`

HasAllowSandboxed returns a boolean if a field has been set.

### GetSafeListItems

`func (o *TableauExtensionsDashboardV1SiteSettings) GetSafeListItems() []TableauExtensionsDashboardV1SafeListItem`

GetSafeListItems returns the SafeListItems field if non-nil, zero value otherwise.

### GetSafeListItemsOk

`func (o *TableauExtensionsDashboardV1SiteSettings) GetSafeListItemsOk() (*[]TableauExtensionsDashboardV1SafeListItem, bool)`

GetSafeListItemsOk returns a tuple with the SafeListItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSafeListItems

`func (o *TableauExtensionsDashboardV1SiteSettings) SetSafeListItems(v []TableauExtensionsDashboardV1SafeListItem)`

SetSafeListItems sets SafeListItems field to given value.

### HasSafeListItems

`func (o *TableauExtensionsDashboardV1SiteSettings) HasSafeListItems() bool`

HasSafeListItems returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


