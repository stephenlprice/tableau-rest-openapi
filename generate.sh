docker run --rm -v "${PWD}/reference:/local/reference" openapitools/openapi-generator-cli generate \
    -i local/reference/tableau-rest.json \
    -g java \
    -o /local/reference/java
    