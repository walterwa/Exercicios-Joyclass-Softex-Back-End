# criar um tipo abstrato de dado (TAD) p manipular numeros 
# complexos em Python
# calcular 3 numeros complexos
# + - * /



def main(): 
    print('Números complexos: ')
    
    numeroComplexos()
    # parte real (a) e parte imaginária (bi)
    # formula:
    #      z = a + bi, com a, b E R

    print(f"Adição: {__adicao__()}")
    print(f"Subratação: {__subtracao__()}")
    print(f"Divisão: {__divisao__()}")
    print(f"Multiplicação: {__multiplicacao__()}")

def numeroComplexos():

    global numeroComplexo1 
    global numeroComplexo2 
    global numeroComplexo3

    numero1Real= float(input('Entre com o PRIMEIRO número: '))
    numero1Imaginario= float(input('Entre com o PRIMEIRO número imaginário: '))
    numero2Real= float(input('Entre com o SEGUNDO número: '))
    numero2Imaginario = float(input('Entre com o SEGUNDO número imaginário: '))
    numero3Real = float(input('Entre com o TERCEIRO número: '))
    numero3Imaginario= float(input('Entre com o TERCEIRO número imaginário: '))

    #transformando os inputs em números complexos
    numeroComplexo1 = complex(numero1Real, numero1Imaginario)
    numeroComplexo2 = complex(numero2Real, numero2Imaginario)
    numeroComplexo3 = complex(numero3Real, numero3Imaginario)

    #verificando os números complexos
    # print(type(numeroComplexo1))
    # print(type(numeroComplexo2))
    # print(type(numeroComplexo3))
    # print("")

    return numeroComplexo1, numeroComplexo2, numeroComplexo3 

    #imprimindo os números complexos


def __adicao__():
    return numeroComplexo1 + numeroComplexo2 + numeroComplexo3

def __subtracao__():
    return numeroComplexo1 - numeroComplexo2 - numeroComplexo3

def __divisao__():
    return numeroComplexo1 / numeroComplexo2 / numeroComplexo3

def __multiplicacao__():
    return numeroComplexo1 * numeroComplexo2 * numeroComplexo3

main() #chamando a função principal