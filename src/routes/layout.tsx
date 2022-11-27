import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <main>
        <img src="/images/shaggy.png" class="shaggy" />
        <Header />
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
