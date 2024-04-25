'use client'

import { useTranslation } from '@/src/i18n'
import { FooterBase } from './FooterBase'

type FooterProps = { lng: string };
export const Footer = ({ lng }: FooterProps) => {
  const { t } = useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};