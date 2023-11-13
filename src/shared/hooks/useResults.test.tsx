import axios from 'axios';
import mockedResults from '@shared/mocks/results.mock.ts';
import { act, renderHook, waitFor } from '@testing-library/react';
import useResults from '@shared/hooks/useResults.tsx';
import { expect } from 'vitest';
import { vi } from 'vitest';

const mockEndpoint = 'https://cdn.statcdn.com/static/application/search_results.json';

vi.mock('axios');

describe('Use Results hook', () => {
  it('should fetch results and update state', async () => {
    vi.mocked(axios, true).get.mockResolvedValue({
      status: 200,
      data: {
        items: mockedResults,
      },
    });

    const { result } = renderHook(() => useResults(mockEndpoint));

    expect(result.current.results).toEqual([]);
    expect(result.current.searchTerm).toEqual('');

    act(() => {
      result.current.setSearchTerm('test');
    });

    await waitFor(() => {
      expect(result.current.searchTerm).toBe('test');
      expect(result.current.results.length).toBeGreaterThan(1);
    });
  });
});
