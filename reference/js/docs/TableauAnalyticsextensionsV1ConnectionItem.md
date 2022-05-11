# ApiReferenceForTableauResourceVersionedResTfulEndpoints.TableauAnalyticsextensionsV1ConnectionItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectionLuid** | **String** |  | [optional] 
**host** | **String** | Required. The location of an external service (TabPy, Rserve, EINSTEIN_DISCOVERY, Generic API, or other) that responds to your analytics extension requests. The case sensitive value must be a URI, IPv4 or IPv6 address that is a maximum of 255 Unicode characters. | [optional] 
**port** | **Number** | Required. Integer between 1 and 65535. | [optional] 
**isAuthEnabled** | **Boolean** | For Tableau Online: The value is always true.     For on premise Tableau servers:  Optional. Set to true if authentication is enabled on the external service. If  true, username and password are required. Default is false. | [optional] 
**username** | **String** | For Tableau Online: A username is always required. | [optional] 
**password** | **String** | For Tableau Online: A password is always required. | [optional] 
**isSslEnabled** | **Boolean** | For Tableau Online: The value is always true.     For on premise Tableau servers:  Optional. Set to true if authentication is enabled on the external service. If  true, username and password are required. Default is false. | [optional] 
**connectionBrief** | [**TableauAnalyticsextensionsV1ConnectionBrief**](TableauAnalyticsextensionsV1ConnectionBrief.md) |  | [optional] 


