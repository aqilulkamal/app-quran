import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


export default function TomboSurat({ name, total, id}) {

  const router = useRouter()

  return (
    <TouchableOpacity onPress={() => router.push({ pathname: '/surat', params: {id: id}})} style={styles.btnContainer}>
        <Text style={styles.namaSurat}>{name}</Text>
        <Text style={styles.totalAyat}>{total} Ayat</Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  btnContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 10
  },

  namaSurat: {
    fontSize: 16,
    fontWeight: 500
  },

  totalAyat: {
    textAlign: 'right'
  }
})