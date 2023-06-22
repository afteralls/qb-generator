/// <reference types="vite/client" />

export {}

type StandartName = 'EAN 13' | 'EAN 8' | 'CODE 128' | 'ITF 14' | 'MSI' | 'PHARMACODE'
type CodeName = 'ean13' | 'ean8' | 'code128' | 'itf14' | 'msi' | 'pharmacode'

declare global {
  export interface LangFunc {
    (key: string): string
  }

  export type ExportFormat = 'svg' | 'png' | 'jpg'
  export type Mode = 'barcode' | 'qr'

  
  export interface Template {
    mode?: Mode
    idx?: number
    name?: string
    desc?: string
    href?: string
    path?: string
    date?: string
  }

  export interface Standart {
    name: StandartName
    corLength: number
    max: number
    codeName: CodeName
  }

  export interface BarcodeData {
    standart: number
    content: string
    bgColor: string
    codeColor: string
    showData: boolean
    curStandart: Standart
    isCorrect: boolean
    quantity: string
    generated: boolean
    beforeQuanSet: number | null
  }
}

declare module 'vue' {
  export interface ComponentCustomProperties {
    $i18n: LangFunc
  }
}
