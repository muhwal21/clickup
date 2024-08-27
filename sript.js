document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const notificationDiv = document.getElementById('notification');

    if (file && file.type === "application/pdf") {
        const formData = new FormData();
        formData.append('attachment', file);

        fetch('https://api.clickup.com/api/v2/task/86eq4xq7t/attachment', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 593EKAFKTMNLGNRRNBR181TC701WCKQ5W4YZ81DU97HP6TTXYASITHDTL164WTNR'
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            notificationDiv.innerHTML = '<p style="color: green;">File berhasil diunggah!</p>';
            console.log('File berhasil diunggah:', data);
        })
        .catch(error => {
            notificationDiv.innerHTML = '<p style="color: red;">Gagal mengunggah file. Silakan coba lagi.</p>';
            console.error('Gagal mengunggah file:', error);
        });
    } else {
        notificationDiv.innerHTML = '<p style="color: red;">Hanya file PDF yang diizinkan.</p>';
    }
});
