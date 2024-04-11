import '../shared/typist.ts';

var commands = {
    "whoami": function(args) {
        window.typist.
            print('user');
    },
    "about": () => {
        window.typist
              .print("Welcome to my personal website! My name is Ilana (@aelaina).")
              .print("Odit mollitia perspiciatis sint labore nobis reprehenderit odit. Et voluptatem harum iure voluptatem saepe.")
              .print("You can find my contact information by running the 'contact' command.")
    },
    "contact": function(args) {
        window.typist.
            print('GitHub: <a href="https://github.com/aelaina">@aelaina</a>').
            sleep(100).
            print('Telegram: <a href="https://t.me/...">@...</a>').
            sleep(100).
            print('Discord: aelaina').
            sleep(100).
            print('LinkedIn: <a href="https://www.linkedin.com/in/...">...</a>').
            sleep(100).
            print('Email: email@example.com');
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
