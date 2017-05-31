ng build && docker build -t nginit . && docker run -it --rm -p 8000:80 -e GATEWAY_API_URL=http://hooray.com nginit
