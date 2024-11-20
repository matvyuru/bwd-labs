const dialog = document.getElementById('taskDialog');

function closeDialog() {
    if (dialog) {
        dialog.close();
    }
}

if (document.getElementById('closeDialog')) {
    document.getElementById('closeDialog').addEventListener('click', closeDialog);
}

document.addEventListener('click', (event) => {
    if (event.target === dialog) {
        closeDialog();
    }
});

// Добавление закрытия диалога по нажатию Escape
document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        closeDialog();
    }
});

// Обработка флажка "В работе"
document.querySelectorAll('.inProgress-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const taskCard = checkbox.closest('.task-card');

        if (checkbox.checked) {
            taskCard.classList.add('inProgress'); // Добавляем класс для желтого цвета
        } else {
            taskCard.classList.remove('inProgress'); // Убираем желтый цвет
        }
    });
});

// Обработка флажка "Выполнено"
document.querySelectorAll('.completed-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const taskCard = checkbox.closest('.task-card');
        const inProgressCheckbox = taskCard.querySelector('.inProgress-checkbox');

        if (checkbox.checked) {
            taskCard.classList.add('completed'); // Добавляем класс для цвета
            inProgressCheckbox.disabled = true;  // Блокируем флажок "В работе"
            inProgressCheckbox.checked = false;   // Снимаем отметку
        } else {
            taskCard.classList.remove('completed'); // Убираем класс для цвета
            inProgressCheckbox.disabled = false; // Разблокируем флажок "В работе"
        }
    });
});

function toggleMenu() {
    document.querySelector('.nav').classList.toggle('active');
    const sidebar = document.getElementById('sidebar'); // Получаем элементы сайдбара
    const burger = document.getElementById('burger'); // Получаем бургер-меню

    // Переключаем классы для сайдбара и бургер-меню
    sidebar.classList.toggle('active');
    burger.classList.toggle('active');

    // Предотвращаем прокрутку страницы, когда сайдбар открыт
    document.body.classList.toggle('no-scroll');
}

