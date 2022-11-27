import { component$, useStore, useStylesScoped$, $ } from "@builder.io/qwik";
import { getLabel, getRandomVideoNum, getVideoId } from "./randomVideo";
import styles from "./styles.css?inline";
import { YtIframe } from "~/components/yt-iframe/yt-iframe";

export default component$(() => {
  useStylesScoped$(styles);

  const state = useStore({
    videoNum: getRandomVideoNum(),
  });

  const reload = $(() => {
    state.videoNum = getRandomVideoNum();
  });

  return (
    <div class="fun-container">
      <noscript>This section needs javascript!</noscript>
      <h2 class="colored">Random video from my important videos collection.</h2>
      <YtIframe videoId={getVideoId(state.videoNum)} />
      <p class="centered">
        <span id="imp-video-label">{getLabel(state.videoNum)}</span>
        <br />
        <a class="reloadLink" onClick$={reload}>
          Pray to RNG gods for another video
        </a>
      </p>
    </div>
  );
});
