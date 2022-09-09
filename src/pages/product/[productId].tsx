import { useRouter } from 'next/router'

const ProductId: React.FC = () => {
  const path = useRouter()

  return <h1>{JSON.stringify(path.query.productId)}</h1>
}

export default ProductId
