import { ObjectTreeNode } from '../../src/utils/object-tree-node';

describe('Unit | Utility | object tree node', () => {
  it('it returns value', () => {
    const result = new ObjectTreeNode({ name: 'z' }, { name: 'b' }, { name: 'c' });

    expect(result.value).toEqual({ name: 'z' });
    expect(result.proxy.name).toBe('z');
    expect(result.changes).toEqual({ name: 'b' });
    expect(result.content).toEqual({ name: 'c' });
  });

  it('it returns nested children', () => {
    const result = new ObjectTreeNode(
      { details: { name: 'z' } },
      { details: { name: 'b' } },
      { details: { name: 'c' } }
    );

    expect(result.value).toEqual({ details: { name: 'z' } });
    const expectedDetails = {
      changes: undefined,
      children: undefined,
      content: undefined,
      proxy: undefined,
      safeGet: undefined,
      value: undefined
    };
    expect(result.proxy.details).toEqual(expectedDetails);
    const details = result.proxy.details;
    expect(details.name).toBe('z');
    expect(result.proxy.details.name).toBe('z');
    expect(result.changes).toEqual({ details: { name: 'b' } });
    expect(result.content).toEqual({ details: { name: 'c' } });
  });
});