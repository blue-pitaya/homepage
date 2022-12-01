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
            <span class="projectTitle">Stopwatch</span>
            <span>
              (<a href="https://stopwatch.bluepitaya.xyz">demo</a> •{" "}
              <a href="https://github.com/blue-pitaya/stopwatch">source</a>)
            </span>
          </div>
          <span>Simple stopwatch application.</span>
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
            (inlcuding en passant and castling, but not promoting). Project is
            still in progress, in future playing online with other players will
            be possible.
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
            Popular JS lib d3-force implementation for scala. Rewrited with
            functional coding style.
          </span>
          <span class="projectStack">scala</span>
        </div>
      </div>
    </div>
  );
});
