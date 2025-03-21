# Usar uma imagem do Node.js
FROM node:16

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e instalar as dependências
COPY package.json .
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Expor a porta 25000
EXPOSE 25000

# Iniciar o servidor
CMD ["node", "server.js"]