import JSZip from 'jszip'
import { saveAs } from 'file-saver'

export function getSvgs () {
  const zip = new JSZip()
  for (let i = 1; i <= this.count; i++) {
    zip.file(`Barcode-${i}.svg`, new Blob([document.querySelector(`[data-num="${i}"]`).outerHTML], { type: 'image/svg+xml' }))
  }

  zip.generateAsync({ type: 'blob' }).then(function (content) {
    saveAs(content, 'svgs.zip')
  })
}