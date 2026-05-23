import { COMPANY } from '../data/site';

export const buildWhatsAppLink = (message = '') => {
  const text = encodeURIComponent(message || 'Hi Comfort Packers, I want a quote for moving from Chennai.');
  return `https://wa.me/${COMPANY.whatsapp}?text=${text}`;
};

export const buildEnquiryMessage = (form) => {
  const lines = [
    '*New Enquiry — Comfort Packers and Movers*',
    '',
    `*Name:* ${form.name || '-'}`,
    `*Phone:* ${form.phone || '-'}`,
    `*Email:* ${form.email || '-'}`,
    `*Moving From:* ${form.from || 'Chennai'}`,
    `*Moving To:* ${form.to || '-'}`,
    `*Preferred Date:* ${form.date || '-'}`,
    `*Service:* ${form.service || '-'}`,
    '',
    '*Details:*',
    form.details || '-',
  ];
  return lines.join('\n');
};

export const telLink = `tel:+91${COMPANY.phone}`;
