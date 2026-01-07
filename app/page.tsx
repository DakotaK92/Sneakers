import ProductGallery from "../components/ProductGallery"
import ProductInfo from "../components/ProductInfo"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <ProductGallery />
        </div>

        {/* Right */}
        <div>
          <ProductInfo />
        </div>
      </section>
    </main>
  )
}