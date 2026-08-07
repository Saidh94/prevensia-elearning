-- ============================================================
-- CATALOGUE DES RISQUES PROFESSIONNELS
-- Sources : INRS, INERIS, OPPBTP, SiteSecurite.com
-- Nomenclature : Code du travail + classification INRS
-- ============================================================

-- ── BTP ─────────────────────────────────────────────────────
insert into risques_catalogue (code, secteur, sous_secteur, famille, intitule, gravite_defaut, frequence_defaut, mesures_prevention, references_legales, source) values

('BTP_CHUTE_HAUTEUR_TOITURE', 'btp', 'second_oeuvre', 'chute_hauteur',
 'Chute de hauteur lors de travaux en toiture ou terrasse',
 4, 3,
 '[
   {"type":"technique","description":"Mise en place de garde-corps périphériques H≥1m","reference_reglementaire":"Art. R4323-58 C.trav."},
   {"type":"technique","description":"Filets de sécurité sous la toiture","reference_reglementaire":"NF EN 1263-1"},
   {"type":"epi","description":"Harnais antichute avec longe à absorption d énergie","reference_reglementaire":"NF EN 361"},
   {"type":"organisationnelle","description":"Plan de prévention chute de hauteur — PPSPS","reference_reglementaire":"Art. L4532-9 C.trav."}
 ]',
 ARRAY['Art. R4323-58 C.trav.','Art. R4323-59 C.trav.','NF EN 1263-1'],
 'OPPBTP'),

('BTP_CHUTE_HAUTEUR_ECHAFAUDAGE', 'btp', null, 'chute_hauteur',
 'Chute de hauteur depuis échafaudage ou nacelle',
 4, 4,
 '[
   {"type":"technique","description":"Vérification réception échafaudage par personne compétente","reference_reglementaire":"Art. R4323-69 C.trav."},
   {"type":"technique","description":"Plinthes et garde-corps sur toutes les plates-formes","reference_reglementaire":"Art. R4323-63 C.trav."},
   {"type":"epi","description":"Casque de chantier + harnais si échafaudage >3m","reference_reglementaire":"NF EN 397"},
   {"type":"organisationnelle","description":"Formation montage/démontage échafaudage (CACES R408)","reference_reglementaire":"R408 CNAM"}
 ]',
 ARRAY['Art. R4323-63 C.trav.','Art. R4323-69 C.trav.'],
 'INRS'),

('BTP_CHUTE_HAUTEUR_FOUILLE', 'btp', 'tp', 'chute_hauteur',
 'Chute en fouille ou tranchée',
 4, 3,
 '[
   {"type":"technique","description":"Blindage des fouilles dès 1,30m de profondeur","reference_reglementaire":"Art. R4534-1 C.trav."},
   {"type":"technique","description":"Barrières de protection en bordure de fouille","reference_reglementaire":"Art. R4534-22 C.trav."},
   {"type":"organisationnelle","description":"Balisage et signalisation de chantier","reference_reglementaire":"Art. R4534-107 C.trav."}
 ]',
 ARRAY['Art. R4534-1 C.trav.','Art. R4534-22 C.trav.'],
 'INRS'),

('BTP_ENGIN_HEURT', 'btp', null, 'circulation',
 'Heurt par engin de chantier (pelle, grue, chariot)',
 4, 3,
 '[
   {"type":"technique","description":"Plan de circulation engins/piétons séparé","reference_reglementaire":"Art. R4534-107 C.trav."},
   {"type":"technique","description":"Gyrophare et avertisseur de recul sur engins","reference_reglementaire":"Art. R4323-34 C.trav."},
   {"type":"epi","description":"Gilet haute visibilité classe 2 obligatoire","reference_reglementaire":"EN ISO 20471"},
   {"type":"organisationnelle","description":"CACES R482 pour conducteurs d engins","reference_reglementaire":"R482 CNAM"}
 ]',
 ARRAY['Art. R4534-107 C.trav.','Art. R4323-34 C.trav.'],
 'OPPBTP'),

('BTP_ELECTRIQUE', 'btp', null, 'electrique',
 'Risque électrique — contact avec câbles ou installations',
 4, 2,
 '[
   {"type":"technique","description":"Consignation électrique avant travaux (LOTO)","reference_reglementaire":"Art. R4544-1 C.trav."},
   {"type":"technique","description":"DICT avant tout travail à proximité de réseaux","reference_reglementaire":"Décret 91-1147"},
   {"type":"epi","description":"Outils isolés 1000V + EPI classe 2","reference_reglementaire":"NF EN 60900"},
   {"type":"formation","description":"Habilitation électrique B1/H1 selon poste","reference_reglementaire":"NF C 18-510"}
 ]',
 ARRAY['Art. R4544-1 C.trav.','NF C 18-510'],
 'INRS'),

('BTP_AMIANTE', 'btp', 'second_oeuvre', 'amiante',
 'Exposition à l amiante lors de travaux sur bâtiments antérieurs à 1997',
 4, 3,
 '[
   {"type":"technique","description":"Repérage amiante avant travaux obligatoire (DTA/RAT)","reference_reglementaire":"Art. R1334-14 C. santé pub."},
   {"type":"technique","description":"Confinement et décontamination selon sous-section 3 ou 4","reference_reglementaire":"Art. R4412-94 C.trav."},
   {"type":"epi","description":"APR TM1P ou TH2P selon niveau empoussièrement","reference_reglementaire":"Art. R4412-112 C.trav."},
   {"type":"formation","description":"Formation SS3 ou SS4 obligatoire selon catégorie","reference_reglementaire":"Art. R4412-97 C.trav."},
   {"type":"surveillance","description":"Suivi médical renforcé post-exposition","reference_reglementaire":"Art. R4412-145 C.trav."}
 ]',
 ARRAY['Art. R4412-94 C.trav.','Art. R4412-97 C.trav.','Art. R1334-14 C. santé pub.'],
 'INRS'),

('BTP_TMS_MANUTENTION', 'btp', null, 'manutention_manuelle',
 'Troubles musculosquelettiques — manutention manuelle de charges lourdes',
 3, 4,
 '[
   {"type":"technique","description":"Aides mécaniques : chariots, diables, monte-charges","reference_reglementaire":"Art. R4541-1 C.trav."},
   {"type":"organisationnelle","description":"Charge max 25 kg par personne (15 kg femmes)","reference_reglementaire":"Art. R4541-9 C.trav."},
   {"type":"formation","description":"Formation gestes et postures — PRAP BTP","reference_reglementaire":"Art. R4541-11 C.trav."}
 ]',
 ARRAY['Art. R4541-1 C.trav.','Art. R4541-9 C.trav.'],
 'INRS'),

('BTP_CHIMIQUE_CIMENT', 'btp', 'gros_oeuvre', 'chimique',
 'Dermite et brûlures chimiques — contact ciment et béton frais',
 3, 4,
 '[
   {"type":"epi","description":"Gants résistants chimiques NF EN 374 + crème barrière","reference_reglementaire":"Art. R4222-1 C.trav."},
   {"type":"epi","description":"Bottes imperméables lors du coulage béton","reference_reglementaire":"NF EN 13832"},
   {"type":"formation","description":"Sensibilisation aux risques dermatologiques","reference_reglementaire":"Art. R4412-39 C.trav."}
 ]',
 ARRAY['Art. R4222-1 C.trav.','Art. R4412-39 C.trav.'],
 'INRS'),

-- ── INDUSTRIE ───────────────────────────────────────────────
('IND_MACHINES_ORGANES', 'industrie', null, 'machines_outils',
 'Contact avec organes mobiles de machines (presses, tours, fraiseuses)',
 4, 3,
 '[
   {"type":"technique","description":"Protecteurs fixes et mobiles conformes Dir. 2006/42/CE","reference_reglementaire":"Art. R4313-1 C.trav."},
   {"type":"technique","description":"Dispositifs d arrêt d urgence accessibles","reference_reglementaire":"EN ISO 13850"},
   {"type":"technique","description":"Consignation LOTO avant maintenance","reference_reglementaire":"Art. R4323-52 C.trav."},
   {"type":"formation","description":"Formation sécurité machines obligatoire à l embauche","reference_reglementaire":"Art. R4141-2 C.trav."}
 ]',
 ARRAY['Art. R4313-1 C.trav.','Dir. 2006/42/CE','EN ISO 12100'],
 'INRS'),

('IND_ATEX', 'industrie', null, 'incendie_explosion',
 'Risque d explosion — atmosphères explosives (ATEX)',
 4, 2,
 '[
   {"type":"technique","description":"Classement des zones ATEX selon directive 1999/92/CE","reference_reglementaire":"Art. R4227-50 C.trav."},
   {"type":"technique","description":"Matériel électrique certifié Ex (groupe II cat. 2 ou 3)","reference_reglementaire":"Dir. 2014/34/UE ATEX"},
   {"type":"organisationnelle","description":"Document relatif à la protection contre les explosions (DRPE)","reference_reglementaire":"Art. R4227-52 C.trav."},
   {"type":"formation","description":"Formation ATEX N1 (opérateurs) et N2 (encadrants)","reference_reglementaire":"Art. R4227-54 C.trav."}
 ]',
 ARRAY['Art. R4227-50 C.trav.','Dir. 1999/92/CE','Dir. 2014/34/UE'],
 'INERIS'),

('IND_CHIMIQUE_CMR', 'industrie', null, 'chimique',
 'Exposition à des agents chimiques dangereux (CMR, solvants, poussières)',
 4, 3,
 '[
   {"type":"technique","description":"Substitution par produit moins dangereux si possible","reference_reglementaire":"Art. R4412-15 C.trav."},
   {"type":"technique","description":"Captage à la source + ventilation générale","reference_reglementaire":"Art. R4222-1 C.trav."},
   {"type":"epi","description":"APR filtrant adapté + gants résistants chimiques","reference_reglementaire":"Art. R4412-17 C.trav."},
   {"type":"surveillance","description":"Surveillance biologique de l exposition (médecin du travail)","reference_reglementaire":"Art. R4412-44 C.trav."}
 ]',
 ARRAY['Art. R4412-15 C.trav.','Art. R4412-44 C.trav.','Règlement CLP'],
 'INRS'),

('IND_BRUIT', 'industrie', null, 'bruit',
 'Exposition au bruit supérieure aux valeurs limites (>80 dB(A))',
 3, 4,
 '[
   {"type":"technique","description":"Mesurages du bruit et cartographie phonique","reference_reglementaire":"Art. R4431-2 C.trav."},
   {"type":"technique","description":"Encoffrement des machines bruyantes","reference_reglementaire":"Art. R4431-1 C.trav."},
   {"type":"epi","description":"Protecteurs individuels contre le bruit si >85 dB(A)","reference_reglementaire":"Art. R4431-3 C.trav."},
   {"type":"surveillance","description":"Audiogramme périodique obligatoire dès 85 dB(A)","reference_reglementaire":"Art. R4431-5 C.trav."}
 ]',
 ARRAY['Art. R4431-1 C.trav.','Art. R4431-3 C.trav.'],
 'INRS'),

('IND_THERMIQUE', 'industrie', null, 'thermique',
 'Travail en ambiance thermique extrême (chaleur ou froid)',
 3, 3,
 '[
   {"type":"technique","description":"Ventilation et climatisation des ateliers chauds","reference_reglementaire":"Art. R4223-13 C.trav."},
   {"type":"organisationnelle","description":"Pauses fréquentes + accès eau fraîche (chaleur)","reference_reglementaire":"Art. R4225-2 C.trav."},
   {"type":"epi","description":"Vêtements cryogéniques ou réfléchissants selon ambiance","reference_reglementaire":"EN 342 / EN ISO 11612"},
   {"type":"surveillance","description":"Suivi médical renforcé travailleurs exposés chaleur","reference_reglementaire":"Art. R4624-18 C.trav."}
 ]',
 ARRAY['Art. R4223-13 C.trav.','Art. R4225-2 C.trav.'],
 'INRS'),

-- ── LOGISTIQUE ──────────────────────────────────────────────
('LOG_CHARIOT_HEURT', 'logistique', null, 'circulation',
 'Heurt par chariot élévateur ou engin de manutention',
 4, 4,
 '[
   {"type":"technique","description":"Séparation physique piétons/engins (barrières, peinture sol)","reference_reglementaire":"Art. R4323-51 C.trav."},
   {"type":"technique","description":"Miroirs aux carrefours aveugles et gyrophares","reference_reglementaire":"Art. R4323-34 C.trav."},
   {"type":"formation","description":"CACES R489 catégorie 3 obligatoire (chariots frontaux)","reference_reglementaire":"R489 CNAM"},
   {"type":"epi","description":"Chaussures de sécurité S3 + gilet HV pour tous les piétons","reference_reglementaire":"EN ISO 20345"}
 ]',
 ARRAY['Art. R4323-51 C.trav.','R489 CNAM'],
 'INRS'),

('LOG_CHUTE_RAYONNAGE', 'logistique', null, 'chute_hauteur',
 'Chute de charges depuis rayonnages ou effondrement de palettiers',
 4, 3,
 '[
   {"type":"technique","description":"Vérification annuelle des palettiers par organisme agréé","reference_reglementaire":"NF EN 15635"},
   {"type":"technique","description":"Charge maximale affichée sur chaque travée","reference_reglementaire":"NF EN 15512"},
   {"type":"technique","description":"Protecteurs de lisses et sabot de sol en bout d allée","reference_reglementaire":"NF EN 15635"},
   {"type":"epi","description":"Port du casque obligatoire dans les zones de prélèvement haut","reference_reglementaire":"NF EN 397"}
 ]',
 ARRAY['NF EN 15635','NF EN 15512'],
 'INRS'),

('LOG_TMS_PICKING', 'logistique', null, 'manutention_manuelle',
 'TMS — opérations de préparation de commandes (picking)',
 3, 4,
 '[
   {"type":"technique","description":"Aide à la manutention : convoyeurs, exosquelettes, préparateurs basse levée","reference_reglementaire":"Art. R4541-1 C.trav."},
   {"type":"organisationnelle","description":"Rotation des postes — pas plus de 2h continues en picking bas","reference_reglementaire":"Art. R4541-9 C.trav."},
   {"type":"formation","description":"PRAP IBC (gestes et postures logistique)","reference_reglementaire":"Art. R4541-11 C.trav."}
 ]',
 ARRAY['Art. R4541-1 C.trav.'],
 'INRS'),

('LOG_HORAIRES_DECALES', 'logistique', null, 'rps',
 'Risques liés au travail de nuit et horaires décalés (3x8)',
 2, 4,
 '[
   {"type":"organisationnelle","description":"Repos compensateur légal nuit + surveillance médicale spéciale","reference_reglementaire":"Art. L3122-5 C.trav."},
   {"type":"surveillance","description":"Visite médicale renforcée tous les 6 mois","reference_reglementaire":"Art. R4624-18 C.trav."},
   {"type":"organisationnelle","description":"Pause casse-croûte garantie et local de repos","reference_reglementaire":"Art. R4228-22 C.trav."}
 ]',
 ARRAY['Art. L3122-5 C.trav.','Art. R4624-18 C.trav.'],
 'INRS'),

-- ── TERTIAIRE ───────────────────────────────────────────────
('TER_RPS_SURCHARGE', 'tertiaire', null, 'rps',
 'Risques psychosociaux — surcharge de travail, pression hiérarchique',
 3, 3,
 '[
   {"type":"organisationnelle","description":"Diagnostic RPS (grille INRS ou méthode Gollac)","reference_reglementaire":"ANI 2013 sur qualité de vie au travail"},
   {"type":"organisationnelle","description":"Plan d action RPS formalisé et suivi annuel","reference_reglementaire":"Art. L4121-3-1 C.trav."},
   {"type":"organisationnelle","description":"Désignation d un référent harcèlement si >250 salariés","reference_reglementaire":"Art. L1153-5-1 C.trav."}
 ]',
 ARRAY['Art. L4121-3-1 C.trav.','ANI 02/07/2008','ANI 2013'],
 'INRS'),

('TER_ECRAN_TMS', 'tertiaire', null, 'manutention_manuelle',
 'Travail sur écran — TMS cervicaux, troubles visuels, posture assise prolongée',
 2, 4,
 '[
   {"type":"technique","description":"Écran réglable en hauteur et inclinaison + siège ergonomique","reference_reglementaire":"Art. R4542-2 C.trav."},
   {"type":"technique","description":"Éclairage adapté sans reflet sur écran (300-500 lux)","reference_reglementaire":"NF EN 12464-1"},
   {"type":"organisationnelle","description":"Pause visuelle 5 min toutes les heures","reference_reglementaire":"Art. R4542-8 C.trav."},
   {"type":"surveillance","description":"Examen des yeux et visite médicale adaptée","reference_reglementaire":"Art. R4542-18 C.trav."}
 ]',
 ARRAY['Art. R4542-2 C.trav.','Art. R4542-18 C.trav.'],
 'INRS'),

('TER_INCENDIE', 'tertiaire', null, 'incendie_explosion',
 'Risque incendie — locaux tertiaires, open-spaces',
 3, 2,
 '[
   {"type":"technique","description":"Détecteurs incendie + alarme type 4 minimum","reference_reglementaire":"Art. R4227-34 C.trav."},
   {"type":"technique","description":"Extincteurs 1 pour 200 m² + vérification annuelle","reference_reglementaire":"Art. R4227-28 C.trav."},
   {"type":"organisationnelle","description":"Plan d évacuation affiché + exercice évacuation annuel","reference_reglementaire":"Art. R4227-39 C.trav."},
   {"type":"formation","description":"SST ou EPI désigné + formation évacuation","reference_reglementaire":"Art. R4224-15 C.trav."}
 ]',
 ARRAY['Art. R4227-28 C.trav.','Art. R4227-34 C.trav.','Art. R4227-39 C.trav.'],
 'INRS'),

('TER_ROUTIER', 'tertiaire', null, 'routier',
 'Risque trajet-mission — déplacements professionnels',
 3, 3,
 '[
   {"type":"organisationnelle","description":"Politique sécurité routière (Plan de Déplacement Entreprise)","reference_reglementaire":"Accord ANI sécurité routière"},
   {"type":"organisationnelle","description":"Interdiction d utiliser le téléphone au volant — charte","reference_reglementaire":"Art. R412-6-1 Code route"},
   {"type":"technique","description":"Véhicules équipés mains-libres intégré","reference_reglementaire":"Art. R412-6-1 Code route"}
 ]',
 ARRAY['Art. R412-6-1 Code route'],
 'INRS'),

-- ── ERP 5e CATÉGORIE ────────────────────────────────────────
('ERP5_INCENDIE', 'erp5', null, 'incendie_explosion',
 'Risque incendie dans un ERP 5e catégorie recevant du public',
 4, 2,
 '[
   {"type":"technique","description":"Extincteurs portatifs répartis (1 pour 200 m²)","reference_reglementaire":"Art. PE 27 Règlement ERP"},
   {"type":"technique","description":"Détecteurs avertisseurs autonomes de fumée (DAAF)","reference_reglementaire":"Art. PE 26 Règlement ERP"},
   {"type":"organisationnelle","description":"Dégagement des issues de secours — aucun obstacle","reference_reglementaire":"Art. PE 6 Règlement ERP"},
   {"type":"organisationnelle","description":"Registre de sécurité tenu à jour","reference_reglementaire":"Art. R123-51 CCH"},
   {"type":"technique","description":"Éclairage de sécurité BAES","reference_reglementaire":"Art. PE 24 Règlement ERP"}
 ]',
 ARRAY['Art. PE 6 Règlement ERP','Art. PE 24 Règlement ERP','Art. PE 26 Règlement ERP','Art. PE 27 Règlement ERP'],
 'SITESECURITE'),

('ERP5_ACCESSIBILITE', 'erp5', null, 'autre',
 'Non-conformité accessibilité PMR (ERP 5e catégorie)',
 2, 3,
 '[
   {"type":"technique","description":"Cheminement accessible depuis la voirie (pente max 6%)","reference_reglementaire":"Arrêté du 8 déc. 2014"},
   {"type":"technique","description":"Largeur libre de passage ≥0,90 m aux entrées","reference_reglementaire":"Arrêté du 8 déc. 2014"},
   {"type":"organisationnelle","description":"Ad Ap (Agenda d Accessibilité Programmée) si non conforme","reference_reglementaire":"Loi 2005-102"}
 ]',
 ARRAY['Loi 2005-102','Arrêté 8 déc. 2014'],
 'INRS'),

-- ── ERP 1er GROUPE — TYPES M, N, P ──────────────────────────
('ERPM_INCENDIE_MAGASIN', 'erp1', 'M', 'incendie_explosion',
 'Risque incendie — magasin de vente (Type M) propagation rapide sur stocks',
 4, 3,
 '[
   {"type":"technique","description":"SSI (Système Sécurité Incendie) catégorie A obligatoire en 1re cat.","reference_reglementaire":"Art. M 36 Règlement ERP"},
   {"type":"technique","description":"Désenfumage des niveaux en sous-sol et espaces >300 m²","reference_reglementaire":"Art. M 15 Règlement ERP"},
   {"type":"technique","description":"Sprinklage automatique pour grandes surfaces (>3 000 m² vente)","reference_reglementaire":"Art. M 9 Règlement ERP"},
   {"type":"organisationnelle","description":"Service de sécurité incendie (SSIAP) selon catégorie","reference_reglementaire":"Décret 92-158"},
   {"type":"organisationnelle","description":"Schéma organisation sécurité (RUS) en 1re et 2e catégorie","reference_reglementaire":"Art. M 25 Règlement ERP"}
 ]',
 ARRAY['Art. M 9 Règlement ERP','Art. M 25 Règlement ERP','Art. M 36 Règlement ERP'],
 'SITESECURITE'),

('ERPN_INCENDIE_RESTAURANT', 'erp1', 'N', 'incendie_explosion',
 'Risque incendie et asphyxie — restaurant (Type N) — hotte de cuisson',
 4, 3,
 '[
   {"type":"technique","description":"Alarme type 3 obligatoire en 1re et 2e catégorie","reference_reglementaire":"Art. N 6 Règlement ERP"},
   {"type":"technique","description":"Système extinction automatique sur hotte (si cuisson grasse)","reference_reglementaire":"Art. GC 7 Règlement ERP"},
   {"type":"technique","description":"Ventilation cuisine : 40 vol/h minimum","reference_reglementaire":"Art. N 7 Règlement ERP"},
   {"type":"organisationnelle","description":"Nettoyage des conduits de ventilation au moins 2 fois/an","reference_reglementaire":"Arrêté 14 fév. 2000"},
   {"type":"epi","description":"Extincteur CO2 et poudre à proximité des appareils de cuisson","reference_reglementaire":"Art. N 11 Règlement ERP"}
 ]',
 ARRAY['Art. N 6 Règlement ERP','Art. N 7 Règlement ERP','Art. N 11 Règlement ERP'],
 'SITESECURITE'),

('ERPP_SECURITE_FOULE', 'erp1', 'P', 'incendie_explosion',
 'Sécurité du public — salle de danse et discothèque (Type P) — panique et bousculade',
 4, 3,
 '[
   {"type":"technique","description":"Alarme sonore perceptible au-dessus de la musique","reference_reglementaire":"Art. P 12 Règlement ERP"},
   {"type":"technique","description":"Eclairage de sécurité NF EN 60598-2-22 — durée 1h mini","reference_reglementaire":"Art. P 13 Règlement ERP"},
   {"type":"organisationnelle","description":"Capacité d accueil affichée — interdiction de dépassement","reference_reglementaire":"Art. GN 6 Règlement ERP"},
   {"type":"organisationnelle","description":"SSIAP 1 minimum si >300 personnes","reference_reglementaire":"Décret 92-158"},
   {"type":"organisationnelle","description":"Personnel formé à l évacuation et exercice annuel","reference_reglementaire":"Art. R4227-39 C.trav."}
 ]',
 ARRAY['Art. P 12 Règlement ERP','Art. P 13 Règlement ERP','Décret 92-158'],
 'SITESECURITE'),

('ERPP_BRUIT_DISCOTEQUE', 'erp1', 'P', 'bruit',
 'Exposition au bruit — salle de danse (>80 dB) — salariés et public',
 3, 4,
 '[
   {"type":"technique","description":"Limiteur de pression acoustique (LPA) obligatoire depuis 1998","reference_reglementaire":"Décret 98-1143 du 15 déc. 1998"},
   {"type":"technique","description":"Niveau sonore moyen ≤102 dB(A) — crête ≤135 dB(C)","reference_reglementaire":"Art. 4 Décret 98-1143"},
   {"type":"epi","description":"Protecteurs auditifs fournis et disponibles à l entrée pour le public","reference_reglementaire":"Art. 8 Décret 98-1143"},
   {"type":"surveillance","description":"Audiogramme annuel pour salariés exposés","reference_reglementaire":"Art. R4431-5 C.trav."}
 ]',
 ARRAY['Décret 98-1143','Art. R4431-5 C.trav.'],
 'INRS'),

-- ── RISQUES COMMUNS (tous secteurs) ─────────────────────────
('COM_INCENDIE_LOCAUX', 'commun', null, 'incendie_explosion',
 'Risque incendie général — locaux de travail',
 4, 2,
 '[
   {"type":"technique","description":"Extincteurs vérifiés annuellement par technicien agréé","reference_reglementaire":"Art. R4227-28 C.trav."},
   {"type":"technique","description":"Issues de secours dégagées et signalisées","reference_reglementaire":"Art. R4227-4 C.trav."},
   {"type":"organisationnelle","description":"Consignes incendie affichées + exercice évacuation annuel","reference_reglementaire":"Art. R4227-39 C.trav."},
   {"type":"formation","description":"Sauveteur Secouriste du Travail (SST) désigné","reference_reglementaire":"Art. R4224-15 C.trav."}
 ]',
 ARRAY['Art. R4227-28 C.trav.','Art. R4227-39 C.trav.'],
 'INRS'),

('COM_CHUTE_PLAIN_PIED', 'commun', null, 'chute_de_plain_pied',
 'Chute de plain-pied — sols glissants, encombrements, câbles',
 2, 4,
 '[
   {"type":"technique","description":"Sols antidérapants classés R9 minimum en zones humides","reference_reglementaire":"Art. R4224-4 C.trav."},
   {"type":"technique","description":"Éclairage suffisant : 200 lux minimum dans les circulations","reference_reglementaire":"NF EN 12464-1"},
   {"type":"organisationnelle","description":"Rangement quotidien — politique 5S","reference_reglementaire":"Art. R4224-1 C.trav."}
 ]',
 ARRAY['Art. R4224-1 C.trav.','Art. R4224-4 C.trav.'],
 'INRS'),

('COM_COVID_BIOLOGIQUE', 'commun', null, 'biologique',
 'Risque biologique — agents infectieux (virus, bactéries)',
 3, 2,
 '[
   {"type":"technique","description":"Ventilation suffisante des locaux (débit min 25 m³/h/pers)","reference_reglementaire":"Art. R4222-6 C.trav."},
   {"type":"epi","description":"Masques FFP2 si risque biologique avéré","reference_reglementaire":"Art. R4424-3 C.trav."},
   {"type":"organisationnelle","description":"Plan de continuité d activité et protocole sanitaire","reference_reglementaire":"Art. L4121-3-1 C.trav."}
 ]',
 ARRAY['Art. R4222-6 C.trav.','Art. R4424-3 C.trav.'],
 'INRS');

