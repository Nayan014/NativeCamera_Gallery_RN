import React from 'react';

// Native Camera and gallery
import ImagePicker from 'react-native-image-picker';

const NativeCamera = (props) => {

    selectPhotoTapped = () => {
        const options = {
            quality: 1.0,
            // maxWidth: 500,
            // maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Image Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {

                // Improved for react-native-image-viewer Plugin
                let imageData = { ...response, url: response.uri };
                props.getImageData(imageData);
                // for 'react-native-image-zoom-viewer' Plugin
                //  let d = { url: response.uri };
            }
        });
    }


    return (
        <>
            {this.selectPhotoTapped()}
        </>
    )
}

export default NativeCamera;
