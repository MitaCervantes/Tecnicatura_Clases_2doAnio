package test;


public class TestAutoboxingUnboxing {
     public static void main(String[] args) {
        //Clases Envolventes de tipos primitivos ó Wrapper
        /*
        int - la clase envolvente es Integer
        long - la clase envolvente es Long
        float - la clase envolvente es Float
        double -  la clase envolvente es Double
        boolean - la clase envolvente es Boolean
        byte - la clase envolvente es Byte
        char - la clase envolvente es Character
        short - la clase envolvente es Short
        */
        int enteroPrim = 10; //Tipo Primitivo
        System.out.println("enteroPrim = " + enteroPrim);
        
        Integer entero = 10;//Tipo Object con la clase Integer
        System.out.println("entero = " + entero.toString());
        System.out.println("entero double = " + entero.doubleValue());//Autoboxing
        
        int entero2 = entero;//Unboxing
        System.out.println("entero2 = " + entero2);
    }
}
