import { Certification } from '@/data/certifications';

export type CertStatus = 'featured' | 'standard';

export function getCertStatus(cert: Certification): CertStatus {
  return cert.featured ? 'featured' : 'standard';
}

export function groupCertsByDomain(certs: Certification[]) {
  return certs.reduce((acc, cert) => {
    if (!acc[cert.category]) acc[cert.category] = [];
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, Certification[]>);
}

export function rankCerts(certs: Certification[]): Certification[] {
  return [...certs].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    const aYear = a.year || 0;
    const bYear = b.year || 0;
    if (aYear !== bYear) return bYear - aYear;
    const aMonth = a.month || 0;
    const bMonth = b.month || 0;
    return bMonth - aMonth;
  });
}
