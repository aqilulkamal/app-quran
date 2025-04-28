import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

export default function surat() {
  const [ayats, setAyats] = useState([{ teksArab: "", nomorAyat: "", teksLatin: "", teksIndonesia: "" }]);

  const { id } = useLocalSearchParams()

  useEffect(() => {

    const caller = async () => {
      await fetch(`https://equran.id/api/v2/surat/${id}`)
        .then((res) => res.json())
        .then((data) => setAyats(data.data.ayat));
    };

    caller();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {ayats.map((ayat, index) => (
        <View style={styles.wrapper} key={index}>
          <View style={styles.noAyatContainer}>
            <Text style={styles.noAyat}>{ayat.nomorAyat}</Text>
          </View>
          <Text style={styles.ayat}>{ayat.teksArab}</Text>
          <View style={styles.desc}>
            <Text style={styles.titleLatin}>{ayat.teksLatin}</Text>
            <Text style={styles.titleArti}>
              {ayat.teksIndonesia}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    paddingHorizontal: 15,
    paddingBottom: 20,
    gap: 40
  },

  wrapper: {
    width: "100%",
  },

  noAyatContainer: {
    backgroundColor: "grey",
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },

  noAyat: {
    color: "white",
  },

  ayat: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 20,
  },


  desc: {
    rowGap: 10,
    marginTop: 20,
  },

  titleArti: {},

  titleLatin: {
    fontStyle: "italic",
  },

});
