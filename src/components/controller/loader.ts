interface LoaderInfo {
    endpoint: string; 
    options: { [key: string]: string | number };
}

class Loader {
    public baseLink: string;
    public options: { [key: string]: string | number };

    public constructor(baseLink: string, options: { [key: string]: string | number }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: LoaderInfo,
        callback: (data: unknown) => void
    ) {
        this.load('GET', endpoint, callback, options);
    }

    public errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    public makeUrl(options: { [key: string]: string | number }, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    public load(method: string, endpoint: string, callback: (data: unknown) => void, options: { [key: string]: string | number } = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
