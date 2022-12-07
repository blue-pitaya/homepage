import { component$, useStore, useStylesScoped$, $ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const state = useStore({
    shaggyTextStyle: "display: none;",
  });

  const onShaggyClicked = $(() => {
    state.shaggyTextStyle = "opacity: 0; animation: fade 3s linear;";
    setTimeout(() => {
      state.shaggyTextStyle = "display: none;";
    }, 3000);
  });

  return (
    <>
      <img src="/images/shaggy.png" class="shaggy" onClick$={onShaggyClicked} />
      <p class="shaggyText" style={state.shaggyTextStyle}>
        {"Like, zoinks, don't click me!"}
      </p>
    </>
  );
});
