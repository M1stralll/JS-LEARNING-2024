import News from './news/news';
import Sources from './sources/sources';
import {NewsInfo} from './news/news';

interface SourceInfo {
    name: string;
    id: string;
}

export class AppView {
    news: News;
    sources: Sources;

    public constructor() {
        this.news = new News();
        this.sources = new Sources();
}

    public drawNews(data: NewsInfo[]) {
        const values = data?? [];
        this.news.draw(values);
    }

    public drawSources(data: SourceInfo[]) {
        const values = data?? [];
        this.sources.draw(values);
    }
}


export default AppView;
