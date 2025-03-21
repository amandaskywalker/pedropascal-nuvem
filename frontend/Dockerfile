# Usar uma imagem leve do Nginx
FROM nginx:alpine

# Copiar os arquivos da aplicação para o diretório do Nginx
COPY . /usr/share/nginx/html

# Expor a porta 8080
EXPOSE 8080

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]