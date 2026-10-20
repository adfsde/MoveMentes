# 📋 GUÍA DE INTEGRACIONES - MOVEMENTES

## ✅ ESTADO: Código 100% listo para integrar

Todo el código necesario está en index.html. Solo necesitas:

---

## 1️⃣ GOOGLE ANALYTICS (5 min)

**Paso 1:** Ir a https://analytics.google.com
**Paso 2:** Crear propiedad "MoveMentes" 
**Paso 3:** Copiar tu ID (se ve así: G-XXXXXXXXXX)
**Paso 4:** En index.html, busca "G-XXXXXXXXXX" (aparece 2 veces) y reemplaza con tu ID real

```html
<!-- BUSCA Y REEMPLAZA ESTOS VALORES: -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
gtag('config', 'G-XXXXXXXXXX');
```

---

## 2️⃣ FACEBOOK PIXEL (5 min)

**Paso 1:** Ir a https://business.facebook.com
**Paso 2:** Crear Pixel (Eventos → Gestión de Pixels)
**Paso 3:** Copiar tu Pixel ID (números largos: 123456789012345)
**Paso 4:** En index.html, busca "XXXXXXXXXXXXXXXXX" (aparece 3 veces) y reemplaza

```html
<!-- BUSCA Y REEMPLAZA ESTOS VALORES: -->
fbq('init', 'XXXXXXXXXXXXXXXXX');
<!-- Y también aquí: -->
<noscript><img ... src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXXXX
```

---

## 3️⃣ MAILERLITE (10 min)

**Opción A: Automático (recomendado)**
1. Ir a https://mailerlite.com (gratis 250 suscriptores)
2. Registrarse con angelgarcialema@gmail.com
3. Crear Lista "MoveMentes"
4. Ir a Integrations → Web Forms
5. Copiar el código embed
6. Agregar en index.html sección pop-up

**Opción B: Manual (yo te lo agrego)**
- Solo dame tu MailerLite Form ID
- Yo lo integro en el código

**RESULTADO:** Pop-up automático captura emails → van a MailerLite

---

## 4️⃣ CALENDLY (5 min)

**Paso 1:** Ir a https://calendly.com
**Paso 2:** Registrarse (gratis)
**Paso 3:** Crear calendario "Sesión Gratis" (30 min)
**Paso 4:** Copiar tu URL (se ve así: https://calendly.com/angelgarcia/30min)
**Paso 5:** En index.html, sección contacto, cambiar:

```html
<!-- DE ESTO: -->
<div style="display: none;" id="calendlySection">
    <iframe src="https://calendly.com/angelgarcia/30min?background_color=1a5c3a&text_color=ffffff"

<!-- A ESTO (quitar "display: none"): -->
<div style="display: block;" id="calendlySection">
```

---

## 🎯 ORDEN RECOMENDADO:

1. Google Analytics (5 min) - para medir tráfico
2. Facebook Pixel (5 min) - para retargeting
3. MailerLite (10 min) - para capturar leads
4. Calendly (5 min) - para reservas

**Tiempo total: 25 min**

---

## 🚀 DESPUÉS DE INTEGRAR:

```
✅ Pop-up automático captura emails
✅ Leads van a MailerLite automáticamente
✅ Calendly reserva sesiones directamente
✅ Google Analytics mide conversiones
✅ Facebook Pixel retargeta a visitantes
```

---

## ⚡ QUICK SETUP (Si tienes prisa):

1. Copia estos 4 valores cuando los tengas:
   - Google Analytics ID: G-___________
   - Facebook Pixel ID: ______________
   - MailerLite Form: ________________
   - Calendly URL: https://calendly.com/________

2. Envíame los 4 valores
3. Yo actualizo todo en 5 minutos
4. ¡LIVE con automatización completa!

---

## 📞 SOPORTE:

Si algo no funciona:
- Google Analytics: Ver en Inicio → Tráfico en tiempo real
- Facebook Pixel: Ver en eventos en Business Manager
- MailerLite: Ver suscriptores en Lista
- Calendly: Ver reservas en calendario

¡Listo! Cualquier problema, avísame. 🚀
