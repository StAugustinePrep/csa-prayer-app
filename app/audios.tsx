import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import Slider from '@react-native-community/slider';

const audioFiles = [
  { id: '0', title: 'Somos Incienso', file: require("../assets/audio/0-SomosIncienso.mp3") },
  { id: '1', title: 'Vienen con alegría', file: require("../assets/audio/1-VienenConAlegria.mp3") },
  { id: '2', title: 'Aleluya', file: require("../assets/audio/2-Aleluya.mp3") },
  { id: '3', title: 'Entre tus manos', file: require("../assets/audio/3-entreTusManos.mp3") },
  { id: '4', title: 'Santo santo santo', file: require("../assets/audio/4-santoSantoSanto.mp3") },
  { id: '5', title: 'Has venido a la orilla', file: require("../assets/audio/5-TuHasVenidoALaOrilla.mp3") },
];

const Audios = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
  interface PlaybackStatus {
    [key: string]: {
      duration: number;
      position: number;
    };
  }

  const [playbackStatus, setPlaybackStatus] = useState<PlaybackStatus>({});

  useEffect(() => {
    // Set audio mode to play through the phone's speaker
    Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
    });

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  async function playSound(file, id) {
    if (sound && currentAudio === id) {
      await sound.playAsync();
      setIsPlaying(true);
    } else {
      if (sound) {
        await sound.unloadAsync();
      }
      const { sound: newSound } = await Audio.Sound.createAsync(file);
      setSound(newSound);
      setCurrentAudio(id);
      setIsPlaying(true);
      newSound.setOnPlaybackStatusUpdate((status) => onPlaybackStatusUpdate(status, id));
      await newSound.playAsync();
    }
  }

  async function pauseSound() {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  }

  function onPlaybackStatusUpdate(status, id) {
    if (status.isLoaded) {
      setPlaybackStatus((prevStatus) => ({
        ...prevStatus,
        [id]: {
          duration: status.durationMillis,
          position: status.positionMillis,
        },
      }));
      if (status.didJustFinish) {
        setIsPlaying(false);
        setPlaybackStatus((prevStatus) => ({
          ...prevStatus,
          [id]: { ...prevStatus[id], position: 0 },
        }));
      }
    }
  }

  const renderItem = ({ item }) => {
    const { duration = 0, position = 0 } = playbackStatus[item.id] || {};
    return (
      <View style={styles.audioContainer}>
        <Text style={styles.audioTitle}>{item.title}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          onValueChange={async (value) => {
            if (sound && currentAudio === item.id) {
              await sound.setPositionAsync(value);
            }
          }}
        />
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => {
              if (isPlaying && currentAudio === item.id) {
                pauseSound();
              } else {
                playSound(item.file, item.id);
              }
            }}
          >
            <Text style={styles.buttonText}>{isPlaying && currentAudio === item.id ? "Pause" : "Play"}</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Audios</Text>
      <FlatList
        data={audioFiles}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.scrollView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003553",
  },
  title: {
    color: "#f8f8f8",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 60,
    textAlign: "center",
  },
  scrollView: {
    paddingVertical: 20,
  },
  audioContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  audioTitle: {
    color: "#f8f8f8",
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "Humanist521BT-Bold",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Audios;