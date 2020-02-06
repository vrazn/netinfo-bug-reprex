# Reprex for NetInfo Issue [#248](https://github.com/react-native-community/react-native-netinfo/issues/248)

Note: the following behavior is only reproducible on **IOS DEVICES**. Please do not try to reproduce it on the simulator.

### Prerequisites
```
yarn install
cd ios && pod install && cd ..
```
Open the `ios/netinfo.xcworkspace` file in XCode and configure signing by following [this article](https://facebook.github.io/react-native/docs/running-on-device#2-configure-code-signing)

### Steps to reproduce the bug

1. Connect your device to WiFi (the internet should be reachable)
2. Run the code on your IOS device. After opening the app the screen should say that the internet is reachable
3. Lock the screen.
4. Wait for 30+ seconds
5. Unlock the screen. The screen should say that the internet is not reachable.
