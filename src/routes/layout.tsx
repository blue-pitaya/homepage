import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";
import Shaggy from "../components/shaggy/shaggy";

export default component$(() => {
  return (
    <>
      <main>
        <Shaggy />
        <Header />
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
