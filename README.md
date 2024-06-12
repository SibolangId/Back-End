## Inisialisasi dan Konfigurasi Git

1. **Setel email pengguna GitHub:**
    ```sh
    git config --global user.email "email_yang_digunakan_di_github"
    ```

2. **Inisialisasi repository Git:**
    ```sh
    git init
    ```
    
3. **Berpindah antar branch:**
    ```sh
    git branch -M master / git branch -M main
    ```
    nb: ganti master dengan branch yang di inginkan
    
4. **Inisialisasi repository Git:**
    ```sh
    git add .
    ```

5. **Tambahkan remote repository:**
    ```sh
    git remote add origin https://github.com/SibolangId/Back-End.git
    ```

6. **Lakukan commit dengan pesan:**
    ```sh
    git commit -m "Perubahan ke-1 seterusnya"
    ```

7. **Push ke branch utama (main atau master):**
    - Jika menggunakan branch `main`:
        ```sh
        git push -u origin main
        ```
    - Jika menggunakan branch `master`:
        ```sh
        git push origin -u master
        ```
8. **Mengambil file dari github**
    ```sh
    git pull
    ```
