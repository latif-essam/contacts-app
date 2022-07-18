#!/usr/bin/env bash
echo "deploying"
aws s3 cp --recursive --acl public-read --cache-control="max-age=0, no-cache, no-store, must-revalidate" ./build s3://ccontacts-api
