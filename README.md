환경 변수 등록

- JS 영역
  - react-native-config, .env 에 접근
- IOS 영역

  - build > pre-actions 에서 .env 를 읽어서 tmp.xcconfig 에 옮김
  - Config.xcconfig 는 tmp.xcconfig 를 상속

  ```tsx
  "${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" \
  "${SRCROOT}/.." \
  "${SRCROOT}/tmp.xcconfig"
  ```

  - info.plist 에도 정의하면 런타임에 접근 가능
  - ENVFILE=.env.staging 처럼 파일 명시가능

- AOS
  - WIP
