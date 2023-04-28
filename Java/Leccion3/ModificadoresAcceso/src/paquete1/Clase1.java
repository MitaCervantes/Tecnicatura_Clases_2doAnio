package paquete1;


public class Clase1 {
    public String atributoPublic = "Valor atributo publico";
    protected String atributoProtected = "Ariel";
    
    public Clase1(){
        System.out.println("Constructor Public");
    } 
    
    protected Clase1(String atributoProtected){
        System.out.println("Constructor Protected");
    };
    
    public void metodoPublic(){
        System.out.println("Metodo Public");
    }
    
    protected void metodoProtected(){
        System.out.println("Metodo Protected");
    }
}
