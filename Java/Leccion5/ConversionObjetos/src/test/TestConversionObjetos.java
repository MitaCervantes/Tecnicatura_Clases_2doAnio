package test;

import domain.*;

public class TestConversionObjetos {
    public static void main(String[] args) {
        Empleado empleado;
        
        empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
        //System.out.println("empleado = " + empleado);        
        System.out.println(empleado.obtenerDetalles());//Si queremos acceder a metodo Escritor
        
        //Downcasting
        //((Escritor)empleado).getTipoEscritura();//Tenemos 2 opciones, esta es la 1ra
        Escritor escritor = (Escritor) empleado;//esta es la 2da
        escritor.getTipoEscritura();
        
        //Upcasting
        Empleado empleado2 = escritor;
        System.out.println(empleado2.obtenerDetalles());
    }
}
