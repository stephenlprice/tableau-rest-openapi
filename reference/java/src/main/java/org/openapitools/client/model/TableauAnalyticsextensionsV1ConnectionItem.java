/*
 * API Reference for Tableau Resource Versioned RESTful Endpoints
 * >The following OpenAPI documentation describes the details of the new Tableau RESTful APIs. A growing number of these are  being released alongside more than 150 [classic REST endpoints](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref.htm)  that are currently in wide usage in the Tableau community.    >There are some differences users of the classic endpoints will recognize when viewing these new endpoints. Request bodies for these new REST endpoints must  be formatted using JSON. Endpoint URIs don't contain an API version number. For more information, see  [REST API and Resource Versions](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_versions.htm).   ![tableau platform](https://github.com/stephenlprice/tableau-rest-openapi/blob/main/assets/images/tableau-platform.png?raw=true)
 *
 * The version of the OpenAPI document: 2021.2
 * Contact: stellopricint@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import org.openapitools.client.model.TableauAnalyticsextensionsV1ConnectionBrief;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * 
 */
@ApiModel(description = "")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-05-11T22:38:27.103297Z[Etc/UTC]")
public class TableauAnalyticsextensionsV1ConnectionItem {
  public static final String SERIALIZED_NAME_CONNECTION_LUID = "connection_luid";
  @SerializedName(SERIALIZED_NAME_CONNECTION_LUID)
  private String connectionLuid;

  public static final String SERIALIZED_NAME_HOST = "host";
  @SerializedName(SERIALIZED_NAME_HOST)
  private String host;

  public static final String SERIALIZED_NAME_PORT = "port";
  @SerializedName(SERIALIZED_NAME_PORT)
  private Integer port;

  public static final String SERIALIZED_NAME_IS_AUTH_ENABLED = "is_auth_enabled";
  @SerializedName(SERIALIZED_NAME_IS_AUTH_ENABLED)
  private Boolean isAuthEnabled;

  public static final String SERIALIZED_NAME_USERNAME = "username";
  @SerializedName(SERIALIZED_NAME_USERNAME)
  private String username;

  public static final String SERIALIZED_NAME_PASSWORD = "password";
  @SerializedName(SERIALIZED_NAME_PASSWORD)
  private String password;

  public static final String SERIALIZED_NAME_IS_SSL_ENABLED = "is_ssl_enabled";
  @SerializedName(SERIALIZED_NAME_IS_SSL_ENABLED)
  private Boolean isSslEnabled;

  public static final String SERIALIZED_NAME_CONNECTION_BRIEF = "connection_brief";
  @SerializedName(SERIALIZED_NAME_CONNECTION_BRIEF)
  private TableauAnalyticsextensionsV1ConnectionBrief connectionBrief;

  public TableauAnalyticsextensionsV1ConnectionItem() { 
  }

  public TableauAnalyticsextensionsV1ConnectionItem connectionLuid(String connectionLuid) {
    
    this.connectionLuid = connectionLuid;
    return this;
  }

   /**
   * Get connectionLuid
   * @return connectionLuid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getConnectionLuid() {
    return connectionLuid;
  }


  public void setConnectionLuid(String connectionLuid) {
    this.connectionLuid = connectionLuid;
  }


  public TableauAnalyticsextensionsV1ConnectionItem host(String host) {
    
    this.host = host;
    return this;
  }

   /**
   * Required. The location of an external service (TabPy, Rserve, EINSTEIN_DISCOVERY, Generic API, or other) that responds to your analytics extension requests. The case sensitive value must be a URI, IPv4 or IPv6 address that is a maximum of 255 Unicode characters.
   * @return host
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Required. The location of an external service (TabPy, Rserve, EINSTEIN_DISCOVERY, Generic API, or other) that responds to your analytics extension requests. The case sensitive value must be a URI, IPv4 or IPv6 address that is a maximum of 255 Unicode characters.")

  public String getHost() {
    return host;
  }


  public void setHost(String host) {
    this.host = host;
  }


  public TableauAnalyticsextensionsV1ConnectionItem port(Integer port) {
    
    this.port = port;
    return this;
  }

   /**
   * Required. Integer between 1 and 65535.
   * @return port
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Required. Integer between 1 and 65535.")

  public Integer getPort() {
    return port;
  }


  public void setPort(Integer port) {
    this.port = port;
  }


  public TableauAnalyticsextensionsV1ConnectionItem isAuthEnabled(Boolean isAuthEnabled) {
    
    this.isAuthEnabled = isAuthEnabled;
    return this;
  }

   /**
   * For Tableau Online: The value is always true.     For on premise Tableau servers:  Optional. Set to true if authentication is enabled on the external service. If  true, username and password are required. Default is false.
   * @return isAuthEnabled
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "For Tableau Online: The value is always true.     For on premise Tableau servers:  Optional. Set to true if authentication is enabled on the external service. If  true, username and password are required. Default is false.")

  public Boolean getIsAuthEnabled() {
    return isAuthEnabled;
  }


  public void setIsAuthEnabled(Boolean isAuthEnabled) {
    this.isAuthEnabled = isAuthEnabled;
  }


  public TableauAnalyticsextensionsV1ConnectionItem username(String username) {
    
    this.username = username;
    return this;
  }

   /**
   * For Tableau Online: A username is always required.
   * @return username
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "For Tableau Online: A username is always required.")

  public String getUsername() {
    return username;
  }


  public void setUsername(String username) {
    this.username = username;
  }


  public TableauAnalyticsextensionsV1ConnectionItem password(String password) {
    
    this.password = password;
    return this;
  }

   /**
   * For Tableau Online: A password is always required.
   * @return password
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "For Tableau Online: A password is always required.")

  public String getPassword() {
    return password;
  }


  public void setPassword(String password) {
    this.password = password;
  }


  public TableauAnalyticsextensionsV1ConnectionItem isSslEnabled(Boolean isSslEnabled) {
    
    this.isSslEnabled = isSslEnabled;
    return this;
  }

   /**
   * For Tableau Online: The value is always true.     For on premise Tableau servers:  Optional. Set to true if authentication is enabled on the external service. If  true, username and password are required. Default is false.
   * @return isSslEnabled
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "For Tableau Online: The value is always true.     For on premise Tableau servers:  Optional. Set to true if authentication is enabled on the external service. If  true, username and password are required. Default is false.")

  public Boolean getIsSslEnabled() {
    return isSslEnabled;
  }


  public void setIsSslEnabled(Boolean isSslEnabled) {
    this.isSslEnabled = isSslEnabled;
  }


  public TableauAnalyticsextensionsV1ConnectionItem connectionBrief(TableauAnalyticsextensionsV1ConnectionBrief connectionBrief) {
    
    this.connectionBrief = connectionBrief;
    return this;
  }

   /**
   * Get connectionBrief
   * @return connectionBrief
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public TableauAnalyticsextensionsV1ConnectionBrief getConnectionBrief() {
    return connectionBrief;
  }


  public void setConnectionBrief(TableauAnalyticsextensionsV1ConnectionBrief connectionBrief) {
    this.connectionBrief = connectionBrief;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TableauAnalyticsextensionsV1ConnectionItem tableauAnalyticsextensionsV1ConnectionItem = (TableauAnalyticsextensionsV1ConnectionItem) o;
    return Objects.equals(this.connectionLuid, tableauAnalyticsextensionsV1ConnectionItem.connectionLuid) &&
        Objects.equals(this.host, tableauAnalyticsextensionsV1ConnectionItem.host) &&
        Objects.equals(this.port, tableauAnalyticsextensionsV1ConnectionItem.port) &&
        Objects.equals(this.isAuthEnabled, tableauAnalyticsextensionsV1ConnectionItem.isAuthEnabled) &&
        Objects.equals(this.username, tableauAnalyticsextensionsV1ConnectionItem.username) &&
        Objects.equals(this.password, tableauAnalyticsextensionsV1ConnectionItem.password) &&
        Objects.equals(this.isSslEnabled, tableauAnalyticsextensionsV1ConnectionItem.isSslEnabled) &&
        Objects.equals(this.connectionBrief, tableauAnalyticsextensionsV1ConnectionItem.connectionBrief);
  }

  @Override
  public int hashCode() {
    return Objects.hash(connectionLuid, host, port, isAuthEnabled, username, password, isSslEnabled, connectionBrief);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TableauAnalyticsextensionsV1ConnectionItem {\n");
    sb.append("    connectionLuid: ").append(toIndentedString(connectionLuid)).append("\n");
    sb.append("    host: ").append(toIndentedString(host)).append("\n");
    sb.append("    port: ").append(toIndentedString(port)).append("\n");
    sb.append("    isAuthEnabled: ").append(toIndentedString(isAuthEnabled)).append("\n");
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    isSslEnabled: ").append(toIndentedString(isSslEnabled)).append("\n");
    sb.append("    connectionBrief: ").append(toIndentedString(connectionBrief)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("connection_luid");
    openapiFields.add("host");
    openapiFields.add("port");
    openapiFields.add("is_auth_enabled");
    openapiFields.add("username");
    openapiFields.add("password");
    openapiFields.add("is_ssl_enabled");
    openapiFields.add("connection_brief");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to TableauAnalyticsextensionsV1ConnectionItem
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (TableauAnalyticsextensionsV1ConnectionItem.openapiRequiredFields.isEmpty()) {
          return;
        } else { // has required fields
          throw new IllegalArgumentException(String.format("The required field(s) %s in TableauAnalyticsextensionsV1ConnectionItem is not found in the empty JSON string", TableauAnalyticsextensionsV1ConnectionItem.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!TableauAnalyticsextensionsV1ConnectionItem.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `TableauAnalyticsextensionsV1ConnectionItem` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if (jsonObj.get("connection_luid") != null && !jsonObj.get("connection_luid").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `connection_luid` to be a primitive type in the JSON string but got `%s`", jsonObj.get("connection_luid").toString()));
      }
      if (jsonObj.get("host") != null && !jsonObj.get("host").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `host` to be a primitive type in the JSON string but got `%s`", jsonObj.get("host").toString()));
      }
      if (jsonObj.get("username") != null && !jsonObj.get("username").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `username` to be a primitive type in the JSON string but got `%s`", jsonObj.get("username").toString()));
      }
      if (jsonObj.get("password") != null && !jsonObj.get("password").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `password` to be a primitive type in the JSON string but got `%s`", jsonObj.get("password").toString()));
      }
      // validate the optional field `connection_brief`
      if (jsonObj.getAsJsonObject("connection_brief") != null) {
        TableauAnalyticsextensionsV1ConnectionBrief.validateJsonObject(jsonObj.getAsJsonObject("connection_brief"));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!TableauAnalyticsextensionsV1ConnectionItem.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'TableauAnalyticsextensionsV1ConnectionItem' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<TableauAnalyticsextensionsV1ConnectionItem> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(TableauAnalyticsextensionsV1ConnectionItem.class));

       return (TypeAdapter<T>) new TypeAdapter<TableauAnalyticsextensionsV1ConnectionItem>() {
           @Override
           public void write(JsonWriter out, TableauAnalyticsextensionsV1ConnectionItem value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public TableauAnalyticsextensionsV1ConnectionItem read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of TableauAnalyticsextensionsV1ConnectionItem given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of TableauAnalyticsextensionsV1ConnectionItem
  * @throws IOException if the JSON string is invalid with respect to TableauAnalyticsextensionsV1ConnectionItem
  */
  public static TableauAnalyticsextensionsV1ConnectionItem fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, TableauAnalyticsextensionsV1ConnectionItem.class);
  }

 /**
  * Convert an instance of TableauAnalyticsextensionsV1ConnectionItem to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

