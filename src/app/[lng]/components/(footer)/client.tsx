'use client'

import { useTranslation } from '@/src/i18n/client'
import { FooterBase } from './FooterBase'

type FooterProps = { lng: string };
export const Footer = ({ lng }: FooterProps) => {
  const { t } = useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
}