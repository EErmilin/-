import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import TrackPlayer, {
  RepeatMode,
  useActiveTrack,
  useProgress,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Play_btn from '../../assets/icons/Play_btn';
import {colors} from '../../assets/colors';
import Stop from '../../assets/icons/stop';
import {useNavigationState} from '@react-navigation/native';

export default function MusicPlayer({audio}) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const {position, duration} = useProgress();
  const activeTrack = useActiveTrack();
  const [tracks, setTracks] = useState([]);

  const navigationState = useNavigationState(state => state);
  React.useEffect(() => {
    TrackPlayer.stop();
    TrackPlayer.reset();
    setIsPlaying(false);
  }, [navigationState]);

  useEffect(() => {
    (async () => {
      await TrackPlayer.reset();
      console.log('audtio', audio);
      const tracks = audio.map(item => ({url: item}));
      console.log('tracks', tracks);
      await TrackPlayer.setQueue(tracks).catch(err => console.error(err));
      await TrackPlayer.setRepeatMode(RepeatMode.Track);
      //audio.map(item => TrackPlayer.add({url: item}));

      setTracks(tracks);
      console.log('getQue', await TrackPlayer.getQueue());
    })();

    // return () => {
    //   TrackPlayer.reset();
    // };
  }, [audio]);

  // React.useEffect(() => {
  //   (async () => {
  //     // add some tracks to the queue
  //     await TrackPlayer.reset();
  //     await TrackPlayer.add({
  //       url: audio,
  //     });
  //     if (isPlaying) {
  //       await TrackPlayer.play();
  //       console.log('activeTrack', activeTrack);
  //       console.log('queue', await TrackPlayer.getQueue());
  //     }
  //   })();
  // }, [audio, isPlaying]);

  useEffect(() => {
    console.log(position, duration);

    if (position >= duration) {
      //TrackPlayer.seekTo(0);
    }
  }, [position]);

  const togglePlayback = async item => {
    try {
      if (isPlaying) {
        if (item.url !== activeTrack.url) {
          await TrackPlayer.load(item);
          setIsPlaying(true);
        } else {
          await TrackPlayer.pause();
          setIsPlaying(false);
        }
      } else {
        await TrackPlayer.load(item);
        await TrackPlayer.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  const handleSeek = async value => {
    if (!isPlaying) return;
    await TrackPlayer.seekTo(value);
  };

  TrackPlayer.addEventListener('playback-queue-ended', () => {
    // handle end of track or end of queue
  });

  useEffect(() => {
    console.log('tracks', tracks);
  }, [tracks]);

  console.log('activeTrack', activeTrack);

  return (
    <View>
      {tracks?.map((item, index) => (
        <View key={index} style={styles.trackContainer}>
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => togglePlayback(item, index)}>
            {isPlaying && activeTrack.url === item.url ? (
              <Stop />
            ) : (
              <Play_btn />
            )}
          </TouchableOpacity>

          <Slider
            width={250}
            minimumValue={0}
            value={activeTrack?.url === item?.url ? position : 0}
            maximumValue={duration}
            onValueChange={handleSeek}
            minimumTrackTintColor={colors.blue}
            maximumTrackTintColor="#000000"
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  playButton: {
    width: 40,
    aspectRatio: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  trackContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
  },
});
