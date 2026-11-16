import { NavigationContainer } from "@react-navigation/native";

const { AppRoutes } = './app.routes'

export function Routes() {
    return (
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    )
}