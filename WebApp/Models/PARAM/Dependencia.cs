﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Models.PARAM
{
    [Table("CORE.Dependencias")]
    public class Dependencia
    {
        [Required(ErrorMessage = "El campo Id es obligatorio.")]
        public int Id { get; set; }

        [Required(ErrorMessage = "El campo Codigo es obligatorio.")]
        [MaxLength(10, ErrorMessage = "El campo Codigo no puede tener mas de 10 caracteres.")]
        public string Codigo { get; set; }

        [Required(ErrorMessage = "El campo Descripcion es obligatorio.")]
        public string Descripcion { get; set; }

        [Required(ErrorMessage = "El campo ColaboradorLiderId es obligatorio.")]
        public int ColaboradorLiderId { get; set; }

        public int? padre_id { get; set; }

    }
}