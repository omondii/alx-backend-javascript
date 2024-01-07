import { taskBlock } from '../1-block-scoped'

describe('testBlock', () => {
    it('returns [false, true]', () => {
        const result = taskBlock;
        expect(result).toEqual([false, true])
    });
});