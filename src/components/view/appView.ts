import News from './news/news';
import Sources from './sources/sources';

interface SourceInfo {
    name: string;
    id: string;
}

interface NewsInfo {
    urlToImage: string | null;
    author: string | null;
    publishedAt: string;
    title: string;
    source: {
        name: string;
    };
    description: string;
    url: string;
}

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: { articles: NewsInfo[] }) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: { sources: SourceInfo[] }) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
