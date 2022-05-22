import ReactPlayer from "react-player";

export default ResizedReactPlayer = (props) => {
  return (
    <ReactPlayer
      playsinline={true}
      width={640}
      height={360}
      controls
      url={props.url}
    />
  );
};
