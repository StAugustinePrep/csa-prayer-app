import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OracionDelDia() {
  const [contentFR, setContentFR] = useState('');
  const [contentFRReading, setContentFRReading] = useState('');
  const [contentPS, setContentPS] = useState('');
  const [contentPSReading, setContentPSReading] = useState('');
  const [contentGSP, setContentGSP] = useState('');
  const [contentGSPReading, setContentGSPReading] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async (type, lang, contentType, setContent) => {
      try {
        const response = await fetch(`http://feed.evangelizo.org/v2/reader.php?date=${new Date().toISOString().slice(0, 10).replace(/-/g, '')}&type=${type}&lang=${lang}&content=${contentType}`);
        const text = await response.text();
        const cleanText = text.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
        setContent(cleanText);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent('reading_lt', 'SP', 'FR', setContentFR);
    fetchContent('reading', 'SP', 'FR', setContentFRReading);
    fetchContent('reading_lt', 'SP', 'PS', setContentPS);
    fetchContent('reading', 'SP', 'PS', setContentPSReading);
    fetchContent('reading_lt', 'SP', 'GSP', setContentGSP);
    fetchContent('reading', 'SP', 'GSP', setContentGSPReading);

    setLoading(false);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}> 
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Primera lectura del día</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Text style={styles.content}>{contentFR}</Text>
            <Text style={styles.content}>{contentFRReading}</Text>
          </>
        )}

        <Text style={styles.title}>Salmo del día</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Text style={styles.content}>{contentPS}</Text>
            <Text style={styles.content}>{contentPSReading}</Text>
          </>
        )}

        <Text style={styles.title}>Evangelio del día</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Text style={styles.content}>{contentGSP}</Text>
            <Text style={styles.content}>{contentGSPReading}</Text>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    bottom: -33,
    top: 0,
  },
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    color: "white",
    marginVertical: 5,
    textAlign: "center",
  },
  content: {
    fontSize: 16,
    color: 'white',
    margin: 20,
  },
});