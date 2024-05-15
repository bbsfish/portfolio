/**
 * Articles を取得
 * @returns {{ id: number, post_type: 'Article', title: string, 
 * slug: string, comments_count: number, liked_count: number, body_letters_count: number,
 * article_type: string, emoji: string, is_suspending_private: boolean,
 * published_at: datetime<2024-02-07T04:03:39.393+09:00>,
 * body_updated_at: datetime<2024-02-07T04:03:39.393+09:00>,
 * source_repo_updated_at: null, pinned: boolean, path: '/bbsfish/articles/1813f1fdd71898', 
 * user: [Object], publication: null }[]}
 */
const getArticles = async () => {
	const response = await fetch('https://zenn.dev/api/articles?username=bbsfish&order=latest');
	const data = await response.json();
  console.debug('[ZennAPI] Fetch articles (length=%d)', data.length);
  return data;
}

export {
  getArticles,
};
