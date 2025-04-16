//FOLHA DE ESTILO DESCONTINUADA

// Rastrear cliques em <a>, <button>, <input type="button"> e <input type="submit">
document.addEventListener("click", function (event) {
    let target = event.target;

    while (target && target !== document) {
        if (
            target.tagName === "A" ||
            target.tagName === "BUTTON" ||
            (target.tagName === "INPUT" && (target.type === "button" || target.type === "submit"))
        ) {
            window.dataLayer.push({
                event: "click",
                "gtm.element": target,
                "gtm.elementClasses": target.className || null,
                "gtm.elementId": target.id || null,
                "gtm.elementTarget": target.target || null,
                "gtm.elementUrl": target.href || null,
                "gtm.clickText": target.innerText || target.value || null,
                "gtm.clickType": target.tagName,
                "gtm.isMobile": window.innerWidth < 768,
                "gtm.timestamp": Date.now(),
                "gtm.pagePath": window.location.pathname,
                "gtm.pageUrl": window.location.href,
                "gtm.pageHost": window.location.hostname,
                "gtm.referrer": document.referrer,
                "gtm.language": navigator.language,
                "gtm.timezone": Intl.DateTimeFormat().resolvedOptions().timeZone,
                "gtm.userAgent": navigator.userAgent
            });
            break;
        }
        target = target.parentNode;
    }
});

// Rastrear envio de formulário
document.addEventListener("submit", function (event) {
    const form = event.target;

    const nome = form.querySelector("#nome")?.value || null;
    const empresa = form.querySelector("#empresa")?.value || null;
    const telefone = form.querySelector("#telefone")?.value || null;
    const email = form.querySelector("#email")?.value || null;

    window.dataLayer.push({
        event: "form_submit",
        "gtm.element": form,
        "gtm.elementId": form.id || null,
        "gtm.elementClasses": form.className || null,
        "gtm.formAction": form.action || null,
        "gtm.pageUrl": window.location.href,
        "gtm.pagePath": window.location.pathname,
        "gtm.pageHost": window.location.host,
        "gtm.referrer": document.referrer,
        "gtm.language": navigator.language,
        "gtm.timezone": Intl.DateTimeFormat().resolvedOptions().timeZone,
        "gtm.userAgent": navigator.userAgent,
        "gtm.isMobile": window.innerWidth < 768,
        "gtm.timestamp": Date.now(),
        "gtm.formData": {
            nome: nome,
            empresa: empresa,
            telefone: telefone,
            email: email
        }
    });
});

// Evento de visualização de página
document.addEventListener("DOMContentLoaded", function () {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "page_view",
        "gtm.pageTitle": document.title,
        "gtm.pageUrl": window.location.href,
        "gtm.pagePath": window.location.pathname,
        "gtm.pageHost": window.location.hostname,
        "gtm.referrer": document.referrer,
        "gtm.platform": window.innerWidth < 768 ? "mobile" : "desktop",
        "gtm.userAgent": navigator.userAgent,
        "gtm.timestamp": new Date().getTime()
    });
});

/*
// Rastrear cliques em <a>, <button>, <input type="button"> e <input type="submit">
document.addEventListener("click", function (event) {
    let target = event.target;

    while (target && target !== document) {
        if (
            target.tagName === "A" ||
            target.tagName === "BUTTON" ||
            (target.tagName === "INPUT" && (target.type === "button" || target.type === "submit"))
        ) {
            window.dataLayer.push({
                event: "click",
                event_category: "Interação",
                event_action: "click",
                event_label: target.innerText || target.value || target.href || null,
                element_tag: target.tagName,
                element_id: target.id || null,
                element_classes: target.className || null,
                timestamp: Date.now(),
                url: window.location.href,
                pathname: window.location.pathname,
                host: window.location.host,
                referrer: document.referrer,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                ua: navigator.userAgent,
                platform: navigator.platform,
                language: navigator.language,
                country: navigator.language.slice(-2).toLowerCase(),
                isMobile: window.innerWidth < 768,
            });
            break;
        }
        target = target.parentNode;
    }
});

// Rastrear envio de formulário + dados preenchidos
document.addEventListener("submit", function (event) {
    const form = event.target;

    // Captura todos os campos do formulário dinamicamente
    // const formData = new FormData(form);
    // const form_data = Object.fromEntries(formData.entries());
    
    
    // Captura os campos mais comuns
    const nome = form.querySelector("#nome")?.value || null;
    const empresa = form.querySelector("#empresa")?.value || null;
    const telefone = form.querySelector("#telefone")?.value || null;
    const email = form.querySelector("#email")?.value || null;

    window.dataLayer.push({
        event: "form_submit",
        event_category: "Formulário",
        event_action: "submit",
        event_label: form.id || form.className || null,
        element_id: form.id || null,
        element_classes: form.className || null,
        form_action: form.action || null,
        timestamp: Date.now(),
        url: window.location.href,
        pathname: window.location.pathname,
        host: window.location.host,
        referrer: document.referrer,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        ua: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        country: navigator.language.slice(-2).toLowerCase(),
        isMobile: window.innerWidth < 768,

        form_data: {
            nome: nome,
            empresa: empresa,
            telefone: telefone,
            email: email
        }
    });
}); 

document.addEventListener("DOMContentLoaded", function() {
    console.log("Entrei no evento de pageview");

    // Função para detectar se é mobile ou desktop
    function getPlatform() {
        const isMobile = window.innerWidth < 768; // Largura da tela abaixo de 768px (ajustável)
        if (isMobile) {
            return "mobile";
        } else {
            return "desktop";
        }
    }

    // Empurrando o evento de pageview no dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "pageview",
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_hostname: window.location.hostname,
        page_referrer: document.referrer,
        platform: getPlatform(), // Vai retornar 'mobile' ou 'desktop'
        user_agent: navigator.userAgent,
        timestamp: new Date().getTime() // Hora da visualização
    });

    console.log("Saí do evento de pageview");
}); */
