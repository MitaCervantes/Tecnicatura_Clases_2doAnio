import java.util.Scanner;

public class CalculadoraUTN {

    public static void main(String[] args) {
        Scanner entrada = new Scanner (System.in);

        while(true){ //ciclo infinito
            System.out.println("******* Aplicacion Calculadora:");
            mostrarMenu();

            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if (operacion >= 1 && operacion <= 4) {
                    ejecutarOperacion(operacion, entrada);
                }//Fin del if
                else if (operacion == 5) {
                    System.out.println("Hasta pronto!");
                    break;//rompe el ciclo y sale1
                } else {
                    System.out.println("Opcion errónea" + operacion);
                }
                //Imprimimos un salto de linea antes de repertir el menu
                System.out.println();
            }catch (Exception e){//Fin del try, comienzo del catch
                System.out.println("Ocurio un error:" + e.getMessage());
                System.out.println();
            }//Fin catch
        }//Fin while
    }//Fin main

    private static void  mostrarMenu(){
        //Mostramos el menu
        System.out.println("""
                    1.Suma
                    2.Resta
                    3.Multiplicacion
                    4.Division
                    5.Salir
                    """);
        System.out.print("Operacion a realizar? ");
    }//Fin metodo mostrarMenu

    private static void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.print("Digite el valor para el operando 1: ");
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Digite el valor para el operando 2: ");
        var operando2 = Double.parseDouble(entrada.nextLine());
        double resultado;

        switch (operacion) {
            case 1 -> {
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma = " + resultado);
            }
            case 2 -> {
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta = " + resultado);
            }
            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicacion = " + resultado);
            }
            case 4 -> {
                resultado = operando1 / operando2;
                System.out.println("Resultado de la division = " + resultado);
            }
            default -> System.out.println("Opcion errónea" + operacion);
        }//Fin stwitch
    }//Fin metodo ejecutarOperacion
}//Fin clase

