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
            #cursor = conexion.cursor()
            sentencia = 'SELECT * FROM persona WHERE id_persona = %s' #Placeholder
            id_persona = input("Digite un número para el id_persona: ")
            cursor.execute(sentencia, (id_persona,)) # De esta manera ejecutamos la sentencia
            #registros = cursor.fetchall() # Recuperamos todos los registros que seran una lista
            registros = cursor.fetchone() #No trae un array sino un tupla
            print(registros)
except Exception as e:
    print(f'Ocurrio un error {e}')
finally:
    #cursor.close()
    conexion.close()

#https://www.psycopg.org/docs/usage.html

