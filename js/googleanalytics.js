window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
Promise.all([
    new Promise((resolve) => {
        var script = document.createElement('script');
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-PBG6GRZBM1";
        script.async = true;
        document.head.appendChild(script);
        resolve();
    }), 
    new Promise((resolve) => {
        gtag('js', new Date());
      
        gtag('config', 'G-PBG6GRZBM1');
        resolve();
    })
]);