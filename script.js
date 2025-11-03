// Variables globales avec données intégrées
let tradesData = [
    {date: '2024-11-23', trader: 'Moussa', crypto: 'AVAX', rr: 5},
    {date: '2024-11-26', trader: 'ilyess', crypto: 'OP', rr: -1},
    {date: '2024-11-26', trader: 'ilyess', crypto: 'PENDLE', rr: -1},
    {date: '2024-11-26', trader: 'Moussa', crypto: 'DOGE', rr: 9},
    {date: '2024-11-27', trader: 'Moussa', crypto: 'STX', rr: -1},
    {date: '2024-11-28', trader: 'Moussa', crypto: 'LPT', rr: 16},
    {date: '2024-11-28', trader: 'Moussa', crypto: 'TRAC', rr: 4},
    {date: '2024-11-28', trader: 'Moussa', crypto: 'FET', rr: 7},
    {date: '2024-11-29', trader: 'ilyess', crypto: 'DOGE', rr: 0},
    {date: '2024-11-29', trader: 'Moussa', crypto: 'TAO', rr: 4.5},
    {date: '2024-11-29', trader: 'ilyess', crypto: 'PAAL', rr: 11},
    {date: '2024-11-30', trader: 'Moussa', crypto: 'THETA', rr: 5},
    {date: '2024-11-30', trader: 'Moussa', crypto: 'CHZ', rr: 4},
    {date: '2024-12-01', trader: 'ilyess', crypto: 'SUI', rr: -1},
    {date: '2024-12-01', trader: 'Moussa', crypto: 'NOS', rr: 7},
    {date: '2024-12-01', trader: 'Moussa', crypto: 'TAO', rr: 6},
    {date: '2024-12-02', trader: 'Moussa', crypto: 'QNT', rr: 5},
    {date: '2024-12-02', trader: 'Moussa', crypto: 'LINK', rr: 5},
    {date: '2024-12-02', trader: 'Moussa', crypto: 'ROSE', rr: 5},
    {date: '2024-12-02', trader: 'Moussa', crypto: 'AVAX', rr: 4},
    {date: '2024-12-02', trader: 'ilyess', crypto: 'OP', rr: -1},
    {date: '2024-12-02', trader: 'Moussa', crypto: 'LINK', rr: 5},
    {date: '2024-12-03', trader: 'ilyess', crypto: 'TRX', rr: 6.5},
    {date: '2024-12-03', trader: 'Moussa', crypto: 'AR', rr: 6},
    {date: '2024-12-03', trader: 'Moussa', crypto: 'SUPER', rr: 6},
    {date: '2024-12-03', trader: 'Moussa', crypto: 'SUPER', rr: 5},
    {date: '2024-12-04', trader: 'Moussa', crypto: 'STX', rr: 11},
    {date: '2024-12-04', trader: 'Moussa', crypto: 'STX', rr: 4},
    {date: '2024-12-04', trader: 'Moussa', crypto: 'BEAM', rr: 4},
    {date: '2024-12-04', trader: 'Moussa', crypto: 'FLUX', rr: 13},
    {date: '2024-12-04', trader: 'Moussa', crypto: 'ROSE', rr: 7},
    {date: '2024-12-04', trader: 'Moussa', crypto: 'LINK', rr: -1},
    {date: '2024-12-04', trader: 'Moussa', crypto: 'QNT', rr: 4},
    {date: '2024-12-05', trader: 'Moussa', crypto: 'SUI', rr: -1},
    {date: '2024-12-05', trader: 'Moussa', crypto: 'NEAR', rr: 4},
    {date: '2024-12-05', trader: 'Moussa', crypto: 'LPT', rr: -1},
    {date: '2024-12-05', trader: 'Moussa', crypto: 'TAO', rr: -1},
    {date: '2024-12-06', trader: 'Moussa', crypto: 'ANKR', rr: 5},
    {date: '2024-12-06', trader: 'Moussa', crypto: 'LPT', rr: 8},
    {date: '2024-12-06', trader: 'Moussa', crypto: 'ETH', rr: 5},
    {date: '2024-12-08', trader: 'ilyess', crypto: 'ANKR', rr: -1},
    {date: '2024-12-08', trader: 'Moussa', crypto: 'NEAR', rr: -1},
    {date: '2024-12-08', trader: 'Moussa', crypto: 'LINK', rr: 4},
    {date: '2024-12-09', trader: 'Moussa', crypto: 'ADA', rr: -1},
    {date: '2024-12-09', trader: 'Moussa', crypto: 'FLUX', rr: -1},
    {date: '2024-12-09', trader: 'ilyess', crypto: 'CKB', rr: -1},
    {date: '2024-12-09', trader: 'ilyess', crypto: 'ETH', rr: -1},
    {date: '2024-12-09', trader: 'ilyess', crypto: 'PAAL', rr: -1},
    {date: '2024-12-09', trader: 'Moussa', crypto: 'TAO', rr: -1},
    {date: '2024-12-09', trader: 'Moussa', crypto: 'CHZ', rr: -1},
    {date: '2024-12-09', trader: 'Moussa', crypto: 'SOL', rr: -1},
    {date: '2024-12-13', trader: 'Moussa', crypto: 'LINK', rr: 6},
    {date: '2024-12-14', trader: 'Moussa', crypto: 'OP', rr: -1},
    {date: '2024-12-15', trader: 'Moussa', crypto: 'LINK', rr: -1},
    {date: '2024-12-16', trader: 'Moussa', crypto: 'BTC', rr: 18},
    {date: '2024-12-17', trader: 'ilyess', crypto: 'FET', rr: -1},
    {date: '2025-01-13', trader: 'Moussa', crypto: 'STX', rr: -1},
    {date: '2025-01-15', trader: 'ilyess', crypto: 'AR', rr: -1},
    {date: '2025-01-19', trader: 'Moussa', crypto: 'AKT', rr: -1},
    {date: '2025-01-19', trader: 'Moussa', crypto: 'SOL', rr: 5},
    {date: '2025-01-21', trader: 'ilyess', crypto: 'AR', rr: -1},
    {date: '2025-01-21', trader: 'ilyess', crypto: 'TAO', rr: -1},
    {date: '2025-02-03', trader: 'Moussa', crypto: 'LINK', rr: -1},
    {date: '2025-02-03', trader: 'Moussa', crypto: 'CHZ', rr: -1},
    {date: '2025-03-02', trader: 'Moussa', crypto: 'ADA', rr: 5},
    {date: '2025-03-07', trader: 'ilyess', crypto: 'ETH', rr: -1},
    {date: '2025-03-13', trader: 'Moussa', crypto: 'ETH', rr: 5},
    {date: '2025-03-21', trader: 'ilyess', crypto: 'ETH', rr: -0.5},
    {date: '2025-03-24', trader: 'Moussa', crypto: 'BTC', rr: 5},
    {date: '2025-03-26', trader: 'Moussa', crypto: 'LINK', rr: 7},
    {date: '2025-03-27', trader: 'ilyess', crypto: 'HBAR', rr: 3.7},
    {date: '2025-03-27', trader: 'ilyess', crypto: 'APT', rr: 3},
    {date: '2025-04-01', trader: 'Moussa', crypto: 'BTC', rr: 4},
    {date: '2025-04-06', trader: 'ilyess', crypto: 'BTC', rr: 0.65},
    {date: '2025-04-06', trader: 'ilyess', crypto: 'BTC', rr: 5.63},
    {date: '2025-04-08', trader: 'Moussa', crypto: 'DOGE', rr: 4},
    {date: '2025-04-09', trader: 'Moussa', crypto: 'DOGE', rr: 8},
    {date: '2025-04-09', trader: 'ilyess', crypto: 'ETH', rr: 3},
    {date: '2025-04-10', trader: 'ilyess', crypto: 'ETH', rr: -1},
    {date: '2025-04-26', trader: 'Moussa', crypto: 'NEAR', rr: 4},
    {date: '2025-04-30', trader: 'Moussa', crypto: 'LINK', rr: 4},
    {date: '2025-05-01', trader: 'Moussa', crypto: 'AKT', rr: 6},
    {date: '2025-05-08', trader: 'Moussa', crypto: 'ADA', rr: 5},
    {date: '2025-05-08', trader: 'Moussa', crypto: 'STX', rr: 5},
    {date: '2025-05-08', trader: 'ilyess', crypto: 'KAITO', rr: 0},
    {date: '2025-05-13', trader: 'Moussa', crypto: 'ADA', rr: 5},
    {date: '2025-05-14', trader: 'ilyess', crypto: 'BTC', rr: -1},
    {date: '2025-05-15', trader: 'ilyess', crypto: 'SOL', rr: -1},
    {date: '2025-05-15', trader: 'ilyess', crypto: 'BTC', rr: -1},
    {date: '2025-05-21', trader: 'Moussa', crypto: 'BTC', rr: 6},
    {date: '2025-05-21', trader: 'Moussa', crypto: 'BTC', rr: 6},
    {date: '2025-05-21', trader: 'ilyess', crypto: 'BERA', rr: 6},
    {date: '2025-05-23', trader: 'ilyess', crypto: 'LINK', rr: 3},
    {date: '2025-05-24', trader: 'Moussa', crypto: 'LINK', rr: -1},
    {date: '2025-05-24', trader: 'ilyess', crypto: 'TRX', rr: -1},
    {date: '2025-05-31', trader: 'Moussa', crypto: 'LINK', rr: -1},
    {date: '2025-06-12', trader: 'Moussa', crypto: 'LINK', rr: 6},
    {date: '2025-06-20', trader: 'Moussa', crypto: 'SOL', rr: 10},
    {date: '2025-07-16', trader: 'ilyess', crypto: 'NEAR', rr: 2.6},
    {date: '2025-07-25', trader: 'Moussa', crypto: 'ADA', rr: 7},
    {date: '2025-08-10', trader: 'Moussa', crypto: 'ADA', rr: 3},
    {date: '2025-08-12', trader: 'Moussa', crypto: 'LINK', rr: 8},
    {date: '2025-08-12', trader: 'Moussa', crypto: 'ETH', rr: 26},
    {date: '2025-08-13', trader: 'Moussa', crypto: 'ADA', rr: 3},
    {date: '2025-08-14', trader: 'Moussa', crypto: 'SUPER', rr: -1},
    {date: '2025-08-15', trader: 'Moussa', crypto: 'ADA', rr: 5},
    {date: '2025-08-20', trader: 'Moussa', crypto: 'XRP', rr: -1},
    {date: '2025-08-20', trader: 'ilyess', crypto: 'BTC', rr: -1},
    {date: '2025-08-25', trader: 'Moussa', crypto: 'BTC', rr: -1},
    {date: '2025-09-01', trader: 'Moussa', crypto: 'RENDER', rr: 3},
    {date: '2025-09-01', trader: 'Moussa', crypto: 'ETH', rr: -1},
    {date: '2025-09-18', trader: 'Moussa', crypto: 'AVAX', rr: 17},
    {date: '2025-09-18', trader: 'Moussa', crypto: 'SOL', rr: 21},
    {date: '2025-09-20', trader: 'ilyess', crypto: 'AR', rr: -1},
    {date: '2025-09-22', trader: 'Moussa', crypto: 'LINK', rr: -1},
    {date: '2025-09-22', trader: 'Moussa', crypto: 'LINK', rr: 5},
    {date: '2025-09-22', trader: 'ilyess', crypto: 'AR', rr: -1},
    {date: '2025-09-30', trader: 'Moussa', crypto: 'RENDER', rr: -1},
    {date: '2025-10-02', trader: 'Moussa', crypto: 'ETH', rr: 8},
    {date: '2025-10-05', trader: 'ilyess', crypto: 'WLD', rr: -1},
    {date: '2025-10-12', trader: 'Moussa', crypto: 'TAO', rr: 7},
    {date: '2025-10-16', trader: 'ilyess', crypto: 'NEAR', rr: -1},
    {date: '2025-10-16', trader: 'ilyess', crypto: 'DOGE', rr: -1},
    {date: '2025-10-17', trader: 'ilyess', crypto: 'TAO', rr: -1},
    {date: '2025-10-22', trader: 'ilyess', crypto: 'SOL', rr: -1},
    {date: '2025-10-22', trader: 'Moussa', crypto: 'XAUUSD', rr: 7},
    {date: '2025-10-24', trader: 'Moussa', crypto: 'NEAR', rr: 6},
    {date: '2025-10-26', trader: 'Moussa', crypto: 'AKT', rr: 5},
    {date: '2025-10-26', trader: 'Moussa', crypto: 'AKT', rr: 7},
    {date: '2025-10-27', trader: 'Moussa', crypto: 'LINK', rr: 4},
    {date: '2025-10-27', trader: 'Moussa', crypto: 'AKT', rr: -1},
    {date: '2025-10-28', trader: 'Moussa', crypto: 'LINK', rr: -1},
    {date: '2025-10-30', trader: 'Moussa', crypto: 'TAO', rr: -1},
    {date: '2025-10-31', trader: 'Moussa', crypto: 'TAO', rr: 5}
];

let filteredTrades = [...tradesData];

// Fonction d'initialisation
function initApp() {
    renderStats();
    populateFilters();
    renderTrades();
}

// Calculer les statistiques
function calculateStats(trades = tradesData) {
    const totalTrades = trades.length;
    const wins = trades.filter(t => t.rr > 0).length;
    const losses = trades.filter(t => t.rr < 0).length;
    const breakEven = trades.filter(t => t.rr === 0).length;
    const winRate = totalTrades > 0 ? ((wins / totalTrades) * 100).toFixed(1) : 0;
    const totalRR = trades.reduce((sum, t) => sum + t.rr, 0).toFixed(2);
    const avgRR = totalTrades > 0 ? (totalRR / totalTrades).toFixed(2) : 0;
    const bestTrade = trades.length > 0 ? Math.max(...trades.map(t => t.rr)) : 0;
    const worstTrade = trades.length > 0 ? Math.min(...trades.map(t => t.rr)) : 0;
    
    // Trouver le dernier trade publié
    const sortedDates = trades.map(t => new Date(t.date)).sort((a, b) => b - a);
    const lastUpdate = sortedDates.length > 0 ? sortedDates[0].toISOString().split('T')[0] : '';

    return {
        totalTrades,
        wins,
        losses,
        breakEven,
        winRate,
        totalRR,
        avgRR,
        bestTrade,
        worstTrade,
        lastUpdate
    };
}

// Formater une date
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
    });
}

// Afficher les statistiques
function renderStats(trades = tradesData, monthLabel = 'Global') {
    const stats = calculateStats(trades);
    const statsGrid = document.getElementById('statsGrid');
    
    // Créer le titre du bilan
    const bilanTitle = monthLabel === 'Global' ? 'Bilan Global' : `Bilan ${monthLabel}`;
    
    statsGrid.innerHTML = `
        <div class="stat-card" style="grid-column: 1 / -1; background: #DC143C;">
            <div class="stat-value" style="font-size: 2em; color: #ffffff;">${bilanTitle}</div>
        </div>
        <div class="stat-card">
            <div class="stat-label">Total Trades</div>
            <div class="stat-value">${stats.totalTrades}</div>
        </div>
        <div class="stat-card">
            <div class="stat-label">Trades Gagnants</div>
            <div class="stat-value positive">${stats.wins}</div>
        </div>
        <div class="stat-card">
            <div class="stat-label">Trades Perdants</div>
            <div class="stat-value negative">${stats.losses}</div>
        </div>
        <div class="stat-card">
            <div class="stat-label">Break Even</div>
            <div class="stat-value">${stats.breakEven}</div>
        </div>
        <div class="stat-card">
            <div class="stat-label">Win Rate</div>
            <div class="stat-value positive">${stats.winRate}%</div>
        </div>
        <div class="stat-card">
            <div class="stat-label">Total RR</div>
            <div class="stat-value ${parseFloat(stats.totalRR) > 0 ? 'positive' : 'negative'}">
                ${parseFloat(stats.totalRR) > 0 ? '+' : ''}${stats.totalRR}
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-label">RR Moyen</div>
            <div class="stat-value">${stats.avgRR}</div>
        </div>
        <div class="stat-card">
            <div class="stat-label">Meilleur Trade</div>
            <div class="stat-value positive">+${stats.bestTrade} RR</div>
        </div>
        <div class="stat-card">
            <div class="stat-label">Pire Trade</div>
            <div class="stat-value negative">${stats.worstTrade} RR</div>
        </div>
        <div class="stat-card">
            <div class="stat-label">Last Update</div>
            <div class="stat-value">${stats.lastUpdate ? formatDate(stats.lastUpdate) : '-'}</div>
        </div>
    `;
}

// Peupler les filtres
function populateFilters() {
    const months = [...new Set(tradesData.map(t => {
        const date = new Date(t.date);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    }))].sort();

    const filterMonth = document.getElementById('filterMonth');
    months.forEach(month => {
        const option = document.createElement('option');
        option.value = month;
        const [year, monthNum] = month.split('-');
        const monthNames = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
        option.textContent = `${monthNames[parseInt(monthNum) - 1]} ${year}`;
        filterMonth.appendChild(option);
    });
}

// Afficher les trades
function renderTrades() {
    const tbody = document.getElementById('tradesBody');
    const noResults = document.getElementById('noResults');
    
    if (filteredTrades.length === 0) {
        tbody.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    
    tbody.innerHTML = filteredTrades.map(trade => {
        const rrClass = trade.rr > 0 ? 'rr-positive' : trade.rr < 0 ? 'rr-negative' : 'rr-neutral';
        const badgeClass = trade.rr > 0 ? 'badge-win' : trade.rr < 0 ? 'badge-loss' : 'badge-be';
        const resultText = trade.rr > 0 ? 'WIN' : trade.rr < 0 ? 'LOSS' : 'BE';
        const rrSign = trade.rr > 0 ? '+' : '';
        
        return `
            <tr>
                <td>${formatDate(trade.date)}</td>
                <td><span class="trader-name">${trade.trader}</span></td>
                <td><span class="crypto-tag">${trade.crypto}</span></td>
                <td><span class="${rrClass}">${rrSign}${trade.rr} RR</span></td>
                <td><span class="badge ${badgeClass}">${resultText}</span></td>
            </tr>
        `;
    }).join('');
}

// Appliquer les filtres
function applyFilters() {
    const resultFilter = document.getElementById('filterResult').value;
    const monthFilter = document.getElementById('filterMonth').value;

    filteredTrades = tradesData.filter(trade => {
        if (resultFilter === 'win' && trade.rr <= 0) return false;
        if (resultFilter === 'loss' && trade.rr >= 0) return false;
        if (resultFilter === 'be' && trade.rr !== 0) return false;

        if (monthFilter !== 'all') {
            const tradeMonth = trade.date.substring(0, 7);
            if (tradeMonth !== monthFilter) return false;
        }

        return true;
    });

    // Mettre à jour les statistiques en fonction du filtre de mois
    let monthLabel = 'Global';
    if (monthFilter !== 'all') {
        const [year, monthNum] = monthFilter.split('-');
        const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        monthLabel = `${monthNames[parseInt(monthNum) - 1]} ${year}`;
    }

    // Recalculer les stats uniquement avec les trades du mois (avant d'appliquer le filtre résultat)
    let tradesForStats = tradesData;
    if (monthFilter !== 'all') {
        tradesForStats = tradesData.filter(trade => {
            const tradeMonth = trade.date.substring(0, 7);
            return tradeMonth === monthFilter;
        });
    }

    renderStats(tradesForStats, monthLabel);
    renderTrades();
}

// Event listeners
document.getElementById('filterResult').addEventListener('change', applyFilters);
document.getElementById('filterMonth').addEventListener('change', applyFilters);

// Initialiser l'application au chargement de la page
window.addEventListener('DOMContentLoaded', initApp);