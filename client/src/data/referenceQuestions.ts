export type ReferenceQuestion = {
  id: number;
  axis: string;
  topic: string;
  difficulty: "Fácil" | "Média" | "Difícil";
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
  analysis: string[];
  source: string;
};

export const referenceQuestions: ReferenceQuestion[] = [
  {
    "id": 1,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Média",
    "prompt": "A Lei nº 14.133/2021, ao tratar da fase preparatória da licitação na Administração Pública, estabeleceu um conjunto de requisitos para o planejamento da contratação. Nesse contexto, o estudo técnico preliminar deve conter, entre outros elementos, a descrição da necessidade da contratação, a estimativa de preços, a justificativa para o parcelamento ou não do objeto e:",
    "options": [
      "análise de riscos, que deverá considerar os riscos capazes de comprometer o sucesso da contratação e as respectivas medidas de mitigação.",
      "definição do regime de execução contratual, que deverá ser necessariamente o de empreitada por preço unitário para serviços de engenharia.",
      "indicação do orçamento sigiloso, que será divulgado apenas após a assinatura do contrato para preservar o interesse público.",
      "escolha do tipo de licitação, que deverá ser obrigatoriamente o menor preço para qualquer objeto, salvo exceções legais."
    ],
    "correct": 0,
    "explanation": "Art. 18 da Lei 14.133/2021: o estudo técnico preliminar deve conter, entre outros, a análise de riscos e as respectivas medidas de mitigação. As demais alternativas trazem exigências inexistentes ou distorcidas (regime obrigatório, orçamento sigiloso, tipo de licitação fixo).",
    "analysis": [
      "A) Correta — conforme o art. 18, inciso VI, da Lei 14.133/2021.",
      "B) Incorreta — o regime de execução não é fixo; pode ser empreitada por preço global, unitário, tarefa ou contratação integrada.",
      "C) Incorreta — o orçamento é público e divulgado no edital, não sigiloso até a assinatura.",
      "D) Incorreta — o tipo de licitação não é obrigatoriamente menor preço; há ainda melhor técnica, técnica e preço, etc."
    ],
    "source": "Lei 14.133/2021, art. 18",
    "topic": "Estudo técnico preliminar e análise de riscos"
  },
  {
    "id": 2,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Média",
    "prompt": "No âmbito da gestão pública por resultados, o Balanced Scorecard (BSC) é uma ferramenta que traduz a missão e a estratégia da organização em objetivos e indicadores. No setor público, uma das adaptações necessárias do BSC é:",
    "options": [
      "substituir a perspectiva financeira pela perspectiva de valor público ou de resultados para a sociedade.",
      "eliminar a perspectiva de processos internos, pois não se aplica à administração pública.",
      "adotar exclusivamente indicadores financeiros, já que o orçamento público é a principal restrição.",
      "centralizar todas as decisões na perspectiva de aprendizado e crescimento."
    ],
    "correct": 0,
    "explanation": "No setor público, a perspectiva financeira é substituída ou complementada pela perspectiva de valor público ou de resultados para a sociedade, já que o lucro não é o fim último. As demais alternativas são incorretas: processos internos são relevantes, não se usa só indicadores financeiros e não há centralização exclusiva.",
    "analysis": [
      "A) Correta — adaptação clássica do BSC para o setor público (Kaplan & Norton).",
      "B) Incorreta — processos internos são fundamentais para eficiência e qualidade.",
      "C) Incorreta — a gestão pública não se restringe a indicadores financeiros.",
      "D) Incorreta — aprendizado e crescimento é uma das perspectivas, não a única."
    ],
    "source": "Kaplan & Norton; adaptação para setor público",
    "topic": "Balanced Scorecard no setor público"
  },
  {
    "id": 3,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Difícil",
    "prompt": "Sobre o controle social e a transparência na gestão pública, a Lei de Acesso à Informação (Lei nº 12.527/2011) estabelece que os órgãos públicos devem disponibilizar informações de interesse coletivo. Em relação à transparência ativa, é correto afirmar que:",
    "options": [
      "os sítios oficiais devem divulgar, entre outros, registros de repasses de recursos públicos e respectivas prestações de contas, independentemente de solicitação.",
      "a transparência ativa é facultativa para os municípios com menos de 20 mil habitantes, que podem optar por fornecer informações apenas mediante requerimento.",
      "a divulgação proativa de informações só é exigida para atos normativos, não para dados orçamentários ou de execução financeira.",
      "a Lei de Acesso à Informação não se aplica a empresas públicas e sociedades de economia mista, pois estas seguem regime de direito privado."
    ],
    "correct": 0,
    "explanation": "A transparência ativa exige a divulgação espontânea de informações, inclusive repasses de recursos, na internet (art. 8º da LAI). As demais são falsas: não há exceção para municípios pequenos, não se limita a atos normativos, e a LAI aplica-se a empresas estatais.",
    "analysis": [
      "A) Correta — art. 8º, §1º, inciso V, da Lei 12.527/2011.",
      "B) Incorreta — não há essa exceção; a transparência ativa é obrigatória para todos.",
      "C) Incorreta — abrange também execução orçamentária e financeira.",
      "D) Incorreta — a LAI se aplica a todas as entidades que recebem recursos públicos."
    ],
    "source": "Lei 12.527/2011, art. 8º",
    "topic": "Transparência ativa e Lei de Acesso à Informação"
  },
  {
    "id": 4,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Média",
    "prompt": "A gestão por resultados na administração pública busca aumentar a eficiência, eficácia e efetividade das ações governamentais. Nesse contexto, o modelo de gestão que se baseia na definição de metas claras, na medição de desempenho e na autonomia gerencial, com foco em resultados previamente acordados, é conhecido como:",
    "options": [
      "contrato de gestão ou acordo de resultados.",
      "orçamento participativo.",
      "planejamento estratégico situacional.",
      "reengenharia de processos."
    ],
    "correct": 0,
    "explanation": "O contrato de gestão (ou acordo de resultados) é o instrumento típico da gestão por resultados, com metas, indicadores e autonomia. As demais opções são ferramentas ou modelos, mas não correspondem exatamente a essa descrição (orçamento participativo foca na participação; PES é planejamento; reengenharia é redesenho de processos).",
    "analysis": [
      "A) Correta — conceito clássico de contrato de gestão.",
      "B) Incorreta — orçamento participativo é mecanismo de participação social, não de gestão por resultados.",
      "C) Incorreta — planejamento estratégico situacional é um método de planejamento, não um contrato.",
      "D) Incorreta — reengenharia é redesenho radical de processos."
    ],
    "source": "ENAP; conceitos de gestão por resultados",
    "topic": "Gestão por resultados e contratualização"
  },
  {
    "id": 5,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Fácil",
    "prompt": "O empreendedorismo governamental, como abordagem na gestão pública, caracteriza-se por:",
    "options": [
      "introdução de inovações e novas lideranças que buscam soluções criativas para problemas públicos, com foco em eficiência e impacto social.",
      "transferência integral das atividades do Estado para a iniciativa privada, com eliminação da regulação estatal.",
      "adoção de práticas empresariais privadas sem qualquer consideração às especificidades do setor público.",
      "redução do tamanho do Estado e extinção de programas sociais."
    ],
    "correct": 0,
    "explanation": "Empreendedorismo governamental significa inovar na gestão pública, com novas lideranças, criatividade e foco em resultados para a sociedade. As demais alternativas distorcem o conceito, confundindo com privatização, aplicação irrestrita de práticas privadas ou redução do Estado.",
    "analysis": [
      "A) Correta — definição alinhada à literatura de empreendedorismo público.",
      "B) Incorreta — não significa privatização, mas sim inovação na gestão.",
      "C) Incorreta — há adaptação, não aplicação mecânica.",
      "D) Incorreta — não se confunde com redução de Estado ou extinção de programas."
    ],
    "source": "ENAP; empreendedorismo governamental",
    "topic": "Empreendedorismo governamental"
  },
  {
    "id": 6,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Difícil",
    "prompt": "Sobre a cultura organizacional no setor público e os processos de mudança, é correto afirmar que:",
    "options": [
      "a mudança cultural requer a atuação em múltiplas dimensões, como valores, ritos, símbolos e práticas, sendo um processo de médio e longo prazo.",
      "a cultura organizacional é imutável, pois está enraizada na tradição do serviço público e na legislação.",
      "a mudança cultural pode ser implementada apenas por meio de alterações na estrutura organizacional, independentemente do comportamento das pessoas.",
      "a cultura organizacional no setor público é homogênea em todos os órgãos, o que facilita processos de mudança em larga escala."
    ],
    "correct": 0,
    "explanation": "A cultura organizacional é mutável, mas requer ações em várias frentes (valores, ritos, práticas) e tempo. As demais são falsas: cultura não é imutável, mudança não se restringe a estrutura, e não há homogeneidade entre órgãos.",
    "analysis": [
      "A) Correta — abordagem multidimensional e de longo prazo é a mais adequada.",
      "B) Incorreta — cultura é dinâmica e pode ser transformada.",
      "C) Incorreta — mudança cultural envolve comportamentos e crenças, não só estrutura.",
      "D) Incorreta — há grande diversidade cultural entre órgãos públicos."
    ],
    "source": "Teoria organizacional; ENAP",
    "topic": "Cultura organizacional e mudança"
  },
  {
    "id": 7,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Média",
    "prompt": "O governo eletrônico (e-gov) tem como um de seus pilares a oferta de serviços públicos digitais. Nessa perspectiva, a interoperabilidade entre sistemas governamentais é essencial para:",
    "options": [
      "permitir a troca de informações e a integração de dados entre diferentes órgãos, reduzindo a burocracia e melhorando o atendimento ao cidadão.",
      "garantir que todos os órgãos utilizem o mesmo sistema operacional e o mesmo software de gestão.",
      "substituir completamente o atendimento presencial, sem necessidade de canais alternativos.",
      "restringir o acesso a dados sensíveis, dificultando a transparência ativa."
    ],
    "correct": 0,
    "explanation": "Interoperabilidade é a capacidade de sistemas trocarem e usarem informações, fundamental para integração e eficiência. As demais são incorretas: não exige mesmo software, não substitui totalmente o presencial (nem é objetivo) e não restringe transparência.",
    "analysis": [
      "A) Correta — definição de interoperabilidade no e-gov.",
      "B) Incorreta — interoperabilidade é sobre comunicação, não padronização de software.",
      "C) Incorreta — e-gov amplia canais, não elimina o presencial.",
      "D) Incorreta — interoperabilidade pode melhorar a transparência."
    ],
    "source": "ENAP; conceitos de governo eletrônico",
    "topic": "Governo eletrônico e interoperabilidade"
  },
  {
    "id": 8,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Difícil",
    "prompt": "No planejamento estratégico aplicado ao setor público, a análise SWOT (Forças, Fraquezas, Oportunidades e Ameaças) é frequentemente utilizada. Em uma unidade de saúde pública, a escassez de profissionais especializados em uma determinada região deve ser classificada, na análise SWOT, como:",
    "options": [
      "ameaça, se considerada em relação à capacidade de atendimento e à concorrência com outros serviços, ou fraqueza, se analisada sob a ótica interna da organização.",
      "força, pois demonstra a necessidade de contratação e gera pressão política para investimentos.",
      "oportunidade, porque pode justificar a criação de novos programas de residência e parcerias.",
      "oportunidade e ameaça simultaneamente, sendo impossível determinar sem o contexto do planejamento."
    ],
    "correct": 0,
    "explanation": "Na SWOT, a escassez de profissionais é uma fraqueza interna (se a unidade não tem esses profissionais) e também uma ameaça externa (se outras unidades os disputam). A alternativa correta capta essa dualidade. As demais classificações são equivocadas.",
    "analysis": [
      "A) Correta — distinção entre ambiente interno (fraqueza) e externo (ameaça).",
      "B) Incorreta — escassez não é uma força.",
      "C) Incorreta — oportunidade seria algo externo favorável, não uma carência.",
      "D) Incorreta — é possível classificar, sim, com base na perspectiva."
    ],
    "source": "Planejamento estratégico; análise SWOT",
    "topic": "Análise SWOT em saúde pública"
  },
  {
    "id": 9,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Média",
    "prompt": "O orçamento participativo é um mecanismo que aproxima a gestão pública da sociedade. Sobre esse instrumento, é correto afirmar que:",
    "options": [
      "permite que a população decida, direta ou indiretamente, sobre a alocação de parte dos recursos públicos em prioridades definidas democraticamente.",
      "é um processo exclusivamente consultivo, sem qualquer vinculação com a execução orçamentária.",
      "substitui integralmente o orçamento anual elaborado pelo Poder Executivo, conferindo autonomia absoluta à comunidade.",
      "aplica-se apenas a municípios, sendo vedado em âmbito estadual e federal."
    ],
    "correct": 0,
    "explanation": "O orçamento participativo envolve a população na definição de prioridades de investimento. As demais são falsas: não é meramente consultivo (em muitos casos é deliberativo), não substitui o orçamento formal e pode ser aplicado em todas as esferas.",
    "analysis": [
      "A) Correta — conceito de orçamento participativo.",
      "B) Incorreta — pode ter caráter deliberativo e vinculante.",
      "C) Incorreta — não substitui o orçamento institucional.",
      "D) Incorreta — existem experiências em estados e na União."
    ],
    "source": "ENAP; orçamento participativo",
    "topic": "Orçamento participativo"
  },
  {
    "id": 10,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Média",
    "prompt": "A excelência nos serviços públicos está associada à qualidade do atendimento e à satisfação do cidadão. Nesse contexto, o paradigma do cliente na gestão pública:",
    "options": [
      "reconhece o cidadão como usuário e parte interessada, buscando atender suas necessidades com eficiência e qualidade, sem perder o caráter público e o princípio da impessoalidade.",
      "trata o cidadão como um consumidor comum, aplicando as mesmas regras de mercado e priorizando o lucro nas decisões.",
      "dispensa o controle social, uma vez que a satisfação do cliente é medida exclusivamente por pesquisas de opinião.",
      "impõe que todos os serviços públicos sejam cobrados, para que o cidadão exerça seu poder de escolha."
    ],
    "correct": 0,
    "explanation": "O paradigma do cliente na gestão pública coloca o cidadão no centro, com qualidade e eficiência, mas respeitando os princípios públicos (impessoalidade, continuidade, universalidade). As demais distorcem o conceito, confundindo com lógica de mercado, eliminando controle social ou cobrança generalizada.",
    "analysis": [
      "A) Correta — abordagem equilibrada entre foco no cidadão e princípios públicos.",
      "B) Incorreta — não se trata de consumidor comum nem de lucro.",
      "C) Incorreta — controle social é fundamental.",
      "D) Incorreta — serviços públicos essenciais são gratuitos e universais."
    ],
    "source": "ENAP; gestão pública orientada ao cidadão",
    "topic": "Paradigma do cidadão na gestão pública"
  },
  {
    "id": 11,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Difícil",
    "prompt": "A Lei nº 14.133/2021 (Nova Lei de Licitações) introduziu o princípio do planejamento como diretriz da administração pública. Nesse sentido, o plano de contratações anual (PCA) tem a finalidade de:",
    "options": [
      "organizar e planejar as contratações da administração para o exercício seguinte, com base nas prioridades da gestão e nos recursos disponíveis.",
      "substituir o processo licitatório, autorizando a contratação direta de todos os serviços listados no plano.",
      "ser elaborado exclusivamente para contratos de obras, não se aplicando a serviços ou compras.",
      "vincular a administração à execução integral de todas as contratações nele previstas, sob pena de responsabilidade do gestor."
    ],
    "correct": 0,
    "explanation": "O PCA é um instrumento de planejamento das contratações, organizando prioridades e recursos (art. 12 da Lei 14.133/2021). Não substitui licitação, não é só para obras e não tem caráter absolutamente vinculativo.",
    "analysis": [
      "A) Correta — descrição do PCA conforme a lei.",
      "B) Incorreta — o PCA não substitui a licitação.",
      "C) Incorreta — aplica-se a todas as contratações, não só obras.",
      "D) Incorreta — não é integralmente vinculativo; é planejamento, não compromisso executório."
    ],
    "source": "Lei 14.133/2021, art. 12",
    "topic": "Plano de Contratações Anual"
  },
  {
    "id": 12,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Fácil",
    "prompt": "A transparência na gestão pública é um princípio que se materializa por meio de canais de acesso à informação e prestação de contas. O instrumento que permite ao cidadão acompanhar a execução orçamentária e financeira do governo em tempo real, por meio da internet, é denominado:",
    "options": [
      "portal da transparência.",
      "plano plurianual.",
      "lei de diretrizes orçamentárias.",
      "relatório de gestão fiscal."
    ],
    "correct": 0,
    "explanation": "O Portal da Transparência é a principal ferramenta de transparência ativa na internet, com dados de execução orçamentária e financeira. As demais são instrumentos de planejamento ou prestação de contas, mas não com essa finalidade de tempo real.",
    "analysis": [
      "A) Correta — Portal da Transparência.",
      "B) Incorreta — PPA é planejamento de médio prazo.",
      "C) Incorreta — LDO é planejamento anual de metas.",
      "D) Incorreta — RGF é relatório de gestão fiscal."
    ],
    "source": "Lei de Acesso à Informação; Portal da Transparência",
    "topic": "Portal da Transparência"
  },
  {
    "id": 13,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Média",
    "prompt": "A reengenharia de processos, como técnica de gestão, propõe:",
    "options": [
      "o redesenho radical e fundamental dos processos organizacionais, com o objetivo de alcançar melhorias drásticas em custos, qualidade, serviço e velocidade.",
      "a melhoria incremental e contínua de pequenos ajustes nos processos, mantendo a estrutura organizacional existente.",
      "a automação de todos os processos sem revisão de sua lógica de funcionamento.",
      "a eliminação de processos administrativos, com foco exclusivo em atividades operacionais."
    ],
    "correct": 0,
    "explanation": "Reengenharia é redesenho radical de processos, não incremental (diferente de melhoria contínua). As demais opções não correspondem ao conceito: melhoria incremental é outra abordagem (Kaizen), automação sem revisão não é reengenharia, e eliminação de processos não é o foco.",
    "analysis": [
      "A) Correta — definição de Hammer & Champy.",
      "B) Incorreta — isso é melhoria contínua (Kaizen), não reengenharia.",
      "C) Incorreta — reengenharia requer revisão, não só automação.",
      "D) Incorreta — reengenharia redesenha, não elimina."
    ],
    "source": "Hammer & Champy; reengenharia",
    "topic": "Reengenharia de processos"
  },
  {
    "id": 14,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Difícil",
    "prompt": "Sobre as parcerias entre governo e sociedade, é correto afirmar que as organizações da sociedade civil podem celebrar termos de colaboração ou fomento com a administração pública, de acordo com o Marco Regulatório das Organizações da Sociedade Civil (Lei nº 13.019/2014). Nesse contexto, o termo de colaboração:",
    "options": [
      "é o instrumento firmado com a administração pública para a realização de parcerias quando envolver o compartilhamento de recursos humanos, materiais ou financeiros, com coparticipação da sociedade civil.",
      "destina-se exclusivamente a contratos com entidades sem fins lucrativos que atuam na área da saúde.",
      "dispensa a prestação de contas, uma vez que a sociedade civil é fiscalizada apenas internamente.",
      "é vedado para entidades que recebam recursos públicos, devendo ser usado apenas o convênio."
    ],
    "correct": 0,
    "explanation": "O termo de colaboração é o instrumento de parceria com coparticipação de recursos, conforme Lei 13.019/2014. As demais são incorretas: não é exclusivo de saúde, exige prestação de contas, e não é vedado — convênios também são possíveis, mas com distinções.",
    "analysis": [
      "A) Correta — definição do termo de colaboração no MROSC.",
      "B) Incorreta — aplica-se a diversas áreas.",
      "C) Incorreta — a prestação de contas é obrigatória.",
      "D) Incorreta — o termo de colaboração é previsto legalmente."
    ],
    "source": "Lei 13.019/2014 (MROSC)",
    "topic": "Termo de colaboração e MROSC"
  },
  {
    "id": 15,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Média",
    "prompt": "No contexto da qualidade e excelência nos serviços públicos, o Programa Nacional de Gestão Pública e Desburocratização (GesPública) foi uma iniciativa que:",
    "options": [
      "propôs um modelo de gestão baseado em critérios de excelência, com foco em resultados, cidadania e controle social.",
      "recomendou a extinção de todos os órgãos da administração direta, substituindo-os por agências reguladoras.",
      "estabeleceu a terceirização integral de todos os serviços públicos como meta principal.",
      "concentrou-se exclusivamente na informatização dos processos, sem abordar aspectos de gestão."
    ],
    "correct": 0,
    "explanation": "O GesPública foi um programa que promoveu a excelência na gestão pública com base em critérios como liderança, estratégia, cidadãos, etc. As demais alternativas não correspondem ao programa.",
    "analysis": [
      "A) Correta — alinhado com os objetivos do GesPública.",
      "B) Incorreta — não propôs extinção de órgãos.",
      "C) Incorreta — não tinha como meta a terceirização integral.",
      "D) Incorreta — abordava vários aspectos da gestão, não só informática."
    ],
    "source": "ENAP; GesPública",
    "topic": "GesPública e excelência no serviço público"
  },
  {
    "id": 16,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Fácil",
    "prompt": "O controle social na gestão pública pode ser exercido por meio de conselhos de gestão, que são instâncias:",
    "options": [
      "colegiadas, com participação de representantes do governo e da sociedade, para acompanhar e fiscalizar políticas públicas.",
      "exclusivas do Poder Legislativo, sem participação da sociedade civil.",
      "consultivas apenas, sem qualquer poder de deliberação ou fiscalização.",
      "subordinadas ao Ministério Público, que detém o controle social por excelência."
    ],
    "correct": 0,
    "explanation": "Conselhos de gestão são colegiados com participação social e governamental, com funções de acompanhamento e fiscalização. As demais são falsas: não são exclusivos do Legislativo, têm poder (alguns deliberativos) e não são subordinados ao MP.",
    "analysis": [
      "A) Correta — definição de conselho de gestão.",
      "B) Incorreta — há participação social.",
      "C) Incorreta — podem ser deliberativos e fiscalizadores.",
      "D) Incorreta — são instâncias autônomas, não subordinadas."
    ],
    "source": "Controle social; conselhos de gestão",
    "topic": "Conselhos de gestão e controle social"
  },
  {
    "id": 17,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Difícil",
    "prompt": "A tecnologia da informação e comunicação (TIC) aplicada à gestão pública não se limita à automação de processos. Um dos seus papéis mais estratégicos é:",
    "options": [
      "viabilizar a gestão do conhecimento, a integração entre políticas e a tomada de decisão baseada em dados (data-driven decision).",
      "substituir totalmente os servidores públicos por sistemas automatizados, reduzindo custos.",
      "restringir o acesso do cidadão a informações, para evitar questionamentos judiciais.",
      "padronizar todos os serviços públicos em uma única plataforma, sem exceções."
    ],
    "correct": 0,
    "explanation": "As TICs têm papel estratégico na gestão do conhecimento, integração de políticas e decisão baseada em dados. As demais alternativas exageram ou distorcem o papel das TICs (substituição, restrição de acesso, padronização sem exceções).",
    "analysis": [
      "A) Correta — papel estratégico das TICs na gestão pública.",
      "B) Incorreta — TIC complementa, não substitui servidores.",
      "C) Incorreta — TIC amplia transparência, não restringe.",
      "D) Incorreta — nem sempre há uma única plataforma; há interoperabilidade."
    ],
    "source": "ENAP; TIC na gestão pública",
    "topic": "TIC e transformação da gestão pública"
  },
  {
    "id": 18,
    "axis": "Eixo 1 — Gestão pública e estratégia",
    "difficulty": "Média",
    "prompt": "O planejamento estratégico em uma organização pública deve considerar o alinhamento com o plano plurianual (PPA), a lei de diretrizes orçamentárias (LDO) e a lei orçamentária anual (LOA). Esse conjunto de instrumentos forma o:",
    "options": [
      "sistema de planejamento e orçamento público, que integra as dimensões estratégica, tática e operacional.",
      "plano de contratações anual, que substitui o orçamento para fins de compras.",
      "orçamento participativo, que define as prioridades da sociedade.",
      "programa de gestão de resultados, focado exclusivamente em indicadores de desempenho."
    ],
    "correct": 0,
    "explanation": "PPA, LDO e LOA compõem o sistema de planejamento e orçamento, que integra estratégia, tática e operação. As demais opções confundem com outros instrumentos (PCA, orçamento participativo, programa de resultados).",
    "analysis": [
      "A) Correta — sistema de planejamento e orçamento.",
      "B) Incorreta — PCA é instrumento de licitação, não do sistema orçamentário.",
      "C) Incorreta — orçamento participativo é uma ferramenta, não o sistema completo.",
      "D) Incorreta — gestão por resultados é um modelo, não o sistema orçamentário."
    ],
    "source": "CF/88; Lei 4.320/64; PPA, LDO, LOA",
    "topic": "PPA, LDO e LOA"
  },
  {
    "id": 19,
    "axis": "Eixo 2 — Gestão de pessoas e redes",
    "difficulty": "Média",
    "prompt": "A gestão de pessoas por competências, no setor público, busca alinhar o desenvolvimento dos servidores com os objetivos estratégicos da organização. Nesse modelo, a competência pode ser definida como:",
    "options": [
      "um conjunto de conhecimentos, habilidades e atitudes (CHA) que geram desempenho superior e agregam valor à organização.",
      "apenas a qualificação formal, medida por diplomas e certificados de cursos.",
      "a capacidade de executar tarefas operacionais, sem necessidade de alinhamento estratégico.",
      "a experiência profissional acumulada ao longo da carreira, desconsiderando conhecimentos teóricos."
    ],
    "correct": 0,
    "explanation": "O conceito de competência (CHA) é amplamente aceito: conhecimentos, habilidades e atitudes que geram desempenho superior. As demais são reducionistas (só diploma, só tarefas, só experiência).",
    "analysis": [
      "A) Correta — definição consagrada de competência.",
      "B) Incorreta — competência vai além do diploma.",
      "C) Incorreta — inclui alinhamento estratégico e valores.",
      "D) Incorreta — experiência é importante, mas não é o único elemento."
    ],
    "source": "ENAP; gestão por competências",
    "topic": "Conceito de competência"
  },
  {
    "id": 20,
    "axis": "Eixo 2 — Gestão de pessoas e redes",
    "difficulty": "Difícil",
    "prompt": "Sobre o modelo integrado de gestão por competências, é correto afirmar que ele engloba:",
    "options": [
      "a identificação, o mapeamento, o desenvolvimento e a avaliação de competências, integrando as dimensões individual, grupal e organizacional.",
      "apenas o recrutamento e seleção de profissionais, baseado em testes de competências técnicas.",
      "a gestão de desempenho exclusivamente, sem considerar o desenvolvimento de competências.",
      "a definição de competências apenas para cargos de liderança, desconsiderando os demais servidores."
    ],
    "correct": 0,
    "explanation": "O modelo integrado envolve identificação, mapeamento, desenvolvimento e avaliação, em múltiplos níveis (individual, equipe, organização). As demais são parciais ou incorretas.",
    "analysis": [
      "A) Correta — modelo integrado de gestão por competências.",
      "B) Incorreta — vai além de recrutamento e seleção.",
      "C) Incorreta — inclui desenvolvimento, não só avaliação.",
      "D) Incorreta — aplica-se a todos os níveis."
    ],
    "source": "ENAP; modelo integrado de competências",
    "topic": "Modelo integrado de gestão por competências"
  },
  {
    "id": 21,
    "axis": "Eixo 2 — Gestão de pessoas e redes",
    "difficulty": "Média",
    "prompt": "Na gestão estratégica de pessoas, a gestão do desempenho é um processo contínuo que deve estar alinhado com a missão e os objetivos da organização. Uma das ferramentas utilizadas para avaliar o desempenho dos servidores é a avaliação de desempenho individual, que deve:",
    "options": [
      "ser baseada em critérios objetivos e previamente definidos, com feedback regular e planos de desenvolvimento.",
      "servir apenas para subsidiar a demissão de servidores com baixo desempenho.",
      "ser realizada anualmente, sem necessidade de feedback ao longo do ano.",
      "considerar exclusivamente a opinião do gestor imediato, sem participação do avaliado."
    ],
    "correct": 0,
    "explanation": "A avaliação de desempenho deve ter critérios objetivos, feedback e planos de desenvolvimento. As demais são incorretas: não é só para demissão, deve ser contínua e não deve ser unilateral.",
    "analysis": [
      "A) Correta — avaliação de desempenho com critérios objetivos e feedback.",
      "B) Incorreta — não é apenas para demissão.",
      "C) Incorreta — deve ser contínua, não só anual.",
      "D) Incorreta — deve envolver o avaliado (autoavaliação, etc.)."
    ],
    "source": "ENAP; gestão de desempenho",
    "topic": "Avaliação de desempenho individual"
  },
  {
    "id": 22,
    "axis": "Eixo 2 — Gestão de pessoas e redes",
    "difficulty": "Fácil",
    "prompt": "A comunicação na gestão pública é um fator crítico para o alinhamento e a eficácia organizacional. Sobre a comunicação interna, é correto afirmar que ela deve:",
    "options": [
      "ser planejada e estratégica, utilizando canais adequados para disseminar informações relevantes e promover o diálogo.",
      "ser evitada, pois gera ruídos e atrasos nos processos decisórios.",
      "ser restrita aos níveis hierárquicos superiores, que detêm o conhecimento necessário.",
      "basear-se exclusivamente em comunicados oficiais e memorandos, sem interação."
    ],
    "correct": 0,
    "explanation": "A comunicação interna deve ser planejada, estratégica e usar canais adequados para diálogo. As demais são incorretas: não deve ser evitada, não é restrita a chefias e não se baseia só em comunicados unilaterais.",
    "analysis": [
      "A) Correta — comunicação interna planejada e dialógica.",
      "B) Incorreta — comunicação é essencial.",
      "C) Incorreta — deve envolver todos os níveis.",
      "D) Incorreta — deve ser interativa, não só unidirecional."
    ],
    "source": "ENAP; comunicação na gestão pública",
    "topic": "Comunicação interna"
  },
  {
    "id": 23,
    "axis": "Eixo 2 — Gestão de pessoas e redes",
    "difficulty": "Difícil",
    "prompt": "As redes organizacionais na gestão pública são estruturas que conectam atores públicos e privados para a coprodução de serviços e políticas. Uma característica fundamental das redes organizacionais é:",
    "options": [
      "a interdependência entre os atores e a coordenação baseada em confiança e objetivos comuns.",
      "a subordinação hierárquica a uma única entidade centralizadora.",
      "a competição acirrada entre os participantes, com foco em resultados individuais.",
      "a formalização excessiva, com contratos detalhados para cada interação."
    ],
    "correct": 0,
    "explanation": "As redes se caracterizam por interdependência, coordenação e confiança, não por hierarquia rígida ou competição. A formalização excessiva é típica de hierarquias, não de redes.",
    "analysis": [
      "A) Correta — características de redes organizacionais.",
      "B) Incorreta — redes são horizontais, não hierárquicas.",
      "C) Incorreta — a lógica é colaborativa, não competitiva.",
      "D) Incorreta — redes tendem a ser mais flexíveis."
    ],
    "source": "Teoria de redes; ENAP",
    "topic": "Redes organizacionais"
  },
  {
    "id": 24,
    "axis": "Eixo 2 — Gestão de pessoas e redes",
    "difficulty": "Média",
    "prompt": "Na gestão de pessoas no setor público, um dos desafios é a complexidade da atividade, que envolve múltiplos atores, interesses e normas. Sobre a complexidade, é correto afirmar que:",
    "options": [
      "exige uma abordagem sistêmica, que considere as interações entre os diferentes subsistemas e o ambiente externo.",
      "pode ser simplificada pela aplicação de modelos privados de gestão, sem adaptação.",
      "é um obstáculo intransponível, que inviabiliza a gestão estratégica de pessoas.",
      "deve ser ignorada, pois a legislação já prevê todas as situações possíveis."
    ],
    "correct": 0,
    "explanation": "A complexidade da gestão pública exige abordagem sistêmica, considerando interações e ambiente. As demais são incorretas: modelos privados precisam ser adaptados, não é intransponível, e a legislação não cobre todas as situações.",
    "analysis": [
      "A) Correta — abordagem sistêmica para complexidade.",
      "B) Incorreta — adaptação é necessária.",
      "C) Incorreta — não inviabiliza a gestão estratégica.",
      "D) Incorreta — a legislação não cobre todas as situações."
    ],
    "source": "ENAP; complexidade na gestão pública",
    "topic": "Complexidade na gestão de pessoas"
  },
  {
    "id": 25,
    "axis": "Eixo 2 — Gestão de pessoas e redes",
    "difficulty": "Média",
    "prompt": "O espaço ocupacional é um conceito que, na gestão de pessoas, refere-se:",
    "options": [
      "à posição que o indivíduo ocupa na estrutura organizacional, considerando suas responsabilidades, autonomia e possibilidade de desenvolvimento.",
      "ao local físico onde o servidor exerce suas atividades, incluindo mobiliário e equipamentos.",
      "à área geográfica de atuação do órgão público, que define o raio de atendimento à população.",
      "ao cargo público em si, independente das características do ocupante."
    ],
    "correct": 0,
    "explanation": "Espaço ocupacional é a posição do indivíduo na organização, com suas responsabilidades e autonomia. As demais confundem com espaço físico, área geográfica ou cargo em abstrato.",
    "analysis": [
      "A) Correta — definição de espaço ocupacional.",
      "B) Incorreta — é sobre posição organizacional, não físico.",
      "C) Incorreta — não é geográfico.",
      "D) Incorreta — não é só o cargo, mas a posição do ocupante."
    ],
    "source": "ENAP; espaço ocupacional",
    "topic": "Espaço ocupacional"
  },
  {
    "id": 26,
    "axis": "Eixo 2 — Gestão de pessoas e redes",
    "difficulty": "Difícil",
    "prompt": "A gestão de pessoas por competências, como elo entre indivíduo e organização, pressupõe que:",
    "options": [
      "as competências individuais devem ser alinhadas às competências organizacionais e às estratégias da instituição.",
      "as competências são estáveis ao longo do tempo, não necessitando de desenvolvimento contínuo.",
      "o foco deve ser nas competências técnicas, desconsiderando as comportamentais.",
      "a organização deve se adaptar às competências dos indivíduos, sem definir prioridades estratégicas."
    ],
    "correct": 0,
    "explanation": "A gestão por competências busca o alinhamento entre competências individuais e organizacionais. As demais são incorretas: competências se desenvolvem, incluem competências comportamentais e a organização define prioridades.",
    "analysis": [
      "A) Correta — alinhamento entre indivíduo e organização.",
      "B) Incorreta — competências são dinâmicas.",
      "C) Incorreta — competências comportamentais também são importantes.",
      "D) Incorreta — a organização também tem suas estratégias."
    ],
    "source": "ENAP; gestão por competências",
    "topic": "Competência como elo indivíduo-organização"
  },
  {
    "id": 27,
    "axis": "Eixo 2 — Gestão de pessoas e redes",
    "difficulty": "Fácil",
    "prompt": "Na gestão de redes organizacionais, a cooperação entre os atores é essencial. O conceito de governança de redes refere-se:",
    "options": [
      "ao conjunto de mecanismos de coordenação, tomada de decisão e prestação de contas que orientam as interações na rede.",
      "à imposição de regras por um ator central que controla todos os recursos.",
      "à ausência de regras, onde cada ator age de forma independente.",
      "à formalização de contratos individuais com cada membro da rede."
    ],
    "correct": 0,
    "explanation": "Governança de redes são os mecanismos de coordenação e prestação de contas. As demais são incorretas: não é centralização impositiva, nem ausência de regras, nem contratos individuais.",
    "analysis": [
      "A) Correta — conceito de governança de redes.",
      "B) Incorreta — governança é mais horizontal.",
      "C) Incorreta — há regras e coordenação.",
      "D) Incorreta — não se baseia em contratos individuais."
    ],
    "source": "Teoria de redes; governança",
    "topic": "Governança de redes"
  },
  {
    "id": 28,
    "axis": "Eixo 2 — Gestão de pessoas e redes",
    "difficulty": "Média",
    "prompt": "No setor público, a gestão de pessoas tem como diferencial competitivo, entre outros fatores:",
    "options": [
      "a capacidade de atrair, desenvolver e reter talentos, alinhada ao interesse público e à eficiência.",
      "a isonomia salarial, que impede qualquer diferenciação por desempenho.",
      "a estabilidade do servidor, que garante segurança mas limita a competitividade.",
      "a rigidez normativa, que elimina a necessidade de gestão estratégica."
    ],
    "correct": 0,
    "explanation": "A gestão de pessoas pode ser um diferencial competitivo se atrair e desenvolver talentos, alinhada ao interesse público. As demais são limitantes ou incorretas: isonomia não impede diferenciação por desempenho, estabilidade não é só limitante, e rigidez normativa não elimina a necessidade de gestão.",
    "analysis": [
      "A) Correta — atração e desenvolvimento de talentos como diferencial.",
      "B) Incorreta — há possibilidade de diferenciação por desempenho.",
      "C) Incorreta — a estabilidade pode ser compatível com competitividade.",
      "D) Incorreta — a gestão estratégica é necessária mesmo com normas."
    ],
    "source": "ENAP; gestão de pessoas no setor público",
    "topic": "Gestão de pessoas como diferencial competitivo"
  },
  {
    "id": 29,
    "axis": "Eixo 2 — Gestão de pessoas e redes",
    "difficulty": "Difícil",
    "prompt": "A comunicação na gestão pública deve ser transparente e acessível. Sobre a comunicação externa, é correto afirmar que:",
    "options": [
      "deve considerar as diferentes linguagens e canais para alcançar os diversos públicos, incluindo pessoas com deficiência.",
      "deve ser padronizada e técnica, mesmo que isso limite o alcance para leigos.",
      "pode ser restrita a veículos oficiais, como o Diário Oficial, dispensando outros meios.",
      "deve priorizar a comunicação de massa, em detrimento da comunicação direta com grupos específicos."
    ],
    "correct": 0,
    "explanation": "A comunicação externa deve ser inclusiva, com linguagens e canais diversos. As demais são incorretas: não deve ser apenas técnica, não deve se restringir a veículos oficiais e deve considerar públicos específicos.",
    "analysis": [
      "A) Correta — comunicação inclusiva e multicanal.",
      "B) Incorreta — deve ser acessível, não só técnica.",
      "C) Incorreta — deve usar diversos canais.",
      "D) Incorreta — deve considerar grupos específicos."
    ],
    "source": "ENAP; comunicação externa",
    "topic": "Comunicação externa e transparência"
  },
  {
    "id": 30,
    "axis": "Eixo 2 — Gestão de pessoas e redes",
    "difficulty": "Média",
    "prompt": "As possibilidades e limites da gestão de pessoas como diferencial competitivo no setor público incluem, como limitação:",
    "options": [
      "a rigidez da legislação e a limitação orçamentária, que restringem a autonomia do gestor para políticas de remuneração e desenvolvimento.",
      "a inexistência de qualquer norma ou legislação, o que gera insegurança jurídica.",
      "a ausência de interesse dos servidores, que não buscam desenvolvimento profissional.",
      "a total ausência de recursos financeiros para qualquer ação de desenvolvimento de pessoas."
    ],
    "correct": 0,
    "explanation": "A rigidez legal e orçamentária são limites reais para a gestão de pessoas no setor público. As demais são incorretas: há legislação, os servidores geralmente têm interesse, e há recursos (embora limitados).",
    "analysis": [
      "A) Correta — rigidez legal e orçamentária como limites.",
      "B) Incorreta — há muitas normas.",
      "C) Incorreta — há interesse na maioria dos casos.",
      "D) Incorreta — há recursos, embora limitados."
    ],
    "source": "ENAP; gestão de pessoas no setor público",
    "topic": "Limites da gestão de pessoas no setor público"
  },
  {
    "id": 31,
    "axis": "Eixo 3 — Políticas públicas e gestão do SUS",
    "difficulty": "Média",
    "prompt": "No Sistema Único de Saúde (SUS), o Planejamento em Saúde é um processo contínuo que se materializa em instrumentos de gestão. O Plano de Saúde, instrumento central do planejamento, deve:",
    "options": [
      "ser elaborado para o período de quatro anos, em consonância com o plano plurianual (PPA), e conter diretrizes, objetivos e metas para a saúde.",
      "ser atualizado anualmente, sem necessidade de alinhamento com o PPA.",
      "ser elaborado exclusivamente pela esfera federal, com execução padronizada para estados e municípios.",
      "dispensar a participação social, uma vez que é um documento técnico."
    ],
    "correct": 0,
    "explanation": "O Plano de Saúde é elaborado para 4 anos, alinhado ao PPA, com diretrizes, objetivos e metas. As demais são incorretas: não é atualizado anualmente (embora haja revisões), não é exclusivo da União, e requer participação social.",
    "analysis": [
      "A) Correta — conforme Lei 8.080/90 e Resolução CNS.",
      "B) Incorreta — o Plano de Saúde é plurianual (4 anos).",
      "C) Incorreta — é elaborado por cada ente federativo.",
      "D) Incorreta — a participação social é obrigatória."
    ],
    "source": "Lei 8.080/90; Planejamento no SUS",
    "topic": "Plano de Saúde do SUS"
  },
  {
    "id": 32,
    "axis": "Eixo 3 — Políticas públicas e gestão do SUS",
    "difficulty": "Difícil",
    "prompt": "A Programação Anual de Saúde (PAS) é um instrumento de planejamento do SUS que:",
    "options": [
      "detalha as ações e metas do Plano de Saúde para o exercício anual, incluindo a alocação de recursos orçamentários.",
      "substitui o Plano de Saúde, tendo validade de quatro anos.",
      "é elaborada apenas pelo Ministério da Saúde, sem participação dos gestores estaduais e municipais.",
      "dispensa a aprovação do Conselho de Saúde, sendo apenas um documento administrativo."
    ],
    "correct": 0,
    "explanation": "A PAS detalha as ações anuais do Plano de Saúde, com alocação de recursos. As demais são incorretas: não substitui o Plano, é elaborada por todos os entes e exige aprovação do Conselho de Saúde.",
    "analysis": [
      "A) Correta — definição da PAS.",
      "B) Incorreta — é anual, não substitui o Plano de Saúde.",
      "C) Incorreta — cada ente elabora sua PAS.",
      "D) Incorreta — o Conselho de Saúde deve aprovar."
    ],
    "source": "Resolução CNS nº 333/2003; PAS",
    "topic": "Programação Anual de Saúde"
  },
  {
    "id": 33,
    "axis": "Eixo 3 — Políticas públicas e gestão do SUS",
    "difficulty": "Média",
    "prompt": "O Relatório de Gestão (RG) no SUS é um instrumento de prestação de contas que deve ser elaborado anualmente. Sobre o RG, é correto afirmar que:",
    "options": [
      "deve demonstrar os resultados alcançados, as dificuldades e as recomendações para a melhoria da gestão, sendo submetido ao Conselho de Saúde.",
      "é um documento interno, sem necessidade de publicidade.",
      "substitui a prestação de contas financeira, que é feita separadamente.",
      "deve ser enviado apenas ao Ministério da Saúde, sem apreciação do Conselho."
    ],
    "correct": 0,
    "explanation": "O Relatório de Gestão deve conter resultados, dificuldades e recomendações, com submissão ao Conselho de Saúde. As demais são incorretas: deve ser público, não substitui a prestação de contas financeira e deve ser apreciado pelo Conselho.",
    "analysis": [
      "A) Correta — conteúdo e destinação do RG.",
      "B) Incorreta — deve ser público e acessível.",
      "C) Incorreta — é complementar à prestação de contas.",
      "D) Incorreta — deve ser apreciado pelo Conselho de Saúde."
    ],
    "source": "Resolução CNS nº 333/2003; Relatório de Gestão",
    "topic": "Relatório Anual de Gestão"
  },
  {
    "id": 34,
    "axis": "Eixo 3 — Políticas públicas e gestão do SUS",
    "difficulty": "Fácil",
    "prompt": "O Relatório Quadrimestral de Prestação de Contas, previsto na Lei Complementar nº 141/2012, tem a finalidade de:",
    "options": [
      "apresentar, a cada quatro meses, a execução orçamentária e financeira da saúde, com a demonstração dos recursos aplicados.",
      "substituir a prestação de contas anual, simplificando o processo.",
      "ser elaborado exclusivamente pela área financeira, sem conteúdo sobre a execução das ações de saúde.",
      "ser enviado apenas ao Tribunal de Contas, sem divulgação pública."
    ],
    "correct": 0,
    "explanation": "O Relatório Quadrimestral demonstra a execução orçamentária da saúde, conforme LC 141/2012. As demais são incorretas: não substitui a prestação anual, deve conter execução de ações e deve ser público.",
    "analysis": [
      "A) Correta — finalidade do relatório quadrimestral.",
      "B) Incorreta — não substitui a prestação anual.",
      "C) Incorreta — deve conter informações sobre ações de saúde.",
      "D) Incorreta — deve ser divulgado publicamente."
    ],
    "source": "LC 141/2012, art. 37",
    "topic": "Relatório Quadrimestral de Prestação de Contas"
  },
  {
    "id": 35,
    "axis": "Eixo 3 — Políticas públicas e gestão do SUS",
    "difficulty": "Difícil",
    "prompt": "Em relação à articulação interfederativa no SUS, o Decreto nº 7.508/2011 estabelece que a gestão compartilhada entre os entes federativos deve ser orientada por:",
    "options": [
      "um mapa da saúde e por regiões de saúde, com a definição de portas de entrada e da rede de atenção à saúde.",
      "um contrato único entre os entes, que centraliza toda a gestão no Ministério da Saúde.",
      "a desobrigação dos municípios em organizar suas redes, ficando a cargo do Estado.",
      "a participação exclusiva dos gestores, sem envolvimento dos Conselhos de Saúde."
    ],
    "correct": 0,
    "explanation": "O Decreto 7.508/2011 prevê o mapa da saúde e as regiões de saúde para a gestão compartilhada. As demais são incorretas: não há contrato único centralizado, municípios têm responsabilidades, e a participação social é obrigatória.",
    "analysis": [
      "A) Correta — conforme Decreto 7.508/2011.",
      "B) Incorreta — a gestão é compartilhada, não centralizada.",
      "C) Incorreta — os municípios têm suas responsabilidades.",
      "D) Incorreta — os Conselhos de Saúde são fundamentais."
    ],
    "source": "Decreto 7.508/2011",
    "topic": "Articulação interfederativa e Decreto 7.508/2011"
  },
  {
    "id": 36,
    "axis": "Eixo 3 — Políticas públicas e gestão do SUS",
    "difficulty": "Média",
    "prompt": "Os indicadores de saúde são ferramentas essenciais para o monitoramento e avaliação. Um indicador de efetividade, por exemplo, mede:",
    "options": [
      "o impacto da ação de saúde na melhoria das condições de vida da população, como a redução da mortalidade infantil.",
      "a relação entre o custo do serviço e o número de procedimentos realizados.",
      "a produção de serviços, como o número de consultas realizadas.",
      "a satisfação do usuário com o atendimento recebido."
    ],
    "correct": 0,
    "explanation": "Efetividade mede o impacto da intervenção na saúde da população (ex.: redução de mortalidade). Eficiência mede custo-benefício; eficácia mede produção; satisfação é outra dimensão.",
    "analysis": [
      "A) Correta — conceito de efetividade.",
      "B) Incorreta — isso é eficiência.",
      "C) Incorreta — isso é eficácia ou produção.",
      "D) Incorreta — isso é satisfação do usuário."
    ],
    "source": "Avaliação em saúde; indicadores",
    "topic": "Indicadores de efetividade em saúde"
  },
  {
    "id": 37,
    "axis": "Eixo 3 — Políticas públicas e gestão do SUS",
    "difficulty": "Fácil",
    "prompt": "A participação social no SUS é institucionalizada por meio de instâncias colegiadas. São exemplos dessas instâncias:",
    "options": [
      "a Conferência de Saúde e o Conselho de Saúde, em cada esfera de governo.",
      "a Secretaria de Saúde e o Ministério da Saúde.",
      "o Tribunal de Contas e o Ministério Público.",
      "a Auditoria do SUS e a Ouvidoria."
    ],
    "correct": 0,
    "explanation": "As Conferências e os Conselhos de Saúde são as instâncias colegiadas de participação social no SUS. As demais são órgãos de gestão, controle ou auditoria, não instâncias de participação social.",
    "analysis": [
      "A) Correta — Conferências e Conselhos.",
      "B) Incorreta — são órgãos executivos.",
      "C) Incorreta — são órgãos de controle externo.",
      "D) Incorreta — são órgãos de auditoria/ouvidoria."
    ],
    "source": "Lei 8.142/90",
    "topic": "Conselhos e Conferências de Saúde"
  },
  {
    "id": 38,
    "axis": "Eixo 3 — Políticas públicas e gestão do SUS",
    "difficulty": "Difícil",
    "prompt": "A avaliação de políticas públicas em saúde pode ser classificada em relação à sua função. A avaliação que ocorre durante a implementação, para ajustar o curso das ações, é chamada de:",
    "options": [
      "avaliação de processo ou formativa.",
      "avaliação ex-ante.",
      "avaliação de impacto ou resultado.",
      "avaliação de eficiência."
    ],
    "correct": 0,
    "explanation": "A avaliação formativa (ou de processo) ocorre durante a implementação, com caráter de monitoramento e ajuste. Avaliação ex-ante é antes, impacto é depois, eficiência mede custos.",
    "analysis": [
      "A) Correta — avaliação formativa/processo.",
      "B) Incorreta — ex-ante é antes da implementação.",
      "C) Incorreta — impacto/resultado ocorre ao final ou após.",
      "D) Incorreta — eficiência é uma dimensão, não uma função."
    ],
    "source": "Políticas públicas; avaliação de programas",
    "topic": "Avaliação formativa de políticas públicas"
  },
  {
    "id": 39,
    "axis": "Eixo 4 — Auditoria e legislação aplicada",
    "difficulty": "Média",
    "prompt": "Na auditoria em serviços de saúde, a auditoria preventiva é realizada:",
    "options": [
      "antes da ocorrência do evento ou da realização do serviço, com o objetivo de identificar riscos e evitar irregularidades.",
      "durante a realização do serviço, para corrigir falhas imediatamente.",
      "após a conclusão do serviço, para verificar a conformidade e os resultados.",
      "exclusivamente para avaliar a eficiência financeira, sem considerar aspectos técnicos."
    ],
    "correct": 0,
    "explanation": "Auditoria preventiva ocorre antes do fato, para prevenir riscos. Concorrente é durante, retrospectiva é após. A opção D é incorreta, pois a auditoria preventiva abrange aspectos técnicos e financeiros.",
    "analysis": [
      "A) Correta — definição de auditoria preventiva.",
      "B) Incorreta — isso é auditoria concorrente.",
      "C) Incorreta — isso é auditoria retrospectiva.",
      "D) Incorreta — auditoria preventiva abrange vários aspectos."
    ],
    "source": "Auditoria em saúde; conceitos",
    "topic": "Auditoria preventiva"
  },
  {
    "id": 40,
    "axis": "Eixo 4 — Auditoria e legislação aplicada",
    "difficulty": "Difícil",
    "prompt": "A auditoria operativa, diferentemente da auditoria analítica, tem como foco principal:",
    "options": [
      "a análise dos processos e procedimentos operacionais, verificando a eficiência, eficácia e efetividade das ações.",
      "a verificação de registros e documentos financeiros, com ênfase na conformidade numérica.",
      "a análise de notas fiscais e comprovantes de pagamento.",
      "a conferência de dados cadastrais dos usuários."
    ],
    "correct": 0,
    "explanation": "Auditoria operativa analisa processos e procedimentos, incluindo dimensões de eficiência, eficácia e efetividade. A analítica foca em dados/documentos. As demais são incorretas.",
    "analysis": [
      "A) Correta — definição de auditoria operativa.",
      "B) Incorreta — isso é auditoria analítica.",
      "C) Incorreta — foco muito restrito.",
      "D) Incorreta — não é o foco principal."
    ],
    "source": "Auditoria em saúde; tipos",
    "topic": "Auditoria operativa"
  },
  {
    "id": 41,
    "axis": "Eixo 4 — Auditoria e legislação aplicada",
    "difficulty": "Média",
    "prompt": "Em um processo de auditoria, os 'achados de auditoria' referem-se a:",
    "options": [
      "fatos, evidências ou situações identificadas durante o trabalho, que podem indicar conformidade ou não conformidade com os critérios estabelecidos.",
      "apenas as irregularidades e fraudes encontradas.",
      "as recomendações finais feitas pelo auditor.",
      "os documentos analisados, sem interpretação dos fatos."
    ],
    "correct": 0,
    "explanation": "Achados são fatos ou evidências encontradas, incluindo conformidades e não conformidades. Não se limitam a irregularidades, não são recomendações, e não são só documentos, mas incluem interpretação.",
    "analysis": [
      "A) Correta — definição de achados de auditoria.",
      "B) Incorreta — inclui também conformidades.",
      "C) Incorreta — achados são constatações, não recomendações.",
      "D) Incorreta — incluem interpretação das evidências."
    ],
    "source": "Normas de auditoria; ISSAI",
    "topic": "Achados de auditoria"
  },
  {
    "id": 42,
    "axis": "Eixo 4 — Auditoria e legislação aplicada",
    "difficulty": "Fácil",
    "prompt": "O relatório de auditoria, documento formal que consolida os resultados do trabalho, deve conter, entre outros elementos:",
    "options": [
      "os objetivos, o escopo, os achados, as conclusões e as recomendações.",
      "apenas a lista de irregularidades encontradas.",
      "os dados financeiros, desconsiderando aspectos de gestão.",
      "a opinião exclusiva do auditor, sem fundamentação."
    ],
    "correct": 0,
    "explanation": "O relatório de auditoria deve ser completo, com objetivos, escopo, achados, conclusões e recomendações. As demais são parciais ou incorretas (só irregularidades, só dados financeiros, opinião sem fundamentação).",
    "analysis": [
      "A) Correta — elementos do relatório de auditoria.",
      "B) Incorreta — relatório é mais abrangente.",
      "C) Incorreta — abrange aspectos de gestão também.",
      "D) Incorreta — deve ser fundamentado."
    ],
    "source": "Normas de auditoria; relatórios",
    "topic": "Relatório de auditoria"
  },
  {
    "id": 43,
    "axis": "Eixo 4 — Auditoria e legislação aplicada",
    "difficulty": "Difícil",
    "prompt": "A Lei nº 14.133/2021, ao dispor sobre o regime diferenciado de contratações, permite a utilização de contrato integrado. Nessa modalidade, a responsabilidade pelo desenvolvimento do projeto básico e pela execução da obra é:",
    "options": [
      "do contratado, que elabora o projeto básico e executivo, ficando a administração responsável pela fiscalização.",
      "exclusiva da administração pública, que elabora todo o projeto antes da licitação.",
      "compartilhada, com a administração elaborando o projeto básico e o contratado o executivo.",
      "do contratado, mas a administração elabora o projeto básico obrigatoriamente."
    ],
    "correct": 0,
    "explanation": "No contrato integrado, o contratado elabora o projeto básico e executivo (art. 46 da Lei 14.133). A administração fiscaliza. As demais são incorretas: a administração não elabora o projeto básico nesse caso.",
    "analysis": [
      "A) Correta — conforme art. 46 da Lei 14.133/2021.",
      "B) Incorreta — no integrado, o contratado elabora o projeto.",
      "C) Incorreta — não é compartilhado nesse sentido.",
      "D) Incorreta — a administração não elabora o projeto básico."
    ],
    "source": "Lei 14.133/2021, art. 46",
    "topic": "Contrato integrado na Lei 14.133/2021"
  },
  {
    "id": 44,
    "axis": "Eixo 4 — Auditoria e legislação aplicada",
    "difficulty": "Média",
    "prompt": "A Portaria de Consolidação GM/MS nº 1, de 28 de setembro de 2017, consolida as normas sobre:",
    "options": [
      "os direitos e deveres dos usuários da saúde, a organização do SUS e a gestão do sistema.",
      "a gestão de recursos humanos no SUS.",
      "a política de saúde mental e atenção psicossocial.",
      "a vigilância em saúde e o controle de doenças."
    ],
    "correct": 0,
    "explanation": "A Portaria de Consolidação nº 1/GM/MS consolida normas sobre direitos dos usuários, organização e gestão do SUS. As demais portarias consolidadas tratam de outros temas específicos (RH, saúde mental, vigilância).",
    "analysis": [
      "A) Correta — conteúdo da Portaria de Consolidação nº 1.",
      "B) Incorreta — é a Portaria de Consolidação nº 2.",
      "C) Incorreta — é a Portaria de Consolidação nº 3.",
      "D) Incorreta — é a Portaria de Consolidação nº 4."
    ],
    "source": "Portaria de Consolidação GM/MS nº 1/2017",
    "topic": "Portaria de Consolidação GM/MS nº 1/2017"
  },
  {
    "id": 45,
    "axis": "Eixo 4 — Auditoria e legislação aplicada",
    "difficulty": "Difícil",
    "prompt": "A auditoria retrospectiva na saúde, quando comparada à concorrente, caracteriza-se por:",
    "options": [
      "ser realizada após a conclusão do serviço ou evento, analisando a conformidade e os resultados já produzidos.",
      "ser realizada durante o serviço, com capacidade de correção imediata.",
      "ser realizada antes do serviço, para prevenir riscos.",
      "ter caráter exclusivamente financeiro, sem análise clínica."
    ],
    "correct": 0,
    "explanation": "Auditoria retrospectiva ocorre após o evento, analisando conformidade e resultados. A concorrente é durante, a preventiva é antes, e a retrospectiva não é exclusivamente financeira.",
    "analysis": [
      "A) Correta — definição de auditoria retrospectiva.",
      "B) Incorreta — isso é auditoria concorrente.",
      "C) Incorreta — isso é auditoria preventiva.",
      "D) Incorreta — aborda aspectos clínicos e de gestão também."
    ],
    "source": "Auditoria em saúde; tipos",
    "topic": "Auditoria retrospectiva e concorrente"
  },
  {
    "id": 46,
    "axis": "Eixo 4 — Auditoria e legislação aplicada",
    "difficulty": "Média",
    "prompt": "Na auditoria analítica, o foco principal está em:",
    "options": [
      "dados, registros, documentos e informações gerenciais, com ênfase na análise de conformidade e consistência.",
      "processos operacionais e fluxos de trabalho.",
      "entrevistas com os profissionais envolvidos.",
      "observação direta das atividades em campo."
    ],
    "correct": 0,
    "explanation": "Auditoria analítica foca em dados e documentos (análise de registros). Operativa foca em processos e fluxos. Entrevistas e observação podem fazer parte, mas não são o foco principal da analítica.",
    "analysis": [
      "A) Correta — foco da auditoria analítica.",
      "B) Incorreta — isso é auditoria operativa.",
      "C) Incorreta — são técnicas, não foco principal.",
      "D) Incorreta — são técnicas, não foco principal."
    ],
    "source": "Auditoria em saúde; tipos",
    "topic": "Auditoria analítica"
  },
  {
    "id": 47,
    "axis": "Eixo 4 — Auditoria e legislação aplicada",
    "difficulty": "Fácil",
    "prompt": "Sobre a Lei nº 14.133/2021, é correto afirmar que ela estabelece, como princípio fundamental, a:",
    "options": [
      "isonomia e a competitividade, com a busca pela proposta mais vantajosa para a administração.",
      "dispensa do planejamento prévio, priorizando a contratação direta.",
      "exclusividade de julgamento pelo menor preço.",
      "não aplicação a contratos de serviços de saúde."
    ],
    "correct": 0,
    "explanation": "A Nova Lei de Licitações tem como princípios a isonomia, competitividade e busca pela proposta mais vantajosa. As demais são incorretas: exige planejamento, não é só menor preço, e aplica-se à saúde.",
    "analysis": [
      "A) Correta — princípios da Lei 14.133/2021.",
      "B) Incorreta — o planejamento é obrigatório.",
      "C) Incorreta — há outros critérios de julgamento.",
      "D) Incorreta — aplica-se aos serviços de saúde."
    ],
    "source": "Lei 14.133/2021, art. 5º",
    "topic": "Princípios da Lei 14.133/2021"
  },
  {
    "id": 48,
    "axis": "Eixo 4 — Auditoria e legislação aplicada",
    "difficulty": "Média",
    "prompt": "Na gestão de contratos administrativos, a fiscalização do contrato é uma atribuição do gestor do contrato. A lei 14.133/2021 estabelece que:",
    "options": [
      "o gestor do contrato deve acompanhar e fiscalizar a execução, registrando ocorrências e promovendo a correção de falhas.",
      "a fiscalização é de responsabilidade exclusiva do setor jurídico.",
      "o gestor pode delegar toda a fiscalização ao contratado, por meio de autoregulação.",
      "a fiscalização se limita à conferência de prazos, sem verificação de qualidade."
    ],
    "correct": 0,
    "explanation": "O gestor do contrato é responsável pela fiscalização, registrando ocorrências e corrigindo falhas. As demais são incorretas: não é exclusiva do jurídico, não pode delegar totalmente ao contratado, e não se limita a prazos.",
    "analysis": [
      "A) Correta — atribuições do gestor do contrato.",
      "B) Incorreta — o gestor é a autoridade designada para fiscalização.",
      "C) Incorreta — não pode delegar a fiscalização.",
      "D) Incorreta — inclui qualidade e conformidade."
    ],
    "source": "Lei 14.133/2021, art. 117",
    "topic": "Fiscalização de contratos administrativos"
  },
  {
    "id": 49,
    "axis": "Eixo 4 — Auditoria e legislação aplicada",
    "difficulty": "Difícil",
    "prompt": "A Portaria de Consolidação GM/MS nº 4, de 28 de setembro de 2017, consolida normas sobre:",
    "options": [
      "a vigilância em saúde, abrangendo vigilância epidemiológica, sanitária e ambiental.",
      "a gestão de recursos humanos no SUS.",
      "os direitos e deveres dos usuários da saúde.",
      "a política de saúde mental e atenção psicossocial."
    ],
    "correct": 0,
    "explanation": "A Portaria de Consolidação nº 4/GM/MS consolida normas de vigilância em saúde. As demais são de outras portarias: RH (nº 2), direitos dos usuários (nº 1) e saúde mental (nº 3).",
    "analysis": [
      "A) Correta — conteúdo da Portaria de Consolidação nº 4.",
      "B) Incorreta — é a Portaria de Consolidação nº 2.",
      "C) Incorreta — é a Portaria de Consolidação nº 1.",
      "D) Incorreta — é a Portaria de Consolidação nº 3."
    ],
    "source": "Portaria de Consolidação GM/MS nº 4/2017",
    "topic": "Portaria de Consolidação GM/MS nº 4/2017"
  },
  {
    "id": 50,
    "axis": "Eixo 4 — Auditoria e legislação aplicada",
    "difficulty": "Média",
    "prompt": "As evidências em auditoria são classificadas quanto à sua natureza. Uma evidência física, por exemplo, é:",
    "options": [
      "um objeto, material ou documento original que pode ser examinado diretamente (ex.: prontuário, equipamento, nota fiscal).",
      "um depoimento de pessoa que presenciou um fato.",
      "uma análise matemática de dados.",
      "uma constatação inferida, sem confirmação material."
    ],
    "correct": 0,
    "explanation": "Evidência física é material ou documental, passível de exame direto. Depoimento é evidência testemunhal, análise matemática é evidência analítica, e constatação inferida não é evidência física.",
    "analysis": [
      "A) Correta — definição de evidência física.",
      "B) Incorreta — isso é evidência testemunhal.",
      "C) Incorreta — isso é evidência analítica.",
      "D) Incorreta — evidência não é inferida sem confirmação."
    ],
    "source": "Auditoria; tipos de evidência",
    "topic": "Evidência física em auditoria"
  }
];
