def sistem_pakar():
    print("Sistem Pakar Diagnosis Kerusakan Motor Matic")
    print("=" * 50)
    print("Jawab dengan 'y' untuk gejala yang Anda alami, atau tekan Enter jika tidak.")
    
    # Input gejala
    gejala1 = input("1. Tarikan motor lemah atau lambat (y/n): ").lower() == 'y'
    gejala2 = input("2. Mesin cepat panas (overheating) (y/n): ").lower() == 'y'
    gejala3 = input("3. Suara berisik dari CVT (y/n): ").lower() == 'y'
    gejala4 = input("4. Mesin sulit hidup (y/n): ").lower() == 'y'
    gejala5 = input("5. Getaran berlebihan pada kecepatan rendah (y/n): ").lower() == 'y'

    # Proses inferensi berdasarkan gejala
    hasil_diagnosa = []

    # Rule 1
    if gejala1 and gejala3:
        hasil_diagnosa.append("Kerusakan kemungkinan pada Roller CVT atau belt CVT. Solusi: Periksa dan ganti roller atau belt CVT.")
    
    # Rule 2
    if gejala2:
        hasil_diagnosa.append("Kemungkinan sistem pendingin atau radiator bermasalah. Solusi: Bersihkan radiator dan pastikan cairan pendingin mencukupi.")
    
    # Rule 3
    if gejala4:
        hasil_diagnosa.append("Masalah pada sistem pembakaran. Kemungkinan busi kotor atau bahan bakar tidak sesuai. Solusi: Bersihkan/ganti busi.")
    
    # Rule 4
    if gejala5:
        hasil_diagnosa.append("Kemungkinan ban tidak seimbang atau masalah suspensi. Solusi: Lakukan balancing ban atau servis suspensi.")
    
    # Hasil akhir
    if hasil_diagnosa:
        print("\nHasil Diagnosa:")
        for i, diagnosa in enumerate(hasil_diagnosa, start=1):
            print(f"{i}. {diagnosa}")
    else:
        print("\nTidak ada diagnosa yang sesuai dengan gejala yang Anda pilih.")
    
    print("=" * 50)
    print("Terima kasih telah menggunakan sistem pakar ini!")

# Menjalankan sistem pakar
if __name__ == "__main__":
    sistem_pakar()
