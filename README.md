# Track Record - GHZ Composite

Site web pour afficher le track record de l'école d'analyse technique GHZ Composite.

## Structure du projet

```
track-record/
├── index.html          # Page HTML principale
├── style.css           # Styles CSS
├── script.js           # JavaScript pour la logique
├── trades.json         # Données des trades (À METTRE À JOUR)
├── logo-ghz.png        # Logo GHZ Composite
└── README.md           # Ce fichier
```

## Comment ajouter un nouveau trade

1. Ouvrez le fichier `trades.json`
2. Ajoutez votre nouveau trade dans le tableau "trades" en suivant ce format :

```json
{"date": "2025-11-03", "trader": "Moussa", "crypto": "BTC", "rr": 5}
```

**Format des champs :**
- `date` : Format YYYY-MM-DD (ex: 2025-11-03)
- `trader` : Nom du trader (Moussa ou ilyess)
- `crypto` : Symbole de la crypto (BTC, ETH, LINK, etc.)
- `rr` : Valeur du RR (positif pour gain, négatif pour perte)

**Exemple d'ajout :**

```json
{
  "trades": [
    {"date": "2024-11-23", "trader": "Moussa", "crypto": "AVAX", "rr": 5},
    {"date": "2024-11-26", "trader": "ilyess", "crypto": "OP", "rr": -1},
    
    // AJOUTEZ VOTRE NOUVEAU TRADE ICI :
    {"date": "2025-11-03", "trader": "Moussa", "crypto": "BTC", "rr": 8},
    
    ... (autres trades)
  ]
}
```

**⚠️ IMPORTANT :**
- N'oubliez pas la virgule entre les trades
- Respectez bien le format JSON
- Le dernier trade ne doit PAS avoir de virgule après

## Déploiement sur GitHub Pages

1. Créez un compte sur github.com
2. Créez un nouveau repository
3. Uploadez tous les fichiers :
   - index.html
   - style.css
   - script.js
   - trades.json
   - logo-ghz.png

4. Allez dans Settings > Pages
5. Sélectionnez la branche "main"
6. Votre site sera accessible à : `https://votre-username.github.io/nom-du-repo/`

## Configuration du sous-domaine sur Namecheap

1. Allez dans votre panneau Namecheap
2. Sélectionnez "Advanced DNS"
3. Ajoutez un enregistrement CNAME :
   - Type: CNAME Record
   - Host: track (ou stats, performance)
   - Value: votre-username.github.io
   - TTL: Automatic

4. Attendez 5-30 minutes pour la propagation
5. Votre site sera accessible à : `track.ghzcomposite.com`

## Design

- **Couleurs** : Rouge (#DC143C), Noir (#000000), Blanc (#FFFFFF)
- **Police** : SF Pro Display (système Apple)
- **Style** : Premium, minimaliste, professionnel

## Fonctionnalités

✅ Statistiques globales en temps réel
✅ Filtres par résultat (Win/Loss/BE)
✅ Filtres par mois
✅ Tableau interactif des trades
✅ Responsive (mobile & desktop)
✅ Mise à jour automatique du "Last Update"

## Support

Pour toute question ou assistance, contactez l'équipe GHZ Composite.

---

**© 2025 GHZ Composite - Tous droits réservés**