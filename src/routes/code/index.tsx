import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";
import ProjectsSection from "./ProjectsSection";
import LangItem from "./LangItem";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div>
      <div class="text-nav">
        <a href="#projects">My projects</a>
        <span>•</span>
        <a href="#aboutme">About me</a>
        <span>•</span>
        <a href="#notes">Notes</a>
      </div>
      <h1>Coding</h1>
      <h2 id="projects">My projects</h2>
      <ProjectsSection />
      <h2 id="aboutme">About me</h2>
      <p>
        I like functional programming. I like strong static typing. I like clean
        code.
      </p>
      <h3>My main langs</h3>
      <ul class="langList">
        <LangItem
          name="Scala"
          stack="(ScalaJS, Cats Effect, a little bit of Akka)"
        >
          My favourite. In the furure i will write entire article why i love it.
        </LangItem>
        <LangItem name="Javscript/Typescript" stack="(Vue.js, React, vanilla)">
          I'd call it necessary evil ;) I've worked on some sites in react
          (+redux). For my personal projects, I've switched to vue, just because
          i was curios. Both <del>frameworks</del> libraries are very similar. I
          think i like react more, but have more fluency in vue. Although, js/ts
          is great for building UI, i wouldn't use it to write more complex
          logic. For this purpose, i'd use more safe, complete and preditcable
          language. That's why i'm so enthusiastic about scala.js.
        </LangItem>
        <LangItem name="C#" stack="(WPF, Desktop)">
          Language itself is good, i'd say. It's relation with microsoft's
          ecosystem is what i don't like. I was writing a desktop app in it for
          about 1.5 years.
        </LangItem>
        <LangItem name="PHP" stack="(CakePHP)">
          My first backend language. I don't know what to say about it really,
          nor if i should call it my "main" language. For all the work i've
          done, i was using PHP 5.6 and CakePHP 2.x, which were already obsolete
          at that time. I feel nostalgic about it.
        </LangItem>
      </ul>
      <h3>I did something in</h3>
      <ul>
        <LangItem name="Java" stack="">
          Back in high school, i develops two mobile games in it. For first game
          i used plain OpenGL ES, for second libGDX. I haven't finished them
          completly, nor publish them anywhere. Maybe some day i will dig out
          source code and "finish" them (after some serious refactoring). Also
          did some projects during studies + thesis app.
        </LangItem>
        <LangItem name="Python" stack="">
          Various small programs during studies and work.
        </LangItem>
        <LangItem name="Kotlin" stack="">
          I was working on mobile app for 2 months.
        </LangItem>
        <LangItem name="Ruby" stack="on rails">
          Fuck ruby.
        </LangItem>
        <LangItem name="C/C++" stack="">
          I've used it only for algorithm implementations and some shit projects
          during studies.
        </LangItem>
        <LangItem name="Pascal" stack="">
          My first ever programming language. I was introduced to it in primary
          school. I believe it's the reason why i like terminal look so much (
          <a href="/images/turbopascal.png" target="_blank">
            this
          </a>{" "}
          is what IDE for pascal looks like).
        </LangItem>
      </ul>
      <h3>Misc</h3>
      <ul>
        <li>SQL (MySQL, MSSQL, Postgres)</li>
        <li>HTML & CSS (xd)</li>
        <li>Bash</li>
        <li>Docker</li>
      </ul>
      <p>
        I want to check out in the future: Rust, Clojure. And also write some
        more in Haskell.
      </p>
      <h2 id="notes">Notes</h2>
      <p>
        One of major aspects in programming is abstraction. Nobody could write
        any complex system without some level of abstraction. And that's what
        programmers are good at: finding patterns/similarities in problems that
        they're encountering and generalizing them. For example, we have a
        pretty big set of funny anagrams like KISS, YAGNI and DRY to only name a
        few. Here i want to share my own realizations that I came to while
        coding. They can be opaque, not complete, unorganized (as they come
        directly from my notes) or just plain stupid. However, maybe they will
        prevent me from making the same mistakes over and over again ;)
        <br />
        <br />
        <i class="mynote-color">
          note: some of points will refer to functional programming rather than
          oop
        </i>
      </p>
      <ul>
        <li>Golden rule: YAGNI</li>
        <li>
          Always plan before code, even simple problems can be solved way better
          when you think 1 min about them, instead of coding first solution that
          came into mind. + It is good idea to first plan what you gonna code on
          paper. It helps get bigger picture of what you are doing.
        </li>
        <li>YAGNI again</li>
        <li>
          Premature optimization is the root of all evil. First make the code
          work correctly, then work to make if faster, if really necessary.
          Profile before optimize. <i>note: i think its quote from somewhere</i>
        </li>
        <li>above is also part of YAGNI</li>
        <li>
          Aim for maximum reasonable cohesion. Ex: passing object into function
          where only one field of that object is used is unnecessary, better
          just pass that parameter.
        </li>
        <li>
          Avoid function parameter drilling (passing parameter to function
          because function inside it needs that parameter). Instead use
          functions as parameters.
        </li>
        <li>
          MNF (minimal necessary force) - always try to resolve current problem
          by doing the least demanding thing
        </li>
        <li>
          start from result that you want to achieve and use mock code to see
          what preparations should you do (from abstract to implementation
          approach)
        </li>
        <li>dont forget about YAGNI</li>
        <li>
          - find more than 1 lib that solves same problem and pick the best one,
          dont go with "fire come first serve" approach (i hope that i got this
          idiom right xd)
        </li>
        <li>
          use traits (interfaces) instead of objects in function parameters to
          achieve better cohesion.
        </li>
        <li>
          trust yourself and dont be afraid to do crazy things, <i>note: xd?</i>
        </li>
        <li>
          {"Avoid compression-oriented programming. "}
          <a href="https://caseymuratori.com/blog_0015">more about it</a>
          <br />
          Quote:
          <br />
          Like a good compressor, I don’t reuse anything until I have at least
          two instances of it occurring. Many programmers don’t understand how
          important this is, and try to write “reusable” code right off the bat,
          but that is probably one of the biggest mistakes you can make. My
          mantra is, “make your code usable before you try to make it reusable”.
        </li>
        <li>
          Wow imagine what @up refers to...{" "}
          <span class="shh-color">it's YAGNI</span>
        </li>
        <li>
          Fuck purism. If you don't know how to do something "by the book", it's
          better to do anything than nothing at all. + dont doubt -&gt code
          (things will clarify later)
        </li>
        <li>Focus on one thing to implement. Don't do everything at once.</li>
      </ul>
      And most important one:
      <br />
      <span class="funky-color">HAVE FUN WHILE CODING!</span>
      <div class="tux-image-container">
        <img src="/images/coding_book.png" class="book" />
      </div>
    </div>
  );
});
