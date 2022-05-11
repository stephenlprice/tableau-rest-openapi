# TableauAnalyticsextensionsV1ConnectionBrief

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConnectionName** | Pointer to **string** | Required. The title of the connection. | [optional] 
**ConnectionType** | Pointer to **string** | Required. The kind of service responding to analytics extension requests. The value can be: TABPY, for a [Tableau TabPy](https://github.com/tableau/TabPy) server; GENERIC_API for your custom service that complies with the [Analytics Extensions API spec](https://tableau.github.io/analytics-extensions-api/docs/ae_intro.html); or RSERVE, for an [Rserve](https://www.tableau.com/solutions/r) service; or EINSTEIN_DISCOVERY for your instance of [Einstein Discovery](https://help.tableau.com/current/server-linux/en-us/config_r_tabpy.htm). | [optional] 

## Methods

### NewTableauAnalyticsextensionsV1ConnectionBrief

`func NewTableauAnalyticsextensionsV1ConnectionBrief() *TableauAnalyticsextensionsV1ConnectionBrief`

NewTableauAnalyticsextensionsV1ConnectionBrief instantiates a new TableauAnalyticsextensionsV1ConnectionBrief object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTableauAnalyticsextensionsV1ConnectionBriefWithDefaults

`func NewTableauAnalyticsextensionsV1ConnectionBriefWithDefaults() *TableauAnalyticsextensionsV1ConnectionBrief`

NewTableauAnalyticsextensionsV1ConnectionBriefWithDefaults instantiates a new TableauAnalyticsextensionsV1ConnectionBrief object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConnectionName

`func (o *TableauAnalyticsextensionsV1ConnectionBrief) GetConnectionName() string`

GetConnectionName returns the ConnectionName field if non-nil, zero value otherwise.

### GetConnectionNameOk

`func (o *TableauAnalyticsextensionsV1ConnectionBrief) GetConnectionNameOk() (*string, bool)`

GetConnectionNameOk returns a tuple with the ConnectionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionName

`func (o *TableauAnalyticsextensionsV1ConnectionBrief) SetConnectionName(v string)`

SetConnectionName sets ConnectionName field to given value.

### HasConnectionName

`func (o *TableauAnalyticsextensionsV1ConnectionBrief) HasConnectionName() bool`

HasConnectionName returns a boolean if a field has been set.

### GetConnectionType

`func (o *TableauAnalyticsextensionsV1ConnectionBrief) GetConnectionType() string`

GetConnectionType returns the ConnectionType field if non-nil, zero value otherwise.

### GetConnectionTypeOk

`func (o *TableauAnalyticsextensionsV1ConnectionBrief) GetConnectionTypeOk() (*string, bool)`

GetConnectionTypeOk returns a tuple with the ConnectionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionType

`func (o *TableauAnalyticsextensionsV1ConnectionBrief) SetConnectionType(v string)`

SetConnectionType sets ConnectionType field to given value.

### HasConnectionType

`func (o *TableauAnalyticsextensionsV1ConnectionBrief) HasConnectionType() bool`

HasConnectionType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


