# ==========================================
# Etapa 1: Construcción (Builder)
# ==========================================
FROM node:18-alpine AS builder

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de definición de dependencias
COPY package.json package-lock.json* ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código fuente del proyecto
COPY . .

# Construir la aplicación (Vite genera la carpeta "dist")
RUN npm run build

# ==========================================
# Etapa 2: Servidor Web (Nginx)
# ==========================================
FROM nginx:alpine

# Copiar la configuración personalizada de Nginx para manejar la SPA (Single Page Application)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos desde la etapa anterior al directorio que Nginx sirve
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 80 para el contenedor
EXPOSE 80

# El comando por defecto de la imagen nginx:alpine ya inicia Nginx, 
# pero podemos declararlo explícitamente si se desea:
CMD ["nginx", "-g", "daemon off;"]
