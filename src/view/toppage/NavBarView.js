(function(global, $) {
    var NavBarView = Backbone.View.extend({
        el: $('#main_bar'),
        events: {
            "click li.navbar-item": "clickToNavBar", // #foo 以下の .bar で発生する click イベント
        },
        initialize: function(){
            _.bindAll(this, "render");
            this.model.bind("change", this.render);
        },
        //コントローラー群
        clickToNavBar: function(e) {
            this.model.changeSelectedIndex($(e.currentTarget).val());
        },
        //ビュー群
        render: function(){
            console.log("render");
        }
    });

    $(function(){new NavBarView({model:new NavBarModel()});});
})((this || 0).self || global, jQuery);