import React, { useState } from 'react';

import {
        SafeAreaView,
        StyleSheet,
        View,
        Text,
        TouchableOpacity
} from 'react-native';

import DeviceInfo, { getDeviceId } from 'react-native-device-info';

const CellPhone = () => {
    const [deviceId, setdeviceId] = useState('Click below to get Unique ID')
    
    const getdeviceId = () => {
        var uniqueId = DeviceInfo.getUniqueId();
        setdeviceId(uniqueId);
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>
                    React Native Get Unique ID of Device
                </Text>

                <Text style={styles.textStyles}>
                    {deviceId}
                </Text>

                <TouchableOpacity
                    onPress={getdeviceId}
                    style={styles.buttonStyle}>
                <Text style={styles.buttonStyle}>
                        SHOw ME THE UNIQUE ID OF DEVICE
                        </Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontStyle: 25,
        textAlign: 'center',
        margin: 10,
    },
    buttonStyle: {
        padding: 10,
        backgroundColor: 'blue',
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
    textStyles: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10,
        padding: 20,
        color: '#f00'
    }
});

export default CellPhone