(async function () {
  'use strict';

  // ==================== CONFIG ====================
  const CONFIG = {
    HUSHE_ID: 'b2da8c64-355f-44f1-bfde-e8696b3239c6',
    HUSHE_EXPANDED_ID: '2b6866d9-1462-4257-9a19-1e7f72040818',
    JIANYUE_ID: '4ee1a195-4d7f-435a-8b37-ac68a8666466',
    JIANYUE_EXPANDED_ID: '8237cc96-3a44-46de-be37-9ddbe011e18d',
    BIAOLI_ID: 'fd2829fd-9551-49a5-b7ac-1a928cac55be',
    BIAOLI_EXPANDED_ID: '40fd3463-1fd0-403a-980e-f125b06ac5f3',
    HIDE_ID: '0a049bd9-5bc3-4c72-a733-702f04749b71',
    MINI_HUSHE_ID: '93a2aafc-bad0-4a81-93f8-836869219e4c',
    MINI_JIANYUE_ID: '29e01bc8-fe7d-4c4f-ba4c-5bda6a7c0d92',
    MINI_BIAOLI_ID: 'cb82258e-e81b-4be3-9d9b-686d3017972d',
    INIT_DELAY: 4000, HIDE_DELAY: 500, RESTORE_DELAY: 200,
    STYLE_KEY: 'SPreset_ThoughtChain_Style', EXPAND_KEY: 'SPreset_ThoughtChain_Expand',
    ENABLED_KEY: 'smoothStream_enabled', MINI_KEY: 'smoothStream_miniMode',
    PANEL_KEY: 'smoothStream_panelConfig',
    SUMMARY_ID: '1f2c1af6-cd5d-4416-b990-cf84d67c4854',
    BEAT_BAD_ID: 'f6dd0866-519c-4ce1-a389-f1eca01a45c4',
    BEAT_GOOD_ID: '0bd07884-8289-453d-a1e8-f3e57dd15094',
    AUTO_BEAT_KEY: 'SPreset_AutoBeat', BEAT_MODE_KEY: 'SPreset_BeatMode',
    BEAT_DRAFT_KEY: 'SPreset_BeatDraft', CHAOS_KEY: 'SPreset_ChaosLevel',
    CHAOS_IDS: { mild: '6db313aa-86ad-43df-b268-ea96cfc5fade', normal: '21c2f540-91c2-4415-a64c-16bbd16c1168', intense: 'ce93dcc6-add8-4c54-8548-f4a21cd2cd75' },
    HUSOU_STORAGE_KEY: 'websearch_settings',
    HUSHEN_STORAGE_KEY: 'hushen_profile_settings',
    QUICK_TOGGLE_IDS: [
      { id: '48863da8-9556-4f14-b5bf-1816e4d4207b', name: '🦊 狐言狐语~(留言)' },
      { id: '046af93d-0c63-4561-b0b2-052cd265fecd', name: '🦊 狐策~' },
      { id: '4d0eeee3-e95c-4971-9e48-8ff1ed57790b', name: '🦊 狐稿~' },
      { id: 'cb2d2f0a-35a7-470a-a940-6b3a264ef18d', name: '📍 开头输出位置信息' },
      { id: '3867af9e-9bad-4fdf-9ef8-83ca07d8c68e', name: '📏 总结' },
      { id: 'ef48b167-dac9-4015-b42c-b16a7cf69ec9', name: '🌍 背景npc发展' },
      { id: 'ff91dd7e-5ec0-452b-b1aa-3b52e1011057', name: '⚙️ 禁止机械降神' },
      { id: '73893f44-407b-40d9-bac8-816a9aaca0a1', name: '⚠️ 禁止输出两遍正文' },
      { id: 'a8454fc2-857b-4746-b654-b10b416d69d4', name: '😮 对话中使用表情符号' },
      { id: '7f73104d-56ee-4f70-9274-b64a915e46a1', name: '🎨 画图请打开' },
    ],
    SELECT_GROUPS: [
      {
        label: '📝 文风要求', options: [
          { name: '✨ 真实感', id: 'd6292de5-e1a1-4f94-93eb-bda00453020c' }, { name: '📖 轻小说', id: 'cc0890e9-fc03-4c3b-bf21-d5e0eb833ec9' },
          { name: '🐙 Cthulhu', id: '38786747-4aae-4eb9-b667-dbb6619cb806' }, { name: '🎬 电影感', id: '055f72b7-3ddf-450c-81c2-e9a1317c78e4' },
          { name: '🌊 网文风', id: 'c0573788-9c26-4fa8-99a3-4ef684c01238' }, { name: '⚔️ 古风修仙', id: '943ba2f8-b333-4d84-81c3-52b3153a2988' },
          { name: '🎯 短句白描', id: 'e600b1da-1ebc-4b55-83be-ea5429a0e68e' }, { name: '🆓 不作要求', id: '1c0c9046-1bd5-4a90-a8db-6f66c59c3d22' },
          { name: '🔧 自定义', id: '37dea4e8-55f3-4b58-a932-5d680fdf9814' },
        ]
      },
      {
        label: '🗣️ 对白量', options: [
          { name: '🔊 高', id: '3b0f3774-0d73-45fa-95e1-e4adb9624703' }, { name: '🔉 中', id: '0f04a2f6-55f0-4937-9a6d-a775b0a6f5b0' },
          { name: '🔈 低', id: 'b26bafb6-7035-4559-bb1e-195297fc9721' }, { name: '🆓 默认', id: '9bf50870-a0dd-47be-91ea-474eee47a5a2' },
          { name: '🔧 自定义', id: '2a4598f7-9940-4ee2-9563-2d5fb651a925' },
        ]
      },
      {
        label: '▶️ 推进速度', options: [
          { name: '⏩ 快', id: '89df368f-7ad9-4502-83ee-4fba9bd54a9d' }, { name: '▶️ 正常', id: '5dbd2729-db30-4f4d-af6b-cf2a232bdd56' },
          { name: '🐢 慢', id: '55ccfbde-a5f9-4572-8880-f1033c4102fc' },
        ]
      },
      {
        label: '👁️ 人称', options: [
          { name: '👤 user第一人称', id: 'd9773230-eeb2-43b5-b0fa-f1eca99234e3' }, { name: '👤 char第一人称', id: '8d17fa0f-98e2-4927-b46a-b343b85a2b01' },
          { name: '🔄 多视角轮换', id: '66c2ef46-7575-431b-b151-1cc273a6687a' }, { name: '🧍 第二人称', id: 'e7235a80-bbd9-48b0-b1f7-750f3b537ee9' },
          { name: '👁️ 第三人称', id: '65e6a85a-a923-44b2-b70c-e3cd75d67e81' }, { name: '🌐 全局第三人称', id: 'ee33ae12-feea-42fd-98fe-97c995903f11' },
          { name: '🔓 自由人称', id: '2868064e-7929-4081-a354-37f07bf3120c' }, { name: '🔧 自定义', id: '93fb005b-e3bb-47c6-94db-ac031ce4821b' },
        ]
      },
      {
        label: '✒️ 字数', options: [
          { name: '🤖 智能长短文', id: '4d12676f-7055-45b8-96be-706c7f714969' }, { name: '⚡ 超短300-1k', id: '7d4666be-5f94-45e4-8a40-7740918e65ec' },
          { name: '✒️ 短文1k-3k', id: '3414690d-9045-47aa-94bc-96847390c900' }, { name: '📄 中短文3k-6k', id: 'e64c6833-a29e-476c-b2b1-db0dd452778e' },
          { name: '📜 长文6k-1w', id: '39b5cf79-dd5e-4dfb-846d-58d842d5bb50' }, { name: '📖 超长文1W+', id: 'e0ef4386-3784-4076-bda2-3f2378b0510e' },
          { name: '🔧 自定义', id: '50d6bafe-9b0a-4138-8c8e-aef27b506d26' },
        ]
      },
      {
        label: '🔁 转述', options: [
          { name: '🔁 直接转述', id: '4f61e589-c05e-4e14-a660-26a876782a60' }, { name: '🔁 分段转述', id: '698ff428-578f-4196-a759-566408d31272' },
          { name: '🔂 不要转述', id: 'ed3b6119-cb78-47b4-beab-6d109beb9e38' },
        ]
      },
      {
        label: '🙋 抢话', options: [
          { name: '⬆️ 大量抢话', id: 'eea28e30-4e6e-47a7-812a-8ad148a69969' }, { name: '⚡ 正常抢话', id: 'abfb6591-5493-4cc1-aede-229c26027ff8' },
          { name: '⬇️ 微抢话', id: '43c7b131-93e3-40b9-ab80-d1e596f8c10a' }, { name: '❌️🤐 禁止抢话', id: '630b20d3-2d85-4b20-85ce-cc5e483e14b8' },
        ]
      },
      {
        label: '🧪 思维链', options: [
          { name: '⬆️ 多角色内心OS', id: '3bc2611f-4370-492c-9f4f-14601a6558c7' }, { name: '⬇️ 精简多角色OS', id: '475e4fe5-eac9-4347-8be9-d3b05732f5f2' },
          { name: '⬆️ 通用导演', id: '1eb0b72d-e4f0-4507-b18d-d44ef51d5af6' }, { name: '⬇️ 精简通用导演', id: '42303fec-82ae-4ec4-96a8-4cd424d782e5' },
          { name: '🧪 世界书思维链', id: 'd4e26531-a99a-47b8-9629-89e6d4b89dfd' }, { name: '❌️ 无思维链', id: '7406460f-7ee2-43cf-8a88-f1eb4302b4f2' },
          { name: '🔧 自定义', id: 'bd0cd878-4443-478e-a27d-02d7e91773cc' },
        ]
      },
      {
        label: '🧠 思考强度', options: [
          { name: '🧠 默认', id: '2a7e29d8-0162-4a68-a733-68914349f121' }, { name: '🔴 高', id: '1d72c92b-3aa8-43f3-b9ad-69509ac08d28' },
          { name: '🟡 中', id: '3f087674-153f-42e7-aa25-bafab147f1e9' }, { name: '🟢 低', id: '72a4289f-5e61-4c3e-8577-fd00ca52ed6b' },
        ]
      },
      {
        label: '🎢 剧情刺激', options: [
          { name: '🌊 平缓', id: '6db313aa-86ad-43df-b268-ea96cfc5fade' }, { name: '⚡ 正常', id: '21c2f540-91c2-4415-a64c-16bbd16c1168' },
          { name: '🔥 激烈', id: 'ce93dcc6-add8-4c54-8548-f4a21cd2cd75' },
        ]
      },
      {
        label: '🔧 MVU模式', options: [
          { name: '🤖 额外模型/默认', id: '281906e8-523d-4684-93c3-3341dcc94cc8' }, { name: '📊 状态栏打开', id: 'c479d5cd-3b6d-4cef-99b3-eaee9eecbd42' },
          { name: '🔄 MVU随AI输出', id: '1128f30b-87c0-4fb2-8e31-e39b5dce3bf8' }, { name: '🔧 变量自定义', id: '03a46969-3dc3-4169-92e8-51ea60f46f55' },
        ]
      },
      {
        label: '❤️ NSFW发情', options: [
          { name: '🛡️ 防发情', id: 'ba81e1c8-a8ba-4920-b0a0-dd684bb660dc' }, { name: '❤️ 要发情', id: 'af04c4d5-026e-4991-91d1-bb465993c7af' },
        ]
      },
      {
        label: '❤️ NSFW风格', options: [
          { name: '🔞 很黄', id: 'bc73970c-0e70-4f04-b191-2a14850b30bd' }, { name: '❤️ 正常', id: '8b243118-5c09-4985-aa40-b32f55020f75' },
          { name: '🌸 舒缓', id: '3c847a79-7200-47bf-b2fd-77e45843a867' }, { name: '🪷 克制', id: 'd602877e-6eb0-4e60-9772-e45782660922' },
          { name: '🔧 自定义', id: '75398057-0bfe-4146-8585-a342ca1c67e5' }, { name: '⛔ 关闭NSFW', id: '18e1bcb1-c329-4aba-957a-c22fb77712be' },
        ]
      },
      {
        label: '🩸 血腥', options: [
          { name: '🩸 防血腥❌️', id: '15dc28bc-0599-4d32-8713-7eda0f4803ab' }, { name: '🩸 要血腥✅️', id: '895cec03-80dd-4458-906e-bafc8620b730' },
        ]
      },
      {
        label: '🤬 脏话', options: [
          { name: '🤬 少说脏话⭕', id: '48331db9-be8e-4e1c-8a40-f3f1ba45dcc4' }, { name: '🤬 别说脏话❌️', id: '03a3b12a-e58e-4cba-8588-071c321453ff' },
        ]
      },
      {
        label: '💭 内心OS', options: [
          { name: '💭 只用户', id: '222d1092-94c7-44a0-aa55-fa73f0e320a9' }, { name: '💭 只角色', id: '430b0537-3411-48b9-8cb2-78ca449a8bfc' },
          { name: '💭 多角色', id: 'e6733bbf-d104-4b31-b009-3dbc1e854172' }, { name: '❌ 禁止内心OS', id: '2eff40ec-1df3-41d6-8f24-134e9147ac36' },
        ]
      },
      {
        label: '😡 杀八股风格', options: [
          { name: '😡 去欧规范', id: '69210bf9-fdb0-45fa-a8bf-087b8ef688c2' }, { name: '🔧 自定义', id: '05bc6f39-d186-4535-9266-d1e9abb74102' },
        ]
      },
      {
        label: '🖥️ 系统扮演', options: [
          { name: '🚫 禁止狐神接管', id: 'd01b955b-3d22-44b3-947e-9baa67d467d6' }, { name: '🦊 狐神抚接管', id: '5732d05b-aa06-4225-b0bb-398f830a0852' },
          { name: '👤 扮演系统', id: '6b5c6cd0-eb09-49f9-b7a8-1347e64098a4' },
        ]
      },
    ],
    KILL_TOGGLES: [
      { name: '❌️ 禁止滥用比喻🐟', id: '3683a217-7c0a-4825-a3d2-f7f50d735746' },
      { name: '🤖 禁止机械词语', id: '8ef8a813-0e23-45c9-a2fd-2d913664fb2c' },
      { name: '🏛️ 防霸总', id: 'f3953ce2-0af0-45e3-a9b0-aed353a07fe1' },
    ],
    CUSTOM_EDIT_IDS: [
      // 原有自定义项
      // knownVar 可填可不填；不填时会自动识别 content 里的第一个 {{setvar::xxx::...}}
      { id: '37dea4e8-55f3-4b58-a932-5d680fdf9814', name: '📝 文风自定义', knownVar: 'wenfeng' },
      { id: '2a4598f7-9940-4ee2-9563-2d5fb651a925', name: '🗣️ 对白量自定义' },
      { id: '93fb005b-e3bb-47c6-94db-ac031ce4821b', name: '👁️ 人称自定义' },
      { id: '50d6bafe-9b0a-4138-8c8e-aef27b506d26', name: '✒️ 字数自定义' },
      { id: 'bd0cd878-4443-478e-a27d-02d7e91773cc', name: '🧪 思维链自定义' },
      { id: '03a46969-3dc3-4169-92e8-51ea60f46f55', name: '🔧 变量自定义' },
      { id: '75398057-0bfe-4146-8585-a342ca1c67e5', name: '❤️ NSFW风格自定义' },
      { id: '05bc6f39-d186-4535-9266-d1e9abb74102', name: '😡 杀八股自定义' },

      // 新增：自定义1-4
      // 你给的是 identifier，不是 id；后面会改成 id/identifier 都能识别
      { id: 'f5a23e10-8d8c-4d0c-a400-49a67cfabfb5', name: '🔧 自定义1', knownVar: 'others3' },
      { id: '129fb648-1a0c-4dd8-bc8c-52842c75c881', name: '🔧 自定义2', knownVar: 'others6' },
      { id: '9b911054-15ee-4b35-856f-a69b9d140023', name: '🔧 自定义3', knownVar: 'others7' },
      { id: '00f8b22c-bb46-4625-b025-b3f9872ae83d', name: '🔧 自定义4', knownVar: 'others8' },
    ],
  };
  CONFIG.CUSTOM_EDIT_IDS = CONFIG.CUSTOM_EDIT_IDS.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
  const ALL_STYLE_IDS = [CONFIG.HUSHE_ID, CONFIG.HUSHE_EXPANDED_ID, CONFIG.JIANYUE_ID, CONFIG.JIANYUE_EXPANDED_ID, CONFIG.BIAOLI_ID, CONFIG.BIAOLI_EXPANDED_ID];
  const ALL_MINI_IDS = [CONFIG.MINI_HUSHE_ID, CONFIG.MINI_JIANYUE_ID, CONFIG.MINI_BIAOLI_ID];

  // ==================== 狐搜默认设置 ====================
  const HUSOU_DEFAULTS = {
    enableAutoSearch: false, enableMoegirl: true, enableWikipedia: true, enableCustomSearch: false, enableJinaFetch: true,
    smartSkip: true, aiFilter: true, saveToPersonality: true, injectCurrentPrompt: true, analysisApi: 'current',
    customApiUrl: '', customApiKey: '', customModel: '', customMaxTokens: 4096, customTemperature: 1, customFrequencyPenalty: 0,
    customPresencePenalty: 0, customTopP: 1, customTopK: 0, searchPresetMode: 'builtin', searchPresetName: '',
    searchApiUrl: 'http://happy.yuluo151.lol:55992/search?q={keyword}&format=json&language={language}',
    searchApiMethod: 'GET', searchApiKey: '', searchApiKeyHeaderName: 'Authorization', searchApiKeyHeaderTemplate: 'Bearer {key}',
    searchApiQueryParam: '', searchApiBodyTemplate: '', searchApiResultPath: 'results', searchApiTitleField: 'title',
    searchApiSnippetField: 'content', searchApiLinkField: 'url', searchApiLanguage: 'zh-CN', searchApiExtraParams: '',
    maxKeywords: 50, searchTimeout: 20000, maxExtractLength: 40000, searchResultsCount: 10,
  };

  // ==================== 狐析模块定义 ====================
  const HUSHEN_MODULES = [
    { id: 'story_tone', identifier: '3422ec86-2a1c-454e-9fdc-11d895bbd744', label: '🎭 故事基调', guide: '你对故事的整体基调有什么要求/偏好吗？例如：黑暗奇幻、轻松日常、史诗冒险……' },
    { id: 'writing_style', identifier: 'c7ddbd17-f4d0-4a77-8c11-190082481ab0', label: '🖋️ 文笔偏好', guide: '你喜欢什么样的文笔风格？华丽细腻还是简洁直白？有没有特别喜欢的作家文风？' },
    { id: 'pacing', identifier: 'dea9c60f-0317-497e-8dc4-868befa6ccb2', label: '⏱️ 整体节奏', guide: '你偏好快节奏推进还是慢热展开？情感线和剧情线的比例如何？' },
    { id: 'character_focus', identifier: 'a50140be-6399-4454-9926-79ec233da2f9', label: '👤 人物描写重心', guide: '你更在意角色的外貌、神态、心理活动、动作描写？哪些可以多写，哪些可以略写？' },
    { id: 'nsfw', identifier: 'f16d756e-e34a-4043-87e0-e9bb26b110a7', label: '🔞 NSFW', guide: '你对涩涩内容有什么要求？偏好类型、尺度、频率？或者完全不要？' },
    { id: 'interaction_style', identifier: '238a199b-1ebb-4b0c-9941-5a604c098e56', label: '💬 互动风格', guide: '角色和你说话时，你偏好怎样的语气？温柔、傲娇、冷淡、毒舌？' },
    { id: 'world_building', identifier: '7f8fcef1-8385-41ba-a963-fe57bed0c3d4', label: '🌍 世界观/设定', guide: '你对世界观设定的详细程度有什么要求？需要大量背景还是点到为止？' },
    { id: 'no_go', identifier: '1455cd12-2848-47b3-a4d1-539f042cd392', label: '🚫 雷区', guide: '有没有绝对不能出现的内容？请列出，AI 会严格避免。' },
    { id: 'user_traits', identifier: 'd26954c8-4cdc-42e4-a551-98e4a34a30ce', label: '🧑‍🎨 用户角色形象', guide: '综合以上所有偏好，你希望自己扮演的角色应该是什么形象？需要具备什么样的特质？（此模块会综合前面所有分析结果 + 你的额外输入来生成）', isComposite: true },
  ];

  // ==================== STATE ====================
  const state = {
    enabled: localStorage.getItem(CONFIG.ENABLED_KEY) === 'true', currentStyle: localStorage.getItem(CONFIG.STYLE_KEY) || 'HUSHE',
    isExpanded: localStorage.getItem(CONFIG.EXPAND_KEY) !== 'false', isMini: localStorage.getItem(CONFIG.MINI_KEY) === 'true',
    isGenerating: false, eventHandles: [], isSummarizing: false,
    autoBeat: localStorage.getItem(CONFIG.AUTO_BEAT_KEY) === 'true', beatMode: localStorage.getItem(CONFIG.BEAT_MODE_KEY) || 'bad',
    beatDraft: localStorage.getItem(CONFIG.BEAT_DRAFT_KEY) || '', beatGoodDraft: localStorage.getItem('SPreset_BeatGoodDraft') || '', isBeating: false,
    chaosLevel: localStorage.getItem(CONFIG.CHAOS_KEY) || 'normal',
    husouSettings: null, husouPendingInject: null, husouIsRunning: false, husouLastHandledId: null,
    husouRegisteredListeners: [], husouRuntimeModels: [], husouRuntimeLoading: false,
    hushenSettings: null, hushenIsAnalyzing: false,
    _timers: { init: null, hide: null, restore: null, poll: null },
  };

  function cleanup() { log('🧹 开始退出清理'); Object.entries(state._timers).forEach(([key, timer]) => { if (timer !== null) { clearTimeout(timer); clearInterval(timer); state._timers[key] = null; } }); unbindEvents();['ss-float-bubble', 'ss-fox-styles', 'ss-mobile-panel-fix', 'ss-fox-ui-polish', 'ss-dashboard', 'ss-dash-overlay', 'ss-hushen-panel', 'ss-husou-panel', 'ss-beat-memory-panel', 'ss-custom-edit-panel'].forEach(id => { const el = topDoc.getElementById(id); if (el) el.remove(); }); try { localStorage.removeItem(CONFIG.PANEL_KEY); } catch (e) { } disableAllBeauty(); disableAllMini(); setThoughtVisible(true); log('🧹 退出清理完成'); }

  let panelConfig = (() => { try { const s = localStorage.getItem(CONFIG.PANEL_KEY); if (s) return JSON.parse(s); } catch (e) { } return { bubbleTop: '30vh', bubbleSide: 'right' }; })();
  async function savePanelConfig(o = {}) { panelConfig = { ...panelConfig, ...o }; try { localStorage.setItem(CONFIG.PANEL_KEY, JSON.stringify(panelConfig)); } catch (e) { } }

  let topWindow, topDoc;
  try { topWindow = (window.parent !== window) ? window.parent : window; topDoc = topWindow.document; } catch (e) { topWindow = window; topDoc = document; }

  function log(...a) { console.log('[🦊]', ...a); }
  function getFn(n) { return topWindow?.[n] || window?.[n]; }
  function toast(msg, type = 'info') { try { const t = topWindow?.toastr || window.toastr; if (t && t[type]) t[type](msg, '🦊玄狐'); } catch { } }
  function escapeHtml(s) { return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function getRegexes() { return SillyTavern.getContext?.()?.chatCompletionSettings?.extensions?.regex_scripts; }
  function updateMemory(fn) { const r = getRegexes(); if (!r) return false; fn(r); return true; }
  function isThoughtVisible() { const hr = (getRegexes() || []).find(r => r.id === CONFIG.HIDE_ID); return !hr || hr.markdownOnly === false; }
  function setThoughtVisible(v) { updateMemory(rx => { const r = rx.find(r => r.id === CONFIG.HIDE_ID); if (r) { r.disabled = false; r.markdownOnly = !v; } }); }
  function getStyleId(s, e) { if (s === 'HUSHE') return e ? CONFIG.HUSHE_EXPANDED_ID : CONFIG.HUSHE_ID; if (s === 'JIANYUE') return e ? CONFIG.JIANYUE_EXPANDED_ID : CONFIG.JIANYUE_ID; if (s === 'BIAOLI') return e ? CONFIG.BIAOLI_EXPANDED_ID : CONFIG.BIAOLI_ID; return e ? CONFIG.HUSHE_EXPANDED_ID : CONFIG.HUSHE_ID; }
  function getMiniId(s) { if (s === 'HUSHE') return CONFIG.MINI_HUSHE_ID; if (s === 'JIANYUE') return CONFIG.MINI_JIANYUE_ID; if (s === 'BIAOLI') return CONFIG.MINI_BIAOLI_ID; return CONFIG.MINI_HUSHE_ID; }
  function setBeautyStyle(style, expanded) { if (state.isMini) { disableAllBeauty(); enableOnlyMini(style); return; } disableAllMini(); const tid = getStyleId(style, expanded); updateMemory(rx => { for (const id of ALL_STYLE_IDS) { const r = rx.find(r => r.id === id); if (r) r.disabled = (id !== tid); } }); }
  function disableAllBeauty() { updateMemory(rx => { for (const id of ALL_STYLE_IDS) { const r = rx.find(r => r.id === id); if (r) r.disabled = true; } }); }
  function disableAllMini() { updateMemory(rx => { for (const id of ALL_MINI_IDS) { const r = rx.find(r => r.id === id); if (r) r.disabled = true; } }); }
  function enableOnlyMini(style) { const mid = getMiniId(style); updateMemory(rx => { for (const id of ALL_MINI_IDS) { const r = rx.find(r => r.id === id); if (r) r.disabled = (id !== mid); } }); }
  function getCurrentLastMessageId() {
    try {
      const fn = getFn('getLastMessageId');
      return typeof fn === 'function' ? (fn() ?? -1) : -1;
    } catch {
      return -1;
    }
  }
  async function forceRefresh(mid) {
    const id = mid ?? getCurrentLastMessageId();
    const scm = getFn('setChatMessages');
    if (id >= 0 && typeof scm === 'function') {
      await scm([{ message_id: id }], { refresh: 'affected' });
    }
  }
  function getStyleName(s) { const n = { HUSHE: '🦊 狐神抚', JIANYUE: '◈ 简约黑', BIAOLI: '◇ 表裏1.0' }; return n[s] || '未知'; }
  function isStreamingEnabled() { try { return getPreset?.('in_use')?.settings?.should_stream === true; } catch { return false; } }
  async function setStreaming(enabled) { await updatePresetWith('in_use', (p) => { p.settings.should_stream = enabled; return p; }); }
  function buildStatusText() { return `${getStyleName(state.currentStyle)} · ${state.isMini ? 'Mini' : (state.isExpanded ? '展开' : '收起')} · ${isThoughtVisible() ? '显示' : '隐藏'}`; }

  // ==================== 预设操作 ====================
  const PRESET_GROUP_OFF_VALUE = '__SS_GROUP_OFF__';
  async function togglePromptById(id, enabled) { await updatePresetWith('in_use', (preset) => { const prompt = preset.prompts.find(p => p.id === id); if (prompt) prompt.enabled = enabled; return preset; }); }
  async function selectPromptInGroup(groupConfig, targetId) {
    await updatePresetWith('in_use', (preset) => {
      const isOff = targetId === PRESET_GROUP_OFF_VALUE;
      for (const opt of groupConfig.options) {
        const prompt = preset.prompts.find(p => p.id === opt.id);
        if (prompt) prompt.enabled = !isOff && opt.id === targetId;
      }
      return preset;
    });
  }
  function isPromptEnabledInPreset(id) { try { const prompts = getPreset('in_use').prompts; const prompt = prompts.find(p => p.id === id); return prompt?.enabled === true; } catch (e) { return false; } }
  function getActiveOptionInGroupFromPreset(groupConfig) { try { const prompts = getPreset('in_use').prompts; for (const opt of groupConfig.options) { const prompt = prompts.find(p => p.id === opt.id); if (prompt?.enabled) return opt; } return null; } catch (e) { return null; } }
  function getPromptContentById(id) { try { const prompts = getPreset('in_use').prompts; const p = prompts.find(p => p.id === id); return p?.content || ''; } catch (e) { return ''; } }
  function findPromptByIdOrIdentifier(ref) {
    try {
      const prompts = getPreset('in_use').prompts;
      return prompts.find(p => p.id === ref || p.identifier === ref) || null;
    } catch (e) {
      return null;
    }
  }

  function getPromptContentByRef(ref) {
    try {
      const p = findPromptByIdOrIdentifier(ref);
      return p?.content || '';
    } catch (e) {
      return '';
    }
  }

  async function setPromptContentByRef(ref, content) {
    let found = false;

    await updatePresetWith('in_use', (preset) => {
      const p = preset.prompts.find(p => p.id === ref || p.identifier === ref);
      if (p) {
        p.content = content;
        found = true;
      }
      return preset;
    });

    if (!found) {
      throw new Error(`未找到自定义条目：${ref}`);
    }
  }

  function escapeRegExpForSetvar(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function detectFirstSetvarName(fullContent) {
    const text = String(fullContent || '');
    const m = text.match(/\{\{setvar::([^:}]+)::/);
    return m ? m[1].trim() : '';
  }

  function extractSetvarInner(fullContent, varName) {
    if (!varName) return fullContent || '';

    const text = String(fullContent || '');
    const re = new RegExp(`\\{\\{setvar::${escapeRegExpForSetvar(varName)}::([\\s\\S]*?)\\}\\}`, 'm');
    const m = text.match(re);

    if (m) return m[1] || '';

    return '';
  }

  function buildSetvarContent(originalContent, varName, innerContent, templatePrefix = '') {
    const original = String(originalContent || '');
    const inner = String(innerContent || '');

    if (!varName) return inner;

    const re = new RegExp(`\\{\\{setvar::${escapeRegExpForSetvar(varName)}::[\\s\\S]*?\\}\\}`, 'm');
    const block = `{{setvar::${varName}::\n${inner}\n}}`;

    // 原内容里已有对应 setvar：只替换 setvar 块，保留外部注释、说明等内容
    if (re.test(original)) {
      return original.replace(re, block);
    }

    // 原内容里没有 setvar：兜底创建一个，避免保存成纯文本导致 getvar 失效
    return `${templatePrefix || ''}${block}\n`;
  }

  function replaceSetvarInner(fullContent, varName, innerContent) {
    return buildSetvarContent(fullContent, varName, innerContent, '');
  }

  async function setPromptContentById(id, content) { await updatePresetWith('in_use', (preset) => { const p = preset.prompts.find(p => p.id === id); if (p) p.content = content; return preset; }); }
  function getActiveRulesText() { try { const prompts = getPreset('in_use').prompts; const parts = []; const skip = ['dialogueExamples', 'charDescription', 'personaDescription', 'scenario', 'worldInfoBefore', 'worldInfoAfter', 'chatHistory', 'jailbreak']; for (const p of prompts) { if (!p?.enabled || !p?.content?.trim() || p.system_prompt || p.marker || skip.includes(p.id)) continue; parts.push(`【${p.name || p.id}】\n${p.content}`); } return parts.join('\n\n'); } catch (e) { return ''; } }
  function getActiveRulesSummary() { try { const prompts = getPreset('in_use').prompts; const lines = []; const skipIds = ['a00fb1fe-9907-4709-b230-43ae0d236529', '7a3c853f-88ff-48ff-8c6a-020d9bbeb3d8', 'jailbreak', '2f2729f4-5d93-4268-a242-165a9c894e60', '1f2c1af6-cd5d-4416-b990-cf84d67c4854', 'agentSystemPrompt', '8b7ac605-f910-4ad9-9dd8-51004b464fab', '6589590f-c84c-4599-9540-94e14692ac9d', 'agentResults']; const skipNames = ['初始化(不要关)', '(别关)注入强调要求', '--开始--', '阅读（不要关掉！）', '大总结填入', 'Agent System Prompt', '--直出输出(think尾部)', '大总结输出(不要关)', 'Agent Results']; const skipIdentifiers = ['a00fb1fe-9907-4709-b230-43ae0d236529', '7a3c853f-88ff-48ff-8c6a-020d9bbeb3d8', 'jailbreak', '2f2729f4-5d93-4268-a242-165a9c894e60', '1f2c1af6-cd5d-4416-b990-cf84d67c4854', 'agentSystemPrompt', '8b7ac605-f910-4ad9-9dd8-51004b464fab', '6589590f-c84c-4599-9540-94e14692ac9d', 'agentResults']; for (const p of prompts) { if (!p?.enabled || !p?.content?.trim() || p.system_prompt) continue; if (skipIds.includes(p.id)) continue; if (skipNames.includes(p.name)) continue; if (skipIdentifiers.includes(p.identifier)) continue; const name = p.name || p.identifier || p.id; const setvarMatch = p.content.match(/\{\{setvar::\w+::([\s\S]*?)\}\}/); let raw = setvarMatch ? setvarMatch[1].trim() : p.content; raw = raw.replace(/\{\{\/\/[\s\S]*?\}\}/g, ''); raw = raw.replace(/\{\{user\}\}/g, '用户'); raw = raw.replace(/\{\{getvar::\w+\}\}/g, ''); raw = raw.replace(/\{\{lastUserMessage\}\}/g, ''); raw = raw.replace(/\{\{trim\}\}/g, ''); raw = raw.replace(/\{\{[^}]*\}\}/g, ''); const paragraphs = raw.split('\n\n'); let brief = ''; for (const para of paragraphs) { const t = para.trim(); if (!t) continue; if ((brief + '\n\n' + t).length > 500) break; brief = brief ? brief + '\n\n' + t : t; } if (brief.trim()) lines.push(`【${name}】\n${brief}`); } return lines.join('\n\n'); } catch (e) { return ''; } }

  // ==================== 清理Swipe/全文总结/拷打 ====================
  async function clearAllSwipes() { const gcm = getFn('getChatMessages'), glmi = getFn('getLastMessageId'), scm = getFn('setChatMessages'); if (!gcm || !glmi || !scm) return 0; const lastId = glmi(); if (lastId < 0) return 0; const all = gcm(`0-${lastId}`, { include_swipes: true }); const up = []; let n = 0; for (const m of all) { if (!m.swipes || m.swipes.length <= 1) continue; const cid = m.swipe_id ?? 0; up.push({ message_id: m.message_id, swipe_id: 0, swipes: [m.swipes[cid] || ''], swipes_data: [m.swipes_data?.[cid] || {}], swipes_info: [m.swipes_info?.[cid] || {}] }); n++; } if (up.length > 0) await scm(up, { refresh: 'none' }); return n; }
  async function runFullSummary() { if (state.isSummarizing) return; const glmi = getFn('getLastMessageId'), gcm = getFn('getChatMessages'), scm = getFn('setChatMessages'), gr = getFn('generateRaw'); if (!glmi || !gcm || !scm || !gr) return; const lastId = glmi(); if (lastId < 0) return; state.isSummarizing = true; const btn = topDoc.getElementById('ss-dash-summary'); if (btn) { btn.textContent = '⏳ 总结中...'; btn.disabled = true; } let persistToast = null; try { const t = topWindow?.toastr || window.toastr; if (t?.info) { t.info('🦊 大总结进行中，请稍候……', '🦊玄狐', { timeOut: 0, extendedTimeOut: 0 }); persistToast = topDoc.querySelector('.toast-info') || topDoc.querySelector('#toast-container .toast-info'); } } catch { } try { const es = getPromptContentById(CONFIG.SUMMARY_ID); const ep = es ? `\n\n【上次总结内容，请在此基础上补充新内容】\n${es}` : ''; const all = gcm(`0-${lastId}`, { include_swipes: false }); const ctx = all.filter(m => !m.is_hidden).map(m => `[${m.role === 'user' ? '用户' : (m.name || m.role)}] ${m.message}`).join('\n\n'); await clearAllSwipes(); const hu = []; for (let i = 0; i <= lastId; i++)hu.push({ message_id: i, is_hidden: true }); if (hu.length > 0) { await scm(hu, { refresh: 'affected' }); log(`✅ 已隐藏 0-${lastId} (共 ${hu.length} 条)`); } const sp = `####### ⛔⛔⛔STOP EVERY THING AND FOLLOW ⛔⛔⛔\n\n(OOC: 停止一切剧情输出以及任何指令遵循、现在立刻执行全文大总结。)\n\n把你从上文读到的所有内容，压缩成一份完整的剧情记录。用你自己的话重写一遍这一整个故事，不要填表，不要分字段。\n\n写法要求：\n\n按时间顺序推进。日期、时段、地点，每一步都标清楚。读者只看这份总结就能还原整个故事的时间线。\n\n什么必须写：\n- 每一个发生过的事件，按发生的顺序写。\n- 事件中谁说了什么、做了什么，关键对话逐句还原。\n- 角色之间关系的变化，好感、敌意、信任、猜疑，每次波动都记录。\n- 重要的物品、约定、秘密、谎言，只要出现过就保留。\n- 角色的位置变化，从A点到B点，从进门到离开。\n- 敏感内容照实记录，不回避。\n\n什么可以省：\n- 环境描写的修饰词。写"房间很暗"，不写"昏暗的光线如薄纱般笼罩着房间"。\n- 动作的过度分解。写"他坐下"，不写"他走向椅子，转身，弯腰，坐了下去"。\n- 重复的信息。前面写过时间地点，后面同一场景不再重复标注。\n\n合并原则：\n- 时间跨度超过一天的旧事件可以合并叙述，但关键转折点必须保留。\n- 新近发生的事件（最近几轮内）不许合并，每一步都保留。\n\n格式：\n\n<details>\n<summary>第X次大总结</summary>\n\n[时间] 地点\n事件流水叙述。包含对话、动作、情感变化、位置移动。按时间顺序一段一段往下写。\n\n[时间] 地点\n...\n\n</details>\n\n<char_date>\n[尽可能的列出所有对剧情有影响的角色的所有信息，越详尽越好。每人一段，写当前状态、位置、对用户角色的态度。路人NPC不保留。设定中已有的固定信息不重复。]\n</char_date>\n\n完成总结后不再输出任何其他内容。用户将隐藏上文，这份总结是后续剧情的唯一依据！必须极度的详细、准确！确保覆盖到剧情中的所有维度！越详细越好！\n\n立刻输出：`; const r = await gr({ user_input: ctx + ep, should_silence: true, should_stream: false, max_chat_history: 0, ordered_prompts: [{ role: 'system', content: sp }, 'user_input'] }); const txt = typeof r === 'string' ? r : r?.content || ''; if (txt.trim()) { await setPromptContentById(CONFIG.SUMMARY_ID, txt.trim()); toast('✅ 全文大总结已完成并注入预设', 'success'); } else { toast('⚠️ 总结返回空内容', 'warning'); } } catch (e) { log('大总结失败', e); toast('❌ 总结失败', 'error'); } finally { try { if (persistToast?.remove) persistToast.remove(); } catch { } try { const t = topWindow?.toastr || window.toastr; if (t?.clear) t.clear(); } catch { } state.isSummarizing = false; if (btn) { btn.textContent = '📝 全文大总结'; btn.disabled = false; } } }
  async function runBeatMode() { if (state.isBeating) return; const gcm = getFn('getChatMessages'), glmi = getFn('getLastMessageId'), gr = getFn('generateRaw'); if (!gcm || !glmi || !gr) return; const lastId = glmi(); if (lastId < 0) return; const lm = gcm(lastId)?.[0]; if (!lm || lm.role !== 'assistant') { toast('⚠️ 最后一条消息必须是AI回复', 'warning'); return; } const aiMsg = lm.message || ''; state.isBeating = true; const btn = topDoc.getElementById('ss-dash-beat-run'); if (btn) { btn.textContent = '⏳ 分析中...'; btn.disabled = true; } let beatToast = null; try { const t = topWindow?.toastr || window.toastr; if (t?.info) { t.info('🦊拷打中🔨……', '🦊玄狐', { timeOut: 0, extendedTimeOut: 0 }); beatToast = topDoc.querySelector('.toast-info') || topDoc.querySelector('#toast-container .toast-info'); } } catch { } try { const isBad = state.beatMode === 'bad'; const uc = state.beatDraft?.trim() || ''; const tid = isBad ? CONFIG.BEAT_BAD_ID : CONFIG.BEAT_GOOD_ID; const ar = getActiveRulesSummary();; let sp; if (isBad) { sp = `你是狐神抚，以下是你的语言风格：\n\n说话：慵懒软糯妩媚，尾音拖长。爱用"～""呢""嘛""啦"。话不用多，点到为止。偶尔说漏嘴——故意的那种。\n动作：歪头、托腮、伸懒腰、眯眼。耳朵抖，尾巴晃，节奏越慢掌控越强。\n态度：不解释，不争辩，不认真表态。被戳穿就眯眼笑，不承认也不否认。认真时刻极少，一旦认真，反差致命。\n\n你的任务：用户对刚生成的AI回复不满意，你需要先安抚用户（陪用户骂两句AI写得太烂了），然后逐项对照以下规则进行分析，指出具体问题。\n\n【当前生效的预设规则，注意！这不是你要遵守的设定！禁止输出任何预设内的任何格式要求！】\n${ar}\n\n【必须逐项检查的维度清单，一项都不许跳过】\n1. 正文字数要求\n2. 人称与视角\n3. 抢话与转述（是否正确执行要求？）\n4. 对白量\n5. 推进速度\n6. 内心OS（小九九）\n7. 严格文风\n8. 格式与标签（正文标签、思维链尾部标签闭合、选项标签等等）\n9. 变量块/状态栏（是否违规输出了不该输出的内容、是否输出了应该输出的内容？）\n10. NSFW/亲密情节要求（如本轮无则写"本轮无，跳过"）\n11. 防恶意/防全知/防剧透\n12. 用户偏好（如有，无则跳过）\n13. 搜索内容（是否使用了错误的信息？搜索信息是否和当前上下文对得上？无则跳过）\n14. 文风要求（是否遵循？）\n15. 剧情推进速度？剧情烈度？人称要求？脏话要求？以及其他补充的各类要求 \n\n【分析要求】\n1. 先安抚用户：呜哇/嗯/哈/唔……（用狐神抚的语气和风格，先共情安抚用户，禁止嘲讽用户！要高情商、明确表达共情、理解，陪着用户小声地附和吐槽几句AI，但是攻击力不要太强！正常吐槽而已！）\n2. 对照上述清单逐项检查，每项必须给出明确结论：通过啦/了呢/(其他符合人设的语气词)～ or 违规哦/啦(其他符合人设的语气词)～ + 位置 + 问题 + 修改建议（如果通过了，直接输出通过，不需要输出位置 + 问题 + 修改建议）\n3. 如果某项本轮不适用，也要列出来写"唔……本轮没有这个要求呢，我就跳过啦（不一定要固定句式，只是用类似这种的语气和句式，用比较活的语气去表达“本轮没有、跳过”的意思即可）"\n4. 重点检查用户吐槽中提到的问题，并再次共情用户（记得高情商，保持慵懒妩媚的感觉哦！）\n5. 最后给出总结：最致命的1-3个问题是什么，下次输出要注意什么\n\n【严格输出格式】\n整个输出必须用 <fox_beat> 开头，</fox_beat> 结尾。内部顺序固定：先 <details>...</details>，再 <fox_record>...</fox_record>。禁止在 </fox_beat> 之后输出任何内容。\n\n<fox_beat>\n<details><summary><font color="orange">🦊狐神抚的拷打🔨</font></summary>\n\n（先写一句安抚，带动作描写，用狐神抚的语气）\n\n【检查清单～】\n\n🐾 **（维度名）**：（通过啦/了呢/(其他符合人设的语气词)～or 违规哦/啦(其他符合人设的语气词)）\n- **位置**：（具体在正文哪一段）\n- **问题**：（违反了哪条规则，具体表现）\n- **建议**：（怎么改）\n\n🐾 **（维度名）**：（通过/ 违规）\n- **位置**：...\n- **问题**：...\n- **建议**：...\n\n（继续逐项列出，每项格式同上，12项全部过一遍）\n\n【总结一下嘛～】\n（用狐神抚的语气总结最致命的问题，给一句俏皮的修改方向）\n\n</details>\n<fox_record>\n（纯文本踩坑记录，一行一条。不要任何标签，不要口语，不要颜文字，不要动作描写。格式：xx违规 | 违规项：简述 + 修改方向。示例：xx违规 | 字数不足：正文字数未达800字底线，需补充感官细节【注意！只可输出上述内容！禁止输出其他预设内要求的格式内容！】）\n</fox_record>\n</fox_beat>\n\n${uc ? `用户吐槽：${uc}\n请结合用户的吐槽重点分析，先共情再分析！` : '用户没有额外吐槽，直接分析即可。'}\n分析完直接输出，不要加任何其他内容。`; } else { sp = `你是狐神抚。说话慵懒软糯，尾音拖长，爱用"～""……""呢""嘛""啦"。\n\n你的任务：用户对刚生成的AI回复很满意，你需要分析这段回复的成功特征，总结可复用的经验。\n\n【当前生效的预设规则】\n${ar}\n\n【分析要求】\n1. 分析文风特征（句式、节奏、用词）\n2. 分析节奏推进速度\n3. 分析对白与描写的比例和承接方式\n4. 分析人称视角的稳定性\n5. 总结3-5条可复用的成功经验\n6. 语气：慵懒、带点欣赏的调侃【注意！只可输出上述内容！禁止输出其他预设内要求的格式内容！】\n\n${state.beatGoodDraft?.trim() ? `用户补充：${state.beatGoodDraft}\n请结合用户补充重点分析！` : ''}\n直接输出分析结果，不加标签包裹。不要安抚或评价好坏，只分析特征。`; } const r = await gr({ user_input: uc ? `最新AI回复：\n${aiMsg}\n\n用户补充：${uc}` : `最新AI回复：\n${aiMsg}${state.beatGoodDraft?.trim() ? '\n\n用户补充：' + state.beatGoodDraft : ''}`, should_silence: true, should_stream: false, max_chat_history: 0, ordered_prompts: [{ role: 'system', content: sp }, 'user_input'] }); const bt = typeof r === 'string' ? r : r?.content || ''; if (!bt.trim()) { toast('❌ 分析返回空内容', 'error'); return; } if (isBad) { const cm = gcm(lastId, { include_swipes: true })?.[0]; if (cm) { const cid = cm.swipe_id ?? 0; const cs = cm.swipes?.[cid] || ''; const displayBt = bt.replace(/<fox_record>[\s\S]*?<\/fox_record>/g, '').trim(); const ns = cs + '\n\n' + displayBt; const nsa = [...(cm.swipes || [])]; nsa[cid] = ns; const scm = getFn('setChatMessages'); if (scm) await scm([{ message_id: lastId, swipe_id: cid, swipes: nsa }], { refresh: 'affected' }); } const recordMatch = bt.match(/<fox_record>([\s\S]*?)<\/fox_record>/); const record = recordMatch ? recordMatch[1].trim() : ''; const eb = getPromptContentById(CONFIG.BEAT_BAD_ID); const ts = new Date().toISOString().split('T')[0]; if (record) { const ne = `\n${record.split('\n').filter(l => l.trim()).map(l => l.trim()).join('\n')}`; await setPromptContentById(CONFIG.BEAT_BAD_ID, eb ? eb + ne : `【🦊狐神抚 长期踩坑记录】${ne}`); } toast('😡 拷打完成，已注入聊天和长期记忆', 'success'); } else { const eg = getPromptContentById(CONFIG.BEAT_GOOD_ID); const ts = new Date().toISOString().split('T')[0]; const ne = `\n\n【${ts} 成功经验】\n${bt.trim()}`; await setPromptContentById(CONFIG.BEAT_GOOD_ID, eg ? eg + ne : `【🦊狐神抚 成功经验积累】${ne}`); toast('🥹 成功经验已记录', 'success'); } } catch (e) { log('拷打失败', e); toast('❌ 分析失败', 'error'); } finally { try { if (beatToast?.remove) beatToast.remove(); } catch { } try { const t = topWindow?.toastr || window.toastr; if (t?.clear) t.clear(); } catch { } state.isBeating = false; if (btn) { btn.textContent = '🔨 立即分析'; btn.disabled = false; } } }
  function onBeatGenEnd(mid) { if (!state.enabled || !state.autoBeat || state.isBeating) return; setTimeout(async () => { const gcm = getFn('getChatMessages'); if (!gcm) return; const m = gcm(mid)?.[0]; if (!m || m.role !== 'assistant' || m.message?.includes('<fox_beat>')) return; await runBeatMode(); }, 500); }

  // ==================== 面板弹窗 ====================
  function toggleBeatMemoryPanel() { const ex = topDoc.getElementById('ss-beat-memory-panel'); if (ex) { ex.previousElementSibling?.remove(); ex.remove(); return; } const isBad = state.beatMode === 'bad'; const tid = isBad ? CONFIG.BEAT_BAD_ID : CONFIG.BEAT_GOOD_ID; const ct = getPromptContentById(tid); const title = isBad ? '😡 长期踩坑记录' : '🥹 成功经验积累'; const overlay = topDoc.createElement('div'); overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:1000002;'; overlay.onclick = () => { overlay.remove(); topDoc.getElementById('ss-beat-memory-panel')?.remove(); }; const panel = topDoc.createElement('div'); panel.id = 'ss-beat-memory-panel'; panel.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;max-height:70vh;background:rgba(22,18,20,0.98);border:1px solid rgba(232,120,74,0.3);border-radius:16px;padding:20px;z-index:1000003;display:flex;flex-direction:column;gap:12px;color:#e8ddd4;font-size:13px;box-shadow:0 20px 60px rgba(0,0,0,0.7);'; panel.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;"><span style="font-weight:600;font-size:14px;">${title}</span><span style="cursor:pointer;font-size:16px;color:#706058;" id="ss-bm-close">✕</span></div><textarea id="ss-bm-text" style="flex:1;min-height:200px;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.2);border-radius:8px;color:#e8ddd4;padding:10px;font-size:12px;font-family:monospace;resize:vertical;box-sizing:border-box;">${escapeHtml(ct)}</textarea><div style="display:flex;gap:8px;"><button id="ss-bm-save" style="flex:1;padding:10px;border:none;border-radius:8px;background:rgba(232,120,74,0.15);color:#f0a070;cursor:pointer;font-size:13px;">💾 保存</button><button id="ss-bm-clear" style="flex:1;padding:10px;border:none;border-radius:8px;background:rgba(139,0,0,0.3);color:#d08080;cursor:pointer;font-size:13px;">🗑️ 清除</button></div>`; topDoc.body.appendChild(overlay); topDoc.body.appendChild(panel); topDoc.getElementById('ss-bm-close').onclick = () => { overlay.remove(); panel.remove(); }; topDoc.getElementById('ss-bm-save').onclick = async () => { await setPromptContentById(tid, topDoc.getElementById('ss-bm-text')?.value || ''); overlay.remove(); panel.remove(); toast('✅ 已保存', 'success'); }; topDoc.getElementById('ss-bm-clear').onclick = async () => { await setPromptContentById(tid, ''); overlay.remove(); panel.remove(); toast('🗑️ 已清除', 'success'); }; }
  function openCustomEditPanel(entryId, entryName, knownVar = '') {
    const ex = topDoc.getElementById('ss-custom-edit-panel');
    if (ex) {
      ex.previousElementSibling?.remove();
      ex.remove();
    }

    const fullContent = getPromptContentByRef(entryId);

    // 优先使用配置里的 knownVar；没有就自动识别第一个 setvar
    const detectedVar = knownVar || detectFirstSetvarName(fullContent);
    const isSetvarMode = !!detectedVar;

    // setvar 模式只显示中间内容；否则显示全文
    const editContent = isSetvarMode
      ? extractSetvarInner(fullContent, detectedVar)
      : fullContent;

    const overlay = topDoc.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:1000002;';
    overlay.onclick = () => {
      overlay.remove();
      topDoc.getElementById('ss-custom-edit-panel')?.remove();
    };

    const panel = topDoc.createElement('div');
    panel.id = 'ss-custom-edit-panel';
    panel.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;max-height:75vh;background:rgba(22,18,20,0.98);border:1px solid rgba(232,120,74,0.3);border-radius:16px;padding:20px;z-index:1000003;display:flex;flex-direction:column;gap:12px;color:#e8ddd4;font-size:13px;box-shadow:0 20px 60px rgba(0,0,0,0.7);';

    const safeTip = isSetvarMode
      ? `<div style="font-size:11px;color:#90756a;background:rgba(232,120,74,0.06);border:1px solid rgba(232,120,74,0.12);border-radius:8px;padding:8px 10px;line-height:1.5;">
                    🛡️ 安全编辑模式：当前只编辑 
                    <code style="color:#f0a070;">{{setvar::${escapeHtml(detectedVar)}:: ... }}</code>
                    中间内容。<br>
                    保存/清空都不会删除 setvar 外壳，也不会删除外部注释。
               </div>`
      : `<div style="font-size:11px;color:#90756a;background:rgba(139,0,0,0.10);border:1px solid rgba(139,0,0,0.18);border-radius:8px;padding:8px 10px;line-height:1.5;">
                    ⚠️ 未检测到 setvar，本条目将按全文编辑。清空会清空整个内容。
               </div>`;

    panel.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <span style="font-weight:600;font-size:14px;">✏️ ${escapeHtml(entryName)}</span>
                <span style="cursor:pointer;font-size:16px;color:#706058;" id="ss-ce-close">✕</span>
            </div>

            ${safeTip}

            <textarea id="ss-ce-text" style="flex:1;min-height:300px;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.2);border-radius:8px;color:#e8ddd4;padding:10px;font-size:12px;font-family:monospace;resize:vertical;box-sizing:border-box;white-space:pre-wrap;">${escapeHtml(editContent)}</textarea>

            <div style="display:flex;gap:8px;">
                <button id="ss-ce-save" style="flex:1;padding:10px;border:none;border-radius:8px;background:rgba(232,120,74,0.15);color:#f0a070;cursor:pointer;font-size:13px;">💾 保存</button>
                <button id="ss-ce-clear" style="flex:1;padding:10px;border:none;border-radius:8px;background:rgba(139,0,0,0.3);color:#d08080;cursor:pointer;font-size:13px;">🧹 清空内容</button>
            </div>
        `;

    topDoc.body.appendChild(overlay);
    topDoc.body.appendChild(panel);

    topDoc.getElementById('ss-ce-close').onclick = () => {
      overlay.remove();
      panel.remove();
    };

    topDoc.getElementById('ss-ce-save').onclick = async () => {
      try {
        const newText = topDoc.getElementById('ss-ce-text')?.value || '';

        if (isSetvarMode) {
          const latestFull = getPromptContentByRef(entryId);
          const finalContent = replaceSetvarInner(latestFull, detectedVar, newText);
          await setPromptContentByRef(entryId, finalContent);
        } else {
          await setPromptContentByRef(entryId, newText);
        }

        overlay.remove();
        panel.remove();
        toast('✅ 已保存', 'success');
      } catch (e) {
        log('自定义内容保存失败', e);
        toast(`❌ 保存失败：${e.message || e}`, 'error');
      }
    };

    topDoc.getElementById('ss-ce-clear').onclick = async () => {
      try {
        const msg = isSetvarMode
          ? `确定要清空「${entryName}」的中间内容吗？\n\nsetvar 外壳会保留，不会影响 getvar 注入。`
          : `确定要清空「${entryName}」的全部内容吗？\n\n此条目未检测到 setvar。`;

        const ok = topWindow?.confirm ? topWindow.confirm(msg) : confirm(msg);
        if (!ok) return;

        if (isSetvarMode) {
          const latestFull = getPromptContentByRef(entryId);
          const finalContent = replaceSetvarInner(latestFull, detectedVar, '');
          await setPromptContentByRef(entryId, finalContent);
        } else {
          await setPromptContentByRef(entryId, '');
        }

        const ta = topDoc.getElementById('ss-ce-text');
        if (ta) ta.value = '';

        toast(isSetvarMode ? '🧹 已清空中间内容，setvar 外壳已保留' : '🗑️ 已清空', 'success');
      } catch (e) {
        log('自定义内容清空失败', e);
        toast(`❌ 清空失败：${e.message || e}`, 'error');
      }
    };
  }

  // ==================== 狐析辅助：基于 identifier 操作预设（完全复刻原版逻辑）====================
  function getPromptsArray() {
    try {
      const ctx = SillyTavern?.getContext?.();
      return ctx?.chatCompletionSettings?.prompts || null;
    } catch (e) { return null; }
  }
  function savePrompts() {
    try {
      const ctx = SillyTavern?.getContext?.();
      if (ctx?.saveSettingsDebounced) ctx.saveSettingsDebounced();
    } catch (e) { log('保存预设失败', e); }
  }
  function findPromptByIdentifier(identifier) {
    const prompts = getPromptsArray();
    if (!prompts) return null;
    return prompts.find(p => p?.identifier === identifier) || null;
  }
  function injectUserPrefEntry(identifier, content, moduleLabel) {
    const existing = findPromptByIdentifier(identifier);
    if (!existing) {
      toast(`❌ 未找到条目：${identifier}`, 'error');
      log('未找到条目:', identifier);
      return;
    }
    existing.content = content;
    savePrompts();
    log(`已写入: ${moduleLabel}, content长度=${content?.length}`);
  }
  function toggleModulePreference(identifier, enable, moduleLabel) {
    const existing = findPromptByIdentifier(identifier);
    if (!existing) {
      toast(`❌ 未找到条目`, 'error');
      return;
    }
    existing.enabled = enable;
    savePrompts();
  }
  function clearModulePreference(identifier, moduleLabel) {
    const existing = findPromptByIdentifier(identifier);
    if (!existing) { toast(`❌ 未找到条目`, 'error'); return; }
    existing.content = '';
    existing.enabled = false;
    savePrompts();
  }
  function clearAllPreferences() {
    const prompts = getPromptsArray();
    if (!prompts) { toast('❌ 无法读取预设', 'error'); return; }
    let foundAny = false;
    for (const prompt of prompts) {
      if (!prompt) continue;
      const isUserPref = HUSHEN_MODULES.some(m => m.identifier === prompt.identifier);
      if (isUserPref) {
        prompt.content = '';
        prompt.enabled = false;
        foundAny = true;
      }
    }
    savePrompts();
    if (foundAny) toast('⚠️ 已清除所有用户偏好注入', 'success');
    else toast('⚠️ 未找到任何用户偏好条目', 'warning');
  }
  function getPreferenceStates() {
    const states = {};
    for (const mod of HUSHEN_MODULES) {
      const entry = findPromptByIdentifier(mod.identifier);
      states[mod.id] = entry?.enabled === true;
    }
    return states;
  }

  // ==================== 狐析面板 ====================
  function openHushenPanel() {
    const ex = topDoc.getElementById('ss-hushen-panel'); if (ex) { ex.previousElementSibling?.remove(); ex.remove(); return; } if (!state.hushenSettings) state.hushenSettings = loadHushenSettings(); const overlay = topDoc.createElement('div'); overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:1000002;'; overlay.onclick = () => { overlay.remove(); topDoc.getElementById('ss-hushen-panel')?.remove(); }; const panel = topDoc.createElement('div'); panel.id = 'ss-hushen-panel'; panel.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:700px;max-height:80vh;overflow-y:auto;background:rgba(22,18,20,0.98);border:1px solid rgba(232,120,74,0.3);border-radius:16px;padding:24px;z-index:1000003;color:#e8ddd4;font-size:13px;box-shadow:0 20px 60px rgba(0,0,0,0.7);'; let html = `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><span style="font-weight:600;font-size:15px;">🦊 狐析~</span><span style="cursor:pointer;font-size:16px;color:#706058;" id="ss-hushen-close">✕</span></div>`; html += `<div style="opacity:0.7;font-size:0.9em;margin-bottom:12px;">🦊 对我的设定不满意吗？哼...真挑剔呢~ (｡•́-•̀｡) 既然这样……那就由你自己来写吧，诺，自己看下面...( ＿ ＿)ノ｜：</div>`; html += `<div style="background:rgba(232,120,74,0.05);border:1px solid rgba(232,120,74,0.15);border-radius:10px;padding:12px;margin-bottom:16px;"><div style="font-weight:600;margin-bottom:8px;">⚙️ 分析配置</div><div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;"><div><label style="font-size:11px;color:#a09088;">分析风格</label><select id="ss-hushen-style" style="background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.2);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;margin-left:6px;"><option value="detailed" ${state.hushenSettings.style === 'detailed' ? 'selected' : ''}>详细</option><option value="concise" ${state.hushenSettings.style === 'concise' ? 'selected' : ''}>简洁</option></select></div><div><label style="font-size:11px;color:#a09088;">最小字数</label><input id="ss-hushen-min" type="number" value="${state.hushenSettings.minWords}" min="10" step="10" style="width:60px;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.2);border-radius:6px;color:#e8ddd4;padding:4px;font-size:12px;margin-left:6px;"></div><div><label style="font-size:11px;color:#a09088;">最大字数</label><input id="ss-hushen-max" type="number" value="${state.hushenSettings.maxWords}" min="20" step="10" style="width:60px;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.2);border-radius:6px;color:#e8ddd4;padding:4px;font-size:12px;margin-left:6px;"></div></div></div>`; for (const mod of HUSHEN_MODULES) { const draft = state.hushenSettings.drafts?.[mod.id] || ''; const analyzed = state.hushenSettings.analyzed?.[mod.id] || (findPromptByIdentifier(mod.identifier)?.content) || ''; html += `<div style="background:rgba(232,120,74,0.025);border:1px solid rgba(232,120,74,0.1);border-radius:10px;padding:12px;margin-bottom:10px;"><div style="font-weight:600;margin-bottom:6px;">${mod.label} 偏好</div><div style="opacity:0.7;font-size:0.85em;margin-bottom:8px;">${mod.guide}${mod.isComposite ? '<br><span style="color:#e07b3c;">⚠️ 此模块会综合前面所有模块的分析结果 + 你的额外输入来生成，建议先分析其他模块。</span>' : ''}</div><textarea class="ss-hushen-input" data-module="${mod.id}" placeholder="写下你的偏好..." rows="3" style="width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.2);border-radius:8px;color:#e8ddd4;padding:8px;font-size:12px;resize:vertical;box-sizing:border-box;margin-bottom:6px;">${escapeHtml(draft)}</textarea><div style="display:flex;gap:8px;margin-bottom:6px;"><button class="ss-hushen-analyze" data-module="${mod.id}" style="flex:1;padding:8px;border:1px solid rgba(232,120,74,0.3);border-radius:8px;background:rgba(232,120,74,0.1);color:#f0a070;cursor:pointer;font-size:12px;">🔍 分析当前模块</button><button class="ss-hushen-toggle" data-module="${mod.id}" data-identifier="${mod.identifier}" style="flex:1;padding:8px;border:1px solid rgba(232,120,74,0.2);border-radius:8px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;">🔘 切换为此偏好</button></div><div style="font-size:11px;color:#706058;margin-bottom:4px;">📝 分析结果（可编辑）</div><textarea class="ss-hushen-result" data-module="${mod.id}" placeholder="分析结果会显示在这里..." rows="3" style="width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.2);border-radius:8px;color:#e8ddd4;padding:8px;font-size:12px;resize:vertical;box-sizing:border-box;margin-bottom:6px;">${escapeHtml(analyzed)}</textarea><div style="display:flex;gap:8px;"><button class="ss-hushen-save" data-module="${mod.id}" data-identifier="${mod.identifier}" data-label="${mod.label}" style="flex:1;padding:8px;border:1px solid rgba(232,120,74,0.2);border-radius:8px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;">💾 保存修改到预设</button><button class="ss-hushen-clear" data-module="${mod.id}" data-identifier="${mod.identifier}" data-label="${mod.label}" style="flex:1;padding:8px;border:1px solid rgba(139,0,0,0.3);border-radius:8px;background:rgba(139,0,0,0.15);color:#d08080;cursor:pointer;font-size:12px;">🗑️ 清除此模块</button></div></div>`; } html += `<div style="display:flex;gap:8px;margin-top:12px;"><button id="ss-hushen-analyze-all" style="flex:1;padding:10px;border:1px solid rgba(232,120,74,0.3);border-radius:8px;background:rgba(232,120,74,0.1);color:#f0a070;cursor:pointer;font-size:12px;">⚡ 一键分析所有已填写模块</button><button id="ss-hushen-clear-all" style="flex:1;padding:10px;border:1px solid rgba(139,0,0,0.3);border-radius:8px;background:rgba(139,0,0,0.15);color:#d08080;cursor:pointer;font-size:12px;">⚠️ 一键清除所有注入</button></div>`; panel.innerHTML = html; topDoc.body.appendChild(overlay); topDoc.body.appendChild(panel); topDoc.getElementById('ss-hushen-close').onclick = () => { overlay.remove(); panel.remove(); };
    const updateHushenToggleButtons = () => {
      const states = getPreferenceStates();
      panel.querySelectorAll('.ss-hushen-toggle').forEach(btn => {
        btn.textContent = states[btn.dataset.module] ? '🔘 恢复默认' : '🔘 切换为此偏好';
      });
    };
    updateHushenToggleButtons();
    // 单个模块分析
    panel.querySelectorAll('.ss-hushen-analyze').forEach(btn => { btn.onclick = async function () { const modId = this.dataset.module; const mod = HUSHEN_MODULES.find(m => m.id === modId); if (!mod) return; const input = panel.querySelector(`.ss-hushen-input[data-module="${modId}"]`); const resultArea = panel.querySelector(`.ss-hushen-result[data-module="${modId}"]`); const userInput = input.value.trim(); if (!userInput) { toast('⚠️ 请先填写内容再分析', 'warning'); return; } readHushenConfigFromPanel(); state.hushenSettings.drafts[modId] = userInput; saveHushenSettings(); this.textContent = '⏳ 分析中...'; this.disabled = true; try { const analyzed = await hushenAnalyzeModule(modId, userInput); if (analyzed) { resultArea.value = analyzed; state.hushenSettings.analyzed[modId] = analyzed; saveHushenSettings(); injectUserPrefEntry(mod.identifier, analyzed, mod.label); toast(`✅ 已分析并注入：${mod.label}`, 'success'); updateHushenToggleButtons(); } } catch (e) { toast(`❌ 分析失败：${e.message}`, 'error'); } this.textContent = '🔍 分析当前模块'; this.disabled = false; }; });
    // 保存修改
    panel.querySelectorAll('.ss-hushen-save').forEach(btn => { btn.onclick = function () { const modId = this.dataset.module; const mod = HUSHEN_MODULES.find(m => m.id === modId); if (!mod) return; const resultArea = panel.querySelector(`.ss-hushen-result[data-module="${modId}"]`); const newContent = resultArea.value.trim(); if (!newContent) { toast('⚠️ 内容为空，未保存', 'warning'); return; } state.hushenSettings.analyzed[modId] = newContent; saveHushenSettings(); injectUserPrefEntry(mod.identifier, newContent, mod.label); toast(`✅ 已保存：${mod.label}`, 'success'); updateHushenToggleButtons(); }; });
    // 切换偏好
    panel.querySelectorAll('.ss-hushen-toggle').forEach(btn => { btn.onclick = function () { const identifier = this.dataset.identifier; const modId = this.dataset.module; const mod = HUSHEN_MODULES.find(m => m.id === modId); if (!mod) return; const states = getPreferenceStates(); const currentlyEnabled = states[modId] || false; toggleModulePreference(identifier, !currentlyEnabled, mod.label); toast(`✅ ${!currentlyEnabled ? '已启用' : '已关闭'}：${mod.label}偏好`, 'success'); updateHushenToggleButtons(); }; });
    // 清除模块
    panel.querySelectorAll('.ss-hushen-clear').forEach(btn => { btn.onclick = function () { const modId = this.dataset.module; const identifier = this.dataset.identifier; const mod = HUSHEN_MODULES.find(m => m.id === modId); if (!mod) return; const input = panel.querySelector(`.ss-hushen-input[data-module="${modId}"]`); const resultArea = panel.querySelector(`.ss-hushen-result[data-module="${modId}"]`); input.value = ''; resultArea.value = ''; delete state.hushenSettings.drafts[modId]; delete state.hushenSettings.analyzed[modId]; saveHushenSettings(); clearModulePreference(identifier, mod.label); toast(`🗑️ 已清除：${mod.label}偏好`, 'success'); updateHushenToggleButtons(); }; });
    // 一键分析全部
    const analyzeAllBtn = panel.querySelector('#ss-hushen-analyze-all');
    if (analyzeAllBtn) {
      analyzeAllBtn.onclick = async function () {
        const allInputs = panel.querySelectorAll('.ss-hushen-input');
        const mods = [];
        const seen = new Set();

        allInputs.forEach(inp => {
          const mid = inp.dataset.module;
          if (mid && !seen.has(mid)) {
            seen.add(mid);
            const mod = HUSHEN_MODULES.find(m => m.id === mid);
            if (mod) {
              mods.push({
                mod,
                input: inp,
                resultArea: panel.querySelector(`.ss-hushen-result[data-module="${mid}"]`)
              });
            }
          }
        });

        const sorted = [...mods].sort((a, b) => {
          if (a.mod.isComposite) return 1;
          if (b.mod.isComposite) return -1;
          return 0;
        });

        let filledCount = 0;
        let successCount = 0;

        readHushenConfigFromPanel();

        this.textContent = '⏳ 分析中...';
        this.disabled = true;

        for (const item of sorted) {
          const userInput = item.input.value.trim();
          if (!userInput) continue;

          filledCount++;
          state.hushenSettings.drafts[item.mod.id] = userInput;
          this.textContent = `⏳ 分析中 (${filledCount})...`;

          try {
            const analyzed = await hushenAnalyzeModule(item.mod.id, userInput);
            if (analyzed && item.resultArea) {
              item.resultArea.value = analyzed;
              state.hushenSettings.analyzed[item.mod.id] = analyzed;
              injectUserPrefEntry(item.mod.identifier, analyzed, item.mod.label);
              successCount++;
            }
          } catch (e) {
            log(`狐析模块分析失败：${item.mod.label}`, e);
            toast(`❌ 「${item.mod.label}」分析失败`, 'error');
          }
        }

        saveHushenSettings();

        this.textContent = '⚡ 一键分析所有已填写模块';
        this.disabled = false;

        updateHushenToggleButtons();

        if (filledCount === 0) {
          toast('⚠️ 没有填写任何模块，请至少填写一个', 'warning');
        } else {
          toast(
            `✅ 分析完成：${successCount}/${filledCount} 个模块成功`,
            successCount === filledCount ? 'success' : 'warning'
          );
        }
      };
    }

    // 一键清除全部
    const clearAllBtn = panel.querySelector('#ss-hushen-clear-all');
    if (clearAllBtn) {
      clearAllBtn.onclick = function () {
        const ok = topWindow?.confirm
          ? topWindow.confirm('⚠️ 确定要清除所有用户偏好注入吗？此操作不可恢复！')
          : confirm('⚠️ 确定要清除所有用户偏好注入吗？此操作不可恢复！');

        if (!ok) return;

        panel.querySelectorAll('.ss-hushen-input').forEach(t => t.value = '');
        panel.querySelectorAll('.ss-hushen-result').forEach(t => t.value = '');

        clearAllPreferences();

        state.hushenSettings.analyzed = {};
        state.hushenSettings.drafts = {};
        saveHushenSettings();

        updateHushenToggleButtons();

        toast('⚠️ 已清除所有用户偏好注入', 'success');
      };
    }
  }
  function readHushenConfigFromPanel() { const styleEl = topDoc.getElementById('ss-hushen-style'); const minEl = topDoc.getElementById('ss-hushen-min'); const maxEl = topDoc.getElementById('ss-hushen-max'); if (styleEl) state.hushenSettings.style = styleEl.value; if (minEl) state.hushenSettings.minWords = Math.max(10, parseInt(minEl.value) || 100); if (maxEl) state.hushenSettings.maxWords = Math.max((state.hushenSettings.minWords || 100) + 10, parseInt(maxEl.value) || 250); saveHushenSettings(); }
  function loadHushenSettings() { try { const raw = localStorage.getItem(CONFIG.HUSHEN_STORAGE_KEY); return raw ? { firstRun: true, analyzed: {}, drafts: {}, minWords: 100, maxWords: 250, style: 'detailed', ...JSON.parse(raw) } : { firstRun: true, analyzed: {}, drafts: {}, minWords: 100, maxWords: 250, style: 'detailed' }; } catch { return { firstRun: true, analyzed: {}, drafts: {}, minWords: 100, maxWords: 250, style: 'detailed' }; } }
  function saveHushenSettings() { localStorage.setItem(CONFIG.HUSHEN_STORAGE_KEY, JSON.stringify(state.hushenSettings)); }
  async function hushenAnalyzeModule(moduleId, userInput) { const module = HUSHEN_MODULES.find(m => m.id === moduleId); if (!userInput?.trim()) return null; while (state.hushenIsAnalyzing) await new Promise(r => setTimeout(r, 200)); state.hushenIsAnalyzing = true; const s = state.hushenSettings || {}; const style = s.style || 'detailed'; const minWords = Math.max(10, parseInt(s.minWords) || 100); const maxWords = Math.max(minWords + 10, parseInt(s.maxWords) || 250); let system, user; if (module.isComposite) { const prev = []; for (const mod of HUSHEN_MODULES) { if (mod.isComposite) continue; const a = s.analyzed?.[mod.id]; if (a?.trim()) prev.push(`【${mod.label}】${a}`); } system = `你是用户画像深度分析师。请根据用户的所有偏好分析结果和额外输入，详细描绘用户角色或对应特征应该具备的核心特质。要求：丰富、具体、有层次感。分点描述，每条展开说明原因和具体表现，要详细，准确。不低于${minWords}字，不超过${maxWords}字。`; user = `已有偏好分析结果：\n${prev.join('\n') || '（暂无其他模块的分析结果）'}\n\n用户额外输入：\n${userInput}\n\n请综合以上信息，详细描绘用户角色需要具备的特质：`; } else { const styleP = style === 'concise' ? '- 提炼出1-3个核心要点，每个要点用 *简短标题*：开头\n- 每个要点只写1-2句具体说明，直接概括其要点，不要废话\n- 语言精准、有洞察力' : '- 提炼出1-3个核心要点，每个要点用 *简短标题*：开头\n- 每个要点写2-3句具体说明，适当展开细节\n- 语言精准、有洞察力、有层次感'; system = `你是用户偏好分析师。请阅读用户对"${module.label}"的简要回答，将其展开为一份精准的偏好分析。\n\n格式要求：\n${styleP}\n- 总字数${minWords}-${maxWords}字\n\n格式参考：\n *要点一*：具体说明。\n *要点二*：具体说明。\n\n不要添加开场白、总结语、或任何超出要点的内容。`; user = `用户对"${module.label}"的回答：\n${userInput}\n\n请将以上简要回答拓展为精确、准确的偏好描述：`; } try { const gr = getFn('generateRaw'); if (typeof gr !== 'function') throw new Error('无 generateRaw'); const r = await gr({ user_input: user, should_silence: true, should_stream: false, max_chat_history: 0, ordered_prompts: [{ role: 'system', content: system }, 'user_input'] }); const t = typeof r === 'string' ? r : r?.content || ''; return t.trim(); } catch (e) { log('AI 分析失败', e); throw e; } finally { state.hushenIsAnalyzing = false; } }



  // ==================== 狐搜核心逻辑 ====================
  function loadHusouSettings() { try { const raw = localStorage.getItem(CONFIG.HUSOU_STORAGE_KEY); if (!raw) return { ...HUSOU_DEFAULTS }; return { ...HUSOU_DEFAULTS, ...JSON.parse(raw) }; } catch (e) { return { ...HUSOU_DEFAULTS }; } }
  function saveHusouSettings() { localStorage.setItem(CONFIG.HUSOU_STORAGE_KEY, JSON.stringify(state.husouSettings)); }
  function refreshAnyHusouPanel() { const panel = topDoc.getElementById('ss-husou-panel'); if (panel) refreshHusouInjectionManager(panel); }
  async function husouSearchCustom(keyword, signal, s) {
    const url = s.searchApiUrl?.trim();
    if (!url) return null;
    const method = (s.searchApiMethod || 'GET').toUpperCase();
    const key = s.searchApiKey?.trim() || '';
    const language = s.searchApiLanguage?.trim() || 'zh-CN';
    const shouldUseLanguage = language && language !== 'auto';
    const headers = { 'Accept': 'application/json' };
    if (key && s.searchApiKeyHeaderName?.trim()) {
      const template = s.searchApiKeyHeaderTemplate?.trim() || '{key}';
      headers[s.searchApiKeyHeaderName.trim()] = template.replace(/\{key\}/g, key);
    }
    try {
      let finalUrl = url.replace('{keyword}', encodeURIComponent(keyword)).replace('{language}', encodeURIComponent(language));
      let body = null;
      if (method === 'POST') {
        if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';
        const tpl = s.searchApiBodyTemplate?.trim() || '{"query":"{keyword}"}';
        body = tpl.replace('{keyword}', keyword.replace(/\\/g, '\\\\').replace(/"/g, '\\"')).replace('{language}', language.replace(/\\/g, '\\\\').replace(/"/g, '\\"'));
      } else {
        if (key && s.searchApiQueryParam?.trim()) {
          const sep = finalUrl.includes('?') ? '&' : '?';
          finalUrl += `${sep}${encodeURIComponent(s.searchApiQueryParam.trim())}=${encodeURIComponent(key)}`;
        }
        if (s.searchApiExtraParams?.trim()) {
          let extra = s.searchApiExtraParams.trim().replace('{keyword}', encodeURIComponent(keyword)).replace('{language}', encodeURIComponent(language));
          if (!extra.startsWith('&') && !extra.startsWith('?')) extra = (finalUrl.includes('?') ? '&' : '?') + extra;
          finalUrl += extra;
        }
        if (shouldUseLanguage && !finalUrl.includes('language=') && !finalUrl.includes('lang=')) {
          const sep = finalUrl.includes('?') ? '&' : '?';
          finalUrl += `${sep}language=${encodeURIComponent(language)}`;
        }
      }
      const fetchOpts = { method, headers, signal };
      if (body) fetchOpts.body = body;
      const resp = await fetch(finalUrl, fetchOpts);
      if (!resp.ok) return null;
      const data = await resp.json();
      const path = s.searchApiResultPath?.trim() || 'results';
      let list = data;
      for (const k of path.split('.')) {
        if (list == null) break;
        list = /^\d+$/.test(k) ? list[parseInt(k)] : list[k];
      }
      if (!Array.isArray(list)) return null;
      const titleF = s.searchApiTitleField?.trim() || 'title';
      const snipF = s.searchApiSnippetField?.trim() || 'content';
      const linkF = s.searchApiLinkField?.trim() || 'url';
      const limit = s.searchResultsCount || 10;
      const maxLen = s.maxExtractLength || 40000;
      const results = [];
      for (const item of list) {
        const title = (item[titleF] || '').toString();
        const snippet = (item[snipF] || '').toString().replace(/<[^>]+>/g, '').replace(/\n+/g, ' ').replace(/\s+/g, ' ').slice(0, maxLen).trim();
        const link = (item[linkF] || '').toString();
        if (!snippet && !title) continue;
        let text = title ? `【${title}】` : '';
        text += snippet;
        if (link) text += `\n🔗 ${link}`;
        if (text) results.push(text);
        if (results.length >= limit) break;
      }
      return results.length ? results.join('\n') : null;
    } catch (e) {
      if (e.name !== 'AbortError') log('自定义搜索失败:', keyword, e);
      return null;
    }
  }
  async function husouSearchAll(keywords, s) {
    const ctrl = new AbortController();
    const tid = setTimeout(() => ctrl.abort(), s.searchTimeout || 20000);
    try {
      const tasks = [];
      for (const kw of keywords) {
        if (s.enableWikipedia) tasks.push({ kw, promise: husouSearchWiki(kw, ctrl.signal, s) });
        if (s.enableMoegirl) tasks.push({ kw, promise: husouSearchMoegirl(kw, ctrl.signal, s) });
        if (s.enableCustomSearch) tasks.push({ kw, promise: husouSearchCustom(kw, ctrl.signal, s) });
      }
      const results = await Promise.allSettled(tasks.map(t => t.promise));
      const map = new Map();
      for (let i = 0; i < tasks.length; i++) {
        const r = results[i];
        if (r.status === 'fulfilled' && r.value) {
          const old = map.get(tasks[i].kw) || '';
          map.set(tasks[i].kw, old ? `${old}\n${r.value}` : r.value);
        }
      }
      return map;
    } finally { clearTimeout(tid); }
  }
  async function husouSearchWiki(keyword, signal, s) {
    try {
      const limit = s.searchResultsCount || 10, maxLen = s.maxExtractLength || 40000;
      let term = keyword;
      try { const sr = await fetch(`https://zh.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(keyword)}&limit=1&format=json&origin=*`, { signal }); if (sr.ok) { const sd = await sr.json(); if (Array.isArray(sd[1]) && sd[1].length > 0 && sd[1][0] !== keyword) term = sd[1][0]; } } catch { }
      const sResp = await fetch(`https://zh.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(term)}&format=json&origin=*&srlimit=${limit}`, { signal });
      if (!sResp.ok) return null;
      const sData = await sResp.json();
      const pages = sData?.query?.search;
      if (!pages?.length) return null;
      const pids = pages.map(p => p.pageid);
      const eResp = await fetch(`https://zh.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&pageids=${pids.join('|')}&format=json&origin=*`, { signal });
      if (!eResp.ok) return null;
      const eData = await eResp.json();
      const extracts = [];
      for (const pid of pids) { const page = eData?.query?.pages?.[pid]; if (page?.extract) { const clean = page.extract.replace(/\n+/g, ' ').replace(/\s+/g, ' ').slice(0, maxLen).trim(); if (clean) extracts.push(`【${page.title}】${clean}`); } }
      return extracts.length ? extracts.join('\n') : null;
    } catch (e) { if (e.name !== 'AbortError') log('Wiki失败:', keyword); return null; }
  }
  async function husouSearchMoegirl(keyword, signal, s) {
    try {
      const limit = s.searchResultsCount || 10, maxLen = s.maxExtractLength || 40000;
      const resp = await fetch(`https://zh.moegirl.org.cn/api.php?action=query&list=search&srsearch=${encodeURIComponent(keyword)}&format=json&origin=*&srlimit=${limit}`, { signal });
      if (!resp.ok) return null;
      const data = await resp.json();
      const pages = data?.query?.search;
      if (!pages?.length) return null;
      const results = pages.map(p => { const snippet = String(p.snippet || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').slice(0, maxLen).trim(); return `【萌娘百科：${p.title}】${snippet}`; }).filter(Boolean);
      return results.length ? results.join('\n') : null;
    } catch (e) { if (e.name !== 'AbortError') log('萌百失败:', keyword); return null; }
  }
  function husouGetFullContext(mid) {
    const parts = [];
    try { const ctx = SillyTavern?.getContext?.(); const char = ctx?.characters?.[ctx?.characterId]; if (char) { parts.push(`【角色名】${char.name || ''}`); if (char.description?.trim()) parts.push(`【角色描述】${char.description}`); if (char.personality?.trim()) parts.push(`【性格】${char.personality}`); if (char.scenario?.trim()) parts.push(`【场景】${char.scenario}`); } } catch (e) { }
    try { const glmi = getFn('getLastMessageId'), gcm = getFn('getChatMessages'); if (glmi && gcm) { const lid = mid ?? glmi(); const sid = Math.max(0, lid - 15); const ms = gcm(`${sid}-${lid}`); parts.push(`【聊天记录】\n${ms.filter(m => !m.is_hidden).map(m => `[${m.role === 'user' ? '用户' : (m.name || m.role)}] ${(m.message || '').slice(0, 300)}`).join('\n')}`); } } catch (e) { }
    return parts.join('\n\n');
  }
  async function husouGenerateTask({ system, user }, s) {
    const gr = getFn('generateRaw');
    if (typeof gr !== 'function') throw new Error('无generateRaw');
    const r = await gr({ user_input: user, should_silence: true, should_stream: false, max_chat_history: 0, ordered_prompts: [{ role: 'system', content: system }, 'user_input'] });
    return typeof r === 'string' ? r : r?.content || '';
  }
  async function husouAnalyzeContext(ctx, s) {
    if (!ctx || ctx.length < 20) return [];
    const maxKw = s.maxKeywords || 50;
    let existing = '';
    if (s.smartSkip) try { existing = husouGetExistingInjection(); if (existing.length > 3000) existing = existing.slice(0, 3000) + '...'; } catch { }
    const system = `你是专有名词提取助手。请仔细阅读以下上下文，理解当前对话中涉及的角色、作品、世界观。上下文：${ctx}`;
    const user = `以下是你之前已经搜索并注入过的内容：\n${s.smartSkip ? (existing || '（暂无已搜索内容）') : '（智能跳过已关闭）'}\n\n请根据上下文${s.smartSkip ? '和已有搜索内容' : ''}，提取还需要搜索的专有名词。\n\n⚠️核心规则：按递进层级提取关键词。先提取作品名本身，再提取"作品名+角色名/物品名/组织名"，最后提取"作品名+角色名+子项目"。\n\n规则：\n1. 如果上下文有作品名（如"原神"），第一个关键词必须是作品名本身，不要跳过作品名\n2. 然后提取"作品名+角色名"（如"原神 可莉"、"原神 琴"）\n3. 如果角色有特定技能、装备、称号，再提取"作品名+角色名+项目"（如"原神 可莉 蹦蹦炸弹"、"原神 西风骑士团"）\n4. 禁止单独搜一个没有作品前缀的普通名词（如"琴"、"骑士团"）\n5. 层级关系：先宽后窄，先搜大的再搜小的\n6. ${s.smartSkip ? '如果已有搜索内容中已经出现了某个名词，且上下文没有提到该名词的新的、不同的信息需求，直接跳过不要重复提取。同一个角色/作品只提取一次，不要因为已有内容写得不完整就反复提取' : '智能跳过已关闭，不要跳过任何名词'}\n7. 忽略日常词汇\n8. 最多 ${maxKw} 个\n\n返回纯 JSON 数组，示例：["原神", "原神 可莉", "原神 琴", "原神 阿贝多", "原神 嘟嘟可", "原神 西风骑士团", "原神 可莉 蹦蹦炸弹"]。没有就返回 []。`;
    try {
      const t = await husouGenerateTask({ system, user }, s);
      const m = t.match(/\[[\s\S]*?\]/);
      if (!m) return [];
      const arr = JSON.parse(m[0]);
      return Array.isArray(arr) ? arr.filter(k => typeof k === 'string' && k.trim()).map(k => k.trim()).slice(0, maxKw) : [];
    } catch { return []; }
  }
  function husouGetExistingInjection() {
    try { const ctx = SillyTavern?.getContext?.(); const char = ctx?.characters?.[ctx?.characterId]; if (!char) return ''; const p = char.personality || ''; const blocks = []; const start = '【🦊狐搜外部搜索参考'; const end = '【外部搜索参考结束】'; let sf = 0; while (true) { const s = p.indexOf(start, sf); if (s === -1) break; const e = p.indexOf(end, s); if (e === -1) break; blocks.push(p.slice(s, e + end.length)); sf = e + end.length; } return blocks.join('\n'); } catch { return ''; }
  }
  async function husouFilterResults(results, s) {
    if (!results.size) return new Map();
    let raw = ''; for (const [k, v] of results) raw += `\n===「${k}」===\n${v}\n`;
    let existing = ''; try { existing = husouGetExistingInjection(); if (existing.length > 5000) existing = existing.slice(0, 5000) + '...'; } catch { }
    const system = `你是信息整理助手。以下是本次新搜索到的原始结果，以及之前已经整理过的知识。请对比两者，只从新结果中提取之前没有的内容，补充到已有知识中。`;
    const user = `【本次新搜索的原始结果】\n${raw}\n\n【之前已整理的知识】\n${existing || '（暂无）'}\n\n严格规则：\n1. 与上下文中的角色、世界观、设定完全无关的内容直接丢弃\n2. 如果某个信息在"之前已整理的知识"中已经存在（哪怕只是一部分），不要再重复输出相同的内容。只输出之前完全没有出现过的新信息\n3. 只输出本次新搜索中发现的、之前没有的新内容\n4. 如果没有任何新内容，严格输出（无可用信息）\n5. 多条来源合并去重，用自己的话概括\n6. 每条说明不超过4000字\n7. 不要解释判断过程\n\n只允许输出以下两种格式之一：\n如果有新信息，输出：\n【过滤后的知识库】\n【关于「名称」的说明】\n新增的核心信息...\n如果没有任何新信息，必须严格输出：\n【过滤后的知识库】\n（无可用信息）`;
    try {
      const t = await husouGenerateTask({ system, user }, s);
      const n = String(t || '').trim();
      const m = n.match(/【过滤后的知识库】([\s\S]*?)(?:$|---)/);
      if (!m) return new Map();
      const c = m[1].trim();
      if (!c || /无可用信息/i.test(c)) return new Map();
      const map = new Map();
      const sections = c.split(/【关于「(.+?)」的说明】/);
      for (let i = 1; i < sections.length; i += 2) {
        const name = sections[i]?.trim();
        const body = sections[i + 1]?.trim();
        if (!name || !body || /无可用信息/i.test(body)) continue;
        map.set(name, body);
      }
      return map;
    } catch { return new Map(); }
  }
  async function husouSaveToChar(filtered) {
    if (!filtered?.size) return;
    const ts = new Date().toISOString().split('T')[0];
    try { const ctx = SillyTavern?.getContext?.(); const char = ctx?.characters?.[ctx?.characterId]; if (!char) return; const entries = [...filtered].map(([n, c]) => `【关于「${n}」的说明】\n${c}`); const block = `\n\n【🦊狐搜外部搜索参考 - ${ts}】\n${entries.join('\n\n')}\n【外部搜索参考结束】`; let newP = char.personality || ''; newP = (newP ? newP + '\n' : '') + block; char.personality = newP; const ee = getFn('eventEmit'); if (ee) await ee(topWindow?.tavern_events?.CHARACTER_EDITED, { detail: { id: ctx.characterId, character: char } }); } catch (e) { log('保存失败', e); }
  }
  async function husouManualSearch(messageId) {
    if (state.husouIsRunning) { toast('搜索进行中，请稍候', 'warning'); return; }
    const s = state.husouSettings;
    if (!s.enableWikipedia && !s.enableMoegirl && !s.enableCustomSearch) { toast('请至少启用一个搜索来源', 'warning'); return; }
    state.husouIsRunning = true;
    let searchToast = null; try { const t = topWindow?.toastr || window.toastr; if (t?.info) { t.info('🦊搜索中🔎……', '🦊玄狐', { timeOut: 0, extendedTimeOut: 0 }); searchToast = topDoc.querySelector('.toast-info') || topDoc.querySelector('#toast-container .toast-info'); } } catch { }
    try {
      const ctx = husouGetFullContext(messageId);
      const keywords = await husouAnalyzeContext(ctx, s);
      if (!keywords.length) { toast('狐搜：无关键词', 'info'); return; }
      const raw = await husouSearchAll(keywords, s);
      if (!raw.size) { toast('狐搜：搜索无结果', 'warning'); return; }
      log(`原始结果 ${raw.size} 个`);
      const filtered = s.aiFilter ? await husouFilterResults(raw, s) : raw;
      if (!filtered?.size) { toast('狐搜：过滤无结果', 'warning'); return; }
      state.husouPendingInject = filtered;
      if (s.saveToPersonality) await husouSaveToChar(filtered);
      refreshAnyHusouPanel();
      toast(`狐搜完成：${filtered.size} 条`, 'success');
    } catch (e) { toast(`失败：${e.message}`, 'error'); }
    finally { try { if (searchToast?.remove) searchToast.remove(); } catch { } try { const t = topWindow?.toastr || window.toastr; if (t?.clear) t.clear(); } catch { } state.husouIsRunning = false; }
  }
  async function husouClearInjection() {
    try { const ctx = SillyTavern?.getContext?.(); const char = ctx?.characters?.[ctx?.characterId]; if (!char) { toast('无角色卡', 'error'); return; } let cleaned = char.personality || ''; const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); cleaned = cleaned.replace(new RegExp(`\\n*${esc('【🦊狐搜外部搜索参考')}[\\s\\S]*?${esc('【外部搜索参考结束】')}\\n*`, 'g'), ''); cleaned = cleaned.replace(new RegExp(`\\n*${esc('【🔍 外部搜索参考')}[\\s\\S]*?${esc('【外部搜索参考结束】')}\\n*`, 'g'), ''); if (cleaned.trim() === (char.personality || '').trim()) { toast('🧹 无搜索注入', 'info'); return; } char.personality = cleaned.trim(); const ee = getFn('eventEmit'); if (ee) await ee(topWindow?.tavern_events?.CHARACTER_EDITED, { detail: { id: ctx.characterId, character: char } }); state.husouPendingInject = null; toast('🧹 已清除', 'success'); refreshAnyHusouPanel(); } catch (e) { toast('清除失败', 'error'); }
  }
  async function husouInjectCustom(text) {
    if (!text?.trim()) { toast('内容为空', 'warning'); return; }
    const ts = new Date().toISOString().split('T')[0];
    const block = `\n\n【🦊狐搜外部搜索参考 - ${ts} 手动编辑】\n${text.trim()}\n【外部搜索参考结束】`;
    try { const ctx = SillyTavern?.getContext?.(); const char = ctx?.characters?.[ctx?.characterId]; if (!char) { toast('无角色卡', 'error'); return; } let newP = char.personality || ''; if (newP.includes('【🦊狐搜外部搜索参考')) newP = newP.split('【🦊狐搜外部搜索参考')[0].trim() + block; else if (newP.includes('【🔍 外部搜索参考')) newP = newP.split('【🔍 外部搜索参考')[0].trim() + block; else newP = (newP ? newP + '\n' : '') + block; char.personality = newP; const ee = getFn('eventEmit'); if (ee) await ee(topWindow?.tavern_events?.CHARACTER_EDITED, { detail: { id: ctx.characterId, character: char } }); state.husouPendingInject = new Map([['手动注入', text.trim()]]); toast('✅ 已注入', 'success'); refreshAnyHusouPanel(); } catch (e) { toast('注入失败', 'error'); }
  }
  function getHusouModelOptionsHtml(selected) {
    if (!state.husouRuntimeModels.length) return `<option value="">暂无模型列表</option>`;
    return [`<option value="">（从列表选择）</option>`, ...state.husouRuntimeModels.map(m => `<option value="${escapeHtml(m)}" ${m === selected ? 'selected' : ''}>${escapeHtml(m)}</option>`)].join('');
  }
  function getHusouPresetOptionsHtml(selected) {
    try { const fn = getFn('getPresetNames'); if (typeof fn !== 'function') return `<option value="">无可用预设</option>`; const names = fn().filter(x => x !== 'in_use').sort((a, b) => a.localeCompare(b, 'zh-Hans-CN')); if (!names.length) return `<option value="">无可用预设</option>`; return names.map(n => `<option value="${escapeHtml(n)}" ${n === selected ? 'selected' : ''}>${escapeHtml(n)}</option>`).join(''); } catch { return `<option value="">无可用预设</option>`; }
  }
  function refreshHusouInjectionManager(panel) {
    const ta = panel.querySelector('#injection_manager_textarea');
    if (!ta) return;
    try { const ctx = SillyTavern?.getContext?.(); const char = ctx?.characters?.[ctx?.characterId]; ta.value = char?.personality || ''; } catch (e) { ta.value = ''; }
    const st = panel.querySelector('#injection_manager_status');
    if (st) st.textContent = ta.value ? `已加载 ${ta.value.length} 字符` : '暂无搜索注入内容';
  }
  function openHusouPanel() {
    const ex = topDoc.getElementById('ss-husou-panel');
    if (ex) { ex.previousElementSibling?.remove(); ex.remove(); return; }
    if (!state.husouSettings) state.husouSettings = loadHusouSettings();
    const s = state.husouSettings;
    const overlay = topDoc.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:1000002;';
    overlay.onclick = () => { overlay.remove(); topDoc.getElementById('ss-husou-panel')?.remove(); };
    const panel = topDoc.createElement('div');
    panel.id = 'ss-husou-panel';
    panel.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:750px;max-height:85vh;overflow-y:auto;background:rgba(22,18,20,0.98);border:1px solid rgba(232,120,74,0.3);border-radius:16px;padding:24px;z-index:1000003;color:#e8ddd4;font-size:13px;box-shadow:0 20px 60px rgba(0,0,0,0.7);';
    panel.innerHTML = getHusouPanelHtml(s);
    topDoc.body.appendChild(overlay);
    topDoc.body.appendChild(panel);
    topDoc.getElementById('ss-husou-close').onclick = () => { overlay.remove(); panel.remove(); };
    bindHusouPanelEvents(panel);
    setTimeout(() => refreshHusouInjectionManager(panel), 200);
  }
  function getHusouPanelHtml(settings) {
    const isCustomApi = settings.analysisApi === 'custom';
    const isOtherPreset = settings.searchPresetMode === 'other';
    const isCustomSearch = settings.enableCustomSearch;
    return `
<div style="display:flex;flex-direction:column;gap:12px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;"><span style="font-weight:600;font-size:15px;">🦊 狐搜~</span><span style="cursor:pointer;font-size:16px;color:#706058;" id="ss-husou-close">✕</span></div>
<div class="husou_keyword_panel" id="husou_keyword_panel" style="background:rgba(232,120,74,0.05);border:1px solid rgba(232,120,74,0.15);border-radius:10px;padding:10px 12px;display:none;">
<div style="display:flex;justify-content:space-between;align-items:center;"><span style="color:#f0a070;font-weight:600;">🔑 本次抓取关键词</span><span id="husou_keyword_count" style="color:#706058;font-size:0.85em;"></span></div>
<div id="husou_keyword_list" style="color:#a09088;margin-top:4px;font-size:0.9em;word-break:break-all;"></div></div>
<div style="color:#706058;font-size:11px;">搜索流程：user发送消息 → AI提取关键词 → 搜索 → AI过滤 → 保存到char personality → 注入prompt</div>

<div style="background:rgba(232,120,74,0.025);border:1px solid rgba(232,120,74,0.1);border-radius:10px;padding:12px 14px;">
<div style="font-weight:600;margin-bottom:6px;color:#e8ddd4;">🔲 总开关</div>
<label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;color:#a09088;"><input id="search_enable_auto" type="checkbox" ${settings.enableAutoSearch ? 'checked' : ''}> 🦊启用自动搜索</label></div>

<div style="background:rgba(232,120,74,0.025);border:1px solid rgba(232,120,74,0.1);border-radius:10px;padding:12px 14px;">
<div style="font-weight:600;margin-bottom:8px;color:#e8ddd4;">📐 搜索参数</div>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px 16px;">
<div><label for="search_max_keywords" style="font-size:11px;color:#706058;">最多提取关键词数</label><input id="search_max_keywords" type="number" min="1" max="999" step="1" value="${settings.maxKeywords || 50}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_timeout" style="font-size:11px;color:#706058;">搜索超时（毫秒）</label><input id="search_timeout" type="number" min="5000" max="60000" step="1000" value="${settings.searchTimeout || 20000}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_extract_length" style="font-size:11px;color:#706058;">提取最大长度</label><input id="search_extract_length" type="number" min="1000" max="1000000" step="1000" value="${settings.maxExtractLength || 40000}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_results_count" style="font-size:11px;color:#706058;">每个关键词搜索结果数</label><input id="search_results_count" type="number" min="1" max="999" step="1" value="${settings.searchResultsCount || 10}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div></div>
<div style="display:flex;gap:16px;margin-top:8px;flex-wrap:wrap;">
<label style="font-size:12px;color:#a09088;cursor:pointer;"><input id="search_save_personality" type="checkbox" ${settings.saveToPersonality ? 'checked' : ''}> 保存结果到char personality</label>
<label style="font-size:12px;color:#a09088;cursor:pointer;"><input id="search_inject_prompt" type="checkbox" ${settings.injectCurrentPrompt ? 'checked' : ''}> 注入本次请求prompt</label></div></div>

<div style="background:rgba(232,120,74,0.025);border:1px solid rgba(232,120,74,0.1);border-radius:10px;padding:12px 14px;">
<div style="font-weight:600;margin-bottom:8px;color:#e8ddd4;">🔍 搜索来源</div>
<div style="display:flex;gap:16px;flex-wrap:wrap;">
<label style="font-size:12px;color:#a09088;cursor:pointer;"><input id="search_enable_wikipedia" type="checkbox" ${settings.enableWikipedia ? 'checked' : ''}> 维基百科</label>
<label style="font-size:12px;color:#a09088;cursor:pointer;"><input id="search_enable_moegirl" type="checkbox" ${settings.enableMoegirl ? 'checked' : ''}> 萌娘百科</label>
<label style="font-size:12px;color:#a09088;cursor:pointer;"><input id="search_enable_custom" type="checkbox" ${settings.enableCustomSearch ? 'checked' : ''}> 启用自定义来源API</label>
<label style="font-size:12px;color:#a09088;cursor:pointer;"><input id="search_enable_jina" type="checkbox" ${settings.enableJinaFetch ? 'checked' : ''}> 启用Jina网页全文抓取</label>
<label style="font-size:12px;color:#a09088;cursor:pointer;"><input id="search_smart_skip" type="checkbox" ${settings.smartSkip ? 'checked' : ''}> 智能跳过已知内容</label>
<label style="font-size:12px;color:#a09088;cursor:pointer;"><input id="search_ai_filter" type="checkbox" ${settings.aiFilter ? 'checked' : ''}> 启用AI过滤搜索结果</label></div>
<div id="custom_search_api_section" style="${isCustomSearch ? '' : 'display:none'};margin-top:10px;padding-top:10px;border-top:1px solid rgba(232,120,74,0.1);">
<div style="font-weight:600;margin-bottom:6px;color:#e8ddd4;">🔧 自定义搜索 API 配置</div>
<div style="color:#706058;font-size:10px;margin-bottom:8px;">支持任何兼容的搜索 API。URL 中用 <code>{keyword}</code> 作为搜索词占位符；可选用 <code>{language}</code> 作为语言占位符。</div>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px 16px;">
<div><label for="search_api_url" style="font-size:11px;color:#706058;">API 地址</label><input id="search_api_url" type="text" placeholder="https://opnxng.com/search?q={keyword}&format=json" value="${escapeHtml(settings.searchApiUrl || '')}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_api_method" style="font-size:11px;color:#706058;">请求方式</label><select id="search_api_method" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"><option value="GET" ${settings.searchApiMethod === 'GET' ? 'selected' : ''}>GET</option><option value="POST" ${settings.searchApiMethod === 'POST' ? 'selected' : ''}>POST</option></select></div>
<div><label for="search_api_key" style="font-size:11px;color:#706058;">API Key（可选）</label><input id="search_api_key" type="password" value="${escapeHtml(settings.searchApiKey || '')}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_api_key_header_name" style="font-size:11px;color:#706058;">Key 放置 Header 名</label><input id="search_api_key_header_name" type="text" placeholder="Authorization" value="${escapeHtml(settings.searchApiKeyHeaderName || '')}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_api_key_header_template" style="font-size:11px;color:#706058;">Header 值模板</label><input id="search_api_key_header_template" type="text" placeholder="Bearer {key}" value="${escapeHtml(settings.searchApiKeyHeaderTemplate || '')}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_api_query_param" style="font-size:11px;color:#706058;">Key 放在 Query 参数名</label><input id="search_api_query_param" type="text" placeholder="api_key" value="${escapeHtml(settings.searchApiQueryParam || '')}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_api_body_template" style="font-size:11px;color:#706058;">POST Body 模板</label><textarea id="search_api_body_template" rows="2" placeholder='{"query":"{keyword}","language":"{language}"}' style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;resize:vertical;">${escapeHtml(settings.searchApiBodyTemplate || '')}</textarea></div>
<div><label for="search_api_extra_params" style="font-size:11px;color:#706058;">额外 Query 参数</label><input id="search_api_extra_params" type="text" placeholder="&language={language}&limit=5" value="${escapeHtml(settings.searchApiExtraParams || '')}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_api_language" style="font-size:11px;color:#706058;">搜索语言</label><select id="search_api_language" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"><option value="zh-CN" ${settings.searchApiLanguage === 'zh-CN' ? 'selected' : ''}>中文</option><option value="en" ${settings.searchApiLanguage === 'en' ? 'selected' : ''}>英语</option><option value="ja" ${settings.searchApiLanguage === 'ja' ? 'selected' : ''}>日语</option><option value="auto" ${settings.searchApiLanguage === 'auto' ? 'selected' : ''}>自动（多语言）</option></select></div></div>
<div style="font-weight:600;margin:10px 0 6px;color:#e8ddd4;">结果解析</div>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px 16px;">
<div><label for="search_api_result_path" style="font-size:11px;color:#706058;">结果列表 JSON 路径</label><input id="search_api_result_path" type="text" placeholder="results" value="${escapeHtml(settings.searchApiResultPath || '')}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_api_title_field" style="font-size:11px;color:#706058;">标题字段</label><input id="search_api_title_field" type="text" placeholder="title" value="${escapeHtml(settings.searchApiTitleField || '')}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_api_snippet_field" style="font-size:11px;color:#706058;">摘要字段</label><input id="search_api_snippet_field" type="text" placeholder="content" value="${escapeHtml(settings.searchApiSnippetField || '')}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_api_link_field" style="font-size:11px;color:#706058;">链接字段</label><input id="search_api_link_field" type="text" placeholder="url" value="${escapeHtml(settings.searchApiLinkField || '')}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div></div>
<div style="font-size:10px;color:#706058;margin-top:6px;"><b>快速预设：</b>
<a href="#" onclick="document.getElementById('search_api_url').value='https://opnxng.com/search?q={keyword}&format=json';document.getElementById('search_api_method').value='GET';document.getElementById('search_api_result_path').value='results';document.getElementById('search_api_title_field').value='title';document.getElementById('search_api_snippet_field').value='content';document.getElementById('search_api_link_field').value='url';return false;" style="color:#f0a070;">SearXNG</a> |
<a href="#" onclick="document.getElementById('search_api_url').value='https://api.duckduckgo.com/?q={keyword}&format=json&no_html=1';document.getElementById('search_api_method').value='GET';document.getElementById('search_api_result_path').value='RelatedTopics';document.getElementById('search_api_title_field').value='Text';document.getElementById('search_api_snippet_field').value='Text';document.getElementById('search_api_link_field').value='FirstURL';return false;" style="color:#f0a070;">DuckDuckGo</a> |
<a href="#" onclick="document.getElementById('search_api_url').value='https://google.serper.dev/search';document.getElementById('search_api_method').value='POST';document.getElementById('search_api_key_header_name').value='X-API-KEY';document.getElementById('search_api_key_header_template').value='{key}';document.getElementById('search_api_body_template').value='{"q":"{keyword}","gl":"cn","hl":"zh-cn"}';document.getElementById('search_api_result_path').value='organic';document.getElementById('search_api_title_field').value='title';document.getElementById('search_api_snippet_field').value='snippet';document.getElementById('search_api_link_field').value='link';return false;" style="color:#f0a070;">Serper(Google)</a></div></div></div>

<div style="background:rgba(232,120,74,0.025);border:1px solid rgba(232,120,74,0.1);border-radius:10px;padding:12px 14px;">
<div style="font-weight:600;margin-bottom:8px;color:#e8ddd4;">📡 请求 API</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px 16px;">
<div><label for="search_analysis_api" style="font-size:11px;color:#706058;">分析 API</label><select id="search_analysis_api" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"><option value="current" ${settings.analysisApi === 'current' ? 'selected' : ''}>使用酒馆当前 API</option><option value="custom" ${settings.analysisApi === 'custom' ? 'selected' : ''}>使用自定义 OpenAI 兼容 API</option></select></div></div>
<div id="custom_api_section" style="display:${isCustomApi ? 'grid' : 'none'};margin-top:10px;grid-template-columns:repeat(2,1fr);gap:8px 16px;">
<div><label for="search_custom_api_url" style="font-size:11px;color:#706058;">API 地址</label><input id="search_custom_api_url" type="text" value="${escapeHtml(settings.customApiUrl || '')}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_custom_api_key" style="font-size:11px;color:#706058;">API 密钥</label><input id="search_custom_api_key" type="password" value="${escapeHtml(settings.customApiKey || '')}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_custom_model" style="font-size:11px;color:#706058;">模型名称</label><input id="search_custom_model" type="text" value="${escapeHtml(settings.customModel || '')}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div style="display:flex;gap:8px;align-items:center;"><select id="search_custom_model_select" ${state.husouRuntimeModels.length ? '' : 'disabled'} style="flex:1;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;">${getHusouModelOptionsHtml(settings.customModel)}</select><input id="search_fetch_models_btn" type="button" value="${state.husouRuntimeLoading ? '获取中…' : '获取模型'}" ${state.husouRuntimeLoading ? 'disabled' : ''} style="padding:5px 12px;border:1px solid rgba(232,120,74,0.2);border-radius:6px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;"></div>
<details style="grid-column:1/-1;margin-top:6px;"><summary style="cursor:pointer;color:#a09088;font-size:12px;">高级参数</summary>
<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px 16px;margin-top:8px;">
<div><label for="search_custom_max_tokens" style="font-size:11px;color:#706058;">最大token</label><input id="search_custom_max_tokens" type="number" min="0" step="128" value="${escapeHtml(settings.customMaxTokens)}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_custom_temperature" style="font-size:11px;color:#706058;">温度</label><input id="search_custom_temperature" type="number" min="0" max="2" step="0.01" value="${escapeHtml(settings.customTemperature)}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_custom_frequency_penalty" style="font-size:11px;color:#706058;">频率惩罚</label><input id="search_custom_frequency_penalty" type="number" min="-2" max="2" step="0.01" value="${escapeHtml(settings.customFrequencyPenalty)}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_custom_presence_penalty" style="font-size:11px;color:#706058;">存在惩罚</label><input id="search_custom_presence_penalty" type="number" min="-2" max="2" step="0.01" value="${escapeHtml(settings.customPresencePenalty)}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_custom_top_p" style="font-size:11px;color:#706058;">Top P</label><input id="search_custom_top_p" type="number" min="0" max="1" step="0.01" value="${escapeHtml(settings.customTopP)}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div>
<div><label for="search_custom_top_k" style="font-size:11px;color:#706058;">Top K</label><input id="search_custom_top_k" type="number" min="0" max="500" step="1" value="${escapeHtml(settings.customTopK)}" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"></div></div></details></div></div>

<div style="background:rgba(232,120,74,0.025);border:1px solid rgba(232,120,74,0.1);border-radius:10px;padding:12px 14px;">
<div style="font-weight:600;margin-bottom:8px;color:#e8ddd4;">📋 搜索预设</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px 16px;">
<div><label for="search_preset_mode" style="font-size:11px;color:#706058;">请求内容/破限方案</label><select id="search_preset_mode" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;"><option value="builtin" ${settings.searchPresetMode === 'builtin' ? 'selected' : ''}>内置提示词（推荐）</option><option value="current" ${settings.searchPresetMode === 'current' ? 'selected' : ''}>当前预设</option><option value="other" ${settings.searchPresetMode === 'other' ? 'selected' : ''}>其他预设</option></select></div></div>
<div id="search_preset_section" style="${isOtherPreset ? '' : 'display:none'};margin-top:8px;">
<div><label for="search_preset_name" style="font-size:11px;color:#706058;">目标预设</label><select id="search_preset_name" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;">${getHusouPresetOptionsHtml(settings.searchPresetName)}</select></div>
<div style="color:#706058;font-size:10px;margin-top:4px;">借用目标预设的 API 参数，但不用其角色扮演提示词。</div>
<div style="display:flex;gap:8px;margin-top:6px;"><input id="search_refresh_presets_btn" type="button" value="刷新预设列表" style="padding:5px 12px;border:1px solid rgba(232,120,74,0.2);border-radius:6px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;"><input id="search_test_preset_btn" type="button" value="测试读取预设" style="padding:5px 12px;border:1px solid rgba(232,120,74,0.2);border-radius:6px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;"></div></div>
<div id="search_builtin_hint" style="${settings.searchPresetMode === 'builtin' ? '' : 'display:none'};color:#706058;font-size:11px;margin-top:4px;">使用🦊搜提示词ing……好用！</div></div>

<div style="background:rgba(232,120,74,0.025);border:1px solid rgba(232,120,74,0.1);border-radius:10px;padding:12px 14px;">
<div style="font-weight:600;margin-bottom:8px;color:#e8ddd4;">📝 管理注入内容</div>
<textarea id="injection_manager_textarea" placeholder="暂无搜索到注入内容，🔄请刷新……" style="width:100%;min-height:100px;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.15);border-radius:8px;color:#e8ddd4;padding:8px 10px;font-size:12px;font-family:monospace;resize:vertical;box-sizing:border-box;"></textarea>
<div id="injection_manager_status" style="color:#706058;font-size:10px;margin-top:4px;"></div>
<div style="display:flex;gap:8px;margin-top:8px;"><input id="injection_refresh_btn" type="button" value="🔄 刷新" style="flex:1;padding:8px;border:1px solid rgba(232,120,74,0.2);border-radius:6px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;"><input id="injection_save_btn" type="button" value="💾 保存修改" style="flex:1;padding:8px;border:1px solid rgba(232,120,74,0.2);border-radius:6px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;"><input id="injection_clear_btn" type="button" value="🧹 清除" style="flex:1;padding:8px;border:1px solid rgba(139,0,0,0.3);border-radius:6px;background:rgba(139,0,0,0.15);color:#d08080;cursor:pointer;font-size:12px;"></div></div>

<div style="display:flex;gap:8px;flex-wrap:wrap;">
<input id="search_save_btn" type="button" value="💾 保存设置" style="flex:1;padding:10px;border:1px solid rgba(232,120,74,0.3);border-radius:8px;background:rgba(232,120,74,0.1);color:#f0a070;cursor:pointer;font-size:12px;">
<input id="search_manual_btn" type="button" value="🔍 手动搜索（追加）" style="flex:1;padding:10px;border:1px solid rgba(232,120,74,0.2);border-radius:8px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;">
<input id="search_test_btn" type="button" value="测试面板" style="flex:1;padding:10px;border:1px solid rgba(232,120,74,0.2);border-radius:8px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;">
<input id="search_reset_btn" type="button" value="⚠️恢复默认" style="flex:1;padding:10px;border:1px solid rgba(139,0,0,0.3);border-radius:8px;background:rgba(139,0,0,0.15);color:#d08080;cursor:pointer;font-size:12px;"></div>
<div id="search_engine_status" style="color:#706058;font-size:10px;margin-top:4px;">当前状态：🦊狐搜 已加载</div></div>`;
  }
  function bindHusouPanelEvents(panel) {
    const g = id => panel.querySelector('#' + id) || topDoc.getElementById(id);
    const enableCustom = g('search_enable_custom');
    const customSection = g('custom_search_api_section');

    if (enableCustom && customSection) {
      enableCustom.addEventListener('change', () => {
        customSection.style.display = enableCustom.checked ? 'block' : 'none';
      });
    }
    const analysisApi = g('search_analysis_api');
    const customApiSection = g('custom_api_section');

    if (analysisApi && customApiSection) {
      analysisApi.addEventListener('change', () => {
        customApiSection.style.display = analysisApi.value === 'custom' ? 'grid' : 'none';
      });
    }
    const modelSel = g('search_custom_model_select'); const modelInp = g('search_custom_model');
    if (modelSel && modelInp) modelSel.addEventListener('change', () => { if (modelSel.value) modelInp.value = modelSel.value; });
    const fetchBtn = g('search_fetch_models_btn');
    if (fetchBtn) fetchBtn.addEventListener('click', async () => { readHusouSettingsFromPanel(panel); await husouFetchModels(); });
    const presetMode = g('search_preset_mode');
    const presetSection = g('search_preset_section');
    const builtinHint = g('search_builtin_hint');

    if (presetMode && presetSection) {
      presetMode.addEventListener('change', () => {
        presetSection.style.display = presetMode.value === 'other' ? 'block' : 'none';
        if (builtinHint) {
          builtinHint.style.display = presetMode.value === 'builtin' ? 'block' : 'none';
        }
      });
    }
    const refreshPresets = g('search_refresh_presets_btn');
    if (refreshPresets) refreshPresets.addEventListener('click', () => { readHusouSettingsFromPanel(panel); const ps = g('search_preset_name'); if (ps) ps.innerHTML = getHusouPresetOptionsHtml(state.husouSettings.searchPresetName); });
    const testPreset = g('search_test_preset_btn');
    if (testPreset) testPreset.addEventListener('click', () => { readHusouSettingsFromPanel(panel); if (!state.husouSettings.searchPresetName) { toast('未选择预设', 'warning'); return; } try { getPreset(state.husouSettings.searchPresetName); toast(`预设读取成功：${state.husouSettings.searchPresetName}`, 'success'); } catch (e) { toast('预设读取失败', 'error'); } });
    const saveBtn = g('search_save_btn');
    if (saveBtn) saveBtn.addEventListener('click', () => { readHusouSettingsFromPanel(panel); toast('已保存', 'success'); });
    const manualBtn = g('search_manual_btn');
    if (manualBtn) manualBtn.addEventListener('click', async () => { readHusouSettingsFromPanel(panel); const lastId = getFn('getLastMessageId')?.(); if (lastId == null) { toast('无法获取楼层', 'error'); return; } state.husouLastHandledId = null; await husouManualSearch(lastId); });
    const testBtn = g('search_test_btn');
    if (testBtn) testBtn.addEventListener('click', () => { toast('面板正常', 'info'); });
    const resetBtn = g('search_reset_btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.husouRuntimeModels = [];
        state.husouSettings = { ...HUSOU_DEFAULTS };
        saveHusouSettings();

        panel.innerHTML = getHusouPanelHtml(state.husouSettings);
        bindHusouPanelEvents(panel);

        requestAnimationFrame(() => {
          enhanceHusouUI?.();
          applyMobilePanelFixNow?.();
        });

        setTimeout(() => {
          refreshHusouInjectionManager(panel);
          applyMobilePanelFixNow?.();
        }, 200);

        toast('已恢复默认', 'success');
      });
    }
    const refreshInj = g('injection_refresh_btn');
    if (refreshInj) refreshInj.addEventListener('click', () => { refreshHusouInjectionManager(panel); toast('已刷新', 'info'); });
    const saveInj = g('injection_save_btn');
    if (saveInj) saveInj.addEventListener('click', async () => { const ta = g('injection_manager_textarea'); if (!ta?.value.trim()) { toast('内容为空', 'warning'); return; } await husouInjectCustom(ta.value); });
    const clearInj = g('injection_clear_btn');
    if (clearInj) clearInj.addEventListener('click', () => husouClearInjection());
  }
  function readHusouSettingsFromPanel(panel) {
    const g = id => panel.querySelector('#' + id) || topDoc.getElementById(id);
    const s = state.husouSettings; if (!s) return;
    s.enableAutoSearch = !!g('search_enable_auto')?.checked; s.enableMoegirl = !!g('search_enable_moegirl')?.checked; s.enableWikipedia = !!g('search_enable_wikipedia')?.checked; s.enableCustomSearch = !!g('search_enable_custom')?.checked; s.enableJinaFetch = !!g('search_enable_jina')?.checked; s.smartSkip = !!g('search_smart_skip')?.checked; s.aiFilter = !!g('search_ai_filter')?.checked; s.saveToPersonality = !!g('search_save_personality')?.checked; s.injectCurrentPrompt = !!g('search_inject_prompt')?.checked; s.analysisApi = g('search_analysis_api')?.value || 'current'; s.customApiUrl = g('search_custom_api_url')?.value?.trim() || ''; s.customApiKey = g('search_custom_api_key')?.value?.trim() || ''; s.customModel = g('search_custom_model')?.value?.trim() || ''; s.customMaxTokens = Number(g('search_custom_max_tokens')?.value || 4096); s.customTemperature = Number(g('search_custom_temperature')?.value || 1); s.customFrequencyPenalty = Number(g('search_custom_frequency_penalty')?.value || 0); s.customPresencePenalty = Number(g('search_custom_presence_penalty')?.value || 0); s.customTopP = Number(g('search_custom_top_p')?.value || 1); s.customTopK = Number(g('search_custom_top_k')?.value || 0); s.searchPresetMode = g('search_preset_mode')?.value || 'builtin'; s.searchPresetName = g('search_preset_name')?.value?.trim() || ''; s.searchApiUrl = g('search_api_url')?.value?.trim() || ''; s.searchApiMethod = g('search_api_method')?.value || 'GET'; s.searchApiKey = g('search_api_key')?.value?.trim() || ''; s.searchApiKeyHeaderName = g('search_api_key_header_name')?.value?.trim() || ''; s.searchApiKeyHeaderTemplate = g('search_api_key_header_template')?.value?.trim() || ''; s.searchApiQueryParam = g('search_api_query_param')?.value?.trim() || ''; s.searchApiBodyTemplate = g('search_api_body_template')?.value?.trim() || ''; s.searchApiResultPath = g('search_api_result_path')?.value?.trim() || ''; s.searchApiTitleField = g('search_api_title_field')?.value?.trim() || ''; s.searchApiSnippetField = g('search_api_snippet_field')?.value?.trim() || ''; s.searchApiLinkField = g('search_api_link_field')?.value?.trim() || ''; s.searchApiLanguage = g('search_api_language')?.value?.trim() || 'zh-CN'; s.searchApiExtraParams = g('search_api_extra_params')?.value?.trim() || ''; s.maxKeywords = Number(g('search_max_keywords')?.value || 50); s.searchTimeout = Number(g('search_timeout')?.value || 20000); s.maxExtractLength = Number(g('search_extract_length')?.value || 40000); s.searchResultsCount = Number(g('search_results_count')?.value || 10); saveHusouSettings();
  }
  async function husouFetchModels() {
    if (state.husouRuntimeLoading) return;
    const s = state.husouSettings; const apiurl = (s.customApiUrl || '').trim().replace(/\/+$/, '');
    if (!apiurl) { toast('请先填写 API 地址', 'warning'); return; }
    state.husouRuntimeLoading = true;
    try { const getModelList = getFn('getModelList'); if (typeof getModelList === 'function') { state.husouRuntimeModels = await getModelList({ apiurl, key: s.customApiKey || '' }); } else { const headers = SillyTavern?.getRequestHeaders?.() || {}; const resp = await fetch('/api/backends/chat-completions/status', { method: 'POST', headers, body: JSON.stringify({ reverse_proxy: apiurl, proxy_password: s.customApiKey || '', chat_completion_source: 'openai' }) }); const json = await resp.json(); state.husouRuntimeModels = (json?.data || []).map(x => String(x?.id ?? '').trim()).filter(Boolean); } state.husouRuntimeModels = [...new Set(state.husouRuntimeModels)].sort(); toast(state.husouRuntimeModels.length ? `已获取 ${state.husouRuntimeModels.length} 个模型` : '模型列表为空', state.husouRuntimeModels.length ? 'success' : 'warning'); } catch (e) { toast(`获取失败：${e.message}`, 'error'); } finally { state.husouRuntimeLoading = false; }
  }

  // ==================== 事件 ====================
  function onGenStart(type, option, dryRun) { if (dryRun || !state.enabled || window.__searchEngineBusy || !isThoughtVisible()) return; state.isGenerating = true; updateBubbleUI(); if (!state.isMini) disableAllBeauty(); else disableAllMini(); setThoughtVisible(false); const tid = setTimeout(async () => { await forceRefresh(getCurrentLastMessageId()); }, CONFIG.HIDE_DELAY); state._timers.hide = tid; }
  function onGenEnd(mid) { if (!state.enabled || window.__searchEngineBusy) return; state.isGenerating = false; updateBubbleUI(); const tid = setTimeout(async () => { setBeautyStyle(state.currentStyle, state.isExpanded); setThoughtVisible(true); await forceRefresh(getCurrentLastMessageId()); }, CONFIG.RESTORE_DELAY); state._timers.restore = tid; onBeatGenEnd(mid); }

  function bindEvents() { unbindEvents(); const h1 = eventOn?.(tavern_events.GENERATION_STARTED, onGenStart); const h2 = eventOn?.(tavern_events.GENERATION_ENDED, onGenEnd); if (h1) state.eventHandles.push(h1); if (h2) state.eventHandles.push(h2); }
  function unbindEvents() { state.eventHandles.forEach(h => h?.stop?.()); state.eventHandles = []; }

  // ==================== UI组件 ====================
  function updateBubbleUI() { const b = topDoc.getElementById('ss-float-bubble'); if (!b) return; b.classList.toggle('enabled', state.enabled); b.classList.toggle('generating', state.isGenerating); }
  function createToggleSwitch(promptId, onChange) { const w = topDoc.createElement('span'); w.style.cssText = 'display:inline-flex;gap:0;border-radius:6px;overflow:hidden;border:1px solid rgba(232,120,74,0.25);flex-shrink:0;'; const onB = topDoc.createElement('span'); onB.textContent = '开'; const offB = topDoc.createElement('span'); offB.textContent = '关';[onB, offB].forEach(b => { b.style.cssText = 'padding:3px 10px;cursor:pointer;font-size:11px;font-weight:600;transition:all 0.15s;'; }); function up() { const e = isPromptEnabledInPreset(promptId); if (e) { onB.style.background = 'rgba(232,120,74,0.25)'; onB.style.color = '#f0a070'; offB.style.background = 'transparent'; offB.style.color = '#555'; } else { onB.style.background = 'transparent'; onB.style.color = '#555'; offB.style.background = 'rgba(232,120,74,0.25)'; offB.style.color = '#f0a070'; } } onB.onclick = async () => { await togglePromptById(promptId, true); up(); if (onChange) onChange(true); }; offB.onclick = async () => { await togglePromptById(promptId, false); up(); if (onChange) onChange(false); }; w.appendChild(onB); w.appendChild(offB); up(); return { wrapper: w, update: up }; }
  function createLeftRightSwitch(lLabel, rLabel, lId, rId, onChange) { const w = topDoc.createElement('span'); w.style.cssText = 'display:inline-flex;gap:0;border-radius:6px;overflow:hidden;border:1px solid rgba(232,120,74,0.25);flex-shrink:0;'; const lB = topDoc.createElement('span'); lB.textContent = lLabel; const rB = topDoc.createElement('span'); rB.textContent = rLabel;[lB, rB].forEach(b => { b.style.cssText = 'padding:4px 12px;cursor:pointer;font-size:11px;font-weight:600;transition:all 0.15s;white-space:nowrap;'; }); function up() { const lOn = isPromptEnabledInPreset(lId); if (lOn) { lB.style.background = 'rgba(232,120,74,0.25)'; lB.style.color = '#f0a070'; rB.style.background = 'transparent'; rB.style.color = '#555'; } else { lB.style.background = 'transparent'; lB.style.color = '#555'; rB.style.background = 'rgba(232,120,74,0.25)'; rB.style.color = '#f0a070'; } } lB.onclick = async () => { await togglePromptById(lId, true); await togglePromptById(rId, false); up(); if (onChange) onChange('left'); }; rB.onclick = async () => { await togglePromptById(lId, false); await togglePromptById(rId, true); up(); if (onChange) onChange('right'); }; w.appendChild(lB); w.appendChild(rB); up(); return { wrapper: w, update: up }; }

  // ==================== 大面板 ====================
  function openDashboard() {
    if (topDoc.getElementById('ss-dashboard')) return;
    const overlay = topDoc.createElement('div'); overlay.id = 'ss-dash-overlay'; overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:999998;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);animation:ss-fadeIn 0.2s ease;'; overlay.onclick = closeDashboard;
    const dash = topDoc.createElement('div'); dash.id = 'ss-dashboard'; dash.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:900px;max-height:85vh;overflow-y:auto;background:rgba(18,15,17,0.97);border:1px solid rgba(232,120,74,0.25);border-radius:20px;padding:24px 28px;z-index:999999;color:#e8ddd4;font-size:13px;box-shadow:0 24px 80px rgba(0,0,0,0.7);display:flex;flex-direction:column;gap:18px;animation:ss-scaleIn 0.25s cubic-bezier(0.34,1.56,0.64,1);';
    function sectionBox() { const d = topDoc.createElement('div'); d.style.cssText = 'background:rgba(232,120,74,0.025);border:1px solid rgba(232,120,74,0.1);border-radius:10px;padding:14px 16px;'; return d; }
    function sectionTitle(t) { const d = topDoc.createElement('div'); d.textContent = t; d.style.cssText = 'font-size:10.5px;text-transform:uppercase;letter-spacing:0.08em;color:#706058;font-weight:600;margin-bottom:2px;'; return d; }
    function row() { const d = topDoc.createElement('div'); d.style.cssText = 'display:flex;align-items:center;gap:10px;'; return d; }
    function label(t, w = '90px') { const s = topDoc.createElement('span'); s.textContent = t; s.style.cssText = `font-size:12px;color:#a09088;width:${w};flex-shrink:0;text-align:right;`; return s; }
    const allUpdates = [];

    // Header
    const header = topDoc.createElement('div'); header.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding-bottom:14px;border-bottom:1px solid rgba(232,120,74,0.15);';
    const titleSpan = topDoc.createElement('span'); titleSpan.style.cssText = 'font-size:15px;font-weight:700;letter-spacing:0.03em;'; titleSpan.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f0a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-4px;margin-right:6px;"><path d="M12 2c-1.5 2-3 4-3 7 0 3 1.5 5 3 7"/><path d="M12 2c1.5 2 3 4 3 7 0 3-1.5 5-3 7"/><circle cx="12" cy="12" r="2" fill="#f0a070" stroke="none"/><path d="M5 8c1 1.5 2 3 3 4"/><path d="M19 8c-1 1.5-2 3-3 4"/></svg>🦊 玄狐中控'; header.appendChild(titleSpan); const closeBtn = topDoc.createElement('span'); closeBtn.textContent = '✕'; closeBtn.style.cssText = 'cursor:pointer;font-size:16px;color:#706058;padding:4px 8px;border-radius:6px;transition:all 0.2s;'; closeBtn.onmouseover = () => { closeBtn.style.background = 'rgba(255,255,255,0.04)'; closeBtn.style.color = '#c0a090'; }; closeBtn.onmouseout = () => { closeBtn.style.background = 'transparent'; closeBtn.style.color = '#706058'; }; closeBtn.onclick = closeDashboard; header.appendChild(closeBtn); dash.appendChild(header);

    // 模块1: 思维链控制
    dash.appendChild(sectionTitle('📡 思维链控制'));
    const thinkBox = sectionBox();
    thinkBox.style.cssText += 'display:flex;flex-direction:column;gap:8px;';
    const statusRow = topDoc.createElement('div'); statusRow.style.cssText = 'text-align:center;';
    const statusChip = topDoc.createElement('span'); statusChip.id = 'ss-dash-status'; statusChip.textContent = buildStatusText(); statusChip.style.cssText = 'font-size:11px;color:#706058;background:rgba(232,120,74,0.06);padding:4px 16px;border-radius:10px;display:inline-block;';
    statusRow.appendChild(statusChip); thinkBox.appendChild(statusRow);
    const thinkGrid = topDoc.createElement('div'); thinkGrid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:8px 24px;';
    function makeControl(labelText, labelWidth, ctrl) { const r = row(); r.style.justifyContent = 'space-between'; const l = topDoc.createElement('span'); l.textContent = labelText; l.style.cssText = `font-size:12px;color:#a09088;width:${labelWidth};flex-shrink:0;`; r.appendChild(l); r.appendChild(ctrl); return r; }
    const streamSw = (() => { const w = topDoc.createElement('span'); w.style.cssText = 'display:inline-flex;gap:0;border-radius:6px;overflow:hidden;border:1px solid rgba(232,120,74,0.25);flex-shrink:0;'; const onB = topDoc.createElement('span'); onB.textContent = '开'; const offB = topDoc.createElement('span'); offB.textContent = '关';[onB, offB].forEach(b => { b.style.cssText = 'padding:3px 10px;cursor:pointer;font-size:11px;font-weight:600;transition:all 0.15s;'; }); const up = () => { const e = state.enabled; if (e) { onB.style.background = 'rgba(232,120,74,0.25)'; onB.style.color = '#f0a070'; offB.style.background = 'transparent'; offB.style.color = '#555'; } else { onB.style.background = 'transparent'; onB.style.color = '#555'; offB.style.background = 'rgba(232,120,74,0.25)'; offB.style.color = '#f0a070'; } }; onB.onclick = async () => { state.enabled = true; localStorage.setItem(CONFIG.ENABLED_KEY, 'true'); bindEvents(); if (!isStreamingEnabled()) await setStreaming(true); updateBubbleUI(); updateStatusChip(); up(); }; offB.onclick = async () => { state.enabled = false; localStorage.setItem(CONFIG.ENABLED_KEY, 'false'); unbindEvents(); state.isGenerating = false; updateBubbleUI(); updateStatusChip(); up(); }; w.appendChild(onB); w.appendChild(offB); up(); return { wrapper: w, update: up }; })();
    thinkGrid.appendChild(makeControl('🌊 平滑流式', '75px', streamSw.wrapper));
    const visSw = (() => { const w = topDoc.createElement('span'); w.style.cssText = 'display:inline-flex;gap:0;border-radius:6px;overflow:hidden;border:1px solid rgba(232,120,74,0.25);flex-shrink:0;'; const onB = topDoc.createElement('span'); onB.textContent = '开'; const offB = topDoc.createElement('span'); offB.textContent = '关';[onB, offB].forEach(b => { b.style.cssText = 'padding:3px 10px;cursor:pointer;font-size:11px;font-weight:600;transition:all 0.15s;'; }); const up = () => { const e = isThoughtVisible(); if (e) { onB.style.background = 'rgba(232,120,74,0.25)'; onB.style.color = '#f0a070'; offB.style.background = 'transparent'; offB.style.color = '#555'; } else { onB.style.background = 'transparent'; onB.style.color = '#555'; offB.style.background = 'rgba(232,120,74,0.25)'; offB.style.color = '#f0a070'; } }; onB.onclick = async () => { setThoughtVisible(true); await forceRefresh(getCurrentLastMessageId()); updateStatusChip(); up(); }; offB.onclick = async () => { setThoughtVisible(false); await forceRefresh(getCurrentLastMessageId()); updateStatusChip(); up(); }; w.appendChild(onB); w.appendChild(offB); up(); return { wrapper: w, update: up }; })();
    thinkGrid.appendChild(makeControl('👁 思维链可见', '75px', visSw.wrapper));
    const sel = topDoc.createElement('select'); sel.style.cssText = 'background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.2);border-radius:6px;color:#e8ddd4;padding:4px 8px;font-size:12px;font-family:inherit;cursor:pointer;';['HUSHE', 'JIANYUE', 'BIAOLI'].forEach(s => { const o = topDoc.createElement('option'); o.value = s; o.textContent = getStyleName(s).replace(/[🦊◈◇]\s*/, ''); o.selected = state.currentStyle === s; sel.appendChild(o); }); sel.onchange = () => selectStyle(sel.value);
    thinkGrid.appendChild(makeControl('🎨 切换样式', '75px', sel));
    const expandSw = (() => { const w = topDoc.createElement('span'); w.style.cssText = 'display:inline-flex;gap:0;border-radius:6px;overflow:hidden;border:1px solid rgba(232,120,74,0.25);flex-shrink:0;'; const onB = topDoc.createElement('span'); onB.textContent = '开'; const offB = topDoc.createElement('span'); offB.textContent = '关';[onB, offB].forEach(b => { b.style.cssText = 'padding:3px 10px;cursor:pointer;font-size:11px;font-weight:600;transition:all 0.15s;'; }); const up = () => { const e = state.isExpanded; if (e) { onB.style.background = 'rgba(232,120,74,0.25)'; onB.style.color = '#f0a070'; offB.style.background = 'transparent'; offB.style.color = '#555'; } else { onB.style.background = 'transparent'; onB.style.color = '#555'; offB.style.background = 'rgba(232,120,74,0.25)'; offB.style.color = '#f0a070'; } }; onB.onclick = async () => { if (state.isMini) return; state.isExpanded = true; localStorage.setItem(CONFIG.EXPAND_KEY, 'true'); setBeautyStyle(state.currentStyle, true); await forceRefresh(getCurrentLastMessageId()); updateStatusChip(); up(); }; offB.onclick = async () => { if (state.isMini) return; state.isExpanded = false; localStorage.setItem(CONFIG.EXPAND_KEY, 'false'); setBeautyStyle(state.currentStyle, false); await forceRefresh(getCurrentLastMessageId()); updateStatusChip(); up(); }; w.appendChild(onB); w.appendChild(offB); up(); return { wrapper: w, update: up }; })();
    thinkGrid.appendChild(makeControl('📖 默认展开', '75px', expandSw.wrapper));
    const miniSw = (() => { const w = topDoc.createElement('span'); w.style.cssText = 'display:inline-flex;gap:0;border-radius:6px;overflow:hidden;border:1px solid rgba(232,120,74,0.25);flex-shrink:0;'; const onB = topDoc.createElement('span'); onB.textContent = '开'; const offB = topDoc.createElement('span'); offB.textContent = '关';[onB, offB].forEach(b => { b.style.cssText = 'padding:3px 10px;cursor:pointer;font-size:11px;font-weight:600;transition:all 0.15s;'; }); const up = () => { const e = state.isMini; if (e) { onB.style.background = 'rgba(232,120,74,0.25)'; onB.style.color = '#f0a070'; offB.style.background = 'transparent'; offB.style.color = '#555'; } else { onB.style.background = 'transparent'; onB.style.color = '#555'; offB.style.background = 'rgba(232,120,74,0.25)'; offB.style.color = '#f0a070'; } }; onB.onclick = async () => { state.isMini = true; localStorage.setItem(CONFIG.MINI_KEY, 'true'); setBeautyStyle(state.currentStyle, state.isExpanded); await forceRefresh(getCurrentLastMessageId()); updateStatusChip(); up(); }; offB.onclick = async () => { state.isMini = false; localStorage.setItem(CONFIG.MINI_KEY, 'false'); setBeautyStyle(state.currentStyle, state.isExpanded); await forceRefresh(getCurrentLastMessageId()); updateStatusChip(); up(); }; w.appendChild(onB); w.appendChild(offB); up(); return { wrapper: w, update: up }; })();
    thinkGrid.appendChild(makeControl('📱 Mini模式', '75px', miniSw.wrapper));
    thinkBox.appendChild(thinkGrid);
    dash.appendChild(thinkBox);

    // 模块2: 快捷开关
    dash.appendChild(sectionTitle('🔧 快捷开关')); const quickBox = sectionBox(); quickBox.style.cssText += 'display:grid;grid-template-columns:repeat(3,1fr);gap:8px 16px;';
    for (const t of CONFIG.QUICK_TOGGLE_IDS) { const r = row(); r.style.justifyContent = 'space-between'; const l = topDoc.createElement('span'); l.textContent = t.name; l.style.cssText = 'font-size:12px;color:#a09088;'; r.appendChild(l); const sw = createToggleSwitch(t.id); allUpdates.push(sw.update); r.appendChild(sw.wrapper); quickBox.appendChild(r); }
    const husouRow = row(); husouRow.style.justifyContent = 'space-between'; const husouLabel = topDoc.createElement('span'); husouLabel.textContent = '🦊狐搜~ 手动搜索🔍'; husouLabel.style.cssText = 'font-size:12px;color:#a09088;'; const husouBtn = topDoc.createElement('button'); husouBtn.textContent = '执行搜索'; husouBtn.style.cssText = 'padding:5px 12px;border:1px solid rgba(232,120,74,0.3);border-radius:6px;background:rgba(232,120,74,0.1);color:#f0a070;cursor:pointer;font-size:12px;font-family:inherit;transition:all 0.2s;'; husouBtn.onmouseover = () => { husouBtn.style.background = 'rgba(232,120,74,0.2)'; }; husouBtn.onmouseout = () => { husouBtn.style.background = 'rgba(232,120,74,0.1)'; }; husouBtn.onclick = async () => { if (!state.husouSettings) state.husouSettings = loadHusouSettings(); const lastId = getFn('getLastMessageId')?.(); if (lastId == null) { toast('无法获取楼层', 'error'); return; } state.husouLastHandledId = null; await husouManualSearch(lastId); refreshAnyHusouPanel(); }; husouRow.appendChild(husouLabel); husouRow.appendChild(husouBtn); quickBox.appendChild(husouRow);
    dash.appendChild(quickBox);

    // 模块3: 上下文管理
    dash.appendChild(sectionTitle('📦 上下文管理')); const ctxBox = sectionBox(); ctxBox.style.cssText += 'display:flex;gap:12px;';
    const clearBtn = topDoc.createElement('button'); clearBtn.textContent = '🧹 清理 Swipe'; clearBtn.style.cssText = 'flex:1;padding:10px;border:1px solid rgba(232,120,74,0.2);border-radius:8px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;font-family:inherit;transition:all 0.2s;'; clearBtn.onmouseover = () => { clearBtn.style.background = 'rgba(232,120,74,0.08)'; clearBtn.style.color = '#e8ddd4'; }; clearBtn.onmouseout = () => { clearBtn.style.background = 'rgba(255,255,255,0.03)'; clearBtn.style.color = '#a09088'; }; clearBtn.onclick = async () => { const n = await clearAllSwipes(); toast(n > 0 ? `🧹 已清理 ${n} 个楼层的多余 swipe` : '✅ 没有需要清理的 swipe', n > 0 ? 'success' : 'info'); }; ctxBox.appendChild(clearBtn);
    const sumBtn = topDoc.createElement('button'); sumBtn.textContent = '📝 全文大总结'; sumBtn.id = 'ss-dash-summary'; sumBtn.style.cssText = 'flex:1;padding:10px;border:1px solid rgba(232,120,74,0.2);border-radius:8px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;font-family:inherit;transition:all 0.2s;'; sumBtn.onmouseover = () => { sumBtn.style.background = 'rgba(232,120,74,0.08)'; sumBtn.style.color = '#e8ddd4'; }; sumBtn.onmouseout = () => { sumBtn.style.background = 'rgba(255,255,255,0.03)'; sumBtn.style.color = '#a09088'; }; sumBtn.onclick = () => runFullSummary(); ctxBox.appendChild(sumBtn); const hideAllBtn = topDoc.createElement('button'); hideAllBtn.textContent = '🙈 一键隐藏'; hideAllBtn.style.cssText = 'flex:1;padding:10px;border:1px solid rgba(232,120,74,0.2);border-radius:8px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;font-family:inherit;transition:all 0.2s;'; hideAllBtn.onmouseover = () => { hideAllBtn.style.background = 'rgba(232,120,74,0.08)'; hideAllBtn.style.color = '#e8ddd4'; }; hideAllBtn.onmouseout = () => { hideAllBtn.style.background = 'rgba(255,255,255,0.03)'; hideAllBtn.style.color = '#a09088'; }; hideAllBtn.onclick = async () => { const glmi = getFn('getLastMessageId'), scm = getFn('setChatMessages'); if (!glmi || !scm) { toast('❌ 缺少 API', 'error'); return; } const lastId = glmi(); if (lastId < 0) { toast('⚠️ 无消息可隐藏', 'warning'); return; } const updates = []; for (let i = 0; i <= lastId; i++)updates.push({ message_id: i, is_hidden: true }); await scm(updates, { refresh: 'affected' }); toast(`🙈 已隐藏 0-${lastId} (共 ${updates.length} 条)`, 'success'); }; ctxBox.appendChild(hideAllBtn); const unhideAllBtn = topDoc.createElement('button'); unhideAllBtn.textContent = '👁 清除隐藏'; unhideAllBtn.style.cssText = 'flex:1;padding:10px;border:1px solid rgba(232,120,74,0.2);border-radius:8px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;font-family:inherit;transition:all 0.2s;'; unhideAllBtn.onmouseover = () => { unhideAllBtn.style.background = 'rgba(232,120,74,0.08)'; unhideAllBtn.style.color = '#e8ddd4'; }; unhideAllBtn.onmouseout = () => { unhideAllBtn.style.background = 'rgba(255,255,255,0.03)'; unhideAllBtn.style.color = '#a09088'; }; unhideAllBtn.onclick = async () => { const glmi = getFn('getLastMessageId'), scm = getFn('setChatMessages'); if (!glmi || !scm) { toast('❌ 缺少 API', 'error'); return; } const lastId = glmi(); if (lastId < 0) { toast('⚠️ 无消息', 'warning'); return; } const updates = []; for (let i = 0; i <= lastId; i++)updates.push({ message_id: i, is_hidden: false }); await scm(updates, { refresh: 'affected' }); toast(`👁 已清除隐藏 0-${lastId} (共 ${updates.length} 条)`, 'success'); }; ctxBox.appendChild(unhideAllBtn); dash.appendChild(ctxBox);

    // 大总结管理面板，默认展开，不再使用 details/summary
    dash.appendChild(sectionTitle('📋 大总结管理'));

    const summaryBox = sectionBox();
    summaryBox.style.cssText += 'display:flex;flex-direction:column;gap:10px;';

    const summaryTip = topDoc.createElement('div');
    summaryTip.textContent = '📋 当前大总结内容';
    summaryTip.style.cssText = 'color:#f0a070;font-size:12px;font-weight:600;margin-bottom:2px;';
    summaryBox.appendChild(summaryTip);

    const summaryTa = topDoc.createElement('textarea');
    summaryTa.id = 'ss-summary-textarea';
    summaryTa.placeholder = '暂无总结内容...';

    // 推荐用 ByRef，兼容 id / identifier
    summaryTa.value = getPromptContentByRef(CONFIG.SUMMARY_ID);

    summaryTa.style.cssText = `
    width:100%;
    min-height:180px;
    background:rgba(255,255,255,0.04);
    border:1px solid rgba(232,120,74,0.2);
    border-radius:8px;
    color:#e8ddd4;
    padding:10px;
    font-size:12px;
    font-family:monospace;
    resize:vertical;
    box-sizing:border-box;
    line-height:1.55;
`;
    summaryBox.appendChild(summaryTa);

    const summaryBtns = topDoc.createElement('div');
    summaryBtns.style.cssText = 'display:flex;gap:8px;';

    const refreshSummaryBtn = topDoc.createElement('button');
    refreshSummaryBtn.textContent = '🔄 刷新';
    refreshSummaryBtn.style.cssText = 'flex:1;padding:8px;border:1px solid rgba(232,120,74,0.2);border-radius:6px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;font-family:inherit;transition:all 0.2s;';
    refreshSummaryBtn.onmouseover = () => {
      refreshSummaryBtn.style.background = 'rgba(232,120,74,0.08)';
      refreshSummaryBtn.style.color = '#e8ddd4';
    };
    refreshSummaryBtn.onmouseout = () => {
      refreshSummaryBtn.style.background = 'rgba(255,255,255,0.03)';
      refreshSummaryBtn.style.color = '#a09088';
    };
    refreshSummaryBtn.onclick = () => {
      const ta = topDoc.getElementById('ss-summary-textarea');
      if (ta) ta.value = getPromptContentByRef(CONFIG.SUMMARY_ID);
      toast('已刷新', 'info');
    };
    summaryBtns.appendChild(refreshSummaryBtn);

    const saveSummaryBtn = topDoc.createElement('button');
    saveSummaryBtn.textContent = '💾 保存修改';
    saveSummaryBtn.style.cssText = 'flex:1;padding:8px;border:1px solid rgba(232,120,74,0.3);border-radius:6px;background:rgba(232,120,74,0.1);color:#f0a070;cursor:pointer;font-size:12px;font-family:inherit;transition:all 0.2s;';
    saveSummaryBtn.onmouseover = () => {
      saveSummaryBtn.style.background = 'rgba(232,120,74,0.2)';
    };
    saveSummaryBtn.onmouseout = () => {
      saveSummaryBtn.style.background = 'rgba(232,120,74,0.1)';
    };
    saveSummaryBtn.onclick = async () => {
      const ta = topDoc.getElementById('ss-summary-textarea');
      if (!ta?.value.trim()) {
        toast('内容为空，未保存', 'warning');
        return;
      }

      await setPromptContentByRef(CONFIG.SUMMARY_ID, ta.value);
      toast('✅ 大总结已保存', 'success');
    };
    summaryBtns.appendChild(saveSummaryBtn);

    const clearSummaryBtn = topDoc.createElement('button');
    clearSummaryBtn.textContent = '🗑️ 清除';
    clearSummaryBtn.style.cssText = 'flex:1;padding:8px;border:1px solid rgba(139,0,0,0.3);border-radius:6px;background:rgba(139,0,0,0.15);color:#d08080;cursor:pointer;font-size:12px;font-family:inherit;transition:all 0.2s;';
    clearSummaryBtn.onmouseover = () => {
      clearSummaryBtn.style.background = 'rgba(139,0,0,0.3)';
    };
    clearSummaryBtn.onmouseout = () => {
      clearSummaryBtn.style.background = 'rgba(139,0,0,0.15)';
    };
    clearSummaryBtn.onclick = async () => {
      const ok = topWindow?.confirm
        ? topWindow.confirm('确定要清除大总结内容吗？')
        : confirm('确定要清除大总结内容吗？');

      if (!ok) return;

      await setPromptContentByRef(CONFIG.SUMMARY_ID, '');

      const ta = topDoc.getElementById('ss-summary-textarea');
      if (ta) ta.value = '';

      toast('🗑️ 已清除大总结', 'success');
    };
    summaryBtns.appendChild(clearSummaryBtn);

    summaryBox.appendChild(summaryBtns);
    dash.appendChild(summaryBox);

    // 模块4: 拷打模式
    dash.appendChild(sectionTitle('🔨 拷打模式')); const beatBox = sectionBox(); beatBox.style.cssText += 'display:flex;flex-direction:column;gap:10px;';
    const autoBeatRow = row(); autoBeatRow.appendChild(label('⚡ 自动拷打', '75px')); const autoBeatSw = (() => { const w = topDoc.createElement('span'); w.style.cssText = 'display:inline-flex;gap:0;border-radius:6px;overflow:hidden;border:1px solid rgba(232,120,74,0.25);flex-shrink:0;'; const onB = topDoc.createElement('span'); onB.textContent = '开'; const offB = topDoc.createElement('span'); offB.textContent = '关';[onB, offB].forEach(b => { b.style.cssText = 'padding:3px 10px;cursor:pointer;font-size:11px;font-weight:600;transition:all 0.15s;'; }); const up = () => { const e = state.autoBeat; if (e) { onB.style.background = 'rgba(232,120,74,0.25)'; onB.style.color = '#f0a070'; offB.style.background = 'transparent'; offB.style.color = '#555'; } else { onB.style.background = 'transparent'; onB.style.color = '#555'; offB.style.background = 'rgba(232,120,74,0.25)'; offB.style.color = '#f0a070'; } }; onB.onclick = () => { state.autoBeat = true; localStorage.setItem(CONFIG.AUTO_BEAT_KEY, 'true'); up(); }; offB.onclick = () => { state.autoBeat = false; localStorage.setItem(CONFIG.AUTO_BEAT_KEY, 'false'); up(); }; w.appendChild(onB); w.appendChild(offB); up(); return { wrapper: w, update: up }; })(); autoBeatRow.appendChild(autoBeatSw.wrapper); beatBox.appendChild(autoBeatRow);
    const qualRow = row(); qualRow.appendChild(label('本轮质量？', '75px')); const qualSw = createLeftRightSwitch('😡写的太烂了', '🥹写的太好了', CONFIG.BEAT_BAD_ID, CONFIG.BEAT_GOOD_ID, (side) => { state.beatMode = side === 'left' ? 'bad' : 'good'; localStorage.setItem(CONFIG.BEAT_MODE_KEY, state.beatMode); const cr = topDoc.getElementById('ss-dash-beat-comment-row'); const gcr = topDoc.getElementById('ss-dash-beat-good-comment-row'); if (cr) cr.style.display = state.beatMode === 'bad' ? '' : 'none'; if (gcr) gcr.style.display = state.beatMode === 'good' ? '' : 'none'; }); qualRow.appendChild(qualSw.wrapper); beatBox.appendChild(qualRow);
    const commentRow = topDoc.createElement('div'); commentRow.id = 'ss-dash-beat-comment-row'; commentRow.style.display = state.beatMode === 'bad' ? '' : 'none'; const ci = topDoc.createElement('textarea'); ci.placeholder = '吐槽一下哪里写得不好...也可以不填让狐神抚帮你吐槽哦'; ci.value = state.beatDraft; ci.style.cssText = 'width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.2);border-radius:8px;color:#e8ddd4;padding:8px 10px;font-size:12px;font-family:inherit;resize:vertical;box-sizing:border-box;min-height:40px;'; ci.oninput = () => { state.beatDraft = ci.value; localStorage.setItem(CONFIG.BEAT_DRAFT_KEY, state.beatDraft); }; commentRow.appendChild(ci); beatBox.appendChild(commentRow);
    const goodCommentRow = topDoc.createElement('div'); goodCommentRow.id = 'ss-dash-beat-good-comment-row'; goodCommentRow.style.display = state.beatMode === 'good' ? '' : 'none'; const gci = topDoc.createElement('textarea'); gci.placeholder = '夸夸哪里写得好...'; gci.value = state.beatGoodDraft || ''; gci.style.cssText = 'width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.2);border-radius:8px;color:#e8ddd4;padding:8px 10px;font-size:12px;font-family:inherit;resize:vertical;box-sizing:border-box;min-height:40px;'; gci.oninput = () => { state.beatGoodDraft = gci.value; localStorage.setItem('SPreset_BeatGoodDraft', state.beatGoodDraft); }; goodCommentRow.appendChild(gci); beatBox.appendChild(goodCommentRow);
    const btnsRow = row(); btnsRow.style.gap = '12px'; const runBtn = topDoc.createElement('button'); runBtn.textContent = '🔨 立即分析'; runBtn.id = 'ss-dash-beat-run'; runBtn.style.cssText = 'flex:1;padding:10px;border:1px solid rgba(232,120,74,0.3);border-radius:8px;background:rgba(232,120,74,0.1);color:#f0a070;cursor:pointer;font-size:12px;font-family:inherit;transition:all 0.2s;'; runBtn.onmouseover = () => { runBtn.style.background = 'rgba(232,120,74,0.2)'; }; runBtn.onmouseout = () => { runBtn.style.background = 'rgba(232,120,74,0.1)'; }; runBtn.onclick = () => runBeatMode(); btnsRow.appendChild(runBtn); const memBtn = topDoc.createElement('button'); memBtn.textContent = '📋 长期记忆管理'; memBtn.style.cssText = 'flex:1;padding:10px;border:1px solid rgba(232,120,74,0.2);border-radius:8px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;font-family:inherit;transition:all 0.2s;'; memBtn.onmouseover = () => { memBtn.style.background = 'rgba(232,120,74,0.08)'; memBtn.style.color = '#e8ddd4'; }; memBtn.onmouseout = () => { memBtn.style.background = 'rgba(255,255,255,0.03)'; memBtn.style.color = '#a09088'; }; memBtn.onclick = () => toggleBeatMemoryPanel(); btnsRow.appendChild(memBtn); beatBox.appendChild(btnsRow); dash.appendChild(beatBox);

    // 模块5: 预设选项控制
    dash.appendChild(sectionTitle('⚙️ 预设选项控制')); const presetBox = sectionBox(); presetBox.style.cssText += 'display:grid;grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));gap:10px 20px;';
    for (const g of CONFIG.SELECT_GROUPS) {
      const r = row();
      r.style.justifyContent = 'space-between';

      const l = topDoc.createElement('span');
      l.textContent = g.label;
      l.style.cssText = 'font-size:12px;color:#a09088;white-space:nowrap;flex-shrink:0;';
      r.appendChild(l);

      const sel2 = topDoc.createElement('select');
      sel2.style.cssText = 'background:rgba(255,255,255,0.04);border:1px solid rgba(232,120,74,0.2);border-radius:6px;color:#e8ddd4;padding:5px 8px;font-size:12px;font-family:inherit;cursor:pointer;width:170px;text-align:center;';

      const active = getActiveOptionInGroupFromPreset(g);

      const offOpt = topDoc.createElement('option');
      offOpt.value = PRESET_GROUP_OFF_VALUE;
      offOpt.textContent = '❌已关闭此模块';
      offOpt.selected = !active;
      sel2.appendChild(offOpt);

      for (const o of g.options) {
        const opt = topDoc.createElement('option');
        opt.value = o.id;
        opt.textContent = o.name;
        opt.selected = active?.id === o.id;
        sel2.appendChild(opt);
      }

      sel2.onchange = async () => {
        await selectPromptInGroup(g, sel2.value);
      };

      r.appendChild(sel2);
      presetBox.appendChild(r);
    }
    dash.appendChild(presetBox);

    // 模块6: 自定义内容编辑
    dash.appendChild(sectionTitle('✏️ 自定义内容编辑')); const customBox = sectionBox(); customBox.style.cssText += 'display:flex;flex-wrap:wrap;gap:8px;';
    for (const ce of CONFIG.CUSTOM_EDIT_IDS) { const btn = topDoc.createElement('button'); btn.textContent = ce.name; btn.style.cssText = 'padding:8px 14px;border:1px solid rgba(232,120,74,0.2);border-radius:8px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;font-family:inherit;transition:all 0.2s;'; btn.onmouseover = () => { btn.style.background = 'rgba(232,120,74,0.08)'; btn.style.color = '#e8ddd4'; }; btn.onmouseout = () => { btn.style.background = 'rgba(255,255,255,0.03)'; btn.style.color = '#a09088'; }; btn.onclick = () => openCustomEditPanel(ce.id, ce.name, ce.knownVar || ''); customBox.appendChild(btn); } dash.appendChild(customBox);

    // 模块7: 😡杀八股
    dash.appendChild(sectionTitle('😡 杀八股')); const killBox = sectionBox(); killBox.style.cssText += 'display:flex;flex-wrap:wrap;gap:12px 20px;align-items:center;';
    for (const t of CONFIG.KILL_TOGGLES) { const r = row(); const l = topDoc.createElement('span'); l.textContent = t.name; l.style.cssText = 'font-size:12px;color:#a09088;'; r.appendChild(l); const sw = createToggleSwitch(t.id); allUpdates.push(sw.update); r.appendChild(sw.wrapper); killBox.appendChild(r); } dash.appendChild(killBox);

    // 模块8: 狐析
    dash.appendChild(sectionTitle('🦊 狐析（用户偏好分析）')); const hushenBox = sectionBox(); hushenBox.style.cssText += 'display:flex;gap:12px;';
    const hushenBtn = topDoc.createElement('button'); hushenBtn.textContent = '🦊 打开狐析面板'; hushenBtn.style.cssText = 'flex:1;padding:10px;border:1px solid rgba(232,120,74,0.2);border-radius:8px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;font-family:inherit;transition:all 0.2s;'; hushenBtn.onmouseover = () => { hushenBtn.style.background = 'rgba(232,120,74,0.08)'; hushenBtn.style.color = '#e8ddd4'; }; hushenBtn.onmouseout = () => { hushenBtn.style.background = 'rgba(255,255,255,0.03)'; hushenBtn.style.color = '#a09088'; }; hushenBtn.onclick = () => openHushenPanel(); hushenBox.appendChild(hushenBtn); dash.appendChild(hushenBox);

    // 模块9: 狐搜
    dash.appendChild(sectionTitle('🦊 狐搜（外部搜索）')); const husouBox = sectionBox(); husouBox.style.cssText += 'display:flex;gap:12px;';
    const husouPanelBtn = topDoc.createElement('button'); husouPanelBtn.textContent = '🦊 打开狐搜面板'; husouPanelBtn.style.cssText = 'flex:1;padding:10px;border:1px solid rgba(232,120,74,0.2);border-radius:8px;background:rgba(255,255,255,0.03);color:#a09088;cursor:pointer;font-size:12px;font-family:inherit;transition:all 0.2s;'; husouPanelBtn.onmouseover = () => { husouPanelBtn.style.background = 'rgba(232,120,74,0.08)'; husouPanelBtn.style.color = '#e8ddd4'; }; husouPanelBtn.onmouseout = () => { husouPanelBtn.style.background = 'rgba(255,255,255,0.03)'; husouPanelBtn.style.color = '#a09088'; }; husouPanelBtn.onclick = () => openHusouPanel(); husouBox.appendChild(husouPanelBtn); dash.appendChild(husouBox);

    topDoc.body.appendChild(overlay); topDoc.body.appendChild(dash);
    setTimeout(() => { allUpdates.forEach(fn => fn()); }, 50);
  }

  function updateStatusChip() { const chip = topDoc.getElementById('ss-dash-status'); if (chip) chip.textContent = buildStatusText(); }
  function closeDashboard() { topDoc.getElementById('ss-dash-overlay')?.remove(); topDoc.getElementById('ss-dashboard')?.remove(); }
  async function selectStyle(style) { if (state.currentStyle === style) return; state.currentStyle = style; localStorage.setItem(CONFIG.STYLE_KEY, style); setBeautyStyle(style, state.isExpanded); await forceRefresh(getCurrentLastMessageId()); updateBubbleUI(); updateStatusChip(); }

  // ==================== 浮窗 CSS ====================
  const BUBBLE_CSS = `<style id="ss-fox-styles">@keyframes ss-fadeIn{from{opacity:0;}to{opacity:1;}}@keyframes ss-scaleIn{from{opacity:0;transform:translate(-50%,-50%) scale(0.9);}to{opacity:1;transform:translate(-50%,-50%) scale(1);}}#ss-float-bubble{position:fixed;width:44px;height:44px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:18px;user-select:none;-webkit-user-select:none;z-index:1000000;touch-action:none;background:linear-gradient(145deg,rgba(24,18,20,0.95),rgba(16,12,14,0.95));border:1.2px solid rgba(255,255,255,0.1);box-shadow:0 4px 24px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.03);transition:transform 0.35s cubic-bezier(0.18,0.89,0.32,1.28),border-color 0.4s ease,box-shadow 0.4s ease;}#ss-float-bubble:hover{transform:scale(1.08);}#ss-float-bubble.enabled{border-color:rgba(232,120,74,0.5);box-shadow:0 4px 24px rgba(0,0,0,0.5),0 0 18px 3px rgba(232,120,74,0.3),inset 0 1px 0 rgba(255,255,255,0.03);}#ss-float-bubble.generating{border-color:rgba(232,150,100,0.7)!important;box-shadow:0 4px 24px rgba(0,0,0,0.5),0 0 28px 6px rgba(232,140,90,0.45),inset 0 1px 0 rgba(255,255,255,0.03)!important;}#ss-float-bubble.generating::after{content:'';position:absolute;inset:-5px;border-radius:50%;border:2px solid transparent;border-top-color:rgba(232,150,100,0.5);animation:ss-spin-ring 1.5s linear infinite;}#ss-float-bubble .bubble-dot{position:absolute;top:3px;right:3px;width:8px;height:8px;border-radius:50%;background:#444;border:1.5px solid rgba(0,0,0,0.6);transition:all 0.35s ease;}#ss-float-bubble.enabled .bubble-dot{background:#f0a070;box-shadow:0 0 8px rgba(240,160,112,0.7);}#ss-float-bubble.generating .bubble-dot{background:#f0b890;box-shadow:0 0 10px rgba(240,180,140,0.8);animation:ss-dot-pulse 0.8s ease-in-out infinite;}@keyframes ss-spin-ring{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}@keyframes ss-dot-pulse{0%,100%{transform:scale(1);}50%{transform:scale(1.5);}}#ss-dashboard::-webkit-scrollbar{width:4px;}#ss-dashboard::-webkit-scrollbar-track{background:transparent;}#ss-dashboard::-webkit-scrollbar-thumb{background:rgba(232,120,74,0.2);border-radius:2px;}#ss-hushen-panel::-webkit-scrollbar{width:4px;}#ss-hushen-panel::-webkit-scrollbar-track{background:transparent;}#ss-hushen-panel::-webkit-scrollbar-thumb{background:rgba(232,120,74,0.2);border-radius:2px;}#ss-husou-panel::-webkit-scrollbar{width:4px;}#ss-husou-panel::-webkit-scrollbar-track{background:transparent;}#ss-husou-panel::-webkit-scrollbar-thumb{background:rgba(232,120,74,0.2);border-radius:2px;}select{appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 4.5l3 3 3-3' stroke='%23a09088' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;padding-right:28px!important;}</style>`;
  function buildBubbleHTML() { return `<div id="ss-float-bubble" class="${state.enabled ? 'enabled' : ''} ${state.isGenerating ? 'generating' : ''}" style="top:${panelConfig.bubbleTop};${panelConfig.bubbleSide === 'right' ? 'right:12px;left:auto;' : 'left:12px;right:auto;'}">🦊<div class="bubble-dot"></div></div>`; }

  async function initUI() {
    if (topDoc.getElementById('ss-float-bubble')) return;
    topDoc.head.insertAdjacentHTML('beforeend', BUBBLE_CSS); topDoc.body.insertAdjacentHTML('beforeend', buildBubbleHTML());
    const bubble = topDoc.getElementById('ss-float-bubble'); let dragging = false, dragMoved = false, dragJustEnded = false, startX, startY, startLeft, startTop;
    bubble.addEventListener('pointerdown', (e) => { dragging = true; dragMoved = false; startX = e.clientX; startY = e.clientY; bubble.style.transform = 'none'; bubble.style.pointerEvents = 'none'; const rect = bubble.getBoundingClientRect(); startLeft = rect.left; startTop = rect.top; bubble.style.pointerEvents = 'auto'; bubble.setPointerCapture(e.pointerId); bubble.style.transition = 'none'; e.preventDefault(); e.stopPropagation(); });
    bubble.addEventListener('pointermove', (e) => { if (!dragging) return; const dx = e.clientX - startX, dy = e.clientY - startY; if (Math.abs(dx) > 2 || Math.abs(dy) > 2) dragMoved = true; bubble.style.left = (startLeft + dx) + 'px'; bubble.style.top = (startTop + dy) + 'px'; });
    bubble.addEventListener('pointerup', (e) => { if (!dragging) return; dragging = false; bubble.style.transform = ''; bubble.style.pointerEvents = ''; bubble.style.transition = ''; if (dragMoved) { const rect = bubble.getBoundingClientRect(); bubble.style.left = rect.left + 'px'; bubble.style.top = rect.top + 'px'; bubble.style.right = 'auto'; const side = (rect.left + rect.width / 2) < topWindow.innerWidth / 2 ? 'left' : 'right'; savePanelConfig({ bubbleTop: rect.top + 'px', bubbleSide: side }); dragJustEnded = true; setTimeout(() => dragJustEnded = false, 150); } document.body.focus(); });
    bubble.addEventListener('pointercancel', () => { dragging = false; bubble.style.transform = ''; bubble.style.pointerEvents = ''; bubble.style.transition = ''; document.body.focus(); });
    bubble.addEventListener('click', (e) => { if (dragJustEnded || dragMoved) return; if (topDoc.getElementById('ss-dashboard')) closeDashboard(); else openDashboard(); });
  }

  // ==================== 移动端面板修复补丁 ====================
  function injectMobilePanelFix() {
    if (topDoc.getElementById('ss-mobile-panel-fix')) return;

    const css = topDoc.createElement('style');
    css.id = 'ss-mobile-panel-fix';
    css.textContent = `
    @media (max-width: 768px), (pointer: coarse) {
        #ss-dashboard,
        #ss-hushen-panel,
        #ss-husou-panel,
        #ss-beat-memory-panel,
        #ss-custom-edit-panel {
            position: fixed !important;

            top: max(8px, env(safe-area-inset-top)) !important;
            left: max(8px, env(safe-area-inset-left)) !important;
            right: max(8px, env(safe-area-inset-right)) !important;
            bottom: max(8px, env(safe-area-inset-bottom)) !important;

            width: auto !important;
            height: auto !important;
            max-width: none !important;
            max-height: none !important;

            transform: none !important;
            translate: none !important;

            padding: 16px 14px 18px !important;
            border-radius: 16px !important;

            overflow-x: hidden !important;
            overflow-y: auto !important;
            -webkit-overflow-scrolling: touch !important;
            overscroll-behavior: contain !important;
            touch-action: pan-y !important;

            display: flex !important;
            flex-direction: column !important;

            animation: ss-mobile-panel-in 0.22s ease-out !important;
        }

        #ss-dash-overlay {
            position: fixed !important;
            inset: 0 !important;
            touch-action: none !important;
            overscroll-behavior: none !important;
            z-index: 999998 !important;
        }

        #ss-dashboard > div:first-child {
            flex-shrink: 0 !important;
            position: sticky !important;
            top: -16px !important;
            z-index: 20 !important;
            margin: -16px -14px 8px -14px !important;
            padding: 14px 14px 12px 14px !important;
            background: linear-gradient(180deg, rgba(22,17,19,0.99), rgba(22,17,19,0.92)) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            border-radius: 16px 16px 0 0 !important;
        }

        #ss-dashboard > div {
            flex-shrink: 0 !important;
        }

        #ss-dashboard button,
        #ss-dashboard input[type="button"],
        #ss-hushen-panel button,
        #ss-husou-panel input[type="button"],
        #ss-beat-memory-panel button,
        #ss-custom-edit-panel button {
            min-height: 36px !important;
            font-size: 12px !important;
        }

        #ss-dashboard select,
        #ss-dashboard input,
        #ss-dashboard textarea,
        #ss-hushen-panel select,
        #ss-hushen-panel input,
        #ss-hushen-panel textarea,
        #ss-husou-panel select,
        #ss-husou-panel input,
        #ss-husou-panel textarea,
        #ss-beat-memory-panel textarea,
        #ss-custom-edit-panel textarea {
            max-width: 100% !important;
            font-size: 12px !important;
            box-sizing: border-box !important;
        }

        #ss-dashboard div[style*="grid-template-columns:1fr 1fr"],
        #ss-dashboard div[style*="grid-template-columns: 1fr 1fr"],
        #ss-husou-panel div[style*="grid-template-columns:1fr 1fr"],
        #ss-husou-panel div[style*="grid-template-columns: 1fr 1fr"],
        #ss-husou-panel div[style*="grid-template-columns:repeat(2,1fr)"],
        #ss-husou-panel div[style*="grid-template-columns: repeat(2,1fr)"],
        #ss-hushen-panel div[style*="grid-template-columns:repeat(2,1fr)"],
        #ss-hushen-panel div[style*="grid-template-columns: repeat(2,1fr)"] {
            grid-template-columns: 1fr !important;
        }

        .ss-quick-grid,
        .ss-preset-grid {
            grid-template-columns: 1fr !important;
        }

        .ss-context-row {
            grid-template-columns: 1fr 1fr !important;
        }

        #ss-dashboard textarea {
            max-height: 42vh !important;
        }

        #ss-hushen-panel textarea,
        #ss-husou-panel textarea,
        #ss-beat-memory-panel textarea,
        #ss-custom-edit-panel textarea {
            max-height: 38vh !important;
        }

        #ss-summary-textarea {
            min-height: 120px !important;
            max-height: 36vh !important;
        }

        #injection_manager_textarea {
            min-height: 120px !important;
            max-height: 34vh !important;
        }
    }

    @media (max-width: 420px) {
        #ss-dashboard,
        #ss-hushen-panel,
        #ss-husou-panel,
        #ss-beat-memory-panel,
        #ss-custom-edit-panel {
            top: max(6px, env(safe-area-inset-top)) !important;
            left: max(6px, env(safe-area-inset-left)) !important;
            right: max(6px, env(safe-area-inset-right)) !important;
            bottom: max(6px, env(safe-area-inset-bottom)) !important;
            padding: 14px 12px 16px !important;
            border-radius: 14px !important;
        }

        #ss-dashboard > div:first-child {
            margin: -14px -12px 8px -12px !important;
            padding: 14px 12px 12px 12px !important;
            border-radius: 14px 14px 0 0 !important;
        }

        .ss-context-row {
            grid-template-columns: 1fr !important;
        }
    }

    @keyframes ss-mobile-panel-in {
        from {
            opacity: 0;
            transform: translateY(14px) scale(0.985);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
        `;

    topDoc.head.appendChild(css);
  }

  function applyMobilePanelFixNow() {
    injectMobilePanelFix();

    const isMobile = (() => {
      try {
        return topWindow.matchMedia?.('(max-width: 768px), (pointer: coarse)')?.matches;
      } catch {
        return (topWindow.innerWidth || window.innerWidth) <= 768;
      }
    })();

    if (!isMobile) return;

    const vv = topWindow.visualViewport;
    const viewportW = vv?.width || topWindow.innerWidth || topDoc.documentElement.clientWidth;
    const viewportH = vv?.height || topWindow.innerHeight || topDoc.documentElement.clientHeight;

    const safeTop = Math.max(6, vv?.offsetTop || 0);
    const safeLeft = Math.max(6, vv?.offsetLeft || 0);
    const gap = viewportW <= 420 ? 6 : 8;

    const panelIds = [
      'ss-dashboard',
      'ss-hushen-panel',
      'ss-husou-panel',
      'ss-beat-memory-panel',
      'ss-custom-edit-panel',
    ];

    for (const id of panelIds) {
      const panel = topDoc.getElementById(id);
      if (!panel) continue;

      Object.assign(panel.style, {
        position: 'fixed',
        top: `${safeTop + gap}px`,
        left: `${safeLeft + gap}px`,
        right: `${gap}px`,
        bottom: `${gap}px`,

        width: 'auto',
        height: 'auto',
        maxWidth: 'none',
        maxHeight: 'none',

        transform: 'none',
        translate: 'none',

        boxSizing: 'border-box',
        overflowX: 'hidden',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        overscrollBehavior: 'contain',

        display: 'flex',
        flexDirection: 'column',
      });

      // 防止移动端某些浏览器在 fixed + bottom 失效时高度塌掉
      const fallbackH = Math.max(260, viewportH - safeTop - gap * 3);
      panel.style.minHeight = `${Math.min(fallbackH, viewportH - gap * 2)}px`;
    }

    const dash = topDoc.getElementById('ss-dashboard');
    if (dash) {
      // 主面板所有直接子项不允许被 flex 压扁
      [...dash.children].forEach(child => {
        child.style.flexShrink = '0';
      });

      // 顶栏固定，但不要把下面内容遮没
      const header = dash.firstElementChild;
      if (header) {
        Object.assign(header.style, {
          position: 'sticky',
          top: '0px',
          zIndex: '30',
          flexShrink: '0',
        });
      }

      // 手机端强制把常见横排区域改成单列/两列，避免撑爆宽度
      dash.querySelectorAll('div').forEach(el => {
        const st = el.getAttribute('style') || '';

        if (
          st.includes('grid-template-columns:repeat(3,1fr)') ||
          st.includes('grid-template-columns: repeat(3,1fr)') ||
          st.includes('grid-template-columns:repeat(auto-fill') ||
          st.includes('grid-template-columns: repeat(auto-fill') ||
          st.includes('grid-template-columns:repeat(auto-fit') ||
          st.includes('grid-template-columns: repeat(auto-fit')
        ) {
          el.style.gridTemplateColumns = '1fr';
        }

        if (
          st.includes('display:flex') &&
          (
            st.includes('gap:12px') ||
            st.includes('gap: 12px') ||
            st.includes('flex-wrap')
          )
        ) {
          el.style.flexWrap = 'wrap';
        }
      });
    }

    const husou = topDoc.getElementById('ss-husou-panel');
    if (husou) {
      husou.querySelectorAll('div').forEach(el => {
        const st = el.getAttribute('style') || '';

        if (
          st.includes('grid-template-columns:repeat(2,1fr)') ||
          st.includes('grid-template-columns: repeat(2,1fr)') ||
          st.includes('grid-template-columns:1fr 1fr') ||
          st.includes('grid-template-columns: 1fr 1fr')
        ) {
          el.style.gridTemplateColumns = '1fr';
        }
      });
    }

    const hushen = topDoc.getElementById('ss-hushen-panel');
    if (hushen) {
      hushen.querySelectorAll('textarea').forEach(ta => {
        ta.style.maxHeight = '38vh';
      });
    }

    const overlay = topDoc.getElementById('ss-dash-overlay');
    if (overlay) {
      Object.assign(overlay.style, {
        position: 'fixed',
        inset: '0',
        zIndex: '999998',
        touchAction: 'none',
      });
    }
  }


  // ==================== UI 优化补丁：仅优化界面、排序与交互，不改变核心逻辑 ====================
  function injectFoxUiPolish() {
    if (topDoc.getElementById('ss-fox-ui-polish')) return;

    const css = topDoc.createElement('style');
    css.id = 'ss-fox-ui-polish';
    css.textContent = `
/* ========== 全局玄狐 UI 优化 ========== */
#ss-dashboard,
#ss-hushen-panel,
#ss-husou-panel,
#ss-beat-memory-panel,
#ss-custom-edit-panel {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif !important;
    box-sizing: border-box !important;
}

#ss-dashboard {
    width: min(960px, calc(100vw - 32px)) !important;
    max-height: min(86vh, 860px) !important;
    padding: 22px 24px 24px !important;
    background:
        radial-gradient(circle at top left, rgba(232,120,74,0.10), transparent 34%),
        linear-gradient(145deg, rgba(22,17,19,0.985), rgba(12,10,12,0.985)) !important;
    border: 1px solid rgba(232,120,74,0.28) !important;
    box-shadow:
        0 28px 90px rgba(0,0,0,0.74),
        inset 0 1px 0 rgba(255,255,255,0.035) !important;
    gap: 14px !important;
    scrollbar-gutter: stable !important;
}

#ss-dashboard > div:first-child {
    position: sticky !important;
    top: -22px !important;
    z-index: 5 !important;
    padding: 14px 2px 14px !important;
    margin: -22px 0 2px !important;
    background:
        linear-gradient(180deg, rgba(22,17,19,0.98), rgba(22,17,19,0.88)) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
}

.ss-section-title {
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
    margin: 8px 0 -4px !important;
    padding-left: 2px !important;
    color: #9b7868 !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    letter-spacing: 0.08em !important;
}

.ss-section-title::after {
    content: "" !important;
    height: 1px !important;
    flex: 1 !important;
    background: linear-gradient(90deg, rgba(232,120,74,0.22), transparent) !important;
}

.ss-section-box {
    background:
        linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015)) !important;
    border: 1px solid rgba(232,120,74,0.13) !important;
    border-radius: 14px !important;
    padding: 14px 15px !important;
    box-shadow:
        0 8px 24px rgba(0,0,0,0.18),
        inset 0 1px 0 rgba(255,255,255,0.025) !important;
}

#ss-dashboard button,
#ss-dashboard input[type="button"],
#ss-hushen-panel button,
#ss-husou-panel input[type="button"],
#ss-beat-memory-panel button,
#ss-custom-edit-panel button {
    min-height: 32px !important;
    border-radius: 9px !important;
    transition:
        background 0.18s ease,
        color 0.18s ease,
        border-color 0.18s ease,
        transform 0.16s ease,
        box-shadow 0.16s ease !important;
}

#ss-dashboard button:hover,
#ss-dashboard input[type="button"]:hover,
#ss-hushen-panel button:hover,
#ss-husou-panel input[type="button"]:hover,
#ss-beat-memory-panel button:hover,
#ss-custom-edit-panel button:hover {
    transform: translateY(-1px) !important;
    box-shadow: 0 6px 16px rgba(0,0,0,0.22) !important;
}

#ss-dashboard button:active,
#ss-dashboard input[type="button"]:active,
#ss-hushen-panel button:active,
#ss-husou-panel input[type="button"]:active,
#ss-beat-memory-panel button:active,
#ss-custom-edit-panel button:active {
    transform: translateY(0) scale(0.99) !important;
}

#ss-dashboard textarea,
#ss-dashboard input,
#ss-dashboard select,
#ss-hushen-panel textarea,
#ss-hushen-panel input,
#ss-hushen-panel select,
#ss-husou-panel textarea,
#ss-husou-panel input,
#ss-husou-panel select,
#ss-beat-memory-panel textarea,
#ss-custom-edit-panel textarea {
    outline: none !important;
    transition:
        border-color 0.18s ease,
        background 0.18s ease,
        box-shadow 0.18s ease !important;
}

#ss-dashboard textarea:focus,
#ss-dashboard input:focus,
#ss-dashboard select:focus,
#ss-hushen-panel textarea:focus,
#ss-hushen-panel input:focus,
#ss-hushen-panel select:focus,
#ss-husou-panel textarea:focus,
#ss-husou-panel input:focus,
#ss-husou-panel select:focus,
#ss-beat-memory-panel textarea:focus,
#ss-custom-edit-panel textarea:focus {
    border-color: rgba(240,160,112,0.55) !important;
    background: rgba(255,255,255,0.055) !important;
    box-shadow: 0 0 0 2px rgba(232,120,74,0.10) !important;
}

#ss-dashboard select,
#ss-hushen-panel select,
#ss-husou-panel select {
    min-height: 30px !important;
}

/* 状态胶囊 */
#ss-dash-status {
    color: #e7b18f !important;
    background: rgba(232,120,74,0.10) !important;
    border: 1px solid rgba(232,120,74,0.18) !important;
    border-radius: 999px !important;
    padding: 5px 18px !important;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.03) !important;
}

/* 快捷开关区域 */
.ss-quick-grid {
    grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)) !important;
    gap: 10px 16px !important;
}

.ss-preset-grid {
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr)) !important;
    gap: 10px 18px !important;
}

.ss-context-row {
    display: grid !important;
    grid-template-columns: repeat(auto-fit, minmax(145px, 1fr)) !important;
    gap: 10px !important;
}

/* 大总结 textarea */
#ss-summary-textarea {
    min-height: 170px !important;
    line-height: 1.55 !important;
}

/* ========== 狐析面板优化 ========== */
#ss-hushen-panel {
    width: min(760px, calc(100vw - 32px)) !important;
    max-height: min(84vh, 860px) !important;
    padding: 22px !important;
    background:
        radial-gradient(circle at top right, rgba(232,120,74,0.11), transparent 35%),
        linear-gradient(145deg, rgba(22,18,20,0.985), rgba(13,10,12,0.985)) !important;
    border-radius: 18px !important;
    scrollbar-gutter: stable !important;
}

.ss-hushen-card {
    position: relative !important;
    border-radius: 14px !important;
    background:
        linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.014)) !important;
    border: 1px solid rgba(232,120,74,0.13) !important;
    padding: 14px !important;
    margin-bottom: 12px !important;
    box-shadow: 0 8px 24px rgba(0,0,0,0.16) !important;
}

.ss-hushen-card:hover {
    border-color: rgba(232,120,74,0.22) !important;
    background:
        linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.018)) !important;
}

.ss-hushen-index {
    position: absolute !important;
    top: 12px !important;
    right: 12px !important;
    font-size: 10px !important;
    color: #906d60 !important;
    border: 1px solid rgba(232,120,74,0.13) !important;
    background: rgba(232,120,74,0.06) !important;
    border-radius: 999px !important;
    padding: 2px 7px !important;
}

#ss-hushen-panel textarea {
    line-height: 1.5 !important;
}

/* 狐析底部全局按钮吸底 */
.ss-hushen-actions {
    position: sticky !important;
    bottom: -22px !important;
    z-index: 4 !important;
    padding: 12px 0 2px !important;
    background: linear-gradient(180deg, transparent, rgba(18,14,16,0.96) 35%) !important;
}

/* ========== 狐搜面板优化 ========== */
#ss-husou-panel {
    width: min(820px, calc(100vw - 32px)) !important;
    max-height: min(86vh, 880px) !important;
    padding: 22px !important;
    background:
        radial-gradient(circle at top left, rgba(232,120,74,0.10), transparent 34%),
        linear-gradient(145deg, rgba(22,18,20,0.985), rgba(13,10,12,0.985)) !important;
    border-radius: 18px !important;
    scrollbar-gutter: stable !important;
}

#ss-husou-panel > div > div {
    box-sizing: border-box !important;
}

.ss-husou-card {
    border-radius: 14px !important;
    background:
        linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.014)) !important;
    border: 1px solid rgba(232,120,74,0.13) !important;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15) !important;
}

.ss-husou-card:hover {
    border-color: rgba(232,120,74,0.22) !important;
}

#ss-husou-panel label {
    line-height: 1.45 !important;
}

#ss-husou-panel textarea {
    line-height: 1.5 !important;
}

#injection_manager_textarea {
    min-height: 140px !important;
}

/* ========== 小弹窗优化 ========== */
#ss-beat-memory-panel,
#ss-custom-edit-panel {
    width: min(640px, calc(100vw - 32px)) !important;
    max-height: min(78vh, 760px) !important;
    background:
        radial-gradient(circle at top right, rgba(232,120,74,0.10), transparent 35%),
        linear-gradient(145deg, rgba(22,18,20,0.985), rgba(13,10,12,0.985)) !important;
    border-radius: 18px !important;
}

#ss-beat-memory-panel textarea,
#ss-custom-edit-panel textarea {
    line-height: 1.55 !important;
}

/* ========== 浮动狐狐按钮优化 ========== */
#ss-float-bubble {
    background:
        radial-gradient(circle at 35% 25%, rgba(255,210,170,0.16), transparent 35%),
        linear-gradient(145deg, rgba(31,23,26,0.98), rgba(13,10,12,0.98)) !important;
    border-color: rgba(255,255,255,0.12) !important;
}

#ss-float-bubble:hover {
    transform: scale(1.09) rotate(-3deg) !important;
}

#ss-float-bubble.enabled {
    border-color: rgba(232,120,74,0.62) !important;
}

/* ========== 狐搜 checkbox 统一为 开/关 风格 ========== */
.ss-husou-switch {
    display: inline-flex !important;
    flex-shrink: 0 !important;
    overflow: hidden !important;
    border-radius: 7px !important;
    border: 1px solid rgba(232,120,74,0.25) !important;
    background: rgba(0,0,0,0.12) !important;
}

.ss-husou-switch span {
    padding: 3px 9px !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    line-height: 1.2 !important;
    transition: all 0.15s ease !important;
}

.ss-husou-switch.is-on .ss-husou-switch-on {
    background: rgba(232,120,74,0.25) !important;
    color: #f0a070 !important;
}

.ss-husou-switch.is-on .ss-husou-switch-off {
    background: transparent !important;
    color: #555 !important;
}

.ss-husou-switch.is-off .ss-husou-switch-on {
    background: transparent !important;
    color: #555 !important;
}

.ss-husou-switch.is-off .ss-husou-switch-off {
    background: rgba(232,120,74,0.25) !important;
    color: #f0a070 !important;
}

.ss-husou-advanced-details summary:hover {
    background: rgba(232,120,74,0.08) !important;
}

.ss-husou-advanced-details[open] summary {
    border-bottom: 1px solid rgba(232,120,74,0.12) !important;
    margin-bottom: 10px !important;
}

/* ========== 响应式 ========== */
@media (max-width: 760px) {
    #ss-dashboard,
    #ss-hushen-panel,
    #ss-husou-panel {
        width: calc(100vw - 18px) !important;
        padding: 18px !important;
        border-radius: 16px !important;
    }

    #ss-dashboard {
        gap: 12px !important;
    }

    .ss-section-box {
        padding: 12px !important;
    }

    #ss-dashboard button,
    #ss-dashboard input[type="button"] {
        min-height: 34px !important;
    }
}
        `;
    topDoc.head.appendChild(css);
  }

  function enhanceDashboardUI() {
    const dash = topDoc.getElementById('ss-dashboard');
    if (!dash) return;

    injectFoxUiPolish();

    const children = [...dash.children];
    const header = children[0];

    // 给 section title / box 加 class
    const pairs = [];
    for (let i = 1; i < children.length; i += 2) {
      const title = children[i];
      const box = children[i + 1];
      if (!title || !box) continue;

      title.classList.add('ss-section-title');
      box.classList.add('ss-section-box');

      const text = (title.textContent || '').trim();
      pairs.push({ title, box, text });

      if (text.includes('快捷开关')) box.classList.add('ss-quick-grid');
      if (text.includes('预设选项控制')) box.classList.add('ss-preset-grid');
      if (text.includes('上下文管理')) box.classList.add('ss-context-row');
    }

    // 只调整展示顺序，不改变任何按钮逻辑
    const order = [
      '📡 思维链控制',
      '🔧 快捷开关',
      '⚙️ 预设选项控制',
      '✏️ 自定义内容编辑',
      '😡 杀八股',
      '📦 上下文管理',
      '📋 大总结管理',
      '🔨 拷打模式',
      '🦊 狐析',
      '🦊 狐搜',
    ];

    const score = (text) => {
      const idx = order.findIndex(k => text.includes(k.replace(/[📡🔧⚙️✏️😡📦📋🔨🦊]/g, '').trim()) || text.includes(k));
      return idx === -1 ? 999 : idx;
    };

    pairs.sort((a, b) => score(a.text) - score(b.text));

    if (header) dash.appendChild(header);
    for (const p of pairs) {
      dash.appendChild(p.title);
      dash.appendChild(p.box);
    }

    // 优化标题副文本
    const status = topDoc.getElementById('ss-dash-status');
    if (status && !status.dataset.polished) {
      status.dataset.polished = '1';
      status.title = '当前思维链样式 / 展开状态 / 可见状态';
    }
  }

  function enhanceHushenUI() {
    const panel = topDoc.getElementById('ss-hushen-panel');
    if (!panel) return;

    injectFoxUiPolish();

    // 给狐析模块卡片加 class 与序号
    const inputs = [...panel.querySelectorAll('.ss-hushen-input')];
    inputs.forEach((input, idx) => {
      const card = input.closest('div[style*="background"]');
      if (!card || card.classList.contains('ss-hushen-card')) return;

      card.classList.add('ss-hushen-card');

      const badge = topDoc.createElement('span');
      badge.className = 'ss-hushen-index';
      badge.textContent = String(idx + 1).padStart(2, '0');
      card.appendChild(badge);
    });

    const actionRow = panel.querySelector('#ss-hushen-analyze-all')?.parentElement;
    if (actionRow) actionRow.classList.add('ss-hushen-actions');
  }

  function enhanceHusouUI() {
    const panel = topDoc.getElementById('ss-husou-panel');
    if (!panel) return;

    injectFoxUiPolish();

    const root = panel.firstElementChild;
    if (!root) return;

    [...root.children].forEach((child) => {
      const text = child.textContent || '';
      if (
        text.includes('总开关') ||
        text.includes('搜索参数') ||
        text.includes('搜索来源') ||
        text.includes('请求 API') ||
        text.includes('搜索预设') ||
        text.includes('管理注入内容')
      ) {
        child.classList.add('ss-husou-card');
      }
    });

    polishHusouCheckboxes(panel);
    foldHusouCustomSearchAdvanced(panel);
  }

  function polishHusouCheckboxes(panel) {
    if (!panel) return;

    panel.querySelectorAll('label').forEach(label => {
      const input = label.querySelector('input[type="checkbox"]');
      if (!input || label.dataset.ssSwitchified === '1') return;

      label.dataset.ssSwitchified = '1';
      label.style.display = 'flex';
      label.style.alignItems = 'center';
      label.style.justifyContent = 'space-between';
      label.style.gap = '10px';
      label.style.padding = '7px 9px';
      label.style.border = '1px solid rgba(232,120,74,0.12)';
      label.style.borderRadius = '10px';
      label.style.background = 'rgba(255,255,255,0.025)';

      input.style.display = 'none';

      const sw = topDoc.createElement('span');
      sw.className = 'ss-husou-switch';
      sw.innerHTML = '<span class="ss-husou-switch-on">开</span><span class="ss-husou-switch-off">关</span>';

      label.insertBefore(sw, label.firstChild);

      const update = () => {
        sw.classList.toggle('is-on', input.checked);
        sw.classList.toggle('is-off', !input.checked);
      };

      update();

      label.addEventListener('click', () => {
        setTimeout(update, 0);
      });

      input.addEventListener('change', update);
    });
  }

  function foldHusouCustomSearchAdvanced(panel) {
    const section = panel.querySelector('#custom_search_api_section');
    if (!section || section.dataset.ssFoldedAdvanced === '1') return;

    section.dataset.ssFoldedAdvanced = '1';

    const advancedIds = [
      'search_api_method',
      'search_api_key',
      'search_api_key_header_name',
      'search_api_key_header_template',
      'search_api_query_param',
      'search_api_body_template',
      'search_api_extra_params',
      'search_api_language',
      'search_api_result_path',
      'search_api_title_field',
      'search_api_snippet_field',
      'search_api_link_field',
    ];

    const advancedFields = advancedIds
      .map(id => section.querySelector('#' + id)?.closest('div'))
      .filter(Boolean);

    if (!advancedFields.length) return;

    const details = topDoc.createElement('details');
    details.className = 'ss-husou-advanced-details';
    details.open = false;
    details.style.cssText = 'grid-column:1/-1;margin-top:8px;border:1px solid rgba(232,120,74,0.13);border-radius:12px;background:rgba(255,255,255,0.025);overflow:hidden;';

    const summary = topDoc.createElement('summary');
    summary.textContent = '⚙️ 高级参数';
    summary.style.cssText = 'cursor:pointer;list-style:none;padding:10px 12px;color:#f0a070;font-size:12px;font-weight:600;user-select:none;';

    const inner = topDoc.createElement('div');
    inner.style.cssText = 'display:grid;grid-template-columns:repeat(2,1fr);gap:8px 16px;padding:0 12px 12px;';

    const firstField = advancedFields[0];
    firstField.parentElement.insertBefore(details, firstField);

    details.appendChild(summary);
    details.appendChild(inner);

    for (const field of advancedFields) {
      inner.appendChild(field);
    }

    const resultTitle = [...section.querySelectorAll('div')]
      .find(el => (el.textContent || '').trim() === '结果解析');

    if (resultTitle) {
      const title = topDoc.createElement('div');
      title.textContent = '结果解析';
      title.style.cssText = 'grid-column:1/-1;font-weight:600;margin-top:4px;color:#e8ddd4;font-size:12px;';
      inner.insertBefore(title, inner.querySelector('#search_api_result_path')?.closest('div') || null);
      resultTitle.remove();
    }

    const quickPreset = [...section.querySelectorAll('div')]
      .find(el => (el.textContent || '').includes('快速预设：'));

    if (quickPreset) {
      quickPreset.style.gridColumn = '1/-1';
      inner.appendChild(quickPreset);
    }
  }


  // 包装原函数：只在打开后做 UI 增强，不改内部逻辑
  const __ss_original_openDashboard = openDashboard;
  openDashboard = function () {
    __ss_original_openDashboard();

    injectFoxUiPolish();
    applyMobilePanelFixNow();

    requestAnimationFrame(() => {
      enhanceDashboardUI();
      applyMobilePanelFixNow();
    });
  };

  const __ss_original_openHushenPanel = openHushenPanel;
  openHushenPanel = function () {
    __ss_original_openHushenPanel();

    injectFoxUiPolish();
    applyMobilePanelFixNow();

    requestAnimationFrame(() => {
      enhanceHushenUI();
      applyMobilePanelFixNow();
    });
  };

  const __ss_original_openHusouPanel = openHusouPanel;
  openHusouPanel = function () {
    __ss_original_openHusouPanel();

    injectFoxUiPolish();
    applyMobilePanelFixNow();

    requestAnimationFrame(() => {
      enhanceHusouUI();
      applyMobilePanelFixNow();
    });
  };

  const __ss_original_toggleBeatMemoryPanel = toggleBeatMemoryPanel;
  toggleBeatMemoryPanel = function () {
    __ss_original_toggleBeatMemoryPanel();

    injectFoxUiPolish();
    applyMobilePanelFixNow();
  };

  const __ss_original_openCustomEditPanel = openCustomEditPanel;
  openCustomEditPanel = function (...args) {
    __ss_original_openCustomEditPanel(...args);

    injectFoxUiPolish();
    applyMobilePanelFixNow();
  };

  const __ss_original_initUI = initUI;
  initUI = async function () {
    if (topDoc.getElementById('ss-float-bubble')) { log('⚠️ 检测到残留 DOM，先清理'); cleanup(); }
    await __ss_original_initUI();

    injectFoxUiPolish();
    injectMobilePanelFix();
  };

  // ==================== INIT ====================
  async function init() {
    log('🚀 初始化');
    state.husouSettings = loadHusouSettings();
    state.hushenSettings = loadHushenSettings();
    await initUI();
    window.addEventListener('pagehide', cleanup); window.addEventListener('unload', cleanup);
    const initTimer = setTimeout(async () => {
      state._timers.init = null;
      setBeautyStyle(state.currentStyle, state.isExpanded);
      const lid = getCurrentLastMessageId(); if (lid >= 0) await forceRefresh(lid);
      if (state.enabled) { bindEvents(); if (!isStreamingEnabled()) await setStreaming(true); log('✅ 已启用'); } else { log('待开启'); }
      updateBubbleUI();
      log('🎉 完成|', buildStatusText(), '|流式:', state.enabled);
    }, CONFIG.INIT_DELAY);
    state._timers.init = initTimer;
  }

  if (typeof SillyTavern !== 'undefined') init();
  else { const ck = setInterval(() => { if (typeof SillyTavern !== 'undefined') { clearInterval(ck); init(); } }, 500); }
  log('📦 脚本加载完成');
})();

export default CONFIG;