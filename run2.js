#!/bin/sh
UUID=${UUID:-'58599bd4-bbda-4a10-be8f-4e0213a13386'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
