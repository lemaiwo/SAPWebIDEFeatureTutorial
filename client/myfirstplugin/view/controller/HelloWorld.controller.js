sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel"
], function(Controller,MessageBox,JSONModel) {
	"use strict";

	return Controller.extend("myfirstplugin.view.controller.HelloWorld", {
		onInit:function(){
			this.getView().setModel(new JSONModel({name:""}));
		},
		onMyEvent:function(oEvt){
			var view = this.getView(),
				context = view.getViewData().context,
				uimodel = view.getModel(),
				name = uimodel.getProperty("/name");
				
				context.service.myfirstservice.getValueFromService(name).then(function(message){
					//MessageBox.alert(message);
					return context.service.usernotification.liteNotificationSuccess(message);
				});
			
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf myfirstplugin.client.myfirstplugin.view.view.HelloWorld
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf myfirstplugin.client.myfirstplugin.view.view.HelloWorld
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf myfirstplugin.client.myfirstplugin.view.view.HelloWorld
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf myfirstplugin.client.myfirstplugin.view.view.HelloWorld
		 */
		//	onExit: function() {
		//
		//	}

	});

});