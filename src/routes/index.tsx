import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="home">
      <h1>Home</h1>
      <p>
        Hi! I'm blue pitaya, aka kodus8 and this is my homepage. I post here
        some content about my interests: coding and linux. There is also "fun
        stuff" section where is my collection of memes. Also don't worry about
        shaggy's reversed face appearing from corner, i put it for fun and no
        other reason.
      </p>
      <p>This website won't work properly on phones, since i hate css.</p>
      <p>
        Contact me, if you want:
        <span class="blueAddress">blue.pitaya@pm.me</span>
        <br />
        My github page: <a href="https://github.com/blue-pitaya">blue-pitaya</a>
      </p>
    </div>
  );
});
