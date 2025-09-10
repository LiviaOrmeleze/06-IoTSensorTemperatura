import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SensorCard from "./components/SensorCard";

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const [isConnected, setIsConennected] = useState(false);

  const onRefresh = () => {};

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView
        contentContainerStyle={[styles.scrollContainer, { oaddingTop: 70 }]}
        refreshControl={
          //controle que recarrega
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={"#8faaff"}
          />
        }
        showsHorizontalScrollIndicator={false} //não mostra a barrinha de scrollar
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}> 🌡️ Dashboard IoT</Text>
          <View style={[styles.connectionStatus, { marginTop: 10 }]}>
            <Text style={styles.connectionText}>
              {isConnected ? "😆 Conectado" : "😥 Desconectado"}
            </Text>
            <SensorCard 
            funcionou="sim!"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
