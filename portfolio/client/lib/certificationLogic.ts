import { Certification } from '@/data/certifications';

export type CertStatus = 'valid' | 'expiring_soon' | 'expired' | 'no_expiry';

export function getCertStatus(cert: Certification): CertStatus {
  if (!cert.expiryDate) return 'no_expiry';

  const expiry = new Date(cert.expiryDate);
  const now = new Date();
  const daysUntilExpiry = (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);

  if (daysUntilExpiry < 0) return 'expired';
  if (daysUntilExpiry < 90) return 'expiring_soon';
  return 'valid';
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
    if (a.inProgress && !b.inProgress) return 1;
    if (!a.inProgress && b.inProgress) return -1;

    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    return new Date(b.issuedDate).getTime() - new Date(a.issuedDate).getTime();
  });
}
