"use client"

import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Product } from "@/contexts/cart-context"
import { useCart } from "@/contexts/cart-context"
import { toast } from "@/hooks/use-toast"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product })
    toast({
      title: "Producto agregado",
      description: `${product.name} se agregó al carrito`,
    })
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <CardContent className="p-0 flex-1">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Badge de precio en móvil */}
          <div className="absolute top-2 right-2 sm:hidden bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <span className="text-sm font-bold text-green-600">${product.price}</span>
          </div>
        </div>
        <div className="p-3 sm:p-4 flex-1 flex flex-col">
          <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-2 line-clamp-2 flex-1">{product.name}</h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2 sm:line-clamp-3">{product.description}</p>
          {/* Precio visible en desktop */}
          <p className="hidden sm:block text-xl md:text-2xl font-bold text-green-600">${product.price}</p>
        </div>
      </CardContent>
      <CardFooter className="p-3 sm:p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-green-600 hover:bg-green-700 h-9 sm:h-10 text-sm sm:text-base"
        >
          <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
          <span className="hidden sm:inline">Agregar al Carrito</span>
          <span className="sm:hidden">Agregar</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
