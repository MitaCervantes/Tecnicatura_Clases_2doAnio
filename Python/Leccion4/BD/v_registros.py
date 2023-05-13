import psycopg2  # Esto es para poder conectarnos a Postgres

conexion = psycopg2.connect(
    user='postgres',
    password='postgres',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)
try:
    with conexion:
        with conexion.cursor() as cursor:
            #sentencia = 'SELECT * FROM persona WHERE id_persona IN (1,2)' #Placeholder
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s'
            entrada = input('Digite los id_persona a buscar (separados por coma): ')
            llaves_primarias = (tuple(entrada.split(', ')),)
            #id_persona = input("Digite un número para el id_persona: ")
            cursor.execute(sentencia,llaves_primarias) # De esta manera ejecutamos la sentencia
            registros = cursor.fetchall() # Recuperamos todos los registros que seran una lista
            for registro in registros:
                print(registro)

except Exception as e:
    print(f'Ocurrio un error {e}')
finally:
    conexion.close()