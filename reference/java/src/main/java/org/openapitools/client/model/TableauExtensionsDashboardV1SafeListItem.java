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
 * A dashboard extension that is allowed to run on a site.
 */
@ApiModel(description = "A dashboard extension that is allowed to run on a site.")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-05-11T22:38:27.103297Z[Etc/UTC]")
public class TableauExtensionsDashboardV1SafeListItem {
  public static final String SERIALIZED_NAME_SAFE_LIST_ITEM_LUID = "safe_list_item_luid";
  @SerializedName(SERIALIZED_NAME_SAFE_LIST_ITEM_LUID)
  private String safeListItemLuid;

  public static final String SERIALIZED_NAME_URL = "url";
  @SerializedName(SERIALIZED_NAME_URL)
  private String url;

  public static final String SERIALIZED_NAME_ALLOW_FULL_DATA = "allow_full_data";
  @SerializedName(SERIALIZED_NAME_ALLOW_FULL_DATA)
  private Boolean allowFullData;

  public static final String SERIALIZED_NAME_PROMPT_NEEDED = "prompt_needed";
  @SerializedName(SERIALIZED_NAME_PROMPT_NEEDED)
  private Boolean promptNeeded;

  public TableauExtensionsDashboardV1SafeListItem() { 
  }

  public TableauExtensionsDashboardV1SafeListItem safeListItemLuid(String safeListItemLuid) {
    
    this.safeListItemLuid = safeListItemLuid;
    return this;
  }

   /**
   * Get safeListItemLuid
   * @return safeListItemLuid
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getSafeListItemLuid() {
    return safeListItemLuid;
  }


  public void setSafeListItemLuid(String safeListItemLuid) {
    this.safeListItemLuid = safeListItemLuid;
  }


  public TableauExtensionsDashboardV1SafeListItem url(String url) {
    
    this.url = url;
    return this;
  }

   /**
   * Location of the dashboard extension to be allowed on a site.
   * @return url
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Location of the dashboard extension to be allowed on a site.")

  public String getUrl() {
    return url;
  }


  public void setUrl(String url) {
    this.url = url;
  }


  public TableauExtensionsDashboardV1SafeListItem allowFullData(Boolean allowFullData) {
    
    this.allowFullData = allowFullData;
    return this;
  }

   /**
   * When true, the extension has access to underlying data of a workbook. This setting is only effective when the extension is on the site safe list. Default is false.
   * @return allowFullData
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "When true, the extension has access to underlying data of a workbook. This setting is only effective when the extension is on the site safe list. Default is false.")

  public Boolean getAllowFullData() {
    return allowFullData;
  }


  public void setAllowFullData(Boolean allowFullData) {
    this.allowFullData = allowFullData;
  }


  public TableauExtensionsDashboardV1SafeListItem promptNeeded(Boolean promptNeeded) {
    
    this.promptNeeded = promptNeeded;
    return this;
  }

   /**
   * When true, the user will be prompted to grant an extension access to the underlying data of a workbook. This setting is only effective when the extension is on the site safe list. Default is false.
   * @return promptNeeded
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "When true, the user will be prompted to grant an extension access to the underlying data of a workbook. This setting is only effective when the extension is on the site safe list. Default is false.")

  public Boolean getPromptNeeded() {
    return promptNeeded;
  }


  public void setPromptNeeded(Boolean promptNeeded) {
    this.promptNeeded = promptNeeded;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TableauExtensionsDashboardV1SafeListItem tableauExtensionsDashboardV1SafeListItem = (TableauExtensionsDashboardV1SafeListItem) o;
    return Objects.equals(this.safeListItemLuid, tableauExtensionsDashboardV1SafeListItem.safeListItemLuid) &&
        Objects.equals(this.url, tableauExtensionsDashboardV1SafeListItem.url) &&
        Objects.equals(this.allowFullData, tableauExtensionsDashboardV1SafeListItem.allowFullData) &&
        Objects.equals(this.promptNeeded, tableauExtensionsDashboardV1SafeListItem.promptNeeded);
  }

  @Override
  public int hashCode() {
    return Objects.hash(safeListItemLuid, url, allowFullData, promptNeeded);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TableauExtensionsDashboardV1SafeListItem {\n");
    sb.append("    safeListItemLuid: ").append(toIndentedString(safeListItemLuid)).append("\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
    sb.append("    allowFullData: ").append(toIndentedString(allowFullData)).append("\n");
    sb.append("    promptNeeded: ").append(toIndentedString(promptNeeded)).append("\n");
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
    openapiFields.add("safe_list_item_luid");
    openapiFields.add("url");
    openapiFields.add("allow_full_data");
    openapiFields.add("prompt_needed");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to TableauExtensionsDashboardV1SafeListItem
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (TableauExtensionsDashboardV1SafeListItem.openapiRequiredFields.isEmpty()) {
          return;
        } else { // has required fields
          throw new IllegalArgumentException(String.format("The required field(s) %s in TableauExtensionsDashboardV1SafeListItem is not found in the empty JSON string", TableauExtensionsDashboardV1SafeListItem.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!TableauExtensionsDashboardV1SafeListItem.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `TableauExtensionsDashboardV1SafeListItem` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
      if (jsonObj.get("safe_list_item_luid") != null && !jsonObj.get("safe_list_item_luid").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `safe_list_item_luid` to be a primitive type in the JSON string but got `%s`", jsonObj.get("safe_list_item_luid").toString()));
      }
      if (jsonObj.get("url") != null && !jsonObj.get("url").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `url` to be a primitive type in the JSON string but got `%s`", jsonObj.get("url").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!TableauExtensionsDashboardV1SafeListItem.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'TableauExtensionsDashboardV1SafeListItem' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<TableauExtensionsDashboardV1SafeListItem> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(TableauExtensionsDashboardV1SafeListItem.class));

       return (TypeAdapter<T>) new TypeAdapter<TableauExtensionsDashboardV1SafeListItem>() {
           @Override
           public void write(JsonWriter out, TableauExtensionsDashboardV1SafeListItem value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public TableauExtensionsDashboardV1SafeListItem read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of TableauExtensionsDashboardV1SafeListItem given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of TableauExtensionsDashboardV1SafeListItem
  * @throws IOException if the JSON string is invalid with respect to TableauExtensionsDashboardV1SafeListItem
  */
  public static TableauExtensionsDashboardV1SafeListItem fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, TableauExtensionsDashboardV1SafeListItem.class);
  }

 /**
  * Convert an instance of TableauExtensionsDashboardV1SafeListItem to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}
