import Home from "@/app/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../src/app/screens/Login";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="screens/Login/index"
            component={Login}/>
            <Screen name="screens/Home/index"
            component={Home}/>
        </Navigator>
    )
}