import {color_manager} from "./color_manager";

const jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here
require("jquery-ui/dist/jquery-ui")


$(function () {
    const cm_instance = color_manager();
    cm_instance.init({
        rgb: {
            r: 0,
            g: 255,
            b: 0
        }
    });
});
