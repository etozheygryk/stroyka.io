// Функция для отображения всех записей
function displayEntries() {
    const entriesList = document.getElementById('entriesList');
    entriesList.innerHTML = '';

    // Сортируем записи по дате (новые сверху)
    const sortedEntries = [...diaryEntries].sort((a, b) => b.id - a.id);

    sortedEntries.forEach(entry => {
        const entryElement = document.createElement('article');
        entryElement.className = 'entry';
        entryElement.innerHTML = createEntryHTML(entry);
        entriesList.appendChild(entryElement);
    });
}

// Создание HTML для одной записи
function createEntryHTML(entry) {
    let imagesHTML = '';
    
    if (entry.images && entry.images.length > 0) {
        imagesHTML = '<div class="entry-images">';
        entry.images.forEach(image => {
            imagesHTML += `
                <div class="image-container">
                    <img src="${image}" alt="Скриншот из Minecraft" 
                         onerror="this.style.display='none'">
                    <div class="image-caption">Скриншот игры</div>
                </div>
            `;
        });
        imagesHTML += '</div>';
    }

    return `
        <div class="entry-header">
            <h2>${entry.title}</h2>
            <span class="entry-date">📅 ${entry.date}</span>
        </div>
        <div class="entry-content">
            ${entry.content.replace(/\n/g, '<br>')}
        </div>
        ${imagesHTML}
    `;
}

// Загружаем записи при старте
document.addEventListener('DOMContentLoaded', displayEntries);