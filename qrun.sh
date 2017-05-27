#!/usr/bin/env bash

pushd dist && export APPSETTING_URL=http://hooray.com; nodemon ../app.js && popd


