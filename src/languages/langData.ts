interface LangProps {
  [key: string]: any
}

export default {
  en: {
    links: {
      git: 'Link to source code',
      telegram: 'My Telegram account',
      mail: 'My E-Mail'
    },
    route: {
      home: 'Home | QB Generator',
      generator: 'Generator',
      library: 'Library',
      notFound: 'You are lost!'
    },
    notf: {
      numOnlyErr: 'Only digit input is available',
      numLetErr: 'Only numbers and latin characters are available',
      numLetSpErr: 'Only numbers, latin characters and # are available',
      pharmaErr: 'Number out of range'
    },
    header: {
      gtHome: 'Go to home page',
      tL: 'Activate Light theme',
      tD: 'Activate Dark theme',
      lang: 'Switch to Russian',
      link: 'Show links'
    },
    home: {
      desc: 'Create QR and Barcodes in a couple of clicks in your own design, use the desired standard and export in the desired format. Save templates, share and use them at any time.',
      gtGen: 'Go to Generator',
      tipTitle: 'The templates you create will appear in this section, try creating the first one!',
      tipDesc: 'Just generate several types of barcodes and the system will prompt you to save the settings.',
      libTitle: 'Not sure which barcode format you need?',
      libDesc: 'You can see the formats available for generation and choose the one that suits your needs best.',
      gtLib: 'Learn more',
      libLinkTitle: 'Learn more about barcode standards'
    },
    template: {
      name: 'Name',
      desc: 'Description',
      exName: 'My Template',
      exDesc: 'Important info (or not...)',
      create: 'Create a new template',
      share: 'Share',
      delete: 'Delete'
      // shareTitle: 'Hey...',
      // shareDesc: 'Look what barcode I managed to create!',
    },
    generator: {
      cBarcode: 'Create Barcode',
      cQr: 'Create Qr',
      barcode: 'Barcode',
      preview: 'Preview',
      previewInfo: "This window is a preview for your barcodes, but you haven't generated them yet...",
      set: {
        content: 'Content',
        quantity: 'Quantity',
        example: 'Example',
        invalid: 'Enter valid content',
        bg: 'Background color',
        bg_ph: "'#30d5c8' or 'transparent'",
        showTxt: 'Show text / code',
        color: 'Code color',
        color_ph: "'#000000' or 'black'",
      },
      export: {
        tip: 'Generate before export',
        format: 'Export format',
        generate: 'Generate',
        fileName: 'File name',
        arcName: 'Archive name (.zip)',
        actions: 'Actions',
        downloadBtn: 'Download',
        saveTempBtn: 'Save'
      },
      modal: {
        tempName: 'Template Name',
        tempName_ph: 'Name (12)',
        tempDesc: 'Template Description',
        tempDesc_ph: 'Important info (or not...)',
        cancelBtn: 'Cancel',
        saveBtn: 'Save',
      },
      qr: {
        content: 'Anything...',
        tipTitle: 'QR is a two-dimensional barcode that is read by imaging devices.',
        tipDesc: 'This abbreviation means "quick response" (Quick Response). The main feature of the code is that it provides instant access to a large amount of information.'
      }
    },
    library: {
      title: 'Library',
      info: 'Barcode is an image in which information about a product, manufacturer or buyer is encrypted. Used all over the world. A combination of black lines, spaces between them and numbers.',
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
          ph: 'Digits (12)',
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
          ph: 'Digits (7)',
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
          ph: 'Text (50)',
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
          ph: 'Digits (13)',
          import: 'itf14'
        },
        msi: {
          name: 'MSI',
          desc: 'The code can display only the number 0-9 and has no fixed length. Today this type of code is outdated and is no longer used. Because of this most barcode scanners can not recognize this type of code.',
          info: [
            'Can display only the number 0-9.'
          ],
          ph: 'Digits (50)',
          import: 'msicode'
        },
        pharmacode: {
          name: 'PHARMACODE',
          desc: 'Pharmaceutical Binary Code is a barcode standard, used in the pharmaceutical industry as a packing control system. It is designed to be readable despite printing errors',
          info: [
            'Pharmacode can represent only a single integer from 3 to 131 070.',
            'The minimum barcode is 2 bars and the maximum 16.'
          ],
          ph: '3 — 131 070',
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
    links: {
      git: 'Ссылка на исходный код',
      telegram: 'Мой Telegram аккаунт',
      mail: 'Мой E-Mail',
    },
    route: {
      home: 'Главная | QB Generator',
      generator: 'Генератор',
      library: 'Библиотека',
      notFound: 'Вы потерялись!'
    },
    notf: {
      numOnlyErr: 'Доступен только ввод цифр',
      numLetErr: 'Доступен только ввод цифр и латинских символов',
      numLetSpErr: 'Доступен только ввод цифр, латинских символов и #',
      pharmaErr: 'Число за пределами допустимого диапазона'
    },
    header: {
      gtHome: 'Вернуться на главную',
      tL: 'Активировать Светлую тему',
      tD: 'Активировать Тёмную тему',
      lang: 'Переключиться на Английский',
      link: 'Показать ссылки'
    },
    home: {
      desc: 'Создавайте QR и штрихкоды за пару кликов в своём собственном дизайне. Сохраняйте шаблоны, делитесь ими и используйте в любое время.',
      gtGen: 'Перейти к Генератору',
      tipTitle: 'Шаблоны, которые вы создадите, будут попадать в эту секцию. Попробуйте разработать первый!',
      tipDesc: 'Просто сгенерируйте необходимый стандарт, добавьте нужные настройки и система позволит вам сохранить результат.',
      libTitle: 'Не уверены какой стандарт вам нужен?',
      libDesc: 'Вы можете просмотреть доступные стандарты для генерации и выбрать наиболее подходящий под ваши нужды.',
      gtLib: 'Подробнее',
      libLinkTitle: 'Узнайте больше о стандартах штрихкодов'
    },
    template: {
      name: 'Название',
      desc: 'Описание',
      exName: 'Пример названия',
      exDesc: 'Пример описания',
      create: 'Создать новый шаблон',
      share: 'Поделиться',
      delete: 'Удалить'
      // shareTitle: 'Эй...',
      // shareDesc: 'Посмотри, какой штрихкод мне удалось создать!',
    },
    generator: {
      cBarcode: 'Создать Штрихкод',
      cQr: 'Создать Qr',
      barcode: 'Штрихкод',
      preview: 'Предпросмотр',
      previewInfo: "Данное окно — превью для ваших штрихкодов, но вы их пока не сгенерировали...",
      set: {
        content: 'Содержание',
        quantity: 'Количество',
        example: 'Пример',
        invalid: 'Введите корректное содержание',
        bg: 'Цвет заднего фона',
        bg_ph: "'#30d5c8' или 'transparent'",
        showTxt: 'Показать текст / код',
        color: 'Цвет штрихкода',
        color_ph: "'#000000' или 'black'"
      },
      export: {
        tip: 'Сгенерируйте перед экспортом',
        format: 'Формат экспорта',
        generate: 'Генерировать',
        fileName: 'Название файла',
        arcName: 'Название архива (.zip)',
        actions: 'Действия',
        downloadBtn: 'Скачать',
        saveTempBtn: 'Сохранить'
      },
      modal: {
        tempName: 'Название шаблона',
        tempName_ph: 'Название (12)',
        tempDesc: 'Описание шаблона',
        tempDesc_ph: 'Что-то важное (или нет...)',
        saveBtn: 'Сохранить',
        cancelBtn: 'Отменить'
      },
      qr: {
        content: 'Всё, что угодно...',
        tipTitle: 'QR — это двумерный штрихкод, который считывается устройствами обработки изображений.',
        tipDesc: 'Эта аббревиатура означает «быстрый отклик» (Quick Response). Главная особенность кода в том, что он предоставляет мгновенный доступ к большому объёму информации.'
      }
    },
    library: {
      title: 'Библиотека',
      info: 'Штрихкод — изображение, в котором зашифрована информация о товаре, производителе или покупателе. Используется по всему миру. Сочетание чёрных линий, промежутков между ними и цифр.',
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
          ph: 'Числа (12)',
          import: 'ean13'
        },
        ean8: {
          name: 'EAN 8',
          desc: 'Был введен для использования на небольших упаковках, где штрихкод EAN-13 был бы слишком большим; например, на сигаретах, карандашах и пачках жевательной резинки.',
          info: [
            'Первые 3 цифры – код страны-производителя товара.',
            'Затем, 4 цифры – порядковый номер продукта.',
            'Последняя цифра — контрольная, вычисляется автоматически.'
          ],
          ph: 'Числа (7)',
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
          ph: 'Текст (50)',
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
          ph: 'Числа (13)',
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
          ph: 'Числа (50)',
          import: 'msicode'
        },
        pharmacode: {
          name: 'PHARMACODE',
          desc: 'Фармацевтической двоичный код — стандарт штрихового кода, используемый в фармацевтической промышленности в качестве системы контроля упаковок. Может быть читаемым, даже несмотря на ошибки при печати.',
          info: [
            'Может представляться только одним целым числом от 1 до 131 070.',
            'Минимальная длина штрихкода — 1 узкая полоса и максимальная — 16 широких.'
          ],
          ph: '3 — 131 070',
          import: 'pharmacode'
        }
      }
    },
    notfound: {
      title: 'Кажется, вас здесь быть не должно...',
      btn: 'На главную',
      linkTitle: 'Вернуться на главную страницу'
    }
  }
} as LangProps
