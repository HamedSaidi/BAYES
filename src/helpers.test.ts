import { parseDate } from './helpers';

it('should parse tournament date to the proper format', () => {
  const entry = '2019-06-01 00:00:00Z0000'
  const result = parseDate(entry)

  const expectedResult = 'Jun 1st, 2019'

  expect(result).toEqual(expectedResult)
});

it('should parse series date to the proper format', () => {
  const entry = '2019-06-01'
  const result = parseDate(entry)

  const expectedResult = 'Jun 1st, 2019'

  expect(result).toEqual(expectedResult)
});
