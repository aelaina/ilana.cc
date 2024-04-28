import {escapeHtml} from '../shared/utils.ts';
import '../shared/main.css';
import {Typist, TypistOptions, TypistSpeed} from '../shared/typist.ts';
import 'jquery';

$(function() {
    var windowSize = $(window).height() - 30;
    $(window).resize(function() {
        windowSize = $(window).height() - 30;
        var height = 0;
        $('#terminal').children().each(function() {
            height += $(this).height();
        });
        $('#terminal').css('height', windowSize + 'px');
        $('#terminal').scrollTop(height);
    });
    $.fn.ignore = function(sel) {
        return this.clone().find(sel || ">*").remove().end();
    };
    
    let opts = new TypistOptions("user@ilana.cc", "#000", "#ffffff", "monospace", windowSize, 80);
    window.typist = new Typist($('#terminal'), opts);
    
    function type404() {
        window.typist.prompt().
               speed(TypistSpeed.FAST).
                    type('firstboot.sh\n').
               speed(TypistSpeed.SUPERFAST).
                    type('    _ __                            \n').
                    type('   (_) /___  _____  _____     __________\n').
                    type('  / / / __ `/ __\/ __ `/   / ___/ ___/\n').
                    type(' / / / /_/ / / / / /_/ /   / /__/  /__  \n').
                    type('/_/_/\__,_/_/ /_/\__,_/(_) /___/  \___/   \n').
                    
                speed(TypistSpeed.FAST).
                prompt().
                    type('get_page.sh\n').
                    sleep(400).
                    type('Initializing HTTP subsystem.... ').
                    sleep(600).
                    type('[ok]\n').
                    sleep(600).
                    type('Attempting to serve page.... ').
                    sleep(600).
                    type('[failed]\n').
                    sleep(100).
                    type('FATAL ERROR: 404, page not found').
                prompt();
    }
    
    setTimeout(function() {
        type404();
    }, 200);
});
        
