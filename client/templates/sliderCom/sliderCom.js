Template.reactSlick.rendered = function() {
  IonSideMenu.snapper.disable();
};

Template.reactSlick.destroyed = function() {
  IonSideMenu.snapper.enable();
};

Template.reactSlick.helpers({
	SliderCom: function () {
		return SliderCom;
	}
});