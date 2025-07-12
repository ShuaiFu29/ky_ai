import { Outlet, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Products = () => {
  const { productId } = useParams()
  return (
    <>
      <h1>Products</h1>
      {/* 二级路由的容器 */}
      <Outlet />
      <nav>
        <Link to='/products/:productId'>Product Details {productId}</Link>
        <Link to='/products/new'>New Product</Link>
      </nav>
    </>
  )
}
export default Products