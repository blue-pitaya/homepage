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
        <ul>
          <li>
            <a href="https://nightride.fm/stations">nightride.fm</a> - Synth
            music radio. Tune in to high-quality, 320kbps electronic music
            including Synthwave, Cyberpunk, Darksynth, EBSM, Midtempo,
            Industrial, Dark Techno, Drum & Bass genres and much more.
          </li>
          <li>
            <a href="https://www.generationdiscofunk.com/">
              generationdiscofunk.com
            </a>{" "}
            (
            <a href="https://www.generationdiscofunk.com/player/gdf/">player</a>
            ) - Soul, disco & funk radio.
          </li>
          <li>
            <a href="https://everynoise.com/">everynoise.com</a> - Every Noise
            at Once is an ongoing attempt at an algorithmically-generated,
            readability-adjusted scatter-plot of the musical genre-space, based
            on data tracked and analyzed for 5,996 genre-shaped distinctions by
            Spotify as of 2022-12-15.
          </li>
        </ul>
        <h3>Web 1.0</h3>
        <ul>
          <li>
            <a href="https://wiby.me/">wiby.me</a> - Minimal/oldschool websites
            search engine. You can find true gems of internet here.
          </li>

          <li>
            <a href="https://neocities.org/browse">neocities.org</a> - Oldschool
            website hosting with list of sites.
          </li>
        </ul>
        <br />
      </div>
    </div>
  );
});
