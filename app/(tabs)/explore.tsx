import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import TomboSurat from "../components/TombolSurat";

export default function TabTwoScreen() {

  const [surah, setSurah] = useState([{ namaLatin: "", jumlahAyat: "", nomor: "" }])

  useEffect(() => {
    const caller = async() => {
      await fetch("https://equran.id/api/v2/surat")
        .then(res => res.json())
        .then(data => setSurah(data.data))
    }

    caller()
  }, [])

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.judul}>Daftar Surat</Text>

      <View style={styles.btnWrapper}>
        {surah.map((surat, index) => (
          <TomboSurat name={surat.namaLatin} total={surat.jumlahAyat} id={surat.nomor} key={index} />
        ))}
      </View>

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

  btnWrapper: {
    marginTop: 30,
    paddingHorizontal: 10,
    rowGap: 20
  }
});
