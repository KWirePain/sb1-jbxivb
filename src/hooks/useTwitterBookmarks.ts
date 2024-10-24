import { useState, useEffect } from 'react';
import { twitterService } from '../lib/twitter';
import type { Bookmark } from '../types';

export function useTwitterBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchBookmarks() {
      try {
        setIsLoading(true);
        const data = await twitterService.getBookmarks();
        if (mounted) {
          setBookmarks(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to fetch bookmarks. Please check your Twitter API token.');
          console.error('Error fetching bookmarks:', err);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    fetchBookmarks();

    return () => {
      mounted = false;
    };
  }, []);

  return { bookmarks, isLoading, error };
}