class ResourceLoader {
    static async loadCSS(language = 'en', isMobile = false) {
        return new Promise(((resolve, reject) => {
            const cacheBust = `date=${Date.now()}`;
            const platformPath = (isMobile ? 'mobile' : 'desktop');
            const linkElement = document.createElement('link');

            linkElement.rel = 'stylesheet';
            linkElement.href = `/static-assets/form-validation-problem/resources/css/${platformPath}/${language}.css?${cacheBust}`;
            linkElement.onload = resolve;
            linkElement.onerror = (error) => {
                console.warn('>>>>>>>>[ResourceLoader] loadCSS failed: ', error);
                reject(error);
            };

            document.head.appendChild(linkElement);
        }));
    }
}

export default ResourceLoader;
