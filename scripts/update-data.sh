#!/bin/bash

cd "$(dirname $0)/.." || exit 1

# Update api data from taiwan exchange open api
URL="https://openapi.twse.com.tw/v1"

update_data() {
    ENTRY="$1"
    echo "update data: $ENTRY"
    curl -s \
        -H "Accept: application/json" \
        -H "Cache-Control: no-cache" \
        -H "Pragma: no-cache" \
        -o "public/api/$ENTRY.json" \
        "$URL/$ENTRY"
}

# Update stock data
update_data "ETFReport/ETFRank"
update_data "brokerService/brokerList"
