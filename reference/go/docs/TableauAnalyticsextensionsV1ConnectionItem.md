# TableauAnalyticsextensionsV1ConnectionItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionLuid** | Pointer to **string** |  | [optional] 
**Host** | Pointer to **string** | Required. The location of an external service (TabPy, Rserve, EINSTEIN_DISCOVERY, Generic API, or other) that responds to your analytics extension requests. The case sensitive value must be a URI, IPv4 or IPv6 address that is a maximum of 255 Unicode characters. | [optional] 
**Port** | Pointer to **int32** | Required. Integer between 1 and 65535. | [optional] 
**IsAuthEnabled** | Pointer to **bool** | For Tableau Online: The value is always true.     For on premise Tableau servers:  Optional. Set to true if authentication is enabled on the external service. If  true, username and password are required. Default is false. | [optional] 
**Username** | Pointer to **string** | For Tableau Online: A username is always required. | [optional] 
**Password** | Pointer to **string** | For Tableau Online: A password is always required. | [optional] 
**IsSslEnabled** | Pointer to **bool** | For Tableau Online: The value is always true.     For on premise Tableau servers:  Optional. Set to true if authentication is enabled on the external service. If  true, username and password are required. Default is false. | [optional] 
**ConnectionBrief** | Pointer to [**TableauAnalyticsextensionsV1ConnectionBrief**](TableauAnalyticsextensionsV1ConnectionBrief.md) |  | [optional] 

## Methods

### NewTableauAnalyticsextensionsV1ConnectionItem

`func NewTableauAnalyticsextensionsV1ConnectionItem() *TableauAnalyticsextensionsV1ConnectionItem`

NewTableauAnalyticsextensionsV1ConnectionItem instantiates a new TableauAnalyticsextensionsV1ConnectionItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTableauAnalyticsextensionsV1ConnectionItemWithDefaults

`func NewTableauAnalyticsextensionsV1ConnectionItemWithDefaults() *TableauAnalyticsextensionsV1ConnectionItem`

NewTableauAnalyticsextensionsV1ConnectionItemWithDefaults instantiates a new TableauAnalyticsextensionsV1ConnectionItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectionLuid

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetConnectionLuid() string`

GetConnectionLuid returns the ConnectionLuid field if non-nil, zero value otherwise.

### GetConnectionLuidOk

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetConnectionLuidOk() (*string, bool)`

GetConnectionLuidOk returns a tuple with the ConnectionLuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionLuid

`func (o *TableauAnalyticsextensionsV1ConnectionItem) SetConnectionLuid(v string)`

SetConnectionLuid sets ConnectionLuid field to given value.

### HasConnectionLuid

`func (o *TableauAnalyticsextensionsV1ConnectionItem) HasConnectionLuid() bool`

HasConnectionLuid returns a boolean if a field has been set.

### GetHost

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *TableauAnalyticsextensionsV1ConnectionItem) SetHost(v string)`

SetHost sets Host field to given value.

### HasHost

`func (o *TableauAnalyticsextensionsV1ConnectionItem) HasHost() bool`

HasHost returns a boolean if a field has been set.

### GetPort

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetPort() int32`

GetPort returns the Port field if non-nil, zero value otherwise.

### GetPortOk

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetPortOk() (*int32, bool)`

GetPortOk returns a tuple with the Port field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPort

`func (o *TableauAnalyticsextensionsV1ConnectionItem) SetPort(v int32)`

SetPort sets Port field to given value.

### HasPort

`func (o *TableauAnalyticsextensionsV1ConnectionItem) HasPort() bool`

HasPort returns a boolean if a field has been set.

### GetIsAuthEnabled

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetIsAuthEnabled() bool`

GetIsAuthEnabled returns the IsAuthEnabled field if non-nil, zero value otherwise.

### GetIsAuthEnabledOk

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetIsAuthEnabledOk() (*bool, bool)`

GetIsAuthEnabledOk returns a tuple with the IsAuthEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsAuthEnabled

`func (o *TableauAnalyticsextensionsV1ConnectionItem) SetIsAuthEnabled(v bool)`

SetIsAuthEnabled sets IsAuthEnabled field to given value.

### HasIsAuthEnabled

`func (o *TableauAnalyticsextensionsV1ConnectionItem) HasIsAuthEnabled() bool`

HasIsAuthEnabled returns a boolean if a field has been set.

### GetUsername

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *TableauAnalyticsextensionsV1ConnectionItem) SetUsername(v string)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *TableauAnalyticsextensionsV1ConnectionItem) HasUsername() bool`

HasUsername returns a boolean if a field has been set.

### GetPassword

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *TableauAnalyticsextensionsV1ConnectionItem) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *TableauAnalyticsextensionsV1ConnectionItem) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetIsSslEnabled

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetIsSslEnabled() bool`

GetIsSslEnabled returns the IsSslEnabled field if non-nil, zero value otherwise.

### GetIsSslEnabledOk

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetIsSslEnabledOk() (*bool, bool)`

GetIsSslEnabledOk returns a tuple with the IsSslEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSslEnabled

`func (o *TableauAnalyticsextensionsV1ConnectionItem) SetIsSslEnabled(v bool)`

SetIsSslEnabled sets IsSslEnabled field to given value.

### HasIsSslEnabled

`func (o *TableauAnalyticsextensionsV1ConnectionItem) HasIsSslEnabled() bool`

HasIsSslEnabled returns a boolean if a field has been set.

### GetConnectionBrief

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetConnectionBrief() TableauAnalyticsextensionsV1ConnectionBrief`

GetConnectionBrief returns the ConnectionBrief field if non-nil, zero value otherwise.

### GetConnectionBriefOk

`func (o *TableauAnalyticsextensionsV1ConnectionItem) GetConnectionBriefOk() (*TableauAnalyticsextensionsV1ConnectionBrief, bool)`

GetConnectionBriefOk returns a tuple with the ConnectionBrief field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionBrief

`func (o *TableauAnalyticsextensionsV1ConnectionItem) SetConnectionBrief(v TableauAnalyticsextensionsV1ConnectionBrief)`

SetConnectionBrief sets ConnectionBrief field to given value.

### HasConnectionBrief

`func (o *TableauAnalyticsextensionsV1ConnectionItem) HasConnectionBrief() bool`

HasConnectionBrief returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


