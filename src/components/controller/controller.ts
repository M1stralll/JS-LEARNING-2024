import AppLoader from './appLoader';


export interface SourceInfo {
    id: string;
    name: string;
}
interface NewsInfo {
    source: { name: string };
    title: string;
    urlToImage: string;
    author: string | null;
    publishedAt: string;
    description: string;
    url: string;
}


class AppController extends AppLoader {
    
    public getSources(callback: (data: SourceInfo[]) => void) {
        super.getResp(
            {
                endpoint: 'sources',
                options: {}
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: NewsInfo[]) => void) {
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
