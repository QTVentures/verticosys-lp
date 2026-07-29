import type { LegalDoc } from './legal-types';

// Conteúdo integral de "VerticoSys_Termos_de_Uso.docx".
export const terms: { pt: LegalDoc; en: LegalDoc } = {
  pt: {
    eyebrow: 'Documento legal',
    title: 'Termos de Uso',
    effective: 'Documento vigente a partir de sua publicação',
    sections: [
      {
        title: '1. Definições',
        blocks: [
          { type: 'p', text: 'Para os fins destes Termos de Uso ("Termos"), aplicam-se as seguintes definições:' },
          {
            type: 'dl',
            items: [
              {
                term: 'VerticoSys',
                text: 'plataforma de software como serviço (SaaS) de gestão financeiro-operacional (ERP financeiro) voltada a empresas com operações multi-entidade e/ou multi-moeda, de titularidade e operação da ANITEC TECNOLOGIA EM SISTEMAS DE INFORMAÇÕES LTDA.',
              },
              {
                term: 'Empresa Contratante ou Usuário',
                text: 'pessoa jurídica que contrata o acesso à plataforma para uso próprio ou de seu grupo econômico.',
              },
              {
                term: 'Usuário Operador',
                text: 'pessoa física autorizada pela Empresa Contratante a acessar e operar a plataforma em seu nome, vinculada a um ou mais perfis de acesso.',
              },
              {
                term: 'Workspace',
                text: 'ambiente lógico dentro da plataforma correspondente a uma entidade, filial ou unidade de negócio da Empresa Contratante.',
              },
              {
                term: 'Parceiros de Rails Financeiros',
                text: 'prestadores de infraestrutura de pagamento, câmbio e liquidação integrados à plataforma, incluindo, sem limitação, Gates2B e GlobalDEX, responsáveis pela execução técnica e regulatória das transações financeiras.',
              },
              {
                term: 'Serviços',
                text: 'conjunto de funcionalidades disponibilizadas pela VerticoSys, incluindo módulos de gestão financeira, contas bancárias nacionais e internacionais, conciliação multi-moeda, transferências internas, transações em criptoativos, e automação de folha de pagamento doméstica (mass payments).',
              },
            ],
          },
        ],
      },
      {
        title: '2. Aceitação dos Termos',
        blocks: [
          {
            type: 'p',
            text: 'O acesso e uso da plataforma VerticoSys pressupõe a leitura, compreensão e aceitação integral destes Termos, bem como da Política de Privacidade, disponibilizada em documento apartado. Caso o Usuário não concorde com quaisquer disposições aqui previstas, deverá abster-se de utilizar os Serviços.',
          },
          {
            type: 'p',
            text: 'A aceitação destes Termos é feita pelo representante legal da Empresa Contratante ou por pessoa por ela expressamente autorizada, no momento da contratação, cadastro ou início de uso da plataforma.',
          },
        ],
      },
      {
        title: '3. Descrição dos Serviços',
        blocks: [
          {
            type: 'p',
            text: 'A VerticoSys é uma plataforma SaaS de gestão financeiro-operacional (ERP financeiro) destinada a empresas de tecnologia e outras companhias com atuação cross-border, que necessitem de governança multi-entidade e/ou multi-moeda. A plataforma oferece, entre outras funcionalidades:',
          },
          {
            type: 'ul',
            items: [
              'Gestão de múltiplos workspaces correspondentes a diferentes entidades do grupo econômico do Usuário;',
              'Abertura e gestão de contas bancárias nacionais e internacionais integradas;',
              'Conciliação financeira multi-moeda;',
              'Transferências internas entre contas e entidades;',
              'Execução de transações em criptoativos, quando aplicável e disponível ao perfil do Usuário;',
              'Automação de folha de pagamento doméstica (mass payments) no território nacional;',
              'Integrações com módulos de pagamento via PIX, cartões e outras infraestruturas financeiras.',
            ],
          },
          {
            type: 'p',
            text: 'Determinadas funcionalidades anunciadas ou em desenvolvimento — incluindo automação de remessas internacionais e automação de folha de pagamento internacional — dependem de integrações e credenciamentos regulatórios ainda em implementação (incluindo integrações com parceiros de câmbio e correspondentes bancários) e não estão disponíveis para uso comercial até comunicação expressa de sua ativação pela VerticoSys. A VerticoSys se compromete a indicar claramente, na própria plataforma, quais funcionalidades estão efetivamente ativas para cada Usuário.',
          },
          {
            type: 'p',
            text: 'Da mesma forma, funcionalidades relacionadas a criptoativos e a expansões geográficas futuras poderão ser disponibilizadas de forma gradual, a critério da VerticoSys, e estarão sujeitas a termos adicionais específicos quando aplicável.',
          },
        ],
      },
      {
        title: '4. Cadastro e Conta de Usuário',
        blocks: [
          {
            type: 'p',
            text: 'O uso da plataforma requer cadastro prévio, com fornecimento de informações verdadeiras, completas e atualizadas sobre a Empresa Contratante e seus Usuários Operadores. É de responsabilidade da Empresa Contratante manter a confidencialidade das credenciais de acesso e gerenciar os perfis de permissão de seus Usuários Operadores.',
          },
          {
            type: 'p',
            text: 'A VerticoSys poderá solicitar documentos adicionais para fins de verificação de identidade, prevenção à lavagem de dinheiro (PLD/AML) e conformidade regulatória, em linha com as exigências aplicáveis aos Parceiros de Rails Financeiros.',
          },
          {
            type: 'p',
            text: 'A Empresa Contratante é integralmente responsável pelas ações praticadas por seus Usuários Operadores dentro da plataforma, inclusive quanto à correta atribuição de perfis e níveis de acesso.',
          },
        ],
      },
      {
        title: '5. Planos, Preços e Forma de Pagamento',
        blocks: [
          {
            type: 'p',
            text: 'O acesso aos Serviços é contratado mediante plano comercial específico, com valores, periodicidade e condições definidos em proposta comercial ou contrato apartado firmado entre a VerticoSys e a Empresa Contratante. Os valores poderão ser reajustados mediante comunicação prévia, observado o prazo mínimo estabelecido em contrato.',
          },
          {
            type: 'p',
            text: 'Além da assinatura da plataforma (SaaS), determinadas transações executadas por meio dos Parceiros de Rails Financeiros poderão estar sujeitas a tarifas específicas (ex.: PIX, boletos, câmbio), as quais serão informadas previamente ao Usuário na própria interface da plataforma antes da confirmação da operação.',
          },
          {
            type: 'p',
            text: 'O inadimplemento de valores devidos poderá ensejar a suspensão do acesso aos Serviços, sem prejuízo da cobrança dos valores em aberto e demais medidas cabíveis.',
          },
        ],
      },
      {
        title: '6. Rails Financeiros e Papel da VerticoSys',
        blocks: [
          {
            type: 'p',
            text: 'A execução técnica e regulatória de operações financeiras disponibilizadas por meio da plataforma (incluindo PIX, transferências, câmbio e processamento de cartões) é realizada por meio de parcerias com instituições e provedores de infraestrutura financeira devidamente autorizados a operar, incluindo Gates2B e GlobalDEX.',
          },
          {
            type: 'p',
            text: 'A VerticoSys atua, no âmbito dessas operações, como agente comercial e camada de orquestração tecnológica, auferindo comissão sobre as transações intermediadas. A VerticoSys não é, e não se apresenta como, instituição financeira, instituição de pagamento ou corretora de câmbio, e não detém a custódia direta dos recursos financeiros dos Usuários, os quais permanecem sob responsabilidade regulatória dos respectivos Parceiros de Rails Financeiros.',
          },
          {
            type: 'p',
            text: 'O Usuário reconhece que a disponibilidade, os prazos de liquidação e eventuais restrições operacionais das transações financeiras estão sujeitos às políticas, horários e limites definidos pelos Parceiros de Rails Financeiros, não podendo tais aspectos ser garantidos unilateralmente pela VerticoSys.',
          },
        ],
      },
      {
        title: '7. Obrigações do Usuário',
        blocks: [
          {
            type: 'ul',
            items: [
              'Utilizar a plataforma exclusivamente para finalidades lícitas, compatíveis com sua atividade empresarial;',
              'Não utilizar os Serviços para práticas de lavagem de dinheiro, financiamento ao terrorismo, fraude ou qualquer outra atividade ilícita;',
              'Fornecer informações verdadeiras e manter seus dados cadastrais atualizados;',
              'Zelar pela segurança de suas credenciais de acesso, não as compartilhando com terceiros não autorizados;',
              'Cumprir a legislação tributária, cambial e regulatória aplicável às operações realizadas por meio da plataforma;',
              'Comunicar imediatamente à VerticoSys qualquer uso não autorizado de sua conta ou suspeita de violação de segurança.',
            ],
          },
        ],
      },
      {
        title: '8. Propriedade Intelectual',
        blocks: [
          {
            type: 'p',
            text: 'Todos os direitos de propriedade intelectual relativos à plataforma VerticoSys, incluindo, sem limitação, software, código-fonte, design, marca, layout, documentação e demais elementos, são de titularidade exclusiva da ANITEC TECNOLOGIA EM SISTEMAS DE INFORMAÇÕES LTDA ou de seus licenciantes, sendo vedada sua reprodução, engenharia reversa, modificação ou exploração comercial não autorizada.',
          },
          {
            type: 'p',
            text: 'A contratação dos Serviços concede à Empresa Contratante uma licença de uso não exclusiva, intransferível e limitada ao período de vigência do contrato, exclusivamente para os fins previstos nestes Termos.',
          },
        ],
      },
      {
        title: '9. Confidencialidade',
        blocks: [
          {
            type: 'p',
            text: 'As partes se comprometem a manter sigilo sobre informações confidenciais trocadas em razão da relação contratual, incluindo dados financeiros, estratégicos e técnicos, utilizando-as exclusivamente para os fins da prestação dos Serviços, salvo quando a divulgação for exigida por lei, ordem judicial ou autoridade regulatória competente.',
          },
        ],
      },
      {
        title: '10. Proteção de Dados Pessoais',
        blocks: [
          {
            type: 'p',
            text: 'O tratamento de dados pessoais realizado no âmbito da plataforma VerticoSys observa a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e demais normas aplicáveis, conforme detalhado na Política de Privacidade da VerticoSys, parte integrante destes Termos por referência.',
          },
        ],
      },
      {
        title: '11. Disponibilidade dos Serviços',
        blocks: [
          {
            type: 'p',
            text: 'A VerticoSys envidará seus melhores esforços para manter a plataforma disponível de forma contínua, podendo, contudo, realizar interrupções programadas para manutenção, mediante aviso prévio quando possível, bem como interrupções emergenciais necessárias à segurança e integridade dos Serviços. Eventuais níveis de serviço (SLA) específicos poderão ser definidos em contrato comercial apartado.',
          },
        ],
      },
      {
        title: '12. Limitação de Responsabilidade',
        blocks: [
          {
            type: 'p',
            text: 'A VerticoSys não será responsável por: (i) indisponibilidades decorrentes de falhas de conectividade, infraestrutura de terceiros ou casos fortuitos e de força maior; (ii) atrasos, falhas ou indisponibilidades atribuíveis aos Parceiros de Rails Financeiros ou a outras instituições financeiras integradas; (iii) decisões de natureza financeira, tributária, cambial ou de investimento tomadas pelo Usuário com base em informações disponibilizadas na plataforma; (iv) danos indiretos, lucros cessantes ou perda de dados decorrentes de uso indevido da plataforma pelo Usuário.',
          },
          {
            type: 'p',
            text: 'Em qualquer hipótese, a responsabilidade da VerticoSys por danos diretos comprovadamente causados por sua conduta estará limitada aos valores efetivamente pagos pela Empresa Contratante nos 12 (doze) meses anteriores ao evento gerador do dano, ressalvadas as hipóteses de dolo ou culpa grave.',
          },
        ],
      },
      {
        title: '13. Suspensão e Rescisão',
        blocks: [
          {
            type: 'p',
            text: 'A VerticoSys poderá suspender ou encerrar o acesso do Usuário aos Serviços, mediante notificação, em caso de descumprimento destes Termos, inadimplemento financeiro, indícios de uso fraudulento ou determinação de autoridade competente.',
          },
          {
            type: 'p',
            text: 'O Usuário poderá solicitar o encerramento de sua conta a qualquer momento, observadas as condições contratuais vigentes, permanecendo responsável por eventuais obrigações pendentes até a data de encerramento efetivo.',
          },
        ],
      },
      {
        title: '14. Alterações destes Termos',
        blocks: [
          {
            type: 'p',
            text: 'A VerticoSys poderá alterar estes Termos a qualquer momento, visando refletir evoluções da plataforma, mudanças regulatórias ou aprimoramentos operacionais. Alterações relevantes serão comunicadas aos Usuários com antecedência razoável, sendo a manutenção do uso da plataforma após a comunicação interpretada como aceite às novas condições.',
          },
        ],
      },
      {
        title: '15. Lei Aplicável e Foro',
        blocks: [
          {
            type: 'p',
            text: 'Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias oriundas destes Termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.',
          },
        ],
      },
      {
        title: '16. Disposições Gerais',
        blocks: [
          {
            type: 'p',
            text: 'Caso qualquer disposição destes Termos seja considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor. A tolerância quanto ao eventual descumprimento de qualquer cláusula não implicará novação ou renúncia de direitos.',
          },
        ],
      },
      {
        title: '17. Contato',
        blocks: [
          {
            type: 'p',
            text: 'Em caso de dúvidas sobre estes Termos, o Usuário pode entrar em contato com a ANITEC TECNOLOGIA EM SISTEMAS DE INFORMAÇÕES LTDA, CNPJ 41.522.323/0001-22, com sede em Av. Brig. Faria Lima, 1811, São Paulo/SP, Brasil, pelo telefone (43) 9934-0064.',
          },
        ],
      },
    ],
  },

  en: {
    eyebrow: 'Legal document',
    title: 'Terms of Use',
    effective: 'Effective as of its publication',
    notice:
      'English version provided for convenience. In case of divergence, the Portuguese version prevails.',
    sections: [
      {
        title: '1. Definitions',
        blocks: [
          { type: 'p', text: 'For the purposes of these Terms of Use ("Terms"), the following definitions apply:' },
          {
            type: 'dl',
            items: [
              {
                term: 'VerticoSys',
                text: 'a software-as-a-service (SaaS) financial and operational management platform (financial ERP) for companies with multi-entity and/or multi-currency operations, owned and operated by ANITEC TECNOLOGIA EM SISTEMAS DE INFORMAÇÕES LTDA.',
              },
              {
                term: 'Contracting Company or User',
                text: 'the legal entity that contracts access to the platform for its own use or that of its economic group.',
              },
              {
                term: 'Operating User',
                text: 'the individual authorized by the Contracting Company to access and operate the platform on its behalf, linked to one or more access profiles.',
              },
              {
                term: 'Workspace',
                text: 'a logical environment within the platform corresponding to an entity, branch or business unit of the Contracting Company.',
              },
              {
                term: 'Financial Rails Partners',
                text: 'payment, foreign exchange and settlement infrastructure providers integrated into the platform, including, without limitation, Gates2B and GlobalDEX, responsible for the technical and regulatory execution of financial transactions.',
              },
              {
                term: 'Services',
                text: 'the set of features made available by VerticoSys, including financial management modules, domestic and international bank accounts, multi-currency reconciliation, internal transfers, crypto asset transactions, and domestic payroll automation (mass payments).',
              },
            ],
          },
        ],
      },
      {
        title: '2. Acceptance of the Terms',
        blocks: [
          {
            type: 'p',
            text: 'Access to and use of the VerticoSys platform presupposes the reading, understanding and full acceptance of these Terms, as well as of the Privacy Policy, provided in a separate document. If the User does not agree with any provision set out herein, they must refrain from using the Services.',
          },
          {
            type: 'p',
            text: 'These Terms are accepted by the legal representative of the Contracting Company or by a person expressly authorized by it, at the time of contracting, registration or commencement of use of the platform.',
          },
        ],
      },
      {
        title: '3. Description of the Services',
        blocks: [
          {
            type: 'p',
            text: 'VerticoSys is a SaaS financial and operational management platform (financial ERP) intended for technology companies and other companies with cross-border operations that require multi-entity and/or multi-currency governance. The platform offers, among other features:',
          },
          {
            type: 'ul',
            items: [
              'Management of multiple workspaces corresponding to different entities of the User’s economic group;',
              'Opening and management of integrated domestic and international bank accounts;',
              'Multi-currency financial reconciliation;',
              'Internal transfers between accounts and entities;',
              'Execution of crypto asset transactions, where applicable and available to the User’s profile;',
              'Domestic payroll automation (mass payments) within Brazil;',
              'Integrations with payment modules via PIX, cards and other financial infrastructures.',
            ],
          },
          {
            type: 'p',
            text: 'Certain announced or in-development features — including automated international remittance and international payroll automation — depend on integrations and regulatory authorizations still being implemented (including integrations with FX partners and banking correspondents) and are not available for commercial use until VerticoSys expressly communicates their activation. VerticoSys undertakes to clearly indicate, within the platform itself, which features are effectively active for each User.',
          },
          {
            type: 'p',
            text: 'Likewise, features related to crypto assets and future geographic expansion may be made available gradually, at VerticoSys’s discretion, and will be subject to specific additional terms where applicable.',
          },
        ],
      },
      {
        title: '4. Registration and User Account',
        blocks: [
          {
            type: 'p',
            text: 'Use of the platform requires prior registration, providing true, complete and up-to-date information about the Contracting Company and its Operating Users. The Contracting Company is responsible for maintaining the confidentiality of access credentials and managing the permission profiles of its Operating Users.',
          },
          {
            type: 'p',
            text: 'VerticoSys may request additional documents for identity verification, anti-money laundering (AML) and regulatory compliance purposes, in line with the requirements applicable to the Financial Rails Partners.',
          },
          {
            type: 'p',
            text: 'The Contracting Company is fully responsible for the actions performed by its Operating Users within the platform, including the correct assignment of profiles and access levels.',
          },
        ],
      },
      {
        title: '5. Plans, Prices and Payment',
        blocks: [
          {
            type: 'p',
            text: 'Access to the Services is contracted under a specific commercial plan, with amounts, frequency and conditions defined in a commercial proposal or separate agreement entered into between VerticoSys and the Contracting Company. Amounts may be adjusted upon prior notice, observing the minimum period established in the agreement.',
          },
          {
            type: 'p',
            text: 'In addition to the platform subscription (SaaS), certain transactions executed through the Financial Rails Partners may be subject to specific fees (e.g. PIX, boletos, FX), which will be disclosed to the User in the platform interface before the operation is confirmed.',
          },
          {
            type: 'p',
            text: 'Failure to pay amounts due may result in suspension of access to the Services, without prejudice to the collection of outstanding amounts and other applicable measures.',
          },
        ],
      },
      {
        title: '6. Financial Rails and VerticoSys’s Role',
        blocks: [
          {
            type: 'p',
            text: 'The technical and regulatory execution of financial operations made available through the platform (including PIX, transfers, FX and card processing) is carried out through partnerships with duly authorized financial infrastructure institutions and providers, including Gates2B and GlobalDEX.',
          },
          {
            type: 'p',
            text: 'In such operations, VerticoSys acts as a commercial agent and technological orchestration layer, earning a commission on intermediated transactions. VerticoSys is not, and does not present itself as, a financial institution, payment institution or foreign exchange broker, and does not directly hold custody of Users’ funds, which remain under the regulatory responsibility of the respective Financial Rails Partners.',
          },
          {
            type: 'p',
            text: 'The User acknowledges that availability, settlement timeframes and any operational restrictions on financial transactions are subject to the policies, schedules and limits defined by the Financial Rails Partners, and that such aspects cannot be unilaterally guaranteed by VerticoSys.',
          },
        ],
      },
      {
        title: '7. User Obligations',
        blocks: [
          {
            type: 'ul',
            items: [
              'Use the platform exclusively for lawful purposes compatible with its business activity;',
              'Not use the Services for money laundering, terrorism financing, fraud or any other unlawful activity;',
              'Provide truthful information and keep its registration data up to date;',
              'Safeguard the security of its access credentials, not sharing them with unauthorized third parties;',
              'Comply with the tax, foreign exchange and regulatory legislation applicable to operations carried out through the platform;',
              'Immediately notify VerticoSys of any unauthorized use of its account or suspected security breach.',
            ],
          },
        ],
      },
      {
        title: '8. Intellectual Property',
        blocks: [
          {
            type: 'p',
            text: 'All intellectual property rights relating to the VerticoSys platform, including, without limitation, software, source code, design, trademark, layout, documentation and other elements, are the exclusive property of ANITEC TECNOLOGIA EM SISTEMAS DE INFORMAÇÕES LTDA or its licensors. Reproduction, reverse engineering, modification or unauthorized commercial exploitation is prohibited.',
          },
          {
            type: 'p',
            text: 'Contracting the Services grants the Contracting Company a non-exclusive, non-transferable license limited to the term of the agreement, exclusively for the purposes set out in these Terms.',
          },
        ],
      },
      {
        title: '9. Confidentiality',
        blocks: [
          {
            type: 'p',
            text: 'The parties undertake to maintain confidentiality regarding confidential information exchanged as a result of the contractual relationship, including financial, strategic and technical data, using it exclusively for the purposes of providing the Services, except where disclosure is required by law, court order or a competent regulatory authority.',
          },
        ],
      },
      {
        title: '10. Personal Data Protection',
        blocks: [
          {
            type: 'p',
            text: 'The processing of personal data carried out within the VerticoSys platform complies with the Brazilian General Data Protection Law (Law No. 13,709/2018) and other applicable rules, as detailed in the VerticoSys Privacy Policy, which forms an integral part of these Terms by reference.',
          },
        ],
      },
      {
        title: '11. Service Availability',
        blocks: [
          {
            type: 'p',
            text: 'VerticoSys will use its best efforts to keep the platform continuously available, but may carry out scheduled maintenance interruptions, with prior notice where possible, as well as emergency interruptions necessary for the security and integrity of the Services. Specific service levels (SLA) may be defined in a separate commercial agreement.',
          },
        ],
      },
      {
        title: '12. Limitation of Liability',
        blocks: [
          {
            type: 'p',
            text: 'VerticoSys shall not be liable for: (i) unavailability arising from connectivity failures, third-party infrastructure or force majeure events; (ii) delays, failures or unavailability attributable to the Financial Rails Partners or other integrated financial institutions; (iii) financial, tax, foreign exchange or investment decisions made by the User based on information available on the platform; (iv) indirect damages, lost profits or data loss arising from improper use of the platform by the User.',
          },
          {
            type: 'p',
            text: 'In any event, VerticoSys’s liability for direct damages demonstrably caused by its conduct shall be limited to the amounts effectively paid by the Contracting Company in the 12 (twelve) months preceding the event giving rise to the damage, except in cases of willful misconduct or gross negligence.',
          },
        ],
      },
      {
        title: '13. Suspension and Termination',
        blocks: [
          {
            type: 'p',
            text: 'VerticoSys may suspend or terminate the User’s access to the Services, upon notice, in the event of breach of these Terms, payment default, evidence of fraudulent use or determination by a competent authority.',
          },
          {
            type: 'p',
            text: 'The User may request the closure of its account at any time, subject to the applicable contractual conditions, remaining responsible for any outstanding obligations until the effective closing date.',
          },
        ],
      },
      {
        title: '14. Changes to these Terms',
        blocks: [
          {
            type: 'p',
            text: 'VerticoSys may amend these Terms at any time to reflect platform developments, regulatory changes or operational improvements. Material changes will be communicated to Users with reasonable advance notice, and continued use of the platform after such communication shall be interpreted as acceptance of the new conditions.',
          },
        ],
      },
      {
        title: '15. Governing Law and Jurisdiction',
        blocks: [
          {
            type: 'p',
            text: 'These Terms are governed by the laws of the Federative Republic of Brazil. The courts of the Judicial District of São Paulo/SP are elected to settle any disputes arising from these Terms, with express waiver of any other, however privileged it may be.',
          },
        ],
      },
      {
        title: '16. General Provisions',
        blocks: [
          {
            type: 'p',
            text: 'If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall remain in full force. Tolerance regarding any breach of any clause shall not imply novation or waiver of rights.',
          },
        ],
      },
      {
        title: '17. Contact',
        blocks: [
          {
            type: 'p',
            text: 'For questions about these Terms, the User may contact ANITEC TECNOLOGIA EM SISTEMAS DE INFORMAÇÕES LTDA, CNPJ 41.522.323/0001-22, headquartered at Av. Brig. Faria Lima, 1811, São Paulo/SP, Brazil, by phone at +55 (43) 9934-0064.',
          },
        ],
      },
    ],
  },
};
