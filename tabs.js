(function () {
  function createReadingFictionItem(book) {
    var item = document.createElement('div');
    item.className = 'reading-item reading-fiction-bilingual';
    item.dataset.tabPanel = 'reading-fiction';
    var cover = book.cover
      ? '<div class="reading-cover"><img src="' + book.cover.src + '" alt="' + book.cover.alt + '" loading="lazy" decoding="async" width="' + book.cover.width + '" height="' + book.cover.height + '"></div>'
      : '<div class="reading-cover"><div class="placeholder-cover" aria-label="Fiction cover placeholder"><span>Cover to come</span></div></div>';
    var english = (book.en.title ? '<h2>' + book.en.title + '</h2>' : '')
      + (book.en.author ? '<p class="reading-author">' + book.en.author + '</p>' : '');
    var chinese = (book.zh.title ? '<h2>' + book.zh.title + '</h2>' : '')
      + (book.zh.author ? '<p class="reading-author">' + book.zh.author + '</p>' : '');
    var status = book.status
      ? '<div class="reading-status reading-fiction-tag"><span class="reading-status-dot" aria-hidden="true"></span><span>' + book.status + '</span></div>'
      : '';
    item.innerHTML = '<div class="container">'
      + '<div class="reading-content">'
      + cover
      + '<div class="reading-text reading-bilingual">'
      + '<div class="reading-language reading-language--en">' + status + english + '</div>'
      + '<div class="reading-language reading-language--zh">' + chinese + '</div>'
      + '</div></div></div>';
    return item;
  }

  function createReadingAcademicItem(book) {
    var item = document.createElement('div');
    item.className = 'reading-item';
    item.dataset.tabPanel = 'reading-academic';
    var cover = book.cover
      ? '<div class="reading-cover"><img src="' + book.cover.src + '" alt="' + book.cover.alt + '" loading="lazy" decoding="async" width="' + book.cover.width + '" height="' + book.cover.height + '"></div>'
      : '<div class="reading-cover"><div class="placeholder-cover" aria-label="Academic book cover placeholder"><span>Cover to come</span></div></div>';
    item.innerHTML = '<div class="container">'
      + '<div class="reading-content">'
      + cover
      + '<div class="reading-text">'
      + (book.title ? '<h2>' + book.title + '</h2>' : '')
      + (book.author ? '<p class="reading-author">' + book.author + '</p>' : '')
      + '</div></div></div>';
    return item;
  }

  function initReadingFiction() {
    var main = document.querySelector('main[data-tab-group="reading"]');
    if (!main || main.dataset.readingFictionReady === 'true') return;

    var collection = main.querySelector('#reading-content');
    if (!collection) return;

    main.dataset.readingFictionReady = 'true';
    var academicBooks = [
      {
        title: 'Bacteria to AI',
        author: 'N. Katherine Hayles',
        cover: { src: '/assets/images/reading/bacteria-to-ai.jpg', alt: 'Bacteria to AI by N. Katherine Hayles cover', width: 1050, height: 1575 }
      },
      {
        title: 'Whole-brain modelling',
        author: 'Gustavo Deco &amp; Morten L. Kringelbach',
        cover: { src: '/assets/images/reading/whole-brain-modelling.png', alt: 'Whole-brain modelling by Gustavo Deco and Morten L. Kringelbach cover', width: 674, height: 975 }
      },
      {
        title: 'The Brain Abstracted',
        author: 'M. Chirimuuta',
        cover: { src: '/assets/images/reading/brain-abstracted.png', alt: 'The Brain Abstracted by M. Chirimuuta cover', width: 600, height: 900 }
      },
      {
        title: 'Expanding Senses using Neurotechnology',
        author: 'Ujwal Chaudhary',
        cover: { src: '/assets/images/reading/expanding-senses.png', alt: 'Expanding Senses using Neurotechnology by Ujwal Chaudhary cover', width: 611, height: 949 }
      },
      {
        title: 'Principles of Electrical Neural Interfacing',
        author: 'Liang Guo',
        cover: { src: '/assets/images/reading/electrical-neural-interfacing.png', alt: 'Principles of Electrical Neural Interfacing by Liang Guo cover', width: 611, height: 949 }
      },
      {
        title: 'AI Agents in Action, Second Edition',
        author: 'Micheal Lanham',
        cover: { src: '/assets/images/reading/ai-agents-in-action.jpg', alt: 'AI Agents in Action, Second Edition by Micheal Lanham cover', width: 718, height: 900 }
      },
      {
        title: 'Crafting Interpreters',
        author: 'Robert Nystrom',
        cover: { src: '/assets/images/reading/crafting-interpreters.png', alt: 'Crafting Interpreters by Robert Nystrom cover', width: 2048, height: 2560 }
      }
    ];
    var academicItems = academicBooks.map(createReadingAcademicItem);
    var fictionBooks = [
      {
        en: { title: 'Conversation in the Cathedral', author: 'Mario Vargas Llosa' },
        zh: { title: '酒吧长谈', author: '马里奥·巴尔加斯·略萨' },
        status: 'My Best of the Year ✨',
        cover: { src: '/assets/images/reading/conversation-in-the-cathedral.jpg', alt: 'Conversation in the Cathedral by Mario Vargas Llosa cover', width: 796, height: 1200 }
      },
      {
        en: { title: 'Cloud Atlas', author: 'David Mitchell' },
        zh: { title: '云图', author: '大卫·米切尔' },
        cover: { src: '/assets/images/reading/cloud-atlas.jpg', alt: 'Cloud Atlas by David Mitchell cover', width: 302, height: 450 }
      },
      {
        en: { title: 'number9dream', author: 'David Mitchell' },
        zh: { title: '九号梦', author: '大卫·米切尔' },
        cover: { src: '/assets/images/reading/number9dream.jpg', alt: 'number9dream by David Mitchell cover', width: 292, height: 450 }
      },
      {
        en: { title: 'Human Acts', author: 'Han Kang' },
        zh: { title: '少年来了', author: '韩江' },
        cover: { src: '/assets/images/reading/human-acts.jpg', alt: 'Human Acts by Han Kang cover', width: 292, height: 450 }
      },
      {
        en: { title: 'The Vegetarian', author: 'Han Kang' },
        zh: { title: '素食者', author: '韩江' },
        cover: { src: '/assets/images/reading/the-vegetarian.jpg', alt: 'The Vegetarian by Han Kang cover', width: 1521, height: 2329 }
      },
      {
        en: { title: 'The Tainted Cup', author: 'Robert Jackson Bennett' },
        zh: { title: '', author: '' },
        cover: { src: '/assets/images/reading/tainted-cup.jpg', alt: 'The Tainted Cup by Robert Jackson Bennett cover', width: 301, height: 450 }
      },
      {
        en: { title: 'The Sense of an Ending', author: 'Julian Barnes' },
        zh: { title: '终结的感觉', author: '朱利安·巴恩斯' },
        cover: { src: '/assets/images/reading/sense-of-an-ending.jpg', alt: 'The Sense of an Ending by Julian Barnes cover', width: 305, height: 450 }
      },
      {
        en: { title: 'London Falling', author: 'Patrick Radden Keefe' },
        zh: { title: '', author: '' },
        cover: { src: '/assets/images/reading/london-falling.jpg', alt: 'London Falling by Patrick Radden Keefe cover', width: 309, height: 450 }
      },
      {
        en: { title: 'The Frames Trilogy', author: 'John Banville' },
        zh: { title: '框架三部曲', author: '约翰·班维尔' },
        cover: { src: '/assets/images/reading/frames-trilogy.jpg', alt: 'The Frames Trilogy by John Banville cover', width: 331, height: 500 }
      },
      {
        en: { title: 'The People in the Trees', author: 'Hanya Yanagihara' },
        zh: { title: '林中密族', author: '柳原汉雅' },
        cover: { src: '/assets/images/reading/people-in-the-trees.jpg', alt: 'The People in the Trees by Hanya Yanagihara cover', width: 292, height: 450 }
      },
      {
        en: { title: 'The Last Evenings on Earth', author: 'Roberto Bolaño' },
        zh: { title: '地球上最后的夜晚', author: '罗贝托·波拉尼奥' },
        cover: { src: '/assets/images/reading/last-evenings-on-earth.jpg', alt: 'The Last Evenings on Earth by Roberto Bolaño cover', width: 1624, height: 2422 }
      }
    ];
    var note = document.createElement('div');
    note.className = 'reading-fiction-note';
    note.dataset.tabPanel = 'reading-fiction';
    note.innerHTML = '<div class="container"><p>This is a curated list of books I\'ve read over the past six months.</p></div>';
    var fictionItems = fictionBooks.map(createReadingFictionItem);
    collection.replaceChildren.apply(collection, academicItems.concat([note].concat(fictionItems)));
  }

  function initTabs() {
    document.querySelectorAll('[data-tab-group]').forEach(function (group) {
      if (group.dataset.tabsReady === 'true') return;
      group.dataset.tabsReady = 'true';

      var tabs = Array.from(group.querySelectorAll('[data-tab-target]'));
      var panels = Array.from(group.querySelectorAll('[data-tab-panel]'));
      if (!tabs.length || !panels.length) return;

      function select(target) {
        tabs.forEach(function (tab) {
          var active = tab.dataset.tabTarget === target;
          tab.classList.toggle('is-active', active);
          tab.setAttribute('aria-selected', String(active));
          tab.setAttribute('tabindex', active ? '0' : '-1');
        });

        panels.forEach(function (panel) {
          var visible = panel.dataset.tabPanel === target;
          panel.hidden = !visible;
          panel.setAttribute('aria-hidden', String(!visible));
        });
      }

      tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () {
          select(tab.dataset.tabTarget);
        });

        tab.addEventListener('keydown', function (event) {
          if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
          event.preventDefault();
          var nextIndex = event.key === 'ArrowRight'
            ? (index + 1) % tabs.length
            : (index - 1 + tabs.length) % tabs.length;
          tabs[nextIndex].focus();
          select(tabs[nextIndex].dataset.tabTarget);
        });
      });

      var initial = tabs.find(function (tab) {
        return tab.getAttribute('aria-selected') === 'true';
      }) || tabs[0];
      select(initial.dataset.tabTarget);
    });
  }

  function initLanguageSwitches() {
    document.querySelectorAll('[data-language-group]').forEach(function (group) {
      if (group.dataset.languageReady === 'true') return;
      group.dataset.languageReady = 'true';

      var buttons = Array.from(group.querySelectorAll('[data-language-target]'));
      var panels = Array.from(group.querySelectorAll('[data-language-panel]'));
      if (!buttons.length || !panels.length) return;

      function select(target) {
        buttons.forEach(function (button) {
          var active = button.dataset.languageTarget === target;
          button.classList.toggle('is-active', active);
          button.setAttribute('aria-pressed', String(active));
        });

        panels.forEach(function (panel) {
          panel.hidden = panel.dataset.languagePanel !== target;
        });

        group.querySelectorAll('[data-language-text]').forEach(function (text) {
          text.hidden = text.dataset.languageText !== target;
        });
      }

      var initial = buttons.find(function (button) {
        return button.getAttribute('aria-pressed') === 'true';
      }) || buttons[0];
      select(initial.dataset.languageTarget);
    });

    if (document.documentElement.dataset.languageClicksReady === 'true') return;
    document.documentElement.dataset.languageClicksReady = 'true';
    document.addEventListener('click', function (event) {
      var source = event.target;
      if (!source || typeof source.closest !== 'function') return;
      var button = source.closest('[data-language-target]');
      if (!button) return;
      var group = button.closest('[data-language-group]');
      if (!group) return;

      var target = button.dataset.languageTarget;
      group.querySelectorAll('[data-language-target]').forEach(function (item) {
        var active = item.dataset.languageTarget === target;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      group.querySelectorAll('[data-language-panel]').forEach(function (panel) {
        panel.hidden = panel.dataset.languagePanel !== target;
      });
      group.querySelectorAll('[data-language-text]').forEach(function (text) {
        text.hidden = text.dataset.languageText !== target;
      });
    });
  }

  function init() {
    initReadingFiction();
    initTabs();
    initLanguageSwitches();
  }

  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('astro:page-load', init);
})();
