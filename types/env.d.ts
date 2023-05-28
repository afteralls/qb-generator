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

  export interface Standart {
    name: StandartName
    corLength: number
    max: number
    codeName: 'ean13' | 'ean8' | 'code128' | 'itf14' | 'msi' | 'pharmacode'
  }

  export interface SetData {
    content: string
    bgColor: string
    codeColor: string
    showData: boolean | string
    curStandart: Standart
    isCorrect: boolean
    quantity: string | number
    exportFormat: ExportFormat
    exportName: string
    generated: boolean
    beforeQuanSet: null | number
  }

  export type CurLang = string

  export interface LangProps {
    [key: string]: any
  }
}
