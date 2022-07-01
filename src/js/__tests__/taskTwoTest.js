import getBuffer from '../task2/getBuffer.js';
import ArrayBufferConverter from '../task2/arrayBufferConverter.js';

const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

test('check converter', () => {
  const converter = new ArrayBufferConverter();
  const result = converter.load(getBuffer());
  expect(result.length).toBe(data.length);
  expect(typeof result).toBe(typeof data);
});
