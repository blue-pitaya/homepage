import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div>
      <h1>Home</h1>
      <p>
        Hi! I'm blue pitaya and this is my homepage. I post here some content
        about my interests: coding and linux. There is also "fun stuff" section
        where is my collection of memes. Also don't worry about shaggy's
        reversed face appearing from corner, i put it for fun and no other
        reason.
      </p>
      <p>
        This website won't work properly on phones, since i'm too lazy to write
        few lines of css. ¯\_(ツ)_/¯
      </p>
      <p>
        Contact me, if you want:{" "}
        <span class="blueAddress">blue.pitaya@pm.me</span>
        <br />
        My github page: <a href="https://github.com/blue-pitaya">blue-pitaya</a>
      </p>
      <div class="madeUsingContainer">
        <p>This website was made using:</p>
        <a href="https://qwik.builder.io/">
          <img class="qwikLogo" src="/images/qwik-logo.svg" />
        </a>
        <p>
          because of{" "}
          <a href="https://www.youtube.com/watch?v=x2eF3YLiNhY">this</a> hype.
          <br />
          Source code of this page is available on{" "}
          <a href="https://github.com/blue-pitaya/homepage">github</a>.
        </p>
      </div>
    </div>
  );
});
