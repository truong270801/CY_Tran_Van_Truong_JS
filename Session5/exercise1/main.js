const contenElement = document.querySelector('.container_content');
const inputElement = document.getElementById('fileInput');

function displayContent() {
    if (contenElement.children.length === 0) {
        const p = document.createElement('p');
        p.innerHTML = "Drag and drop file here to upload!";
        contenElement.appendChild(p);
    }
}

displayContent();

function handleFileUpload(file) {
    if (file) {
        const fileUrl = URL.createObjectURL(file);
        const divNew = document.createElement('div');
        divNew.classList.add('container__item');

        divNew.innerHTML = `
            <img src="${fileUrl}" alt="${file.name}">
            <p>${file.name}</p>
            <div class="delete-btn">X</div>
        `;

        divNew.querySelector('.delete-btn').addEventListener('click', function () {
            divNew.remove();
            if (contenElement.children.length === 0) {
                displayContent();
            }
        });

        contenElement.appendChild(divNew);
        
        const existingMessage = contenElement.querySelector('p');
        if (existingMessage) {
            existingMessage.remove();
        }
    }
}

inputElement.addEventListener('change', function (event) {
    const file = event.target.files[0];
    handleFileUpload(file);
});

contenElement.addEventListener('dragover', function (event) {
    event.preventDefault();  
    contenElement.classList.add('dragging');
});

contenElement.addEventListener('drop', function (event) {
    event.preventDefault();
    contenElement.classList.remove('dragging');
    const file = event.dataTransfer.files[0];
    handleFileUpload(file);
});
