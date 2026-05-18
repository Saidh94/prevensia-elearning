#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Patch script: adds chapterLabel fields to ATEX and ATEX-niveau1 quiz questions.
Run once:
    python patch_chapterlabels.py
"""

import re

FILE = r"C:\Users\si-ri\OneDrive\Documents\prevensia-elearning-main\app\modules\[slug]\quiz\content.ts"

# ---------------------------------------------------------------------------
# Each entry: (unique_substring_in_question, chapterLabel_to_insert)
# ---------------------------------------------------------------------------

PATCHES = [
    # ── ATEX section (questions without chapterLabel, before "Intervention & maintenance") ──

    # Q1
    (
        "Que signifie ATEX ?",
        "Atmosphères explosives",
    ),
    # Q2
    (
        "Combien de conditions simultanées sont nécessaires pour qu’une explosion se produise ?",
        "Atmosphères explosives",
    ),
    # Q3
    (
        "Quelle est la différence entre la LIE et la LSE ?",
        "Atmosphères explosives",
    ),
    # Q4
    (
        "Quelle directive européenne encadre la protection des travailleurs exposés aux risques ATEX sur les lieux de travail ?",
        "Réglementation ATEX",
    ),
    # Q5
    (
        "Quelle est la classification correcte de la Zone 1 en ATEX gaz ?",
        "Zonage & classification",
    ),
    # Q6
    (
        "Dans quelle zone ATEX poussières classe-t-on l’intérieur d’un silo à farine en fonctionnement ?",
        "Zonage & classification",
    ),
    # Q7
    (
        "Quelle catégorie d’équipement Ex est requise pour une utilisation en Zone 0 (gaz) ?",
        "Équipements Ex",
    ),
    # Q8
    (
        "Que signifie le marquage ‘Ex’ sur un équipement ?",
        "Équipements Ex",
    ),
    # Q9
    (
        "Parmi ces situations, laquelle peut constituer une source d’inflammation en zone ATEX ?",
        "Prévention & contrôles",
    ),
    # Q10
    (
        "À quel seuil de concentration l’alarme d’un explosimètre portable doit-elle être réglée pour permettre une évacuation sans danger ?",
        "Prévention & contrôles",
    ),
    # Q11
    (
        "Qu’est-ce que le DRPE ?",
        "Réglementation ATEX",
    ),
    # Q12
    (
        "Quelles normes de vêtements de travail sont requises en zone ATEX pour éviter les risques d’inflammation par électricité statique ?",
        "Prévention & contrôles",
    ),
    # Q13
    (
        "Quel document est obligatoire avant de réaliser des travaux par points chauds (soudure, meulage) en zone ATEX ?",
        "Prévention & contrôles",
    ),
    # Q14
    (
        "Quelle est la première action à entreprendre lorsque l’alarme de votre explosimètre se déclenche en zone ATEX ?",
        "Prévention & contrôles",
    ),
    # Q15
    (
        "Un salarié peut-il se retirer d’une zone ATEX s’il estime que la situation présente un danger grave et imminent ?",
        "Réglementation ATEX",
    ),
    # Q16
    (
        "Parmi les secteurs suivants, lesquels présentent un risque ATEX lié aux poussières ?",
        "Atmosphères explosives",
    ),
    # Q17
    (
        "Quel pictogramme signale une zone ATEX réglementaire ?",
        "Réglementation ATEX",
    ),
    # Q18
    (
        "Qu’est-ce que l’inertage d’une atmosphère et pourquoi est-il utilisé en zone ATEX ?",
        "Prévention & contrôles",
    ),
    # Q19
    (
        "Un technicien doit intervenir sur une vanne en Zone 1 (gaz). Il ne possède pas d’autorisation de travail pour cette zone. Que doit-il faire ?",
        "Prévention & contrôles",
    ),
    # Q20
    (
        "Parmi ces mesures de prévention, laquelle agit directement sur la suppression de la source de combustible en zone ATEX ?",
        "Prévention & contrôles",
    ),

    # ── ATEX-niveau1 section ────────────────────────────────────────────────

    # "Physique de l'explosion" — CME, LIE/LSE, TAI, point éclair, énergie minimale d'inflammation
    (
        "Qu’est-ce que la Concentration Minimale d’Explosivité (CME) pour les poussières ?",
        "Physique de l’explosion",
    ),
    (
        "Qu’est-ce que la Température d’Auto-Inflammation (TAI) et pourquoi est-elle critique pour le choix d’un équipement Ex ?",
        "Physique de l’explosion",
    ),
    (
        "Selon le guide INERIS Omega 36, pour un liquide inflammable, quelle règle de classification en Zone 1 s’applique en conditions normales d’exploitation ?",
        "Physique de l’explosion",
    ),
    (
        "Comment s’appelle la valeur caractéristique d’un liquide inflammable qui correspond à la température minimale à laquelle il produit suffisamment de vapeurs pour former un mélange explosif avec l’air ?",
        "Physique de l’explosion",
    ),

    # "Zonage ATEX"
    (
        "Quel est l’équipement de catégorie 2G requis en Zone 1 (gaz) selon la correspondance ATEX ?",
        "Zonage ATEX",
    ),

    # "Équipements Ex" — marquage, sélection, remplacement, inspection
    (
        "Sur le marquage Ex II 2G Ex d flIIC T5 Gb — que signifie le groupe de gaz ‘IIC’ ?",
        "Équipements Ex",
    ),
    (
        "Quelle norme encadre la vérification initiale et périodique des installations électriques en zone ATEX (appareillage Ex) ?",
        "Équipements Ex",
    ),
    (
        "Quelle est la signification du mode de protection ‘d’ (boîtier antidéflagrant) dans le marquage Ex d IIC T4 ?",
        "Équipements Ex",
    ),
    (
        "Selon l’INERIS (Omega 36), quelles sont les 3 situations de maintenance des équipements Ex qui nécessitent des procédures spécifiques ?",
        "Équipements Ex",
    ),
    (
        "Un outil en acier standard (marteau, clé) est-il utilisable en zone ATEX de manière générale ?",
        "Équipements Ex",
    ),

    # "Contrôle atmosphérique" — détecteurs portables, seuils d'alarme, procédure de mesure
    (
        "Selon l’INERIS (Omega 36), quel est le risque majeur lié à l’utilisation d’un explosimètre étalonné au propane pour détecter du méthane ?",
        "Contrôle atmosphérique",
    ),
    (
        "À quelle fréquence minimale un explosimètre portable doit-il être étalonné selon les bonnes pratiques et les recommandations INERIS ?",
        "Contrôle atmosphérique",
    ),

    # "Intervention en zone" — permis de travail, co-activité, procédures d'entrée
    (
        "Que couvre exactement l’Autorisation de Travail (AT) en zone ATEX selon l’article R.4515-8 du Code du travail ?",
        "Intervention en zone",
    ),
    (
        "Quelle est la distance de sécurité minimale à respecter entre des travaux par points chauds et une source potentielle de gaz inflammable selon les bonnes pratiques ATEX ?",
        "Intervention en zone",
    ),
    (
        "Quelle norme définit les exigences pour les vêtements antistatiques à porter en zone ATEX ?",
        "Intervention en zone",
    ),
    (
        "Pourquoi les chaussures de sécurité standard (non-ESD) sont-elles interdites en zone ATEX ?",
        "Intervention en zone",
    ),
    (
        "En cas de détection d’une odeur de gaz en zone ATEX, quelle séquence d’actions est correcte ?",
        "Intervention en zone",
    ),
    (
        "Quelle est la durée de validité d’un avis d’habilitation ATEX et quelle action est requise à son échéance ?",
        "Intervention en zone",
    ),
    (
        "Pourquoi l’humidité est-elle un paramètre important dans la gestion du risque ATEX lié aux poussières ?",
        "Intervention en zone",
    ),
    (
        "Une mise à la terre est réalisée avant de commencer des travaux de maintenance sur une tuyauterie contenant des hydrocarbures en zone ATEX. Quel risque cette mesure permet-elle d’éliminer ?",
        "Intervention en zone",
    ),
    (
        "Parmi ces EPI, lesquels sont OBLIGATOIRES pour un intervenant travaillant en Zone 1 (gaz) lors d’une opération de maintenance ?",
        "Intervention en zone",
    ),
    (
        "Quel article du Code du travail fixe l’obligation pour l’employeur d’établir le Document Relatif à la Protection Contre les Explosions (DRPCE) ?",
        "Intervention en zone",
    ),
    (
        "Vous travaillez en Zone 2 (gaz) sur une opération de nettoyage de routine. Votre collègue propose d’utiliser un aspirateur industriel standard pour nettoyer plus rapidement. Quelle est votre réaction correcte ?",
        "Intervention en zone",
    ),
]

# ---------------------------------------------------------------------------

def add_chapter_label(text, question_substr, label):
    """
    Find the question block containing `question_substr`, then locate the
    answer/multiple line and insert `chapterLabel: "label",` before `explanation:`.
    Skip if chapterLabel already present in that block.
    """
    q_escaped = re.escape(question_substr)

    # Match from the question text up to (but not including) explanation:
    pattern = re.compile(
        r'(question:\s*"' + q_escaped + r'".*?)(^\s*explanation:\s*)',
        re.DOTALL | re.MULTILINE,
    )

    def replacer(m):
        block = m.group(1)
        expl  = m.group(2)

        if 'chapterLabel:' in block:
            return m.group(0)  # already labelled, skip

        # Determine indentation from the explanation line
        indent_match = re.match(r'(\s*)', expl)
        indent = indent_match.group(1) if indent_match else '    '

        insertion = f'{indent}chapterLabel: "{label}",\n'
        return block + insertion + expl

    new_text, n = pattern.subn(replacer, text)
    if n == 0:
        print(f"  [WARN] Pattern not found for: {question_substr[:80]!r}")
    return new_text


def main():
    print(f"Reading {FILE} ...")
    with open(FILE, encoding="utf-8") as f:
        content = f.read()

    original_count = content.count('chapterLabel:')
    print(f"  chapterLabel occurrences before: {original_count}")

    for question_substr, label in PATCHES:
        content = add_chapter_label(content, question_substr, label)

    new_count = content.count('chapterLabel:')
    added = new_count - original_count

    if added == 0:
        print("No new chapterLabel fields added (all may already be present).")
    else:
        with open(FILE, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Done. chapterLabel fields added: {added} (total now: {new_count})")


if __name__ == "__main__":
    main()
