import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import TrackPlayer from 'react-native-track-player';

const AudioPlayer = () => {
  useEffect(() => {
    setupPlayer();
  }, []);

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: 'track1',
      url: require('../../'), // Replace with the path to your audio file
      title: 'Track Title',
      artist: 'Track Artist',
     // artwork: require('./path_to_your_artwork.png'), // Replace with the path to your artwork
    });

    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
  };

  const playTrack = async () => {
    await TrackPlayer.play();
  };

  const pauseTrack = async () => {
    await TrackPlayer.pause();
  };

  return (
    <View style={styles.container}>
      <Button title="Play" onPress={playTrack} />
      <Button title="Pause" onPress={pauseTrack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AudioPlayer;