# Profundizando en el tipo float
a = 3.0

# Constructor float -> puede recibir int y str
a = float(10)
a = float('10')
print(f'a: {a:.2f}')

# Notación exponencial (valores positivos o negativos)
a = 3e5
print(f'a: {a}')
a = 3e-5
print(f'a: {a}')
print(f'a: {a:.5f}')

# Cualquier cálculo que involucre un float, todo cambia a float
a = 4.0 + 5
print(a)
print(type(a))