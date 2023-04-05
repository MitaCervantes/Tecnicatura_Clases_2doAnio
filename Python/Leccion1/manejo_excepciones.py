#Manejo y Procesamiento de Excepciones
resultado = None
a = 10
b = 0
try:
    resultado = a / b
except Exception as e:
    print(f'Ocurrio un error', {e})


print(f'El resultado es: {resultado}')
print('Seguimos...')

#Procesar clases de exception más específicas
try:
    resultado = a/b
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {e} , {type(e)}')
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {e} , {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {e} , {type(e)}')

print(f'Resultado: {resultado}')
print('Seguimos...')

#Más de procedimientos de excepciones
try:
    a = int(input('Digite el primer número: '))
    b = int(input('Digite el segundo número: '))
    resultado = a/b
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {e} , {type(e)}')
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {e} , {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {e} , {type(e)}')

print(f'Resultado: {resultado}')
print('Seguimos...')

#Bloques else y finally al manejar excepciones
try:
    a = int(input('Digite el primer número: '))
    b = int(input('Digite el segundo número: '))
    resultado = a/b
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {e} , {type(e)}')
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {e} , {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {e} , {type(e)}')
else:
    print('No se arrojó ninguna excepción')
finally: #siempre se va a ejecutar
    print('Ejecución de este bloque finally')

print(f'Resultado: {resultado}')
print('Seguimos...')

#Creación de clases de Exception personalizadas
from NumerosIgualesException import NumerosIgualesException
try:
    a = int(input('Digite el primer número: '))
    b = int(input('Digite el segundo número: '))
    if a == b:
        raise NumerosIgualesException('números indénticos')
    resultado = a/b
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {e} , {type(e)}')
except TypeError as e:
    print(f'TypeError - Ocurrió un error: {e} , {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {e} , {type(e)}')
else:
    print('No se arrojó ninguna excepción')
finally:
    print('Ejecución del bloque finally')

print(f'Resultado: {resultado}')

