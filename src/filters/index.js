export default Vue => {
  Vue.filter('localeDate', (date, options = {}) => {
    const locale = options.locale || Vue.i18n.locale()
    const formattingOptions = options.format || {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }

    if (options.withDay) {
      formattingOptions.weekday = options.withDay === true ? 'short' : options.withDay
    }

    if (date.toLocaleDateString === undefined) {
      date = new Date(date)
    }

    return date.toLocaleDateString(locale, formattingOptions)
  })

  Vue.filter('localeTime', (date, options = {}) => {
    const locale = options.locale || Vue.i18n.locale()
    const formattingOptions = options.format || {hour: 'numeric', minute: 'numeric'}

    if (options.withSeconds) {
      formattingOptions.second = 'numeric'
    }

    if (date.toLocaleDateString === undefined) {
      date = new Date(date)
    }

    return date.toLocaleTimeString(locale, formattingOptions)
  })

  Vue.filter('currency', value => {
    value = parseFloat(value) / 100
    return Vue.i18n.formatCurrency(value)
  })
}
