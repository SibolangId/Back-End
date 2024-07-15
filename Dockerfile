# Gunakan image node resmi sebagai base image
FROM node:16

# Set work directory
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh kode sumber ke container
COPY . .

# Ekspos port aplikasi
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["npm", "run", "start"]
