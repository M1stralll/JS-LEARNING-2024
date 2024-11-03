import AppLoader from './appLoader';

interface NewsData {
    source: { name: string };
    title: string;
    description: string;
    urlToImage?: string;
    url: string;
    author?: string | null;
    publishedAt?: string;
}

interface SourceInfo {
    id: string;
    name: string;
}


class AppController extends AppLoader {
    getSources(callback: (data: SourceInfo) => void) {
        super.getResp(
            {
                endpoint: 'sources',
                options: {}
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: NewsData) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
