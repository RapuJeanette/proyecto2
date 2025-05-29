// Datos de muestra para las tareas - expandidos para mostrar el scroll
const tasksData = [
    {
        id: 1,
        name: "Llamar",
        prospect: "Juan Perez",
        dueDate: "2024-05-15",
        priority: "alta",
        status: "atrasada",
        completed: false,
        completedDate: null
    },
    {
        id: 2,
        name: "Enviar alerta de suscripción",
        prospect: "Carlos Ballivián",
        dueDate: "2024-05-15",
        priority: "alta",
        status: "atrasada",
        completed: false,
        completedDate: null
    },
    {
        id: 3,
        name: "Presentar demo de plataforma",
        prospect: "Leidy Gomez",
        dueDate: "2024-05-16",
        priority: "alta",
        status: "pendiente",
        completed: false,
        completedDate: null
    },
    {
        id: 4,
        name: "Enviar Propuesta",
        prospect: "María Cortez",
        dueDate: "2024-05-16",
        priority: "media",
        status: "pendiente",
        completed: false,
        completedDate: null
    },
    {
        id: 5,
        name: "Enviar catálogo de planes",
        prospect: "Laura Camacho",
        dueDate: "2024-05-17",
        priority: "baja",
        status: "pendiente",
        completed: false,
        completedDate: null
    },
    {
        id: 6,
        name: "Revisar propuesta comercial",
        prospect: "Ana García",
        dueDate: "2024-12-03",
        priority: "alta",
        status: "pendiente",
        completed: false,
        completedDate: null
    },
    {
        id: 7,
        name: "Seguimiento post-venta",
        prospect: "Roberto Silva",
        dueDate: "2024-12-03",
        priority: "media",
        status: "pendiente",
        completed: false,
        completedDate: null
    },
    {
        id: 8,
        name: "Actualizar datos de contacto",
        prospect: "Laura Cortez",
        dueDate: "2024-05-12",
        priority: "baja",
        status: "completada",
        completed: true,
        completedDate: "2024-05-12"
    },
    {
        id: 9,
        name: "Enviar cotización actualizada",
        prospect: "Miguel Guerrero",
        dueDate: "2024-05-13",
        priority: "alta",
        status: "completada",
        completed: true,
        completedDate: "2024-05-13"
    },
    {
        id: 10,
        name: "Coordinar instalación",
        prospect: "Pedro Dominguez",
        dueDate: "2024-05-14",
        priority: "baja",
        status: "completada",
        completed: true,
        completedDate: "2024-05-14"
    },
    {
        id: 11,
        name: "Presentación ejecutiva",
        prospect: "Carmen López",
        dueDate: "2024-11-28",
        priority: "alta",
        status: "completada",
        completed: true,
        completedDate: "2024-11-28"
    },
    {
        id: 12,
        name: "Capacitación equipo ventas",
        prospect: "Empresa Desarrollo SA",
        dueDate: "2024-12-05",
        priority: "media",
        status: "pendiente",
        completed: false,
        completedDate: null
    },
    {
        id: 13,
        name: "Reunión estratégica Q4",
        prospect: "Directorio General",
        dueDate: "2024-12-10",
        priority: "alta",
        status: "pendiente",
        completed: false,
        completedDate: null
    },
    {
        id: 14,
        name: "Implementar nueva funcionalidad",
        prospect: "TechCorp International",
        dueDate: "2024-12-15",
        priority: "alta",
        status: "pendiente",
        completed: false,
        completedDate: null
    },
    {
        id: 15,
        name: "Auditoría de procesos",
        prospect: "Consultoría Plus",
        dueDate: "2024-12-20",
        priority: "media",
        status: "pendiente",
        completed: false,
        completedDate: null
    },
    {
        id: 16,
        name: "Renovación contrato anual",
        prospect: "Innovaciones Modernas",
        dueDate: "2024-12-25",
        priority: "alta",
        status: "pendiente",
        completed: false,
        completedDate: null
    },
    {
        id: 17,
        name: "Evaluación de satisfacción",
        prospect: "Cliente Premium Ltd",
        dueDate: "2024-12-30",
        priority: "baja",
        status: "pendiente",
        completed: false,
        completedDate: null
    },
    {
        id: 18,
        name: "Planificación 2025",
        prospect: "Equipo Interno",
        dueDate: "2025-01-05",
        priority: "alta",
        status: "pendiente",
        completed: false,
        completedDate: null
    },
    {
        id: 19,
        name: "Migración de datos",
        prospect: "Sistemas Avanzados",
        dueDate: "2025-01-10",
        priority: "media",
        status: "pendiente",
        completed: false,
        completedDate: null
    },
    {
        id: 20,
        name: "Configuración servidor backup",
        prospect: "IT Solutions Corp",
        dueDate: "2025-01-15",
        priority: "baja",
        status: "pendiente",
        completed: false,
        completedDate: null
    }
];

// Variables globales
let currentFilter = 'hoy';
let filteredTasks = [];
let currentSort = { field: null, order: 'asc' };
let activeFilters = { prioridad: null, estado: null };

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    filterTasks();
    renderRecentTasks();
    initializeCharts();
}

function setupEventListeners() {
    // Configurar tabs de filtro
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover clase active de todos los tabs
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            
            // Agregar clase active al tab clickeado
            this.classList.add('active');
            
            // Actualizar filtro actual
            currentFilter = this.dataset.filter;
            
            // Filtrar tareas
            filterTasks();
        });
    });

    // Configurar input de búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterTasks();
        });
    }

    // Configurar dropdown de filtros
    const filterButton = document.getElementById('filterButton');
    const filterDropdown = document.getElementById('filterDropdown');
    
    if (filterButton && filterDropdown) {
        filterButton.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleFilterDropdown();
        });

        // Cerrar dropdown al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!filterDropdown.contains(e.target) && !filterButton.contains(e.target)) {
                closeFilterDropdown();
            }
        });
    }

    // Configurar botones de navegación
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            // Remover active de todos los elementos de navegación
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });
            
            // Agregar active al elemento clickeado
            this.classList.add('active');
        });
    });
}

// Funciones para el dropdown de filtros
function toggleFilterDropdown() {
    const dropdown = document.getElementById('filterDropdown');
    const button = document.getElementById('filterButton');
    
    if (dropdown.classList.contains('show')) {
        closeFilterDropdown();
    } else {
        dropdown.classList.add('show');
        button.classList.add('active');
    }
}

function closeFilterDropdown() {
    const dropdown = document.getElementById('filterDropdown');
    const button = document.getElementById('filterButton');
    
    dropdown.classList.remove('show');
    button.classList.remove('active');
    
    // Cerrar todos los submenús
    document.querySelectorAll('.filter-submenu').forEach(submenu => {
        submenu.classList.remove('show');
    });
}

function toggleSortOrder(field) {
    if (currentSort.field === field) {
        currentSort.order = currentSort.order === 'asc' ? 'desc' : 'asc';
    } else {
        currentSort.field = field;
        currentSort.order = 'asc';
    }
    
    updateSortIcons();
    applySorting();
    closeFilterDropdown();
}

function updateSortIcons() {
    // Remover clases activas de todos los filtros
    document.querySelectorAll('.filter-option').forEach(option => {
        option.classList.remove('active', 'desc');
    });
    
    // Agregar clase activa al filtro actual
    const activeOption = document.querySelector(`[data-filter="${currentSort.field}"]`);
    if (activeOption) {
        activeOption.classList.add('active');
        if (currentSort.order === 'desc') {
            activeOption.classList.add('desc');
        }
    }
}

function setAdvancedFilter(type) {
    const submenu = document.getElementById(type === 'prioridad' ? 'prioritySubmenu' : 'statusSubmenu');
    
    // Toggle submenu
    submenu.classList.toggle('show');
    
    // Cerrar otros submenús
    document.querySelectorAll('.filter-submenu').forEach(menu => {
        if (menu !== submenu) {
            menu.classList.remove('show');
        }
    });
}

function filterByAdvanced(type, value) {
    activeFilters[type] = activeFilters[type] === value ? null : value;
    
    updateAdvancedFilterUI();
    filterTasks();
    closeFilterDropdown();
}

function updateAdvancedFilterUI() {
    // Actualizar indicadores de filtros activos
    document.querySelectorAll('.filter-subitem').forEach(item => {
        item.classList.remove('active');
    });
    
    // Marcar filtros activos
    if (activeFilters.prioridad) {
        const priorityItem = document.querySelector(`#prioritySubmenu .filter-subitem:nth-child(${getPriorityIndex(activeFilters.prioridad)})`);
        if (priorityItem) priorityItem.classList.add('active');
    }
    
    if (activeFilters.estado) {
        const statusItem = document.querySelector(`#statusSubmenu .filter-subitem:nth-child(${getStatusIndex(activeFilters.estado)})`);
        if (statusItem) statusItem.classList.add('active');
    }
    
    renderFilterIndicators();
}

function getPriorityIndex(priority) {
    const priorities = ['alta', 'media', 'baja'];
    return priorities.indexOf(priority) + 1;
}

function getStatusIndex(status) {
    const statuses = ['pendiente', 'atrasada', 'completada'];
    return statuses.indexOf(status) + 1;
}

function renderFilterIndicators() {
    // Buscar o crear contenedor de indicadores
    let indicatorsContainer = document.querySelector('.filter-indicators');
    if (!indicatorsContainer) {
        indicatorsContainer = document.createElement('div');
        indicatorsContainer.className = 'filter-indicators';
        
        const searchSection = document.querySelector('.search-filter-section');
        searchSection.parentNode.insertBefore(indicatorsContainer, searchSection.nextSibling);
    }
    
    // Limpiar indicadores existentes
    indicatorsContainer.innerHTML = '';
    
    // Agregar indicadores de filtros activos
    const indicators = [];
    
    if (activeFilters.prioridad) {
        indicators.push({
            label: `Prioridad: ${capitalizeFirst(activeFilters.prioridad)}`,
            type: 'prioridad'
        });
    }
    
    if (activeFilters.estado) {
        indicators.push({
            label: `Estado: ${capitalizeFirst(activeFilters.estado)}`,
            type: 'estado'
        });
    }
    
    if (currentSort.field) {
        indicators.push({
            label: `Ordenado por: ${capitalizeFirst(currentSort.field)} ${currentSort.order === 'asc' ? '↑' : '↓'}`,
            type: 'sort'
        });
    }
    
    indicators.forEach(indicator => {
        const indicatorEl = document.createElement('div');
        indicatorEl.className = 'filter-indicator';
        indicatorEl.innerHTML = `
            <span>${indicator.label}</span>
            <span class="remove-filter" onclick="removeFilter('${indicator.type}')">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
        `;
        indicatorsContainer.appendChild(indicatorEl);
    });
    
    // Mostrar/ocultar contenedor según si hay indicadores
    indicatorsContainer.style.display = indicators.length > 0 ? 'flex' : 'none';
}

function removeFilter(type) {
    if (type === 'prioridad' || type === 'estado') {
        activeFilters[type] = null;
    } else if (type === 'sort') {
        currentSort = { field: null, order: 'asc' };
    }
    
    updateAdvancedFilterUI();
    updateSortIcons();
    filterTasks();
}

function clearAdvancedFilters() {
    activeFilters = { prioridad: null, estado: null };
    currentSort = { field: null, order: 'asc' };
    
    updateAdvancedFilterUI();
    updateSortIcons();
    filterTasks();
    closeFilterDropdown();
}

function applySorting() {
    if (!currentSort.field) return;
    
    filteredTasks.sort((a, b) => {
        let valueA, valueB;
        
        switch (currentSort.field) {
            case 'fecha':
                valueA = new Date(a.dueDate);
                valueB = new Date(b.dueDate);
                break;
            case 'prospecto':
                valueA = a.prospect.toLowerCase();
                valueB = b.prospect.toLowerCase();
                break;
            default:
                return 0;
        }
        
        if (valueA < valueB) return currentSort.order === 'asc' ? -1 : 1;
        if (valueA > valueB) return currentSort.order === 'asc' ? 1 : -1;
        return 0;
    });
    
    renderTasks();
}

function filterTasks() {
    const searchTerm = document.getElementById('searchInput') ? 
        document.getElementById('searchInput').value.toLowerCase() : '';
    
    const today = new Date();
    const todayStr = formatDateForComparison(today);
    
    // Obtener rangos de fechas
    const { startOfWeek, endOfWeek, startOfNextWeek, endOfNextWeek } = getDateRanges(today);

    // Filtrar tareas
    filteredTasks = tasksData.filter(task => {
        // Filtro de búsqueda
        const matchesSearch = !searchTerm || 
            task.name.toLowerCase().includes(searchTerm) ||
            task.prospect.toLowerCase().includes(searchTerm);

        if (!matchesSearch) return false;

        // Filtro de fecha (tabs principales)
        const taskDate = new Date(task.dueDate);
        let matchesDateFilter = true;
        
        switch(currentFilter) {
            case 'hoy':
                matchesDateFilter = task.dueDate === todayStr;
                break;
            case 'esta-semana':
                matchesDateFilter = taskDate >= startOfWeek && taskDate <= endOfWeek;
                break;
            case 'proxima-semana':
                matchesDateFilter = taskDate >= startOfNextWeek && taskDate <= endOfNextWeek;
                break;
            case 'todas':
            default:
                matchesDateFilter = true;
        }

        if (!matchesDateFilter) return false;

        // Filtros avanzados
        if (activeFilters.prioridad && task.priority !== activeFilters.prioridad) {
            return false;
        }

        if (activeFilters.estado && task.status !== activeFilters.estado) {
            return false;
        }

        return true;
    });

    // Aplicar ordenamiento si está activo
    if (currentSort.field) {
        applySorting();
    } else {
        renderTasks();
    }
    
    updateStats();
    updateCharts();
}

function getDateRanges(today) {
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    
    const startOfNextWeek = new Date(endOfWeek);
    startOfNextWeek.setDate(endOfWeek.getDate() + 1);
    
    const endOfNextWeek = new Date(startOfNextWeek);
    endOfNextWeek.setDate(startOfNextWeek.getDate() + 6);

    return { startOfWeek, endOfWeek, startOfNextWeek, endOfNextWeek };
}

function renderTasks() {
    const container = document.getElementById('tasksContainer');
    
    if (!container) return;
    
    if (filteredTasks.length === 0) {
        container.innerHTML = '<div class="no-results">No se encontraron tareas para los criterios seleccionados</div>';
        return;
    }

    container.innerHTML = filteredTasks.map(task => `
        <div class="task-row">
            <div class="task-name">${task.name}</div>
            <div class="prospect-name">${task.prospect}</div>
            <div class="task-date">${formatDate(task.dueDate)}</div>
            <div class="priority-badge priority-${task.priority}">${capitalizeFirst(task.priority)}</div>
            <div class="status-badge status-${task.status}">${capitalizeFirst(task.status)}</div>
        </div>
    `).join('');
}

function updateStats() {
    const total = filteredTasks.length;
    const completed = filteredTasks.filter(task => task.completed).length;
    const pending = filteredTasks.filter(task => !task.completed && task.status !== 'atrasada').length;
    const overdue = filteredTasks.filter(task => task.status === 'atrasada').length;
    
    const highPriority = filteredTasks.filter(task => task.priority === 'alta').length;
    const mediumPriority = filteredTasks.filter(task => task.priority === 'media').length;
    const lowPriority = filteredTasks.filter(task => task.priority === 'baja').length;

    // Actualizar DOM
    updateElementText('totalTasks', total);
    updateElementText('completedTasks', completed);
    updateElementText('pendingTasks', pending);
    updateElementText('overdueTasks', overdue);
    
    updateElementText('highPriority', highPriority);
    updateElementText('mediumPriority', mediumPriority);
    updateElementText('lowPriority', lowPriority);

    // Actualizar porcentajes
    const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    const priorityPercentage = total > 0 ? Math.round((highPriority / total) * 100) : 0;
    
    updateElementText('completionPercentage', `${completionPercentage}%`);
    updateElementText('priorityPercentage', `${priorityPercentage}%`);
}

function updateElementText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

function initializeCharts() {
    setTimeout(() => {
        createChart('completionChart', 70, '#3b82f6');
        createChart('priorityChart', 50, '#ef4444');
    }, 100);
}

function updateCharts() {
    const total = filteredTasks.length;
    const completed = filteredTasks.filter(task => task.completed).length;
    const highPriority = filteredTasks.filter(task => task.priority === 'alta').length;

    const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    const priorityPercentage = total > 0 ? Math.round((highPriority / total) * 100) : 0;

    createChart('completionChart', completionPercentage, '#3b82f6');
    createChart('priorityChart', priorityPercentage, '#ef4444');
}

function createChart(canvasId, percentage, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 45;

    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Círculo de fondo
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 8;
    ctx.stroke();

    // Arco de progreso
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + ((percentage / 100) * 2 * Math.PI);

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.strokeStyle = color;
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();
}

function renderRecentTasks() {
    const recentTasks = tasksData
        .filter(task => task.completed)
        .sort((a, b) => new Date(b.completedDate) - new Date(a.completedDate))
        .slice(0, 3);

    const container = document.getElementById('recentTasksContainer');
    
    if (!container) return;
    
    if (recentTasks.length === 0) {
        container.innerHTML = '<div class="no-results">No hay tareas completadas recientemente</div>';
        return;
    }

    container.innerHTML = recentTasks.map(task => `
        <div class="recent-task-item">
            <div class="recent-task-info">
                <div class="recent-task-name">${task.name}</div>
                <div class="recent-task-prospect">${task.prospect}</div>
            </div>
            <div class="recent-task-date">Completada: ${formatDate(task.completedDate)}</div>
        </div>
    `).join('');
}

function updateData() {
    const updateBtn = document.querySelector('.update-btn');
    if (!updateBtn) return;
    
    const originalContent = updateBtn.innerHTML;
    
    // Mostrar estado de carga
    updateBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="animation: spin 1s linear infinite;">
            <path d="M21 10C21 10 18.995 7.26822 17.3662 5.63824C15.7373 4.00827 13.4864 3 11 3C6.02944 3 2 7.02944 2 12C2 16.9706 6.02944 21 11 21C15.1031 21 18.5649 18.2543 19.6482 14.5M21 10V4M21 10H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Actualizando...
    `;
    updateBtn.classList.add('loading');

    // Agregar animación de rotación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
        // Simular actualización de datos
        filterTasks();
        renderRecentTasks();
        
        // Restaurar botón
        updateBtn.innerHTML = originalContent;
        updateBtn.classList.remove('loading');
        
        // Mostrar notificación
        showNotification('Datos actualizados correctamente', 'success');
        
        // Remover estilo de animación
        document.head.removeChild(style);
    }, 1500);
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    const bgColor = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6';
    notification.style.background = bgColor;
    
    notification.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    // Animación de entrada
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform 0.3s ease';
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.parentElement.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Funciones de utilidad
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

function formatDateForComparison(date) {
    return date.toISOString().split('T')[0];
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Funciones adicionales para mejorar la interactividad

// Función para agregar nuevas tareas
function addNewTask(taskData) {
    const newTask = {
        id: Math.max(...tasksData.map(t => t.id)) + 1,
        ...taskData,
        completed: false,
        completedDate: null
    };
    
    tasksData.push(newTask);
    filterTasks();
    showNotification('Nueva tarea agregada correctamente');
}

// Función para completar una tarea
function completeTask(taskId) {
    const task = tasksData.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        task.status = 'completada';
        task.completedDate = formatDateForComparison(new Date());
        
        filterTasks();
        renderRecentTasks();
        showNotification(`Tarea "${task.name}" completada`);
    }
}

// Función para filtrar por prioridad
function filterByPriority(priority) {
    const priorityFilter = priority.toLowerCase();
    filteredTasks = tasksData.filter(task => 
        task.priority === priorityFilter
    );
    
    renderTasks();
    updateStats();
    updateCharts();
}

// Función para filtrar por estado
function filterByStatus(status) {
    const statusFilter = status.toLowerCase();
    filteredTasks = tasksData.filter(task => 
        task.status === statusFilter
    );
    
    renderTasks();
    updateStats();
    updateCharts();
}

// Función para exportar datos
function exportData(format = 'json') {
    const dataToExport = {
        tasks: filteredTasks,
        stats: {
            total: filteredTasks.length,
            completed: filteredTasks.filter(t => t.completed).length,
            pending: filteredTasks.filter(t => !t.completed && t.status !== 'atrasada').length,
            overdue: filteredTasks.filter(t => t.status === 'atrasada').length
        },
        exportDate: new Date().toISOString()
    };
    
    if (format === 'json') {
        const dataStr = JSON.stringify(dataToExport, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `tasks_export_${formatDateForComparison(new Date())}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        showNotification('Datos exportados correctamente');
    }
}

// Event listeners adicionales
document.addEventListener('DOMContentLoaded', function() {
    // Agregar doble clic para completar tareas
    document.addEventListener('dblclick', function(e) {
        if (e.target.closest('.task-row')) {
            const taskRow = e.target.closest('.task-row');
            const taskName = taskRow.querySelector('.task-name').textContent;
            const task = tasksData.find(t => t.name === taskName);
            
            if (task && !task.completed) {
                completeTask(task.id);
            }
        }
    });
    
    // Agregar funcionalidad de teclas rápidas
    document.addEventListener('keydown', function(e) {
        // Ctrl + R para actualizar
        if (e.ctrlKey && e.key === 'r') {
            e.preventDefault();
            updateData();
        }
        
        // Ctrl + F para enfocar búsqueda
        if (e.ctrlKey && e.key === 'f') {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
});

window.addEventListener('resize', function() {
    setTimeout(() => {
        updateCharts();
    }, 100);
});