#!/usr/bin/env sh

echo "
{
  \"GatewayApiUrl\" : \"${GATEWAY_API_URL}\",
  \"ActiveDirectoryTenant\" : \"${ACTIVE_DIRECTORY_TENANT}\",
  \"ActiveDirectoryClientId\" : \"${ACTIVE_DIRECTORY_CLIENTID}\"
}
" > /usr/share/nginx/html/config.json

nginx -g 'daemon off;'