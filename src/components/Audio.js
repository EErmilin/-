import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Play_btn from '../../assets/icons/Play_btn';
import { colors } from '../../assets/colors';
import Aplitude from '../../assets/icons/aplitude';
import { useNavigationState } from '@react-navigation/native';

const initializeTrackPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    // You can add tracks to the queue or perform other setup actions here if needed
  } catch (error) {
    console.error('Error initializing TrackPlayer:', error);
  }
};


export default function MusicPlayer({ audio }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [trackPosition, setTrackPosition] = React.useState(0);
  const [trackDuration, setTrackDuration] = React.useState(0);

  const navigationState = useNavigationState(state => state);
  React.useEffect(() => {
    TrackPlayer.stop()
    TrackPlayer.reset()
    setIsPlaying(false)
  }, [navigationState]);

  useEffect(() => {
    initializeTrackPlayer();
  })

  React.useEffect(() => {
    (async () => {
      // add some tracks to the queue
      await TrackPlayer.reset()
      await TrackPlayer.add({
        url: audio,
      });
      if (isPlaying) {

        await TrackPlayer.play();
      }
    })();
  }, [audio, isPlaying]);



  const togglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = async (value) => {
    await TrackPlayer.seekTo(value);
  };

  TrackPlayer.addEventListener('playback-queue-ended', () => {
    // handle end of track or end of queue
  });

  return (
    <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, width: '100%' }}>
      <TouchableOpacity
        style={{
          width: 40,
          aspectRatio: 1,
          backgroundColor: colors.white,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: colors.blue,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 18
        }}
        onPress={togglePlayback}>
        {isPlaying ? <Text style={{ color: "black", fontSize: 20, marginTop: -5 }}>||</Text> : < Play_btn />}
      </TouchableOpacity>
      <Aplitude />
    </View>
  );
}