import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import styles from './SoundBoard.module.css';

import applause from './sounds/sound-board_sounds_applause.mp3';
import boo from './sounds/sound-board_sounds_boo.mp3';
import gasp from './sounds/sound-board_sounds_gasp.mp3';
import tada from './sounds/sound-board_sounds_tada.mp3';
import victory from './sounds/sound-board_sounds_victory.mp3';
import wrong from './sounds/sound-board_sounds_wrong.mp3';

const _SOUNDTRACKS = [applause, boo, gasp, tada, victory, wrong];
const _SOUNDTRACKS_NAMES = [
  'applause',
  'boo',
  'gasp',
  'tada',
  'victory',
  'wrong',
];

const playIcon = <FontAwesomeIcon icon={faPlay} />;
const pauseIcon = <FontAwesomeIcon icon={faPause} />;

function readableDuration(seconds) {
  let sec = Math.floor(seconds);
  let min = Math.floor(sec / 60);
  min = min >= 10 ? min : '0' + min;
  sec = Math.floor(sec % 60);
  sec = sec >= 10 ? sec : '0' + sec;
  return min + ':' + sec;
}

const SoundBoard = () => {
  useEffect(() => {
    const audio = new Audio(_SOUNDTRACKS.boo);
    audio.addEventListener('loadedmetadata', () => {
      console.log(audio.duration);
    });
    audio.play();
  }, []);

  const [audioTrack, setAudioTrack] = useState(
    _SOUNDTRACKS.map((track, index) => {
      return {
        name: _SOUNDTRACKS_NAMES[index],
        url: track,
        audio: new Audio(track),
        playing: false,
      };
    })
  );

  const [icon, setIcon] = useState(
    _SOUNDTRACKS.map((track, trackId) => {
      return { id: trackId, icon: playIcon };
    })
  );

  const [prevIndex, setPrevIndex] = useState('');
  const [duration, setDuration] = useState({ index: null, duration: null });

  // const [barPercentage, setBarPercentage] = useState(
  //   _SOUNDTRACKS.map((track, index) => {
  //     return {
  //       trackId: index,
  //       trackStyle: {
  //         width: 0,
  //       },
  //     };
  //   })
  // );

  // const [intervalTimerState, setIntervalTimerState] = useState({intervalId: ''});

  // const widthStyle = {
  //   width: `${barPercentage}%`,
  // };

  // const startProgressBar = (trackIndex) => {
  //   if (intervalTimerState) {
  //     console.log('clearing interval')
  //     clearInterval(intervalTimerState.intervalId);
  //   }

  //   console.log('Starting progress');
  //   const trackLength = audioTrack[trackIndex].durationMs;
  //   console.log(trackLength);
  //   console.log(audioTrack[trackIndex].audio.currentTime);

  //   const intervalTimer = setInterval(() => {

  //     console.log('Starting interval');
  //     console.log(audioTrack[trackIndex].audio.currentTime);
  //     const currentDuration = audioTrack[trackIndex].audio.currentTime;
  //     const percentage = (100 * currentDuration) / trackLength;
  //     console.log(percentage);

  //     setBarPercentage((prev) => {
  //       const prevArr = [...prev];
  //       const newObj = {
  //         ...prevArr[trackIndex],
  //         trackStyle: { width: `${percentage}%` },
  //       };
  //       prevArr[trackIndex] = newObj;
  //       return prevArr;
  //     });

  //     if (percentage === 100) {
  //       stopInterval(intervalTimerState.intervalId);
  //     }
  //   }, 100);

  //   setIntervalTimerState({intervalId: intervalTimer});
  // };

  const stopAllTracks = () => {
    for (const track of audioTrack) {
      track.audio.pause();
      track.audio.currentTime = 0;
    }
    setIcon((prev) => {
      const prevArr = [...prev];
      for (const track of prevArr) {
        track.icon = playIcon;
      }
      return prevArr;
    });
  };

  const playTrack = (trackIndex) => {
    if (prevIndex === trackIndex) {
      if (audioTrack[trackIndex].playing) {
        audioTrack[trackIndex].audio.pause();
        audioTrack[trackIndex].playing = false;
        setIcon((prev) => {
          const prevArr = [...prev];
          prevArr[trackIndex] = { ...prevArr[trackIndex], icon: playIcon };
          return prevArr;
        });
      } else {
        console.log('playing');
        audioTrack[trackIndex].audio.play();
        audioTrack[trackIndex].playing = true;

        setDuration({
          index: trackIndex,
          duration: readableDuration(audioTrack[trackIndex].audio.duration),
        });
        console.log(audioTrack[trackIndex].audio.duration);

        setIcon((prev) => {
          const prevArr = [...prev];
          prevArr[trackIndex] = { ...prevArr[trackIndex], icon: pauseIcon };
          return prevArr;
        });
      }
    } else {
      stopAllTracks();
      audioTrack[trackIndex].audio.play();
      audioTrack[trackIndex].playing = true;

      setDuration({
        index: trackIndex,
        duration: readableDuration(audioTrack[trackIndex].audio.duration),
      });

      setIcon((prev) => {
        const prevArr = [...prev];
        prevArr[trackIndex] = { ...prevArr[trackIndex], icon: pauseIcon };
        return prevArr;
      });
    }
    setPrevIndex(trackIndex);
  };

  // const formatTime = (seconds) => {
  //   const h = Math.floor(seconds / 3600);
  //   const m = Math.floor((seconds % 3600) / 60);
  //   const s = (seconds % 60).toFixed(2);
  //   return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s]
  //     .filter((a) => a)
  //     .join(':');
  // };

  // useEffect(() => {
  //   console.log('starting Effect');
  //   const timer = setTimeout(() => {
  //     for (const track of audioTrack) {
  //       const objIndex = audioTrack.findIndex((obj) => obj.name === track.name);
  //       console.log(objIndex);

  //       setAudioTrack((prev) => {
  //         const arr = [...prev];
  //         arr[objIndex] = {
  //           ...arr[objIndex],
  //           duration: formatTime(track.audio.duration),
  //           durationMs: track.audio.duration,
  //         };
  //         console.log(arr[objIndex]);
  //         console.log(arr);
  //         return arr;
  //       });
  //     }
  //     clearTimeout(timer);
  //   }, 300);
  // }, []);

  // <div
  //   className={styles.progress}
  //   style={barPercentage[index].trackStyle}
  // ></div>;

  return (
    <div className={styles.sBContainer}>
      {_SOUNDTRACKS_NAMES.map((track, index) => (
        <div key={index + 2} className={styles['track-container']}>
          <button key={index} onClick={playTrack.bind(null, index)}>
            {icon[index].icon}
          </button>
          <p key={index + 3}>{track}</p>
          <span>{duration.index === index && duration ? duration.duration : ''}</span>
        </div>
      ))}
    </div>
  );
};

export default SoundBoard;
