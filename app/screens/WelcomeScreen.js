import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Alert, NetInfo, Image } from 'react-native'

//modules
import EStyleSheet from 'react-native-extended-stylesheet'
import { Actions } from 'react-native-router-flux'
import LottieView from 'lottie-react-native'

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    goNext = () => {
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            if(connectionInfo.type == "none") {
                Alert.alert(
                    'Geen netwerkconnectie',
                    'Om een probleem te melden heb je een netwerkconnectie nodig.',
                    [
                      {
                        text: 'Cancel',
                        style: 'cancel',
                      },
                    ],
                    {cancelable: false},
                )
            } else {
                Actions.home()
            }
          });
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>ROAD</Text>
                    <Text style={styles.title}>REPORT</Text>
                </View>

    
                <TouchableOpacity onPress={() => this.goNext()} style={styles.submitButton}>
                    <Text style={styles.buttonText}>Meld een Probleem</Text>
                </TouchableOpacity>

                <View style={{width: '70%', alignItems: 'center'}}>
                    <Text style={styles.message}>Rapportering voor fietsers en wandelaars. Maak Gent een betere plek!</Text>
                </View>
                {/*<Image
                style={{width: '50%', position: 'absolute', alignSelf: 'center', bottom: 20}}
                source={require('../assets/icon.png')}
                resizeMode={'contain'}
                />*/}
            </View>
        );
    }
}

const styles = EStyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    submitButton: {
        width: '90%',
        height: 60,
        marginTop: 40,
        marginBottom: 40,
        borderRadius: 6,
        backgroundColor: '#8786c0', 
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        fontFamily: '$openSansBold',
    },
    label: {
        fontSize: 20,     },
    gif: {
        width: '80%',
    },
    message: {
        fontSize: 22,
        width: '90%',
        textAlign: 'center',
        color: '#444',
        fontFamily: '$openSansRegular',
    },
    title: {
        fontSize: 54,
        width: '90%',
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: '$openSansExtrabold',
        color: '#8786c0',
    }

});

export default WelcomeScreen