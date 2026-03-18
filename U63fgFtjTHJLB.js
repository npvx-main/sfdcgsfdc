// zenith.js - Easter Egg: whoisadmin
let zenithKeysPressed = '';
const zenithSecretCode = 'whoisadmin';

document.addEventListener('keydown', (e) => {
    // Ignorar si el usuario está escribiendo en un input o textarea
    const tag = e.target.tagName.toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;

    zenithKeysPressed += e.key.toLowerCase();
    
    if (zenithKeysPressed.length > zenithSecretCode.length) {
        zenithKeysPressed = zenithKeysPressed.slice(-zenithSecretCode.length);
    }

    if (zenithKeysPressed === zenithSecretCode) {
        showZenithPopup();
        zenithKeysPressed = ''; 
    }
});

function showZenithPopup() {
    if (document.getElementById('zenith-popup')) return;

    const overlay = document.createElement('div');
    overlay.id = 'zenith-popup';
    // Estilos 100% independientes de la página, fondo verde jade
    overlay.style.cssText = `
        position: fixed; inset: 0; background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(8px);
        z-index: 2147483647; display: flex; align-items: center; justify-content: center;
        opacity: 0; transition: opacity 0.5s ease;
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    `;

    const card = document.createElement('div');
    // Fondo verde jade brillante
    card.style.cssText = `
        background: linear-gradient(145deg, #00A36C 0%, #007A4B 100%);
        border: 2px solid rgba(255, 255, 255, 0.2); 
        border-radius: 28px; 
        padding: 50px 40px; 
        text-align: center;
        max-width: 650px; 
        width: 90%; 
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        transform: translateY(30px) scale(0.95); 
        transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        position: relative;
        color: #ffffff;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    closeBtn.style.cssText = `
        position: absolute; top: 20px; right: 20px; background: transparent; border: none;
        color: rgba(255, 255, 255, 0.7); cursor: pointer; transition: all 0.3s;
        display: flex; align-items: center; justify-content: center; padding: 5px;
    `;
    closeBtn.onmouseover = () => { closeBtn.style.color = '#fff'; closeBtn.style.transform = 'scale(1.1)'; };
    closeBtn.onmouseout = () => { closeBtn.style.color = 'rgba(255,255,255,0.7)'; closeBtn.style.transform = 'scale(1)'; };
    closeBtn.onclick = () => {
        overlay.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        setTimeout(() => document.body.removeChild(overlay), 500);
    };

    const icon = document.createElement('div');
    icon.innerHTML = '<svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>';
    icon.style.cssText = `
        width: 90px; height: 90px; background: rgba(255, 255, 255, 0.15); border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%; display: flex; align-items: center; justify-content: center;
        color: #ffffff; margin: 0 auto 25px auto;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    `;

    const title = document.createElement('h2');
    title.innerText = 'Zenith Privacy';
    title.style.cssText = `
        margin: 0 0 10px 0; 
        font-size: 2.5rem; 
        font-weight: 800; 
        letter-spacing: -0.5px;
        text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    `;

    const subtitle = document.createElement('p');
    subtitle.innerText = 'Creador original y desarrollador principal de esta plataforma web. Todos los derechos reservados.';
    subtitle.style.cssText = `
        color: rgba(255, 255, 255, 0.9); 
        font-size: 1.15rem; 
        margin: 0 auto 40px auto; 
        font-weight: 500;
        max-width: 80%;
        line-height: 1.6;
    `;

    const linksContainer = document.createElement('div');
    linksContainer.style.cssText = 'display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;';

    const createLink = (svgIcon, url, label) => {
        const link = document.createElement('a');
        link.href = url; link.target = '_blank'; link.title = label;
        link.innerHTML = svgIcon;
        link.style.cssText = `
            width: 60px; height: 60px; border-radius: 16px; background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2); display: flex; align-items: center; justify-content: center;
            color: #ffffff; text-decoration: none; transition: all 0.3s;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        `;
        link.onmouseover = () => { 
            link.style.background = 'rgba(255, 255, 255, 0.25)'; 
            link.style.transform = 'translateY(-5px)'; 
            link.style.boxShadow = '0 12px 20px rgba(0,0,0,0.2)';
            link.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        };
        link.onmouseout = () => { 
            link.style.background = 'rgba(255, 255, 255, 0.1)'; 
            link.style.transform = 'translateY(0)'; 
            link.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
            link.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        };
        return link;
    };

    // SVGs puros para no depender de iconos de la plantilla
    const githubSvg = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>';
    const xSvg = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>';
    const lnSvg = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>';
    const webSvg = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>';

    linksContainer.appendChild(createLink(githubSvg, 'https://github.com/ZenithPrivacy', 'GitHub'));
    linksContainer.appendChild(createLink(xSvg, 'https://x.com/ZenithPrivacy', 'X / Twitter'));
    linksContainer.appendChild(createLink(lnSvg, 'https://linkedin.com/in/ZenithPrivacy', 'LinkedIn'));
    linksContainer.appendChild(createLink(webSvg, 'https://zenithprivacy.com', 'Sitio Web'));

    card.append(closeBtn, icon, title, subtitle, linksContainer);
    overlay.appendChild(card);
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
        overlay.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
    });
}
