# Native Camera/Gallery [Link]
- Take Image from camera [Native] 
- Pic image from gallary [Native]


# Issue
- No MultiSelect


# Plugins

- react-native-image-picker [Awsome] [Take Image & Pick Image NATIVE]
    - npm i react-native-image-picker --save
    - react-native link react-native-image-picker
        - android/app/src/main/AndroidManifest.xml
            - <uses-permission android:name="android.permission.CAMERA" />
            - <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
            - <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        - Refer doc for installaction (especially for IOS)
            - https://github.com/react-native-community/react-native-image-picker/blob/master/docs/Install.md

- react-native-image-viewer [Without Link :)]
    - $ npm i react-native-image-zoom-viewer --save