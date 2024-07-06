function loadFile() {
    const fileInput = document.getElementById('carrega');
    const textArea = document.getElementById('text-area');
    if (fileInput.files.length != 0) {
        const file = fileInput.files[0];

        const reader = new FileReader();

        reader.onload = () => {
            const texto = reader.result;
            textArea.value = texto;

            // Enviamos una solicitud HTTP GET al archivo en el servidor

            fetch('./' + file.name)
                .then(response => response.text())
                .then(textoServer => {
                    console.log(textoServer);
                })
                .catch(error => console.error(error));
        };

        reader.readAsText(file); // ¡Agregamos esta línea para leer el archivo como texto!
    }
}

const fileInput = document.getElementById('carrega');
fileInput.addEventListener('change', loadFile);
