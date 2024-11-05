import Loader from './loader';

class AppLoader extends Loader {
    public constructor() {
        super(process.env.API_URL!, {
            apiKey: process.env.API_KEY!,
        });
    }
}

export default AppLoader;
