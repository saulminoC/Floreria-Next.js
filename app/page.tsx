import { ProductCard } from "@/components/product-card"
import { products } from "@/data/products"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  const featuredProducts = products.slice(0, 6)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Hero Section - Completamente responsivo */}
        <section className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Flores Frescas para
            <span className="text-green-600 block mt-2">Cada Ocasión</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            Descubre nuestra colección de ramos, plantas y arreglos florales únicos, perfectos para expresar tus
            sentimientos más especiales.
          </p>
          <Link href="/productos">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto"
            >
              Ver Todos los Productos
            </Button>
          </Link>
        </section>

        {/* Featured Products - Grid responsivo */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-12 text-center">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Features - Grid responsivo */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          <div className="text-center p-4 sm:p-6">
            <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">🚚</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Envío Rápido</h3>
            <p className="text-gray-600 text-sm sm:text-base">Entrega el mismo día en la ciudad</p>
          </div>
          <div className="text-center p-4 sm:p-6">
            <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">🌸</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Flores Frescas</h3>
            <p className="text-gray-600 text-sm sm:text-base">Directamente del cultivador</p>
          </div>
          <div className="text-center p-4 sm:p-6 md:col-span-1 col-span-1">
            <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">💝</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Arreglos Únicos</h3>
            <p className="text-gray-600 text-sm sm:text-base">Diseños personalizados</p>
          </div>
        </section>
      </div>
    </div>
  )
}
