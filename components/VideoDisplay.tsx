import { ResizeMode, Video } from "expo-av";
import { useState } from "react";
import { ImageBackground } from "react-native";

const RenderPoster = ({ videoLoading, requiredBgImage }) => {
    if (!videoLoading) return <></>;
    return <ImageBackground source={requiredBgImage} resizeMode={ResizeMode.COVER} imageStyle={{ opacity: 0.9 }} />;
};

const VideoDisplay = ({ requiredBgImage, videoUri }) => {
    const [videoLoading, setVideoLoading] = useState(true);

    return (
        <Video
            style={{
                flex: 1,
                position: "relative",
            }}
            source={videoUri}
            shouldPlay={true}
            isLooping={true}
            isMuted={true}
            resizeMode={ResizeMode.COVER}
            usePoster={true}
            onPlaybackStatusUpdate={(status) => setVideoLoading(() => status.isLoaded)}
        >
            <RenderPoster videoLoading={videoLoading} requiredBgImage={requiredBgImage} />
        </Video>
    );
};
export default VideoDisplay;
