import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

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
      <div id="projects">
        <p class="centered">Apps</p>
        <a href="https://github.com/blue-pitaya/stopwatch">Stopwatch</a>(
        <a class="goblin-color" href="https://stopwatch.bluepitaya.xyz">
          DEMO
        </a>
        )<span>•</span>
        <a href="https://github.com/blue-pitaya/chessboard">Chessboard</a>(
        <a class="goblin-color" href="https://chessboard.bluepitaya.xyz">
          DEMO
        </a>
        )<p class="centered">Libs</p>
        <a href="https://github.com/blue-pitaya/scala-d3-force">
          scala-d3-force
        </a>
      </div>
      <h2 id="aboutme">About me</h2>
      <p>
        I like functional programming. I like strong static typing. I like clean
        code. I did something in:
      </p>
      <ul>
        <li>Scala (ScalaJS, Cats Effect, little bit of Akka)</li>
        <li>Javscript/Typescript (Vue.js, React, vanilla)</li>
        <li>C# (WPF, Desktop)</li>
        <li>PHP (CakePHP)</li>
        <li>Python (various)</li>
        <li>Java (various, some mobile games in high school)</li>
        <li>Kotlin (mobile)</li>
        <li>Ruby on rails (fuck ruby)</li>
        <li>
          C/C++ (algorithm implementations and some shit projects for studies)
        </li>
        <li>Pascal (in primary school)</li>
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
        One of major aspects in programming in abstraction. Nobody could write
        any complex system without abstraction of some level. And that's what
        programmers are good at: finding patterns/similarities in problems that
        they're encountering and generalizing them. For example we have a pretty
        big set of funny anagrams like KISS, YAGNI, DRY to only name some. Here
        i want to share my own realizations that I came to while coding. They
        can be opaque, not complete, unorganized (as they come directly from my
        notes) or just plain stupid. However maybe they will prevent me for
        making the same mistakes over and over again ;)
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