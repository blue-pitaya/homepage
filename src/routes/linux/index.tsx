import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div>
      <h1>I use arch btw</h1>
      <p>
        {"Ackshually i use "}
        <a href="https://artixlinux.org/">Artix Linux</a>
        {`. It's like arch linux
        but without systemd. Also i don't use any major graphics shell. I prefer
        simple X11 with some `}
        <a href="https://suckless.org/">suckless tools</a>
        {` like dwm, dmenu and
        st. My forks of these programs are on my `}
        <a href="https://github.com/blue-pitaya">github</a>.
      </p>
      <p>More content coming soon...</p>
      <div class="tux-image-container">
        <img
          class="tux-image"
          src="/images/artix_tuxo.png"
          alt="tux gives you artix os installation cd"
        />
      </div>
    </div>
  );
});
