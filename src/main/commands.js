import '../shared/typist.ts';

var commands = {
    "whoami": function(args) {
        window.typist.
            print('user');
    },
    "about": () => {
        window.typist
              .print("Welcome to my bio site! My name is Ilana (@aelaina).")
              .print("I'm a pretty keep-to-myself being with how I go about my day and what I'm upto, however")
              .print("you're able to find out more about me below;")
              .print("I've learnt everything I know currently mainly by myself, apart from the times where I've had second input from friends")
              .print("and also doccumentation and examples for what the task is.")
              .print("")
              .print("I spend most of my time messing around and looking into computer hardware and stuff similar")
              .print("i.e, consoles, old PC stuff etc etc")
              .print("")
              .print("I mainly keep to myself, however, if you do wish to reach out..")
              .print("")
              .print("You can find my contact information by running the 'contact' command.")
    },
    "contact": function(args) {
        window.typist.
            print('GitHub: <a href="https://github.com/aelaina">@aelaina</a>').
            sleep(100).
            print('Discord: aelaina').
            sleep(100).
            print('YouTube: <a href="https://www.youtube.com/channel/UCJvHj1Lvk5a8o8VeoLzPj6Q">@aelaina</a>').
            sleep(100).
            print('Email: admin@ilana.cc');
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
