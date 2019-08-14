import React, { Component } from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';

import NativeCamera from './Components/NativeCamera';

export default class App extends Component {

  state = {
    isGettingImage: false,

    isImagePriview: false,
    imagePriviewIndex: 0,
    
    imageArray: []
  }

  getImageData = (data) => {
    let imageArray = [...this.state.imageArray];
    imageArray.push(data);
    this.setState({
      imageArray: imageArray,
      isGettingImage: false
    })
  }

  _renderImage = () => {

    if (this.state.imageArray.length) {

      return this.state.imageArray.map((v, index) => {
        return (
          <View style={{ padding: 10 }}>
            <TouchableOpacity onPress={() => {
              this.setState({
                isImagePriview: true,
                imagePriviewIndex: index
              })
            }}>
              <Image
                style={{ width: 100, height: 100 }}
                source={v}
              />
            </TouchableOpacity>
          </View>
        )
      })

    }

    return null;

  }

  _renderPreview = () => {

    if (this.state.isImagePriview) {
      return (
        <ImagePreview
          imageUrls={this.state.imageArray}
          index={this.state.imagePriviewIndex}
          onSwipeDown={() => {
            this.setState({ isImagePriview: false })
          }}
        />
      )
    }

    return null;
  }

  render() {
    return (
      <View style={{ paddingTop: 50, paddingHorizontal: 15 }}>

        <Button
          onPress={() => {
            this.setState({
              isGettingImage: true
            })
          }}
          title="Pick Image"
          color="red"
        />

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this._renderImage()}
        </View>


        {this.state.isGettingImage &&
          <NativeCamera getImageData={this.getImageData} />
        }

        {this._renderPreview()}

      </View>
    )
  }
}
