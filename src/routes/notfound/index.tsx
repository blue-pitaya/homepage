import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="back">
      <h1>404 Not Found</h1>
      <div class="flexed">
        <img src="/images/nothing.gif" />
        <img src="/images/travolta.gif" />
        <img src="/images/null.gif" />
      </div>
    </div>
  );
});
