import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import FirstSvg from '../assets/svg/accelerate-svgrepo-com.svg'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
// import { transformer } from '../metro.config';

export  function Welcome() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', height: 50 }} >
                <View>
                    <Text style={styles.text}>Welcome</Text>
                </View>
                <FirstSvg
                    width={200}
                    height={200}
                    // style= {{transformer:[{rotate: '15deg'}]}}
                />
                <TouchableOpacity style={styles.loginOpacity}>
                    <Text style={{ fontSize: 18, color: "#ffff", fontWeight: 'bold' }}>click here</Text>
                    <FontAwesomeIcon
                        size={22}
                        icon={faRightToBracket}
                        style={{ color: "#ffff" }} />
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#20315f'
    },
    loginOpacity: {
        backgroundColor: '#ad40af',
        width: '90%',
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'space-between',
        padding: 20,
        marginBottom: 20,


    }
});
