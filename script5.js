//List Produk Awal
let produkList = [
    { id: 1, nama: "Laptop", harga: 10000000 },
    { id: 2, nama: "Mouse", harga: 150000 },
    { id: 3, nama: "Keyboard", harga: 300000 },
    { id: 4, nama: "Monitor", harga: 2000000 },
    { id: 5, nama: "Headset", harga: 500000 }
];

//Menampilkan Produk
function tampilkanProduk() {
    const listProduk = document.getElementById("listProduk");
    listProduk.innerHTML = "";

    produkList.forEach(({ id, nama, harga }) => {
        const li = document.createElement("li");
        li.innerHTML = `<span><strong>${id}</strong> - ${nama} - Rp${harga.toLocaleString()}</span> 
        <button class="delete-btn" onclick="hapusProduk(${id})">Hapus</button>`;
        listProduk.appendChild(li);
    });
}
//Menambahkan Produk dengan Spread Operator
function tambahProduk() {
    const namaProduk = document.getElementById("namaProduk").value;
    const hargaProduk = document.getElementById("hargaProduk").value;

    if (namaProduk === "" || hargaProduk === "") {
        alert("Nama dan harga produk tidak boleh kosong!");
        return;
    }

    const idBaru = produkList.length > 0 ? produkList[produkList.length - 1].id + 1 : 1;
    produkList = [...produkList, { id: idBaru, nama: namaProduk, harga: Number(hargaProduk) }];
    tampilkanProduk();
    
    // Bersihkan input setelah tambah
    document.getElementById("namaProduk").value = "";
    document.getElementById("hargaProduk").value = "";
}
//Menghapus Produk Menggunakan Filter
function hapusProduk(idProduk) {
    produkList = produkList.filter(({ id }) => id !== idProduk);
    tampilkanProduk();
}

// Pastikan script berjalan setelah halaman selesai dimuat
document.addEventListener("DOMContentLoaded", tampilkanProduk);
