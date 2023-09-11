# bool contiene los valores de True y False
# Tipos numericos, False para 0 (cero), True los demás valores
valor = 0
resultado = bool(valor)
print(f'Valor {valor}, resultado: {resultado}')
valor = 15
resultado = bool(valor)
print(f'Valor {valor}, resultado: {resultado}')

# Tipo string -> False para '', True demás valores
valor = ''
resultado = bool(valor)
print(f'Valor {valor}, resultado: {resultado}')
valor = 'Hola'
resultado = bool(valor)
print(f'Valor {valor}, resultado: {resultado}')

# Tipo colecciones, False para colecciones vacias
# # Tipo colecciones, True para todas las demás colecciones
# Lista
valor = []
resultado = bool(valor)
print(f'Valor de una lista vacia: {valor}, resultado: {resultado}')
valor = [2,3,4]
resultado = bool(valor)
print(f'Valor de una lista con elementos: {valor}, resultado: {resultado}')

# Tupla
valor = ()
resultado = bool(valor)
print(f'Valor de unta tupla vacia: {valor}, resultado: {resultado}')
valor = (5,)
resultado = bool(valor)
print(f'Valor de una tupla con elementos: {valor}, resultado: {resultado}')

# Diccionario
valor = {}
resultado = bool(valor)
print(f'Valor de un diccionario vacio:  {valor}, resultado: {resultado}')
valor = {'nombre':'Juan', 'apellido':'Perez'}
resultado = bool(valor)
print(f'Valor de un diccionario con elementos: {valor}, resultado: {resultado}')

# Sentencias de control con bool
if bool(1):
    print('Regresa verdadero')
else:
    print('Regresa falso')

# Ciclos
variable = 3
while variable:
    print('Regresa verdadero')
    break
else:
    print('Regresa falso')