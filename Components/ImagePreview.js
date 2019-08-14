import React from 'react';
import { Modal, TouchableOpacity, SafeAreaView } from 'react-native';

// Image View
import ImageViewer from 'react-native-image-zoom-viewer';

/* // Icon
import Ionicons from 'react-native-vector-icons/Ionicons'; */

const ImagePreview = (props) => {

  return (

    <Modal visible={true} transparent={true}>

      <SafeAreaView style={{ flex: 1 }}>

      <ImageViewer
        imageUrls={props.imageUrls}
        index={props.index}
        onSwipeDown={props.onSwipeDown}
        enableSwipeDown={true}
       /*  renderHeader={() => (
          <TouchableOpacity
            onPress={props.onSwipeDown}
            style={{ alignItem: 'right', backgroundColor: 'black' }}
          >
            <Ionicons
              right
              size={25}
              name="ios-close"
              style={{ color: 'white', textAlign: 'right', paddingRight: 10 }}
            />
          </TouchableOpacity>
        )} */
      />
      </SafeAreaView>
    </Modal>

  )

}

export default ImagePreview;
