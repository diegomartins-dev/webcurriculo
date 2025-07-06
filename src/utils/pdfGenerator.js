import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generateProfessionalCV = async (data, progressCallback) => {
  await new Promise(resolve => {
    progressCallback(5);
    setTimeout(resolve, 10);
  });

  // Capturar o conteúdo da página
  const contentElement = document.getElementById('curriculo-content');
  if (!contentElement) {
    throw new Error('Elemento de conteúdo não encontrado');
  }

  await new Promise(resolve => {
    progressCallback(10);
    setTimeout(resolve, 10);
  });

  // Capturar a tela
  const isMobile = window.innerWidth <= 768;
  const scale = isMobile ? 0.8 : 1; // Escala menor no mobile
  
  await new Promise(resolve => {
    progressCallback(15);
    setTimeout(resolve, 10);
  });
  
  const canvas = await html2canvas(contentElement, {
    scale: scale,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
  });

  await new Promise(resolve => {
    progressCallback(35);
    setTimeout(resolve, 10);
  });

  const imgData = canvas.toDataURL("image/jpeg");
  const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  
  // Definir margens (em pontos)
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  const contentHeight = pageHeight - (margin * 2);
  
  await new Promise(resolve => {
    progressCallback(45);
    setTimeout(resolve, 10);
  });
  
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = contentWidth;
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  await new Promise(resolve => {
    progressCallback(55);
    setTimeout(resolve, 10);
  });

  // Calcular quantas páginas serão necessárias
  const pagesNeeded = Math.ceil(pdfHeight / contentHeight);
  
  await new Promise(resolve => {
    progressCallback(60);
    setTimeout(resolve, 10);
  });

  // Gerar páginas do PDF
  for (let i = 0; i < pagesNeeded; i++) {
    if (i > 0) {
      pdf.addPage();
    }

    // Calcular a posição Y para esta página
    const sourceY = i * contentHeight;
    const sourceHeight = Math.min(contentHeight, pdfHeight - sourceY);
    
    // Criar um canvas temporário para esta página
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = canvas.width;
    tempCanvas.height = (sourceHeight * canvas.width) / pdfWidth;

    // Copiar apenas a parte da imagem para esta página
    tempCtx.drawImage(
      canvas, 
      0, (sourceY * canvas.height) / pdfHeight, canvas.width, tempCanvas.height,
      0, 0, canvas.width, tempCanvas.height
    );

    // Converter para imagem
    const pageImgData = tempCanvas.toDataURL("image/png");
    
    // Adicionar ao PDF com margens
    pdf.addImage(
      pageImgData, 
      "PNG", 
      margin, 
      margin, 
      contentWidth, 
      sourceHeight
    );

    // Progresso mais preciso por página com async/await
    const pageProgress = 60 + ((i + 1) / pagesNeeded) * 35;
    await new Promise(resolve => {
      progressCallback(Math.round(pageProgress));
      setTimeout(resolve, 10);
    });
  }

  await new Promise(resolve => {
    progressCallback(100);
    setTimeout(resolve, 10);
  });
  
  return pdf;
};
