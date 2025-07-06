
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transformamos tu negocio con una web rápida y soporte 24/7. Vende más sin esfuerzo." cta1="Empieza Ahora" />
<How step1Title="Contáctanos" step1Desc="Habla sobre tu negocio y necesidades." step2Title="Diseño Expreso" step2Desc="Creamos tu web en solo 24 horas." step3Title="Venta Digital" step3Desc="Empieza a vender online con soporte 24/7." />
<Aboutus headline="WebGo: Digitaliza tus ventas ahora" subheadline="Transformamos recomendaciones en ventas online fácilmente, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Gestión Completa" beneficio1="Digitaliza sin esfuerzo ni tiempo perdido." beneficiotitulo2="Resultados Rápidos" beneficio2="Convierte recomendaciones en ventas digitales." />
<Services heading="Aumenta Tus Ventas en 24 Horas" description="WebGo crea tu tienda online rápida y eficientemente, sin complicaciones para ti." services={[{"name":"Diseño Express","icon":"rocket","description":"Web de ventas lista en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Ayuda continua para tu tranquilidad."},{"name":"SEO Optimización","icon":"search","description":"Haz que te encuentren fácil online."},{"name":"Gestión de Contenido","icon":"edit","description":"Mantén tu web siempre actualizada."},{"name":"Integración Social","icon":"share-alt","description":"Conecta tus redes sociales rápidamente."},{"name":"Analítica Avanzada","icon":"chart-line","description":"Comprende y mejora tus ventas."}]} />
<BeforeAndAfter subheadline="Transformaciones digitales que impulsan tu éxito y redefinen tu marca." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio si solo vendo por recomendación?","respuesta":"WebGo crea un sitio web optimizado para mostrar tus productos o servicios online, atrayendo nuevos clientes potenciales más allá de las recomendaciones personales."},{"pregunta":"¿Cuáles son los beneficios de tener una presencia digital con WebGo?","respuesta":"Con WebGo, tendrás un sitio web que trabaja 24/7 por ti, capturando clientes nuevos y aumentando tus ventas sin que tengas que dedicar tiempo extra."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo puede WebGo ayudarme?","respuesta":"WebGo se encarga de todo el mantenimiento y gestión de tu sitio web, permitiéndote enfocarte en lo que haces mejor: manejar tu negocio."},{"pregunta":"¿Qué diferencia a WebGo de otras empresas de digitalización?","respuesta":"WebGo ofrece un servicio completo y personalizado, entendiendo las necesidades únicas de los pequeños negocios en Santiago, para maximizar tus ventas online."},{"pregunta":"¿Cómo garantiza WebGo que mi negocio tendrá más ventas online?","respuesta":"WebGo utiliza estrategias probadas de optimización SEO y marketing digital para aumentar la visibilidad de tu negocio, atrayendo clientes interesados a tu sitio web."}]} />
<BookAppointment 
                      heading="Digitaliza Tu Negocio en Santiago" 
                      description="Transforma tus recomendaciones en ventas online con WebGo y olvídate del estrés de gestionar un sitio web. Comienza ahora y conquista el mercado digital."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
