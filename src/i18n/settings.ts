export const fallbackLng = "en"
export const languages = [fallbackLng, "zh-Hant", "zh-CN"]
export const cookieName = 'i18next'
export const defaultNS = 'translation'

// lng = language being used, ns = name space being used
export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}