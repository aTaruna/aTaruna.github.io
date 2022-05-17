<script>
    function tampilData() {
        var nama=document.getElementById("nama").value;
        var umur = document.getElementById("umur").value;
        var jeniskelamin =document.querySelector("input[name=jeniskelamin]:checked").value;
        var nilai=document.getElementById("nilai").value;
        var drmn=document.getElementByName("drmn");
        var dftrdrmn=''
        for(var drmn2 o drmn){
            if(drmn2.checked){
                dftrdrmn += ','+drmn2.value
            }
        }
        dftrdrmn = dftrdrmn.substring(1)

        alert("Nama : " + nama
        + "\nUmur : " + umur
        +"\nJeniskelamin : " + jeniskelamin
        +"\ndrmn : "+ dftrdrmn);
    }
</script>