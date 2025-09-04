// Placeholder for PDF export
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function exportReport(score: number, level: string, actions: string[]) {
  const doc = {
    content: [
      { text: 'Stop Schermo', style: 'header' },
      { text: `Punteggio: ${score}` },
      { text: `Livello: ${level}` },
      { ul: actions }
    ]
  };
  pdfMake.createPdf(doc).download('report.pdf');
}
