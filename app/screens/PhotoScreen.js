import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity, Alert, Image, AsyncStorage} from 'react-native'
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

//modules
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux'

class PhotoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            photo: {
                uri: null,
                base64: "",
                display: "none",
            }
        };
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    goNext = () => {
        this._storeData()
        Actions.comment()
    }

    goBack = () => {
        Actions.pop()
    }

    _storeData = async () => {
        try {
            AsyncStorage.setItem(Storage.PHOTO, this.state.photo.base64)
        } catch (error) {
            console.log(error)
        }
    }

    handleCameraRef = (camera) => {
        this.camera = camera;
    }

    snap = () => {
        if (this.camera) {
            const options = { quality: 1, base64: true, fixOrientation: true, exif: true, skipProcessing: false};
            this.camera.takePictureAsync(options)
                .then(photo => {
                    photo.exif.Orientation = 1;
                    this.setState({
                        photo: {
                            uri: photo.uri,
                            base64: photo.base64,
                            display: "flex",
                        }
                    })
                });     
        }
    }

    tryAgain = () => {
        this.setState({
            photo: {
                uri: null,
                base64: "",
                display: "none",
            }
        })
    }

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
          return <View />;
        } else if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        } else {
          return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <Text style={styles.heading}>Maak een foto</Text>
                    <Text style={styles.heading}>3/4</Text>
                </View>

                <Camera ref={this.handleCameraRef} style={{ flex: 1, flexDirection: "column", justifyContent: "flex-end", alignItems: 'center' }} type={this.state.type}>

                    <View style={{alignItems: 'center', alignSelf: 'center', width: '100%', backgroundColor: 'white', paddingTop: 11}}>
                        <TouchableOpacity style={styles.trigger__outer} onPress={this.snap}>
                            <View style={styles.trigger__inner}>
                                <Image 
                                    style={{width: '70%', height: '70%', alignSelf: 'center'}} 
                                    resizeMode="contain"
                                    source={require("../assets/camera_icon.png")}
                                />
                            </View>
                        </TouchableOpacity>

                        <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '5%', paddingRight: '5%'}}>
                            <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
                                <Text style={styles.buttonText}>Terug</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.submitButton} onPress={this.goNext}>
                                <Text style={styles.buttonText}>Overslaan</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Camera>
                <View style={{flex:1, display: this.state.photo.display, position: 'absolute', flexDirection: 'column',alignItems: 'flex-end', width: '100%', height: '100%', zIndex: 2, backgroundColor: '#000'}} >
                    <View style={{position: 'absolute' , bottom: 0, width: '100%', flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between', paddingLeft: '5%', paddingRight: '5%', zIndex: 5}}>
                        <TouchableOpacity style={styles.backButton} onPress={this.tryAgain}>
                            <Text style={styles.buttonText}>Opnieuw</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitButton} onPress={this.goNext}>
                            <Text style={styles.buttonText}>Volgende</Text>
                        </TouchableOpacity>
                    </View>
                    <Image style={{width: '100%', height: '100%', zIndex: 2}} resizeMode="contain"  source={{uri: this.state.photo.uri }}/>
                    
                </View>
            </View>
          );
        }
    
    }
}

const styles = EStyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        color: '#0F0F0F',
    },
    trigger__outer: {
        backgroundColor: '#6CE077',
        justifyContent: 'space-around',
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    trigger__inner: {
        backgroundColor: '#6CE077',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 3,
        borderColor: '#FFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
        height: '11%',
        backgroundColor: '#2594d9',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    commentContainer: {
        backgroundColor: 'white',
        marginTop: '5%',
        padding: '4%',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '90%',
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.10,
        shadowRadius: 20,

        elevation: 35,
    },
    heading: {
        paddingBottom: 8,
        fontSize: 24,
        color: 'white',
        fontFamily: '$openSansBold',
    },
    submitButton: {
        marginTop: 11,
        marginBottom: 22,
        width: '47.5%',
        height: 60,
        borderRadius: 30,
        backgroundColor: '#2594d9', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
    },
    backButton: {
        marginTop: 11,
        marginBottom: 22,
        width: '47.5%',
        height: 60,
        borderRadius: 30,
        backgroundColor: '#bdbdbd', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        fontFamily: '$openSansBold',
    },
    label: {
        fontFamily: '$openSansSemibold',
        fontSize: 20, 
    }

});

export default PhotoScreen