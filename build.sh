curl -Ls http://s3.voneicken.com/xtensa-lx106-elf-20160330.tgx | tar Jxf -
curl -Ls http://s3.voneicken.com/esp_iot_sdk_v2.1.0.tgx | tar -C .. -Jxf -
export XTENSA_TOOLS_ROOT=$PWD/xtensa-lx106-elf/bin/
export BRANCH=$TRAVIS_BRANCH
    #- export SDK_BASE=$PWD/esp_iot_sdk_v2.0.0.p1
git tag -n1
git describe --tags --match 'v*.0' --long --debug
make release