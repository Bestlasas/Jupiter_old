﻿var Index = function () {
    "use strict";
    return {
        // ---------------------------------
        //           Propiedades 
        // ---------------------------------
        actionTemplate: null,

        // ---------------------------------
        //           Metodos 
        // ---------------------------------

        init: function () {
            this.handleTemplates();
		},
		handleTemplates: function () {
            this.actionTemplate = kendo.template($('#Index #actionTemplate').html());
        },
    };
}();