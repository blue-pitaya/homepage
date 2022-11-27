import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <ul>
        <li>
          <Link href="/" class="imageRouterLink">
            <img src="/images/blue_pitaya_320px.png" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/nvim/" class="imageRouterLink">
            <img src="/images/ide_vim_plugin_320px.png" />
            <span>(Neo)vim</span>
          </Link>
        </li>
        <li>
          <Link href="/linux/" class="imageRouterLink">
            <img src="/images/linux_cry_320px.png" />
            <span>Linux</span>
          </Link>
        </li>
        <li>
          <Link href="/code/" class="imageRouterLink">
            <img id="funStuffImg" src="/images/monke_coding.png" />
            <span>Coding</span>
          </Link>
        </li>
        <li>
          <Link href="/fun/" class="imageRouterLink">
            <img id="funStuffImg" src="/images/fun_stuff_i_guess.png" />
            <span>Fun stuff</span>
          </Link>
        </li>
      </ul>
    </header>
  );
});
