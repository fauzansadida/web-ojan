function pesanPaket(paket){
    document.getElementById('paket').value=paket;
    document.getElementById('orderForm').scrollIntoView({behavior: 'smooth'});

}

function lihatDetail(paket){
    let modal= document.getElementById('modal');
    let modalTittle= document.getElementById('modal-tittle');
    let modalBody= document.getElementById('modal-body');

    if(paket== 'Paket A'){
        modalTittle.textContent='Detail Paket A';
        modalBody.textContent= 'Isi Paket A(Somethinc): Facial wash, moisturizer, serum (Rp   356.900)';

    }else if(paket=='Paket B'){
        modalTittle.textContent='Detail Paket B';
        modalBody.textContent= 'Isi Paket B(Harlette): Micellar water, Facial wash, rose water (Rp  298.000)';

    }else if(paket=='Paket C'){
        modalTittle.textContent='Detail Paket C';
        modalBody.textContent= 'Isi Paket C(YOU): Facial wash, Acne-serum, Acnespot(Rp   224.000)';

    }
    modal.style.display= 'block';
}

function tutupModal(){
    document.getElementById('modal').style.display='none';
}

window.onclick= function(event){
    let modal=document.getElementById('modal');
    if(event.target==modal){
        modal.style.display='none';
    }
}