import Link from 'next/link'
import { TFunction } from 'i18next'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '@/src/i18n/settings'

type FooterBaseProps = {
  t: ((key: string) => string) & TFunction<"translation", undefined>;
  lng: string;
};
export const FooterBase = ({ t, lng }: FooterBaseProps) => {
  return (
    <div className="text-gray-60 text-sm text-center">
      <Trans i18nKey="languageSwitcher" t={t} values={{ lng }}>
        Switch from <strong>{lng}</strong> to:
      </Trans>
      {languages
        .filter(l => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </div>
  );
};