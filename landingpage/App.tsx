import React from "react";
import FlatCards from "./components/FirstCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native' 
import ContactList from "./components/ContactList";

const App = () =>{
  return(
    <SafeAreaView>
    <ScrollView>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
      <ContactList/>
      <ActionCard/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App