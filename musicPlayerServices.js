import TrackPlayer from "react-native-track-player";
import { Event } from 'react-native-track-player';


import { playListData } from "./src/constants";


export async function setupPlayer() {
    let isSetup = false;

    try {
        await TrackPlayer.getCurrentTrack();
        isSetup = true;
    } catch (error) {
        await TrackPlayer.setupPlayer();
        isSetup = true;
    } finally {
        return isSetup;
    }
}


export async function addTrack() {
    await TrackPlayer.add(playListData);
    await TrackPlayer.setRepeatMode();
}

export async function playbackService() {

    TrackPlayer.addEventListener(Event.RemotePlay,
        () => TrackPlayer.play());

    TrackPlayer.addEventListener(Event.RemotePause,
        () => TrackPlayer.pause());

    TrackPlayer.addEventListener(Event.RemotePrevious,
        () => TrackPlayer.skipToPrevious());

    TrackPlayer.addEventListener(Event.RemoteNext,
        () => TrackPlayer.skipToNext());
}