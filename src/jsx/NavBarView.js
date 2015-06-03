(function(global) {
  "use strict";

  var ItemBox = 

  var NavBarItemView = React.createClass({
    propTypes: {
      model: React.PropTypes.object.isRequired,
      //親の処理の委譲
      moveItemBoxes: React.PropTypes.func.isRequired 
    },
    clickEvent: function() {
      this.props.moveItemBoxes();
    },
    render: function() {
      var active = this.state.isActive ? 'uk-active' : '';
      return (
        <li class="{active} navbar-item" value="{this.props.id}" onclick={this.clickEvent()}>
          <a href="{this.props.link}">{this.props.name}</a>
        </li>
      );
    }
  });

  var NarBarView = React.createClass({
    getInitialState: function() {
      return {
        id: "main_bar"
        models: [
          new NavBarItemModel({name:"コンテンツ", value:0, link:"#contents", isActive:true}),
          new NavBarItemModel({name:"新着情報", value:1, link:"#info"}),
          new NavBarItemModel({name:"連絡先", value:2, link:"#renraku"})
        ]
      };
    },
    moveItemBoxes : function() {

    },
    render: function() {
      var items = this.state.models.map((model) => {
        return <NavBarItemView model={model} moveItemBoxes={this.moveItemBoxes}/>
      });
      return (
        <nav class="uk-navbar uk-margin-large-bottom uk-navbar-attached" id="{this.state.id}">
          <ul class="uk-navbar-nav">
            {items}
          </ul>
        </nav>
      );
    }
  });

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
})((this || 0).self || global);