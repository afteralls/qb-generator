/// <reference types="vite/client" />

export {}

declare module 'vue' {
  export interface ComponentCustomProperties {
    $i18n: LangFunc
  }
}

declare global {
  export interface LangFunc {
    (key: string): string
  }

  export type StandartName = 'EAN 13' | 'EAN 8' | 'CODE 128' | 'ITF 14' | 'MSI' | 'PHARMACODE'
  export type ExportFormat = 'svg' | 'png' | 'jpg'
  export type Mode = 'barcode' | 'qr'

  export interface Standart {
    name: StandartName
    corLength: number
    max: number
    codeName: 'ean13' | 'ean8' | 'code128' | 'itf14' | 'msi' | 'pharmacode'
  }

  export interface SetData {
    mode: Mode
    standart: number
    content: string
    bgColor: string
    codeColor: string
    showData: boolean
    curStandart: Standart
    isCorrect: boolean
    quantity: string
    generated: boolean
    beforeQuanSet: null | number
  }

  export type CurLang = string

  export interface LangProps {
    [key: string]: any
  }
}
