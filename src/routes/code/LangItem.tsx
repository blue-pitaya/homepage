import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export default component$((props: { name: string; stack: string }) => {
  useStylesScoped$(styles);

  return (
    <li>
      <span class="langName">{props.name}</span>{" "}
      <span class="langStack">{props.stack}</span>
      <br />
      <Slot />
    </li>
  );
});
