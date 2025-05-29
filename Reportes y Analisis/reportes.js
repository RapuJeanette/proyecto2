// Datos de muestra para los gráficos
const chartData = {
    // Datos de tendencia por suscripción
    trends: {
        '2017-2022': {
            anual: {
                labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
                data: [1200000, 1800000, 3200000, 2400000, 1900000, 1100000],
                services: ['Netflix', 'Amazon Prime Video', 'Netflix', 'Disney+', 'HBO Max', 'Paramount+']
            },
            mensual: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                data: [280000, 320000, 310000, 290000, 350000, 380000, 390000, 370000, 340000, 320000, 300000, 280000],
                services: ['Netflix', 'Amazon Prime Video', 'Disney+', 'HBO Max', 'Netflix', 'Apple TV+', 'Netflix', 'Paramount+', 'Disney+', 'HBO Max', 'Amazon Prime Video', 'Apple TV+']
            }
        },
        '2018-2023': {
            anual: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
                data: [1800000, 3200000, 2400000, 1900000, 1100000, 1600000],
                services: ['Amazon Prime Video', 'Netflix', 'Disney+', 'HBO Max', 'Paramount+', 'Apple TV+']
            },
            mensual: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                data: [300000, 340000, 330000, 310000, 370000, 400000, 410000, 390000, 360000, 340000, 320000, 300000],
                services: ['Disney+', 'Netflix', 'HBO Max', 'Amazon Prime Video', 'Apple TV+', 'Netflix', 'Paramount+', 'Disney+', 'Netflix', 'HBO Max', 'Amazon Prime Video', 'Apple TV+']
            }
        },
        '2021': {
            anual: {
                labels: ['2021'],
                data: [1900000],
                services: ['HBO Max']
            },
            mensual: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                data: [150000, 160000, 180000, 170000, 190000, 200000, 210000, 195000, 185000, 175000, 165000, 155000],
                services: ['Netflix', 'Amazon Prime Video', 'Disney+', 'HBO Max', 'Apple TV+', 'Netflix', 'Paramount+', 'Disney+', 'Netflix', 'HBO Max', 'Amazon Prime Video', 'Apple TV+']
            }
        },
        '2022': {
            anual: {
                labels: ['2022'],
                data: [1100000],
                services: ['Paramount+']
            },
            mensual: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                data: [95000, 98000, 92000, 88000, 85000, 90000, 93000, 91000, 89000, 87000, 85000, 83000],
                services: ['HBO Max', 'Disney+', 'Netflix', 'Amazon Prime Video', 'Apple TV+', 'Paramount+', 'Netflix', 'Disney+', 'HBO Max', 'Amazon Prime Video', 'Netflix', 'Apple TV+']
            }
        },
        '2019-2024': {
            anual: {
                labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
                data: [3200000, 2400000, 1900000, 1100000, 1600000, 2100000],
                services: ['Netflix', 'Disney+', 'HBO Max', 'Paramount+', 'Apple TV+', 'Amazon Prime Video']
            },
            mensual: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                data: [320000, 350000, 340000, 330000, 380000, 410000, 420000, 400000, 370000, 350000, 330000, 310000],
                services: ['Apple TV+', 'Netflix', 'Paramount+', 'Disney+', 'HBO Max', 'Amazon Prime Video', 'Netflix', 'Apple TV+', 'Disney+', 'HBO Max', 'Paramount+', 'Amazon Prime Video']
            }
        },
        '2020-2025': null, // Sin datos
        '2023': null, // Sin datos
        '2024': null  // Sin datos
    },

    // Datos de ventas por plan
    sales: {
        '2021': [
            { plan: 'Básico', value: 121799, color: 'basico' },
            { plan: '4k', value: 50799, color: 'premium' },
            { plan: 'Familiar', value: 25567, color: 'familiar' }
        ],
        '2022': [
            { plan: 'Básico', value: 98450, color: 'basico' },
            { plan: '4k', value: 42300, color: 'premium' },
            { plan: 'Familiar', value: 18900, color: 'familiar' }
        ],
        '2023': null, // Sin datos
        '2024': null  // Sin datos
    },

    // Datos de medios de contacto
    contact: {
        '2021': [
            { label: 'Llamadas', value: 39.11, color: '#1e40af' },
            { label: 'WhatsApp', value: 28.02, color: '#0369a1' },
            { label: 'Correos', value: 23.13, color: '#7c3aed' },
            { label: 'Otros', value: 9.74, color: '#9ca3af' }
        ],
        '2022': [
            { label: 'Llamadas', value: 42.50, color: '#1e40af' },
            { label: 'WhatsApp', value: 31.20, color: '#0369a1' },
            { label: 'Correos', value: 19.80, color: '#7c3aed' },
            { label: 'Otros', value: 6.50, color: '#9ca3af' }
        ],
        '2023': null, // Sin datos
        '2024': null  // Sin datos
    },

    // Datos del embudo de prospectos
    funnel: {
        '2021': [
            { label: 'Prospectos nuevos: 120', value: 120, color: 'nuevos', width: 100 },
            { label: 'Interesados: 95', value: 95, color: 'interesados', width: 85 },
            { label: 'Negociaciones: 72', value: 72, color: 'negociaciones', width: 70 },
            { label: 'Aceptados: 43', value: 43, color: 'aceptados', width: 50 },
            { label: 'Rechazados: 27', value: 27, color: 'rechazados', width: 35 }
        ],
        '2022': [
            { label: 'Prospectos nuevos: 98', value: 98, color: 'nuevos', width: 100 },
            { label: 'Interesados: 76', value: 76, color: 'interesados', width: 82 },
            { label: 'Negociaciones: 58', value: 58, color: 'negociaciones', width: 68 },
            { label: 'Aceptados: 34', value: 34, color: 'aceptados', width: 48 },
            { label: 'Rechazados: 22', value: 22, color: 'rechazados', width: 32 }
        ],
        '2023': null, // Sin datos
        '2024': null  // Sin datos
    }
};

// Variables globales
let currentPeriod = 'anual';
let trendChart = null;
let contactChart = null;
let currentTrendYear = '2017-2022';
let currentSalesYear = '2021';
let currentContactYear = '2021';
let currentFunnelYear = '2021';

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    updateAllCharts();
}

function setupEventListeners() {
    // Dropdown principal de período
    setupDropdown('periodBtn', 'periodDropdown', handlePeriodChange);
    
    // Dropdowns de años para cada gráfico
    setupDropdown('trendYearBtn', 'trendYearDropdown', handleTrendYearChange);
    setupDropdown('salesYearBtn', 'salesYearDropdown', handleSalesYearChange);
    setupDropdown('contactYearBtn', 'contactYearDropdown', handleContactYearChange);
    setupDropdown('funnelYearBtn', 'funnelYearDropdown', handleFunnelYearChange);

    // Cerrar dropdowns al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown-container')) {
            closeAllDropdowns();
        }
    });
}

function setupDropdown(buttonId, dropdownId, changeHandler) {
    const button = document.getElementById(buttonId);
    const dropdown = document.getElementById(dropdownId);
    
    if (button && dropdown) {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            closeAllDropdowns();
            toggleDropdown(button, dropdown);
        });

        dropdown.addEventListener('click', function(e) {
            if (e.target.classList.contains('dropdown-item')) {
                const value = e.target.dataset.period || e.target.dataset.year;
                changeHandler(value, e.target.textContent);
                closeDropdown(button, dropdown);
            }
        });
    }
}

function toggleDropdown(button, dropdown) {
    const isOpen = dropdown.classList.contains('show');
    if (isOpen) {
        closeDropdown(button, dropdown);
    } else {
        openDropdown(button, dropdown);
    }
}

function openDropdown(button, dropdown) {
    button.classList.add('active');
    dropdown.classList.add('show');
}

function closeDropdown(button, dropdown) {
    button.classList.remove('active');
    dropdown.classList.remove('show');
}

function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('show'));
}

// Manejadores de cambio
function handlePeriodChange(period, text) {
    currentPeriod = period;
    document.getElementById('periodText').textContent = text;
    updateTrendChart();
}

function handleTrendYearChange(year, text) {
    currentTrendYear = year;
    document.getElementById('trendYearText').textContent = text;
    updateTrendChart();
}

function handleSalesYearChange(year, text) {
    currentSalesYear = year;
    document.getElementById('salesYearText').textContent = text;
    updateSalesChart();
}

function handleContactYearChange(year, text) {
    currentContactYear = year;
    document.getElementById('contactYearText').textContent = text;
    updateContactChart();
}

function handleFunnelYearChange(year, text) {
    currentFunnelYear = year;
    document.getElementById('funnelYearText').textContent = text;
    updateFunnelChart();
}

// Actualizar todos los gráficos
function updateAllCharts() {
    updateTrendChart();
    updateSalesChart();
    updateContactChart();
    updateFunnelChart();
}

// Gráfico de tendencia
function updateTrendChart() {
    const canvas = document.getElementById('trendChart');
    const noDataDiv = document.getElementById('trendNoData');
    
    const data = chartData.trends[currentTrendYear];
    
    if (!data) {
        showNoData(canvas, noDataDiv);
        return;
    }
    
    hideNoData(canvas, noDataDiv);
    
    const periodData = data[currentPeriod];
    
    if (trendChart) {
        trendChart.destroy();
    }
    
    // Encontrar el valor máximo para destacar esa barra
    const maxValue = Math.max(...periodData.data);
    const maxIndex = periodData.data.indexOf(maxValue);
    
    // Crear array de colores - azul oscuro para el máximo, colores variados para el resto
    const backgroundColors = periodData.data.map((value, index) => {
        if (index === maxIndex) {
            return '#1e40af'; // Azul oscuro para el valor máximo
        } else {
            // Colores variados para las otras barras
            const colors = ['#0ea5e9', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24', '#9ca3af'];
            return colors[index % colors.length];
        }
    });
    
    const ctx = canvas.getContext('2d');
    trendChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: periodData.labels,
            datasets: [{
                label: 'Suscripciones',
                data: periodData.data,
                backgroundColor: backgroundColors,
                borderRadius: 8,
                maxBarThickness: 60
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            const index = context[0].dataIndex;
                            const service = periodData.services[index];
                            return `${service} - ${context[0].label}`;
                        },
                        label: function(context) {
                            return `Suscripciones: ${formatNumber(context.parsed.y)}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatNumber(value);
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Gráfico de ventas (horizontal)
function updateSalesChart() {
    const container = document.getElementById('salesChart');
    const noDataDiv = document.getElementById('salesNoData');
    
    const data = chartData.sales[currentSalesYear];
    
    if (!data) {
        showNoData(container, noDataDiv);
        return;
    }
    
    hideNoData(container, noDataDiv);
    
    const maxValue = Math.max(...data.map(item => item.value));
    
    container.innerHTML = data.map(item => `
        <div class="sales-bar">
            <div class="bar-label">${item.plan}</div>
            <div class="bar-container">
                <div class="bar-fill ${item.color}" style="width: ${(item.value / maxValue) * 100}%">
                    ${formatNumber(item.value)}
                </div>
            </div>
            <div class="bar-value">${formatNumber(item.value)}</div>
        </div>
    `).join('');
}

// Gráfico de medios de contacto (pie chart)
function updateContactChart() {
    const canvas = document.getElementById('contactChart');
    const legend = document.getElementById('contactLegend');
    const noDataDiv = document.getElementById('contactNoData');
    
    const data = chartData.contact[currentContactYear];
    
    if (!data) {
        showNoData(canvas, noDataDiv);
        legend.innerHTML = '';
        return;
    }
    
    hideNoData(canvas, noDataDiv);
    
    if (contactChart) {
        contactChart.destroy();
    }
    
    const ctx = canvas.getContext('2d');
    contactChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: data.map(item => item.label),
            datasets: [{
                data: data.map(item => item.value),
                backgroundColor: data.map(item => item.color),
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // Actualizar leyenda
    legend.innerHTML = data.map(item => `
        <div class="contact-legend-item">
            <div class="contact-legend-color" style="background-color: ${item.color}"></div>
            <div class="contact-legend-label">${item.label}</div>
            <div class="contact-legend-value">${item.value}%</div>
        </div>
    `).join('');
}

// Gráfico de embudo
function updateFunnelChart() {
    const container = document.getElementById('funnelChart');
    const noDataDiv = document.getElementById('funnelNoData');
    
    const data = chartData.funnel[currentFunnelYear];
    
    if (!data) {
        showNoData(container, noDataDiv);
        return;
    }
    
    hideNoData(container, noDataDiv);
    
    container.innerHTML = data.map(item => `
        <div class="funnel-item">
            <div class="funnel-bar ${item.color}" style="width: ${item.width}%">
                ${item.label}
            </div>
        </div>
    `).join('');
}

// Funciones de utilidad
function showNoData(chartElement, noDataElement) {
    chartElement.style.display = 'none';
    noDataElement.style.display = 'flex';
}

function hideNoData(chartElement, noDataElement) {
    chartElement.style.display = 'block';
    noDataElement.style.display = 'none';
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'k';
    }
    return num.toString();
}

// Función para simular carga de datos
function loadDataForYear(year) {
    // Simular delay de carga
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(chartData.trends[year] || null);
        }, 300);
    });
}