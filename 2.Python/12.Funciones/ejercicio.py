## ---- ---- Crear una funcion que pida dos numeros. ---- ---- ##
# si el primero es mayor al segundo, el programa debe retornar el valor 1; 
# si el segundo es mayor al primero, debe retornar -1; si ambos son iguales, debe retornar 0
# ---- ---- ##



# def numeros():
#     num1 = float(input("Ingrese el primer numero: " ))
#     num2 = float(input("Ingrese el segundo numero: "))
#     if num1 > num2:
#         return 1
#     elif num2 > num1:
#         return -1
#     else:
#         return 0
# print(numeros())

## ---- ---- ejercicio numero 2 ---- ---- ##
# Escriba una funcion que calcule el total de una factura tras aplicarle el IVA.
# La funcion debe recibir la cantidad sin IVA y el porcentaje de IVA a aplicar
# Si se invoca la funcion sin pasarle el porcentaje de IVA, debera aplciar un 21%
# ---- ---- ##

def total():
    monto = float(input("Ingresa el valor del producto que estas pagando: "))    
    iva = int(input("Ingresa el valor del IVA: "))
    if iva != 0:
        if iva > 0:
            totalPagar = ((monto * iva) / 100) + monto
            return totalPagar
        else:
            return "El monto de IVA es negativo. /n No podemos avanzar"
    else:
        totalPagar = (monto * 0.21) + monto
        return totalPagar

print("El total de su monto es: ", total())