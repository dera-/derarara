(function(global) {
    "use strict";
    var NavBarItemModel = Backbone.Model.extend({
        defaults: {
            name: "",
            value: 0,
            link:"#",
            isActive: false
        },
        initialize: function() {
        },
        select: function(num) {
            this.set({isActive: true});
        }
    });
    global.NavBarModel = NavBarModel;
})((this || 0).self || global);