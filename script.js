function inferensi() {
    let hasilContainer = document.getElementById("hasil-container");
    let hasil = document.getElementById("hasil");
    let diagnosa = [];
    let subtotal = 0;
    
    const card = document.querySelector('.card');
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    let cost = {
        "gejala1": "Rp 500.000 (Roller CVT),Rp 600.000 (Belt CVT),Rp 500.000 (Kampas Kopling)",
        "gejala2": "Rp 600.000 (Gasket Kepala Silinder),Rp 1.000.000 (Radiator atau Sistem Pendingin),Rp.150.000 (Cairan Pendingin)",
        "gejala3": "Rp 700.000 (Pulley CVT), Rp 600.000 (Belt CVT)",
        "gejala4": "Rp 150.000 (Busi),Rp 300.000 (Injektor Injeksi),Rp 600.000 (Karburator)",
        "gejala5": "Rp 600.000 per roda (Ban), Rp 1.000.000 per sisi (Suspensi)",
        "gejala6": "Rp 550.000 (Ring Piston),Rp 800.000 (Dinding Silinder),Rp 450.000 (Seal Klep)",
        "gejala7": "Rp 600.000 (Sistem Injeksi),Rp 150.000 (Filter Udara)",
        "gejala8": "Rp 250.000 (Bohlam LED),Rp 350.000 (Perbaikan Kelistrikan)",
        "gejala9": "Rp 400.000 (Kampas Rem),Rp 150.000 (Minyak Rem)",
        "gejala10": "Rp 500.000 (Kampas Kopling CVT),Rp 600.000 (Belt CVT)",
        "gejala11": "Rp 600.000 (Kampas Ganda),Rp 700.000 (Pulley CVT)"
    };
    const harga = {
        "gejala1": [
            { name: "Roller CVT", price: 500000 },
            { name: "Belt CVT", price: 600000 },
            { name: "Kampas Kopling", price: 500000 }
        ],
        "gejala2": [
            { name: "Gasket Kepala Silinder", price: 600000 },
            { name: "Radiator", price: 1000000 },
            { name: "Cairan Pendingin", price: 150000 }
        ],
        "gejala3": [
            { name: "Pulley CVT", price: 700000 },
            { name: "Belt CVT", price: 600000 }
        ],
        "gejala4": [
            { name: "Busi", price: 150000 },
            { name: "Injektor Injeksi", price: 300000 },
            { name: "Karburator", price: 600000 }
        ],
        "gejala5": [
            { name: "Ban", price: 600000 },
            { name: "Suspensi", price: 1000000 }
        ],
        "gejala6": [
            { name: "Ring Piston", price: 550000 },
            { name: "Dinding Silinder", price: 800000 },
            { name: "Seal Klep", price: 450000 }
        ],
        "gejala7": [
            { name: "Sistem Injeksi", price: 600000 },
            { name: "Filter Udara", price: 150000 }
        ],
        "gejala8": [
            { name: "Bohlam LED", price: 250000 },
            { name: "Perbaikan Kelistrikan", price: 350000 }
        ],
        "gejala9": [
            { name: "Kampas Rem", price: 400000 },
            { name: "Minyak Rem", price: 150000 }
        ],
        "gejala10": [
            { name: "Kampas Kopling CVT", price: 500000 },
            { name : "Belt CVT" , price: 600000 }
        ],
        "gejala11": [
            { name: "Kampas Ganda", price: 600000 },
            { name : "Pulley CVT", price : 700000}
        ]
    };

    if (document.getElementById("gejala1").checked) {
        diagnosa.push("Roller CVT aus, CVT yang sudah kendur, atau kampas ganda yang sudah menipis.<br>Estimasi Biaya : " + cost["gejala1"] );
        harga["gejala1"].forEach(item => subtotal += item.price);
    }
    if (document.getElementById("gejala2").checked) {
        diagnosa.push("Masalah pada sistem pendingin atau radiator yang tidak berfungsi dengan baik.<br>Estimasi Biaya : " + cost["gejala2"]);
        harga["gejala2"].forEach(item => subtotal += item.price);
    }
    if (document.getElementById("gejala3").checked) {
        diagnosa.push("Kotoran atau Kerusakan Pada Komponen CVT seperti pulley atau belt.<br>Estimasi Biaya : " + cost["gejala3"]);
        harga["gejala3"].forEach(item => subtotal += item.price);
    }
    if (document.getElementById("gejala4").checked) {
        diagnosa.push("Masalah pada sistem pembakaran, busi kotor, atau bahan bakar yang tidak sesuai.<br>Estimasi Biaya : " + cost["gejala4"]);
        harga["gejala4"].forEach(item => subtotal += item.price);
    }
    if (document.getElementById("gejala5").checked) {
        diagnosa.push("Ban yang tidak seimbang atau masalah pada suspensi.<br>Estimasi Biaya : " + cost["gejala5"]);
        harga["gejala5"].forEach(item => subtotal += item.price);
    }
    if (document.getElementById("gejala6").checked) {
        diagnosa.push("Ring Piston aus atau Rusak, Dinding Silinder Lecet atau Aus.<br>Estimasi Biaya : " + cost["gejala6"]);
        harga["gejala6"].forEach(item => subtotal += item.price);
    }
    if (document.getElementById("gejala7").checked) {
        diagnosa.push("Sistem injeksi atau karburator yang kotor, atau bahan bakar yang tidak sesuai.<br>Estimasi Biaya : " + cost["gejala7"]);
        harga["gejala7"].forEach(item => subtotal += item.price);
    }
    if (document.getElementById("gejala8").checked) {
        diagnosa.push("Masalah pada kabel listrik, terminal, atau sistem kelistrikan lainnya.<br>Estimasi Biaya : " + cost["gejala8"]);
        harga["gejala8"].forEach(item => subtotal += item.price);
    }
    if (document.getElementById("gejala9").checked) {
        diagnosa.push("Kebocoran pada sistem rem atau rem yang aus.<br>Estimasi Biaya : " + cost["gejala9"]);
        harga["gejala9"].forEach(item => subtotal += item.price);
    }
    if (document.getElementById("gejala10").checked) {
        diagnosa.push("Kampas ganda CVT yang aus atau kotoran di dalam CVT.<br>Estimasi Biaya : " + cost["gejala10"]);
        harga["gejala10"].forEach(item => subtotal += item.price);
    }
    if (document.getElementById("gejala11").checked) {
        diagnosa.push("Kotoran pada kampas ganda atau kerusakan pada CVT.<br>Estimasi Biaya : " + cost["gejala11"]);
        harga["gejala11"].forEach(item => subtotal += item.price);
    }

    // Check if no symptoms were selected
    if (diagnosa.length === 0) {
        hasil.className = "alert alert-danger";
        hasil.innerHTML = "Tidak ada gejala yang dipilih. Silahkan pilih gejala untuk mendapatkan diagnosa.";
    } else {
        hasil.className = "alert alert-primary";
        hasil.innerHTML = diagnosa.join("<br>") + "<br><br><strong>Subtotal: </strong> Rp " + subtotal.toLocaleString();
    }
    hasilContainer.style.display = "block";
}
