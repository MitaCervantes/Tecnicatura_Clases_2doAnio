# Declaramos una variable

try:
    archivo = open('Prueba.txt', 'w', encoding='utf-8') # La w es de write
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras.\n')
    archivo.write('Como por ejemplo acción, ejecución y producción.\n')
    archivo.write('Con esto terminamos.')
except Exception as e:
    print(e)
finally: # Siempre se ejecuta
    archivo.close() # Con esto se debe cerrar el archivo
# archivo.write('Todo queda perfecto'): este es un error