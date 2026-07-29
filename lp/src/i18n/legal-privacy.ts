import type { LegalDoc } from './legal-types';

// Conteúdo integral de "VerticoSys_Politica_de_Privacidade.docx".
export const privacy: { pt: LegalDoc; en: LegalDoc } = {
  pt: {
    eyebrow: 'Documento legal',
    title: 'Política de Privacidade',
    effective: 'Documento vigente a partir de sua publicação',
    sections: [
      {
        title: '1. Introdução e Controlador de Dados',
        blocks: [
          {
            type: 'p',
            text: 'A presente Política de Privacidade descreve como a ANITEC TECNOLOGIA EM SISTEMAS DE INFORMAÇÕES LTDA ("VerticoSys", "nós"), pessoa jurídica de direito privado inscrita no CNPJ sob o nº 41.522.323/0001-22, com sede em Av. Brig. Faria Lima, 1811, São Paulo/SP, Brasil, coleta, utiliza, armazena, compartilha e protege os dados pessoais tratados no âmbito da plataforma VerticoSys, na qualidade de Controladora, nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados – LGPD).',
          },
          {
            type: 'p',
            text: 'Esta Política aplica-se aos dados pessoais de representantes legais, usuários operadores, colaboradores das Empresas Contratantes (no contexto de folha de pagamento) e demais pessoas físicas cujos dados sejam tratados em razão da prestação dos Serviços.',
          },
        ],
      },
      {
        title: '2. Dados Coletados',
        blocks: [
          { type: 'p', text: 'No âmbito da prestação dos Serviços, a VerticoSys poderá coletar as seguintes categorias de dados:' },
          {
            type: 'table',
            head: ['Categoria', 'Exemplos de dados', 'Finalidade principal'],
            rows: [
              ['Dados cadastrais da empresa', 'Razão social, CNPJ, endereço, dados bancários', 'Habilitação de conta e prestação dos Serviços'],
              ['Dados de usuários operadores', 'Nome, e-mail corporativo, cargo, telefone', 'Controle de acesso e perfis de permissão'],
              ['Dados de identificação (KYC/AML)', 'Documentos de identidade, comprovantes societários', 'Prevenção à lavagem de dinheiro e conformidade regulatória'],
              ['Dados financeiros e transacionais', 'Extratos, saldos, histórico de transações, moedas operadas', 'Execução de operações financeiras e conciliação'],
              ['Dados de uso da plataforma', 'Logs de acesso, endereço IP, dispositivo, cookies', 'Segurança, auditoria e melhoria do produto'],
              ['Dados de folha de pagamento', 'Nome, CPF, dados bancários de colaboradores da Empresa Contratante', 'Execução de mass payments/folha doméstica'],
            ],
          },
        ],
      },
      {
        title: '3. Finalidades do Tratamento',
        blocks: [
          { type: 'p', text: 'Os dados pessoais coletados são tratados para as seguintes finalidades:' },
          {
            type: 'ul',
            items: [
              'Viabilizar o cadastro, autenticação e gestão de acesso à plataforma;',
              'Executar as funcionalidades contratadas, incluindo gestão financeira multi-moeda, transferências, conciliação e automação de folha de pagamento doméstica;',
              'Cumprir obrigações legais e regulatórias, incluindo procedimentos de prevenção à lavagem de dinheiro e financiamento ao terrorismo (PLD/AML) exigidos pelos Parceiros de Rails Financeiros;',
              'Garantir a segurança da informação, prevenir fraudes e realizar auditorias internas;',
              'Prestar suporte técnico e comunicar-se com os Usuários sobre a operação da plataforma;',
              'Aprimorar os Serviços por meio de análises estatísticas e de uso, preferencialmente de forma agregada e anonimizada.',
            ],
          },
        ],
      },
      {
        title: '4. Base Legal para o Tratamento',
        blocks: [
          {
            type: 'p',
            text: 'O tratamento de dados pessoais pela VerticoSys fundamenta-se, conforme o caso, nas seguintes bases legais previstas no art. 7º da LGPD:',
          },
          {
            type: 'ul',
            items: [
              'Execução de contrato ou de procedimentos preliminares relacionados ao contrato do qual o titular seja parte;',
              'Cumprimento de obrigação legal ou regulatória pelo controlador, incluindo normas de PLD/AML e regulação de câmbio e pagamentos;',
              'Legítimo interesse da VerticoSys, observados os direitos e liberdades fundamentais dos titulares, para finalidades de segurança e prevenção a fraudes;',
              'Consentimento do titular, quando aplicável, especialmente para finalidades não essenciais à prestação dos Serviços.',
            ],
          },
        ],
      },
      {
        title: '5. Compartilhamento de Dados com Parceiros',
        blocks: [
          {
            type: 'p',
            text: 'Para viabilizar a execução das operações financeiras oferecidas na plataforma, determinados dados poderão ser compartilhados com os Parceiros de Rails Financeiros (incluindo Gates2B e GlobalDEX), instituições bancárias e demais provedores de infraestrutura necessários à liquidação de transações, PIX, câmbio e processamento de pagamentos.',
          },
          {
            type: 'p',
            text: 'Dados poderão também ser compartilhados com prestadores de serviços de tecnologia contratados pela VerticoSys para operação da plataforma, incluindo serviços de infraestrutura em nuvem (armazenamento e gerenciamento de chaves criptográficas), sempre sob obrigações contratuais de confidencialidade e segurança da informação.',
          },
          {
            type: 'p',
            text: 'A VerticoSys poderá, ainda, compartilhar dados pessoais quando exigido por lei, ordem judicial ou determinação de autoridade regulatória ou fiscalizadora competente.',
          },
        ],
      },
      {
        title: '6. Transferência Internacional de Dados',
        blocks: [
          {
            type: 'p',
            text: 'Em razão da natureza multi-entidade e multi-moeda da plataforma, e da eventual integração com parceiros de câmbio e correspondentes bancários internacionais, dados pessoais poderão ser transferidos para outros países, inclusive no contexto de funcionalidades de remessas internacionais quando efetivamente ativadas. Nesses casos, a VerticoSys adotará as salvaguardas exigidas pela LGPD, buscando assegurar que o país ou organização destinatária ofereça grau de proteção de dados adequado, ou mediante a adoção de cláusulas contratuais específicas de proteção de dados.',
          },
        ],
      },
      {
        title: '7. Armazenamento e Segurança da Informação',
        blocks: [
          {
            type: 'p',
            text: 'Os dados pessoais são armazenados em infraestrutura de nuvem com controles de segurança técnica e administrativa, incluindo criptografia de dados em repouso e em trânsito e gestão de chaves de acesso. A VerticoSys adota medidas técnicas e organizacionais razoáveis para proteger os dados contra acessos não autorizados, perda, alteração ou divulgação indevida.',
          },
          {
            type: 'p',
            text: 'Não obstante os esforços empregados, nenhum sistema é absolutamente imune a incidentes de segurança. Em caso de incidente que possa acarretar risco relevante aos titulares, a VerticoSys comunicará os titulares afetados e a Autoridade Nacional de Proteção de Dados (ANPD), conforme exigido pela legislação aplicável.',
          },
        ],
      },
      {
        title: '8. Retenção de Dados',
        blocks: [
          {
            type: 'p',
            text: 'Os dados pessoais serão mantidos pelo período necessário ao cumprimento das finalidades para as quais foram coletados, observados os prazos de guarda exigidos por obrigações legais, regulatórias, fiscais e de prevenção à lavagem de dinheiro, ainda que após o encerramento da relação contratual com a Empresa Contratante.',
          },
        ],
      },
      {
        title: '9. Direitos do Titular de Dados',
        blocks: [
          {
            type: 'p',
            text: 'Nos termos do art. 18 da LGPD, o titular de dados pessoais poderá, mediante solicitação, exercer os seguintes direitos:',
          },
          {
            type: 'ul',
            items: [
              'Confirmação da existência de tratamento de seus dados;',
              'Acesso aos dados pessoais tratados;',
              'Correção de dados incompletos, inexatos ou desatualizados;',
              'Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei;',
              'Portabilidade dos dados a outro fornecedor de serviço, observados os segredos comercial e industrial;',
              'Eliminação dos dados tratados com base no consentimento, ressalvadas as hipóteses de retenção legal;',
              'Informação sobre as entidades públicas e privadas com as quais os dados foram compartilhados;',
              'Revogação do consentimento, quando esta for a base legal aplicável.',
            ],
          },
          {
            type: 'p',
            text: 'As solicitações poderão ser realizadas pelos canais de contato indicados na Seção 14 desta Política, sendo respondidas nos prazos legalmente estabelecidos.',
          },
        ],
      },
      {
        title: '10. Cookies e Tecnologias de Rastreamento',
        blocks: [
          {
            type: 'p',
            text: 'A plataforma poderá utilizar cookies e tecnologias similares para viabilizar funcionalidades essenciais, manter sessões autenticadas, garantir segurança e obter métricas agregadas de uso. O Usuário poderá gerenciar preferências de cookies não essenciais por meio das configurações de seu navegador, observado que a desativação de determinados cookies pode impactar funcionalidades da plataforma.',
          },
        ],
      },
      {
        title: '11. Tratamento de Dados de Menores',
        blocks: [
          {
            type: 'p',
            text: 'A plataforma VerticoSys destina-se exclusivamente a uso empresarial (B2B) por pessoas jurídicas e seus representantes e colaboradores maiores de 18 anos, não sendo direcionada a menores de idade. Eventuais dados de menores tratados no contexto de folha de pagamento (ex.: dependentes) serão tratados exclusivamente para as finalidades legais correspondentes.',
          },
        ],
      },
      {
        title: '12. Encarregado pelo Tratamento de Dados (DPO)',
        blocks: [
          {
            type: 'p',
            text: 'A ANITEC TECNOLOGIA EM SISTEMAS DE INFORMAÇÕES LTDA disponibilizará canal específico para contato com o Encarregado pelo Tratamento de Dados Pessoais (DPO), a ser indicado na plataforma e/ou nos canais oficiais de atendimento, para o recebimento de comunicações da ANPD e de solicitações dos titulares de dados.',
          },
        ],
      },
      {
        title: '13. Alterações desta Política',
        blocks: [
          {
            type: 'p',
            text: 'Esta Política de Privacidade poderá ser atualizada periodicamente, de modo a refletir alterações legislativas, regulatórias ou evoluções na plataforma. Alterações relevantes serão comunicadas aos Usuários com antecedência razoável, sendo recomendada a consulta periódica a este documento.',
          },
        ],
      },
      {
        title: '14. Contato',
        blocks: [
          {
            type: 'p',
            text: 'Dúvidas, solicitações ou reclamações relacionadas ao tratamento de dados pessoais podem ser encaminhadas à ANITEC TECNOLOGIA EM SISTEMAS DE INFORMAÇÕES LTDA, CNPJ 41.522.323/0001-22, com sede em Av. Brig. Faria Lima, 1811, São Paulo/SP, Brasil, pelo telefone (43) 9934-0064.',
          },
        ],
      },
    ],
  },

  en: {
    eyebrow: 'Legal document',
    title: 'Privacy Policy',
    effective: 'Effective as of its publication',
    notice:
      'English version provided for convenience. In case of divergence, the Portuguese version prevails.',
    sections: [
      {
        title: '1. Introduction and Data Controller',
        blocks: [
          {
            type: 'p',
            text: 'This Privacy Policy describes how ANITEC TECNOLOGIA EM SISTEMAS DE INFORMAÇÕES LTDA ("VerticoSys", "we"), a private legal entity registered under CNPJ No. 41.522.323/0001-22, headquartered at Av. Brig. Faria Lima, 1811, São Paulo/SP, Brazil, collects, uses, stores, shares and protects the personal data processed within the VerticoSys platform, as Controller, pursuant to Law No. 13,709/2018 (Brazilian General Data Protection Law – LGPD).',
          },
          {
            type: 'p',
            text: 'This Policy applies to the personal data of legal representatives, operating users, employees of Contracting Companies (in the payroll context) and other individuals whose data is processed as a result of providing the Services.',
          },
        ],
      },
      {
        title: '2. Data Collected',
        blocks: [
          { type: 'p', text: 'In providing the Services, VerticoSys may collect the following categories of data:' },
          {
            type: 'table',
            head: ['Category', 'Data examples', 'Primary purpose'],
            rows: [
              ['Company registration data', 'Legal name, tax ID, address, bank details', 'Account enablement and provision of the Services'],
              ['Operating user data', 'Name, work email, role, phone number', 'Access control and permission profiles'],
              ['Identification data (KYC/AML)', 'Identity documents, corporate records', 'Anti-money laundering and regulatory compliance'],
              ['Financial and transactional data', 'Statements, balances, transaction history, currencies used', 'Execution of financial operations and reconciliation'],
              ['Platform usage data', 'Access logs, IP address, device, cookies', 'Security, audit and product improvement'],
              ['Payroll data', 'Name, tax ID and bank details of the Contracting Company’s employees', 'Execution of mass payments/domestic payroll'],
            ],
          },
        ],
      },
      {
        title: '3. Purposes of Processing',
        blocks: [
          { type: 'p', text: 'The personal data collected is processed for the following purposes:' },
          {
            type: 'ul',
            items: [
              'Enable registration, authentication and access management on the platform;',
              'Perform the contracted features, including multi-currency financial management, transfers, reconciliation and domestic payroll automation;',
              'Comply with legal and regulatory obligations, including anti-money laundering and counter-terrorism financing procedures (AML) required by the Financial Rails Partners;',
              'Ensure information security, prevent fraud and carry out internal audits;',
              'Provide technical support and communicate with Users about platform operations;',
              'Improve the Services through statistical and usage analysis, preferably in aggregated and anonymized form.',
            ],
          },
        ],
      },
      {
        title: '4. Legal Basis for Processing',
        blocks: [
          {
            type: 'p',
            text: 'VerticoSys’s processing of personal data is based, as applicable, on the following legal bases set out in article 7 of the LGPD:',
          },
          {
            type: 'ul',
            items: [
              'Performance of a contract or of preliminary procedures related to a contract to which the data subject is a party;',
              'Compliance with a legal or regulatory obligation by the controller, including AML rules and FX and payment regulations;',
              'Legitimate interest of VerticoSys, observing the fundamental rights and freedoms of data subjects, for security and fraud prevention purposes;',
              'Consent of the data subject, where applicable, especially for purposes not essential to providing the Services.',
            ],
          },
        ],
      },
      {
        title: '5. Data Sharing with Partners',
        blocks: [
          {
            type: 'p',
            text: 'To enable the execution of the financial operations offered on the platform, certain data may be shared with the Financial Rails Partners (including Gates2B and GlobalDEX), banking institutions and other infrastructure providers necessary for transaction settlement, PIX, FX and payment processing.',
          },
          {
            type: 'p',
            text: 'Data may also be shared with technology service providers contracted by VerticoSys to operate the platform, including cloud infrastructure services (storage and cryptographic key management), always under contractual obligations of confidentiality and information security.',
          },
          {
            type: 'p',
            text: 'VerticoSys may also share personal data when required by law, court order or determination of a competent regulatory or supervisory authority.',
          },
        ],
      },
      {
        title: '6. International Data Transfers',
        blocks: [
          {
            type: 'p',
            text: 'Due to the multi-entity and multi-currency nature of the platform, and possible integration with FX partners and international banking correspondents, personal data may be transferred to other countries, including in the context of international remittance features when effectively activated. In such cases, VerticoSys will adopt the safeguards required by the LGPD, seeking to ensure that the recipient country or organization provides an adequate level of data protection, or by adopting specific contractual data protection clauses.',
          },
        ],
      },
      {
        title: '7. Storage and Information Security',
        blocks: [
          {
            type: 'p',
            text: 'Personal data is stored in cloud infrastructure with technical and administrative security controls, including encryption of data at rest and in transit and access key management. VerticoSys adopts reasonable technical and organizational measures to protect data against unauthorized access, loss, alteration or improper disclosure.',
          },
          {
            type: 'p',
            text: 'Notwithstanding these efforts, no system is entirely immune to security incidents. In the event of an incident that may pose a relevant risk to data subjects, VerticoSys will notify the affected data subjects and the Brazilian National Data Protection Authority (ANPD), as required by applicable legislation.',
          },
        ],
      },
      {
        title: '8. Data Retention',
        blocks: [
          {
            type: 'p',
            text: 'Personal data will be retained for the period necessary to fulfill the purposes for which it was collected, observing the retention periods required by legal, regulatory, tax and anti-money laundering obligations, even after the end of the contractual relationship with the Contracting Company.',
          },
        ],
      },
      {
        title: '9. Data Subject Rights',
        blocks: [
          {
            type: 'p',
            text: 'Pursuant to article 18 of the LGPD, the data subject may, upon request, exercise the following rights:',
          },
          {
            type: 'ul',
            items: [
              'Confirmation of the existence of processing of their data;',
              'Access to the personal data processed;',
              'Correction of incomplete, inaccurate or outdated data;',
              'Anonymization, blocking or deletion of unnecessary or excessive data, or data processed in breach of the law;',
              'Data portability to another service provider, observing commercial and industrial secrecy;',
              'Deletion of data processed based on consent, except in cases of legal retention;',
              'Information about the public and private entities with which the data has been shared;',
              'Withdrawal of consent, where this is the applicable legal basis.',
            ],
          },
          {
            type: 'p',
            text: 'Requests may be submitted through the contact channels indicated in Section 14 of this Policy and will be answered within the legally established timeframes.',
          },
        ],
      },
      {
        title: '10. Cookies and Tracking Technologies',
        blocks: [
          {
            type: 'p',
            text: 'The platform may use cookies and similar technologies to enable essential features, maintain authenticated sessions, ensure security and obtain aggregated usage metrics. Users may manage preferences for non-essential cookies through their browser settings, noting that disabling certain cookies may affect platform functionality.',
          },
        ],
      },
      {
        title: '11. Processing of Minors’ Data',
        blocks: [
          {
            type: 'p',
            text: 'The VerticoSys platform is intended exclusively for business (B2B) use by legal entities and their representatives and employees over 18 years of age, and is not directed at minors. Any data of minors processed in the payroll context (e.g. dependents) will be processed exclusively for the corresponding legal purposes.',
          },
        ],
      },
      {
        title: '12. Data Protection Officer (DPO)',
        blocks: [
          {
            type: 'p',
            text: 'ANITEC TECNOLOGIA EM SISTEMAS DE INFORMAÇÕES LTDA will provide a specific channel for contacting the Data Protection Officer (DPO), to be indicated on the platform and/or through official service channels, for receiving communications from the ANPD and requests from data subjects.',
          },
        ],
      },
      {
        title: '13. Changes to this Policy',
        blocks: [
          {
            type: 'p',
            text: 'This Privacy Policy may be updated periodically to reflect legislative or regulatory changes or platform developments. Material changes will be communicated to Users with reasonable advance notice, and periodic review of this document is recommended.',
          },
        ],
      },
      {
        title: '14. Contact',
        blocks: [
          {
            type: 'p',
            text: 'Questions, requests or complaints related to the processing of personal data may be sent to ANITEC TECNOLOGIA EM SISTEMAS DE INFORMAÇÕES LTDA, CNPJ 41.522.323/0001-22, headquartered at Av. Brig. Faria Lima, 1811, São Paulo/SP, Brazil, by phone at +55 (43) 9934-0064.',
          },
        ],
      },
    ],
  },
};
