"use client";

import { useState } from "react";

// ─────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────
const TRANSLATIONS = {
  "Global (EN)": {
    lastUpdated: "Last Updated: Dec 09, 2025",
    downloadBtn: "Download All (PDF)",
    contactTitle: "Questions?",
    contactDesc: "Email legal@clientforce.ai or submit a request. We typically respond within 2 business days.",
    contactBtn: "Contact Legal",
    summaryLabel: "Summary",
    fullTermsLabel: "Full Terms (Preview)",
    sections: [
      {
        id: "terms", label: "Terms of Service",
        summary: [
          "Your account: You must provide accurate info and keep credentials secure.",
          "License: Non-exclusive, non-transferable use of the platform for lawful business purposes.",
          "Payments: Subscription fees, renewals, taxes. Trials and promotions disclosed at checkout.",
          "Cancellations: Cancel anytime; access remains until end of term. See Refund Policy.",
          "Prohibited uses: Spam, unlawful contact, scraping without consent, harassment.",
          "Liability: Platform provided 'as is' with standard limitations and indemnities.",
          "Governing law & disputes: Venue specified by your region selection above.",
        ],
        fullTerms: "[ Placeholder for long-form legal text with sections: Definitions, Accounts, Fees, Trials, Term & Termination, Upgrades/Downgrades, Fair Use, Data Ownership, Confidentiality, Warranty, Indemnity, Limitation of Liability, Export Controls, Changes to Terms. ]",
      },
      {
        id: "privacy", label: "Privacy Policy",
        summary: [
          "Data collected: Account info, usage data, communications, and third-party integrations.",
          "Use of data: To provide services, improve the platform, and communicate with you.",
          "Data sharing: We do not sell your data. Limited sharing with processors under DPA.",
          "Retention: Data retained as long as your account is active or as required by law.",
          "Your rights: Access, correction, deletion, and portability requests honored within 30 days.",
          "Cookies: Used for authentication, preferences, and analytics. See Cookie Policy.",
          "Contact: privacy@clientforce.ai for all privacy-related inquiries.",
        ],
        fullTerms: "[ Placeholder for long-form privacy policy text with sections: Data Controller, Categories of Data, Legal Basis, Retention Periods, International Transfers, Your Rights, Children's Privacy, Policy Changes. ]",
      },
      {
        id: "dpa", label: "Data Processing Addendum (DPA)",
        summary: [
          "Scope: Applies to all personal data processed by ClientForce on behalf of the customer.",
          "Roles: Customer is data controller; ClientForce is data processor.",
          "Instructions: ClientForce processes data only on documented customer instructions.",
          "Sub-processors: List maintained and updated at clientforce.ai/sub-processors.",
          "Security: Appropriate technical and organizational measures in place.",
          "Data transfers: Standard Contractual Clauses applied for cross-border transfers.",
          "Breach notification: Customers notified within 72 hours of confirmed breach.",
        ],
        fullTerms: "[ Placeholder for long-form DPA text with sections: Definitions, Processing Details, Processor Obligations, Sub-processor Management, Data Subject Rights Assistance, Security Measures, Audit Rights, Deletion/Return of Data. ]",
      },
      {
        id: "cookie", label: "Cookie Policy",
        summary: [
          "What are cookies: Small text files stored on your device by your browser.",
          "Types used: Strictly necessary, functional, analytics, and marketing cookies.",
          "Third-party cookies: Analytics and advertising partners may set their own cookies.",
          "Duration: Session cookies expire when you close your browser; persistent cookies last up to 2 years.",
          "Your choices: Manage preferences via our cookie banner or browser settings.",
          "Do Not Track: We honor DNT signals where technically feasible.",
          "Updates: This policy is reviewed and updated annually or after significant changes.",
        ],
        fullTerms: "[ Placeholder for long-form cookie policy text with sections: Cookie Categories, Third-Party Services, Consent Management, Browser Controls, Opt-Out Links, Policy Updates. ]",
      },
      {
        id: "acceptable", label: "Acceptable Use",
        summary: [
          "Permitted use: Platform may only be used for lawful outreach and business purposes.",
          "Prohibited: Spam, phishing, unsolicited bulk messaging, or deceptive practices.",
          "Data scraping: Automated data collection without written consent is prohibited.",
          "Content standards: No harassment, hate speech, or illegal content via platform.",
          "Account sharing: Credentials may not be shared across unauthorized users.",
          "Reporting: Violations can be reported to abuse@clientforce.ai.",
          "Enforcement: Violations may result in suspension or termination without refund.",
        ],
        fullTerms: "[ Placeholder for long-form acceptable use policy with sections: Scope, Prohibited Activities, Content Requirements, Account Integrity, Monitoring Rights, Enforcement Actions, Appeal Process. ]",
      },
      {
        id: "security", label: "Security & Compliance",
        summary: [
          "Infrastructure: Hosted on SOC 2 Type II certified cloud infrastructure.",
          "Encryption: Data encrypted at rest (AES-256) and in transit (TLS 1.2+).",
          "Access control: Role-based access with MFA enforced for all admin accounts.",
          "Penetration testing: Annual third-party pen tests; results available under NDA.",
          "Compliance: GDPR, CCPA, and CAN-SPAM compliant by design.",
          "Incident response: Documented IR plan with defined RTO and RPO.",
          "Certifications: SOC 2, ISO 27001 in progress. Certificates available on request.",
        ],
        fullTerms: "[ Placeholder for long-form security documentation with sections: Infrastructure Overview, Encryption Standards, Access Management, Vulnerability Management, Incident Response, Business Continuity, Audit & Certifications. ]",
      },
      {
        id: "subprocessors", label: "Sub processors",
        summary: [
          "Definition: Sub-processors are third parties that process data on our behalf.",
          "Current list: Maintained at clientforce.ai/sub-processors with categories and locations.",
          "Notification: 30-day advance notice provided for new sub-processor additions.",
          "Objection: Customers may object to new sub-processors in writing within 14 days.",
          "Contracts: All sub-processors bound by data protection agreements.",
          "Transfers: Sub-processors outside EEA covered by SCCs or adequacy decisions.",
          "Updates: List reviewed quarterly and updated as vendor relationships change.",
        ],
        fullTerms: "[ Placeholder for sub-processor list with columns: Provider Name, Service Category, Data Processed, Processing Location, Legal Basis for Transfer. ]",
      },
      {
        id: "sla", label: "SLA & Support",
        summary: [
          "Uptime commitment: 99.9% monthly uptime SLA for all paid plans.",
          "Measurement: Uptime calculated excluding scheduled maintenance windows.",
          "Credits: Service credits issued for downtime exceeding SLA thresholds.",
          "Support tiers: Email (all plans), priority chat (Pro), dedicated CSM (Enterprise).",
          "Response times: P1 critical — 2 hrs; P2 high — 8 hrs; P3 normal — 2 business days.",
          "Exclusions: Force majeure, customer-caused outages, and beta features excluded.",
          "Status page: Real-time status at status.clientforce.ai.",
        ],
        fullTerms: "[ Placeholder for SLA documentation with sections: Uptime Definition, Credit Calculation, Support Tiers, Escalation Paths, Maintenance Windows, Exclusions, Reporting. ]",
      },
      {
        id: "refund", label: "Refund & Cancellation",
        summary: [
          "Cancellation: Cancel anytime via account settings; no cancellation fees.",
          "Access: Service access continues until end of current billing period.",
          "Refunds: Monthly plans — no refunds. Annual plans — pro-rata refund within 14 days.",
          "Trials: Free trial cancellations result in no charge.",
          "Downgrades: Take effect at next billing cycle; no partial-period credits.",
          "Disputes: Billing disputes must be raised within 60 days of charge.",
          "Process: Approved refunds processed within 5–10 business days.",
        ],
        fullTerms: "[ Placeholder for refund and cancellation policy with sections: Cancellation Process, Refund Eligibility, Trial Periods, Downgrade Policy, Dispute Resolution, Exceptions. ]",
      },
      {
        id: "licensing", label: "Licensing & IP",
        summary: [
          "Platform license: Limited, non-exclusive, non-transferable right to use the platform.",
          "Your content: You retain all rights to data and content you upload.",
          "Our IP: ClientForce retains all rights to the platform, brand, and technology.",
          "Feedback: Any feedback provided may be used by ClientForce without obligation.",
          "Restrictions: No reverse engineering, decompiling, or derivative works permitted.",
          "Trademarks: ClientForce name and logo may not be used without written permission.",
          "Open source: Some components licensed under MIT or Apache 2.0 — see NOTICES file.",
        ],
        fullTerms: "[ Placeholder for licensing and IP policy with sections: License Grant, Customer Data Rights, Platform IP, Feedback License, Usage Restrictions, Trademark Policy, Open Source Notices. ]",
      },
      {
        id: "contact", label: "Contact & Legal Notices",
        summary: [
          "Legal notices: Must be sent in writing to legal@clientforce.ai or registered address.",
          "Registered address: ClientForce Inc., 123 Market Street, Suite 400, San Francisco, CA 94105.",
          "DMCA: Copyright claims submitted to dmca@clientforce.ai with required information.",
          "Subpoenas: Law enforcement requests directed to legal@clientforce.ai.",
          "Language: English is the controlling language for all legal documents.",
          "Governing law: State of Delaware, USA, unless local law requires otherwise.",
          "Response time: Legal inquiries acknowledged within 2 business days.",
        ],
        fullTerms: "[ Placeholder for contact and legal notices section with fields: Mailing Address, Email Contacts by Department, DMCA Agent, Law Enforcement Contact, Registered Agent Details. ]",
      },
    ],
  },

  "French (FR)": {
    lastUpdated: "Dernière mise à jour : 09 déc. 2025",
    downloadBtn: "Tout télécharger (PDF)",
    contactTitle: "Des questions ?",
    contactDesc: "Envoyez un e-mail à legal@clientforce.ai ou soumettez une demande. Nous répondons généralement sous 2 jours ouvrables.",
    contactBtn: "Contacter le service juridique",
    summaryLabel: "Résumé",
    fullTermsLabel: "Conditions complètes (Aperçu)",
    sections: [
      {
        id: "terms", label: "Conditions d'utilisation",
        summary: [
          "Votre compte : Vous devez fournir des informations exactes et sécuriser vos identifiants.",
          "Licence : Utilisation non exclusive et non transférable de la plateforme à des fins légales.",
          "Paiements : Frais d'abonnement, renouvellements, taxes. Essais et promotions divulgués à la caisse.",
          "Résiliations : Résiliation à tout moment ; accès maintenu jusqu'à la fin du terme. Voir la Politique de remboursement.",
          "Utilisations interdites : Spam, contact illicite, extraction de données sans consentement, harcèlement.",
          "Responsabilité : Plateforme fournie « telle quelle » avec des limitations standard.",
          "Droit applicable : Le lieu est précisé par la sélection de votre région ci-dessus.",
        ],
        fullTerms: "[ Espace réservé pour le texte juridique complet : Définitions, Comptes, Frais, Essais, Durée et résiliation, Mises à niveau, Utilisation équitable, Propriété des données, Confidentialité, Garantie, Indemnisation, Limitation de responsabilité, Contrôles à l'exportation, Modifications des conditions. ]",
      },
      {
        id: "privacy", label: "Politique de confidentialité",
        summary: [
          "Données collectées : Informations de compte, données d'utilisation, communications et intégrations tierces.",
          "Utilisation des données : Pour fournir les services, améliorer la plateforme et communiquer avec vous.",
          "Partage des données : Nous ne vendons pas vos données. Partage limité avec les sous-traitants.",
          "Conservation : Données conservées tant que votre compte est actif ou selon les exigences légales.",
          "Vos droits : Accès, correction, suppression et portabilité honorés sous 30 jours.",
          "Cookies : Utilisés pour l'authentification, les préférences et l'analyse.",
          "Contact : privacy@clientforce.ai pour toute question relative à la vie privée.",
        ],
        fullTerms: "[ Espace réservé pour la politique de confidentialité complète avec les sections : Responsable du traitement, Catégories de données, Base légale, Durées de conservation, Transferts internationaux, Vos droits, Vie privée des enfants, Modifications de la politique. ]",
      },
      { id: "dpa", label: "Avenant sur le traitement des données (DPA)", summary: ["Champ d'application : S'applique à toutes les données personnelles traitées par ClientForce.", "Rôles : Le client est responsable du traitement ; ClientForce est sous-traitant.", "Instructions : ClientForce traite les données uniquement sur instructions documentées.", "Sous-traitants : Liste maintenue sur clientforce.ai/sub-processors.", "Sécurité : Mesures techniques et organisationnelles appropriées en place.", "Transferts de données : Clauses contractuelles types appliquées.", "Notification de violation : Clients notifiés sous 72 heures."], fullTerms: "[ Espace réservé pour le DPA complet. ]" },
      { id: "cookie", label: "Politique relative aux cookies", summary: ["Que sont les cookies : Petits fichiers texte stockés sur votre appareil.", "Types utilisés : Strictement nécessaires, fonctionnels, analytiques et marketing.", "Cookies tiers : Les partenaires peuvent définir leurs propres cookies.", "Durée : Les cookies de session expirent à la fermeture du navigateur.", "Vos choix : Gérez les préférences via notre bannière de cookies.", "Ne pas pister : Nous respectons les signaux DNT.", "Mises à jour : Politique révisée annuellement."], fullTerms: "[ Espace réservé pour la politique complète relative aux cookies. ]" },
      { id: "acceptable", label: "Utilisation acceptable", summary: ["Utilisation autorisée : Uniquement pour des activités légales.", "Interdit : Spam, hameçonnage, messagerie en masse non sollicitée.", "Extraction de données : Collecte automatisée sans consentement interdite.", "Normes de contenu : Pas de harcèlement ni de discours haineux.", "Partage de compte : Les identifiants ne peuvent pas être partagés.", "Signalement : Violations à signaler à abuse@clientforce.ai.", "Application : Les violations peuvent entraîner une suspension."], fullTerms: "[ Espace réservé pour la politique d'utilisation acceptable complète. ]" },
      { id: "security", label: "Sécurité et conformité", summary: ["Infrastructure : Hébergée sur une infrastructure certifiée SOC 2 Type II.", "Chiffrement : Données chiffrées au repos (AES-256) et en transit (TLS 1.2+).", "Contrôle d'accès : Accès basé sur les rôles avec MFA.", "Tests de pénétration : Tests annuels par des tiers.", "Conformité : RGPD, CCPA et CAN-SPAM.", "Réponse aux incidents : Plan IR documenté.", "Certifications : SOC 2, ISO 27001 en cours."], fullTerms: "[ Espace réservé pour la documentation complète sur la sécurité. ]" },
      { id: "subprocessors", label: "Sous-traitants", summary: ["Définition : Tiers qui traitent des données en notre nom.", "Liste actuelle : Maintenue sur clientforce.ai/sub-processors.", "Notification : Préavis de 30 jours pour les nouveaux sous-traitants.", "Objection : Les clients peuvent s'opposer dans les 14 jours.", "Contrats : Tous les sous-traitants sont liés par des accords.", "Transferts : Couverts par des CCT.", "Mises à jour : Liste révisée trimestriellement."], fullTerms: "[ Espace réservé pour la liste des sous-traitants. ]" },
      { id: "sla", label: "SLA & Support", summary: ["Engagement de disponibilité : SLA de 99,9 % de disponibilité mensuelle.", "Mesure : Calculée hors fenêtres de maintenance.", "Crédits : Crédits de service émis en cas de dépassement.", "Niveaux de support : Email (tous les plans), chat prioritaire (Pro).", "Délais de réponse : P1 critique — 2 h ; P2 élevé — 8 h.", "Exclusions : Force majeure, pannes causées par le client.", "Page de statut : status.clientforce.ai."], fullTerms: "[ Espace réservé pour la documentation SLA complète. ]" },
      { id: "refund", label: "Remboursement et annulation", summary: ["Annulation : À tout moment via les paramètres du compte.", "Accès : Maintenu jusqu'à la fin de la période de facturation.", "Remboursements : Plans mensuels — pas de remboursement. Plans annuels — remboursement au prorata sous 14 jours.", "Essais : Annulations d'essai gratuit sans frais.", "Rétrogradations : Effectives au prochain cycle de facturation.", "Litiges : À soumettre sous 60 jours.", "Processus : Remboursements approuvés sous 5 à 10 jours ouvrables."], fullTerms: "[ Espace réservé pour la politique de remboursement complète. ]" },
      { id: "licensing", label: "Licence et propriété intellectuelle", summary: ["Licence de plateforme : Droit d'utilisation limité, non exclusif et non transférable.", "Votre contenu : Vous conservez tous les droits sur vos données.", "Notre propriété intellectuelle : ClientForce conserve tous les droits.", "Retours : Tout retour peut être utilisé sans obligation.", "Restrictions : Pas d'ingénierie inverse ni de décompilation.", "Marques : Utilisation soumise à autorisation écrite.", "Open source : Certains composants sous licence MIT ou Apache 2.0."], fullTerms: "[ Espace réservé pour la politique complète sur les licences et la propriété intellectuelle. ]" },
      { id: "contact", label: "Contact et avis juridiques", summary: ["Avis juridiques : Envoyés par écrit à legal@clientforce.ai.", "Adresse : ClientForce Inc., 123 Market Street, Suite 400, San Francisco, CA 94105.", "DMCA : Réclamations soumises à dmca@clientforce.ai.", "Citations à comparaître : Dirigées vers legal@clientforce.ai.", "Langue : L'anglais est la langue officielle.", "Droit applicable : État du Delaware, États-Unis.", "Délai de réponse : Sous 2 jours ouvrables."], fullTerms: "[ Espace réservé pour les coordonnées et avis juridiques. ]" },
    ],
  },

  "German (DE)": {
    lastUpdated: "Zuletzt aktualisiert: 09. Dez. 2025",
    downloadBtn: "Alle herunterladen (PDF)",
    contactTitle: "Fragen?",
    contactDesc: "Senden Sie eine E-Mail an legal@clientforce.ai oder stellen Sie eine Anfrage. Wir antworten in der Regel innerhalb von 2 Werktagen.",
    contactBtn: "Rechtsabteilung kontaktieren",
    summaryLabel: "Zusammenfassung",
    fullTermsLabel: "Vollständige Bedingungen (Vorschau)",
    sections: [
      { id: "terms", label: "Nutzungsbedingungen", summary: ["Ihr Konto: Genaue Angaben und sichere Anmeldedaten erforderlich.", "Lizenz: Nicht exklusive, nicht übertragbare Nutzung der Plattform.", "Zahlungen: Abonnementgebühren, Verlängerungen, Steuern.", "Stornierungen: Jederzeit kündbar; Zugang bis zum Laufzeitende.", "Verbotene Nutzung: Spam, unerlaubter Kontakt, Scraping.", "Haftung: Plattform wird „wie besehen' bereitgestellt.', 'Geltendes Recht: Gerichtsstand laut Regionalauswahl."], fullTerms: "[ Platzhalter für vollständige Nutzungsbedingungen. ]" },
      { id: "privacy", label: "Datenschutzrichtlinie", summary: ["Erhobene Daten: Kontoinformationen, Nutzungsdaten, Kommunikation.", "Datennutzung: Zur Bereitstellung von Diensten und zur Verbesserung der Plattform.", "Datenweitergabe: Wir verkaufen Ihre Daten nicht.", "Aufbewahrung: Daten werden so lange aufbewahrt wie Ihr Konto aktiv ist.", "Ihre Rechte: Zugang, Berichtigung, Löschung innerhalb von 30 Tagen.", "Cookies: Für Authentifizierung und Analysen verwendet.", "Kontakt: privacy@clientforce.ai."], fullTerms: "[ Platzhalter für vollständige Datenschutzrichtlinie. ]" },
      { id: "dpa", label: "Datenverarbeitungsvereinbarung (DPA)", summary: ["Geltungsbereich: Alle von ClientForce verarbeiteten personenbezogenen Daten.", "Rollen: Kunde ist Verantwortlicher; ClientForce ist Auftragsverarbeiter.", "Anweisungen: Verarbeitung nur gemäß dokumentierter Anweisungen.", "Unterauftragsverarbeiter: Liste unter clientforce.ai/sub-processors.", "Sicherheit: Geeignete technische Maßnahmen.", "Datenübertragungen: Standardvertragsklauseln angewendet.", "Verletzungsmeldung: Benachrichtigung innerhalb von 72 Stunden."], fullTerms: "[ Platzhalter für vollständige DPA. ]" },
      { id: "cookie", label: "Cookie-Richtlinie", summary: ["Was sind Cookies: Kleine Textdateien auf Ihrem Gerät.", "Verwendete Typen: Notwendig, funktional, analytisch, Marketing.", "Drittanbieter-Cookies: Partner können eigene Cookies setzen.", "Dauer: Sitzungscookies enden beim Schließen des Browsers.", "Ihre Auswahl: Verwaltung über Cookie-Banner.", "Do Not Track: DNT-Signale werden respektiert.", "Aktualisierungen: Jährlich überprüft."], fullTerms: "[ Platzhalter für vollständige Cookie-Richtlinie. ]" },
      { id: "acceptable", label: "Akzeptable Nutzung", summary: ["Erlaubte Nutzung: Nur für rechtmäßige Zwecke.", "Verboten: Spam, Phishing, unerwünschte Massennachrichten.", "Datenscraping: Ohne Zustimmung verboten.", "Inhaltsstandards: Kein Harassment oder Hassrede.", "Kontoteilung: Anmeldedaten nicht teilbar.", "Meldung: Verstöße an abuse@clientforce.ai.", "Durchsetzung: Verstöße können zur Sperrung führen."], fullTerms: "[ Platzhalter für vollständige Nutzungsrichtlinie. ]" },
      { id: "security", label: "Sicherheit & Compliance", summary: ["Infrastruktur: SOC 2 Typ II zertifiziert.", "Verschlüsselung: AES-256 im Ruhezustand, TLS 1.2+ im Transit.", "Zugangskontrolle: Rollenbasiert mit MFA.", "Penetrationstests: Jährlich durch Dritte.", "Compliance: DSGVO, CCPA, CAN-SPAM.", "Incident Response: Dokumentierter IR-Plan.", "Zertifikate: SOC 2, ISO 27001 in Bearbeitung."], fullTerms: "[ Platzhalter für vollständige Sicherheitsdokumentation. ]" },
      { id: "subprocessors", label: "Unterauftragsverarbeiter", summary: ["Definition: Dritte, die Daten in unserem Auftrag verarbeiten.", "Aktuelle Liste: clientforce.ai/sub-processors.", "Benachrichtigung: 30 Tage Vorankündigung.", "Einspruch: Innerhalb von 14 Tagen schriftlich.", "Verträge: Alle sind vertraglich gebunden.", "Übertragungen: Durch Standardvertragsklauseln abgedeckt.", "Updates: Vierteljährlich überprüft."], fullTerms: "[ Platzhalter für Unterauftragsverarbeiterliste. ]" },
      { id: "sla", label: "SLA & Support", summary: ["Verfügbarkeitszusage: 99,9 % monatliche Betriebszeit.", "Messung: Ohne Wartungsfenster berechnet.", "Gutschriften: Bei Überschreitung der SLA-Schwellen.", "Support-Stufen: E-Mail (alle Pläne), Chat (Pro).", "Reaktionszeiten: P1 — 2 Std; P2 — 8 Std.", "Ausschlüsse: Höhere Gewalt, kundenseitige Ausfälle.", "Statusseite: status.clientforce.ai."], fullTerms: "[ Platzhalter für vollständige SLA-Dokumentation. ]" },
      { id: "refund", label: "Erstattung & Kündigung", summary: ["Kündigung: Jederzeit über Kontoeinstellungen.", "Zugang: Bis zum Ende der Abrechnungsperiode.", "Erstattungen: Monatliche Pläne — keine Erstattung. Jahrespläne — anteilig.", "Tests: Kostenlose Testkündigung ohne Gebühr.", "Downgrades: Wirksam ab nächstem Zyklus.", "Streitigkeiten: Innerhalb von 60 Tagen.", "Prozess: Genehmigte Erstattungen in 5–10 Werktagen."], fullTerms: "[ Platzhalter für vollständige Erstattungsrichtlinie. ]" },
      { id: "licensing", label: "Lizenzierung & IP", summary: ["Plattformlizenz: Begrenzt, nicht exklusiv, nicht übertragbar.", "Ihre Inhalte: Sie behalten alle Rechte.", "Unsere IP: ClientForce behält alle Rechte.", "Feedback: Kann ohne Verpflichtung verwendet werden.", "Einschränkungen: Kein Reverse Engineering.", "Marken: Nutzung nur mit schriftlicher Genehmigung.", "Open Source: Einige Komponenten unter MIT oder Apache 2.0."], fullTerms: "[ Platzhalter für vollständige Lizenz- und IP-Richtlinie. ]" },
      { id: "contact", label: "Kontakt & Rechtliche Hinweise", summary: ["Rechtliche Hinweise: Schriftlich an legal@clientforce.ai.", "Adresse: ClientForce Inc., 123 Market Street, Suite 400, San Francisco.", "DMCA: Ansprüche an dmca@clientforce.ai.", "Vorladungen: An legal@clientforce.ai.", "Sprache: Englisch ist die Steuerungssprache.", "Geltendes Recht: Delaware, USA.", "Reaktionszeit: Innerhalb von 2 Werktagen."], fullTerms: "[ Platzhalter für Kontakt- und Rechtshinweise. ]" },
    ],
  },

  "Spanish (ES)": {
    lastUpdated: "Última actualización: 09 dic. 2025",
    downloadBtn: "Descargar todo (PDF)",
    contactTitle: "¿Preguntas?",
    contactDesc: "Envíe un correo a legal@clientforce.ai o envíe una solicitud. Normalmente respondemos en 2 días hábiles.",
    contactBtn: "Contactar al equipo legal",
    summaryLabel: "Resumen",
    fullTermsLabel: "Términos completos (Vista previa)",
    sections: [
      { id: "terms", label: "Términos de servicio", summary: ["Su cuenta: Debe proporcionar información precisa y mantener sus credenciales seguras.", "Licencia: Uso no exclusivo y no transferible de la plataforma.", "Pagos: Cuotas de suscripción, renovaciones, impuestos.", "Cancelaciones: Cancele en cualquier momento; el acceso continúa hasta el final del término.", "Usos prohibidos: Spam, contacto ilícito, scraping sin consentimiento.", "Responsabilidad: Plataforma proporcionada «tal cual».", "Ley aplicable: Jurisdicción especificada por su selección de región."], fullTerms: "[ Marcador de posición para los términos completos. ]" },
      { id: "privacy", label: "Política de privacidad", summary: ["Datos recopilados: Información de cuenta, datos de uso, comunicaciones.", "Uso de datos: Para proporcionar servicios y mejorar la plataforma.", "Compartir datos: No vendemos sus datos.", "Retención: Datos retenidos mientras su cuenta esté activa.", "Sus derechos: Acceso, corrección, eliminación en 30 días.", "Cookies: Para autenticación y análisis.", "Contacto: privacy@clientforce.ai."], fullTerms: "[ Marcador de posición para la política de privacidad completa. ]" },
      { id: "dpa", label: "Adenda de procesamiento de datos (DPA)", summary: ["Alcance: Aplica a todos los datos personales procesados por ClientForce.", "Roles: El cliente es el responsable; ClientForce es el procesador.", "Instrucciones: Procesamiento solo según instrucciones documentadas.", "Subprocesadores: Lista en clientforce.ai/sub-processors.", "Seguridad: Medidas técnicas y organizacionales apropiadas.", "Transferencias: Cláusulas contractuales estándar aplicadas.", "Notificación de violación: En 72 horas."], fullTerms: "[ Marcador de posición para el DPA completo. ]" },
      { id: "cookie", label: "Política de cookies", summary: ["¿Qué son las cookies? Archivos de texto pequeños en su dispositivo.", "Tipos: Estrictamente necesarias, funcionales, analíticas y de marketing.", "Cookies de terceros: Los socios pueden establecer sus propias cookies.", "Duración: Las cookies de sesión expiran al cerrar el navegador.", "Sus opciones: Gestione preferencias con nuestro banner de cookies.", "No rastrear: Respetamos las señales DNT.", "Actualizaciones: Revisadas anualmente."], fullTerms: "[ Marcador de posición para la política de cookies completa. ]" },
      { id: "acceptable", label: "Uso aceptable", summary: ["Uso permitido: Solo para actividades comerciales legales.", "Prohibido: Spam, phishing, mensajes masivos no solicitados.", "Scraping: Recopilación automatizada sin consentimiento prohibida.", "Estándares de contenido: Sin acoso ni discurso de odio.", "Compartir cuenta: Las credenciales no pueden compartirse.", "Denuncias: Infracciones a abuse@clientforce.ai.", "Aplicación: Las infracciones pueden resultar en suspensión."], fullTerms: "[ Marcador de posición para la política de uso aceptable completa. ]" },
      { id: "security", label: "Seguridad y cumplimiento", summary: ["Infraestructura: Certificada SOC 2 Tipo II.", "Cifrado: AES-256 en reposo, TLS 1.2+ en tránsito.", "Control de acceso: Basado en roles con MFA.", "Pruebas de penetración: Anuales por terceros.", "Cumplimiento: GDPR, CCPA, CAN-SPAM.", "Respuesta a incidentes: Plan IR documentado.", "Certificaciones: SOC 2, ISO 27001 en proceso."], fullTerms: "[ Marcador de posición para la documentación de seguridad completa. ]" },
      { id: "subprocessors", label: "Subprocesadores", summary: ["Definición: Terceros que procesan datos en nuestro nombre.", "Lista actual: clientforce.ai/sub-processors.", "Notificación: 30 días de aviso previo.", "Objeción: Los clientes pueden objetar en 14 días.", "Contratos: Todos están sujetos a acuerdos de protección.", "Transferencias: Cubiertas por CCE.", "Actualizaciones: Revisadas trimestralmente."], fullTerms: "[ Marcador de posición para la lista de subprocesadores. ]" },
      { id: "sla", label: "SLA y soporte", summary: ["Compromiso de disponibilidad: 99,9% de SLA mensual.", "Medición: Sin ventanas de mantenimiento.", "Créditos: Emitidos al superar umbrales.", "Niveles de soporte: Correo (todos), chat prioritario (Pro).", "Tiempos de respuesta: P1 — 2 h; P2 — 8 h.", "Exclusiones: Fuerza mayor, interrupciones del cliente.", "Página de estado: status.clientforce.ai."], fullTerms: "[ Marcador de posición para la documentación SLA completa. ]" },
      { id: "refund", label: "Reembolso y cancelación", summary: ["Cancelación: En cualquier momento desde la configuración de la cuenta.", "Acceso: Hasta el final del período de facturación.", "Reembolsos: Planes mensuales — sin reembolso. Anuales — proporcional en 14 días.", "Pruebas: Cancelaciones sin cargo.", "Reducciones: Efectivas en el próximo ciclo.", "Disputas: Dentro de 60 días.", "Proceso: Aprobados en 5–10 días hábiles."], fullTerms: "[ Marcador de posición para la política de reembolso completa. ]" },
      { id: "licensing", label: "Licencias y propiedad intelectual", summary: ["Licencia de plataforma: Limitada, no exclusiva, no transferible.", "Su contenido: Conserva todos los derechos.", "Nuestra PI: ClientForce retiene todos los derechos.", "Comentarios: Pueden usarse sin obligación.", "Restricciones: Sin ingeniería inversa.", "Marcas: Uso requiere permiso escrito.", "Código abierto: Componentes bajo MIT o Apache 2.0."], fullTerms: "[ Marcador de posición para la política de licencias completa. ]" },
      { id: "contact", label: "Contacto y avisos legales", summary: ["Avisos legales: Por escrito a legal@clientforce.ai.", "Dirección: ClientForce Inc., 123 Market Street, Suite 400, San Francisco.", "DMCA: Reclamaciones a dmca@clientforce.ai.", "Citaciones: A legal@clientforce.ai.", "Idioma: El inglés es el idioma de control.", "Ley aplicable: Delaware, EE.UU.", "Tiempo de respuesta: 2 días hábiles."], fullTerms: "[ Marcador de posición para contacto y avisos legales. ]" },
    ],
  },

  "Portuguese (PT)": {
    lastUpdated: "Última atualização: 09 dez. 2025",
    downloadBtn: "Baixar tudo (PDF)",
    contactTitle: "Dúvidas?",
    contactDesc: "Envie um e-mail para legal@clientforce.ai ou envie uma solicitação. Geralmente respondemos em 2 dias úteis.",
    contactBtn: "Contatar jurídico",
    summaryLabel: "Resumo",
    fullTermsLabel: "Termos completos (Prévia)",
    sections: [
      { id: "terms", label: "Termos de Serviço", summary: ["Sua conta: Forneça informações precisas e mantenha suas credenciais seguras.", "Licença: Uso não exclusivo e intransferível da plataforma.", "Pagamentos: Taxas de assinatura, renovações, impostos.", "Cancelamentos: Cancele a qualquer momento; o acesso permanece até o término do período.", "Usos proibidos: Spam, contato ilícito, scraping sem consentimento.", "Responsabilidade: Plataforma fornecida «como está».", "Lei aplicável: Conforme a seleção de região."], fullTerms: "[ Espaço reservado para os termos completos. ]" },
      { id: "privacy", label: "Política de Privacidade", summary: ["Dados coletados: Informações de conta, dados de uso, comunicações.", "Uso dos dados: Para fornecer serviços e melhorar a plataforma.", "Compartilhamento: Não vendemos seus dados.", "Retenção: Dados mantidos enquanto sua conta estiver ativa.", "Seus direitos: Acesso, correção, exclusão em 30 dias.", "Cookies: Para autenticação e análise.", "Contato: privacy@clientforce.ai."], fullTerms: "[ Espaço reservado para a política de privacidade completa. ]" },
      { id: "dpa", label: "Adendo de Processamento de Dados (DPA)", summary: ["Escopo: Aplica-se a todos os dados pessoais processados pela ClientForce.", "Funções: O cliente é o controlador; ClientForce é o processador.", "Instruções: Processamento apenas conforme instruções documentadas.", "Subprocessadores: Lista em clientforce.ai/sub-processors.", "Segurança: Medidas técnicas e organizacionais adequadas.", "Transferências: Cláusulas contratuais padrão aplicadas.", "Notificação: Em 72 horas."], fullTerms: "[ Espaço reservado para o DPA completo. ]" },
      { id: "cookie", label: "Política de Cookies", summary: ["O que são cookies: Pequenos arquivos de texto no seu dispositivo.", "Tipos: Essenciais, funcionais, analíticos e de marketing.", "Cookies de terceiros: Parceiros podem definir seus próprios cookies.", "Duração: Cookies de sessão expiram ao fechar o navegador.", "Suas escolhas: Gerencie preferências pelo banner de cookies.", "Não rastrear: Respeitamos sinais DNT.", "Atualizações: Revisados anualmente."], fullTerms: "[ Espaço reservado para a política de cookies completa. ]" },
      { id: "acceptable", label: "Uso Aceitável", summary: ["Uso permitido: Apenas para fins comerciais legais.", "Proibido: Spam, phishing, mensagens em massa não solicitadas.", "Scraping: Coleta automatizada sem consentimento proibida.", "Padrões de conteúdo: Sem assédio ou discurso de ódio.", "Compartilhamento de conta: Credenciais não podem ser compartilhadas.", "Denúncias: abuse@clientforce.ai.", "Aplicação: Violações podem resultar em suspensão."], fullTerms: "[ Espaço reservado para a política de uso aceitável completa. ]" },
      { id: "security", label: "Segurança e Conformidade", summary: ["Infraestrutura: Certificada SOC 2 Tipo II.", "Criptografia: AES-256 em repouso, TLS 1.2+ em trânsito.", "Controle de acesso: Baseado em funções com MFA.", "Testes de penetração: Anuais por terceiros.", "Conformidade: LGPD, GDPR, CAN-SPAM.", "Resposta a incidentes: Plano IR documentado.", "Certificações: SOC 2, ISO 27001 em andamento."], fullTerms: "[ Espaço reservado para documentação de segurança completa. ]" },
      { id: "subprocessors", label: "Subprocessadores", summary: ["Definição: Terceiros que processam dados em nosso nome.", "Lista atual: clientforce.ai/sub-processors.", "Notificação: 30 dias de aviso prévio.", "Objeção: Clientes podem objetar em 14 dias.", "Contratos: Todos vinculados por acordos de proteção.", "Transferências: Cobertas por CCPs.", "Atualizações: Revisadas trimestralmente."], fullTerms: "[ Espaço reservado para a lista de subprocessadores. ]" },
      { id: "sla", label: "SLA e Suporte", summary: ["Compromisso de disponibilidade: SLA mensal de 99,9%.", "Medição: Sem janelas de manutenção.", "Créditos: Emitidos ao superar limites.", "Níveis de suporte: E-mail (todos), chat prioritário (Pro).", "Tempos de resposta: P1 — 2 h; P2 — 8 h.", "Exclusões: Força maior, interrupções do cliente.", "Página de status: status.clientforce.ai."], fullTerms: "[ Espaço reservado para documentação SLA completa. ]" },
      { id: "refund", label: "Reembolso e Cancelamento", summary: ["Cancelamento: A qualquer momento nas configurações da conta.", "Acesso: Até o final do período de cobrança.", "Reembolsos: Planos mensais — sem reembolso. Anuais — proporcional em 14 dias.", "Testes: Cancelamentos sem cobrança.", "Downgrades: No próximo ciclo.", "Disputas: Em 60 dias.", "Processo: Aprovados em 5–10 dias úteis."], fullTerms: "[ Espaço reservado para a política de reembolso completa. ]" },
      { id: "licensing", label: "Licenciamento e PI", summary: ["Licença de plataforma: Limitada, não exclusiva, intransferível.", "Seu conteúdo: Você retém todos os direitos.", "Nossa PI: ClientForce retém todos os direitos.", "Feedback: Pode ser usado sem obrigação.", "Restrições: Sem engenharia reversa.", "Marcas: Uso requer permissão escrita.", "Código aberto: Componentes sob MIT ou Apache 2.0."], fullTerms: "[ Espaço reservado para a política de licenciamento completa. ]" },
      { id: "contact", label: "Contato e Avisos Legais", summary: ["Avisos legais: Por escrito a legal@clientforce.ai.", "Endereço: ClientForce Inc., 123 Market Street, Suite 400, San Francisco.", "DMCA: Reclamações a dmca@clientforce.ai.", "Intimações: A legal@clientforce.ai.", "Idioma: O inglês é o idioma de controle.", "Lei aplicável: Delaware, EUA.", "Tempo de resposta: 2 dias úteis."], fullTerms: "[ Espaço reservado para contato e avisos legais. ]" },
    ],
  },
};

const LANGUAGE_KEYS = Object.keys(TRANSLATIONS);

// ─────────────────────────────────────────────
// PDF GENERATION (pure browser — no extra lib)
// ─────────────────────────────────────────────
function generatePDF(t, language) {
  // Use jsPDF via CDN — we load it lazily
  const load = () =>
    new Promise((resolve, reject) => {
      if (window.jspdf) return resolve(window.jspdf.jsPDF);
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      script.onload = () => resolve(window.jspdf.jsPDF);
      script.onerror = reject;
      document.head.appendChild(script);
    });

  load().then((jsPDF) => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const margin = 48;
    const maxW = pageW - margin * 2;
    let y = margin;

    const addText = (text, size, bold, color = [30, 30, 30], indent = 0) => {
      doc.setFontSize(size);
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setTextColor(...color);
      const lines = doc.splitTextToSize(text, maxW - indent);
      lines.forEach((line) => {
        if (y > pageH - margin) { doc.addPage(); y = margin; }
        doc.text(line, margin + indent, y);
        y += size * 1.5;
      });
    };

    const divider = () => {
      if (y > pageH - margin) { doc.addPage(); y = margin; }
      doc.setDrawColor(220, 220, 220);
      doc.line(margin, y, pageW - margin, y);
      y += 16;
    };

    // Cover
    addText("ClientForce Legal Documents", 22, true, [20, 20, 20]);
    addText(`Language: ${language}`, 10, false, [120, 120, 120]);
    addText(t.lastUpdated, 10, false, [120, 120, 120]);
    y += 16;
    divider();

    t.sections.forEach((section, idx) => {
      if (idx !== 0) { y += 8; divider(); }
      addText(section.label, 14, true, [20, 20, 20]);
      y += 4;
      addText(`${idx + 1}. ${section.label} (${t.summaryLabel})`, 11, true, [60, 60, 60]);
      y += 4;
      section.summary.forEach((item) => {
        addText(`• ${item}`, 9, false, [60, 60, 60], 8);
      });
      y += 8;
      addText(`${t.fullTermsLabel}`, 11, true, [60, 60, 60]);
      y += 4;
      addText(section.fullTerms, 9, false, [100, 100, 100]);
    });

    doc.save(`ClientForce-Legal-${language.replace(/[^a-zA-Z]/g, "")}.pdf`);
  });
}

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────
export default function LegalPage() {
  const [language, setLanguage] = useState("Global (EN)");
  const [activeId, setActiveId] = useState("terms");
  const [downloading, setDownloading] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const t = TRANSLATIONS[language];
  const active = t.sections.find((s) => s.id === activeId);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setAnimKey((k) => k + 1);
  };

  const handleSectionClick = (id) => {
    setActiveId(id);
    setAnimKey((k) => k + 1);
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      generatePDF(t, language);
    } finally {
      setTimeout(() => setDownloading(false), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Top bar ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-6 lg:px-10 py-4 border-b border-gray-200">
        <p className="text-sm text-gray-500">{t.lastUpdated}</p>
        <div className="flex items-center gap-3 flex-wrap">

          {/* Language selector */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white shadow-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 font-semibold flex-shrink-0">
              <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
            </svg>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-transparent outline-none text-gray-900 cursor-pointer font-semibold"
            >
              {LANGUAGE_KEYS.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>

          {/* Download button */}
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-700 active:scale-95 transition-all disabled:opacity-60"
          >
            {downloading ? (
              <>
                <svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 12a9 9 0 11-6.219-8.56" strokeLinecap="round" />
                </svg>
                Generating…
              </>
            ) : (
              <>
                {t.downloadBtn}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className="flex flex-col md:flex-row gap-6 px-6 lg:px-10 py-8">

        {/* ── Sidebar ── */}
        <aside className="w-full md:w-[340px] flex-shrink-0 flex flex-col gap-1">
          {t.sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`text-left w-full cursor-pointer px-4 py-3 rounded-xl text-md font-medium transition-all duration-200 ${
                activeId === section.id
                  ? "bg-gray-100 text-black font-bold border border-gray-200"
                  : "text-gray-700 font-semibold hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {section.label}
            </button>
          ))}

          {/* Contact card */}
          <div className="mt-6 bg-gray-900 text-white rounded-2xl p-5 md:flex flex-col gap-3 hidden">
            <p className="font-bold text-base">{t.contactTitle}</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t.contactDesc.split("legal@clientforce.ai").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <a href="mailto:legal@clientforce.ai" className="text-[#2376F1] underline underline-offset-2">
                      legal@clientforce.ai
                    </a>
                  </span>
                ) : part
              )}
            </p>
            <button className="mt-1 cursor-pointer flex items-center gap-2 bg-gray-600 text-white text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-gray-700 transition-colors w-fit">
              {t.contactBtn}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </aside>

        {/* ── Content area ── */}
        <main className="flex-1 flex flex-col gap-4 min-w-0">
          {/* Summary card */}
          <div
            key={`${animKey}-summary`}
            className="border border-gray-200 rounded-2xl p-6"
            style={{ animation: "fadeSlideUp 0.3s ease both" }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              1. {active.label} ({t.summaryLabel})
            </h2>
            <ul className="flex flex-col gap-2">
              {active.summary.map((item, i) => (
                <li key={i} className="flex gap-2 text-md text-gray-900 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-700 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Full terms card */}
          <div
            key={`${animKey}-full`}
            className="border border-gray-200 rounded-2xl p-6"
            style={{ animation: "fadeSlideUp 0.35s ease 0.05s both" }}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t.fullTermsLabel}</h2>
            <p className="text-md text-gray-900 leading-relaxed">{active.fullTerms}</p>
          </div>
        </main>
        
      </div>
      {/* Contact card */}
      <div className="w-full px-8">
              {/* Contact card */}
          <div className=" bg-gray-900 text-white rounded-2xl p-5 flex flex-col gap-3 md:hidden">
            <p className="font-bold text-base">{t.contactTitle}</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t.contactDesc.split("legal@clientforce.ai").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <a href="mailto:legal@clientforce.ai" className="text-[#2376F1] underline underline-offset-2">
                      legal@clientforce.ai
                    </a>
                  </span>
                ) : part
              )}
            </p>
            <button className="mt-1 cursor-pointer flex items-center gap-2 bg-gray-600 text-white text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-gray-700 transition-colors w-fit">
              {t.contactBtn}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
      </div>
         

      

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
