import { View, Text } from 'react-native'
import React from 'react'
import { increamentingStor } from '../store/store'

export function  tojrab  () {
    const count = increamentingStor(state => state.count)

    return (
        <View>
            <Text>{count}</Text>
            <View>
                <Tojrab1 />
                <Tojrab2 />
            </View>
        </View>
    )
}


function Tojrab1() {
    const count = increamentingStor(state => state.increment)
    return (
        
            <TouchableOpacity>
                <Text>Increament</Text>
            </TouchableOpacity>
        
    )
}
function Tojrab2() {
    const count = increamentingStor(state => state.decrement)
    return (
        
            <TouchableOpacity>
                <Text>decrement</Text>
            </TouchableOpacity>
        
    )
}
