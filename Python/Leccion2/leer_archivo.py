
archivo = open('prueba.txt', 'r', encoding='utf-8')
# Las letras son: 'r' (read) , 'a' (append), 'w' (write), 'x' (create) , ´t´ (text), ´b´(binary), 'w+' 'r+' (read and write).
# print(archivo.read())
# print(archivo.read(15))
# print(archivo.read(10)) #Continuamos desde la linea anterior
# print(archivo.readline())
# print(archivo.readline())

# Vamos a iterar el archivo, cada una de las lineas

#for linea in archivo:
    #print(linea)

#print(archivo.readlines()) #:accedemos al archivo como si fuera una lista
#print(archivo.readlines()[1]) #print(archivo.readlines())

# Anexamos informacion, copiamos a otro
archivo2 = open('copia.txt', 'a', encoding='utf-8')
archivo2.write(archivo.read())
archivo.close() # cerramos el primer archivo
archivo2.close() # cerramos el segundo archivo

print('Se ha terminado el proceso de leer y copiar archivos')

