package domain;

public class Persona {
    
    private final int idPersona;
    private static int contadorPersonas;
    
     static{//bloque de inicializacion ESTATICO
        System.out.println("Ejecucion bloque estatico");
        ++Persona.contadorPersonas;
        //idPersona = 10;
    }
    
    {//bloque de inicialzacion NO ESTATICO(contexto dinamico)
        System.out.println("Ejecucion bloque NO estatico");
        this.idPersona = Persona.contadorPersonas++;//incrementamos el atributo
    }
    
    //los bloques de inicializacion se ejecutan antes del constructor
    
    public Persona(){
        System.out.println("Ejecucion del constructor");
    }

    public int getIdPersona() {
        return idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }   
}
