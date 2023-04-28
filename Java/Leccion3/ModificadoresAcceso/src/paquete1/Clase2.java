package paquete1;

class Clase2{
    String atributoDefault = "Valor del atributo Default";
    
    /*Clase2(){
        System.out.println("Constructor Default");
    }*/
    
     public Clase2(){
        super();
        this.atributoDefault = "Modificacion atributo default";
        System.out.println("atributoDefault = " + this.atributoDefault);
        this.metodoDefault();
    }
    
   
    void metodoDefault(){
    }
    
}
