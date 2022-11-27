import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export const YtIframe = component$((props: YtIframeProps) => {
  useStylesScoped$(styles);

  const videoUrl = `https://www.youtube-nocookie.com/embed/${props.videoId}`;

  return (
    <iframe
      id="video"
      src={videoUrl}
      width="560"
      height="315"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
});

interface YtIframeProps {
  videoId: string;
}
