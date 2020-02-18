
import segregateData from './segregateData';

describe('the segregate data function', () => {
  it('should return an array', () => {
    const mockrecords = [{
      id: '01a53dd3-ed7d-4d5f-9fca-1439f75ef85f',
      externalId: '7cflqPPi3zWfLFRRBTWeh6',
      name: 'talk is overrated',
      albumName: 'idle',
      albumArtUrl: 'https://i.scdn.co/image/8709ede20bfdd04eb422a6900b35c90b3903cdc3',
      userId: '23a4fe42-54e8-4963-af5b-0e50f90c44b3',
      artists: [
        'Jeremy Zucker',
        'blackbear',
      ],
      genres: [
        'pop',
      ],
    }];
    const result = segregateData(mockrecords, 'pop');
    expect(result).toBeInstanceOf(Array);
  });
});
