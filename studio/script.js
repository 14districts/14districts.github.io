$(document).ready(function () {
    const dynamicInputs = document.querySelectorAll('input.input-color-picker');

    const handleThemeUpdate = (cssVars) => {
        const root = document.querySelector(':root');
        const keys = Object.keys(cssVars);
        keys.forEach(key => {
            root.style.setProperty(key, cssVars[key]);
        });
    }

    dynamicInputs.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName = `--${e.target.getAttribute('data-id')}`;
            handleThemeUpdate({
            [cssPropName]: e.target.value
            });
        });
    });


    const nameEn = document.getElementById('name-en');
    nameEn.addEventListener('change', (e) => {
        document.querySelectorAll('.name-en').forEach(item =>{
            item.innerHTML = e.target.value
        });
    });

    const nameMl = document.getElementById('name-ml');
    nameMl.addEventListener('change', (e) => {
        document.querySelectorAll('.name-ml').forEach(item =>{
            item.innerHTML = e.target.value
        });
    });

    const descEn = document.getElementById('desc-en');
    descEn.addEventListener('change', (e) => {
        document.querySelectorAll('.desc-en').forEach(item =>{
            item.innerHTML = e.target.value
        });
    });
    
    const descMl = document.getElementById('desc-ml');
    descMl.addEventListener('change', (e) => {
        document.querySelectorAll('.desc-ml').forEach(item =>{
            item.innerHTML = e.target.value
        });
    });

});

function bgUpload(event) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.addEventListener("load", function(e) {
        $(".square").css("background-image", "linear-gradient(180deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.00) 20%, rgba(0,0,0,0.00) 61%, rgba(0,0,0,0.60) 100%), url(" +  e.target["result"] + ")");
        $(".long").css("background-image", "linear-gradient(180deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.00) 13%, rgba(0,0,0,0.00) 74%, rgba(0,0,0,0.60) 100%), url(" +  e.target["result"] + ")");
    });
}

function download() {
    document.querySelectorAll(".poster").forEach(item => {
        html2canvas(item, {
            allowTaint: true,
            useCORS: true}).then(function(canvas) {
            var a = document.createElement('a');
            // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
            a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            a.download = `${document.getElementById('name-en').value}-${item.getAttribute('id')}.png`;
            a.click();
        });
    });  
}