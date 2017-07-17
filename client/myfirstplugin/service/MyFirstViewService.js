define(
	["sap/watt/platform/plugin/platform/service/ui/AbstractPart"],
	function(AbstractPart) {
		"use strict";
		return AbstractPart.extend("myfirstplugin.service.MyFirstViewService.", {
			_oView: null,
			getContent: function() {
				var me = this;
				return AbstractPart.prototype.getContent.apply(this, arguments).then(function() {
					if (!me._oView) {
						me._oView = sap.ui.view({
							viewName: "myfirstplugin.view.view.HelloWorld",
							type: sap.ui.core.mvc.ViewType.XML,
							viewData: {
								context: me.context
							}
						});
					}
					return me._oView;
				});
			}
		});
	});