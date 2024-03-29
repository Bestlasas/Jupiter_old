﻿var InsUsuario = function () {
	"use strict";
	return {
		// ---------------------------------
		//           Propiedades 
		// ---------------------------------
		form: null,
		model: "",
		sectionId: "",
		dataForm: null,
		validator: null,
		container: null,

		// ---------------------------------
		//           Metodos 
		// ---------------------------------

		init: function (container, modelType, sectionId) {
			this.sectionId = sectionId;
			this.model = modelType;
			this.container = container;
			this.form = $("#" + sectionId).find("form");
			Utils.addSectionToContainer(this.container, this.sectionId, this);
			this.handleSubmitForm();
			this.handleValidator();
		},

		handleValidator: function () {
			$.validator.unobtrusive.parse($("#InsUsuario form"));
		},

		Validate: function () {
			$.validator.unobtrusive.parse($("#UpdRolesUsuario form"));
			InsUsuario.form.validate().settings.ignore = [];
			if (!InsUsuario.form.valid()) {
				return false;
			}
			var success = false;
			var data = $('#InsUsuario').find("form").serializeArray();
			$.ajax({
				method: "POST",
				url: "/SEG/Usuarios/ValidarCrearUsuario/",
				data: data,
				async: false,
			})
				.done(function (result) {
					success = result.Success;
					if (!success) {
						swal({
							title: "Error",
							text: result.Message,
							type: "error"
						});
					}
				});
			return success;
		},

		handleSubmitForm: function () {
			var _this = this;
			this.form.submit(function (e) {
				_this.dataForm = $(this).serializeObject();
				e.preventDefault();
			});
		},

		resetPassword: function () {
			swal({
				title: "Alerta",
				text: "¿Esta seguro de restablecer la contraseña?",
				type: "warning",
				showCancelButton: true,
				confirmButtonClass: "btn-warning",
				confirmButtonText: "Restablecer.",
				closeOnConfirm: false,
				showLoaderOnConfirm: true
			},
				function (isConfirm) {
					if (isConfirm) {
						var data = $('#InsUsuario').find("form").serializeArray();
						$.ajax({
							method: "POST",
							url: "/SEG/Usuarios/ResetPassword/",
							data: data,
						})
							.done(function (result) {
								if (result.Success) {
									swal({
										title: "<i>Correcto</i>",
										text: result.Message,
										type: result.Data,
										html: true
									});

								} else {
									swal({
										title: "Error",
										text: result.Message,
										type: "error"
									});
								}
							});
					}
				});
		}
	}
}();