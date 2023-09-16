package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.modelo.Estudiantes2022;
import utn.estudiantes.servicio.EstudianteServicio;

import java.util.Scanner;

@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner {
	@Autowired
	private EstudianteServicio estudianteServicio;
	private static final Logger logger = LoggerFactory.getLogger(EstudiantesApplication.class);
	String nl = System.lineSeparator();

	public static void main(String[] args) {
		logger.info("Iniciando la aplicación...");
		//Levantar la fabrica de Spring
		SpringApplication.run(EstudiantesApplication.class, args);
		logger.info("Aplicacion Finalizada!");
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info(nl+"Ejecuntando el método run de Spring..."+nl);
		var salir = false;
		var consola = new Scanner(System.in);
		while(!salir){
			mostrarMenu();
			salir = ejecutarOpciones(consola);
			logger.info(nl);
		}//Fin ciclo While
	}

	private static void mostrarMenu(){
		logger.info(nl);
		logger.info("""
                ******* Sistema de Estudiantes *******
                1. Listar Estudiantes
                2. Buscar Estudiantes
                3. Agregar Estudiante
                4. Modificar Estudiante
                5. Eliminar Estudiante
                6. Salir
                Elige una opción:
                """);
	}

	private static boolean ejecutarOpciones(Scanner consola){
		var opcion = Integer.parseInt(consola.nextLine());
		var salir = false;
		switch (opcion){
			case 1 -> {//Listar estudiantes
				logger.info(nl+"Listado de Estudiantes: "+nl);
				List <Estudiantes2022> estudiantes = estudianteServicio.listarEstudiantes();
				estudiantes.forEach((estudiante -> logger.info(estudiante.toString()+nl)));
			}//Fin caso 1
			case 2 -> {//Buscar estudiantes por id
				logger.info("Introduce el id_estudiante a buscar: ");
				Estudiantes2022 estudiante =
						estudianteServicio.buscarEstudiantePorId(idEstudiante);
				if(estudiante != null)
					logger.info("Estudiante encontrado = " + estudiante  nl);
				else
					logger.info("Estudiante No encontrado = " + estudiante + nl);
			}//Fin caso 2
			case 3 ->{//Agregar estudiante
				logger.info("Agregar estudiante:");
				logger.info("Nombre: ");
				var nombre = consola.nextLine();
				logger.info("Apellido: ");
				var apellido = consola.nextLine();
				logger.info("Telefono: ");
				var telefono = consola.nextLine();
				logger.info("Email: ");
				var email = consola.nextLine();
				//crear objeto estudiante sin id
				var estudiante = new Estudiante2022();
				estudiante.setNombre(nombre);
				estudiante.setApellido(apellido);
				estudiante.setTelefono(telefono);
				estudiante.setEmail(email);
				estudianteServicio.guardarEstudiante(estudiante);
				logger.info("Estudiante agregado:" +estudiante+nl);
			}//Fin caso 3
			case 4 ->{//Modificar estudiante
				logger.info("Modificar estudiante: ");
				logger.info("Ingrese el id Estudiante: ");
				var idEstudiante = Integer.parseInt(consola.nextLine());
				//Buscamos el estudiante a modificar
				Estudiantes2022 estudiante =
						estudianteServicio.buscarEstudiantePorId(idEstudiante);
				if(estudiante != null) {
					logger.info("Nombre: ");
					var nombre = consola.nextLine();
					logger.info("Apellido: ");
					var apellido = consola.nextLine();
					logger.info("Telefono: ");
					var telefono = consola.nextLine();
					logger.info("Email: ");
					var email = consola.nextLine();
					estudiante.setNombre(nombre);
					estudiante.setApellido(apellido);
					estudiante.setTelefono(telefono);
					estudiante.setEmail(email);
					estudianteServicio.guardarEstudiante(estudiante);
					logger.info("Estudiante modificado:" +estudiante+nl);
				}
				else{
					logger.info("Estudiante NO encontrado con el id: "+idEstudiante+nl);
				}
			}//Fin caso 4
			case 5 ->{//Eliminar estudiante
				logger.info("Eliminar estudiante: ");
				logger.info("Id estudiante: ");
				var idEstudiante = Integer.parseInt(consola.nextLine());
				//Buscamos el id estudiante a eliminar
				var estudiante = estudianteServicio.eliminarEstudiante(idEstudiante);
				if(estudiante != null) {
					estudianteServicio.eliminarEstudiante(estudiante);
					logger.info("Estudiante eliminado: "+estudiante+nl);
				}else
					logger.info("Estudiante NO encontrado con el id: "+estudiante+nl);
			}//Fin caso 5
			case 6 -> {//Salir
				logger.info("Hasta pronto!!!");
				salir = true;
			}//Fin caso 6
			default -> logger("Opción no reconocida: "+opcion+nl);
		}//Fin switch
		return salir;
	}//Fin metodo ejecutarOpciones
}
