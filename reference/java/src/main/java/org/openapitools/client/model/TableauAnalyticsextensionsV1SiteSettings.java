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
 * TableauAnalyticsextensionsV1SiteSettings
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-05-11T22:38:27.103297Z[Etc/UTC]")
public class TableauAnalyticsextensionsV1SiteSettings {
  public static final String SERIALIZED_NAME_ENABLED = "enabled";
  @SerializedName(SERIALIZED_NAME_ENABLED)
  private Boolean enabled;

  public TableauAnalyticsextensionsV1SiteSettings() { 
  }

  public TableauAnalyticsextensionsV1SiteSettings enabled(Boolean enabled) {
    
    this.enabled = enabled;
    return this;
  }

   /**
   * Get enabled
   * @return enabled
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getEnabled() {
    return enabled;
  }


  public void setEnabled(Boolean enabled) {
    this.enabled = enabled;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TableauAnalyticsextensionsV1SiteSettings tableauAnalyticsextensionsV1SiteSettings = (TableauAnalyticsextensionsV1SiteSettings) o;
    return Objects.equals(this.enabled, tableauAnalyticsextensionsV1SiteSettings.enabled);
  }

  @Override
  public int hashCode() {
    return Objects.hash(enabled);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TableauAnalyticsextensionsV1SiteSettings {\n");
    sb.append("    enabled: ").append(toIndentedString(enabled)).append("\n");
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
    openapiFields.add("enabled");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to TableauAnalyticsextensionsV1SiteSettings
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (TableauAnalyticsextensionsV1SiteSettings.openapiRequiredFields.isEmpty()) {
          return;
        } else { // has required fields
          throw new IllegalArgumentException(String.format("The required field(s) %s in TableauAnalyticsextensionsV1SiteSettings is not found in the empty JSON string", TableauAnalyticsextensionsV1SiteSettings.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!TableauAnalyticsextensionsV1SiteSettings.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `TableauAnalyticsextensionsV1SiteSettings` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!TableauAnalyticsextensionsV1SiteSettings.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'TableauAnalyticsextensionsV1SiteSettings' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<TableauAnalyticsextensionsV1SiteSettings> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(TableauAnalyticsextensionsV1SiteSettings.class));

       return (TypeAdapter<T>) new TypeAdapter<TableauAnalyticsextensionsV1SiteSettings>() {
           @Override
           public void write(JsonWriter out, TableauAnalyticsextensionsV1SiteSettings value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public TableauAnalyticsextensionsV1SiteSettings read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of TableauAnalyticsextensionsV1SiteSettings given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of TableauAnalyticsextensionsV1SiteSettings
  * @throws IOException if the JSON string is invalid with respect to TableauAnalyticsextensionsV1SiteSettings
  */
  public static TableauAnalyticsextensionsV1SiteSettings fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, TableauAnalyticsextensionsV1SiteSettings.class);
  }

 /**
  * Convert an instance of TableauAnalyticsextensionsV1SiteSettings to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}
