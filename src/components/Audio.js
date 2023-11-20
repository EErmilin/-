import React from 'react';
import { View } from 'react-native';
import AudioWaveForm from 'react-native-audio-waveform';

function AudioWaveFormComponent() {
  return (
    <View>
      <AudioWaveForm
        source={{ uri: 'https://example.com/audio.wav' }}
      />
    </View>
  );
}

export default AudioWaveFormComponent;