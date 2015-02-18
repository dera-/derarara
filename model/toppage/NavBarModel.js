(function(global) {
    "use strict";
    var NavBarModel = Backbone.Model.extend({
        defaults: {
            selectedIndex: 0,
            color: "black",
            message:""
        },
        initialize: function() {
        },
        changeSelectedIndex: function(num) {
            console.log(this.get("selectedIndex"));
            this.set({selectedIndex: num});
        }
    });
    global["NavBarModel"] = NavBarModel;
})((this || 0).self || global);