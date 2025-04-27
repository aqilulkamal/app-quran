import { StyleSheet, ScrollView, Text } from "react-native";

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.judul}>Daftar Surat</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    marginTop: "15%",
  },

  judul: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 24,
  },
});
