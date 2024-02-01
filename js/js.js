var button = document.getElementById('submit');

button.addEventListener('click',alertOrder)

function alertOrder(){
    var nama = document.getElementById('name');
    var email = document.getElementById('email');
    var select = document.getElementById('select');
    if(nama.value == ""){
        alert("Pastikan semua di isi yaa :)")
    } else if(email.value == ""){
        alert("Pastikan semua di isi yaa :)")
    }else if(select.value == ""){
        alert("Pastikan semua di isi yaa :)")
    }else{
        alert("Terima kasih "  + nama.value + "," + select.value +" pesanan anda akan segera sampai");
    }
    

    nama.value="";
    select.selectedIndex=0;
    email.value="";
}