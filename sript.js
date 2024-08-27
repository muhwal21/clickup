document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const notificationDiv = document.getElementById('notification');

    if (file && file.type === "application/pdf") {
        const formData = new FormData();
        formData.append('attachment', file);

        fetch('https://api.clickup.com/api/v2/task/901801194151/attachment', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer HPGW7DHDG506UVHHLTNKT19FSSLUK5V6PK40KX58UGLLBB1H6DNKVNNJI6N8HXQ6'
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
