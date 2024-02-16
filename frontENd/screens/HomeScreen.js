import { Button, View } from 'react-native'
import React from 'react'

function HomeScreen({ navigation }) {
    return (
        <View>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('DetailStack', { screen: 'Detail' })}
            />
        </View>
    );
}

export default HomeScreen