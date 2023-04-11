import {libro} from "./Libro";
export class Enciclopedia extends Libro{
    constructor(categoria,isbn,autor,titulo,editorial,edicion,precio,tipoPresentacion,cantidadEjemplares,sizeBook,detalle,numeroPaginas,idioma,estado,codigo,areaConocimiento,volumen,nroTomos)

{
        this._areaConocimiento = areaConocimiento;
        this._volumen = volumen;
        this._nroTomos = nroTomos;
        this._titulo = titulo;
        this.editorial = editorial;
        this._edicion = edicion;
        this._precio = precio;
        this._tipoPresentacion = tipoPresentacion;
        this._cantidadEjemplares = cantidadEjemplares;
        this._sizeBook = sizeBook;
        this._detalle=detalle;
        this._numeroPaginas = numeroPaginas;
        this._idioma = idioma;
        this._estado = estado;
        this._codigo = codigo;
    }    
        get areaConocimiento(){
            return this._areaConocimiento;
        }
        set areaConocimiento(v_areaConocimiento){
            this._areaConocimiento = v_areaConocimiento;
        }
        get volumen(){
            return this._volumen;
        }
        set volumen(v_volumen){
            this._volumen = v_volumen;
        }
        get nroTomos(){
            return this._nroTomos;
        }
        set nroTomos(v_nroTomos){
            this._nroTomos = v_nroTomos;
        }
    }
    