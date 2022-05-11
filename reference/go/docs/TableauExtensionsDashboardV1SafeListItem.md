# TableauExtensionsDashboardV1SafeListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SafeListItemLuid** | Pointer to **string** |  | [optional] 
**Url** | Pointer to **string** | Location of the dashboard extension to be allowed on a site. | [optional] 
**AllowFullData** | Pointer to **bool** | When true, the extension has access to underlying data of a workbook. This setting is only effective when the extension is on the site safe list. Default is false. | [optional] 
**PromptNeeded** | Pointer to **bool** | When true, the user will be prompted to grant an extension access to the underlying data of a workbook. This setting is only effective when the extension is on the site safe list. Default is false. | [optional] 

## Methods

### NewTableauExtensionsDashboardV1SafeListItem

`func NewTableauExtensionsDashboardV1SafeListItem() *TableauExtensionsDashboardV1SafeListItem`

NewTableauExtensionsDashboardV1SafeListItem instantiates a new TableauExtensionsDashboardV1SafeListItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTableauExtensionsDashboardV1SafeListItemWithDefaults

`func NewTableauExtensionsDashboardV1SafeListItemWithDefaults() *TableauExtensionsDashboardV1SafeListItem`

NewTableauExtensionsDashboardV1SafeListItemWithDefaults instantiates a new TableauExtensionsDashboardV1SafeListItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSafeListItemLuid

`func (o *TableauExtensionsDashboardV1SafeListItem) GetSafeListItemLuid() string`

GetSafeListItemLuid returns the SafeListItemLuid field if non-nil, zero value otherwise.

### GetSafeListItemLuidOk

`func (o *TableauExtensionsDashboardV1SafeListItem) GetSafeListItemLuidOk() (*string, bool)`

GetSafeListItemLuidOk returns a tuple with the SafeListItemLuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSafeListItemLuid

`func (o *TableauExtensionsDashboardV1SafeListItem) SetSafeListItemLuid(v string)`

SetSafeListItemLuid sets SafeListItemLuid field to given value.

### HasSafeListItemLuid

`func (o *TableauExtensionsDashboardV1SafeListItem) HasSafeListItemLuid() bool`

HasSafeListItemLuid returns a boolean if a field has been set.

### GetUrl

`func (o *TableauExtensionsDashboardV1SafeListItem) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *TableauExtensionsDashboardV1SafeListItem) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *TableauExtensionsDashboardV1SafeListItem) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *TableauExtensionsDashboardV1SafeListItem) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetAllowFullData

`func (o *TableauExtensionsDashboardV1SafeListItem) GetAllowFullData() bool`

GetAllowFullData returns the AllowFullData field if non-nil, zero value otherwise.

### GetAllowFullDataOk

`func (o *TableauExtensionsDashboardV1SafeListItem) GetAllowFullDataOk() (*bool, bool)`

GetAllowFullDataOk returns a tuple with the AllowFullData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowFullData

`func (o *TableauExtensionsDashboardV1SafeListItem) SetAllowFullData(v bool)`

SetAllowFullData sets AllowFullData field to given value.

### HasAllowFullData

`func (o *TableauExtensionsDashboardV1SafeListItem) HasAllowFullData() bool`

HasAllowFullData returns a boolean if a field has been set.

### GetPromptNeeded

`func (o *TableauExtensionsDashboardV1SafeListItem) GetPromptNeeded() bool`

GetPromptNeeded returns the PromptNeeded field if non-nil, zero value otherwise.

### GetPromptNeededOk

`func (o *TableauExtensionsDashboardV1SafeListItem) GetPromptNeededOk() (*bool, bool)`

GetPromptNeededOk returns a tuple with the PromptNeeded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromptNeeded

`func (o *TableauExtensionsDashboardV1SafeListItem) SetPromptNeeded(v bool)`

SetPromptNeeded sets PromptNeeded field to given value.

### HasPromptNeeded

`func (o *TableauExtensionsDashboardV1SafeListItem) HasPromptNeeded() bool`

HasPromptNeeded returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


