import '../shared/typist.ts';

var commands = {
    "whoami": function(args) {
        window.typist.
            print('user');
    },
    "about": () => {
        window.typist
              .print("Welcome to my bio site! My name is Ilana (@aelaina).")
              .print("I'm a random trans (MtF) dumbass from the UK! I'm slowly learning my way through coding and other bigger projects over time!")
              .print("A little more about me; I'm 17 and was born on december 26th, unlucky I know, however, I started my interest into coding once I first got into technology/pc hardware, was competent enough to build my first ever rig, from that point everything has been a new learning expereince!")
              .print("I first started out with lua, which then evolved into other languages like html, c++ and more that I will learn overtime!")
              .print("You can find my contact information by running the 'contact' command.")
    },
    "contact": function(args) {
        window.typist.
            print('GitHub: <a href="https://github.com/aelaina">@aelaina</a>').
            sleep(100).
            print('Discord: aelaina');
    },
    "help": function(args) {
        for (var prop in commands) {
            window.typist.print(prop.toLowerCase());
        }
    },
    "clear": function(args) {
        window.typist.clear();
    },
};

export {commands};
