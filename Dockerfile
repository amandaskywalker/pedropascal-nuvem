# ---- Backend (Node.js) ----
    FROM node:20-alpine as backend

    WORKDIR /app/backend
    COPY backend/package.json .
    RUN npm install
    COPY backend/ .
    EXPOSE 25000
    
    # ---- Frontend (Nginx para arquivos estáticos) ----
    FROM nginx:alpine as frontend
    
    COPY frontend/ /usr/share/nginx/html
    
    # ---- Imagem Final ----
    FROM nginx:alpine
    
    # Copia o frontend
    COPY --from=frontend /usr/share/nginx/html /usr/share/nginx/html
    
    # Copia e configura o backend
    COPY --from=backend /app/backend /app/backend
    
    # Instala Node.js na imagem final (para rodar o backend)
    RUN apk add --update nodejs npm
    
    # Configura o Nginx para servir o frontend e proxy para o backend
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # Inicia Nginx e o backend juntos
    CMD sh -c "nginx && cd /app/backend && node server.js"