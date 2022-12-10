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
      <div class="impVidsContainer">
        <noscript>This section needs javascript!</noscript>
        <h2 class="colored">
          Random video from my important videos collection.
        </h2>
        <YtIframe videoId={getVideoId(state.videoNum)} />
        <p class="centered">
          <span id="imp-video-label">{getLabel(state.videoNum)}</span>
          <br />
          <a class="reloadLink" onClick$={reload}>
            Pray to RNG gods for another video
          </a>
        </p>
      </div>
      <h2>Links to good content</h2>
      <div class="linksCont">
        <h3>Music</h3>
        <a href="https://nightride.fm/stations">nightride.fm</a> - synths radio
        <br />
        <h3>Web 1.0</h3>
        <a href="https://wiby.me/">wiby.me</a> - minimal/oldschool websites
        search engine
        <br />
        <a href="https://neocities.org/browse">neocities.org</a> - oldschool
        website hosting with list of sites
      </div>
    </div>
  );
});
