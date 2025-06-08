import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ConfirmationPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">¡Pedido Confirmado!</h1>
          <p className="text-gray-600 mb-6">
            Gracias por tu compra. Hemos recibido tu pedido y comenzaremos a prepararlo de inmediato. Recibirás un email
            de confirmación con los detalles de tu pedido y el seguimiento de la entrega.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">Tiempo estimado de entrega: 2-4 horas</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-green-600 hover:bg-green-700">Volver al Inicio</Button>
              </Link>
              <Link href="/productos">
                <Button variant="outline">Seguir Comprando</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
