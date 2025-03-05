import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OracionDelDia() {
  const [content, setContent] = useState('');
  const injectedJavaScript = `
    (function() {
      const content = document.body.innerText;
      window.ReactNativeWebView.postMessage(content);
    })();
  `;
  const handleMessage = (event) => {
    setContent(event.nativeEvent.data);
  };

  return (
    <SafeAreaView style={styles.safeArea}> 
      <ScrollView style={styles.container} >
        {/* https://feed.evangelizo.org/v2/reader.php */}
        <Text style={styles.title}>Evangelio del día</Text>

        <WebView
          source={{
            uri: `http://feed.evangelizo.org/v2/reader.php?date=${new Date().toISOString().slice(0, 10).replace(/-/g, '')}&type=reading_lt&lang=SP&content=GSP`,
          }}
          // style={styles.webViewSmall}
          injectedJavaScript={injectedJavaScript}
          onMessage={handleMessage}
        />
        <Text style={styles.content}>{content}</Text>

        <WebView
          source={{
            uri: `http://feed.evangelizo.org/v2/reader.php?date=${new Date().toISOString().slice(0, 10).replace(/-/g, '')}&type=reading&lang=SP&content=GSP`,
          }}
          style={styles.webView}
        />

        <Text style={styles.title}>Salmo del día</Text>

        <WebView
          source={{
            uri: `http://feed.evangelizo.org/v2/reader.php?date=${new Date().toISOString().slice(0, 10).replace(/-/g, '')}&type=reading_lt&lang=SP&content=PS`,
          }}
          style={styles.webViewSmall}
        />

        <WebView
          source={{
            uri: `http://feed.evangelizo.org/v2/reader.php?date=${new Date().toISOString().slice(0, 10).replace(/-/g, '')}&type=reading&lang=SP&content=PS`,
          }}
          style={styles.webView}
        />

        <Text style={styles.title}>Primera lectura del día</Text>

        <WebView
          source={{
            uri: `http://feed.evangelizo.org/v2/reader.php?date=${new Date().toISOString().slice(0, 10).replace(/-/g, '')}&type=reading_lt&lang=SP&content=FR`,
          }}
          style={styles.webViewSmall}
        />

        <WebView
          source={{
            uri: `http://feed.evangelizo.org/v2/reader.php?date=${new Date().toISOString().slice(0, 10).replace(/-/g, '')}&type=reading&lang=SP&content=FR`,
          }}
          style={styles.webView}
        />

        <Text style={styles.title}>Segunda lectura del día</Text>

        <WebView
          source={{
            uri: `http://feed.evangelizo.org/v2/reader.php?date=${new Date().toISOString().slice(0, 10).replace(/-/g, '')}&type=reading_lt&lang=SP&content=SR`,
          }}
          style={styles.webViewSmall}
        />

        <WebView
          source={{
            uri: `http://feed.evangelizo.org/v2/reader.php?date=${new Date().toISOString().slice(0, 10).replace(/-/g, '')}&type=reading&lang=SP&content=SR`,
          }}
          style={styles.webView}
        />

        <Text style={styles.title}>Todas las lecturas del día</Text>
        <WebView
          source={{
            uri: `http://feed.evangelizo.org/v2/reader.php?date=${new Date().toISOString().slice(0, 10).replace(/-/g, '')}&type=all&lang=SP&content=SR`,
          }}
          style={styles.webView}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    bottom: -33,
  },
  container: {
    flex: 1,
  
  },

  title: {
    fontWeight: "bold",
    fontSize: 26,
    color: "white",
    marginVertical: 10,
    textAlign: "center",
  },
  webView: {
    width: 350,
    height: 350,
    margin: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  webViewSmall: {
    width: 350,
    height: 50,
    margin: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  content: {
    fontSize: 16,
    color: 'white',
    margin: 20,
  },
});