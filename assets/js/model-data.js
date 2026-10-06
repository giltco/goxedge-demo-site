/**
 * GoxEDGE model structure for the coded panorama.
 * Semantics follow 《出海新势力》 GoxEDGE V40.0.0 定稿.
 * Stage checklist lines are kept as previously published;
 * this repository does not contain the manuscript text to re-verify each line.
 */

var GOXEDGE_MODEL = {
  name: 'GoxEDGE 全球拓展战略模型',
  description: '起点判断、路径设计、组织承接与全球经营能力',

  referenceImage: '../assets/img/figures/fig-3-5-goxedge-model-overview.png',
  showReferenceImage: false,

  layerLabels: [
    { id: 'mechanism', label: '战略推进机制层', gradient: 'mechanism' },
    { id: 'path', label: '战略路径层', gradient: 'path' },
    { id: 'capability', label: '战略能力支撑层', gradient: 'capability' },
    { id: 'judgment', label: '战略判断层', gradient: 'judgment' }
  ],

  mechanism: {
    footnote: '认知—行动—反馈贯穿全过程，负责持续校准',
    steps: [
      { id: 'cognition', title: '认知', subtitle: '理解环境、机会、约束与能力边界', summary: '理解环境、机会、约束与自身能力边界，形成可以进入行动的判断。' },
      { id: 'action', title: '行动', subtitle: '把判断变成市场与组织行动', summary: '把判断转化为市场行动与组织行动。' },
      { id: 'feedback', title: '反馈', subtitle: '用结果与信号修正下一轮判断', summary: '用结果与信号修正下一次判断。这一机制贯穿全过程，负责持续校准。' }
    ]
  },

  path: {
    iterationLabel: '阶段复盘 · 返回前序判断 · 持续校准',
    stages: [
      {
        id: 'explore', num: 1, title: '探索', en: 'Explore', color: '#075aa8',
        items: ['宏观环境扫描', '法规与合规评估', '技术适配评估', '市场调研设计', '客户洞察建立', '竞争格局分析', '利益相关者映射', '组织能力诊断'],
        summary: '看清目标市场是否具备进入与后续定位的基础条件。'
      },
      {
        id: 'position', num: 2, title: '定位', en: 'Position', color: '#2f7d32',
        items: ['细分市场识别', '目标市场选择', '文化敏感性与禁忌审查', '市场竞争态势分析', '价值主张设计与验证', '差异化定位确认', '品牌本地化路径', '市场进入策略与节奏设计'],
        summary: '收拢为优先服务对象、价值主张、差异化位置与进入节奏。'
      },
      {
        id: 'execute', num: 3, title: '执行', en: 'Execute', color: '#f04a23',
        items: ['合规启动准备', '渠道与伙伴体系', '产品与服务本地化', '市场承接与首轮商业闭环', '本地运营启动', '本地传播路径', '数据指标体系', '风险响应机制'],
        summary: '通过合规、渠道、本地化与商业闭环跑通首轮落地链。'
      },
      {
        id: 'empower', num: 4, title: '赋能', en: 'Empower', color: '#4b2ca3',
        items: ['组织学习机制', '跨文化沟通机制', '企业文化的在地转译', '全球人才体系', '本地团队成长路径', '技术平台与协同支持', '跨市场协同与权责联动', '领导力与全球管理能力'],
        summary: '把执行成果转化为组织承接能力。赋能是六阶段路径中的第四阶段，不是 EDGE 里的赋能力。'
      },
      {
        id: 'optimize', num: 5, title: '优化', en: 'Optimize', color: '#1288c7',
        items: ['从试点到复制', '绩效评估与反馈闭环', '流程标准化与经验复制', '创新适配与成本效率优化', '用户参与与共创', '规模化增长路径'],
        summary: '把试点经验转化为可复制、可扩展的增长路径。'
      },
      {
        id: 'sustain', num: 6, title: '可持续', en: 'Sustain', color: '#1f6b2c',
        items: ['责任治理机制', '本地价值网络与合作生态', '人才发展与再投资', '可持续审计与治理闭环', '可持续供应链协同', '韧性、风险与退出机制'],
        summary: '建立责任治理、本地价值网络与可持续经营结构，并把判断、路径、反馈和学习沉淀为全球经营能力。'
      }
    ]
  },

  capabilities: {
    title: 'EDGE 四大能力',
    subtitle: '贯穿六阶段的支撑，不与阶段一一对应，也不是完整的企业能力清单',
    cells: [
      { id: 'expertise', title: '专业性', en: 'Expertise', description: '识别、理解与判断。' },
      { id: 'diversification', title: '多元化', en: 'Diversification', description: '组合、适配与弹性。' },
      { id: 'growth', title: '增长力', en: 'Growth', description: '放大、扩张与复制。' },
      { id: 'empowerment', title: '赋能力', en: 'Empowerment', description: '承接、协同与沉淀。' }
    ]
  },

  readiness: {
    id: 'readiness',
    title: '战略准备度',
    subtitle: '六阶段能够成立的前置条件',
    support: '检验出发动因、资源投入、组织承接与风险边界是否具备启动基础',
    summary: '战略准备度不是第五层，也不是第七阶段，更不是探索之前的第 0 阶段。它是六阶段路径能够成立的前置条件，用来检验判断，以及真实的组织、资源与风险条件，是否已经具备启动基础。需要在首次启动前评估；进入新区域、新商业模式或新合作结构时，应重新评估，而不是只做一次清单。战略准备度检验能否启动。战略锚点明确当前战略任务与支点。起点判断确定第一步落在哪里。路径设计把判断转化为资源、节奏和边界明确的进入方案。'
  },

  judgment: {
    title: '战略判断',
    subtitle: '能否启动、从哪里启动、路径如何设计',
    items: [
      { id: 'env', title: '环境与趋势判断', summary: '判断全球环境、行业趋势与市场窗口是否支持当前拓展节奏。' },
      { id: 'intent', title: '战略意图与目标', summary: '明确为什么出发，以及全球拓展的战略意图、边界与阶段性目标。' },
      { id: 'anchor', title: '战略锚点与起点判断', summary: '战略锚点明确当前战略任务与支点。起点判断确定第一步落在哪里。两者放在同一判断项中，但不是同一个起点概念。' },
      { id: 'resource', title: '资源与能力评估', summary: '评估组织、产品、团队与资源是否支撑所选路径。' },
      { id: 'priority', title: '路径优先级设定', summary: '在可能的路径中确定优先顺序。路径设计把判断转化为资源、节奏和边界明确的进入方案。产出可以包括目标市场方向、市场角色判断、初步价值创造位置假设、主导路径与进入结构、产品或方案假设、资源配置与推进节奏，以及授权边界与风险边界。这些是路径设计的产出，不是额外的模型层次。' },
      { id: 'risk', title: '风险识别与应对', summary: '识别关键风险边界，并建立应对与复核机制。' }
    ]
  },

  note: '模型说明：战略准备度是六阶段的前置条件，不是第七阶段。战略判断回答能否启动、从哪里启动、路径如何设计；EDGE 四大能力贯穿六阶段；六阶段组织推进，并在复盘中返回前序判断；认知—行动—反馈负责持续校准，最终沉淀为全球经营能力。',

  layersSummary: [
    { title: '战略判断层', text: '回答能否启动、从哪里启动、路径如何设计。战略准备度附在这一层，作为六阶段的前置条件，不另成一层。' },
    { title: '战略能力支撑层', text: '回答凭什么把路径走实并走远。EDGE 四大能力贯穿六阶段，不与阶段一一对应。' },
    { title: '战略路径层', text: '回答全球拓展如何被系统组织推进。顺序是探索、定位、执行、赋能、优化、可持续。阶段可以复盘并返回前序判断，不是单向瀑布。' },
    { title: '战略推进机制层', text: '回答如何在推进中持续校准。认知、行动、反馈贯穿全过程。' }
  ]
};
