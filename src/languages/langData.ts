export default {
  en: {
    route: {
      home: 'Home | QB Generator',
      generator: 'Generator',
      library: 'Library',
      notFound: 'You are lost!'
    },
    header: {
      tL: 'Activate Light theme',
      tD: 'Activate Dark theme',
      lang: 'Switch to Russian',
      git: 'Link to source code',
      telegram: 'My Telegram account',
      home: 'Go to home page',
      mail: 'My E-Mail',
      link: 'Show links'
    },
    home: {
      desc: 'Create Barcodes in a couple of clicks in your own design, use the desired standard and export in the desired format. Save templates, share and use them at any time.',
      gtGen: 'Go to Generator',
      create: 'Create a new template',
      noDesc: 'No description',
      tipTitle: 'The templates you create will appear in this section, try creating the first one!',
      tipDesc: 'Just generate several types of barcodes and the system will prompt you to save the settings',
      name: 'Name',
      sdesc: 'Description',
      date: 'Date',
      new: 'Create a new template',
      temp: 'Go to template',
      shareTitle: 'Hey...',
      shareDesc: 'Look what barcode I managed to create!',
      libTitle: 'Not sure which barcode format you need?',
      libDesc: 'You can see the formats available for generation and choose the one that suits your needs best.',
      gtLib: 'Learn more',
      libLinkTitle: 'Learn more about barcode standards'
    },
    generator: {
      settings: {
        content: 'Content',
        quantity: 'Quantity',
        quan_plh: 'Digits (2000)',
        example: 'Example',
        invalid: 'Enter valid content',
        bg: 'Background color',
        bg_plh: "'#ffffff' or 'transparent'",
        showTxt: 'Show text / code',
        color: 'Code color',
        color_plh: "'#000000' or 'black'",
        export: {
          name: 'Export Format',
          generate: 'Generate',
          fileName: 'File Name',
          arcName: 'Archive Name (.zip)',
          downloadBtn: 'Download',
          saveTempBtn: 'Save'
        }
      },
      preview: {
        prev: 'Preview',
        info: "This window is a preview for your barcodes, but you haven't generated them yet...",
        code: 'Barcode'
      },
      modal: {
        name: 'Name',
        desc: 'Description',
        exName: 'Example Name',
        exDesc: 'Example Description',
        tempName: 'Template Name',
        tempName_ph: 'Name (12)',
        tempDesc: 'Template Description',
        temDesc_ph: 'Important info (or not...)',
        saveBtn: 'Save',
        cancelBtn: 'Cancel'
      }
    },
    library: {
      desc: 'Description',
      structure: 'Structure',
      standarts: {
        ean13: {
          name: 'EAN 13',
          desc: 'The European Article Number is a standard to encode product numbers. The EAN is a special case of a Global Trade Item Number.',
          info: [
            'Country-specific part: 1-3 digits.',
            'Company part.',
            'Article number: 4-5 digits.',
            'Checksum digit.'
          ],
          placeholder: 'Digits (12)',
          import: 'ean13'
        },
        ean8: {
          name: 'EAN 8',
          desc: 'The normal length of an EAN is 13 digits. There is also a shorter version called EAN-8, for small packages, where the full 13-digit number would take too much space on the package.',
          info: [
            'Country-specific part: 2-3 digits.',
            'Article number: 4-5 digits.',
            'Checksum digit.'
          ],
          placeholder: 'Digits (7)',
          import: 'ean8'
        },
        code128: {
          name: 'CODE 128',
          desc: "is a high-density linear barcode symbology defined in ISO/IEC. It's used for alphanumeric or numeric-only barcodes.",
          info: [
            'Start symbol.',
            'Encoded data.',
            'Check symbol.',
            'Stop symbol.'
          ],
          placeholder: 'Text (50)',
          import: 'code128'
        },
        itf14: {
          name: 'ITF 14',
          desc: 'ITF-14 is the GS1 implementation of an Interleaved 2 of 5 (ITF) bar code to encode a Global Trade Item Number. ITF-14 symbols are generally used on packaging levels of a product, such as a case box of 24 cans of soup. The ITF-14 will always encode 14 digits.',
          info: [
            'Packaging indicator.',
            'The next 12 digits are representing the product number.',
            'Checksum digit.'
          ],
          placeholder: 'Digits (13)',
          import: 'itf14'
        },
        msi: {
          name: 'MSI',
          desc: 'The code can display only the number 0-9 and has no fixed length. Today this type of code is outdated and is no longer used. Because of this most barcode scanners can not recognize this type of code.',
          info: [
            'Can display only the number 0-9.'
          ],
          placeholder: 'Digits (50)',
          import: 'msicode'
        },
        pharmacode: {
          name: 'PHARMACODE',
          desc: 'Pharmaceutical Binary Code is a barcode standard, used in the pharmaceutical industry as a packing control system. It is designed to be readable despite printing errors',
          info: [
            'Pharmacode can represent only a single integer from 3 to 131 070.',
            'The minimum barcode is 2 bars and the maximum 16.'
          ],
          placeholder: 'Digits (3 — 131 070)',
          import: 'pharmacode'
        }
      }
    },
    notfound: {
      title: "Seems like you weren't supposed to be here...",
      btn: 'Go to Home',
      linkTitle: 'Go to Home page'
    }
  },
  ru: {
    route: {
      home: 'Главная | QB Generator',
      generator: 'Генератор',
      library: 'Библиотека',
      notFound: 'Вы потерялись!'
    },
    header: {
      tL: 'Активировать Светлую тему',
      tD: 'Активировать Тёмную тему',
      lang: 'Переключиться на Английский',
      git: 'Ссылка на исходный код',
      telegram: 'Мой Telegram аккаунт',
      home: 'Вернуться на главную',
      mail: 'Мой E-Mail',
      link: 'Показать ссылки'
    },
    home: {
      desc: 'Создавайте штрих-коды за пару кликов в своём собственном дизайне. Сохраняйте шаблоны, делитесь ими и используйте в любое время.',
      gtGen: 'Перейти к Генератору',
      create: 'Создать новый шаблон',
      noDesc: 'Нет описания',
      tipTitle: 'Шаблоны, которые вы создадите, будут попадать в эту секцию. Попробуйте разработать первый!',
      tipDesc: 'Просто сгенерируйте необходимый стандарт, добавьте нужные настройки и система позволит вам сохранить результат',
      name: 'Название',
      cdesc: 'Описание',
      date: 'Дата',
      new: 'Создать новый шаблон',
      temp: 'Перейти к шаблону',
      shareTitle: 'Эй...',
      shareDesc: 'Посмотри, какой штрих-код мне удалось создать!',
      libTitle: 'Не уверены какой стандарт вам нужен?',
      libDesc: 'Вы можете просмотреть доступные стандарты для генерации и выбрать наиболее подходящий под ваши нужды.',
      gtLib: 'Подробнее',
      libLinkTitle: 'Узнайте больше о стандартах штрих-кодов'
    },
    generator: {
      settings: {
        content: 'Содержание',
        quantity: 'Количество',
        quan_plh: 'Числа (2000)',
        example: 'Пример',
        invalid: 'Введите корректное содержание',
        bg: 'Цвет заднего фона',
        bg_plh: "'#ffffff' или 'transparent'",
        showTxt: 'Показать текст / код',
        color: 'Цвет штрих-кода',
        color_plh: "'#000000' или 'black'",
        export: {
          name: 'Формат экспорта',
          generate: 'Генерировать',
          fileName: 'Название файла',
          arcName: 'Название архива (.zip)',
          downloadBtn: 'Скачать',
          saveTempBtn: 'Сохранить'
        }
      },
      preview: {
        prev: 'Предпросмотр',
        info: "Данное окно — превью для ваших штрих-кодов, но вы их пока не сгенерировали...",
        code: 'Barcode'
      },
      modal: {
        name: 'Название',
        desc: 'Описание',
        exName: 'Пример названия',
        exDesc: 'Пример описания',
        tempName: 'Название шаблона',
        tempName_ph: 'Название (12)',
        tempDesc: 'Описание шаблона',
        temDesc_ph: 'Что-то важное (или нет...)',
        saveBtn: 'Сохранить',
        cancelBtn: 'Отменить'
      }
    },
    library: {
      desc: 'Описание',
      structure: 'Структура',
      standarts: {
        ean13: {
          name: 'EAN 13',
          desc: 'European Article Number — европейский стандарт штрихкода, предназначенный для кодирования идентификатора товара и производителя.',
          info: [
            'Первые 2-3 цифры – код страны-производителя товара.',
            'Следующие 4-6 цифр – это регистрационный номер компании.',
            'Далее, 3-5 цифр – порядковый номер продукта.',
            'Последняя цифра — контрольная, вычисляется автоматически.'
          ],
          placeholder: 'Числа (12)',
          import: 'ean13'
        },
        ean8: {
          name: 'EAN 8',
          desc: 'Был введен для использования на небольших упаковках, где штрих-код EAN-13 был бы слишком большим; например, на сигаретах, карандашах и пачках жевательной резинки.',
          info: [
            'Первые 3 цифры – код страны-производителя товара.',
            'Затем 4 цифры – порядковый номер продукта.',
            'Последняя цифра — контрольная, вычисляется автоматически.'
          ],
          placeholder: 'Числа (7)',
          import: 'ean8'
        },
        code128: {
          name: 'CODE 128',
          desc: "Штриховой код Code 128 включает в себя 107 символов, из которых 103 символа данных, 3 стартовых и 1 остановочный (стоп) символ.",
          info: [
            'Стартовый символ (Start).',
            'Кодированная информация.',
            'Проверочный символ (контрольный знак).',
            'Остановочный (Stop) символ.'
          ],
          placeholder: 'Текст (50)',
          import: 'code128'
        },
        itf14: {
          name: 'ITF 14',
          desc: 'Штрих код ITF-14 разработан специально для транспортной упаковки. Он создаётся на основе кодов EAN-8 или EAN-13 и дополнительно несёт в себе один символ «тип упаковки», которым кодируется вариант упаковки.',
          info: [
            'Первая цифра показывает тип упаковки.',
            'Группа далее (12 цифр) – код стандарта EAN 13.',
            'Последняя цифра — контрольная, вычисляется автоматически.'
          ],
          placeholder: 'Числа (13)',
          import: 'itf14'
        },
        msi: {
          name: 'MSI',
          desc: 'Это непрерывная символика, которая не поддается самоконтролю. MSI используется в основном для управления запасами, маркировки контейнеров и полок на складах.',
          info: [
            'Представляет собой только цифры 0–9.',
            'Не поддерживает буквы и символы.',
            'Каждая цифра преобразуется в 4 двоично-десятичный код.'
          ],
          placeholder: 'Числа (50)',
          import: 'msicode'
        },
        pharmacode: {
          name: 'PHARMACODE',
          desc: 'Фармацевтической двоичный код — стандарт штрихового кода, используемый в фармацевтической промышленности в качестве системы контроля упаковок. Может быть читаемым, даже несмотря на ошибки при печати.',
          info: [
            'Может представляться только одним целым числом от 1 до 131 070.',
            'Минимальная длина штрихкода — 1 узкая полоса и максимальная — 16 широких.'
          ],
          placeholder: 'Числа (3 — 131 070)',
          import: 'pharmacode'
        }
      }
    },
    notfound: {
      title: 'Кажется, что вас здесь быть не должно...',
      btn: 'На главную',
      linkTitle: 'Вернуться на главную страницу'
    }
  }
} as LangProps
