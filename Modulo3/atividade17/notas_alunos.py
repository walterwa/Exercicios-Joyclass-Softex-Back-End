import pandas as pd #para que esse comando funcione, é preciso ter o pandas instalado
# para instalar o pandas, basta digitar no terminal pip install pandas

df = pd.read_csv("notas_alunos.csv")

#media individual das notas dos alunos
media_notas = (df["nota_1"] + df["nota_2"])/2
df['media_notas'] = media_notas

# df.loc[df["media_notas"] <= 6 | df["faltas"] > 5, "resultado"] = "REPROVADO(A)"
# df.loc[df["media_notas"] >= 7, "resultado"] = "APROVADO(A)"

#maior número de faltas
mais_faltas = df["faltas"].max()

print('A maior quantidade de faltas foi: ' + str(mais_faltas))


#descobrindo a maior media
maior_media_notas = df["media_notas"].max()

print('A maior média foi: ' + str(maior_media_notas))


#média geral das notas dos alunos;
media_TodasNotas = df["media_notas"].median()

print("A media geral de todas as notas foi: " + str(media_TodasNotas))


print(df.head());