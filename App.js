import "react-native-gesture-handler"
import React from "react"
import { Provider } from "react-native-paper"
import { NavigationContainer } from "@react-navigation/native"
import { theme } from "./src/core/theme"
import LoginScreen from "./src/screens/LoginScreen"
import Tabs from "./src/navigation/Tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { DrawerContent } from "./src/navigation/DrawerContent"
import { createStackNavigator } from "@react-navigation/stack"
import TaskScreen from "./src/screens/TaskScreen"
import RequestScreen from "./src/screens/RequestScreen"
const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator
          // initialRouteName="Liste des Demandes"
          initialRouteName="Liste des Tâches"
          // initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: true,

            headerStyle: {
              backgroundColor: "#4bccc7",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen
            options={{ headerShown: false }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <Drawer.Screen name="Tabs" component={Tabs} />

          <Drawer.Screen name="Liste des Tâches" component={TaskScreen} />
          <Drawer.Screen name="Liste des Demandes" component={RequestScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
