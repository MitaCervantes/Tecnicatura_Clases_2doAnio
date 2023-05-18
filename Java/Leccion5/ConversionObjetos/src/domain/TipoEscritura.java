
package domain;


public enum TipoEscritura {
    CLASICO("Escritura a Mano"),
    MODERNO("Escritura Digital");
    
    private final String descripcion;
    
    private TipoEscritura(String descripcion){ //constructor
        this.descripcion = descripcion;
    }
    
    //Metodo get
    public String getDescripcion(){
        return this.descripcion;
    }
}