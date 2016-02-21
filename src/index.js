import numeral from 'numeral'
import memoize from 'lodash.memoize'
import allArgsToString from 'all-args-to-string'

export default memoize((input, outputFormat) => numeral(input).format(outputFormat), allArgsToString)
