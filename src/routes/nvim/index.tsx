import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div>
      <div class="text-nav">
        <a href="#motivation">Motivation</a>
        <span>•</span>
        <a href="#config">My config</a>
        <span>•</span>
        <a href="#usecases">Use cases</a>
        <span>•</span>
        <a href="#screenshots">Screenshots</a>
      </div>
      <h1>Neovim as IDE</h1>
      <img src="/images/neovim-logo.svg" style="width: 420px" />
      <h2 id="#motivation">Motivation</h2>
      <p>
        Why i chose to use neovim? I have used many IDEs and text editors in my
        life: Turbo Pascal, Geany, Eclipse, various JetBrains IDEs, Visual
        Studio, VS Code. At first, i didn't have much expectation for features,
        design, etc. I was happy while i could just write code, have some syntax
        highlight and maybe some shortcuts to compile/run. As my experience grew
        i wanted more functionalities. IDE is the most important tool for a
        developer to work with and i wanted a perfect tool. But productivity
        wasn't the only goal, i also wanted to my IDE "look cool" and not to be
        bloated with features i don't really use.
      </p>
      <p>
        Soon after i started using vim, i discovered neovim and i fell in love
        with it. It wasn't really productive at first, because i had to learn
        some basics and configure it A LOT, but i liked the "terminal look" and
        minimalistic style from the very beginning. I quickly realized how
        switching between mouse and keyboard was uncomfortable for me.
        Configuration was also fun (though i know that most people don't find it
        interesting), because i could chose what i really needed and customized
        it even to the level of source code. Finally, i could compose a perfect
        tool for myself.
      </p>
      <p>
        Check out those videos for more info:
        <br />
        <a href="https://www.youtube.com/watch?v=D4YTJ2W5q4Y">
          Why I use Vim in 2022
        </a>
        <br />
        <a href="https://www.youtube.com/watch?v=84qoMxS-iqQ">
          Why even bother with Vim or Neovim in 2022?
        </a>
      </p>
      <h2 id="config">My config</h2>
      <p>
        My neovim config can be found in{" "}
        <a href="https://github.com/blue-pitaya/dotfiles">this repo</a>, under{" "}
        <code>dotfiles/.config/nvim</code> directory. I also recommend changing
        key repetition time. I use 250ms delay before key repetition (
        <code>xset r rate 250 50</code>). It will allow to navigate text by keys
        faster.
      </p>
      <div>
        <p>List of most important plugins that i use:</p>
        <ul class="bluelinks">
          <li>
            <a href="https://github.com/wbthomason/packer.nvim">packer.nvim</a>{" "}
            - plugin management. I swtich to it from vim-plug, because it's
            written in lua and I can then have almost all of my config in lua.
          </li>
          <li>
            <a href="https://github.com/nvim-tree/nvim-tree.lua">
              nvim-tree.lua
            </a>{" "}
            - file explorer.
          </li>
          <li>
            <a href="https://github.com/nvim-telescope/telescope.nvim">
              telescope.nvim
            </a>
            - fuzzy finder. It allows searching for files, live grep (searching
            for text in all files), looking up opened buffers, looking for code
            references and more. One of the most useful tools.
          </li>
          <li>
            <a href="https://github.com/tpope/vim-fugitive">vim-fugitive</a> -
            git plugin. I use it only to stage/unstage files, commit, push and
            sometimes to reset changes.
          </li>
          <li>
            <a href="https://github.com/sindrets/diffview.nvim">
              diffview.nvim
            </a>{" "}
            - very powerful diff tool. I use it to all diff work i need:
            inspecting file history, checking differences before commiting and
            even resolving conflicts while merging.
          </li>
          <li>
            <a href="https://github.com/folke/trouble.nvim">trouble.nvim</a> -
            pretty list for showing diagnostics and more. I used it only to mark
            and list errors, warning etc. in my code.
          </li>
          <li>
            <a href="https://github.com/hrsh7th/nvim-cmp">nvim-cmp</a> -
            autocompletion plugin.
          </li>
          <li>
            <a href="https://github.com/dcampos/nvim-snippy">nvim-snippy</a> -
            snippets plugin. I have it connected to autocomplition plugin, so
            you can execute snippets from autocomplete list. Honestly, I almost
            never use snippets, but have it anyway.
          </li>
          <li>
            <a href="https://github.com/neovim/nvim-lspconfig">
              nvim-lspconfig
            </a>{" "}
            - a set of lsp configurations for various langueas. LSP is a
            language server protocol, it makes it possible to do "IDE" specific
            operations like finding referneces, gettings code errors, etc. Nvim
            natively supports lsp. This plugin is just set of common
            configurations of various programming languages. Currently (as
            writhing this sentence) i only use the vue/typescript config from
            it.
          </li>
          <li>
            <a href="https://github.com/scalameta/nvim-metals">nvim-metals</a> -
            scala metals plugin. Interface for managing and connecting to Metals
            (scala language server).
          </li>
          <li>
            <a href="https://github.com/mfussenegger/nvim-dap">nvim-dap</a> -
            debugger frontend. I have it connected with nvim-metals so i can
            debug scala code. Unfortunetaly debugging don't work for scalajs, so
            i still println dupa sometimes.
          </li>
          <li>
            <a href="https://github.com/nvim-lualine/lualine.nvim">
              lualine.nvim
            </a>
            - pretty status bar.
          </li>
          <li>
            <a href="https://github.com/jiangmiao/auto-pairs">auto-pairs</a> -
            automatic bracket (and alike) closing.
          </li>
        </ul>
        <p>
          Full list is in <code>plugins.lua</code> file. I also use custom
          colorscheme which supports true color (inspired by{" "}
          <a href="https://github.com/nonoMain/nvimrc/blob/master/colors/cplex.vim">
            this one
          </a>
          ).
        </p>
      </div>
      <h2 id="usecases">Use cases</h2>
      <p>
        Here i will show how i do some common development things, like for
        example: jumping between files, debugging or commiting changes.
      </p>
      <p>Coming soon...</p>
      <h2 id="screenshots">Screenshots</h2>
      <div class="nvim-images">
        <a href="/images/nvim-s1.jpg" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/nvim-s1.jpg"
            class="mini-screen"
            alt="my nvim screenshot 1"
          />
        </a>
        <a href="/images/nvim-s2.jpg" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/nvim-s2.jpg"
            class="mini-screen"
            alt="my nvim screenshot 2"
          />
        </a>
        <a href="/images/nvim-s3.jpg" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/nvim-s3.jpg"
            class="mini-screen"
            alt="my nvim screenshot 3"
          />
        </a>
        <a href="/images/nvim-s4.jpg" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/nvim-s4.jpg"
            class="mini-screen"
            alt="my nvim screenshot 4"
          />
        </a>
        <a href="/images/nvim-s5.jpg" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/nvim-s5.jpg"
            class="mini-screen"
            alt="my nvim screenshot 5"
          />
        </a>
      </div>
    </div>
  );
});
