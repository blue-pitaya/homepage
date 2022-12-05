import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="projectsSection">
      <h3>Apps</h3>
      <div class="projectSubsection">
        <div class="projectContainer">
          <div class="projectTitleCont">
            <span class="projectTitle blueColored">x2mindmap.com</span>
            <span>
              (<a href="https://x2mindmap.com">link</a>)
            </span>
          </div>
          <span>
            A tool for crating mind maps. One of major features is generating
            mind maps from text. Currently in beta. New updates pushed
            regularly.
          </span>
          <span class="projectStack">
            Cats Effect, Scala.js, Vue.js, scala, typescript
          </span>
        </div>
        <div class="projectContainer">
          <div class="projectTitleCont">
            <span class="projectTitle">Stopwatch</span>
            <span>
              (<a href="https://stopwatch.bluepitaya.xyz">demo</a> •{" "}
              <a href="https://github.com/blue-pitaya/stopwatch">source</a>)
            </span>
          </div>
          <span>A simple stopwatch application.</span>
          <span class="projectStack">Vue.js, typescript</span>
        </div>
        <div class="projectContainer">
          <div class="projectTitleCont">
            <span class="projectTitle">Chessboard</span>
            <span>
              (<a href="https://chessboard.bluepitaya.xyz">demo</a> •{" "}
              <a href="https://github.com/blue-pitaya/chessboard">source</a>)
            </span>
          </div>
          <span>
            Chessboard simulator. For now only piece moving logic is implemented
            (inlcuding en passant and castling, but not promoting). The project
            is still in progress; in near future playing online with other
            players will be possible.
          </span>
          <span class="projectStack">Scala.js, Vue.js, typescript</span>
        </div>
      </div>
      <h3>Libs</h3>
      <div class="projectSubsection">
        <div class="projectContainer">
          <div class="projectTitleCont">
            <span class="projectTitle">scala-d3-force</span>
            <span>
              (
              <a href="https://github.com/blue-pitaya/scala-d3-force">source</a>
              )
            </span>
          </div>
          <span>
            Popular JS lib d3-force implementation for scala. Rewritten with
            functional coding style.
          </span>
          <span class="projectStack">scala</span>
        </div>
      </div>
    </div>
  );
});
