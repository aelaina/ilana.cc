import '../shared/typist.ts';

var commands = {
    "whoami": function(args) {
        window.typist.
            print('user');
    },
    "about": () => {
        window.typist
              .print("Welcome to my bio site! My name is Ilana (@aelaina).")
              .print("I'm a random trans (MtF) 17yo dumbass from the UK! I'm slowly learning my way through coding and other similar field skills.")
              .print("A little more bout me below;")
              .print("I first started out with lua, which then evolved into other languages like html, c++ and more that I will learn overtime.")
              .print("I was a recent college student going through computer science courses, I'm constantly looking for new opportunities to make my way through life and take on new skills :p")
              .print("albeit I'm fucking braindead, I get there eventually.")
              .print(" ")
              .print("You can find my contact information by running the 'contact' command.")
    },
    "contact": function(args) {
        window.typist.
            print('GitHub: <a href="https://github.com/aelaina">@aelaina</a>').
            sleep(100).
            print('Discord: aelaina')
            sleep(100)
            print('YouTube: <a href="https://www.youtube.com/channel/UCJvHj1Lvk5a8o8VeoLzPj6Q">@aelaina</a>');
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
