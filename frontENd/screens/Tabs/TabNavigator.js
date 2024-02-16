import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
const Tab = createMaterialBottomTabNavigator()
import Tojrab from './Tojrab';
import Tojrab2 from './Tojrab2'
function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tojrab" component={Tojrab} />
            <Tab.Screen name="Tojrab2" component={Tojrab2} />
        </Tab.Navigator>
    )
}
export default TabNavigator;