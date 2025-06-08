"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos. Te responderemos pronto.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  const faqs = [
    {
      question: "¿Hacen entregas a domicilio?",
      answer:
        "Sí, realizamos entregas a domicilio en toda la ciudad. Para pedidos realizados antes de las 2:00 PM, podemos entregar el mismo día.",
    },
    {
      question: "¿Puedo personalizar mi arreglo?",
      answer:
        "¡Por supuesto! Nuestros floristas pueden crear arreglos personalizados según tus preferencias de colores, flores y ocasión.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos tarjetas de crédito y débito, transferencias bancarias y pagos en efectivo contra entrega.",
    },
    {
      question: "¿Tienen garantía de frescura?",
      answer:
        "Garantizamos la frescura de nuestras flores por al menos 5 días. Si no estás satisfecho, te reemplazamos el producto sin costo.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Hero Section - Completamente responsivo */}
        <section className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 px-2">
            Contáctanos
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            ¿Tienes alguna pregunta o necesitas ayuda con tu pedido? Estamos aquí para ayudarte. Contáctanos y te
            responderemos lo antes posible.
          </p>
        </section>

        {/* Layout principal - Stack en móvil, grid en desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Formulario de Contacto */}
          <div className="order-2 lg:order-1">
            <Card className="shadow-lg">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl text-green-800">Envíanos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Grid responsivo para nombre y teléfono */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 h-10 sm:h-11"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 h-10 sm:h-11"
                        placeholder="(55) 1234-5678"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 h-10 sm:h-11"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Asunto *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-1 h-10 sm:h-11"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">
                      Mensaje *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[100px] sm:min-h-[120px] resize-none"
                      placeholder="Cuéntanos más detalles sobre tu consulta..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 h-11 sm:h-12 text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Información de Contacto */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <Card className="shadow-lg">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl text-green-800">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 space-y-4 sm:space-y-6">
                {/* Dirección */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Dirección</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Av. de las Flores 123
                      <br />
                      Colonia Jardín, Ciudad de México
                      <br />
                      CP 01234
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Teléfono</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600 text-sm sm:text-base">
                        <a href="tel:+525555123456" className="hover:text-green-600 transition-colors">
                          +52 55 5512-3456
                        </a>
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        <a href="tel:+525555654321" className="hover:text-green-600 transition-colors">
                          +52 55 5565-4321
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600 text-sm sm:text-base">
                        <a
                          href="mailto:info@florashop.com"
                          className="hover:text-green-600 transition-colors break-all"
                        >
                          info@florashop.com
                        </a>
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        <a
                          href="mailto:ventas@florashop.com"
                          className="hover:text-green-600 transition-colors break-all"
                        >
                          ventas@florashop.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Horarios */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Horarios de Atención</h3>
                    <div className="text-gray-600 text-sm sm:text-base space-y-1">
                      <p>Lunes a Viernes: 8:00 AM - 7:00 PM</p>
                      <p>Sábados: 9:00 AM - 6:00 PM</p>
                      <p>Domingos: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Servicios Especiales */}
            <Card className="shadow-lg">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl text-green-800">Servicios Especiales</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Entrega el mismo día",
                    "Arreglos personalizados",
                    "Eventos y bodas",
                    "Suscripción de flores",
                    "Consultoría en jardinería",
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm sm:text-base">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Preguntas Frecuentes - Accordion responsivo */}
        <section className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-md">
                <Collapsible open={openFaq === index} onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors p-4 sm:p-6">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base sm:text-lg text-green-800 text-left pr-4">
                          {faq.question}
                        </CardTitle>
                        <ChevronDown
                          className={`h-5 w-5 text-green-600 transition-transform flex-shrink-0 ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </section>

        {/* Ubicación */}
        <section className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Nuestra Ubicación</h2>
          <Card className="shadow-lg">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 h-48 sm:h-56 md:h-64 flex items-center justify-center">
                <div className="text-center px-4">
                  <MapPin className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-600 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">FloraShop</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-1">Av. de las Flores 123, Colonia Jardín</p>
                  <p className="text-gray-600 text-sm:text-base mb-4">Ciudad de México, CP 01234</p>
                  <Button className="bg-green-600 hover:bg-green-700 text-sm sm:text-base px-4 sm:px-6" asChild>
                    <a
                      href="https://maps.google.com/?q=Av.+de+las+Flores+123,+Ciudad+de+México"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
