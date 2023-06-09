import psycopg2 as bd # Esto es para poder conectarnos a Postgres

conexion = bd.connect(user='postgres', password='postgres', host='127.0.0.1', port='5432', database='test_bd')

try:
    conexion.autocommit = False #Se inicia la transaccion
    cursor = conexion.cursor()

    sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
    valores = ('Carlos', 'Lara', 'clara@mail.com')
    cursor.execute(sentencia, valores)

    sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    valores = ('Juan', 'Juarez', 'jcjuarez@mail.com', 1)
    cursor.execute(sentencia, valores)

    conexion.commit() #Se cierra la transaccion
    print('Termina la transaccion')
except Exception as e:
    conexion.rollback()
    print(f'Ocurrio un error, se hizo un rollback {e}')
finally:
    conexion.close()
