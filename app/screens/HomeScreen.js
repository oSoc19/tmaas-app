import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert} from 'react-native'

//modules
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dropdown } from 'react-native-material-dropdown';
import {Actions} from 'react-native-router-flux'

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            status: "",
            problem: "",
            street: "",
            number: "",
            city: "",
            category: "",
            otherBoxDisplayState: 'none',
        }
    }

    postToApi = () => {
        Actions.address()
    }

    render() {

        let categories = [{
            value: 'Bicycle path/footpath',
            }, {
            value: 'Signalisation',
            }, {
            value: 'Bicycle rack',
            },{
            value: 'Cycling infrastructure',
            },{
            value: 'Other',
            },];

        let events = []

        switch(this.state.category) {

            case 'Bicycle path/footpath':
                events = [{
                    value: 'Hole in footpath',
                    }, {
                    value: 'Hole in bicycle path',
                    }, {
                    value: 'Damaged footpath',
                    },{
                    value: 'Damaged bicycle path',
                    },{
                    value: 'Unclear marking pedestrian crossing',
                    },{
                    value: 'Unclear marking bicycle path',
                    },{
                    value: 'Snow, frost, slipperiness',
                    },{
                    value: 'Glass ',
                    },{
                    value: 'Blocked guiding lines for blind people',
                    },{
                    value: 'Obstructive intake of footpath',
                    },{
                    value: 'Obstructive intake of bicycle path',
                    },];
                break;
            
            case 'Signalisation':
                events = [{
                    value: 'Sign gone/moved',
                    }, {
                    value: 'Traffic light defect',
                    }, {
                    value: 'Traffic light button defect',
                    },{
                    value: 'Problem with VMS sign',
                    },{
                    value: 'Bicycle counter defect',
                    },];
                break;
        
            case 'Bicycle rack':
                events = [{
                    value: 'Always full',
                    }, {
                    value: 'In need of reparation',
                    }, {
                    value: 'Weed / trash',
                    },{
                    value: 'Left bicycles',
                    },{
                    value: 'Suggestion for sheltered/indoor bicycle rack',
                    },];
                break;
        
            case 'Cycling infrastructure':
                events = [{
                    value: 'Broken cycling pump',
                    }, {
                    value: 'Broken/empty cycling lights vending machine',
                    }, {
                    value: 'Broken repair machine',
                    },];
                break;

            case 'Other':
                events = [{
                    value: 'Unaccessible footpath for wheelchairs',
                    }, {
                    value: 'Dangerous crossing for cyclists/pedestrians',
                    }, {
                    value: 'Dangerous situation for cyclists/pedestrians',
                    },{
                    value: 'Crowdedness on footpaths',
                    }, {
                    value: 'Missing/defect street lights',
                    }, {
                    value: 'Other',
                    },];
                break;
        
            default:
                events = []
            
            }

            checkForOther = (value) => {
                console.log(value)
                if(value == 'Other')
                    this.setState({
                        otherBoxDisplayState: 'flex'
                    })
                else
                    this.setState({
                        otherBoxDisplayState: 'none'
                    })
            }

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.heading}>Report a problem</Text>
                </View>

                <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled keyboardVerticalOffset={0}> 
                    <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
                        <View style={{flex: 1}}>
                            <View style={styles.commentContainer}>
                                <Text style={styles.label}>Problem</Text>
                                <Dropdown
                                    onChangeText={(value) => this.setState({category: value})}
                                    baseColor={"#0A0A0A"}
                                    labelFontSize={18}
                                    label='Category'
                                    data={categories}
                                    itemCount={16}
                                />
                                <Dropdown
                                    onChangeText={(value) => {this.setState({problem: value}); checkForOther(value)}}
                                    baseColor={"#0A0A0A"}
                                    labelFontSize={18}
                                    label='Event'
                                    data={events}
                                    itemCount={16}
                                />
                            </View>
                            <View style={{display: this.state.otherBoxDisplayState}}>
                                <View style={styles.commentContainer}>
                                    <Text style={styles.label}>What's the problem?</Text>
                                    <TextInput
                                        placeholder = {"Describe the problem..."}
                                        onChangeText={(comment) => this.setState({comment})}
                                        value={this.state.comment}
                                        editable = {true}
                                        maxLength = {255}
                                        style={styles.textInput}
                                    />
                                </View>
                            </View>
                        </View>
                    
                        <View style={styles.bottomContainer}>
                            <View style={styles.pagination}>
                                <View style={styles.circel__selected}/>
                                <View style={styles.circel}/>
                                <View style={styles.circel}/>
                                <View style={styles.circel}/>
                            </View>

                            <TouchableOpacity style={styles.submitButton} onPress={this.postToApi}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </KeyboardAvoidingView>

            </View>
        );
    }
}

const styles = EStyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        color: '#0F0F0F',
    },
    bottomContainer: {
        flexDirection: 'column',
    },
    pagination: {
        marginTop: 11,
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    circel: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#cfcfcf',
    },
    circel__selected: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#6e6e6e',
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '100%',
        height: '11%',
        backgroundColor: '#2594d9',
        paddingLeft: '5%',
    },
    commentContainer: {
        backgroundColor: 'white',
        marginTop: '5%',
        padding: '4%',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '90%',
        borderRadius: 12,
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
        fontSize: 28,
        color: 'white',
        fontFamily: '$openSansBold',
    },
    textInput: {
        marginTop: 6,
        borderBottomWidth: 0.45,
        borderColor: '#000',
        borderRadius: 6,
        height: 40,
        width: '100%',
        paddingBottom: 6,
        fontSize: 16,
        fontFamily: '$openSansRegular',
    },
    streetInput: {
        borderBottomWidth: 0.45,
        borderColor: '#000',
        borderRadius: 6,
        height: 40,
        width: '74%',
        paddingBottom: 6,
        fontSize: 16,
        fontFamily: '$openSansRegular',
    },
    numberInput: {
        borderBottomWidth: 0.45,
        borderColor: '#000',
        borderRadius: 6,
        height: 40,
        width: '24%',
        paddingBottom: 6,
        fontSize: 16,
        fontFamily: '$openSansRegular',
    },
    submitButton: {
        marginTop: 11,
        marginBottom: 22,
        width: '90%',
        height: 60,
        borderRadius: 30,
        backgroundColor: '#6CE077', 
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

export default HomeScreen